import { ButtonLink } from "@/components/Button";
import { whatsappHref } from "@/lib/contact";

/** Every page ends with one primary CTA (Apply) and one low-friction CTA (review, or WhatsApp when configured). */
export function CtaBand({
  heading = "Grow with a partner that shows you the numbers.",
  body = "Tell us where the business is today and where it needs to be. If we are the right fit, you get a written plan built on your own data.",
  lowFriction = "review",
}: {
  heading?: string;
  body?: string;
  lowFriction?: "review" | "whatsapp";
}) {
  const wa = whatsappHref();
  const useWa = lowFriction === "whatsapp" && wa;
  return (
    <section aria-labelledby="cta-heading" className="border-t border-line bg-ink-raised">
      <div className="container-site grid gap-10 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-7">
          <p className="eyebrow">Next step</p>
          <h2 id="cta-heading" className="mt-5 text-display-lg">
            {heading}
          </h2>
        </div>
        <div className="flex flex-col justify-end gap-8 md:col-span-5">
          <p className="text-mute">{body}</p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <ButtonLink href="/apply/" ctaId="cta_band_apply">
              Apply to Partner
            </ButtonLink>
            {useWa ? (
              <ButtonLink href={wa} external variant="text" ctaId="cta_band_whatsapp">
                Message us on WhatsApp
              </ButtonLink>
            ) : (
              <ButtonLink href="/free-ad-account-review/" variant="text" ctaId="cta_band_review">
                Get a free ad account review
              </ButtonLink>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
