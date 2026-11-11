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
  /** Path to the logo in /public, SVG or PNG at least 112x112, e.g. "/brand/logo.svg" */
  logo: string | null;
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
  /** Business days to deliver a free ad account review, e.g. 3 */
  reviewTurnaroundDays: number | null;
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
  email: null,
  phone: null,
  whatsappNumber: null,
  whatsappMessage: null,
  address: null,
  presence: { india: null, usa: null, canada: null, uae: null },
  legalName: null,
  foundingYear: null,
  logo: null,
  social: {
    linkedin: null,
    instagram: null,
    facebook: null,
    x: null,
    youtube: null,
  },
  ga4Id: null,
  metaPixelId: null,
  searchConsoleVerification: null,
  bingVerification: null,
  formEndpoint: null,
  leadNotificationEmail: null,
  hours: null,
  applicationResponseHours: null,
  reviewTurnaroundDays: null,
  stats: null,
  caseStudies: null,
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
