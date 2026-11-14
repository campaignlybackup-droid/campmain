import { HubTemplate } from "@/components/HubTemplate";
import { markets } from "@/content/catalog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/locations/");

export default function LocationsHub() {
  return (
    <HubTemplate
      path="/locations/"
      eyebrow="Markets"
      intro="Campaignly runs growth programmes for businesses in India, the USA, Canada and the UAE. Each market has its own platforms, languages, regulations, currency and working hours, and each gets a plan built for it from the ground up."
      listHeading="Four markets"
      items={markets.map((m) => ({
        href: m.href,
        label: m.label,
        summary: m.summary,
        meta: `${m.currency} · ${m.timeZone}`,
      }))}
    />
  );
}
