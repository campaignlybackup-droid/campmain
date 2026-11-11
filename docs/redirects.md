# Redirect map (old site → new site)

Status: **waiting for the old URL list.** The old campaignlymedia.com could not be crawled from the build environment, so no redirects are implemented yet.

## How to complete this

1. Export the old URLs from one of: the old `sitemap.xml`, Google Search Console (Pages report → export), or a crawl with Screaming Frog.
2. Fill in the table below. Map each old URL to the closest new page by meaning, not by homepage default.
3. Add one rule per row in `public/.htaccess` between `# BEGIN REDIRECTS` and `# END REDIRECTS`:

```apache
RewriteRule ^old-path/?$ /new-path/ [L,R=301]
```

4. Rebuild, deploy and test each old URL returns a single 301 to the new URL (no chains).

## Map

| Old URL | Old anchor / title | New URL | Status |
|---|---|---|---|
| *(to be supplied)* | | | |

## Rules

- 301 only, one hop, to the final URL with a trailing slash.
- Pages with no equivalent go to the closest hub (`/services/`, `/industries/`), not the homepage.
- Old URLs that contained client names are redirected without repeating the name anywhere on the new site.
