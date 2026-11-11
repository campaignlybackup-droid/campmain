import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageIntro } from "@/components/PageIntro";
import { RelatedLinks } from "@/components/RelatedLinks";
import { industries, services } from "@/content/catalog";
import { breadcrumbNode, faqNode, graph, serviceNode, webPageNode, type Faq as FaqItem } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/services/meta-ads/" as const;
export const metadata = buildMetadata(PATH);

const META_LEARNING_URL = "https://www.facebook.com/business/help/112167992830700";
const META_SAC_URL = "https://developers.facebook.com/docs/marketing-api/special-ad-category";

const directAnswer =
  "Campaignly is a Meta ads agency that plans, builds and manages Facebook and Instagram advertising for scaling businesses. We set up conversion tracking with the Pixel and Conversions API, structure campaigns around your margins, run a continuous creative testing programme, and report on qualified leads and revenue rather than reach, clicks or followers.";

const included: { item: string; detail: string }[] = [
  { item: "Account and tracking audit", detail: "Business Manager, Pixel, Conversions API, event priority and attribution settings." },
  { item: "Conversion tracking setup", detail: "Browser and server events mapped to the actions that matter: purchase, qualified lead, booked call." },
  { item: "Campaign architecture", detail: "Prospecting, retargeting and Advantage+ campaigns structured so each ad set can exit learning." },
  { item: "Audience and offer strategy", detail: "Who to reach, what to offer them and which angle to lead with, per market." },
  { item: "Creative strategy and testing", detail: "Briefs, hooks and a testing roadmap; results feed the next round of creative." },
  { item: "Budget, bids and pacing", detail: "Spend moved toward what returns a qualified result at a cost you can sustain." },
  { item: "Lead quality loop", detail: "CRM outcomes sent back to Meta so delivery optimises for buyers, not form fills." },
  { item: "Reporting", detail: "Revenue, cost per qualified result and what we are changing next, in plain language." },
];

const notIncluded: { item: string; detail: string; href?: string }[] = [
  { item: "Ad spend", detail: "Paid by you directly to Meta, from your own ad account." },
  { item: "Video and ad production", detail: "Scoped separately through our ad creative service.", href: "/services/ad-creative/" },
  { item: "Landing page builds", detail: "Scoped separately through landing pages and web.", href: "/services/landing-pages/" },
  { item: "Organic posting and community", detail: "Covered by social media strategy and management.", href: "/services/social-media/" },
];

const process: { title: string; text: string }[] = [
  {
    title: "Diagnose the account",
    text: "We review account history, tracking, past creative and your unit economics, and tell you what is working, what is not and why.",
  },
  {
    title: "Position the offer",
    text: "We agree who the campaign is for, what it promises and what proof it uses, before any new ad is written.",
  },
  {
    title: "Rebuild tracking and structure",
    text: "Events are fixed first, then campaigns are consolidated so each ad set gets enough data to learn.",
  },
  {
    title: "Launch and let delivery learn",
    text: "Meta says an ad set generally needs about 50 optimisation events within 7 days of its last significant edit to exit the learning phase, so we avoid edits that reset it.",
  },
  {
    title: "Test creative continuously",
    text: "New hooks, formats and angles are tested against the current winners, with one variable changed at a time.",
  },
  {
    title: "Scale what holds",
    text: "Budget increases go only where cost per qualified result stays within target as spend rises.",
  },
];

const fitRows: { situation: string; meta: string }[] = [
  { situation: "Visual consumer products and D2C brands", meta: "Usually a strong primary channel" },
  { situation: "Lead generation with fast follow-up (education, real estate, healthcare)", meta: "Strong when leads are qualified and contacted within minutes" },
  { situation: "Demand people already search for", meta: "Better as support to Google Ads than as the first channel" },
  { situation: "Narrow B2B audiences (specific job titles)", meta: "Usually weaker than LinkedIn and search" },
  { situation: "Housing, employment, financial products, social issues or politics", meta: "Possible, but targeting is restricted under Special Ad Categories" },
];

const metrics: { term: string; def: string }[] = [
  { term: "ROAS", def: "Return on ad spend: revenue attributed to ads divided by ad spend." },
  { term: "Cost per qualified lead", def: "Ad spend divided by leads that meet the qualification criteria you set, not all form fills." },
  { term: "Contribution margin", def: "Revenue minus product, fulfilment and ad costs. The number that says whether growth is profitable." },
  { term: "MER", def: "Marketing efficiency ratio: total revenue divided by total marketing spend, across every channel." },
];

