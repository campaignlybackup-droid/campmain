import type { ReactNode } from "react";
import { LeadForm, type FieldDef } from "@/components/LeadForm";
import { siteConfig } from "@/content/site.config";
import { whatsappHref } from "@/lib/contact";
import { publicEnv } from "@/lib/env";

/**
 * Renders the form only when a submission endpoint is configured (rule 2: nothing depends on a null value).
 * Without one, it falls back to direct contact details if those exist.
 */
export function FormSection(props: {
  formType: "apply";
  fields: FieldDef[];
  submitLabel: string;
  successHeading: string;
  successBody: string;
  aside?: ReactNode;
}) {
  const endpoint = publicEnv.formEndpoint;
  const wa = whatsappHref();
  const fallback = siteConfig.email
    ? { label: siteConfig.email, href: `mailto:${siteConfig.email}` }
    : wa
      ? { label: "WhatsApp", href: wa }
      : null;

  if (!endpoint && !fallback) {
    return props.aside ? (
      <section aria-label="Next steps" className="border-t border-line py-16 md:py-24">
        <div className="container-site max-w-3xl">{props.aside}</div>
      </section>
    ) : null;
  }

  return (
    <section aria-labelledby="form-heading" className="border-t border-line py-16 md:py-24">
      <div className="container-site grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <h2 id="form-heading" className="text-display-md">
            {endpoint ? "Your details" : "Get in touch"}
          </h2>
          <div className="mt-8">
            {endpoint ? (
              <LeadForm {...props} endpoint={endpoint} fallback={fallback} />
            ) : fallback ? (
              <p className="text-lead text-mute">
                Send the details below to{" "}
                <a href={fallback.href} className="text-paper underline underline-offset-4">
                  {fallback.label}
                </a>{" "}
                and we will reply.
              </p>
            ) : null}
          </div>
        </div>
        {props.aside ? <aside className="lg:col-span-4 lg:col-start-9">{props.aside}</aside> : null}
      </div>
    </section>
  );
}
