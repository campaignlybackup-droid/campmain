import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/brand";
import { allRoutes } from "@/lib/routes";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return (await allRoutes())
    .filter((r) => r.indexable)
    .map((r) => ({ url: absoluteUrl(r.path), lastModified: r.lastmod }));
}
