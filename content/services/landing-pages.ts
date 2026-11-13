import type { DetailContent } from "@/content/types";

const content: DetailContent = {
  path: "/services/landing-pages/",
  slug: "landing-pages",
  eyebrow: "Landing pages and web",
  question: "What makes a landing page convert paid traffic?",
  answer:
    "A landing page converts paid traffic when it matches the ad's promise, loads fast on a mid-range phone, states the offer and proof above the fold, and asks for one action. Campaignly designs and builds landing pages and websites around those rules, with tracking, A/B testing and clean code your team can maintain.",
  service: { name: "Landing page and website development", serviceType: "Conversion-focused web design and development" },
  sections: [
    {
      kind: "list",
      heading: "What every page includes",
      items: [
        "Message match: the headline repeats the promise of the ad or search query that brought the visitor.",
        "One goal per page: a single primary action, with secondary links removed or demoted.",
        "Speed: built to meet Google's Core Web Vitals thresholds on mobile.",
        "Proof near the ask: real results, process and guarantees placed beside the form or button.",
        "Accessible forms: labelled fields, clear errors and no surprises after submit.",
        "Tracking: conversions sent to GA4 and the ad platforms, with UTM parameters captured.",
      ],
    },
    {
      kind: "table",
      heading: "Speed targets",
      intro: "Google's thresholds for a good experience, measured at the 75th percentile of real page loads.",
      caption: "Core Web Vitals good thresholds",
      columns: ["Metric", "Measures", "Good"],
      rows: [
        ["Largest Contentful Paint (LCP)", "Loading speed of the main content", "2.5 seconds or less"],
        ["Interaction to Next Paint (INP)", "Responsiveness to taps and clicks", "200 milliseconds or less"],
        ["Cumulative Layout Shift (CLS)", "Visual stability while loading", "0.1 or less"],
      ],
      sources: [{ label: "web.dev: Web Vitals", href: "https://web.dev/articles/vitals" }],
    },
    {
      kind: "steps",
      heading: "How a project is delivered",
      steps: [
        { title: "Brief from the campaign", text: "We start from the ads, audience and offer the page must convert." },
        { title: "Copy first", text: "The argument of the page is written and approved before design." },
        { title: "Design and build", text: "Responsive design, accessible components and fast, static-first code." },
        { title: "Tracking and QA", text: "Conversion events, UTM capture, speed and accessibility checks before launch." },
        { title: "Test and iterate", text: "Variants of headline, offer or form are tested once traffic allows." },
      ],
    },
    {
      kind: "scope",
      heading: "Website scope",
      included: [
        { item: "Landing pages", detail: "Single-purpose pages for paid campaigns." },
        { item: "Marketing websites", detail: "Service, industry and location pages structured for SEO." },
        { item: "Forms and integrations", detail: "Forms connected to your CRM, Google Sheets or email." },
        { item: "Analytics setup", detail: "GA4, Meta Pixel and consent handling." },
      ],
      excluded: [
        { item: "Complex web applications", detail: "Customer portals and apps are outside our scope." },
        { item: "Hosting fees", detail: "Paid to your hosting provider; we help choose and configure it." },
        { item: "Ongoing copy for SEO", detail: "Covered by SEO services.", href: "/services/seo/" },
      ],
    },
  ],
  related: [
    {
      heading: "Landing pages by industry",
      items: [
        { href: "/industries/education/", label: "Course and admission landing pages", summary: "Programme pages that convert enquiries." },
        { href: "/industries/real-estate/", label: "Project landing pages for developers", summary: "Pages built to book site visits." },
        { href: "/industries/saas/", label: "Demo landing pages for SaaS", summary: "Pages that turn clicks into qualified demos." },
      ],
    },
    {
      heading: "Services that send traffic here",
      items: [
        { href: "/services/google-ads/", label: "Google Ads management", summary: "Search traffic matched to page intent." },
        { href: "/services/meta-ads/", label: "Meta ads management", summary: "Social traffic that needs fast mobile pages." },
        { href: "/services/ecommerce-growth/", label: "Ecommerce conversion optimisation", summary: "Product and checkout improvements." },
      ],
    },
  ],
  faqs: [
    {
      q: "Should I send ads to my homepage or a landing page?",
      a: "Usually a landing page. A homepage serves many audiences; a landing page matches one ad's promise and asks for one action, which generally converts better and is easier to test.",
    },
    {
      q: "Which platform do you build on?",
      a: "We choose by your needs. For speed and security we often build static sites with modern frameworks; we also work in WordPress, Shopify and common landing page builders when your team needs to edit them directly.",
    },
    {
      q: "How fast should a landing page load?",
      a: "Google's good threshold for Largest Contentful Paint is 2.5 seconds or less at the 75th percentile of real visits. Paid traffic is mostly mobile, so we test on mid-range phones over a typical mobile connection.",
    },
    {
      q: "Do you write the copy?",
      a: "Yes. Copy is written before design, because the page's argument decides its layout. You approve the copy, then we design around it.",
    },
    {
      q: "Can we edit the pages ourselves after launch?",
      a: "Yes. We hand over documentation and access, and choose a setup your team can maintain, whether that is a CMS or simple content files.",
    },
  ],
};

export default content;
