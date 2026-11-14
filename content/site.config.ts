/**
 * Campaignly Media: the single source of truth for every business fact on the site.
 *
 * RULES
 * - Every value you have not verified stays `null`.
 * - Any section that depends on a `null` value does not render. No placeholders.
 * - Never enter a client name anywhere in this file. Case studies are anonymised.
 * - Stats need a time period and, ideally, a source note you can defend if asked.
 *
 * Environment variables (see .env.example) override the matching values below
 * for GA4, Meta Pixel and the form endpoint, so IDs can differ per environment.
 */

export type Market = "india" | "usa" | "canada" | "uae";

export interface PostalAddress {
  /** Street and building, e.g. "Unit 4, 2nd Floor, Example Tower, MG Road" */
  streetAddress: string;
  /** City, e.g. "Mumbai" */
  addressLocality: string;
  /** State or emirate, e.g. "Maharashtra" */
  addressRegion: string;
  /** PIN / ZIP / postal code */
  postalCode: string;
  /** ISO 3166-1 alpha-2 country code, e.g. "IN", "US", "CA", "AE" */
  addressCountry: "IN" | "US" | "CA" | "AE";
}

export interface Stat {
  /** The figure exactly as it should display, e.g. "₹12 Cr" or "3.4x" */
  value: string;
  /** What it measures, e.g. "tracked revenue from paid media" */
  label: string;
  /** The period it covers, e.g. "April 2025 to March 2026". Required. */
  period: string;
  /** Internal note on where the number comes from. Not displayed. */
  sourceNote: string;
}

export interface CaseStudySummary {
  /** URL slug, anonymised, e.g. "d2c-eyewear-meta-ads" (never a client name) */
  slug: string;
  /** Anonymised descriptor, e.g. "A D2C eyewear brand" */
  client: string;
  industry:
    | "ecommerce-d2c"
    | "education"
    | "healthcare"
    | "real-estate"
    | "b2b-professional-services"
    | "saas"
    | "hospitality";
  market: Market;
  services: string[];
  /** Headline result with its period, e.g. "Cost per admission down 38% over two intakes" */
  headline: string;
  /** Figures shown on the case study, each with its period */
  results: Stat[];
}

export interface Testimonial {
  quote: string;
  /** Role and anonymised company only, e.g. "Head of Marketing, a private university" */
  attribution: string;
  /** Written permission to publish this quote was received */
  permissionOnFile: boolean;
}

export interface SiteConfig {
  /** Contact email shown sitewide and in schema, e.g. "hello@campaignlymedia.com" */
  email: string | null;
  /** Phone in international format, e.g. "+91 98765 43210" */
  phone: string | null;
  /** WhatsApp number, digits only with country code, e.g. "919876543210" */
  whatsappNumber: string | null;
  /** Prefilled WhatsApp message, e.g. "Hi Campaignly, I'd like to talk about growth." */
  whatsappMessage: string | null;
  /** Registered business address. Leave null to keep address out of the site and schema. */
  address: PostalAddress | null;
  /** Physical presence per market (office or registered entity). Affects location page copy. */
  presence: Record<Market, PostalAddress | null>;
  /** Registered legal entity name, e.g. "Campaignly Media Private Limited" (Terms/Privacy) */
  legalName: string | null;
  /** Year the company was founded, e.g. 2023 */
  foundingYear: number | null;
  /** Path to the logo symbol in /public, shown in the header and footer, e.g. "/brand/symbol.png" */
  logo: string | null;
  /** Path to a square logo mark in /public, at least 112x112, used for schema `logo` (falls back to `logo`) */
  logoMark: string | null;
  social: {
    /** Full URL, e.g. "https://www.linkedin.com/company/campaignly-media/" */
    linkedin: string | null;
    instagram: string | null;
    facebook: string | null;
    /** X (Twitter) profile URL */
    x: string | null;
    youtube: string | null;
  };
  /** GA4 Measurement ID, e.g. "G-XXXXXXX". NEXT_PUBLIC_GA4_ID overrides. */
  ga4Id: string | null;
  /** Meta Pixel ID (numeric string). NEXT_PUBLIC_META_PIXEL_ID overrides. */
  metaPixelId: string | null;
  /** Google Search Console HTML-tag verification content value only */
  searchConsoleVerification: string | null;
  /** Bing Webmaster Tools msvalidate.01 content value */
  bingVerification: string | null;
  /** Google Apps Script web app URL. NEXT_PUBLIC_FORM_ENDPOINT overrides. */
  formEndpoint: string | null;
  /** Address that receives lead notification emails (used by Apps Script setup docs) */
  leadNotificationEmail: string | null;
  /** Working hours you reply in, e.g. "Monday to Friday, 10:00 to 19:00 IST" */
  hours: string | null;
  /** Hours within which you commit to reply to an application, e.g. 24 */
  applicationResponseHours: number | null;
  /** Verified headline stats. Section is hidden while null or empty. */
  stats: Stat[] | null;
  /** Anonymised case studies. Hub and nav item are hidden while null or empty. */
  caseStudies: CaseStudySummary[] | null;
  /** Testimonials. Never used for Review schema. Hidden while null or empty. */
  testimonials: Testimonial[] | null;
  /** Founder block on /about/. Off by default. */
  founder: {
    enabled: boolean;
    name: string | null;
    role: string | null;
    /** Two to four sentences, first person or third person */
    bio: string | null;
    linkedin: string | null;
    /** Path in /public to a pre-sized photo, e.g. "/images/founder-800.avif" */
    photo: string | null;
  };
  /** Named blog author. While null, posts are attributed to "Campaignly Editorial Team". */
  author: {
    name: string;
    role: string;
    bio: string;
    linkedin: string | null;
  } | null;
}

