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
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl text-display-xl">{page.h1}</h1>
        <p className="mt-10 max-w-3xl text-lead text-mute">{intro}</p>
      </section>
      <section aria-labelledby="hub-list" className="border-t border-line py-20 md:py-28">
        <div className="container-site">
          <h2 id="hub-list" className="text-display-md">
            {listHeading}
          </h2>
          <ul className="mt-10 border-t border-line">
            {items.map((it, i) => (
              <li key={it.href} className="border-b border-line">
                <Link href={it.href} className="group grid items-baseline gap-2 py-7 md:grid-cols-12 md:gap-6">
                  <span aria-hidden="true" className="text-sm text-mute tabular-nums md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl transition-colors group-hover:text-gold md:col-span-4 md:text-3xl">
                    {it.label}
                  </span>
                  <span className="text-mute md:col-span-6">
                    {it.summary}
                    {it.meta ? <span className="mt-1 block text-sm">{it.meta}</span> : null}
                  </span>
                  <span aria-hidden="true" className="hidden text-right text-gold transition-transform group-hover:translate-x-1 md:col-span-1 md:block">
                    →
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
