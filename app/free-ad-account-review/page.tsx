import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/Button";
import { Faq } from "@/components/Faq";
import { FormSection } from "@/components/FormSection";
import { JsonLd } from "@/components/JsonLd";
import { TableScroll } from "@/components/TableScroll";
import { reviewFields } from "@/content/forms";
import { getPage } from "@/content/pages";
import { siteConfig } from "@/content/site.config";
import { breadcrumbNode, faqNode, graph, webPageNode, type Faq as FaqItem } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/free-ad-account-review/");

const checks = [
  ["Tracking", "Are conversions firing correctly, deduplicated and tied to real outcomes?"],
  ["Structure", "Is budget split across too many campaigns and ad sets to learn?"],
  ["Targeting and queries", "Where is spend going on audiences or search terms that do not convert?"],
  ["Creative", "Which ads carry the account, and how fatigued are they?"],
  ["Bidding and budgets", "Do bid strategies and targets match your margins?"],
  ["Landing pages", "Does the page match the ad and load fast on mobile?"],
];

const PATH = "/free-ad-account-review/" as const;

export default function ReviewPage() {
  const days = siteConfig.reviewTurnaroundDays;
  const faqs: FaqItem[] = [
    {
      q: "What access do you need?",
      a: "Read-only access is enough. On Meta, add us as a partner with view-only permissions in Business Settings; on Google Ads, grant read-only access. We send exact steps after you submit the form, and you can remove access at any time.",
    },
    {
      q: "Will you change anything in my account?",
      a: "No. A review is observation only. Any changes are your decision, made by you or by us only if we later agree to work together.",
    },
    {
      q: "Is it really free?",
      a: "Yes. There is no charge and no obligation. We offer reviews because they are the clearest way to show how we think.",
    },
    {
      q: "Who is the review for?",
      a: "Businesses already spending on Meta or Google Ads who want an outside view of what is working and what is wasted. We may decline accounts with very little history, because there is not enough data to review.",
    },
    {
      q: "What do I receive?",
      a: `A written summary of the main issues and opportunities, ranked by likely impact${days ? `, delivered within ${days} business days of receiving access` : ""}, with the option of a call to walk through it.`,
    },
  ];
  return (
    <>
      <JsonLd data={graph(webPageNode(PATH), breadcrumbNode(PATH), faqNode(PATH, faqs))} />
      <Breadcrumbs path={PATH} />
      <section className="container-site pt-12 pb-16 md:pt-20 md:pb-20">
        <p className="eyebrow">Free review</p>
        <h1 className="mt-6 max-w-4xl text-display-xl">{getPage(PATH).h1}</h1>
        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <div className="border-l-2 border-gold pl-6 md:col-span-8">
            <p className="text-sm font-medium tracking-wide text-mute">What is a free ad account review?</p>
            <p className="mt-3 text-lead">
              A free ad account review is a senior specialist&rsquo;s written assessment of your Meta or Google Ads
              account. We look at tracking, structure, targeting, creative, bidding and landing pages using read-only
              access, then rank the problems and opportunities by likely impact. Nothing in your account is changed.
            </p>
          </div>
        </div>
      </section>
      <section aria-labelledby="checks" className="border-t border-line bg-ink-raised py-16 md:py-24">
        <div className="container-site">
          <h2 id="checks" className="text-display-lg">
            What do we check?
          </h2>
          <TableScroll label="Areas covered by the review" className="mt-10">
            <table className="table-site">
              <caption className="sr-only">Areas covered by the review</caption>
              <thead>
                <tr>
                  <th scope="col">Area</th>
                  <th scope="col">The question we answer</th>
                </tr>
              </thead>
              <tbody>
                {checks.map(([a, q]) => (
                  <tr key={a}>
                    <th scope="row" className="w-1/3 pr-6 font-medium">
                      {a}
                    </th>
                    <td className="text-mute">{q}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableScroll>
        </div>
      </section>
      <FormSection
        formType="ad_account_review"
        fields={reviewFields}
        submitLabel="Request my free review"
        successHeading="Thank you. Your request is in."
        successBody="We will email you the steps to grant read-only access. The review starts once access is in place."
        aside={
          <div>
            <h2 className="text-2xl">Ready for more than a review?</h2>
            <p className="mt-4 text-mute">If you already know you want a growth partner, apply directly.</p>
            <div className="mt-6">
              <ButtonLink href="/apply/" ctaId="review_apply">
                Apply to Partner
              </ButtonLink>
            </div>
          </div>
        }
      />
      <div className="border-t border-line">
        <Faq items={faqs} heading="Free review: frequently asked questions" />
      </div>
    </>
  );
}
