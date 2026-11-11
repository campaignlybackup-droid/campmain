import type { Metadata } from "next";
import { DetailTemplate } from "@/components/DetailTemplate";
import type { PagePath } from "@/content/pages";
import type { DetailContent } from "@/content/types";
import { siteConfig } from "@/content/site.config";
import { postsRelatedTo } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export function detailMetadata(content: DetailContent): Metadata {
  return buildMetadata(content.path as PagePath);
}

/** Adds related posts and case studies (when they exist) to the page's related groups. */
export async function DetailPage({ content }: { content: DetailContent }) {
  const posts = await postsRelatedTo(content.path);
  const cases = (siteConfig.caseStudies ?? []).filter(
    (c) => content.path.includes(c.industry) || c.services.some((s) => content.path.includes(s)),
  );
  const related = [...content.related];
  const extra = [
    ...cases.map((c) => ({ href: `/case-studies/${c.slug}/`, label: c.headline, summary: c.client })),
    ...posts.slice(0, 3).map((p) => ({ href: `/blog/${p.slug}/`, label: p.h1, summary: p.description })),
  ];
  if (extra.length) related.push({ heading: "Case studies and insights", items: extra });
  return <DetailTemplate content={{ ...content, related }} />;
}
