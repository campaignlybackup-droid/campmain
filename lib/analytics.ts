/** Client-side event helpers. Safe to call before consent: events are dropped if no tracker is loaded. */

type Gtag = (...args: unknown[]) => void;
type Fbq = ((...args: unknown[]) => void) & { callMethod?: unknown };

declare global {
  interface Window {
    gtag?: Gtag;
    fbq?: Fbq;
    dataLayer?: unknown[];
  }
}

export type EventName = "generate_lead" | "whatsapp_click" | "cta_click";

export function track(event: EventName, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", event, params);
  if (window.fbq) {
    if (event === "generate_lead") window.fbq("track", "Lead", params);
    else if (event === "whatsapp_click") window.fbq("track", "Contact", params);
    else window.fbq("trackCustom", event, params);
  }
}

const UTM_KEY = "cm_attribution";
const UTM_FIELDS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"] as const;

export type Attribution = Partial<Record<(typeof UTM_FIELDS)[number] | "landing_page" | "referrer", string>>;

/** Stores first-touch attribution for the session. */
export function captureAttribution() {
  try {
    if (sessionStorage.getItem(UTM_KEY)) return;
    const q = new URLSearchParams(window.location.search);
    const data: Attribution = { landing_page: window.location.pathname };
    if (document.referrer) data.referrer = document.referrer;
    for (const k of UTM_FIELDS) {
      const v = q.get(k);
      if (v) data[k] = v.slice(0, 200);
    }
    sessionStorage.setItem(UTM_KEY, JSON.stringify(data));
  } catch {
    /* storage unavailable: attribution is best-effort */
  }
}

export function readAttribution(): Attribution {
  try {
    return JSON.parse(sessionStorage.getItem(UTM_KEY) ?? "{}") as Attribution;
  } catch {
    return {};
  }
}
