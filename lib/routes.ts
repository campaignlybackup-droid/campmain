import { allPages } from "@/content/pages";
import { allPosts, categories, MIN_POSTS_FOR_CATEGORY_INDEX, type CategorySlug } from "@/lib/blog";
import { caseStudies } from "@/lib/case-studies";

export interface RouteEntry {
  path: string;
  title: string;
  /** Short label for OG images */
  eyebrow: string;
  heading: string;
  lastmod: string;
  indexable: boolean;
}

/** Date the static pages' content was last revised. Update when page copy changes. */
export const SITE_CONTENT_DATE = "2026-11-11";

/** Every page the build emits (except 404), with whether it belongs in the sitemap. */
export async function allRoutes(): Promise<RouteEntry[]> {
  const posts = await allPosts();
  const cases = caseStudies();
  const out: RouteEntry[] = [];

  for (const p of allPages()) {
    if (p.path === "/case-studies/" && cases.length === 0) continue;
    if (p.path === "/blog/" && posts.length === 0) continue;
    const section = p.path.split("/")[1] ?? "";
    const eyebrow =
      section === "services" ? "Services" : section === "industries" ? "Industries" : section === "locations" ? "Markets" : "Campaignly Media";
    out.push({ path: p.path, title: p.title, eyebrow, heading: p.h1, lastmod: SITE_CONTENT_DATE, indexable: !p.noindex });
  }
  for (const p of posts) {
    out.push({ path: `/blog/${p.slug}/`, title: p.title, eyebrow: categories[p.category].label, heading: p.h1, lastmod: p.updated, indexable: !p.draft });
  }
  for (const c of Object.keys(categories) as CategorySlug[]) {
    const n = posts.filter((p) => p.category === c);
    if (!n.length) continue;
    out.push({
      path: `/blog/category/${c}/`,
      title: `${categories[c].label} Articles | Campaignly`,
      eyebrow: "Insights",
      heading: categories[c].label,
      lastmod: n.map((p) => p.updated).sort().at(-1) ?? SITE_CONTENT_DATE,
      indexable: n.length >= MIN_POSTS_FOR_CATEGORY_INDEX,
    });
  }
  for (const c of cases) {
    out.push({ path: `/case-studies/${c.slug}/`, title: c.headline, eyebrow: "Case study", heading: c.headline, lastmod: SITE_CONTENT_DATE, indexable: true });
  }
  return out;
}
