# Deploying to Hostinger

The site is a static export: plain HTML, CSS, JS and images in `out/`. Hostinger serves it from `public_html` with no Node.js required.

## 1. Before the first deploy

1. Fill in `content/site.config.ts` with every verified value (see `docs/post-launch.md` for the list).
2. Set up the form backend (README, "Forms: Google Apps Script setup") and note the web app URL.
3. Add any old-site redirects to `public/.htaccess` (see `docs/redirects.md`).

## 2. Build

On your computer (Node.js 20.9 or later):

```bash
npm install
```

```bash
cp .env.example .env.local
```

Edit `.env.local` and set at least `NEXT_PUBLIC_FORM_ENDPOINT`. Add `NEXT_PUBLIC_GA4_ID` and `NEXT_PUBLIC_META_PIXEL_ID` if you use them.

```bash
npm run build
```

```bash
npm run qa
```

`npm run build` creates `out/`. `npm run qa` must show no FAIL lines before you upload (see `docs/qa-report.md`).

`out/` contains a hidden `.htaccess` file. Make sure your upload method includes hidden files.

## 3. Upload to `public_html`

**Option A: File Manager (simplest)**

1. On your computer, compress the **contents** of `out/` into a zip. Select everything inside `out/`, including `.htaccess`, not the `out` folder itself.
2. In hPanel, open **Websites → Manage → File Manager** and go to `public_html`.
3. Delete the old site's files. Keep `.well-known` if it exists (used for SSL validation).
4. Upload the zip, right-click it, choose **Extract** into `public_html`, then delete the zip.
5. Confirm `public_html/index.html`, `public_html/.htaccess` and `public_html/_next/` exist. Enable "Show hidden files" in File Manager settings to see `.htaccess`.

**Option B: FTP / SFTP**

1. In hPanel, open **Files → FTP Accounts** for host, username and password.
2. In an FTP client such as FileZilla, enable "Show hidden files".
3. Upload the contents of `out/` into `public_html`, replacing existing files. Remove old files that are no longer part of the site.

**For each redeploy:** rebuild, run QA, and upload again. Delete `public_html/_next/` before uploading so old hashed files do not accumulate.

## 4. `.htaccess`

The included `.htaccess` (from `public/.htaccess`):

- forces HTTPS and redirects `www.campaignlymedia.com` to `campaignlymedia.com` with a single 301
- adds trailing slashes to folder URLs and redirects `/index.html` to `/`
- serves `404.html` for missing pages
- caches `/_next/static/` (hashed files) for one year and revalidates HTML on every request
- enables Brotli or gzip compression and basic security headers
- holds your old-site 301 redirects between `# BEGIN REDIRECTS` and `# END REDIRECTS`

Hostinger web hosting runs LiteSpeed, which reads Apache `.htaccess` rules.

## 5. SSL

1. In hPanel, open **Security → SSL** and confirm a certificate is **Active** for `campaignlymedia.com` and `www.campaignlymedia.com`. Install the free certificate if it is missing.
2. Do not turn on Hostinger's "Force HTTPS" toggle as well; `.htaccess` already does this, and doing both can create redirect chains.
3. The `.htaccess` sends an HSTS header for one year. Only keep it once HTTPS works on both hosts.

## 6. DNS check

If the domain is registered elsewhere, point it to Hostinger using the values hPanel shows under **Domains → DNS / Nameservers**: either Hostinger's nameservers, or an `A` record for `@` and a `CNAME` for `www`.

After changes propagate (up to 24 hours):

```bash
dig +short campaignlymedia.com
```

```bash
dig +short www.campaignlymedia.com
```

Both should resolve to Hostinger. Then check redirects:

```bash
curl -sI http://www.campaignlymedia.com/about | head -5
```

Expect a single `301` to `https://campaignlymedia.com/about/`.

Keep any existing `MX` and `TXT` records (email, Google Workspace, domain verification) when changing DNS.

## 7. Smoke test after every deploy

- [ ] `https://campaignlymedia.com/` loads over HTTPS with no browser warnings
- [ ] `https://www.campaignlymedia.com/` and `http://` versions redirect to `https://campaignlymedia.com/`
- [ ] `https://campaignlymedia.com/services` redirects to `/services/`
- [ ] A made-up URL shows the custom 404 page with HTTP status 404
- [ ] `/sitemap.xml`, `/robots.txt` and `/llms.txt` load
- [ ] Submit both forms; confirm the Sheet row and the email
- [ ] With GA4 configured: accept cookies, then check GA4 **Realtime** for `page_view` and `generate_lead`
- [ ] Each old URL in `docs/redirects.md` returns one 301 to its new page
