import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/industries/saas/",
  slug: "saas",
  eyebrow: "SaaS",
  question: "What does a SaaS paid acquisition agency do?",
  answer:
    "A SaaS paid acquisition agency buys trials, demos and sign-ups through Google, LinkedIn and Meta at a cost the business model can repay. Campaignly plans channel mix from your annual contract value, sales cycle and CAC payback target, imports pipeline data into the ad platforms, and reports on qualified demos, opportunities and revenue.",
  sections: [
    {
      kind: "table",
      heading: "Which channels fit which SaaS model?",
      intro: "Channel choice follows the economics. A tool that costs a little per month cannot afford the same acquisition as an enterprise platform.",
      caption: "SaaS channel fit by business model",
      columns: ["Model", "Typical motion", "Channels that usually fit"],
      rows: [
        ["Low-price self-serve", "Free trial or freemium sign-up", "Google Search, Meta, YouTube, SEO"],
        ["Mid-market", "Trial plus sales assist", "Google Search, LinkedIn, comparison and review sites"],
        ["Enterprise", "Demo and sales-led", "LinkedIn, account-based campaigns, Google for high-intent terms"],
      ],
    },
    {
      kind: "definitions",
      heading: "Which SaaS metrics guide paid acquisition?",
      items: [
        { term: "ACV", def: "Annual contract value: average yearly revenue per customer. Sets how much you can spend to acquire one." },
        { term: "CAC", def: "Customer acquisition cost: sales and marketing spend divided by new customers." },
        { term: "CAC payback", def: "Months of gross margin needed to recover the cost of acquiring a customer." },
        { term: "SQL", def: "Sales-qualified lead: a lead your sales team accepts as a real opportunity." },
      ],
    },
    {
      kind: "steps",
      heading: "How does a SaaS acquisition programme run?",
      steps: [
        { title: "Model the economics", text: "ACV, conversion rates by stage and payback target set the maximum cost per demo or trial." },
        { title: "Capture high-intent search", text: "Category, competitor-alternative and problem queries on Google." },
        { title: "Reach the buying committee", text: "LinkedIn and retargeting to the roles involved in the decision." },
        { title: "Fix the conversion path", text: "Demo and trial pages, onboarding emails and qualification." },
        { title: "Import pipeline", text: "Opportunities and revenue from your CRM sent back to Google and LinkedIn." },
      ],
    },
  ],
  related: [
    {
      heading: "Services for SaaS",
      items: [
        { href: "/services/google-ads/", label: "Google Ads for SaaS", summary: "High-intent search and competitor terms." },
        { href: "/services/seo/", label: "SaaS SEO and AI search", summary: "Comparison and use-case content that drives demos." },
        { href: "/services/landing-pages/", label: "Demo and trial landing pages", summary: "Pages that turn clicks into qualified demos." },
        { href: "/services/brand-strategy/", label: "SaaS positioning", summary: "Category and messaging that shorten sales cycles." },
      ],
    },
    {
      heading: "Markets",
      items: [
        { href: "/locations/usa/", label: "SaaS acquisition for the US market", summary: "LinkedIn, Google and Microsoft Ads." },
        { href: "/locations/canada/", label: "SaaS acquisition in Canada", summary: "English and French campaigns." },
      ],
    },
  ],
  faqs: [
    {
      q: "Should SaaS companies bid on competitor names?",
      a: "Often yes, with an honest comparison page and ads that do not misuse trademarks in ad text. Competitor-alternative searches can be high intent, but the landing page must earn the switch.",
    },
    {
      q: "When does LinkedIn advertising make sense for SaaS?",
      a: "When contract values are high enough to absorb LinkedIn's costs and the buyer is defined by role or company. For low-priced self-serve tools it is usually too expensive.",
    },
    {
      q: "How do you measure SaaS campaigns?",
      a: "Qualified demos or activated trials, opportunities, revenue and CAC payback. Sign-ups alone are tracked but do not define success.",
    },
    {
      q: "Do you work with early-stage SaaS?",
      a: "We work best with SaaS companies that have product-market signals, a defined customer and budget to test. Very early products usually need customer discovery before paid acquisition.",
    },
  ],
};

export default content;
