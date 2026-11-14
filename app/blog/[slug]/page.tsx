import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { formatDate } from "@/components/PostList";
import { RelatedLinks } from "@/components/RelatedLinks";
import { allPages } from "@/content/pages";
import { siteConfig } from "@/content/site.config";
import { absoluteUrl, brand } from "@/lib/brand";
import { allPosts, categories, loadPost, postSlugs } from "@/lib/blog";
import { ogImagePath } from "@/lib/og";
import { breadcrumbNodeFrom, graph, ids, webPageNodeFrom, type SchemaNode } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return postSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { meta } = await loadPost(slug);
  return pageMetadata({
    path: `/blog/${slug}/`,
    title: meta.title,
    description: meta.description,
    noindex: meta.draft,
    type: "article",
    publishedTime: meta.published,
    modifiedTime: meta.updated,
  });
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { meta, Body } = await loadPost(slug);
  const path = `/blog/${slug}/`;
  const author = siteConfig.author;
  const authorName = author?.name ?? "Campaignly Editorial Team";

  const authorNode: SchemaNode = author
    ? {
        "@type": "Person",
        "@id": `${brand.url}/#author`,
        name: author.name,
        jobTitle: author.role,
        description: author.bio,
        worksFor: { "@id": ids.org },
        ...(author.linkedin ? { sameAs: [author.linkedin] } : {}),
      }
    : {};
  const article: SchemaNode = {
    "@type": "Article",
    "@id": `${absoluteUrl(path)}#article`,
    headline: meta.h1,
    description: meta.description,
    datePublished: meta.published,
    dateModified: meta.updated,
    image: [absoluteUrl(ogImagePath(path))],
    author: author ? { "@id": `${brand.url}/#author` } : { "@id": ids.org },
    publisher: { "@id": ids.org },
    mainEntityOfPage: { "@id": `${absoluteUrl(path)}#webpage` },
    articleSection: categories[meta.category].label,
    inLanguage: "en",
  };
  const crumbs = [
    { path: "/", label: "Home" },
    { path: "/blog/", label: "Insights" },
    { path, label: meta.h1 },
  ];

  const pageIndex = new Map(allPages().map((p) => [p.path, p]));
  const relatedPages = meta.related
    .map((r) => pageIndex.get(r))
    .filter((p) => p !== undefined)
    .map((p) => ({ href: p.path, label: p.h1, summary: p.description }));
  const morePosts = (await allPosts())
    .filter((p) => p.slug !== slug && (p.category === meta.category || p.related.some((r) => meta.related.includes(r))))
    .slice(0, 2)
    .map((p) => ({ href: `/blog/${p.slug}/`, label: p.h1, summary: p.description }));

  return (
    <>
      <JsonLd
        data={graph(
          webPageNodeFrom({ path, title: meta.title, description: meta.description }),
          breadcrumbNodeFrom(path, crumbs),
          article,
          ...(author ? [authorNode] : []),
        )}
      />
      <Breadcrumbs items={crumbs} />
      <article className="container-site pt-12 pb-20 md:pt-20">
        <header className="max-w-4xl">
          <p className="eyebrow">
            <Link href={`/blog/category/${meta.category}/`} className="hover:text-ink">
              {categories[meta.category].label}
            </Link>
          </p>
          <h1 className="rise mt-6 text-display-lg"><span className="text-gradient animate">{meta.h1}</span></h1>
          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-mute">
            <div className="flex gap-2">
              <dt>By</dt>
              <dd className="text-ink">{authorName}</dd>
            </div>
            <div className="flex gap-2">
              <dt>Published</dt>
              <dd>
                <time dateTime={meta.published}>{formatDate(meta.published)}</time>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt>Updated</dt>
              <dd>
                <time dateTime={meta.updated}>{formatDate(meta.updated)}</time>
              </dd>
            </div>
          </dl>
        </header>
        <div className="mt-12 max-w-[46rem] border-l-2 border-gold pl-6">
          <p className="text-sm font-medium tracking-wide text-mute">Summary</p>
          <p className="mt-3 text-lead">{meta.answer}</p>
        </div>
        <div className="mt-6 max-w-[46rem] text-[1.0625rem] leading-relaxed md:text-lg">
          <Body />
        </div>
      </article>
      {relatedPages.length || morePosts.length ? (
        <section aria-label="Related" className="py-20 md:py-24">
          <div className="container-site grid gap-16 lg:grid-cols-2">
            {relatedPages.length ? <RelatedLinks id="rel-services" heading="Related services" items={relatedPages} /> : null}
            {morePosts.length ? <RelatedLinks id="rel-posts" heading="Related insights" items={morePosts} /> : null}
          </div>
        </section>
      ) : null}
      <CtaBand />
    </>
  );
}
