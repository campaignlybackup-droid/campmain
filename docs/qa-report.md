# QA report

Run: 11 November 2026, on the production build (`npm run build`, no env vars set, `site.config.ts` all `null`).
Re-run with `npm run build`, `npm run qa` and `node scripts/qa-browser.cjs <baseUrl>`.

## Summary

| # | Gate | Result |
|---|---|---|
| 1 | `tsc --noEmit`, ESLint, `next build` with zero warnings | **Pass** |
| 2 | Crawl of `out/`: links, images, orphans, duplicates, canonicals, one H1 | **Pass** |
| 3 | JSON-LD validation | **Pass** |
| 4 | Lighthouse mobile on Home, a service page and a blog post | **Pass**: 100 / 100 / 100 / 100 on all three |
| 5 | Every page in a headless browser: console errors, failed requests | **Pass** |
| 6 | No placeholder text, lorem ipsum, "YourBrand" or `null` | **Pass** |
| 7 | No client name anywhere in `out/` | **Blocked: needs your client name list** (see below) |

Gate 7 is **not passed**. The site contains no client names that I know of, because I never received any and no case studies or testimonials exist. But I cannot prove that without the list. Put one client name per line in `.qa/client-names.txt` (this folder is git-ignored, so the names never enter the repo) and run `npm run qa`.

## 1. Build hygiene

| Check | Result |
|---|---|
| `tsc --noEmit` (strict, `noUncheckedIndexedAccess`) | 0 errors |
| `eslint .` (Next core web vitals and TypeScript rules) | 0 errors, 0 warnings |
| `next build` | Exit 0, 0 warnings, 46 HTML pages, 46 OG images |
| Postbuild | Removed the case-study routes (no case studies yet) so Apache serves a real 404 |

The ESLint config has one scoped override, for `scripts/` only: it allows ternary statements and CommonJS `require` in the QA scripts. Site code uses the full rule set.

## 2. Crawl (`scripts/qa.mjs`)

| Check | Result |
|---|---|
| Internal links | All resolve across 46 pages |
| Trailing slashes | Every internal page link ends in `/` |
| Images | All exist, including 46 OG images; every `<img>` has `alt` |
| Orphan pages | None; every page has an inbound link |
| Click depth | Every page within 2 clicks of Home (limit 3) |
| Titles and descriptions | All unique; titles at most 59 characters, descriptions at most 149 |
| Canonicals | Self-referencing, absolute, `https://campaignlymedia.com`, on all 46 pages |
| H1 | Exactly one on every page |
| Breadcrumbs | Visible on every inner page |
| Sitemap | 45 indexable URLs, each with `lastmod`; noindex pages excluded (the Automation category has 2 posts, so it is `noindex` until it reaches 3) |
| robots.txt | Allows GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended and Bingbot; references the sitemap |

## 3. Structured data

