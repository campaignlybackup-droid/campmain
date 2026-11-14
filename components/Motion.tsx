"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * One small script for all page motion. Everything here is progressive:
 * without it the page is complete and static.
 * - Scroll reveal: adds .is-in to .reveal elements as they enter the viewport.
 * - Tilt: [data-tilt] cards lean toward a fine pointer.
 * - Spotlight: [data-spot] cards get --mx/--my for a cursor glow.
 * - Stage: [data-stage] (the hero dashboard) follows the pointer and flattens on scroll.
 */
export function Motion() {
  const pathname = usePathname();

  // Reveal: re-run on each route so new pages are observed.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.is-in)"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Pointer effects, set up once.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (reduce) return;

    let frame = 0;
    let lastEvent: PointerEvent | null = null;
    let tilted: HTMLElement | null = null;

    function apply() {
      frame = 0;
      const e = lastEvent;
      if (!e) return;
      const target = e.target instanceof Element ? e.target : null;

      const spot = target?.closest<HTMLElement>("[data-spot]");
      if (spot) {
        const r = spot.getBoundingClientRect();
        spot.style.setProperty("--mx", `${e.clientX - r.left}px`);
        spot.style.setProperty("--my", `${e.clientY - r.top}px`);
      }

      const tilt = target?.closest<HTMLElement>("[data-tilt]") ?? null;
      if (tilted && tilted !== tilt) resetTilt(tilted);
      tilted = tilt;
      if (tilt) {
        const r = tilt.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        const max = Number(tilt.dataset.tilt) || 5;
        tilt.style.setProperty("--rx", `${(-y * max).toFixed(2)}deg`);
        tilt.style.setProperty("--ry", `${(x * max).toFixed(2)}deg`);
        tilt.style.setProperty("--ty", "-4px");
      }

      const vx = e.clientX / window.innerWidth - 0.5;
      const vy = e.clientY / window.innerHeight - 0.5;
      document.querySelectorAll<HTMLElement>("[data-stage]").forEach((s) => {
        s.style.setProperty("--py", `${(vx * 10).toFixed(2)}deg`);
        s.style.setProperty("--px", `${(-vy * 6).toFixed(2)}deg`);
      });
    }

    function resetTilt(el: HTMLElement) {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
      el.style.setProperty("--ty", "0px");
    }

    function onMove(e: PointerEvent) {
      if (e.pointerType !== "mouse") return;
      lastEvent = e;
      if (!frame) frame = requestAnimationFrame(apply);
    }

    function onLeave() {
      if (tilted) resetTilt(tilted);
      tilted = null;
    }

    let scrollFrame = 0;
    function onScroll() {
      if (scrollFrame) return;
      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        const vh = window.innerHeight;
        document.querySelectorAll<HTMLElement>("[data-stage]").forEach((s) => {
          const r = s.getBoundingClientRect();
          if (r.bottom < 0 || r.top > vh) return;
          const p = Math.min(Math.max(1 - r.top / (vh * 0.85), 0), 1);
          s.style.setProperty("--sx", `${(-14 * p).toFixed(2)}deg`);
        });
      });
    }

    if (fine) {
      document.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      document.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
      cancelAnimationFrame(scrollFrame);
    };
  }, []);

  return null;
}
