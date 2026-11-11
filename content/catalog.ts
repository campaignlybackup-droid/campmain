/** Lists used for navigation, hubs and cross-links. Copy here is short, factual and reused. */

export interface CatalogItem {
  href: string;
  label: string;
  summary: string;
}

export const services = [
  {
    href: "/services/meta-ads/",
    label: "Meta ads",
    summary: "Facebook and Instagram campaigns run against qualified leads and revenue.",
  },
  {
    href: "/services/google-ads/",
    label: "Google Ads",
    summary: "Search, Performance Max, Shopping and YouTube, structured around intent.",
  },
  {
    href: "/services/seo/",
    label: "SEO and AI search",
    summary: "Technical SEO and content built to be found in Google and in AI answers.",
  },
  {
    href: "/services/ad-creative/",
    label: "Video and ad creative",
    summary: "Video, UGC and static ads produced as testable variants, not one-offs.",
  },
  {
    href: "/services/ecommerce-growth/",
    label: "Ecommerce growth",
    summary: "Conversion rate, order value and repeat purchase, joined to acquisition.",
  },
  {
    href: "/services/ai-automation/",
    label: "AI automation",
    summary: "WhatsApp flows, lead qualification and CRM automation on official APIs.",
  },
  {
    href: "/services/social-media/",
    label: "Social media growth",
    summary: "Organic social planned around positioning and commercial goals.",
  },
  {
    href: "/services/landing-pages/",
    label: "Landing pages and web",
    summary: "Fast, message-matched pages and sites built to convert paid traffic.",
  },
  {
    href: "/services/brand-strategy/",
    label: "Brand strategy",
    summary: "Positioning, messaging and offers that make every channel work harder.",
  },
] as const satisfies readonly CatalogItem[];

export const industries = [
  {
    href: "/industries/ecommerce-d2c/",
    label: "Ecommerce and D2C",
    summary: "Profitable scale measured on contribution margin, not ROAS alone.",
  },
  {
    href: "/industries/education/",
    label: "Education",
    summary: "Admission campaigns measured on applications and enrolments.",
  },
  {
    href: "/industries/healthcare/",
    label: "Healthcare",
    summary: "Patient acquisition within platform policy and local rules.",
  },
  {
    href: "/industries/real-estate/",
    label: "Real estate",
    summary: "Campaigns built for site visits and bookings, in India and the UAE.",
  },
  {
    href: "/industries/b2b-professional-services/",
    label: "B2B and professional services",
    summary: "Pipeline that sales teams accept, from search, LinkedIn and content.",
  },
  {
    href: "/industries/saas/",
    label: "SaaS",
    summary: "Acquisition planned around ACV, sales cycle and CAC payback.",
  },
  {
    href: "/industries/hospitality/",
    label: "Hospitality",
    summary: "Direct bookings that reduce dependence on online travel agents.",
  },
] as const satisfies readonly CatalogItem[];

export interface MarketItem extends CatalogItem {
  currency: string;
  timeZone: string;
}

/** Market facts (currency, time zone) are public facts about the market, not claims about Campaignly. */
export const markets = [
  {
    href: "/locations/india/",
    label: "India",
    currency: "INR",
    timeZone: "IST (UTC+5:30)",
    summary: "Meta- and WhatsApp-led acquisition, regional creative, festive-season planning.",
  },
  {
    href: "/locations/usa/",
    label: "USA",
    currency: "USD",
    timeZone: "ET to PT (UTC−5 to −8)",
    summary: "Google, Meta, LinkedIn and Microsoft Ads with US privacy and ad-category rules.",
  },
  {
    href: "/locations/canada/",
    label: "Canada",
    currency: "CAD",
    timeZone: "ET to PT (UTC−5 to −8)",
    summary: "English and French campaigns with CASL-aware follow-up.",
  },
  {
    href: "/locations/uae/",
    label: "UAE",
    currency: "AED",
    timeZone: "GST (UTC+4)",
    summary: "Arabic and English campaigns across Google, Meta, Snapchat and TikTok.",
  },
] as const satisfies readonly MarketItem[];

export const method = [
  {
    step: "Diagnose",
    text: "Audit the accounts, tracking, funnel and unit economics before touching spend.",
  },
  {
    step: "Position",
    text: "Decide what you say, to whom, and why it should win against the alternatives.",
  },
  {
    step: "Acquire",
    text: "Run paid media and search against the customers worth acquiring.",
  },
  {
    step: "Convert",
    text: "Fix the pages, offers and follow-up that turn attention into revenue.",
  },
  {
    step: "Retain",
    text: "Bring customers back through WhatsApp, email and CRM automation.",
  },
  {
    step: "Scale",
    text: "Increase budget only where the numbers hold, market by market.",
  },
] as const;
