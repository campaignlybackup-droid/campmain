import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { IntroOrnament } from "@/components/IntroOrnament";
import { getPage, type PagePath } from "@/content/pages";

/**
 * Inner-page opening: breadcrumbs, the H1 (from the SEO registry) and the AEO direct answer.
 * The direct answer is 40 to 60 words and comes before any marketing copy.
 */
export function PageIntro({
  path,
  eyebrow,
  answer,
  children,
}: {
  path: PagePath;
  eyebrow: string;
  /** The page's main question. Kept in content for reference; not displayed. */
  question?: string;
  answer: string;
  children?: ReactNode;
}) {
  const page = getPage(path);
  return (
    <div className="relative">
      <IntroOrnament />
      <Breadcrumbs path={path} />
      <section className="container-site pt-10 pb-20 md:pt-16 md:pb-28">
        <p className="eyebrow fade-up">{eyebrow}</p>
        <h1 className="rise mt-6 max-w-5xl text-display-xl xl:max-w-[52rem]">
          <span className="text-gradient animate">{page.h1}</span>
        </h1>
        <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-12">
          <div
            className="fade-up rounded-3xl border border-white/80 bg-white/70 p-6 shadow-[0_20px_50px_-30px_rgb(40_30_90/0.35)] backdrop-blur md:col-span-9 md:p-8 lg:col-span-8"
            style={{ animationDelay: "150ms" }}
          >
            <p className="text-lead">{answer}</p>
          </div>
          {children ? <div className="md:col-span-12">{children}</div> : null}
        </div>
      </section>
    </div>
  );
}
