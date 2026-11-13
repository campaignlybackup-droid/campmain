# Sitemap tree and internal linking

Status: **Draft for approval (Phase 1)**

```
/                                   Home (brand)
├── /about/                         About (founder block toggled in config, default off)
├── /services/                      Services hub
│   ├── /services/meta-ads/
│   ├── /services/google-ads/
│   ├── /services/seo/
│   ├── /services/ad-creative/
│   ├── /services/ecommerce-growth/
│   ├── /services/ai-automation/
│   ├── /services/social-media/
│   ├── /services/landing-pages/
│   └── /services/brand-strategy/
├── /industries/                    Industries hub
│   ├── /industries/ecommerce-d2c/
│   ├── /industries/education/
│   ├── /industries/healthcare/
│   ├── /industries/real-estate/
│   ├── /industries/b2b-professional-services/
│   ├── /industries/saas/
│   └── /industries/hospitality/
├── /locations/                     Locations hub
│   ├── /locations/india/
│   ├── /locations/usa/
│   ├── /locations/canada/
│   └── /locations/uae/
├── /case-studies/                  Hub: built only if 1+ case study exists
│   └── /case-studies/[anonymised-slug]/
├── /blog/                          Hub: in nav only if 3+ posts
│   ├── /blog/[post-slug]/
│   └── /blog/category/[slug]/      indexable only with 3+ posts
├── /apply/                         Apply to Partner
├── /contact/
├── /privacy-policy/
├── /terms/
├── /llms.txt  /robots.txt  /sitemap.xml
└── 404.html                        noindex
```

**Page count at launch:** 31 core pages plus 12 posts plus up to 4 category pages, plus case studies, if any are supplied.

## Click depth (all ≤ 3 from Home)

| Depth | Pages |
|---|---|
| 0 | Home |
| 1 | About, Services hub, Industries hub, Locations hub, Case studies hub, Blog hub, Apply, Contact (header or footer). Privacy and Terms (footer). |
| 2 | All 9 services, 7 industries and 4 locations. Home also links to each directly (services grid, industries row, footer markets), so these are reachable in 1 click. Blog posts and case studies are linked from their hubs and from Home's "latest" strip. |
| 3 | Blog category pages, older posts |

## Navigation

- **Header:** Services (menu listing all 9), Industries (menu listing all 7), Case studies (if any), Insights (if 3+ posts), About. Buttons: "Free ad account review" (secondary) and "Apply to Partner" (primary).
- **Footer:** brand line ("Campaignly Media"), every service, industry and location, the company pages, legal pages, contact details from config (rendered only if not `null`), and social links from config.
- **Breadcrumbs** on every inner page (visible, plus `BreadcrumbList` schema).

## Cross-linking rules (generated from one typed relationship map)

| From | Links to |
|---|---|
| Service page | 2 to 3 related industries, case studies tagged with that service, 2 to 3 posts tagged with that service, and 1 location (India by default) |
| Industry page | 2 to 4 relevant services, case studies in that industry, related posts, and relevant locations (e.g. real estate links to India and UAE) |
| Location page | the services with market-specific notes, and the industries that are strongest in that market |
| Blog post | 1 service and 1 industry or location (from frontmatter), plus 2 related posts |
| Case study | the services used and the industry, plus "next case study" |

Every link uses descriptive anchor text, e.g. "Meta ads management for D2C brands", never "learn more" or "click here". The relationship map is one TypeScript file, so the reverse links stay in sync automatically.

## Conditional rendering (rule 2)

| Section or page | Renders only when |
|---|---|
| Stats strip | `stats[]` has entries with value, label and period |
| Case studies hub, nav item and sitemap entry | at least 1 case study exists |
| Blog nav item | 3 or more published posts |
| Blog category page indexable | 3 or more posts in that category |
| Founder block (About) | `founder.enabled === true` and the required fields are set |
| WhatsApp button | `whatsappNumber` is set |
| Phone or address in footer and schema | the value is set |
| Social icons and `sameAs` | each URL is set |
| GA4, Meta Pixel, Search Console tag | the respective ID is set |
| Testimonials | `testimonials[]` has entries; no `Review` schema is emitted in any case |

> 13 November 2026: `/free-ad-account-review/` was removed. Header buttons are now Apply to Partner only.
