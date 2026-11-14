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
| 7 | No client name anywhere in `out/` | **Pass** (proper-noun audit; no client list needed) |

All seven gates pass.

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

Clients stay anonymous, so the check does not use a list of their names. Instead it audits every proper noun on the built site:

- It scans visible text, alt and aria labels, meta tags, JSON-LD values, `llms.txt` and every file name in `out/`.
- Ordinary English words are allowed automatically (checked against a 275,000-word dictionary).
- Every other capitalised term must be on the approved list in `scripts/qa-allowed-terms.txt`: 111 entries covering the brand, platforms and tool vendors, places, languages, festivals, regulators, currencies and marketing acronyms. Each is grouped and commented.
- **Result:** no unapproved proper nouns, so no company or person name other than Campaignly appears anywhere.
- **Sensitivity test:** I planted "Zylotronix Pvt Ltd" and "Priyanka Raghunathan" in a built page. The gate failed and named all five words, then passed again once they were removed.
- **Limitation:** a client whose name is made only of ordinary dictionary words (for example "Bright Path") would not be flagged by this audit. If that applies to any client, you can run the optional private check on your own computer: put names in `.qa/client-names.txt` (git-ignored, never shared) and run `npm run qa`.
- **Rule for the future:** never add a client name to `scripts/qa-allowed-terms.txt`. Anonymised case studies should use descriptions such as "a private university" or "a D2C eyewear brand", which pass automatically.

## Known limitations and items for you

1. **Forms do not render** until `NEXT_PUBLIC_FORM_ENDPOINT` is set (or an email is added to config as a fallback). The Apply page currently shows their explanatory content only. **This blocks launch.**
2. The **redirect map** is empty until you send the old URLs (`docs/redirects.md`).
3. **Content claims to confirm** before launch. These describe how Campaignly operates and are written as fact on the site:
   - "Ad accounts, pixels and data stay in your name"; "you can remove our access at any time" (Home, Meta ads, FAQs)
   - "We never compete on price" (Home, About)
   - Billing currencies: INR with GST, USD, CAD, AED with VAT where applicable (Home markets table, location pages)
   - India: Monday to Friday IST hours, a shared WhatsApp group, weekly notes and a monthly review
   - USA: calls in the US morning; work progressed overnight; weekly written updates and a monthly call
   - "Native speakers" write and review regional-language and Arabic creative
   - "A limited number of businesses at a time" (Apply)
   - Scope tables on each service page (what is included and not included)
   - Microsoft Ads, LinkedIn Ads, Snapchat and TikTok as platforms you manage
4. **Legal pages** are drafted from how the site actually processes data. They should be reviewed by someone qualified for India's DPDP Act and for any other market you serve.

## Update, 13 November 2026

- The free ad account review page and every link to it were removed at your request. Every page now ends with Apply to Partner, plus WhatsApp once a number is configured. The site has 45 pages.
- The header and footer show the Campaignly C symbol, and the favicons match your current site.
- Copy pass: removed about 50 "X, not Y" constructions, replaced question-style section headings with plain headings (FAQ sections keep their questions), and removed the question label above each page intro.
- Re-run on the new build: build and lint clean; crawl, JSON-LD, placeholder and client-name gates pass; 45 pages load with 0 errors; axe 0 violations at 360px and 1280px; Lighthouse mobile on Home 100 / 100 / 100 / 100, LCP 1.0 s.

## Update, 14 November 2026: visual redesign

Light theme with gold brand accents, floating glass header, gradient headlines, rounded card sections,
a CSS-only 3D hero dashboard, service illustrations, scroll reveals, pointer tilt and spotlight effects.
All motion is CSS plus one small client script (`components/Motion.tsx`) and switches off under
`prefers-reduced-motion`. No animation library, no images added beyond the existing logo.

- Typecheck, ESLint and build: clean, 45 pages
- QA gates 2, 3, 5, 6, 7: pass (`CA` and `C` added to approved terms for market codes and creative variant labels)
- axe-core: 45 pages x 2 widths, 0 violations
- Lighthouse (mobile): Home 99 / 100 / 100 / 100, LCP 1.1 s, CLS 0; Meta ads page 100 across, LCP 1.0 s

## Update, 14 November 2026: own identity, minimal homepage copy

Black-and-gold identity (no violet), dark hero with the kinetic tagline, bento services grid,
method rail, industry pills and compact market tiles. Homepage copy cut by roughly two thirds;
H1, title, description, schema, internal links and every inner page's direct answer, sections
and FAQs unchanged.

- QA gates 2, 3, 5, 6, 7: pass. axe: 45 pages x 2 widths, 0 violations.
- Lighthouse (mobile): Home 99 / 100 / 100 / 100 (one run 92 on TBT variance; two reruns 99), 260 KiB, LCP 1.1 s, CLS 0.
- Reference site measured the same way: 50 / 86 / 77 / 92, 14.7 MB, LCP 7.0 s, contrast, heading-order and image-alt audits failing.
