"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

export interface NavGroup {
  label: string;
  href: string;
  items: { href: string; label: string }[];
}

export interface NavLink {
  label: string;
  href: string;
}

/**
 * Desktop: hub links with a separate disclosure button for each submenu (hub link works without JS).
 * Mobile: one disclosure panel. Escape closes and returns focus; route change closes everything.
 */
export function SiteNav({ groups, links }: { groups: NavGroup[]; links: NavLink[] }) {
  const pathname = usePathname();
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);
  const baseId = useId();

  const closeAll = useCallback(() => {
    setOpen(null);
    setMobileOpen(false);
  }, []);

  // Close menus after navigation. Deferred so state is not set synchronously inside the effect.
  useEffect(() => {
    const t = window.setTimeout(closeAll, 0);
    return () => window.clearTimeout(t);
  }, [pathname, closeAll]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key !== "Escape") return;
      if (open) {
        const btn = document.getElementById(`${baseId}-btn-${open}`);
        setOpen(null);
        btn?.focus();
      } else if (mobileOpen) {
        setMobileOpen(false);
        mobileButtonRef.current?.focus();
      }
    }
    function onPointer(e: PointerEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open, mobileOpen, baseId]);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const isCurrent = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <div ref={navRef} className="flex items-center">
      {/* Desktop */}
      <nav aria-label="Main" className="hidden lg:block">
        <ul className="flex items-center gap-8 text-[0.95rem]">
          {groups.map((g, gi) => {
            const panelId = `${baseId}-panel-${gi}`;
            const expanded = open === String(gi);
            return (
              <li
                key={g.href}
                className="relative flex items-center gap-1"
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen((o) => (o === String(gi) ? null : o));
                }}
              >
                <Link
                  href={g.href}
                  className="link-quiet py-2"
                  aria-current={pathname === g.href ? "page" : undefined}
                >
                  {g.label}
                </Link>
                <button
                  id={`${baseId}-btn-${gi}`}
                  type="button"
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => setOpen(expanded ? null : String(gi))}
                  className="grid size-8 place-items-center text-mute hover:text-paper"
                >
                  <span className="sr-only">{`${g.label} menu`}</span>
                  <svg
                    aria-hidden="true"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                  >
                    <path d="M1 3l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </button>
                <div
                  id={panelId}
                  hidden={!expanded}
                  className="absolute top-full left-0 z-50 mt-3 w-80 border border-line bg-ink p-2 shadow-2xl"
                >
                  <ul>
                    {g.items.map((it) => (
                      <li key={it.href}>
                        <Link
                          href={it.href}
                          aria-current={pathname === it.href ? "page" : undefined}
                          className="block px-4 py-3 text-[0.95rem] text-mute hover:bg-ink-raised hover:text-paper aria-[current=page]:text-gold"
                        >
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="link-quiet py-2"
                aria-current={isCurrent(l.href) ? "page" : undefined}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile */}
      <button
        ref={mobileButtonRef}
        type="button"
        aria-expanded={mobileOpen}
        aria-controls={`${baseId}-mobile`}
        onClick={() => setMobileOpen((v) => !v)}
        className="inline-flex min-h-11 items-center gap-3 px-1 text-[0.95rem] lg:hidden"
      >
        <span>Menu</span>
        <span aria-hidden="true" className="relative block h-3 w-5">
          <span
            className={`absolute left-0 block h-px w-5 bg-paper transition-transform duration-200 ${mobileOpen ? "top-1.5 rotate-45" : "top-0"}`}
          />
          <span
            className={`absolute left-0 block h-px w-5 bg-paper transition-transform duration-200 ${mobileOpen ? "top-1.5 -rotate-45" : "top-3"}`}
          />
        </span>
      </button>
      <div
        id={`${baseId}-mobile`}
        hidden={!mobileOpen}
        className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto border-t border-line bg-ink lg:hidden"
      >
        <nav aria-label="Main mobile" className="container-site py-8">
          {groups.map((g) => (
            <div key={g.href} className="border-b border-line py-6">
              <Link href={g.href} className="font-display text-2xl">
                {g.label}
              </Link>
              <ul className="mt-4 grid gap-1">
                {g.items.map((it) => (
                  <li key={it.href}>
                    <Link href={it.href} className="block py-2 text-mute hover:text-paper">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <ul className="py-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="block py-3 font-display text-2xl">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-4 pt-2 pb-10">
            <Link
              href="/apply/"
              data-cta="nav_mobile_apply"
              className="inline-flex min-h-12 items-center justify-center bg-gold px-6 font-medium text-ink"
            >
              Apply to Partner
            </Link>
            <Link
              href="/free-ad-account-review/"
              data-cta="nav_mobile_review"
              className="inline-flex min-h-12 items-center justify-center border border-line-strong px-6 font-medium"
            >
              Free ad account review
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
