import Link from "next/link";
import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getPage, type PagePath } from "@/content/pages";
import { absoluteUrl } from "@/lib/brand";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";

export interface HubItem {
  href: string;
  label: string;
  summary: string;
  meta?: string;
}

export function HubTemplate({
  path,
  eyebrow,
  intro,
  items,
  listHeading,
  children,
}: {
  path: PagePath;
  eyebrow: string;
  intro: string;
  items: HubItem[];
  listHeading: string;
  children?: ReactNode;
}) {
  const page = getPage(path);
  const itemList = {
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.label, url: absoluteUrl(it.href) })),
  };
  return (
    <>
      <JsonLd data={graph({ ...webPageNode(path, "CollectionPage"), mainEntity: itemList }, breadcrumbNode(path))} />
      <Breadcrumbs path={path} />
      <section className="container-site pt-12 pb-16 md:pt-20 md:pb-24">
        <p className="eyebrow fade-up">{eyebrow}</p>
        <h1 className="rise mt-6 max-w-5xl text-display-xl"><span className="text-gradient animate">{page.h1}</span></h1>
        <p className="mt-10 max-w-3xl text-lead text-mute">{intro}</p>
      </section>
      <section aria-labelledby="hub-list" className="py-16 md:py-24">
        <div className="container-site">
          <h2 id="hub-list" className="text-display-md">
            {listHeading}
          </h2>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((it, i) => (
              <li key={it.href} className="reveal" style={{ ["--i" as string]: i % 3 }}>
                <Link
                  href={it.href}
                  data-tilt="5"
                  data-spot=""
                  className="card card-hover spot group flex h-full flex-col p-7 md:p-8"
                >
                  <span aria-hidden="true" className="chip font-display text-sm font-bold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-8 font-display text-2xl font-bold tracking-[-0.02em]">{it.label}</span>
                  <span className="mt-3 text-[0.975rem] text-mute">
                    {it.summary}
                    {it.meta ? <span className="mt-1 block text-sm">{it.meta}</span> : null}
                  </span>
                  <span
                    aria-hidden="true"
                    className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-gold-deep"
                  >
                    Explore
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {children}
      <CtaBand />
    </>
  );
}
