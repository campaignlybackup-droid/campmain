# campaignlymedia.com

Production website for Campaignly (Campaignly Media). Next.js App Router, TypeScript strict, Tailwind CSS, exported as static files for Hostinger.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies (Node 20.9 or later) |
| `npm run dev` | Local development server |
| `npm run build` | Static export to `out/`, then `scripts/postbuild.mjs` removes placeholder routes |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | ESLint |
| `npm run qa` | Crawl `out/` and run the quality gates, including the client-anonymity audit (see `docs/qa-report.md`) |

## Where things live

| Path | Purpose |
|---|---|
| `content/site.config.ts` | **Every business fact.** All `null` until verified; sections depending on a `null` value do not render. |
| `content/pages.ts` | Titles, descriptions, H1s and primary keywords for every core URL (from `docs/keyword-map.md`) |
| `content/services/`, `content/industries/`, `content/locations/` | Page content as typed data |
| `content/blog/*.mdx` | Blog posts with validated frontmatter (see `lib/blog.ts`) |
| `content/case-studies/` | Optional case study narratives; figures live in `site.config.ts` |
| `lib/schema.ts` | JSON-LD helpers (one `@graph` per page) |
| `public/.htaccess` | Hostinger rules: HTTPS, non-www, trailing slashes, caching, headers, 301 redirects |
| `scripts/apps-script/Code.gs` | Google Apps Script that receives form submissions |

## Environment variables

Copy `.env.example` to `.env.local` before building. All are optional; each feature stays off while its value is empty.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_FORM_ENDPOINT` | Apps Script web app URL. Without it (and without an email in config) the forms do not render. |
| `NEXT_PUBLIC_GA4_ID` | GA4 Measurement ID. Loads only after visitor consent. |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel ID. Loads only after visitor consent. |

The consent banner appears only when GA4 or the Pixel is configured.

## Forms: Google Apps Script setup

1. Create a Google Sheet for leads. Copy its ID from the URL (`https://docs.google.com/spreadsheets/d/<ID>/edit`).
2. Go to [script.google.com](https://script.google.com), create a new project, and replace the contents of `Code.gs` with `scripts/apps-script/Code.gs`.
3. In **Project Settings → Script properties**, add:
   - `SHEET_ID`: the Sheet ID from step 1
   - `NOTIFY_EMAIL`: the address that should receive lead emails
4. Click **Deploy → New deployment → Web app**. Set **Execute as: Me** and **Who has access: Anyone**. Authorise the requested permissions (Sheets, Gmail send, cache).
5. Copy the web app URL (ends in `/exec`). Open it in a browser: it should return `{"ok":true,"service":"campaignly-forms"}`.
6. Put the URL in `.env.local` as `NEXT_PUBLIC_FORM_ENDPOINT`, rebuild and redeploy.
7. Submit each form once on the live site and confirm a row appears in the correct tab and an email arrives.

Each form type gets its own tab, created on first submission, with columns: timestamp, form, every field, page URL and UTM/click IDs. When you change the script, use **Deploy → Manage deployments → Edit → New version** so the URL stays the same.

## Adding content

- **Blog post:** add `content/blog/<slug>.mdx` with the frontmatter used by existing posts. The build fails if a title is 60 characters or more, a description is 155 or more, the direct answer is outside 40 to 60 words, or the category is unknown.
- **Case study:** add an entry to `caseStudies` in `site.config.ts` (anonymised, every figure with its period), and optionally `content/case-studies/<slug>.mdx`. The hub and links appear automatically.
- **Stats:** add verified entries to `stats` in `site.config.ts`.

Deployment: see `docs/deploy-hostinger.md`.
