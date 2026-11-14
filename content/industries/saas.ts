import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/industries/saas/",
  slug: "saas",
  eyebrow: "SaaS",
  question: "What does a SaaS paid acquisition agency do?",
  answer:
    "A SaaS paid acquisition agency buys trials, demos and sign-ups through Google, LinkedIn and Meta at a cost your business model can repay. Campaignly sets the channel mix from your annual contract value, sales cycle and CAC payback target, imports pipeline data into the ad platforms, and reports on qualified demos, opportunities and revenue.",
  sections: [
    {
      kind: "table",
      heading: "Channels by SaaS model",
      intro: "The economics choose the channel. A low-priced monthly tool cannot afford the acquisition an enterprise platform can, and we plan accordingly.",
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
      heading: "The metrics that guide spend",
      items: [
        { term: "ACV", def: "Annual contract value: average yearly revenue per customer. Sets how much you can spend to acquire one." },
        { term: "CAC", def: "Customer acquisition cost: sales and marketing spend divided by new customers." },
        { term: "CAC payback", def: "Months of gross margin needed to recover the cost of acquiring a customer." },
        { term: "SQL", def: "Sales-qualified lead: a lead your sales team accepts as a real opportunity." },
      ],
    },
    {
      kind: "steps",
      heading: "How the programme runs",
      steps: [
        { title: "Model the economics", text: "ACV, stage conversion rates and payback target set the ceiling on cost per demo or trial." },
        { title: "Capture high-intent search", text: "Category, competitor-alternative and problem queries on Google, captured first." },
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
      a: "Often yes, with an honest comparison page and ads that respect trademarks in ad text. Competitor-alternative searches carry high intent, and the landing page has to earn the switch.",
    },
    {
      q: "When does LinkedIn advertising make sense for SaaS?",
      a: "When contract values are high enough to absorb LinkedIn's costs and the buyer is defined by role or company. For low-priced self-serve tools it is usually too expensive.",
    },
    {
      q: "How do you measure SaaS campaigns?",
      a: "Qualified demos or activated trials, opportunities, revenue and CAC payback. Sign-ups are tracked; they never define success.",
    },
    {
      q: "Do you work with early-stage SaaS?",
      a: "We do our best work with SaaS companies that have product-market signals, a defined customer and budget to test. Very early products gain more from customer discovery before paid acquisition.",
    },
  ],
};

export default content;
