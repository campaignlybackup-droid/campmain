/**
 * SEO registry: one typed source for every page's title, description, H1 and
 * primary keyword (from docs/keyword-map.md). Metadata, breadcrumbs, sitemap and
 * QA checks all read from here.
 */

export interface PageSeo {
  path: string;
  /** Under 60 characters. Rendered verbatim (no template suffix added). */
  title: string;
  /** Under 155 characters. */
  description: string;
  h1: string;
  primaryKeyword: string;
  /** Short label for breadcrumbs and nav */
  label: string;
  /** Parent path for breadcrumbs; omitted for Home */
  parent?: string;
  noindex?: boolean;
}

const pages = [
  {
    path: "/",
    label: "Home",
    primaryKeyword: "Campaignly Media",
    title: "Campaignly Media | Advertising-First Growth Partner",
    description:
      "Campaignly is an advertising-first, AI-enabled growth partner for scaling businesses in India, the USA, Canada and the UAE.",
    h1: "Campaignly Media: the advertising-first growth partner for scaling businesses",
  },
  {
    path: "/about/",
    label: "About",
    parent: "/",
    primaryKeyword: "about Campaignly",
    title: "About Campaignly | How We Work and Who We Serve",
    description:
      "Campaignly Media is a digital growth partner for scaling businesses. Our method: Diagnose, Position, Acquire, Convert, Retain, Scale.",
    h1: "About Campaignly",
  },
  {
    path: "/services/",
    label: "Services",
    parent: "/",
    primaryKeyword: "performance marketing services",
    title: "Performance Marketing Services | Campaignly",
    description:
      "Meta Ads, Google Ads, SEO, creative, ecommerce growth, AI automation, landing pages and brand strategy, run as one growth system.",
    h1: "Performance marketing services, built as one growth system",
  },
  {
    path: "/services/meta-ads/",
    label: "Meta ads",
    parent: "/services/",
    primaryKeyword: "Meta ads agency",
    title: "Meta Ads Agency: Facebook and Instagram Ads | Campaignly",
    description:
      "Meta ads managed for revenue: account structure, creative testing, conversion tracking and weekly reporting you can audit.",
    h1: "Meta ads agency for businesses that measure revenue",
  },
  {
    path: "/services/google-ads/",
    label: "Google Ads",
    parent: "/services/",
    primaryKeyword: "Google Ads management services",
    title: "Google Ads Management Services | Campaignly",
    description:
      "Search, Performance Max, Shopping and YouTube campaigns managed against cost per qualified lead and revenue, with full account ownership.",
    h1: "Google Ads management, measured on qualified pipeline",
  },
  {
    path: "/services/seo/",
    label: "SEO",
    parent: "/services/",
    primaryKeyword: "SEO services for lead generation",
    title: "SEO Services for Lead Generation and AI Search | Campaignly",
    description:
      "Technical SEO, content and AI-answer optimisation aimed at pipeline and revenue. Clear scope, timelines and reports.",
    h1: "SEO services that build pipeline, in Google and in AI answers",
  },
  {
    path: "/services/ad-creative/",
    label: "Ad creative",
    parent: "/services/",
    primaryKeyword: "performance ad creative agency",
    title: "Performance Ad Creative and Video Ads Agency | Campaignly",
    description:
      "Video, UGC and static ads built for testing: hooks, variants and a creative roadmap tied to your ad account data.",
    h1: "Performance ad creative, built to be tested",
  },
  {
    path: "/services/ecommerce-growth/",
    label: "Ecommerce growth",
    parent: "/services/",
    primaryKeyword: "ecommerce growth agency",
    title: "Ecommerce Growth Agency: CRO and Retention | Campaignly",
    description:
      "Conversion rate, average order value and repeat purchase work for ecommerce brands, joined to paid acquisition so growth compounds.",
    h1: "Ecommerce growth beyond the ad account",
  },
  {
    path: "/services/ai-automation/",
    label: "AI automation",
    parent: "/services/",
    primaryKeyword: "AI marketing automation agency",
    title: "AI Marketing Automation: WhatsApp, CRM, Leads | Campaignly",
    description:
      "WhatsApp flows, AI lead qualification and CRM automation, built on official APIs and connected to your ads so no lead goes cold.",
    h1: "AI marketing automation that answers every lead in minutes",
  },
  {
    path: "/services/social-media/",
    label: "Social media",
    parent: "/services/",
    primaryKeyword: "social media strategy and management",
    title: "Social Media Strategy and Management | Campaignly",
    description:
      "Organic social planned around commercial goals: positioning, content systems and community, connected to your paid media.",
    h1: "Social media strategy tied to commercial goals",
  },
  {
    path: "/services/landing-pages/",
    label: "Landing pages and web",
    parent: "/services/",
    primaryKeyword: "landing page design services",
    title: "Landing Page Design Services for Paid Ads | Campaignly",
    description:
      "Fast, message-matched landing pages and websites built to convert paid traffic, with tracking, A/B testing and clean handover.",
    h1: "Landing pages and websites built to convert paid traffic",
  },
  {
    path: "/services/brand-strategy/",
    label: "Brand strategy",
    parent: "/services/",
    primaryKeyword: "brand strategy agency",
    title: "Brand Strategy and Positioning Agency | Campaignly",
    description:
      "Positioning, messaging and offer strategy that makes every ad, page and sales call easier. Built for businesses ready to scale.",
    h1: "Brand strategy that makes acquisition easier",
  },
  {
    path: "/industries/",
    label: "Industries",
    parent: "/",
    primaryKeyword: "industry-specific digital marketing",
    title: "Industries We Grow | Campaignly",
    description:
      "How Campaignly runs paid media, SEO and automation for ecommerce, education, healthcare, real estate, B2B, SaaS and hospitality.",
    h1: "Growth programmes built for your industry",
  },
  {
    path: "/industries/ecommerce-d2c/",
    label: "Ecommerce and D2C",
    parent: "/industries/",
    primaryKeyword: "D2C marketing agency",
    title: "D2C Marketing Agency for Scaling Brands | Campaignly",
    description:
      "Paid acquisition, creative and retention for D2C and ecommerce brands, managed against contribution margin.",
    h1: "D2C marketing for brands that want profitable scale",
  },
  {
    path: "/industries/education/",
    label: "Education",
    parent: "/industries/",
    primaryKeyword: "student admission lead generation",
    title: "Student Admission Lead Generation | Campaignly",
    description:
      "Admission campaigns for universities, colleges and edtech, measured on applications and enrolments.",
    h1: "Student admission lead generation, measured on enrolments",
  },
  {
    path: "/industries/healthcare/",
    label: "Healthcare",
    parent: "/industries/",
    primaryKeyword: "healthcare digital marketing agency",
    title: "Healthcare Digital Marketing Agency | Campaignly",
    description:
      "Patient acquisition for hospitals, clinics and health brands, within platform policy and local advertising rules.",
    h1: "Healthcare digital marketing that respects the rules",
  },
  {
    path: "/industries/real-estate/",
    label: "Real estate",
    parent: "/industries/",
    primaryKeyword: "real estate lead generation",
    title: "Real Estate Lead Generation for Developers | Campaignly",
    description:
      "Meta and Google campaigns for developers and brokers in India and the UAE, built for site visits and bookings.",
    h1: "Real estate lead generation built for site visits",
  },
  {
    path: "/industries/b2b-professional-services/",
    label: "B2B and professional services",
    parent: "/industries/",
    primaryKeyword: "B2B lead generation agency",
    title: "B2B Lead Generation Agency | Campaignly",
    description:
      "Qualified pipeline for B2B and professional services firms through search, LinkedIn, content and automated follow-up.",
    h1: "B2B lead generation your sales team will follow up",
  },
  {
    path: "/industries/saas/",
    label: "SaaS",
    parent: "/industries/",
    primaryKeyword: "SaaS paid acquisition agency",
    title: "SaaS Paid Acquisition Agency | Campaignly",
    description:
      "Google, LinkedIn and Meta acquisition for SaaS, planned around ACV, sales cycle and CAC payback rather than cost per click.",
    h1: "SaaS paid acquisition planned around CAC payback",
  },
  {
    path: "/industries/hospitality/",
    label: "Hospitality",
    parent: "/industries/",
    primaryKeyword: "hotel digital marketing agency",
    title: "Hotel Digital Marketing for Direct Bookings | Campaignly",
    description:
      "Search, metasearch and social campaigns for hotels and resorts that shift bookings from OTAs to your own website.",
    h1: "Hotel digital marketing that grows direct bookings",
  },
  {
    path: "/locations/",
    label: "Markets",
    parent: "/",
    primaryKeyword: "Campaignly locations",
    title: "Markets We Serve: India, USA, Canada, UAE | Campaignly",
    description:
      "Campaignly runs growth programmes for businesses in India, the USA, Canada and the UAE. See how engagement works in each market.",
    h1: "Markets we serve",
  },
  {
    path: "/locations/india/",
    label: "India",
    parent: "/locations/",
    primaryKeyword: "performance marketing agency in India",
    title: "Performance Marketing Agency in India | Campaignly",
    description:
      "Meta, Google and WhatsApp-led growth for Indian businesses: INR budgets, IST working hours and creative for Indian audiences.",
    h1: "Performance marketing agency for businesses across India",
  },
  {
    path: "/locations/usa/",
    label: "USA",
    parent: "/locations/",
    primaryKeyword: "performance marketing agency for US businesses",
    title: "Performance Marketing Agency for US Businesses | Campaignly",
    description:
      "Senior paid media and growth for US companies: USD billing, working hours that overlap US time zones and full account ownership.",
    h1: "Performance marketing for US businesses",
  },
  {
    path: "/locations/canada/",
    label: "Canada",
    parent: "/locations/",
    primaryKeyword: "performance marketing agency Canada",
    title: "Performance Marketing Agency for Canada | Campaignly",
    description:
      "Google, Meta and automation programmes for Canadian businesses: CAD billing, CASL-aware follow-up and English or French campaigns.",
    h1: "Performance marketing for Canadian businesses",
  },
  {
    path: "/locations/uae/",
    label: "UAE",
    parent: "/locations/",
    primaryKeyword: "performance marketing agency UAE",
    title: "Performance Marketing Agency for the UAE | Campaignly",
    description:
      "Arabic and English campaigns for UAE businesses across Google, Meta, Snapchat and TikTok, with AED billing and same-day working hours.",
    h1: "Performance marketing for businesses in the UAE",
  },
  {
    path: "/case-studies/",
    label: "Case studies",
    parent: "/",
    primaryKeyword: "performance marketing case studies",
    title: "Performance Marketing Case Studies | Campaignly",
    description:
      "Anonymised results from growth programmes across ecommerce, education, real estate and B2B, with the time period for every figure.",
    h1: "Case studies",
  },
  {
    path: "/blog/",
    label: "Insights",
    parent: "/",
    primaryKeyword: "Campaignly blog",
    title: "Insights on Paid Media, SEO and Automation | Campaignly",
    description:
      "Specific answers to the questions founders and marketing heads ask about Meta, Google, SEO, creative and AI automation.",
    h1: "Insights",
  },
  {
    path: "/apply/",
    label: "Apply to Partner",
    parent: "/",
    primaryKeyword: "apply to partner with Campaignly",
    title: "Apply to Partner with Campaignly",
    description:
      "Tell us about your business, revenue range and growth goal, and we will assess whether a growth partnership is the right fit.",
    h1: "Apply to partner with Campaignly",
  },
  {
    path: "/contact/",
    label: "Contact",
    parent: "/",
    primaryKeyword: "contact Campaignly",
    title: "Contact Campaignly",
    description:
      "Email, phone and WhatsApp details for Campaignly Media, plus the fastest way to start a growth conversation.",
    h1: "Contact Campaignly",
  },
  {
    path: "/privacy-policy/",
    label: "Privacy policy",
    parent: "/",
    primaryKeyword: "Campaignly privacy policy",
    title: "Privacy Policy | Campaignly",
    description:
      "How Campaignly Media collects, uses and protects personal data submitted through this website, and the choices you have.",
    h1: "Privacy policy",
  },
  {
    path: "/terms/",
    label: "Terms",
    parent: "/",
    primaryKeyword: "Campaignly terms",
    title: "Terms of Service | Campaignly",
    description: "The terms that govern use of the campaignlymedia.com website.",
    h1: "Terms of service",
  },
] as const satisfies readonly PageSeo[];

export type PagePath = (typeof pages)[number]["path"];

const byPath = new Map<string, PageSeo>(pages.map((p) => [p.path, p]));

export function getPage(path: PagePath): PageSeo {
  const page = byPath.get(path);
  if (!page) throw new Error(`No SEO entry for ${path}`);
  return page;
}

export function allPages(): readonly PageSeo[] {
  return pages;
}

/** Breadcrumb trail from Home to the given page. */
export function trail(path: PagePath): PageSeo[] {
  const out: PageSeo[] = [];
  let current: PageSeo | undefined = byPath.get(path);
  while (current) {
    out.unshift(current);
    current = current.parent ? byPath.get(current.parent) : undefined;
  }
  return out;
}
