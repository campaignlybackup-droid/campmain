import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import { isValidElement, type AnchorHTMLAttributes, type ReactNode } from "react";
import { TableScroll } from "@/components/TableScroll";

function A({ href = "", children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const cls = "text-ink underline decoration-gold/70 underline-offset-4 hover:decoration-gold";
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} rel="noopener" target="_blank" {...rest}>
      {children}
    </a>
  );
}

/** Plain text of a React subtree, used to label tables by their header row. */
function textOf(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join(" ");
  if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children);
  return "";
}

function tableLabel(children: ReactNode): string {
  const kids = Array.isArray(children) ? children : [children];
  const head = kids.find((k) => isValidElement(k) && k.type === "thead");
  const text = textOf(head ?? null).replace(/\s+/g, " ").trim();
  return text ? `Table: ${text}` : "Table";
}

const components: MDXComponents = {
  // Posts never contain an H1; the page template renders it from frontmatter.
  h1: (p) => <h2 {...p} className="mt-14 text-display-md" />,
  h2: (p) => <h2 {...p} className="mt-14 text-display-md" />,
  h3: (p) => <h3 {...p} className="mt-10 text-2xl" />,
  p: (p) => <p {...p} className="mt-5 text-mute" />,
  ul: (p) => <ul {...p} className="mt-5 list-disc space-y-2 pl-6 text-mute marker:text-gold-deep" />,
  ol: (p) => <ol {...p} className="mt-5 list-decimal space-y-2 pl-6 text-mute marker:text-gold-deep" />,
  li: (p) => <li {...p} className="pl-1" />,
  strong: (p) => <strong {...p} className="font-semibold text-ink" />,
  a: A,
  table: (p) => (
    <TableScroll label={tableLabel(p.children)} className="mt-8">
      <table {...p} className="table-site min-w-[32rem]" />
    </TableScroll>
  ),
  blockquote: (p) => <blockquote {...p} className="mt-8 border-l-2 border-gold pl-6 text-lead" />,
  hr: () => <hr className="my-12 border-line" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
