import type { ReactNode } from "react";

/**
 * Horizontal scroll container for tables on narrow screens.
 * Focusable and labelled so keyboard users can scroll it (WCAG 2.1.1, axe scrollable-region-focusable).
 */
export function TableScroll({ label, children, className = "" }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div role="region" aria-label={label} tabIndex={0} className={`overflow-x-auto focus-visible:outline-2 ${className}`}>
      {children}
    </div>
  );
}
