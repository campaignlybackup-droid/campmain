import { siteConfig } from "@/content/site.config";

/** Public runtime IDs. Env vars (inlined at build) override site.config.ts. Empty strings count as unset. */
const pick = (env: string | undefined, cfg: string | null) => (env && env.trim()) || cfg || null;

export const publicEnv = {
  formEndpoint: pick(process.env.NEXT_PUBLIC_FORM_ENDPOINT, siteConfig.formEndpoint),
  ga4Id: pick(process.env.NEXT_PUBLIC_GA4_ID, siteConfig.ga4Id),
  metaPixelId: pick(process.env.NEXT_PUBLIC_META_PIXEL_ID, siteConfig.metaPixelId),
};

export const trackingConfigured = Boolean(publicEnv.ga4Id || publicEnv.metaPixelId);
