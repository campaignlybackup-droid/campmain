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
        <ul className="flex items-center gap-7 text-[0.95rem] font-medium">
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
                  className="grid size-8 place-items-center text-mute hover:text-ink"
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
                  className="absolute top-full -left-4 z-50 mt-4 w-80 rounded-2xl border border-line bg-paper p-2 shadow-[0_24px_60px_-20px_rgb(40_30_90/0.3)]"
                >
                  <ul>
                    {g.items.map((it) => (
                      <li key={it.href}>
                        <Link
                          href={it.href}
                          aria-current={pathname === it.href ? "page" : undefined}
                          className="block rounded-xl px-4 py-3 text-[0.95rem] text-mute transition-colors hover:bg-canvas hover:text-ink aria-[current=page]:text-gold-deep"
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
        className="inline-flex min-h-11 items-center gap-3 rounded-xl px-3 text-[0.95rem] font-medium lg:hidden"
      >
        <span>Menu</span>
        <span aria-hidden="true" className="relative block h-3 w-5">
          <span
            className={`absolute left-0 block h-[1.5px] w-5 rounded bg-ink transition-transform duration-200 ${mobileOpen ? "top-1.5 rotate-45" : "top-0"}`}
          />
          <span
            className={`absolute left-0 block h-[1.5px] w-5 rounded bg-ink transition-transform duration-200 ${mobileOpen ? "top-1.5 -rotate-45" : "top-3"}`}
          />
        </span>
      </button>
      <div
        id={`${baseId}-mobile`}
        hidden={!mobileOpen}
        className="fixed inset-x-3 top-[5.25rem] bottom-3 z-40 overflow-y-auto rounded-3xl border border-line bg-paper shadow-[0_24px_60px_-20px_rgb(40_30_90/0.35)] lg:hidden"
      >
        <nav aria-label="Main mobile" className="px-6 py-4">
          {groups.map((g) => (
            <div key={g.href} className="border-b border-line py-6">
              <Link href={g.href} className="font-display text-2xl">
                {g.label}
              </Link>
              <ul className="mt-4 grid gap-1">
                {g.items.map((it) => (
                  <li key={it.href}>
                    <Link href={it.href} className="block py-2 text-mute hover:text-ink">
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
              className="btn btn-primary"
            >
              Apply to Partner
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
