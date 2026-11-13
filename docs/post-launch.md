# Post-launch checklist

## 1. Values you still need to fill in

Everything below is `null` in `content/site.config.ts` (or empty in `.env.local`) and the related feature stays hidden until you add it.

| Field | Where it shows | Priority |
|---|---|---|
| `formEndpoint` / `NEXT_PUBLIC_FORM_ENDPOINT` | Apply form | **Blocks launch** |
| `email` | Footer, Contact, schema `contactPoint`, form error fallback, privacy policy | **Blocks launch** |
| `leadNotificationEmail` | Used in the Apps Script `NOTIFY_EMAIL` property | **Blocks launch** |
| `phone` | Footer, Contact, schema | High |
| `whatsappNumber`, `whatsappMessage` | Floating WhatsApp button, footer, Contact, Contact page CTA | High |
| `social.*` (LinkedIn, Instagram, Facebook, X, YouTube) | Footer, schema `sameAs` (helps separate you from the similarly named political agency) | High |
| `searchConsoleVerification` | `<meta name="google-site-verification">` | High |
| `bingVerification` | `<meta name="msvalidate.01">` | Medium |
| `logo` | Header, footer, schema `logo` | High |
| `legalName` | Footer copyright, privacy policy, terms | High |
| `address` | Footer, Contact, schema (also enables `ProfessionalService`) | Medium |
| `presence` (per market) | Lets location pages say "in" a market rather than "for" it | Medium |
| `ga4Id` / `NEXT_PUBLIC_GA4_ID` | Analytics, after consent | Medium |
| `metaPixelId` / `NEXT_PUBLIC_META_PIXEL_ID` | Pixel, after consent | Medium |
| `hours` | Contact page | Low |
| `applicationResponseHours` | Apply page promise and success message | Medium |
| `foundingYear` | Schema | Low |
| `stats` | Home and About results strip | When verified |
| `caseStudies` | Case studies hub, cross-links | When available |
| `testimonials` | Not displayed yet; never used for Review schema | When available |
| `founder` (set `enabled: true`) | About page founder block, Person schema | Optional |
| `author` | Named blog author and Person schema | Optional |

Also pending:

- **Old URLs** for `docs/redirects.md` and `.htaccess`
- **Confirmation of the content claims** listed in `docs/qa-report.md`
- **Legal review** of the privacy policy and terms

## 2. Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console) and add a **Domain** property for `campaignlymedia.com` (verify with a DNS TXT record). Optionally also add a **URL prefix** property for `https://campaignlymedia.com/` and verify it with the HTML tag value in `searchConsoleVerification`.
2. **Sitemaps** → submit `https://campaignlymedia.com/sitemap.xml`.
3. **URL Inspection** → inspect and **Request indexing** for, in order: `/`, `/about/`, `/services/`, the nine service pages, `/apply/`, then the industries and locations hubs.
4. After a few days, check **Pages** (indexing) and **Enhancements** for breadcrumbs and FAQ structured data errors.
5. Run five URLs through the [Rich Results Test](https://search.google.com/test/rich-results) and the [Schema Markup Validator](https://validator.schema.org/): Home, a service page, an industry page, a blog post, `/about/`. (This could not be done from the build environment.)
6. After 28 days, check **Core Web Vitals** for field LCP, CLS and INP.

## 3. Bing Webmaster Tools

1. Go to [bing.com/webmasters](https://www.bing.com/webmasters) and choose **Import from Google Search Console** (fastest), or add the site and verify with `bingVerification`.
2. Submit `https://campaignlymedia.com/sitemap.xml`.
3. Use **URL Submission** for the same priority pages. Bing also powers several AI answer engines, so this matters for AEO.

## 4. Google Business Profile

A profile helps brand searches show your own knowledge panel instead of the unrelated Campaignly Group.

1. Go to [business.google.com](https://business.google.com) and create a profile named **Campaignly Media**, exactly matching the site.
2. Category: **Marketing agency** (add **Internet marketing service** as secondary).
3. If you do not receive clients at an address, choose **service-area business** and hide the address; add India, the USA, Canada and the UAE as service areas where Google allows.
4. Website: `https://campaignlymedia.com/`. Use the same phone and email as `site.config.ts`.
5. Complete verification (video, phone or postcard, as offered).
6. Add the profile URL to `social` in `site.config.ts` if you want it in `sameAs`.

Name, phone, email and website must match the site and schema exactly.

## 5. Brand and directory profiles

These feed `sameAs` and are often cited in "best agency" listicles:

- LinkedIn company page: **Campaignly Media**, linking to campaignlymedia.com
- Clutch, DesignRush, GoodFirms and Semrush Agency Partners: profiles with the same name, description and URL
- Google Partners and Meta Business Partners, if you qualify

## 6. Analytics

- In GA4, mark `generate_lead` as a **key event**. Optionally register `form_type` and `cta_id` as custom dimensions.
- In Meta Events Manager, confirm `Lead` and `Contact` events arrive after consent.
- Link GA4 to Search Console and to Google Ads.

## 7. First 30 days

- Check Search Console weekly for indexing issues and crawl errors.
- Submit both forms monthly to confirm the Apps Script deployment still works.
- Add posts 13 onward from the content plan's gaps (SEO, social, landing pages, brand strategy, healthcare, SaaS, B2B and hospitality).
- Once the Automation category reaches 3 posts, its category page becomes indexable automatically.
