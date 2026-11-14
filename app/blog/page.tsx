import { notFound } from "next/navigation";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PostList } from "@/components/PostList";
import { getPage } from "@/content/pages";
import { absoluteUrl } from "@/lib/brand";
import { allPosts, categories, type CategorySlug } from "@/lib/blog";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/blog/");

export default async function BlogHub() {
  const posts = await allPosts();
  if (posts.length === 0) notFound();
  const cats = (Object.keys(categories) as CategorySlug[])
    .map((c) => ({ slug: c, ...categories[c], count: posts.filter((p) => p.category === c).length }))
    .filter((c) => c.count > 0);
  return (
    <>
      <JsonLd
        data={graph(
          {
            ...webPageNode("/blog/", "CollectionPage"),
            mainEntity: {
              "@type": "ItemList",
              itemListElement: posts.map((p, i) => ({ "@type": "ListItem", position: i + 1, url: absoluteUrl(`/blog/${p.slug}/`) })),
            },
          },
          breadcrumbNode("/blog/"),
        )}
      />
      <Breadcrumbs path="/blog/" />
      <section className="container-site pt-12 pb-16 md:pt-20 md:pb-20">
        <p className="eyebrow">Insights</p>
        <h1 className="rise mt-6 text-display-xl"><span className="text-gradient animate">{getPage("/blog/").h1}</span></h1>
        <p className="mt-10 max-w-3xl text-lead text-mute">
          Direct answers to the questions founders and marketing heads ask us about paid media, search, creative and
          automation. Each article answers one question, cites its sources and states its date.
        </p>
        <nav aria-label="Categories" className="mt-10">
          <ul className="flex flex-wrap gap-3">
            {cats.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/blog/category/${c.slug}/`}
                  className="inline-flex min-h-11 items-center border border-line-strong px-4 text-[0.95rem] hover:border-ink"
                >
                  {c.label} <span className="ml-2 text-mute">{c.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
      <section aria-label="All articles" className="container-site pb-24">
        <PostList posts={posts} />
      </section>
      <CtaBand />
    </>
  );
}
