import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "gold" | "secondary" | "text";

const styles: Record<Variant, string> = {
  primary: "btn btn-primary",
  gold: "btn btn-gold",
  secondary: "btn btn-ghost",
  text: "group inline-flex min-h-11 items-center gap-2 text-[0.95rem] font-semibold text-ink",
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
        <span aria-hidden="true" className="text-gold-deep transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>
      </>
    ) : (
      <>
        {children}
        <span aria-hidden="true" className="btn-arrow">
          →
        </span>
      </>
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