export const siteConfig: SiteConfig = {
  email: "founder@campaignlymedia.com",
  phone: null,
  whatsappNumber: "919729610902",
  whatsappMessage: "Hi Campaignly, I'd like to talk about growing the business.",
  address: null,
  presence: { india: null, usa: null, canada: null, uae: null },
  legalName: null,
  foundingYear: 2021,
  logo: "/brand/campaignly-symbol.png",
  logoMark: "/brand/campaignly-mark.png",
  social: {
    linkedin: "https://www.linkedin.com/company/campaignlymedia/",
    instagram: "https://www.instagram.com/campaignlymedia/",
    facebook: null,
    x: null,
    youtube: null,
  },
  ga4Id: "G-0KHRJC7R9J",
  metaPixelId: null,
  searchConsoleVerification: null,
  bingVerification: null,
  formEndpoint: null,
  leadNotificationEmail: "founder@campaignlymedia.com",
  hours: null,
  applicationResponseHours: null,
  stats: [
    { value: "$1M+", label: "Ad spend managed", period: "Since 2021", sourceNote: "Published on the previous campaignlymedia.com homepage and results page; approved by the owner." },
    { value: "1,200+", label: "Campaigns launched", period: "Since 2021", sourceNote: "Published on the previous campaignlymedia.com homepage; approved by the owner." },
    { value: "45,000+", label: "Qualified leads generated", period: "Since 2021", sourceNote: "Published on the previous campaignlymedia.com results page; approved by the owner." },
    { value: "98%", label: "Client retention", period: "Since 2021", sourceNote: "Published on the previous campaignlymedia.com results page; approved by the owner." },
  ],
  caseStudies: [
    {
      slug: "service-business-lead-cost",
      client: "A service business in India and the UAE",
      industry: "b2b-professional-services",
      market: "india",
      services: ["meta-ads", "landing-pages"],
      headline: "Cost per lead down 42% in six months, across India and the UAE",
      results: [
        { value: "-42%", label: "Cost per lead", period: "Over 6 months", sourceNote: "Previous site case study 1; approved by the owner." },
        { value: "2.8x", label: "Qualified leads on the same budget", period: "Over 6 months", sourceNote: "Previous site case study 1." },
        { value: "-55%", label: "Cost per sale", period: "Over 6 months", sourceNote: "Previous site case study 1." },
      ],
    },
    {
      slug: "ecommerce-meta-ads-roas",
      client: "An ecommerce brand in the USA and Canada",
      industry: "ecommerce-d2c",
      market: "usa",
      services: ["meta-ads", "ad-creative"],
      headline: "Meta ads scaled from 2.8x to 5x ROAS while budget grew 3.5x",
      results: [
        { value: "5x", label: "ROAS, up from 2.8x", period: "Over 8 months", sourceNote: "Previous site case study 2; approved by the owner." },
        { value: "3.5x", label: "Ad budget, at a profitable return", period: "Over 8 months", sourceNote: "Previous site case study 2." },
        { value: "2.4x", label: "Conversion rate", period: "Over 8 months", sourceNote: "Previous site case study 2." },
      ],
    },
    {
      slug: "saas-google-ads-conversions",
      client: "A SaaS company in India, the UAE and the USA",
      industry: "saas",
      market: "usa",
      services: ["google-ads", "landing-pages"],
      headline: "Google Ads conversions up 250% in five months, with acquisition cost down 35%",
      results: [
        { value: "+250%", label: "Conversions", period: "Over 5 months", sourceNote: "Previous site case study 3; approved by the owner." },
        { value: "-35%", label: "Cost per acquisition", period: "Over 5 months", sourceNote: "Previous site case study 3." },
        { value: "18% to 42%", label: "Lead-to-sale rate", period: "Over 5 months", sourceNote: "Previous site case study 3." },
      ],
    },
    {
      slug: "b2b-full-funnel-revenue",
      client: "A B2B firm in India, the UAE and the USA",
      industry: "b2b-professional-services",
      market: "india",
      services: ["meta-ads", "google-ads", "ai-automation"],
      headline: "Monthly revenue grew 4x in twelve months on one connected system",
      results: [
        { value: "4x", label: "Monthly revenue, $120K to $480K", period: "Over 12 months", sourceNote: "Previous site case study 4; approved by the owner." },
        { value: "3x", label: "Conversion rate", period: "Over 12 months", sourceNote: "Previous site case study 4." },
      ],
    },
    {
      slug: "ecommerce-conversion-rate",
      client: "An online store in the USA and Canada",
      industry: "ecommerce-d2c",
      market: "usa",
      services: ["landing-pages", "ecommerce-growth"],
      headline: "Store conversion rate up 3.5x in four months, on the same ad spend",
      results: [
        { value: "2% to 7%", label: "Conversion rate", period: "Over 4 months", sourceNote: "Previous site case study 5; approved by the owner." },
        { value: "-28%", label: "Bounce rate", period: "Over 4 months", sourceNote: "Previous site case study 5." },
        { value: "$100K to $350K", label: "Monthly revenue", period: "Over 4 months", sourceNote: "Previous site case study 5." },
      ],
    },
  ],
  testimonials: null,
  founder: {
    enabled: false,
    name: null,
    role: null,
    bio: null,
    linkedin: null,
    photo: null,
  },
  author: null,
};
