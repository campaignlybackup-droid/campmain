# Phase 2 review: design system, layout, Home, Meta ads

## Built
- Next.js 16.4.6 (App Router, static export, `trailingSlash: true`), TypeScript strict, Tailwind 4. No UI kit, no animation library.
- `content/site.config.ts`: every business field is typed and `null`, with a comment on each.
- `content/pages.ts`: one typed SEO registry for all 31 core URLs (titles, descriptions, H1s, primary keywords from the keyword map).
- `lib/schema.ts`: JSON-LD helpers producing one `@graph` per page (Organization, WebSite, WebPage, BreadcrumbList, Service, FAQPage). `ProfessionalService` is added only when a real address exists.
- Layout: skip link, sticky header with keyboard-operable menus (Escape closes and returns focus), footer driven by config, breadcrumbs.
- Pages: `/`, `/services/meta-ads/` and a custom 404.

## Checks run on the exported `out/`
| Check | Result |
|---|---|
| `tsc --noEmit`, ESLint, `next build` | Clean, no warnings |
| Lighthouse mobile, Home | Performance 100, Accessibility 100, Best Practices 96, SEO 100. LCP 1.2 s, CLS 0 |
| Lighthouse mobile, Meta ads | Performance 100, Accessibility 100, Best Practices 96, SEO 100. LCP 1.2 s, CLS 0 |
| Horizontal overflow at 360, 768, 1280, 1920 | None |
| Exactly one H1, canonical, title | Pass on both pages |
| Keyboard menus (desktop and mobile) | Pass |

Best Practices is 96 only because nav links point at pages that Phase 3 creates; those 404 for now and log to the console.

## Decision needed: the JavaScript budget
First-load JS is about **136 KB gzipped** (about **113 KB Brotli**) against a 120 KB gzip target. Nearly all of it is the framework itself: react-dom is about 72 KB and the Next.js router about 47 KB. Our own client code is about 2 KB. A webpack build is the same size. Meeting 120 KB gzip is not possible on Next.js App Router with React 19.

Options:
1. Keep the stack and measure the budget as Brotli (Hostinger LiteSpeed serves Brotli), or raise the gzip target to 140 KB. Lighthouse Performance is already 100. **Recommended.**
2. Keep 120 KB gzip and change the stack (e.g. Astro). That contradicts brief §3.

## Copy claims to confirm (these describe how you operate)
- "Ad accounts, pixels and data stay in your name"; "you can remove our access at any time".
- "We never compete on price."
- "If we are the right fit, you get a written plan built on your own data."
- The Meta ads scope table: what is included, and that production, landing pages and organic posting are scoped separately.
- "Run a continuous creative testing programme."
- Industry and market one-liners in `content/catalog.ts`.

Screenshots at all four widths are in `docs/review/`. They are local only and not committed.
