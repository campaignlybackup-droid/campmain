import type { Metadata } from "next";
import { getPage, type PagePath } from "@/content/pages";
import { absoluteUrl, brand } from "@/lib/brand";

/** Metadata for a registry page. Titles are absolute (no template), so they stay under 60 chars. */
export function buildMetadata(path: PagePath): Metadata {
  const page = getPage(path);
  const url = absoluteUrl(page.path);
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    robots: page.noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      siteName: brand.displayName,
      title: page.title,
      description: page.description,
      locale: "en",
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
  };
}
