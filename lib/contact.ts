import { siteConfig } from "@/content/site.config";

export function whatsappHref(): string | null {
  const n = siteConfig.whatsappNumber?.replace(/\D/g, "");
  if (!n) return null;
  const text = siteConfig.whatsappMessage ? `?text=${encodeURIComponent(siteConfig.whatsappMessage)}` : "";
  return `https://wa.me/${n}${text}`;
}

export function telHref(): string | null {
  return siteConfig.phone ? `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}` : null;
}

export const hasCaseStudies = (siteConfig.caseStudies?.length ?? 0) > 0;
