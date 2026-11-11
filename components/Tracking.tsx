"use client";

import { useEffect, useState } from "react";
import { captureAttribution, track } from "@/lib/analytics";

const CONSENT_KEY = "cm_consent";
type Consent = "granted" | "denied";

function readConsent(): Consent | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

function loadScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function loadGa4(id: string) {
  if (window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { anonymize_ip: true });
  loadScript(`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`);
}

function loadPixel(id: string) {
  if (window.fbq) return;
  const queue: unknown[][] = [];
  const fbq = ((...args: unknown[]) => {
    const real = (fbq as unknown as { callMethod?: (...a: unknown[]) => void }).callMethod;
    if (real) real(...args);
    else queue.push(args);
  }) as Window["fbq"] & { queue?: unknown[][]; loaded?: boolean; version?: string; push?: unknown };
  Object.assign(fbq!, { queue, loaded: true, version: "2.0", push: fbq });
  window.fbq = fbq;
  (window as unknown as { _fbq?: unknown })._fbq = fbq;
  loadScript("https://connect.facebook.net/en_US/fbevents.js");
  window.fbq!("init", id);
  window.fbq!("track", "PageView");
}

/**
 * Captures attribution, tracks clicks, and shows the consent banner.
 * Only rendered when at least one tracking ID is configured.
 */
export function Tracking({ ga4Id, pixelId }: { ga4Id: string | null; pixelId: string | null }) {
  const [consent, setConsent] = useState<Consent | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    captureAttribution();
    const c = readConsent();
    // Deferred so state is not set synchronously inside the effect body.
    const t = window.setTimeout(() => {
      setConsent(c);
      setOpen(c === null);
    }, 0);
    const reopen = () => setOpen(true);
    window.addEventListener("cm:consent-settings", reopen);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("cm:consent-settings", reopen);
    };
  }, []);

  useEffect(() => {
    if (consent !== "granted") return;
    if (ga4Id) loadGa4(ga4Id);
    if (pixelId) loadPixel(pixelId);
  }, [consent, ga4Id, pixelId]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = (e.target as Element | null)?.closest?.("a, button");
      if (!el) return;
      const href = el.getAttribute("href") ?? "";
      if (href.includes("wa.me/")) track("whatsapp_click", { location: el.getAttribute("data-cta") ?? "link" });
      const cta = el.getAttribute("data-cta");
      if (cta) track("cta_click", { cta_id: cta });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function choose(c: Consent) {
    try {
      localStorage.setItem(CONSENT_KEY, c);
    } catch {
      /* choice applies for this page view only */
    }
    setConsent(c);
    setOpen(false);
    if (c === "denied" && consent === "granted") window.location.reload();
  }

  if (!open) return null;
  return (
    <section
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-line-strong bg-ink-raised"
    >
      <div className="container-site flex flex-col gap-5 py-6 md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-[0.95rem] text-mute">
          We use analytics and advertising cookies to understand which pages and campaigns work. They load only if you
          accept. See our{" "}
          <a href="/privacy-policy/" className="text-paper underline underline-offset-4">
            privacy policy
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="min-h-11 border border-line-strong px-5 text-[0.95rem] hover:border-paper"
          >
            Decline
          </button>
          <button type="button" onClick={() => choose("granted")} className="min-h-11 bg-gold px-5 text-[0.95rem] font-medium text-ink hover:bg-paper">
            Accept
          </button>
        </div>
      </div>
    </section>
  );
}
