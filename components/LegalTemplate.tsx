import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getPage, type PagePath } from "@/content/pages";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";

export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export function LegalTemplate({ path, updated, sections }: { path: PagePath; updated: string; sections: LegalSection[] }) {
  const page = getPage(path);
  return (
    <>
      <JsonLd data={graph(webPageNode(path), breadcrumbNode(path))} />
      <Breadcrumbs path={path} />
      <article className="container-site pt-12 pb-24 md:pt-20">
        <h1 className="rise text-display-xl"><span className="text-gradient animate">{page.h1}</span></h1>
        <p className="mt-6 text-sm text-mute">
          Last updated: <time dateTime={updated}>{new Date(updated).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
        </p>
        <div className="prose-site mt-14">
          {sections.map((s) => (
            <section key={s.heading} className="mt-12 first:mt-0">
              <h2 className="text-display-md">{s.heading}</h2>
              {s.paragraphs?.map((p) => (
                <p key={p.slice(0, 50)} className="mt-4 text-mute">
                  {p}
                </p>
              ))}
              {s.items ? (
                <ul className="mt-4 list-disc space-y-2 pl-6 text-mute marker:text-gold-deep">
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </article>
      <CtaBand />
    </>
  );
}
