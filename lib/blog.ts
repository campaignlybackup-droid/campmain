import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

export const categories = {
  "paid-media": { label: "Paid media", description: "Meta, Google and creative: how to spend ad budgets well." },
  search: { label: "Search", description: "SEO, AI answers and search advertising." },
  automation: { label: "Automation", description: "WhatsApp, CRM and AI lead handling." },
  "growth-strategy": { label: "Growth strategy", description: "Choosing partners, measuring results and planning growth." },
} as const;

export type CategorySlug = keyof typeof categories;

/** Typed frontmatter for every post. Validated at build; a bad post fails the build. */
export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  h1: string;
  primaryKeyword: string;
  /** ISO date, YYYY-MM-DD */
  published: string;
  updated: string;
  category: CategorySlug;
  /** 40 to 60 word answer shown before the article body */
  answer: string;
  /** Site paths this post supports (services, industries, locations) */
  related: string[];
  draft: boolean;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const ISO = /^\d{4}-\d{2}-\d{2}$/;

function assert(cond: unknown, msg: string): asserts cond {
  if (!cond) throw new Error(`[blog] ${msg}`);
}

function parseMeta(slug: string, fm: Record<string, unknown>): PostMeta {
  const str = (k: string) => {
    const v = fm[k];
    assert(typeof v === "string" && v.trim().length > 0, `${slug}: "${k}" must be a non-empty string`);
    return v.trim();
  };
  const meta: PostMeta = {
    slug,
    title: str("title"),
    description: str("description"),
    h1: str("h1"),
    primaryKeyword: str("primaryKeyword"),
    published: str("published"),
    updated: str("updated"),
    category: str("category") as CategorySlug,
    answer: str("answer"),
    related: Array.isArray(fm.related) ? fm.related.map(String) : [],
    draft: fm.draft === true,
  };
  assert(meta.title.length < 60, `${slug}: title is ${meta.title.length} chars (max 59)`);
  assert(meta.description.length < 155, `${slug}: description is ${meta.description.length} chars (max 154)`);
  assert(ISO.test(meta.published) && ISO.test(meta.updated), `${slug}: dates must be YYYY-MM-DD`);
  assert(meta.updated >= meta.published, `${slug}: updated is before published`);
  assert(meta.category in categories, `${slug}: unknown category "${meta.category}"`);
  const words = meta.answer.split(/\s+/).length;
  assert(words >= 40 && words <= 60, `${slug}: answer is ${words} words (40 to 60)`);
  return meta;
}

export function postSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
    .sort();
}

interface PostModule {
  default: ComponentType;
  frontmatter: Record<string, unknown>;
}

export async function loadPost(slug: string): Promise<{ meta: PostMeta; Body: ComponentType }> {
  const mod = (await import(`@/content/blog/${slug}.mdx`)) as PostModule;
  return { meta: parseMeta(slug, mod.frontmatter ?? {}), Body: mod.default };
}

/** Published posts, newest first. */
export async function allPosts(): Promise<PostMeta[]> {
  const metas = await Promise.all(postSlugs().map(async (s) => (await loadPost(s)).meta));
  return metas.filter((m) => !m.draft).sort((a, b) => (a.published < b.published ? 1 : -1));
}

export async function postsRelatedTo(sitePath: string): Promise<PostMeta[]> {
  return (await allPosts()).filter((p) => p.related.includes(sitePath));
}

export async function postsInCategory(cat: CategorySlug): Promise<PostMeta[]> {
  return (await allPosts()).filter((p) => p.category === cat);
}

/** Count of MDX files that are not drafts. Synchronous so layout code can use it. */
export function publishedPostCountSync(): number {
  return postSlugs().filter((s) => !/^draft:\s*true\s*$/m.test(fs.readFileSync(path.join(BLOG_DIR, `${s}.mdx`), "utf8"))).length;
}

export const MIN_POSTS_FOR_NAV = 3;
export const MIN_POSTS_FOR_CATEGORY_INDEX = 3;
