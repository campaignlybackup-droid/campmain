import { ButtonLink } from "@/components/Button";
import { siteConfig } from "@/content/site.config";
import { whatsappHref } from "@/lib/contact";

/** Every page ends with one primary CTA (Apply), plus WhatsApp when a number is configured. */
export function CtaBand({
  heading = "Your next stage of growth starts with one conversation.",
  body = "Tell us where the business stands and where it needs to go. If we are the right fit, you leave with a written growth plan built on your own data.",
}: {
  heading?: string;
  body?: string;
}) {
  const wa = whatsappHref();
  return (
    <section aria-labelledby="cta-heading" className="container-site py-16 md:py-24">
      <div className="panel-ink on-ink reveal px-4 py-12 sm:px-6 sm:py-16 md:px-16 md:py-24">
        <div aria-hidden="true" className="grid-fade" />
        {siteConfig.logo ? (
          // Decorative brand mark, floating in 3D behind the copy.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={siteConfig.logo}
            alt=""
            aria-hidden="true"
            width={121}
            height={108}
            loading="lazy"
            className="float-b pointer-events-none absolute -right-10 -bottom-16 -z-10 w-72 opacity-25 [transform:perspective(800px)_rotateY(-28deg)_rotateX(12deg)] md:right-10 md:-bottom-10 md:w-96 md:opacity-40"
          />
        ) : null}
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow">Next step</p>
            <h2 id="cta-heading" className="mt-6 text-display-lg">
              <span className="text-gradient">{heading}</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-8 md:col-span-7">
            <p className="text-lead text-mute">{body}</p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <ButtonLink href="/apply/" variant="gold" ctaId="cta_band_apply">
                Apply to Partner
              </ButtonLink>
              {wa ? (
                <ButtonLink href={wa} external variant="text" ctaId="cta_band_whatsapp" className="text-white!">
                  Message us on WhatsApp
                </ButtonLink>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
