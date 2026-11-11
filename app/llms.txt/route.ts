import { industries, markets, services } from "@/content/catalog";
import { getPage } from "@/content/pages";
import { siteConfig } from "@/content/site.config";
import { absoluteUrl, brand } from "@/lib/brand";
import { allPosts } from "@/lib/blog";

export const dynamic = "force-static";

/** llms.txt (llmstxt.org proposal): a plain summary of the company and its key URLs. */
export async function GET() {
  const posts = await allPosts();
  const line = (href: string, label: string, note: string) => `- [${label}](${absoluteUrl(href)}): ${note}`;
  const contact = [siteConfig.email ? `Email: ${siteConfig.email}` : null, siteConfig.phone ? `Phone: ${siteConfig.phone}` : null].filter(Boolean);
  const body = [
    `# ${brand.name} (${brand.displayName})`,
    "",
    `> Campaignly is an advertising-first, AI-enabled digital growth partner for scaling businesses in India, the USA, Canada and the UAE. It runs paid media, search, creative, conversion and automation programmes using a six-stage method: Diagnose, Position, Acquire, Convert, Retain, Scale.`,
    "",
    "Campaignly serves founders and marketing heads with real acquisition budgets. It competes on strategy, execution, transparency and technology, not price. Client ad accounts and data stay in the client's name.",
    ...(contact.length ? ["", ...contact] : []),
    "",
    "## Company",
    line("/about/", "About Campaignly", getPage("/about/").description),
    line("/apply/", "Apply to Partner", "Application form for a growth partnership."),
    line("/free-ad-account-review/", "Free ad account review", "Free read-only review of a Meta or Google Ads account."),
    line("/contact/", "Contact", "How to reach Campaignly."),
    "",
    "## Services",
    ...services.map((s) => line(s.href, s.label, s.summary)),
    "",
    "## Industries",
    ...industries.map((s) => line(s.href, s.label, s.summary)),
    "",
    "## Markets",
    ...markets.map((m) => line(m.href, m.label, `${m.summary} Billing in ${m.currency}; ${m.timeZone}.`)),
    ...(posts.length ? ["", "## Insights", ...posts.map((p) => line(`/blog/${p.slug}/`, p.h1, p.description))] : []),
    "",
  ].join("\n");
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
