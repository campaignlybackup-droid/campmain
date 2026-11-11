# Content plan: first 12 blog posts

Status: **Draft for approval (Phase 1)**

Rules for every post:

- One specific buyer question, answered in the first 40 to 60 words.
- One primary keyword per post. None duplicates a primary in `docs/keyword-map.md`.
- Author: **Campaignly Editorial Team**, as an Organization author (your choice). The post page shows published and updated dates.
- Schema: `Article` with `author` set to the Organization. **Note:** the brief (§8, §9) asks for `Person` schema on posts. With an organisation author there is no real person to describe, and inventing one would break rule 2. I will omit `Person` until you add a named author in `site.config.ts`. The code will support it from day one.
- No invented statistics. Any external figure is cited inline with a link to its primary source. Any Campaignly figure comes from `site.config.ts` or is left out.
- Each post links up to 1 service page and 1 industry or location page with descriptive anchor text, and ends with the two standard CTAs.
- Volume and difficulty: **I have no volume data**. The "Difficulty" labels are estimates from SERP inspection.

| # | Working title | The buyer's question | Primary keyword | Intent | Links up to | Market | Difficulty (est.) |
|---|---|---|---|---|---|---|---|
| 1 | How to choose a performance marketing agency: 12 questions to ask before you sign | "How do I tell a good agency from one that will waste my budget?" | how to choose a performance marketing agency | Commercial investigation | `/services/`, `/apply/` | Global | Medium |
| 2 | Agency retainer, percentage of ad spend or performance fee: how agency pricing works | "How do performance marketing agencies charge, and which model suits me?" | performance marketing agency pricing models | Commercial investigation | `/services/meta-ads/`, `/services/google-ads/` | India-first | Medium |
| 3 | Meta ads or Google Ads for lead generation: where to start | "With a limited budget, which platform should I start with?" | Meta ads vs Google Ads for lead generation | Informational | `/services/meta-ads/`, `/services/google-ads/` | Global | Medium |
| 4 | Why Meta lead ads bring low-quality leads, and how to fix it | "Why are my Facebook leads fake or unreachable?" | Meta lead ads low quality leads | Informational, problem-aware | `/services/meta-ads/`, `/services/ai-automation/` | India-first | Low |
| 5 | What a Google Ads audit should check: a 25-point checklist | "What does a proper audit look at, and how do I read one?" | Google Ads audit checklist | Informational | `/free-ad-account-review/`, `/services/google-ads/` | Global | Medium |
| 6 | What an agency report should show you every week (and the red flags) | "How do I know my agency is telling me the truth about results?" | what should a marketing agency report include | Informational | `/about/` (transparency), `/apply/` | Global | Low |
| 7 | WhatsApp Business API vs the WhatsApp Business app: which one does a growing business need? | "Do I need the API, what does it cost and what changes?" | WhatsApp Business API vs WhatsApp Business app | Informational | `/services/ai-automation/`, `/locations/india/` | India, UAE | Medium |
| 8 | Building a WhatsApp lead qualification flow: what to automate first | "What should the bot ask, and when does a human take over?" | WhatsApp lead qualification flow | Informational, how-to | `/services/ai-automation/`, `/industries/real-estate/` | India, UAE | Low |
| 9 | Cost per admission, not cost per lead: how to measure education ad performance | "Why do cheap leads not turn into enrolments?" | cost per admission | Informational | `/industries/education/`, `/services/meta-ads/` | India | Low |
| 10 | Reaching NRI buyers with real estate ads: targeting, time zones and follow-up | "How do Indian developers reach NRIs in the UAE, USA and Canada?" | NRI real estate marketing | Informational | `/industries/real-estate/`, `/locations/uae/` | India, UAE, USA, Canada | Low |
| 11 | How many ad creatives should you test each month? | "How much creative do I need, and how do I test it without wasting spend?" | how many ad creatives to test | Informational | `/services/ad-creative/`, `/industries/ecommerce-d2c/` | Global | Low |
| 12 | Arabic or English ads in the UAE: what to run and when | "Do I need Arabic creative to sell in the UAE?" | Arabic vs English ads UAE | Informational | `/locations/uae/`, `/services/ad-creative/` | UAE | Low |

### Coverage check

- **Services covered:** Meta (2, 3, 4, 9), Google (2, 3, 5), AI automation (4, 7, 8), creative (11, 12), and the services hub and Apply page (1, 6). SEO, social, landing pages, brand strategy and ecommerce growth are **not yet covered**. These are candidates for posts 13 to 20, after launch.
- **Industries covered:** education, real estate, D2C. Healthcare, SaaS, B2B and hospitality come in the next batch.
- **Markets:** India (most), UAE (7, 8, 10, 12), USA and Canada (10, plus the global posts).
- **Blog visibility:** with 12 posts the blog shows in the nav from launch, if all 12 ship. Categories with 3 or more posts get indexable category pages:
  - Paid Media: 2, 3, 4, 5, 11
  - Automation: 7, 8
  - Growth Strategy: 1, 6, 9, 10, 12

  "Search" and "Automation" stay `noindex` until they reach 3 posts.

### Posts that need input or fact-checking before publishing

- **#2 (pricing):** I will describe the models without quoting Campaignly's prices unless you give them. Market ranges, if used, will be cited to their source and labelled as third-party.
- **#7 (WhatsApp API):** Meta's conversation pricing changes often. I'll check current Meta documentation at writing time and date-stamp the post.
- **#12 (UAE):** any claims about UAE advertising rules (for example, National Media Council or UAE Media Council requirements) will be checked against official sources before publishing.
- **Healthcare (next batch):** medical advertising rules in India and the UAE must be sourced from the regulators, not from agency blogs.
