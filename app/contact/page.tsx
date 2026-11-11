import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { getPage } from "@/content/pages";
import { siteConfig } from "@/content/site.config";
import { telHref, whatsappHref } from "@/lib/contact";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/contact/");

export default function ContactPage() {
  const c = siteConfig;
  const wa = whatsappHref();
  const tel = telHref();
  const details = [
    c.email ? { label: "Email", value: c.email, href: `mailto:${c.email}` } : null,
    tel && c.phone ? { label: "Phone", value: c.phone, href: tel } : null,
    wa ? { label: "WhatsApp", value: "Message us on WhatsApp", href: wa, cta: "contact_whatsapp" } : null,
  ].filter((d): d is { label: string; value: string; href: string; cta?: string } => d !== null);

  return (
    <>
      <JsonLd data={graph(webPageNode("/contact/", "ContactPage"), breadcrumbNode("/contact/"))} />
      <Breadcrumbs path="/contact/" />
      <section className="container-site pt-12 pb-20 md:pt-20 md:pb-28">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-6 text-display-xl">{getPage("/contact/").h1}</h1>
        <p className="mt-10 max-w-3xl text-lead text-mute">
          The fastest way to start is to apply to partner or request a free ad account review. Both forms go straight to
          the team and ask only what we need to give you a useful answer.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <ButtonLink href="/apply/" ctaId="contact_apply">
            Apply to Partner
          </ButtonLink>
          <ButtonLink href="/free-ad-account-review/" variant="text" ctaId="contact_review">
            Get a free ad account review
          </ButtonLink>
        </div>
      </section>
      {details.length || c.address || c.hours ? (
        <section aria-labelledby="details" className="border-t border-line py-20 md:py-28">
          <div className="container-site grid gap-12 lg:grid-cols-12">
            <h2 id="details" className="text-display-lg lg:col-span-4">
              Contact details
            </h2>
            <dl className="border-t border-line lg:col-span-7 lg:col-start-6">
              {details.map((d) => (
                <div key={d.label} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[10rem_1fr]">
                  <dt className="text-mute">{d.label}</dt>
                  <dd>
                    <a href={d.href} data-cta={d.cta} className="link-quiet text-lg" {...(d.href.startsWith("http") ? { rel: "noopener", target: "_blank" } : {})}>
                      {d.value}
                    </a>
                  </dd>
                </div>
              ))}
              {c.hours ? (
                <div className="grid gap-2 border-b border-line py-6 sm:grid-cols-[10rem_1fr]">
                  <dt className="text-mute">Hours</dt>
                  <dd>{c.hours}</dd>
                </div>
              ) : null}
              {c.address ? (
                <div className="grid gap-2 border-b border-line py-6 sm:grid-cols-[10rem_1fr]">
                  <dt className="text-mute">Address</dt>
                  <dd>
                    <address className="not-italic">
                      {c.address.streetAddress}, {c.address.addressLocality}, {c.address.addressRegion} {c.address.postalCode}
                    </address>
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>
        </section>
      ) : null}
      <CtaBand lowFriction="whatsapp" />
    </>
  );
}
