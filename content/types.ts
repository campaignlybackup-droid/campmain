import type { PagePath } from "@/content/pages";
import type { Faq } from "@/lib/schema";

export interface SourceLink {
  label: string;
  href: string;
}

interface SectionBase {
  /** Question-form where natural. The first sentence after it must answer it. */
  heading: string;
  intro?: string;
  sources?: SourceLink[];
}

export type Section =
  | (SectionBase & { kind: "prose"; paragraphs: string[] })
  | (SectionBase & { kind: "table"; caption: string; columns: string[]; rows: string[][] })
  | (SectionBase & { kind: "steps"; steps: { title: string; text: string }[] })
  | (SectionBase & { kind: "definitions"; items: { term: string; def: string }[] })
  | (SectionBase & {
      kind: "scope";
      included: { item: string; detail: string }[];
      excluded: { item: string; detail: string; href?: string }[];
    })
  | (SectionBase & { kind: "list"; items: string[] });

export interface RelatedItem {
  href: string;
  /** Descriptive anchor text */
  label: string;
  summary?: string;
}

export interface DetailContent {
  path: PagePath;
  slug: string;
  eyebrow: string;
  /** The page's main question */
  question: string;
  /** 40 to 60 word direct answer, before any marketing copy */
  answer: string;
  sections: Section[];
  /** 4 to 8 real questions; rendered visibly and as FAQPage schema */
  faqs: Faq[];
  related: { heading: string; items: RelatedItem[] }[];
  /** Service schema for service pages */
  service?: { name: string; serviceType: string };
  cta?: { heading: string; body: string };
}
