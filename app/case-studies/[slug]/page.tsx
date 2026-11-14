import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { industries, services } from "@/content/catalog";
import { caseStudies, EMPTY_SENTINEL, findCaseStudy, loadNarrative } from "@/lib/case-studies";
import { breadcrumbNodeFrom, graph, webPageNodeFrom } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const dynamicParams = false;

export function generateStaticParams() {
  const list = caseStudies();
  return list.length ? list.map((c) => ({ slug: c.slug })) : [{ slug: EMPTY_SENTINEL }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = findCaseStudy(slug);
  if (!c) return { robots: { index: false } };
  return pageMetadata({
    path: `/case-studies/${slug}/`,
    title: `${c.client}: Case Study | Campaignly`.slice(0, 59),
    description: c.headline.slice(0, 154),
  });
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = findCaseStudy(slug);
  if (!c) notFound();
  const Narrative = await loadNarrative(slug);
  const path = `/case-studies/${slug}/`;
  const crumbs = [
    { path: "/", label: "Home" },
    { path: "/case-studies/", label: "Case studies" },
    { path, label: c.client },
  ];
  const industry = industries.find((i) => i.href.includes(c.industry));
  const used = services.filter((s) => c.services.some((x) => s.href.includes(x)));
  return (
    <>
      <JsonLd data={graph(webPageNodeFrom({ path, title: c.headline, description: c.headline }), breadcrumbNodeFrom(path, crumbs))} />
      <Breadcrumbs items={crumbs} />
      <article className="container-site pt-12 pb-20 md:pt-20">
        <p className="eyebrow">{c.client}</p>
        <h1 className="rise mt-6 max-w-4xl text-display-lg"><span className="text-gradient animate">{c.headline}</span></h1>
        <dl className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {c.results.map((r) => (
            <div key={r.label} className="flex flex-col">
              <dt className="text-mute">{r.label}</dt>
              <dd className="order-first font-display text-5xl text-gold-deep">{r.value}</dd>
              <dd className="mt-2 text-sm text-mute">{r.period}</dd>
            </div>
          ))}
        </dl>
        {Narrative ? (
          <div className="mt-14 max-w-[46rem]">
            <Narrative />
          </div>
        ) : null}
        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-[0.95rem]">
          {industry ? (
            <Link href={industry.href} className="underline decoration-line-strong underline-offset-4">
              {industry.label} growth programmes
            </Link>
          ) : null}
          {used.map((s) => (
            <Link key={s.href} href={s.href} className="underline decoration-line-strong underline-offset-4">
              {s.label}
            </Link>
          ))}
        </div>
      </article>
      <CtaBand />
    </>
  );
}
