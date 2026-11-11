import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";
import { siteConfig, type CaseStudySummary } from "@/content/site.config";

const DIR = path.join(process.cwd(), "content", "case-studies");

/** Case studies come from site.config.ts (all figures) plus an optional MDX narrative of the same slug. */
export function caseStudies(): CaseStudySummary[] {
  return siteConfig.caseStudies ?? [];
}

export function findCaseStudy(slug: string): CaseStudySummary | undefined {
  return caseStudies().find((c) => c.slug === slug);
}

export async function loadNarrative(slug: string): Promise<ComponentType | null> {
  if (!fs.existsSync(path.join(DIR, `${slug}.mdx`))) return null;
  const mod = (await import(`@/content/case-studies/${slug}.mdx`)) as { default: ComponentType };
  return mod.default;
}

/** Placeholder slug so the static export can build the route when no case studies exist; removed by postbuild. */
export const EMPTY_SENTINEL = "__none__";
