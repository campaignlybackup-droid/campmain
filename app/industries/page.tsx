import { HubTemplate } from "@/components/HubTemplate";
import { industries } from "@/content/catalog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/industries/");

export default function IndustriesHub() {
  return (
    <HubTemplate
      path="/industries/"
      eyebrow="Industries"
      intro="Every industry buys differently. A student choosing a course, a family choosing a home and a company choosing software follow different timelines, rules and decision-makers. Campaignly builds every growth programme around those differences, from the metrics we optimise for to the advertising rules we honour."
      listHeading="Seven industries"
      items={industries.map((s) => ({ href: s.href, label: s.label, summary: s.summary }))}
    />
  );
}