- One JSON-LD `@graph` per page, generated from typed helpers in `lib/schema.ts`.
- Types in the build: Organization (46), BreadcrumbList (45), WebPage (37), FAQPage (21), Article (12), Service (9), CollectionPage (7), WebSite (1), AboutPage (1), ContactPage (1).
- **schema.org vocabulary:** every graph is type-checked against `schema-dts` 2.1.0, Google's TypeScript definitions of schema.org, so unknown types or properties fail the build of the check. I verified the checker catches errors by injecting an invalid property and an invalid type; both were rejected.
- **Google rich result requirements:** Organization has name, alternateName and url. BreadcrumbList positions are sequential with absolute URLs. Every FAQ question and answer appears verbatim in the visible page. Every Article has headline, datePublished, dateModified, author, image and publisher, and its headline is visible.
- No Review or AggregateRating anywhere.
- `Person` schema is not emitted. Blog posts are authored by the organisation, as you chose, so there is no person to describe. It switches on automatically when `author` is set in config. The founder `Person` on About appears only when the founder block is enabled.
- **Limitation:** schema.org and Google's Rich Results Test could not be reached from the build environment, because the network blocks them. Run the live URLs through [Google's Rich Results Test](https://search.google.com/test/rich-results) and the [Schema Markup Validator](https://validator.schema.org/) after launch (listed in `docs/post-launch.md`).

## 4. Lighthouse (mobile, Lighthouse 13.6)

Served locally with Brotli and the `.htaccess` cache headers to approximate Hostinger.

| Page | Performance | Accessibility | Best Practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| `/` | 100 | 100 | 100 | 100 | 0.9 s | 0 | 90 ms |
| `/services/meta-ads/` | 100 | 100 | 100 | 100 | 1.0 s | 0 | 90 ms |
| `/blog/meta-lead-ads-low-quality-leads/` | 100 | 100 | 100 | 100 | 0.9 s | 0 | 50 ms |

- **LCP** is under 2.0 s and **CLS** under 0.05 on all three.
- **INP** cannot be measured in a lab run. Total blocking time (50 to 90 ms) is the lab proxy. Check real INP in Search Console's Core Web Vitals report once field data accumulates.
- **JavaScript budget (Home first load):** 118.2 KB Brotli and 137.9 KB gzip. Against the 120 KB budget measured as Brotli, as agreed in Phase 2, this passes. Nearly all of it is the React and Next.js runtime; site code is about 2 KB.

## 5. Headless browser

- All 46 pages loaded in Chromium: **0 console errors, 0 failed requests**.
- **Accessibility (axe-core, WCAG 2.0/2.1/2.2 A and AA plus best practices):** 46 pages at 360px and 1280px, with every FAQ expanded: **0 violations**. Fixed during QA: scrollable tables are now keyboard-focusable labelled regions, and two blog tables gained header text.
- **Keyboard:** skip link is the first focusable element; desktop menus open with Enter and close with Escape, returning focus; the mobile menu works the same way.
- **Forms and tracking**, tested on a separate build with a mock Apps Script endpoint and dummy GA4 and Pixel IDs:

| Check | Result |
|---|---|
| Empty submit shows an error summary listing all 7 fields, moves focus to it, sets `aria-invalid` | Pass |
| Invalid email rejected with a clear message | Pass |
| Valid submit shows the success state with no page reload | Pass |
| Payload contains every field, page URL and UTM values | Pass (Apply: 7 fields; Review: 5 fields) |
| Honeypot-filled and under-3-second submissions are dropped but show success | Pass (only 2 of 4 submissions reached the endpoint) |
| Consent banner on first visit; no GA4 or Pixel request before consent | Pass |
| GA4 and Pixel load after Accept; choice remembered across pages | Pass |
| `generate_lead` and `cta_click` reach GA4 (dataLayer) and the Pixel (Lead, trackCustom) | Pass |
| `whatsapp_click` | Not exercised: no WhatsApp number in config. It uses the same click handler as `cta_click`. |

## 6. Placeholder text

No lorem ipsum, "YourBrand", `null`, `undefined`, `NaN`, TODO or "placeholder" in visible text, attributes, meta tags, JSON-LD, llms.txt, robots.txt or sitemap.xml. Sections that depend on `null` config values do not render, for example contact details, stats, testimonials, founder, the WhatsApp button and the consent banner.

## 7. Client names

Blocked, as described at the top. The checker searches file names and the contents of every file in `out/`, case-insensitively, once the list exists.

## Known limitations and items for you

1. **Forms do not render** until `NEXT_PUBLIC_FORM_ENDPOINT` is set (or an email is added to config as a fallback). The Apply and Free review pages currently show their explanatory content only. **This blocks launch.**
2. The **redirect map** is empty until you send the old URLs (`docs/redirects.md`).
3. **Content claims to confirm** before launch. These describe how Campaignly operates and are written as fact on the site:
   - "Ad accounts, pixels and data stay in your name"; "you can remove our access at any time" (Home, Meta ads, FAQs)
   - "We never compete on price" (Home, About)
   - Billing currencies: INR with GST, USD, CAD, AED with VAT where applicable (Home markets table, location pages)
   - India: Monday to Friday IST hours, a shared WhatsApp group, weekly notes and a monthly review
   - USA: calls in the US morning; work progressed overnight; weekly written updates and a monthly call
   - "Native speakers" write and review regional-language and Arabic creative
   - "A limited number of businesses at a time" (Apply); "a senior specialist's written assessment" (Free review)
   - Scope tables on each service page (what is included and not included)
   - Microsoft Ads, LinkedIn Ads, Snapchat and TikTok as platforms you manage
4. **Legal pages** are drafted from how the site actually processes data. They should be reviewed by someone qualified for India's DPDP Act and for any other market you serve.
