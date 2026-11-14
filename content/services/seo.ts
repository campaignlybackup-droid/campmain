import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/services/seo/",
  slug: "seo",
  eyebrow: "SEO and AI search",
  question: "What do SEO services for lead generation include?",
  answer:
    "SEO for lead generation means owning organic visibility for the questions your buyers ask before they buy, then converting that traffic into enquiries. Campaignly fixes the technical foundations, builds pages that answer buying questions directly, structures content so AI answer engines can cite it, and measures success in qualified leads. Rankings are a means, never the goal.",
  service: { name: "SEO and AI search optimisation", serviceType: "Search engine optimisation" },
  sections: [
    {
      kind: "scope",
      heading: "What is included",
      included: [
        { item: "Technical audit", detail: "Crawlability, indexing, Core Web Vitals, structured data, canonicals and internal links." },
        { item: "Keyword and intent map", detail: "One primary query per page, matched to the content type that already wins it." },
        { item: "Commercial pages", detail: "Service, industry and location pages that answer the buyer's question first." },
        { item: "Content programme", detail: "Articles that settle specific buying questions and lead to the pages that convert." },
        { item: "AI answer readiness", detail: "Direct answers, clear headings, tables and accurate schema that answer engines can quote." },
        { item: "Measurement", detail: "Search Console, GA4 and lead tracking tied together page by page." },
      ],
      excluded: [
        { item: "Paid links or link schemes", detail: "We never buy links. They violate Google's spam policies and put your domain at risk." },
        { item: "Guaranteed rankings", detail: "No one controls Google's results. Anyone promising positions is guessing." },
        { item: "Website rebuilds", detail: "Scoped through landing pages and web.", href: "/services/landing-pages/" },
      ],
      sources: [{ label: "Google Search Central: spam policies", href: "https://developers.google.com/search/docs/essentials/spam-policies" }],
    },
    {
      kind: "prose",
      heading: "SEO when search engines answer with AI",
      paragraphs: [
        "The fundamentals hold. Google states that the same SEO best practices apply to its AI features, with no extra requirements to appear in them. What has changed is the reward for clarity. Pages that answer in the first sentence, carry accurate structured data and state specifics are the easiest to summarise and cite.",
        "So every page we build serves two readers at once: the buyer skimming on a phone, and the system choosing which source to quote. Both want the answer first and the evidence straight after.",
      ],
      sources: [{ label: "Google Search Central: AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" }],
    },
    {
      kind: "steps",
      heading: "How an engagement runs",
      steps: [
        { title: "Technical audit", text: "We remove everything that stops pages being crawled, indexed or loaded fast before a single new word is written." },
        { title: "Keyword and intent map", text: "Every target page gets one primary query, so your pages stop competing with each other." },
        { title: "Fix the commercial pages", text: "Service and industry pages are rebuilt to answer the buying question and convert the visit." },
        { title: "Publish answers to buyer questions", text: "A content plan drawn from the questions your sales team hears every week, each piece linked to a commercial page." },
        { title: "Earn citations", text: "Digital PR, partner listings and genuinely useful assets that give other sites a reason to reference you." },
        { title: "Measure leads by page", text: "Reporting shows exactly which pages produce enquiries." },
      ],
    },
    {
      kind: "table",
      heading: "Typical timeline",
      intro: "SEO compounds. Exact timing depends on your domain's history and your competition, so read these as stages. We commit to the work and the milestones, never to dates on Google's behalf.",
      caption: "Typical stages of an SEO programme",
      columns: ["Stage", "What happens", "What to measure"],
      rows: [
        ["Foundation", "Technical fixes, page consolidation, intent mapping", "Indexed pages, crawl errors, Core Web Vitals"],
        ["Traction", "Long-tail queries start ranking; impressions rise", "Search Console impressions and clicks by page"],
        ["Compounding", "Commercial pages gain visibility; content feeds them", "Organic leads and assisted conversions"],
      ],
    },
  ],
  related: [
    {
      heading: "SEO by industry",
      items: [
        { href: "/industries/b2b-professional-services/", label: "SEO for B2B and professional services", summary: "Content your sales team is proud to send." },
        { href: "/industries/saas/", label: "SEO for SaaS companies", summary: "Comparison and use-case pages that drive demos." },
        { href: "/industries/healthcare/", label: "SEO for clinics and hospitals", summary: "Accurate, policy-safe content patients trust." },
      ],
    },
    {
      heading: "Services that support SEO",
      items: [
        { href: "/services/landing-pages/", label: "Fast websites and landing pages", summary: "Core Web Vitals and clean structure built in." },
        { href: "/services/google-ads/", label: "Google Ads management", summary: "Paid search on the same queries while SEO builds." },
        { href: "/services/brand-strategy/", label: "Brand strategy and positioning", summary: "A clear point of view worth ranking for." },
      ],
    },
  ],
  faqs: [
    {
      q: "How long does SEO take to work?",
      a: "Technical fixes can show effects within weeks of recrawling. New content usually needs months to build visibility, and a new domain takes longer than an established one. We set milestones by stage and report against them openly.",
    },
    {
      q: "Do you guarantee first-page rankings?",
      a: "No, and nobody honestly can. Google controls its results. We commit to the work, the standards and the reporting, and we measure success in qualified leads from organic search.",
    },
    {
      q: "Do I need special optimisation for AI Overviews and AI answers?",
      a: "Google says its AI features use the same SEO best practices, with no extra requirements. In practice, direct answers, accurate structured data and specific facts make your pages far easier to cite, and that is exactly how we build them.",
    },
    {
      q: "Do you build backlinks?",
      a: "We earn links through useful content, digital PR and genuine listings. We never buy links or use link networks, because Google treats them as spam.",
    },
    {
      q: "Is an llms.txt file worth adding?",
      a: "It is a low-cost proposal for summarising a site for AI tools. It is not an official standard, and search engines do not require it. We add one because it costs little, and we never treat it as a substitute for well-structured pages.",
    },
  ],
};

export default content;
