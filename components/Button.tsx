import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "text";

const styles: Record<Variant, string> = {
  primary:
    "inline-flex min-h-12 items-center justify-center gap-2 bg-gold px-6 py-3 text-[0.95rem] font-medium text-ink transition-colors duration-200 hover:bg-paper",
  secondary:
    "inline-flex min-h-12 items-center justify-center gap-2 border border-line-strong px-6 py-3 text-[0.95rem] font-medium text-paper transition-colors duration-200 hover:border-paper",
  text: "group inline-flex min-h-11 items-center gap-2 text-[0.95rem] font-medium text-paper",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  ctaId,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  /** Identifier used by analytics for cta_click events */
  ctaId?: string;
}) {
  const content =
    variant === "text" ? (
      <>
        <span className="link-quiet">{children}</span>
        <span aria-hidden="true" className="text-gold transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </>
    ) : (
      children
    );
  const cls = `${styles[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls} data-cta={ctaId} rel="noopener" target="_blank">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} data-cta={ctaId}>
      {content}
    </Link>
  );
}
