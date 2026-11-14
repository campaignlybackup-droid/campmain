import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/services/google-ads/",
  slug: "google-ads",
  eyebrow: "Google Ads",
  question: "What does Google Ads management include?",
  answer:
    "Google Ads management is the continuous planning, building and optimisation of Search, Performance Max, Shopping, Demand Gen and YouTube campaigns. Campaignly structures every account around buyer intent, feeds offline conversions back so bidding learns from qualified leads and revenue, and reports on cost per qualified result. Clicks and impression share are diagnostics, never targets.",
  service: { name: "Google Ads management", serviceType: "Pay-per-click search and video advertising management" },
  sections: [
    {
      kind: "scope",
      heading: "What is included",
      intro: "Everything inside the account, plus the measurement that drives bidding. Creative production and page builds are scoped on their own.",
      included: [
        { item: "Account audit", detail: "Structure, search terms, match types, negatives, bidding, conversion actions and every source of wasted spend." },
        { item: "Conversion tracking", detail: "Google tag, enhanced conversions and offline conversion import from your CRM." },
        { item: "Search campaigns", detail: "Keyword themes mapped to intent, with ad copy and assets written for each theme." },
        { item: "Performance Max and Shopping", detail: "Asset groups, product feed quality, audience signals and brand exclusions." },
        { item: "YouTube and Demand Gen", detail: "Video and discovery placements deployed where they feed search demand." },
        { item: "Bidding and budgets", detail: "Target CPA or ROAS set from your real margins and tightened as data matures." },
        { item: "Search term hygiene", detail: "Relentless negative keyword work that keeps spend on relevant queries." },
        { item: "Reporting", detail: "Qualified leads, revenue and pipeline by campaign, with the next actions spelled out." },
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
      intro: "Intent and data decide the campaign type. Most accounts need two or three, each with a clear job.",
      caption: "Google Ads campaign types and when they fit",
      columns: ["Campaign type", "Best for", "Watch out for"],
      rows: [
        ["Search", "Capturing people already searching for what you sell", "Broad match without strong negatives and conversion data"],
        ["Performance Max", "Ecommerce with a healthy product feed; lead generation with offline conversion data", "Spend drifting to branded queries or low-quality placements"],
        ["Shopping", "Product-level control for ecommerce catalogues", "Feed errors and weak product titles"],
        ["Demand Gen", "Visual prospecting on YouTube, Discover and Gmail", "Judging it on last-click conversions alone"],
        ["YouTube video", "Reach and consideration for considered purchases", "Running it without a search programme to capture the demand it creates"],
      ],
    },
    {
      kind: "steps",
      heading: "How we manage an account",
      steps: [
        { title: "Audit search terms and tracking", text: "We find every query that wastes money and test whether your conversions measure anything that matters." },
        { title: "Fix measurement first", text: "Conversion actions are cleaned up and offline outcomes imported, so smart bidding optimises for revenue." },
        { title: "Restructure around intent", text: "Campaigns are grouped by what the searcher actually wants to do." },
        { title: "Write ads and assets per theme", text: "Headlines, descriptions and sitelinks answer the query and mirror the landing page." },
        { title: "Set bids from margins", text: "Target CPA or ROAS comes from your unit economics, then tightens as data builds." },
        { title: "Expand where it holds", text: "New keywords, campaign types and markets join only once the core is profitable." },
      ],
    },
    {
      kind: "definitions",
      heading: "Terms we use in reporting",
      items: [
        { term: "Search terms", def: "The actual queries that triggered your ads. Keywords are what you bid on; search terms are what you paid for." },
        { term: "Offline conversion import", def: "Sending CRM outcomes such as a qualified lead or closed deal back to Google, so bidding learns from them." },
        { term: "Enhanced conversions", def: "A Google feature that uses hashed first-party data, such as email, to sharpen conversion measurement." },
        { term: "Impression share", def: "The share of eligible impressions your ads received. A strong diagnostic. We never set it as a target." },
      ],
    },
  ],
  related: [
    {
      heading: "Google Ads by industry",
      items: [
        { href: "/industries/b2b-professional-services/", label: "Google Ads for B2B lead generation", summary: "Search programmes your sales team accepts." },
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
      a: "Start from the click costs in your market and the conversions bidding needs to learn. Google's automated bidding performs best with consistent monthly conversion volume, so we size the budget to reach that on your core campaigns before spreading it wider.",
    },
    {
      q: "Is Performance Max better than Search campaigns?",
      a: "It depends on the account. Performance Max excels for ecommerce with a clean feed and for lead generation with offline conversion data. Search gives tighter control over queries. Most accounts run both, with brand exclusions so Performance Max cannot claim credit for branded searches.",
    },
    {
      q: "Who owns the Google Ads account?",
      a: "You do. We work in your account through manager access. The account, billing and history stay in your name.",
    },
    {
      q: "How quickly will Google Ads produce leads?",
      a: "Search campaigns can deliver enquiries within days of launch because they capture demand that already exists. Bringing cost per qualified lead to a stable target takes longer, as bidding learns from conversion data. Your written plan sets out the timeline.",
    },
    {
      q: "Can you import CRM data back into Google Ads?",
      a: "Yes. We set up offline conversion import from your CRM or a Google Sheet, so Google learns which clicks became qualified leads or customers and bids for more of them.",
    },
    {
      q: "Do you also manage Microsoft Ads?",
      a: "Yes, where the market justifies it. Microsoft Ads can import Google campaigns and is often worth testing for US and Canadian B2B audiences.",
    },
  ],
};

export default content;
