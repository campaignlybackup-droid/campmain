import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { RelatedLinks } from "@/components/RelatedLinks";
import { TableScroll } from "@/components/TableScroll";
import type { DetailContent, Section } from "@/content/types";
import { breadcrumbNode, faqNode, graph, serviceNode, webPageNode, type SchemaNode } from "@/lib/schema";

function slugId(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 60);
}

const linkCls = "underline decoration-gold underline-offset-4 hover:decoration-ink";

function Sources({ section }: { section: Section }) {
  if (!section.sources?.length) return null;
  return (
    <p className="mt-6 text-sm text-mute">
      Sources:{" "}
      {section.sources.map((s, i) => (
        <span key={s.href}>
          {i > 0 ? "; " : ""}
          <a href={s.href} rel="noopener" target="_blank" className={linkCls}>
            {s.label}
          </a>
        </span>
      ))}
    </p>
  );
}

function Body({ section }: { section: Section }) {
  switch (section.kind) {
    case "prose":
      return (
        <div className="prose-site text-mute">
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      );
    case "list":
      return (
        <ul className="border-t border-line">
          {section.items.map((it) => (
            <li key={it} className="flex gap-4 border-b border-line py-4">
              <span aria-hidden="true" className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gold-tint text-gold-deep">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 5 5 9-10" />
                </svg>
              </span>
              <span className="text-mute">{it}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <TableScroll label={section.caption}>
          <table className={`table-site ${section.columns.length > 2 ? "min-w-[36rem]" : ""}`}>
            <caption className="sr-only">{section.caption}</caption>
            <thead>
              <tr>
                {section.columns.map((c) => (
                  <th key={c} scope="col">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((r) => (
                <tr key={r.join("|")}>
                  {r.map((cell, i) =>
                    i === 0 ? (
                      <th key={i} scope="row" className="pr-6 font-medium">
                        {cell}
                      </th>
                    ) : (
                      <td key={i} className="text-mute">
                        {cell}
                      </td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </TableScroll>
      );
    case "steps":
      return (
        <ol className="border-t border-line">
          {section.steps.map((s, i) => (
            <li key={s.title} className="reveal grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-7">
              <span aria-hidden="true" className="grid size-10 place-items-center rounded-full bg-ink font-display text-sm font-bold text-white tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl">{s.title}</h3>
                <p className="mt-2 text-mute">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      );
    case "definitions":
      return (
        <dl className="border-t border-line">
          {section.items.map((m) => (
            <div key={m.term} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[12rem_1fr] sm:gap-6">
              <dt className="font-display text-xl font-bold tracking-[-0.02em] text-gold-deep">{m.term}</dt>
              <dd className="text-mute">{m.def}</dd>
            </div>
          ))}
        </dl>
      );
    case "scope":
      return (
        <div className="grid gap-14 lg:grid-cols-12">
          <TableScroll label="Scope: included items" className="lg:col-span-8">
            <table className="table-site">
              <caption className="sr-only">Scope: included items</caption>
              <thead>
                <tr>
                  <th scope="col">Included</th>
                  <th scope="col">What it means</th>
                </tr>
              </thead>
              <tbody>
                {section.included.map((r) => (
                  <tr key={r.item}>
                    <th scope="row" className="w-2/5 pr-6 font-medium">
                      {r.item}
                    </th>
                    <td className="text-mute">{r.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScroll>
          <div className="lg:col-span-4">
            <h3 className="text-2xl">Not included by default</h3>
            <ul className="mt-6 border-t border-line">
              {section.excluded.map((r) => (
                <li key={r.item} className="border-b border-line py-4">
                  <p className="font-medium">{r.item}</p>
                  <p className="mt-1 text-[0.95rem] text-mute">
                    {r.href ? (
                      <Link href={r.href} className={linkCls}>
                        {r.detail}
                      </Link>
                    ) : (
                      r.detail
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
  }
}

/** Sections with a side heading use a two-column layout; wide content (tables, scope) stacks. */
function SectionBlock({ section, index }: { section: Section; index: number }) {
  const id = `s-${slugId(section.heading)}`;
  const raised = index % 2 === 1;
  const stacked = section.kind === "table" || section.kind === "scope";
  return (
    <section aria-labelledby={id} className={raised ? "container-site py-6 md:py-10" : "py-16 md:py-24"}>
      <div
        className={`${raised ? "panel px-4 py-12 sm:px-6 sm:py-14 md:px-12 md:py-20" : "container-site"} ${stacked ? "" : "grid gap-12 lg:grid-cols-12"}`}
      >
        <div className={stacked ? "max-w-3xl" : "lg:col-span-4"}>
          <h2 id={id} className="reveal text-display-lg">
            {section.heading}
          </h2>
          {section.intro ? <p className="mt-6 text-mute">{section.intro}</p> : null}
        </div>
        <div className={stacked ? "mt-12" : "lg:col-span-7 lg:col-start-6"}>
          <Body section={section} />
          <Sources section={section} />
        </div>
      </div>
    </section>
  );
}

export function DetailTemplate({ content, extraSchema = [] }: { content: DetailContent; extraSchema?: SchemaNode[] }) {
  const { path } = content;
  const nodes: SchemaNode[] = [webPageNode(path), breadcrumbNode(path)];
  if (content.service) {
    nodes.push(serviceNode(path, { ...content.service, description: content.answer }));
  }
  if (content.faqs.length) nodes.push(faqNode(path, content.faqs));
  nodes.push(...extraSchema);

  return (
    <>
      <JsonLd data={graph(...nodes)} />
      <PageIntro path={path} eyebrow={content.eyebrow} question={content.question} answer={content.answer} />
      {content.sections.map((s, i) => (
        <SectionBlock key={s.heading} section={s} index={i} />
      ))}
      {content.related.length ? (
        <section aria-label="Related pages" className="py-16 md:py-24">
          <div className="container-site grid gap-16 lg:grid-cols-2">
            {content.related.map((r) => (
              <RelatedLinks key={r.heading} id={`rel-${slugId(r.heading)}`} heading={r.heading} items={r.items} />
            ))}
          </div>
        </section>
      ) : null}
      {content.faqs.length ? (
        <div>
          <Faq items={content.faqs} heading="Frequently asked questions" />
        </div>
      ) : null}
      <CtaBand {...(content.cta ?? {})} />
    </>
  );
}
