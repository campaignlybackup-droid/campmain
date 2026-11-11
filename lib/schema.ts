import { siteConfig } from "@/content/site.config";
import { getPage, trail, type PagePath } from "@/content/pages";
import { absoluteUrl, brand } from "@/lib/brand";

type Json = string | number | boolean | null | Json[] | { [key: string]: Json | undefined };
export type SchemaNode = { [key: string]: Json | undefined };

export const ids = {
  org: `${brand.url}/#organization`,
  website: `${brand.url}/#website`,
  page: (path: string) => `${absoluteUrl(path)}#webpage`,
  breadcrumb: (path: string) => `${absoluteUrl(path)}#breadcrumb`,
  service: (path: string) => `${absoluteUrl(path)}#service`,
  faq: (path: string) => `${absoluteUrl(path)}#faq`,
};

const nonNull = <T,>(v: T | null | undefined): v is T => v !== null && v !== undefined;

function areaServed(): SchemaNode[] {
  return brand.areaServed.map((c) => ({ "@type": "Country", name: c.name }));
}

/** Organization (plus ProfessionalService when a real address exists). Emitted on every page. */
export function organizationNode(): SchemaNode {
  const c = siteConfig;
  const sameAs = Object.values(c.social).filter(nonNull);
  const contactPoint =
    c.email || c.phone
      ? [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            ...(c.email ? { email: c.email } : {}),
            ...(c.phone ? { telephone: c.phone } : {}),
            areaServed: brand.areaServed.map((a) => a.code),
            availableLanguage: ["English"],
          },
        ]
      : undefined;
  const address = c.address ? { "@type": "PostalAddress", ...c.address } : undefined;

  return {
    // ProfessionalService is a LocalBusiness type and needs a physical address, so it is only added when one exists.
    "@type": address ? ["Organization", "ProfessionalService"] : "Organization",
    "@id": ids.org,
    name: brand.name,
    alternateName: brand.alternateNames,
    url: `${brand.url}/`,
    slogan: brand.tagline,
    description:
      "Campaignly is an advertising-first, AI-enabled digital growth partner for scaling businesses in India, the USA, Canada and the UAE.",
    ...(c.logo ? { logo: { "@type": "ImageObject", url: absoluteUrl(c.logo) } } : {}),
    ...(c.legalName ? { legalName: c.legalName } : {}),
    ...(c.foundingYear ? { foundingDate: String(c.foundingYear) } : {}),
    ...(c.email ? { email: c.email } : {}),
    ...(c.phone ? { telephone: c.phone } : {}),
    ...(address ? { address } : {}),
    ...(sameAs.length ? { sameAs } : {}),
    ...(contactPoint ? { contactPoint } : {}),
    areaServed: areaServed(),
  };
}

export function websiteNode(): SchemaNode {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: `${brand.url}/`,
    name: brand.name,
    alternateName: brand.alternateNames,
    inLanguage: "en",
    publisher: { "@id": ids.org },
  };
}

export function webPageNode(path: PagePath, type: string = "WebPage"): SchemaNode {
  const page = getPage(path);
  return {
    "@type": type,
    "@id": ids.page(path),
    url: absoluteUrl(path),
    name: page.title,
    description: page.description,
    inLanguage: "en",
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.org },
    ...(path !== "/" ? { breadcrumb: { "@id": ids.breadcrumb(path) } } : {}),
  };
}

export function breadcrumbNode(path: PagePath): SchemaNode {
  return {
    "@type": "BreadcrumbList",
    "@id": ids.breadcrumb(path),
    itemListElement: trail(path).map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.label,
      item: absoluteUrl(p.path),
    })),
  };
}

export function serviceNode(path: PagePath, opts: { name: string; serviceType: string; description: string }): SchemaNode {
  return {
    "@type": "Service",
    "@id": ids.service(path),
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: absoluteUrl(path),
    provider: { "@id": ids.org },
    areaServed: areaServed(),
  };
}

export interface Faq {
  q: string;
  /** Plain text answer. Rendered verbatim on the page and in schema. */
  a: string;
}

export function faqNode(path: PagePath, faqs: Faq[]): SchemaNode {
  return {
    "@type": "FAQPage",
    "@id": ids.faq(path),
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** One @graph per page. Organization is always included. */
export function graph(...nodes: SchemaNode[]): SchemaNode {
  return { "@context": "https://schema.org", "@graph": [organizationNode(), ...nodes] };
}
