import type { Metadata } from "next";
import { getPage, type PagePath } from "@/content/pages";
import { absoluteUrl, brand } from "@/lib/brand";
import { ogImagePath } from "@/lib/og";

export interface MetaInput {
  path: string;
  title: string;
  description: string;
  noindex?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
}

/** One builder for every page: absolute title, canonical, robots, Open Graph and Twitter with a generated image. */
export function pageMetadata(m: MetaInput): Metadata {
  const url = absoluteUrl(m.path);
  const image = { url: absoluteUrl(ogImagePath(m.path)), width: 1200, height: 630, alt: m.title };
  return {
    title: { absolute: m.title },
    description: m.description,
    alternates: { canonical: url },
    robots: m.noindex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: m.type ?? "website",
      url,
      siteName: brand.displayName,
      title: m.title,
      description: m.description,
      locale: "en",
      images: [image],
      ...(m.type === "article" ? { publishedTime: m.publishedTime, modifiedTime: m.modifiedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: m.title, description: m.description, images: [image.url] },
  };
}

export function buildMetadata(path: PagePath): Metadata {
  const page = getPage(path);
  return pageMetadata({ path: page.path, title: page.title, description: page.description, noindex: page.noindex });
}
