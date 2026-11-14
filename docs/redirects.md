# Redirect map (old site → new site)

Status: **implemented** in `public/.htaccess` (between `# BEGIN REDIRECTS` and `# END REDIRECTS`). Built from the 223 URLs in the old `sitemap.xml`. Every target was checked against the build.

Decisions:
- City pages (`/location/<city>/…`) go to their country page. Australian city pages go to the `/locations/` hub, because Australia is not a served market.
- Industries and blog posts with no equivalent go to the closest hub or the page that answers the same question.
- Old server scripts (`db.php`, `install.php`, `contact.php`, `generate-pages.php`, `gen.py`, `*.sql`, `/admin/`) return 410 Gone. Delete those files from the server as well.

## Map

| Old URL | New URL | Status |
|---|---|---|
| `/` | `/` | Same address (slash added automatically) |
| `/about` | `/about/` | Same address (slash added automatically) |
| `/case-studies` | `/case-studies/` | Same address (slash added automatically) |
| `/case-study-1` | `/case-studies/service-business-lead-cost/` | 301 |
| `/case-study-2` | `/case-studies/ecommerce-meta-ads-roas/` | 301 |
| `/case-study-3` | `/case-studies/saas-google-ads-conversions/` | 301 |
| `/case-study-4` | `/case-studies/b2b-full-funnel-revenue/` | 301 |
| `/case-study-5` | `/case-studies/ecommerce-conversion-rate/` | 301 |
| `/privacy` | `/privacy-policy/` | 301 |
| `/blog` | `/blog/` | Same address (slash added automatically) |
| `/industries` | `/industries/` | Same address (slash added automatically) |
| `/meta-ads-agency` | `/services/meta-ads/` | 301 |
| `/google-ads-agency` | `/services/google-ads/` | 301 |
| `/seo-agency` | `/services/seo/` | 301 |
| `/lead-generation-agency` | `/services/` | 301 |
| `/social-media-marketing-agency` | `/services/social-media/` | 301 |
| `/performance-marketing-agency` | `/services/` | 301 |
| `/meta-ads-vs-google-ads` | `/blog/meta-ads-vs-google-ads-for-lead-generation/` | 301 |
| `/seo-vs-paid-ads` | `/services/seo/` | 301 |
| `/lead-generation-vs-brand-awareness` | `/services/brand-strategy/` | 301 |
| `/facebook-ads-vs-instagram-ads` | `/services/meta-ads/` | 301 |
| `/performance-marketing-vs-digital-marketing` | `/blog/how-to-choose-a-performance-marketing-agency/` | 301 |
| `/industries/education-marketing` | `/industries/education/` | 301 |
| `/industries/real-estate-marketing` | `/industries/real-estate/` | 301 |
| `/industries/healthcare-marketing` | `/industries/healthcare/` | 301 |
| `/industries/ecommerce-marketing` | `/industries/ecommerce-d2c/` | 301 |
| `/industries/automotive-marketing` | `/industries/` | 301 |
| `/industries/local-business-marketing` | `/industries/` | 301 |
| `/industries/coaching-institute-marketing` | `/industries/education/` | 301 |
| `/industries/hospitality-marketing` | `/industries/hospitality/` | 301 |
| `/industries/clinic-marketing` | `/industries/healthcare/` | 301 |
| `/industries/car-detailing-marketing` | `/industries/` | 301 |
| `/industries/event-marketing` | `/industries/` | 301 |
| `/blog/how-much-should-a-business-spend-on-meta-ads` | `/services/meta-ads/` | 301 |
| `/blog/meta-ads-vs-google-ads-lead-generation` | `/blog/meta-ads-vs-google-ads-for-lead-generation/` | 301 |
| `/blog/best-digital-marketing-strategy-for-local-businesses` | `/blog/` | 301 |
| `/blog/how-to-generate-high-quality-leads-using-paid-ads` | `/blog/meta-lead-ads-low-quality-leads/` | 301 |
| `/blog/why-your-facebook-ads-are-not-converting` | `/services/meta-ads/` | 301 |
| `/blog/how-seo-helps-local-businesses-get-more-leads` | `/services/seo/` | 301 |
| `/blog/how-to-choose-a-digital-marketing-agency` | `/blog/how-to-choose-a-performance-marketing-agency/` | 301 |
| `/blog/best-marketing-strategy-for-real-estate-businesses` | `/industries/real-estate/` | 301 |
| `/blog/best-marketing-strategy-for-education-brands` | `/industries/education/` | 301 |
| `/blog/best-marketing-strategy-for-clinics` | `/industries/healthcare/` | 301 |
| `/blog/how-to-run-google-ads-for-service-businesses` | `/services/google-ads/` | 301 |
| `/blog/what-is-performance-marketing` | `/blog/how-to-choose-a-performance-marketing-agency/` | 301 |
| `/blog/what-is-a-sales-funnel` | `/services/landing-pages/` | 301 |
| `/blog/how-to-improve-landing-page-conversion-rate` | `/services/landing-pages/` | 301 |
| `/blog/why-retargeting-is-important` | `/services/meta-ads/` | 301 |
| `/blog/how-much-do-google-ads-cost` | `/services/google-ads/` | 301 |
| `/blog/how-much-do-meta-ads-cost` | `/services/meta-ads/` | 301 |
| `/blog/best-digital-marketing-channels-for-small-businesses` | `/blog/` | 301 |
| `/blog/how-to-track-leads-from-ads` | `/blog/what-should-a-marketing-agency-report-include/` | 301 |
| `/blog/how-to-scale-paid-ads-profitably` | `/blog/how-many-ad-creatives-to-test/` | 301 |
| `/location/dubai` | `/locations/uae/` | 301 (pattern) |
| `/location/dubai/meta-ads-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/dubai/google-ads-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/dubai/seo-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/dubai/lead-generation-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/business-bay` | `/locations/uae/` | 301 (pattern) |
| `/location/business-bay/meta-ads-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/business-bay/google-ads-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/business-bay/seo-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/business-bay/lead-generation-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/dubai-marina` | `/locations/uae/` | 301 (pattern) |
| `/location/dubai-marina/meta-ads-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/dubai-marina/google-ads-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/dubai-marina/seo-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/dubai-marina/lead-generation-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/abu-dhabi` | `/locations/uae/` | 301 (pattern) |
| `/location/abu-dhabi/meta-ads-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/abu-dhabi/google-ads-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/abu-dhabi/seo-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/abu-dhabi/lead-generation-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/sharjah` | `/locations/uae/` | 301 (pattern) |
| `/location/sharjah/meta-ads-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/sharjah/google-ads-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/sharjah/seo-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/sharjah/lead-generation-agency` | `/locations/uae/` | 301 (pattern) |
| `/location/new-york` | `/locations/usa/` | 301 (pattern) |
| `/location/new-york/meta-ads-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/new-york/google-ads-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/new-york/seo-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/new-york/lead-generation-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/los-angeles` | `/locations/usa/` | 301 (pattern) |
| `/location/los-angeles/meta-ads-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/los-angeles/google-ads-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/los-angeles/seo-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/los-angeles/lead-generation-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/miami` | `/locations/usa/` | 301 (pattern) |
| `/location/miami/meta-ads-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/miami/google-ads-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/miami/seo-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/miami/lead-generation-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/chicago` | `/locations/usa/` | 301 (pattern) |
| `/location/chicago/meta-ads-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/chicago/google-ads-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/chicago/seo-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/chicago/lead-generation-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/san-francisco` | `/locations/usa/` | 301 (pattern) |
| `/location/san-francisco/meta-ads-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/san-francisco/google-ads-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/san-francisco/seo-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/san-francisco/lead-generation-agency` | `/locations/usa/` | 301 (pattern) |
| `/location/toronto` | `/locations/canada/` | 301 (pattern) |
| `/location/toronto/meta-ads-agency` | `/locations/canada/` | 301 (pattern) |
| `/location/toronto/google-ads-agency` | `/locations/canada/` | 301 (pattern) |
| `/location/toronto/seo-agency` | `/locations/canada/` | 301 (pattern) |
| `/location/toronto/lead-generation-agency` | `/locations/canada/` | 301 (pattern) |
| `/location/vancouver` | `/locations/canada/` | 301 (pattern) |
| `/location/vancouver/meta-ads-agency` | `/locations/canada/` | 301 (pattern) |
| `/location/vancouver/google-ads-agency` | `/locations/canada/` | 301 (pattern) |
| `/location/vancouver/seo-agency` | `/locations/canada/` | 301 (pattern) |
| `/location/vancouver/lead-generation-agency` | `/locations/canada/` | 301 (pattern) |
| `/location/montreal` | `/locations/canada/` | 301 (pattern) |
| `/location/montreal/meta-ads-agency` | `/locations/canada/` | 301 (pattern) |
| `/location/montreal/google-ads-agency` | `/locations/canada/` | 301 (pattern) |
| `/location/montreal/seo-agency` | `/locations/canada/` | 301 (pattern) |
| `/location/montreal/lead-generation-agency` | `/locations/canada/` | 301 (pattern) |
| `/location/calgary` | `/locations/canada/` | 301 (pattern) |
| `/location/calgary/meta-ads-agency` | `/locations/canada/` | 301 (pattern) |
| `/location/calgary/google-ads-agency` | `/locations/canada/` | 301 (pattern) |
| `/location/calgary/seo-agency` | `/locations/canada/` | 301 (pattern) |
| `/location/calgary/lead-generation-agency` | `/locations/canada/` | 301 (pattern) |
| `/location/mumbai` | `/locations/india/` | 301 (pattern) |
| `/location/mumbai/meta-ads-agency` | `/locations/india/` | 301 (pattern) |
| `/location/mumbai/google-ads-agency` | `/locations/india/` | 301 (pattern) |
| `/location/mumbai/seo-agency` | `/locations/india/` | 301 (pattern) |
| `/location/mumbai/lead-generation-agency` | `/locations/india/` | 301 (pattern) |
| `/location/delhi` | `/locations/india/` | 301 (pattern) |
| `/location/delhi/meta-ads-agency` | `/locations/india/` | 301 (pattern) |
| `/location/delhi/google-ads-agency` | `/locations/india/` | 301 (pattern) |
| `/location/delhi/seo-agency` | `/locations/india/` | 301 (pattern) |
| `/location/delhi/lead-generation-agency` | `/locations/india/` | 301 (pattern) |
| `/location/bangalore` | `/locations/india/` | 301 (pattern) |
| `/location/bangalore/meta-ads-agency` | `/locations/india/` | 301 (pattern) |
| `/location/bangalore/google-ads-agency` | `/locations/india/` | 301 (pattern) |
| `/location/bangalore/seo-agency` | `/locations/india/` | 301 (pattern) |
| `/location/bangalore/lead-generation-agency` | `/locations/india/` | 301 (pattern) |
| `/location/jaipur` | `/locations/india/` | 301 (pattern) |
| `/location/jaipur/meta-ads-agency` | `/locations/india/` | 301 (pattern) |
| `/location/jaipur/google-ads-agency` | `/locations/india/` | 301 (pattern) |
| `/location/jaipur/seo-agency` | `/locations/india/` | 301 (pattern) |
| `/location/jaipur/lead-generation-agency` | `/locations/india/` | 301 (pattern) |
| `/location/gurugram` | `/locations/india/` | 301 (pattern) |
| `/location/gurugram/meta-ads-agency` | `/locations/india/` | 301 (pattern) |
| `/location/gurugram/google-ads-agency` | `/locations/india/` | 301 (pattern) |
| `/location/gurugram/seo-agency` | `/locations/india/` | 301 (pattern) |
| `/location/gurugram/lead-generation-agency` | `/locations/india/` | 301 (pattern) |
| `/location/noida` | `/locations/india/` | 301 (pattern) |
| `/location/noida/meta-ads-agency` | `/locations/india/` | 301 (pattern) |
| `/location/noida/google-ads-agency` | `/locations/india/` | 301 (pattern) |
| `/location/noida/seo-agency` | `/locations/india/` | 301 (pattern) |
| `/location/noida/lead-generation-agency` | `/locations/india/` | 301 (pattern) |
| `/location/pune` | `/locations/india/` | 301 (pattern) |
| `/location/pune/meta-ads-agency` | `/locations/india/` | 301 (pattern) |
| `/location/pune/google-ads-agency` | `/locations/india/` | 301 (pattern) |
| `/location/pune/seo-agency` | `/locations/india/` | 301 (pattern) |
| `/location/pune/lead-generation-agency` | `/locations/india/` | 301 (pattern) |
| `/location/lane-cove` | `/locations/` | 301 (pattern) |
| `/location/lane-cove/meta-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/lane-cove/google-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/lane-cove/seo-agency` | `/locations/` | 301 (pattern) |
| `/location/lane-cove/lead-generation-agency` | `/locations/` | 301 (pattern) |
| `/location/north-sydney` | `/locations/` | 301 (pattern) |
| `/location/north-sydney/meta-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/north-sydney/google-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/north-sydney/seo-agency` | `/locations/` | 301 (pattern) |
| `/location/north-sydney/lead-generation-agency` | `/locations/` | 301 (pattern) |
| `/location/chatswood` | `/locations/` | 301 (pattern) |
| `/location/chatswood/meta-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/chatswood/google-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/chatswood/seo-agency` | `/locations/` | 301 (pattern) |
| `/location/chatswood/lead-generation-agency` | `/locations/` | 301 (pattern) |
| `/location/manly` | `/locations/` | 301 (pattern) |
| `/location/manly/meta-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/manly/google-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/manly/seo-agency` | `/locations/` | 301 (pattern) |
| `/location/manly/lead-generation-agency` | `/locations/` | 301 (pattern) |
| `/location/cronulla` | `/locations/` | 301 (pattern) |
| `/location/cronulla/meta-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/cronulla/google-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/cronulla/seo-agency` | `/locations/` | 301 (pattern) |
| `/location/cronulla/lead-generation-agency` | `/locations/` | 301 (pattern) |
| `/location/parramatta` | `/locations/` | 301 (pattern) |
| `/location/parramatta/meta-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/parramatta/google-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/parramatta/seo-agency` | `/locations/` | 301 (pattern) |
| `/location/parramatta/lead-generation-agency` | `/locations/` | 301 (pattern) |
| `/location/bondi` | `/locations/` | 301 (pattern) |
| `/location/bondi/meta-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/bondi/google-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/bondi/seo-agency` | `/locations/` | 301 (pattern) |
| `/location/bondi/lead-generation-agency` | `/locations/` | 301 (pattern) |
| `/location/surry-hills` | `/locations/` | 301 (pattern) |
| `/location/surry-hills/meta-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/surry-hills/google-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/surry-hills/seo-agency` | `/locations/` | 301 (pattern) |
| `/location/surry-hills/lead-generation-agency` | `/locations/` | 301 (pattern) |
| `/location/melbourne-cbd` | `/locations/` | 301 (pattern) |
| `/location/melbourne-cbd/meta-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/melbourne-cbd/google-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/melbourne-cbd/seo-agency` | `/locations/` | 301 (pattern) |
| `/location/melbourne-cbd/lead-generation-agency` | `/locations/` | 301 (pattern) |
| `/location/south-yarra` | `/locations/` | 301 (pattern) |
| `/location/south-yarra/meta-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/south-yarra/google-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/south-yarra/seo-agency` | `/locations/` | 301 (pattern) |
| `/location/south-yarra/lead-generation-agency` | `/locations/` | 301 (pattern) |
| `/location/brisbane-cbd` | `/locations/` | 301 (pattern) |
| `/location/brisbane-cbd/meta-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/brisbane-cbd/google-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/brisbane-cbd/seo-agency` | `/locations/` | 301 (pattern) |
| `/location/brisbane-cbd/lead-generation-agency` | `/locations/` | 301 (pattern) |
| `/location/gold-coast` | `/locations/` | 301 (pattern) |
| `/location/gold-coast/meta-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/gold-coast/google-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/gold-coast/seo-agency` | `/locations/` | 301 (pattern) |
| `/location/gold-coast/lead-generation-agency` | `/locations/` | 301 (pattern) |
| `/location/perth-cbd` | `/locations/` | 301 (pattern) |
| `/location/perth-cbd/meta-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/perth-cbd/google-ads-agency` | `/locations/` | 301 (pattern) |
| `/location/perth-cbd/seo-agency` | `/locations/` | 301 (pattern) |
| `/location/perth-cbd/lead-generation-agency` | `/locations/` | 301 (pattern) |

## Rules

- 301 only, one hop, to the final URL with a trailing slash.
- Pages with no equivalent go to the closest hub (`/services/`, `/industries/`), not the homepage.
- Old URLs that contained client names are redirected without repeating the name anywhere on the new site.
