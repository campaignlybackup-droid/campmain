/** Fixed brand facts (from the build brief, not user-supplied business data). */
export const brand = {
  name: "Campaignly",
  alternateNames: ["Campaignly Media", "CampaignlyMedia"] as string[],
  displayName: "Campaignly Media",
  tagline: "Outperform. Outshine. Outwin.",
  url: "https://campaignlymedia.com",
  locale: "en",
  areaServed: [
    { name: "India", code: "IN" },
    { name: "United States", code: "US" },
    { name: "Canada", code: "CA" },
    { name: "United Arab Emirates", code: "AE" },
  ],
} as const;

/** Absolute URL with trailing slash for paths (files like /llms.txt are left alone). */
export function absoluteUrl(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const withSlash = /\.[a-z0-9]+$/i.test(clean) || clean.endsWith("/") ? clean : `${clean}/`;
  return `${brand.url}${withSlash}`;
}
