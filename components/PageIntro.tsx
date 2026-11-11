import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getPage, type PagePath } from "@/content/pages";

/**
 * Inner-page opening: breadcrumbs, the H1 (from the SEO registry) and the AEO direct answer.
 * The direct answer is 40 to 60 words and comes before any marketing copy.
 */
export function PageIntro({
  path,
  eyebrow,
  question,
  answer,
  children,
}: {
  path: PagePath;
  eyebrow: string;
  /** The page's main question, shown as a label above the direct answer */
  question: string;
  answer: string;
  children?: ReactNode;
}) {
  const page = getPage(path);
  return (
    <>
      <Breadcrumbs path={path} />
      <section className="container-site pt-12 pb-20 md:pt-20 md:pb-28">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 max-w-5xl text-display-xl">{page.h1}</h1>
        <div className="mt-12 grid gap-10 md:mt-16 md:grid-cols-12">
          <div className="border-l-2 border-gold pl-6 md:col-span-8">
            <p className="text-sm font-medium tracking-wide text-mute">{question}</p>
            <p className="mt-3 text-lead">{answer}</p>
          </div>
          {children ? <div className="md:col-span-12">{children}</div> : null}
        </div>
      </section>
    </>
  );
}
