import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/services/google-ads/",
  slug: "google-ads",
  eyebrow: "Google Ads",
  question: "What does Google Ads management include?",
  answer:
    "Google Ads management is the ongoing planning, building and optimisation of Search, Performance Max, Shopping, Demand Gen and YouTube campaigns. Campaignly structures accounts around buyer intent, imports offline conversions so bidding learns from qualified leads and revenue, and reports on cost per qualified result instead of clicks or impression share.",
  service: { name: "Google Ads management", serviceType: "Pay-per-click search and video advertising management" },
  sections: [
    {
      kind: "scope",
      heading: "What is included",
      intro: "Everything inside the account and the measurement that feeds bidding. Creative production and page builds are scoped separately.",
      included: [
        { item: "Account audit", detail: "Structure, search terms, match types, negatives, bidding, conversion actions and wasted spend." },
        { item: "Conversion tracking", detail: "Google tag, enhanced conversions and offline conversion import from your CRM." },
        { item: "Search campaigns", detail: "Keyword themes mapped to intent, with ad copy and assets written per theme." },
        { item: "Performance Max and Shopping", detail: "Asset groups, product feed quality, audience signals and brand exclusions." },
        { item: "YouTube and Demand Gen", detail: "Video and discovery placements where they support search demand." },
        { item: "Bidding and budgets", detail: "Target CPA or ROAS set from your real margins, reviewed as data matures." },
        { item: "Search term hygiene", detail: "Regular negative keyword work so spend stays on relevant queries." },
        { item: "Reporting", detail: "Qualified leads, revenue and pipeline by campaign, with next actions." },
      ],
      excluded: [
        { item: "Ad spend", detail: "Billed by Google directly to your own account." },
        { item: "Video production", detail: "Scoped through our ad creative service.", href: "/services/ad-creative/" },
        { item: "Landing pages", detail: "Scoped through landing pages and web.", href: "/services/landing-pages/" },
        { item: "Organic search", detail: "Covered by SEO and AI search.", href: "/services/seo/" },
      ],
    },
    {
      kind: "table",
      heading: "Choosing campaign types",
      intro: "The campaign type follows the buyer's intent and your data. Most accounts need two or three of them.",
      caption: "Google Ads campaign types and when they fit",
      columns: ["Campaign type", "Best for", "Watch out for"],
      rows: [
        ["Search", "Capturing people already searching for what you sell", "Broad match without strong negatives and conversion data"],
        ["Performance Max", "Ecommerce with a healthy product feed; lead generation with offline conversion data", "Spend drifting to branded queries or low-quality placements"],
        ["Shopping", "Product-level control for ecommerce catalogues", "Feed errors and weak product titles"],
        ["Demand Gen", "Visual prospecting on YouTube, Discover and Gmail", "Judging it on last-click conversions alone"],
        ["YouTube video", "Reach and consideration for considered purchases", "Running it without a search programme to capture the demand"],
      ],
    },
    {
      kind: "steps",
      heading: "How we manage an account",
      steps: [
        { title: "Audit search terms and tracking", text: "We find where money goes on irrelevant queries and whether conversions measure anything that matters." },
        { title: "Fix measurement first", text: "Conversion actions are cleaned up and offline outcomes imported, so smart bidding optimises for revenue." },
        { title: "Restructure around intent", text: "Campaigns are grouped by what the searcher wants." },
        { title: "Write ads and assets per theme", text: "Headlines, descriptions and sitelinks answer the query and match the landing page." },
        { title: "Set bids from margins", text: "Target CPA or ROAS comes from your unit economics, then tightens as data accumulates." },
        { title: "Expand where it holds", text: "New keywords, campaign types and markets are added only once the core is profitable." },
      ],
    },
    {
      kind: "definitions",
      heading: "Terms we use in reporting",
      items: [
        { term: "Search terms", def: "The actual queries that triggered your ads. Keywords are what you bid on; search terms are what you paid for." },
        { term: "Offline conversion import", def: "Sending CRM outcomes such as qualified lead or closed deal back to Google so bidding learns from them." },
        { term: "Enhanced conversions", def: "A Google feature that uses hashed first-party data, such as email, to improve conversion measurement." },
        { term: "Impression share", def: "The share of eligible impressions your ads received. Useful for diagnosis. We do not set it as a target." },
      ],
    },
  ],
  related: [
    {
      heading: "Google Ads by industry",
      items: [
        { href: "/industries/b2b-professional-services/", label: "Google Ads for B2B lead generation", summary: "Search programmes that sales teams accept." },
        { href: "/industries/saas/", label: "Google Ads for SaaS companies", summary: "Bidding planned around ACV and CAC payback." },
        { href: "/industries/healthcare/", label: "Google Ads for clinics and hospitals", summary: "Patient acquisition within healthcare policy." },
      ],
    },
    {
      heading: "Services that support Google Ads",
      items: [
        { href: "/services/landing-pages/", label: "Landing pages built for search intent", summary: "Message match from query to page." },
        { href: "/services/seo/", label: "SEO and AI search", summary: "Organic visibility for the same buyer questions." },
        { href: "/services/meta-ads/", label: "Meta ads management", summary: "Create the demand that search then captures." },
        { href: "/locations/usa/", label: "Google Ads for US businesses", summary: "USD billing and US time zone overlap." },
      ],
    },
  ],
  faqs: [
    {
      q: "How much should I spend on Google Ads?",
      a: "Start from the cost of the clicks in your market and the conversions you need for bidding to learn. Google's automated bidding works best with consistent conversion volume each month, so we size the budget to reach that on your core campaigns before spreading it across more.",
    },
    {
      q: "Is Performance Max better than Search campaigns?",
      a: "Not by default. Performance Max works well for ecommerce with a clean feed and for lead generation with offline conversion data. Search gives more control over queries. Most accounts run both, with brand exclusions so Performance Max does not take credit for branded searches.",
    },
    {
      q: "Who owns the Google Ads account?",
      a: "You do. We work in your account through manager access, and the account, billing and history stay in your name.",
    },
    {
      q: "How quickly will Google Ads produce leads?",
      a: "Search campaigns can produce enquiries within days of launch because they capture existing demand. Getting cost per qualified lead to a stable target takes longer, as bidding learns from conversion data. We set expectations in the written plan.",
    },
    {
      q: "Can you import CRM data back into Google Ads?",
      a: "Yes. We set up offline conversion import from your CRM or a Google Sheet so Google learns which clicks became qualified leads or customers, and bids accordingly.",
    },
    {
      q: "Do you also manage Microsoft Ads?",
      a: "Yes, where your market justifies it. Microsoft Ads can import Google campaigns and is often worth testing for US and Canadian B2B audiences.",
    },
  ],
};

export default content;
