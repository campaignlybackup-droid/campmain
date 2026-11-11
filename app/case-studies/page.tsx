import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getPage } from "@/content/pages";
import { caseStudies } from "@/lib/case-studies";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/case-studies/");

export default function CaseStudiesHub() {
  const list = caseStudies();
  if (list.length === 0) notFound();
  return (
    <>
      <JsonLd data={graph(webPageNode("/case-studies/", "CollectionPage"), breadcrumbNode("/case-studies/"))} />
      <Breadcrumbs path="/case-studies/" />
      <section className="container-site pt-12 pb-16 md:pt-20">
        <p className="eyebrow">Proof</p>
        <h1 className="mt-6 text-display-xl">{getPage("/case-studies/").h1}</h1>
        <p className="mt-8 max-w-3xl text-lead text-mute">
          Results from Campaignly growth programmes. Clients are anonymised, and every figure states the period it covers.
        </p>
      </section>
      <section aria-label="All case studies" className="container-site pb-24">
        <ul className="border-t border-line">
          {list.map((c) => (
            <li key={c.slug} className="border-b border-line">
              <Link href={`/case-studies/${c.slug}/`} className="group block py-8">
                <span className="text-sm text-mute">{c.client}</span>
                <span className="mt-2 block font-display text-2xl group-hover:text-gold md:text-3xl">{c.headline}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <CtaBand />
    </>
  );
}
