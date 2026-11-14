import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { PostList } from "@/components/PostList";
import { allPosts, categories, MIN_POSTS_FOR_CATEGORY_INDEX, postsInCategory, type CategorySlug } from "@/lib/blog";
import { breadcrumbNodeFrom, graph, webPageNodeFrom } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = await allPosts();
  return (Object.keys(categories) as CategorySlug[])
    .filter((c) => posts.some((p) => p.category === c))
    .map((category) => ({ category }));
}

function info(cat: CategorySlug) {
  const c = categories[cat];
  return {
    path: `/blog/category/${cat}/`,
    title: `${c.label} Articles | Campaignly`,
    description: `${c.description} Articles by Campaignly Media.`,
  };
}

export async function generateMetadata({ params }: { params: Promise<{ category: CategorySlug }> }) {
  const { category } = await params;
  const count = (await postsInCategory(category)).length;
  return pageMetadata({ ...info(category), noindex: count < MIN_POSTS_FOR_CATEGORY_INDEX });
}

export default async function CategoryPage({ params }: { params: Promise<{ category: CategorySlug }> }) {
  const { category } = await params;
  const posts = await postsInCategory(category);
  const i = info(category);
  const label = categories[category].label;
  const crumbs = [
    { path: "/", label: "Home" },
    { path: "/blog/", label: "Insights" },
    { path: i.path, label },
  ];
  return (
    <>
      <JsonLd data={graph(webPageNodeFrom({ ...i, type: "CollectionPage" }), breadcrumbNodeFrom(i.path, crumbs))} />
      <Breadcrumbs items={crumbs} />
      <section className="container-site pt-12 pb-16 md:pt-20">
        <p className="eyebrow">Insights</p>
        <h1 className="rise mt-6 text-display-xl"><span className="text-gradient animate">{label}</span></h1>
        <p className="mt-8 max-w-3xl text-lead text-mute">{categories[category].description}</p>
      </section>
      <section aria-label={`${label} articles`} className="container-site pb-24">
        <PostList posts={posts} />
      </section>
      <CtaBand />
    </>
  );
}
