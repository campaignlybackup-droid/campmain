import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

function A({ href = "", children, ...rest }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const cls = "text-paper underline decoration-gold/60 underline-offset-4 hover:decoration-gold";
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

const components: MDXComponents = {
  // Posts never contain an H1; the page template renders it from frontmatter.
  h1: (p) => <h2 {...p} className="mt-14 text-display-md" />,
  h2: (p) => <h2 {...p} className="mt-14 text-display-md" />,
  h3: (p) => <h3 {...p} className="mt-10 text-2xl" />,
  p: (p) => <p {...p} className="mt-5 text-mute" />,
  ul: (p) => <ul {...p} className="mt-5 list-disc space-y-2 pl-6 text-mute marker:text-gold" />,
  ol: (p) => <ol {...p} className="mt-5 list-decimal space-y-2 pl-6 text-mute marker:text-gold" />,
  li: (p) => <li {...p} className="pl-1" />,
  strong: (p) => <strong {...p} className="font-medium text-paper" />,
  a: A,
  table: (p) => (
    <div className="mt-8 overflow-x-auto">
      <table {...p} className="table-site min-w-[32rem]" />
    </div>
  ),
  blockquote: (p) => <blockquote {...p} className="mt-8 border-l-2 border-gold pl-6 text-lead" />,
  hr: () => <hr className="my-12 border-line" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
