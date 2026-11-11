import { HubTemplate } from "@/components/HubTemplate";
import { MethodList } from "@/components/MethodList";
import { services } from "@/content/catalog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/services/");

export default function ServicesHub() {
  return (
    <HubTemplate
      path="/services/"
      eyebrow="Services"
      intro="Performance marketing services are the paid media, search, creative, conversion and automation work that turns marketing spend into measurable revenue. Campaignly offers nine of them, planned and reported as one system, so you can start with one and add others only when the numbers say so."
      listHeading="Nine services"
      items={services.map((s) => ({ href: s.href, label: s.label, summary: s.summary }))}
    >
      <section aria-labelledby="method-h" className="border-t border-line bg-ink-raised py-20 md:py-28">
        <div className="container-site">
          <h2 id="method-h" className="max-w-3xl text-display-lg">
            How do the services fit together?
          </h2>
          <p className="prose-site mt-6 text-mute">
            Every engagement follows the same six-stage method. Which services you need depends on where the constraint
            sits: in the message, the traffic, the conversion or the follow-up.
          </p>
          <div className="mt-12">
            <MethodList />
          </div>
        </div>
      </section>
    </HubTemplate>
  );
}
