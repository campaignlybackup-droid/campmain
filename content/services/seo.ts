import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/services/seo/",
  slug: "seo",
  eyebrow: "SEO and AI search",
  question: "What do SEO services for lead generation include?",
  answer:
    "SEO for lead generation means earning organic visibility for the questions your buyers ask before they buy, then turning that traffic into enquiries. Campaignly fixes technical foundations, builds pages that answer buying questions directly, structures content so AI answer engines can cite it, and measures success in qualified leads rather than rankings alone.",
  service: { name: "SEO and AI search optimisation", serviceType: "Search engine optimisation" },
  sections: [
    {
      kind: "scope",
      heading: "What is included in SEO services?",
      included: [
        { item: "Technical audit", detail: "Crawlability, indexing, Core Web Vitals, structured data, canonicals and internal links." },
        { item: "Keyword and intent map", detail: "One primary query per page, matched to the content type that already wins it." },
        { item: "Commercial pages", detail: "Service, industry and location pages that answer the buyer's question first." },
        { item: "Content programme", detail: "Articles that answer specific buying questions and link to the pages that convert." },
        { item: "AI answer readiness", detail: "Direct answers, question headings, tables and accurate schema that answer engines can quote." },
        { item: "Measurement", detail: "Search Console, GA4 and lead tracking tied together by page." },
      ],
      excluded: [
        { item: "Paid links or link schemes", detail: "We do not buy links. They violate Google's spam policies." },
        { item: "Guaranteed rankings", detail: "No one controls Google's results; anyone promising positions is guessing." },
        { item: "Website rebuilds", detail: "Scoped through landing pages and web.", href: "/services/landing-pages/" },
      ],
      sources: [{ label: "Google Search Central: spam policies", href: "https://developers.google.com/search/docs/essentials/spam-policies" }],
    },
    {
      kind: "prose",
      heading: "How is SEO different now that AI answers appear in search?",
      paragraphs: [
        "The fundamentals have not changed: Google states that the same SEO best practices apply to its AI features, and that there are no extra requirements to appear in them. What has changed is the reward for clarity. Pages that answer a question in the first sentence, use accurate structured data and state specifics are easier to summarise and cite.",
        "So we write for two readers at once: the buyer skimming on a phone, and the system deciding which source to quote. Both want a direct answer, then evidence.",
      ],
      sources: [{ label: "Google Search Central: AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" }],
    },
    {
      kind: "steps",
      heading: "How does an SEO engagement run?",
      steps: [
        { title: "Technical audit", text: "We fix what stops pages being crawled, indexed or loaded quickly before writing anything new." },
        { title: "Keyword and intent map", text: "Every target page gets one primary query, so pages stop competing with each other." },
        { title: "Fix the commercial pages", text: "Service and industry pages are rewritten to answer the buying question and convert the visit." },
        { title: "Publish answers to buyer questions", text: "A content plan built from the questions your sales team hears, each linked to a commercial page." },
        { title: "Earn citations, not shortcuts", text: "Digital PR, partner listings and useful assets that other sites have a reason to reference." },
        { title: "Measure leads by page", text: "Reporting shows which pages produce enquiries, not just traffic." },
      ],
    },
    {
      kind: "table",
      heading: "What results can you expect from SEO, and when?",
      intro: "SEO compounds slowly. Exact timing depends on your domain's history and competition, so these are typical stages, not promises.",
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
        { href: "/industries/b2b-professional-services/", label: "SEO for B2B and professional services", summary: "Content that sales teams can send to prospects." },
        { href: "/industries/saas/", label: "SEO for SaaS companies", summary: "Comparison and use-case pages that drive demos." },
        { href: "/industries/healthcare/", label: "SEO for clinics and hospitals", summary: "Accurate, policy-safe content patients can trust." },
      ],
    },
    {
      heading: "Services that support SEO",
      items: [
        { href: "/services/landing-pages/", label: "Fast websites and landing pages", summary: "Core Web Vitals and clean structure built in." },
        { href: "/services/google-ads/", label: "Google Ads management", summary: "Paid search for the same queries while SEO builds." },
        { href: "/services/brand-strategy/", label: "Brand strategy and positioning", summary: "A clear point of view worth ranking for." },
      ],
    },
  ],
  faqs: [
    {
      q: "How long does SEO take to work?",
      a: "Technical fixes can show effects within weeks of recrawling, while new content usually needs months to build visibility. A new domain takes longer than an established one. We set milestones by stage rather than promising rankings by a date.",
    },
    {
      q: "Do you guarantee first-page rankings?",
      a: "No. Nobody controls Google's results. We commit to the work, the reporting and the standards, and measure success in qualified leads from organic search.",
    },
    {
      q: "Do I need special optimisation for AI Overviews and AI answers?",
      a: "Google says its AI features use the same SEO best practices with no extra requirements. In practice, clear direct answers, accurate structured data and specific facts make your pages easier to cite.",
    },
    {
      q: "Do you build backlinks?",
      a: "We earn links through useful content, digital PR and genuine listings. We do not buy links or use link networks, because Google treats them as spam.",
    },
    {
      q: "Is an llms.txt file worth adding?",
      a: "It is a low-cost proposal for summarising a site for AI tools, not an official standard, and search engines do not require it. We add one because it is cheap, but it does not replace well-structured pages.",
    },
  ],
};

export default content;
