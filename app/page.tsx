import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { MethodList } from "@/components/MethodList";
import { StatsStrip } from "@/components/StatsStrip";
import { industries, markets, services } from "@/content/catalog";
import { brand } from "@/lib/brand";
import { graph, webPageNode, websiteNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/");

const principles = [
  {
    title: "Strategy before spend",
    text: "Every engagement starts with a diagnosis of your accounts, tracking, funnel and margins. Budget follows the plan, not the other way round.",
  },
  {
    title: "Execution across the funnel",
    text: "Ads, creative, landing pages and follow-up are run as one system, so a gain in one place is not lost in the next.",
  },
  {
    title: "Transparency by default",
    text: "Ad accounts, pixels and data stay in your name. You see the same numbers we see, including the ones that are not going well.",
  },
  {
    title: "Technology that removes delay",
    text: "AI-assisted analysis, WhatsApp and CRM automation answer and qualify leads in minutes instead of days.",
  },
];

const fit = {
  good: [
    "Founders and marketing heads accountable for revenue or pipeline",
    "Businesses with an existing product, offer and acquisition budget",
    "Teams that want a long-term partner and will share real numbers",
  ],
  notYet: [
    "One-off boosted posts or follower campaigns",
    "Businesses choosing a partner on the lowest monthly fee",
    "Launches with no budget set aside for testing",
  ],
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={graph(websiteNode(), webPageNode("/"))} />

      {/* Hero: the H1 is the LCP element; no hero image */}
      <section className="container-site pt-20 pb-24 md:pt-32 md:pb-36">
        <h1 className="max-w-5xl text-display-xl">
          <span className="eyebrow mb-8 block font-sans tracking-[0.16em]">Campaignly Media</span>
          <span className="sr-only">: </span>
          The advertising-first growth partner for scaling businesses.
        </h1>
        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12">
          <p className="text-lead text-mute md:col-span-7">
            We plan, run and measure paid media, search, creative and automation for founders and marketing heads with
            real acquisition budgets, across India, the USA, Canada and the UAE.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8 md:col-span-12">
            <ButtonLink href="/apply/" ctaId="hero_apply">
              Apply to Partner
            </ButtonLink>
            <ButtonLink href="/free-ad-account-review/" variant="text" ctaId="hero_review">
              Get a free ad account review
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Tagline band */}
      <section aria-label="Tagline" className="border-y border-line">
        <p className="container-site py-10 font-display text-display-md md:py-14">
          {brand.tagline.split(" ").map((w, i) => (
            <span key={w} className={i === 0 ? "" : "text-mute"}>
              {w}{" "}
            </span>
          ))}
        </p>
      </section>

      {/* Positioning */}
      <section aria-labelledby="different-heading" className="container-site py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">What Campaignly is</p>
            <h2 id="different-heading" className="mt-5 text-display-lg">
              A growth partner, not a social media agency.
            </h2>
          </div>
          <p className="text-lead text-mute md:col-span-6 md:col-start-7 md:self-end">
            Campaignly is built around advertising: the channel where spend, data and results meet. We compete on
            strategy, execution, transparency and technology. We never compete on price.
          </p>
        </div>
        <ul className="mt-16 grid border-t border-line md:grid-cols-2">
          {principles.map((p, i) => (
            <li
              key={p.title}
              className={`reveal border-b border-line py-10 ${i % 2 === 0 ? "md:pr-12" : "md:border-l md:pl-12"}`}
            >
              <h3 className="text-2xl">{p.title}</h3>
              <p className="mt-4 text-mute">{p.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <StatsStrip />

      {/* Services */}
      <section aria-labelledby="services-heading" className="border-t border-line bg-ink-raised py-24 md:py-32">
        <div className="container-site">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Services</p>
              <h2 id="services-heading" className="mt-5 text-display-lg">
                Nine disciplines, one growth system.
              </h2>
            </div>
            <ButtonLink href="/services/" variant="text">
              All performance marketing services
            </ButtonLink>
          </div>
          <ul className="mt-14 border-t border-line">
            {services.map((s, i) => (
              <li key={s.href} className="border-b border-line">
                <Link
                  href={s.href}
                  className="group grid items-baseline gap-2 py-7 md:grid-cols-12 md:gap-6"
                >
                  <span aria-hidden="true" className="text-sm text-mute tabular-nums md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-2xl transition-colors group-hover:text-gold md:col-span-4 md:text-3xl">
                    {s.label}
                  </span>
                  <span className="text-mute md:col-span-6">{s.summary}</span>
                  <span aria-hidden="true" className="hidden text-right text-gold transition-transform group-hover:translate-x-1 md:col-span-1 md:block">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Method */}
      <section aria-labelledby="method-heading" className="container-site py-24 md:py-32">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow">The method</p>
            <h2 id="method-heading" className="mt-5 text-display-lg">
              Diagnose. Position. Acquire. Convert. Retain. Scale.
            </h2>
          </div>
          <p className="text-mute md:col-span-5 md:col-start-8 md:self-end">
            Six stages, in this order. Skipping the first two is the most common reason ad budgets stop working as they
            grow.
          </p>
        </div>
        <div className="mt-14">
          <MethodList />
        </div>
      </section>

      {/* Industries */}
      <section aria-labelledby="industries-heading" className="border-t border-line py-24 md:py-32">
        <div className="container-site grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Industries</p>
            <h2 id="industries-heading" className="mt-5 text-display-lg">
              Built for how your buyers decide.
            </h2>
            <div className="mt-8">
              <ButtonLink href="/industries/" variant="text">
                Industry growth programmes
              </ButtonLink>
            </div>
          </div>
          <ul className="grid border-t border-line sm:grid-cols-2 md:col-span-8">
            {industries.map((ind) => (
              <li key={ind.href} className="border-b border-line">
                <Link href={ind.href} className="group block py-6 sm:pr-8">
                  <span className="font-display text-xl transition-colors group-hover:text-gold">
                    {ind.label}
                  </span>
                  <span className="mt-2 block text-[0.95rem] text-mute">{ind.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Markets */}
      <section aria-labelledby="markets-heading" className="border-t border-line bg-ink-raised py-24 md:py-32">
        <div className="container-site">
          <p className="eyebrow">Markets</p>
          <h2 id="markets-heading" className="mt-5 max-w-3xl text-display-lg">
            Four markets, each run on its own terms.
          </h2>
          <div className="mt-14 overflow-x-auto">
            <table className="table-site min-w-[40rem]">
              <caption className="sr-only">Markets Campaignly serves, with currency and time zone</caption>
              <thead>
                <tr>
                  <th scope="col">Market</th>
                  <th scope="col">Billing</th>
                  <th scope="col">Time zone</th>
                  <th scope="col">What changes</th>
                </tr>
              </thead>
              <tbody>
                {markets.map((m) => (
                  <tr key={m.href}>
                    <th scope="row" className="font-normal">
                      <Link href={m.href} className="link-quiet font-display text-xl">
                        {m.label}
                      </Link>
                    </th>
                    <td className="text-mute">{m.currency}</td>
                    <td className="whitespace-nowrap text-mute">{m.timeZone}</td>
                    <td className="text-mute">{m.summary}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fit */}
      <section aria-labelledby="fit-heading" className="container-site py-24 md:py-32">
        <p className="eyebrow">Fit</p>
        <h2 id="fit-heading" className="mt-5 max-w-3xl text-display-lg">
          Who we work best with.
        </h2>
        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-2xl">A strong fit</h3>
            <ul className="mt-6 border-t border-line">
              {fit.good.map((f) => (
                <li key={f} className="flex gap-4 border-b border-line py-4">
                  <span aria-hidden="true" className="text-gold">
                    +
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl">Not the right fit yet</h3>
            <ul className="mt-6 border-t border-line">
              {fit.notYet.map((f) => (
                <li key={f} className="flex gap-4 border-b border-line py-4 text-mute">
                  <span aria-hidden="true">−</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