const faqs: FaqItem[] = [
  {
    q: "How much should I spend on Meta ads?",
    a: "Enough for each ad set to reach about 50 optimisation events a week, which Meta cites as the threshold to exit the learning phase. A practical starting point is your target cost per result multiplied by 50, divided by 7, as a daily budget per ad set. We confirm the number after the diagnosis.",
  },
  {
    q: "How long does it take to see results from Meta ads?",
    a: "Each new or significantly edited ad set spends its first days in the learning phase, and reliable reads on creative and audiences need several weeks of data. We give you a specific timeline in the written plan after the diagnosis, based on your budget and conversion volume.",
  },
  {
    q: "Do I keep ownership of my ad account, Pixel and data?",
    a: "Yes. We work inside your own Business Manager as a partner. The ad account, Pixel, audiences and history stay in your name, and you can remove our access at any time.",
  },
  {
    q: "Why are my Meta lead form leads low quality, and can you fix it?",
    a: "Low-quality leads usually come from easy forms, broad offers and slow follow-up. We use higher-intent form settings and qualifying questions, follow up instantly through WhatsApp or CRM automation, and send qualified outcomes back to Meta so delivery optimises for them.",
  },
  {
    q: "Can you run ads in Meta's Special Ad Categories?",
    a: "Yes. Ads about housing, employment, financial products and services, or social issues, elections and politics must be declared as a Special Ad Category. Targeting options are restricted for these ads, so the strategy relies more on creative, offer and placement than on audience settings.",
  },
  {
    q: "Do you only manage Meta ads, or other channels too?",
    a: "Meta ads can be managed on their own, but they work best alongside Google Ads, ad creative, landing pages and lead automation. We recommend the channel mix in the plan rather than selling every service by default.",
  },
  {
    q: "Do you manage Meta ads for businesses outside India?",
    a: "Yes. We manage Meta advertising for businesses in India, the USA, Canada and the UAE, with campaigns, currencies, languages and schedules set up for each market.",
  },
];

const industryAnchors: Record<string, string> = {
  "/industries/ecommerce-d2c/": "Meta ads for D2C and ecommerce brands",
  "/industries/education/": "Meta ads for student admissions",
  "/industries/real-estate/": "Meta ads for real estate developers",
};
const relatedIndustries = industries.filter((i) => i.href in industryAnchors);
const relatedServices = services.filter((s) =>
  ["/services/ad-creative/", "/services/ai-automation/", "/services/landing-pages/"].includes(s.href),
);

