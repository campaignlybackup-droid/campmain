import type { DetailContent } from "@/content/types";
import adCreative from "@/content/services/ad-creative";
import aiAutomation from "@/content/services/ai-automation";
import brandStrategy from "@/content/services/brand-strategy";
import ecommerceGrowth from "@/content/services/ecommerce-growth";
import googleAds from "@/content/services/google-ads";
import landingPages from "@/content/services/landing-pages";
import metaAds from "@/content/services/meta-ads";
import seo from "@/content/services/seo";
import socialMedia from "@/content/services/social-media";
import b2b from "@/content/industries/b2b-professional-services";
import ecommerceD2c from "@/content/industries/ecommerce-d2c";
import education from "@/content/industries/education";
import healthcare from "@/content/industries/healthcare";
import hospitality from "@/content/industries/hospitality";
import realEstate from "@/content/industries/real-estate";
import saas from "@/content/industries/saas";
import canada from "@/content/locations/canada";
import india from "@/content/locations/india";
import uae from "@/content/locations/uae";
import usa from "@/content/locations/usa";

export const serviceContent: DetailContent[] = [
  metaAds, googleAds, seo, adCreative, ecommerceGrowth, aiAutomation, socialMedia, landingPages, brandStrategy,
];
export const industryContent: DetailContent[] = [ecommerceD2c, education, healthcare, realEstate, b2b, saas, hospitality];
export const locationContent: DetailContent[] = [india, usa, canada, uae];

export function findDetail(list: DetailContent[], slug: string): DetailContent {
  const c = list.find((x) => x.slug === slug);
  if (!c) throw new Error(`No content for slug ${slug}`);
  return c;
}
