import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FormSection } from "@/components/FormSection";
import { JsonLd } from "@/components/JsonLd";
import { applyFields } from "@/content/forms";
import { getPage } from "@/content/pages";
import { siteConfig } from "@/content/site.config";
import { breadcrumbNode, graph, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/apply/");

const next = [
  "We read the application and look at your website and public advertising.",
  "If there is a likely fit, we invite you to a diagnostic conversation about goals, numbers and constraints.",
  "If we are the right partner, you receive a written plan. If we are not, we say so and, where we can, suggest what to do instead.",
];

export default function ApplyPage() {
  const hours = siteConfig.applicationResponseHours;
  return (
    <>
      <JsonLd data={graph(webPageNode("/apply/"), breadcrumbNode("/apply/"))} />
      <Breadcrumbs path="/apply/" />
      <section className="container-site pt-12 pb-16 md:pt-20 md:pb-20">
        <p className="eyebrow">Apply to Partner</p>
        <h1 className="rise mt-6 max-w-4xl text-display-xl"><span className="text-gradient animate">{getPage("/apply/").h1}</span></h1>
        <p className="mt-10 max-w-3xl text-lead text-mute">
          Campaignly partners with a limited number of businesses at a time, so every one gets senior attention. This
          form takes about three minutes and tells us enough to judge whether we can make a real difference.
          {hours ? ` We reply to every application within ${hours} hours.` : ""}
        </p>
      </section>
      <FormSection
        formType="apply"
        fields={applyFields}
        submitLabel="Submit application"
        successHeading="Thank you. Your application is in."
        successBody={
          hours
            ? `We will review it and reply within ${hours} hours. Check your inbox, including spam, for our email.`
            : "We will review it and reply by email. Check your inbox, including spam, for our message."
        }
        aside={
          <div>
            <h2 className="text-2xl">What happens next</h2>
            <ol className="mt-6 border-t border-line">
              {next.map((n, i) => (
                <li key={n} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-line py-5 text-mute">
                  <span aria-hidden="true" className="font-display text-xl text-gold-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{n}</span>
                </li>
              ))}
            </ol>
          </div>
        }
      />
    </>
  );
}