export default function MetaAdsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageNode(PATH),
          breadcrumbNode(PATH),
          serviceNode(PATH, {
            name: "Meta ads management",
            serviceType: "Facebook and Instagram advertising management",
            description: directAnswer,
          }),
          faqNode(PATH, faqs),
        )}
      />

      <PageIntro path={PATH} eyebrow="Meta ads" question="What does a Meta ads agency do?" answer={directAnswer} />

      {/* Included / not included */}
      <section aria-labelledby="included-heading" className="border-t border-line py-20 md:py-28">
        <div className="container-site">
          <h2 id="included-heading" className="max-w-3xl text-display-lg">
            What does Meta ads management include?
          </h2>
          <p className="prose-site mt-6 text-mute">
            Management covers everything inside the ad account and the tracking that feeds it. Production and page
            builds are scoped separately so you only pay for what you need.
          </p>
          <div className="mt-12 grid gap-14 lg:grid-cols-12">
            <div className="overflow-x-auto lg:col-span-8">
              <table className="table-site">
                <caption className="sr-only">Included in Meta ads management</caption>
                <thead>
                  <tr>
                    <th scope="col">Included</th>
                    <th scope="col">What it means</th>
                  </tr>
                </thead>
                <tbody>
                  {included.map((r) => (
                    <tr key={r.item}>
                      <th scope="row" className="w-2/5 pr-6 font-medium">
                        {r.item}
                      </th>
                      <td className="text-mute">{r.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="lg:col-span-4">
              <h3 className="text-2xl">Not included by default</h3>
              <ul className="mt-6 border-t border-line">
                {notIncluded.map((r) => (
                  <li key={r.item} className="border-b border-line py-4">
                    <p className="font-medium">{r.item}</p>
                    <p className="mt-1 text-[0.95rem] text-mute">
                      {r.href ? (
                        <Link href={r.href} className="underline decoration-line-strong hover:decoration-paper">
                          {r.detail}
                        </Link>
                      ) : (
                        r.detail
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-heading" className="border-t border-line bg-ink-raised py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="process-heading" className="text-display-lg">
              How does Campaignly run a Meta ads account?
            </h2>
            <p className="mt-6 text-mute">
              In six steps, in this order. Tracking and structure come before new creative, because creative tests are
              meaningless on broken data.
            </p>
          </div>
          <ol className="border-t border-line lg:col-span-7 lg:col-start-6">
            {process.map((p, i) => (
              <li key={p.title} className="reveal grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-7">
                <span aria-hidden="true" className="font-display text-2xl text-gold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl">{p.title}</h3>
                  <p className="mt-2 text-mute">
                    {p.text}
                    {p.title.startsWith("Launch") ? (
                      <>
                        {" "}
                        <a
                          href={META_LEARNING_URL}
                          rel="noopener"
                          target="_blank"
                          className="underline decoration-line-strong hover:decoration-paper"
                        >
                          Meta&rsquo;s learning phase guidance
                        </a>
                        .
                      </>
                    ) : null}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fit */}
      <section aria-labelledby="fit-heading" className="border-t border-line py-20 md:py-28">
        <div className="container-site">
          <h2 id="fit-heading" className="max-w-3xl text-display-lg">
            Is Meta advertising right for your business?
          </h2>
          <p className="prose-site mt-6 text-mute">
            Meta is strongest when it creates demand for something people do not yet search for. It is weaker where
            buyers already search, or where the audience is a narrow set of job titles.
          </p>
          <div className="mt-12 overflow-x-auto">
            <table className="table-site min-w-[36rem]">
              <caption className="sr-only">Where Meta advertising usually fits</caption>
              <thead>
                <tr>
                  <th scope="col">Situation</th>
                  <th scope="col">Meta ads</th>
                </tr>
              </thead>
              <tbody>
                {fitRows.map((r) => (
                  <tr key={r.situation}>
                    <th scope="row" className="w-1/2 pr-6 font-normal">
                      {r.situation}
                    </th>
                    <td className="text-mute">{r.meta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-mute">
            Special Ad Categories are defined in{" "}
            <a href={META_SAC_URL} rel="noopener" target="_blank" className="underline decoration-line-strong hover:decoration-paper">
              Meta&rsquo;s Special Ad Category documentation
            </a>
            .
          </p>
        </div>
      </section>

      {/* Metrics definitions */}
      <section aria-labelledby="metrics-heading" className="border-t border-line bg-ink-raised py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="metrics-heading" className="text-display-lg">
              How is Meta ads performance measured?
            </h2>
            <p className="mt-6 text-mute">
              By the numbers your finance team uses. Platform-reported ROAS is one input, not the verdict.
            </p>
          </div>
          <dl className="border-t border-line lg:col-span-7 lg:col-start-6">
            {metrics.map((m) => (
              <div key={m.term} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[12rem_1fr] sm:gap-6">
                <dt className="font-display text-xl text-gold">{m.term}</dt>
                <dd className="text-mute">{m.def}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Related */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="container-site grid gap-16 lg:grid-cols-2">
          <RelatedLinks
            id="related-industries"
            heading="Meta ads by industry"
            items={relatedIndustries.map((i) => ({
              href: i.href,
              label: industryAnchors[i.href] ?? i.label,
              summary: i.summary,
            }))}
          />
          <RelatedLinks
            id="related-services"
            heading="Services that make Meta ads work harder"
            items={[
              ...relatedServices.map((s) => ({ href: s.href, label: s.label, summary: s.summary })),
              {
                href: "/locations/india/",
                label: "Meta ads for Indian businesses",
                summary: "INR budgets, regional creative and WhatsApp-led follow-up.",
              },
            ]}
          />
        </div>
      </section>

      <div className="border-t border-line">
        <Faq items={faqs} heading="Meta ads: frequently asked questions" />
      </div>

      <CtaBand
        heading="Find out what your Meta account is leaving on the table."
        body="Start with a free review of your ad account, or apply for a full growth partnership if you are ready to scale."
      />
    </>
  );
}
