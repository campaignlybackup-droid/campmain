import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { MethodList } from "@/components/MethodList";
import { StatsStrip } from "@/components/StatsStrip";
import { markets } from "@/content/catalog";
import { getPage } from "@/content/pages";
import { siteConfig } from "@/content/site.config";
import { breadcrumbNode, graph, ids, webPageNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildMetadata("/about/");

const beliefs = [
  {
    q: "Why advertising-first?",
    a: "Because advertising is where spend, data and results meet. It is the fastest way to test a message, and the most honest measure of whether a market wants what you sell.",
  },
  {
    q: "Why not compete on price?",
    a: "Cheap marketing is expensive when it wastes the budget behind it. We would rather work with fewer businesses and do the work properly than discount the thinking.",
  },
  {
    q: "Why transparency by default?",
    a: "Your accounts, data and results belong to you. When you can see what we see, decisions get better and trust does not depend on reports we control.",
  },
  {
    q: "Why AI-enabled?",
    a: "AI speeds up analysis, creative iteration and lead response. It does not replace judgement; it gives our team more time for it.",
  },
];

const engagement = [
  { t: "Apply", d: "Tell us about the business, the budget and what has or has not worked so far." },
  { t: "Diagnostic conversation", d: "We discuss goals, numbers and constraints, and say plainly whether we are the right fit." },
  { t: "Written plan", d: "If we are, you receive a plan with priorities, channels, budget logic and how success will be measured." },
  { t: "Build and launch", d: "Tracking, accounts, creative and pages are prepared, then campaigns go live." },
  { t: "Report and improve", d: "Regular updates show results, what changed and what comes next." },
];

export default function AboutPage() {
  const page = getPage("/about/");
  const f = siteConfig.founder;
  const showFounder = f.enabled && f.name && f.role && f.bio;
  const person = showFounder
    ? [
        {
          "@type": "Person",
          name: f.name,
          jobTitle: f.role,
          worksFor: { "@id": ids.org },
          ...(f.linkedin ? { sameAs: [f.linkedin] } : {}),
        },
      ]
    : [];
  return (
    <>
      <JsonLd data={graph(webPageNode("/about/", "AboutPage"), breadcrumbNode("/about/"), ...person)} />
      <Breadcrumbs path="/about/" />
      <section className="container-site pt-12 pb-20 md:pt-20 md:pb-28">
        <p className="eyebrow">About</p>
        <h1 className="rise mt-6 text-display-xl"><span className="text-gradient animate">{page.h1}</span></h1>
        <div className="mt-12 grid gap-10 md:grid-cols-12">
          <p className="text-lead md:col-span-8">
            Campaignly (Campaignly Media) is an advertising-first, AI-enabled digital growth partner for scaling
            businesses with real acquisition budgets. We run paid media, search, creative, conversion and automation for
            companies in India, the USA, Canada and the UAE.
          </p>
        </div>
      </section>

      <section aria-labelledby="beliefs" className="py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="beliefs" className="text-display-lg">
              What we believe
            </h2>
            <p className="mt-6 font-display text-2xl">Outperform. Outshine. Outwin.</p>
          </div>
          <dl className="border-t border-line lg:col-span-7 lg:col-start-6">
            {beliefs.map((b) => (
              <div key={b.q} className="border-b border-line py-7">
                <dt className="font-display text-xl">{b.q}</dt>
                <dd className="mt-2 text-mute">{b.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="method" className="container-site py-6 md:py-10">
        <div className="panel reveal px-4 py-12 sm:px-6 md:px-14 md:py-20">
          <h2 id="method" className="max-w-3xl text-display-lg">
            The Campaignly method
          </h2>
          <p className="prose-site mt-6 text-mute">
            Diagnose, Position, Acquire, Convert, Retain, Scale: six stages applied in order to every engagement, so
            budget is never asked to fix a problem that sits in the message, the page or the follow-up.
          </p>
          <div className="mt-12">
            <MethodList />
          </div>
        </div>
      </section>

      <StatsStrip />

      <section aria-labelledby="engagement" className="py-20 md:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="engagement" className="text-display-lg">
              How an engagement starts
            </h2>
          </div>
          <ol className="border-t border-line lg:col-span-7 lg:col-start-6">
            {engagement.map((s, i) => (
              <li key={s.t} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-7">
                <span aria-hidden="true" className="font-display text-2xl text-gold-deep tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl">{s.t}</h3>
                  <p className="mt-2 text-mute">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {showFounder ? (
        <section aria-labelledby="founder" className="container-site py-6 md:py-10">
          <div className="panel reveal px-4 py-12 sm:px-6 md:px-14 md:py-20 grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">Founder</p>
              <h2 id="founder" className="mt-5 text-display-lg">
                {f.name}
              </h2>
              <p className="mt-3 text-mute">{f.role}</p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              {f.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={f.photo} alt={`${f.name}, ${f.role} of Campaignly Media`} width={800} height={800} className="mb-8 h-auto w-64" />
              ) : null}
              <p className="text-lead">{f.bio}</p>
              {f.linkedin ? (
                <a href={f.linkedin} rel="noopener" target="_blank" className="mt-6 inline-block underline decoration-line-strong underline-offset-4">
                  {f.name} on LinkedIn
                </a>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      <section aria-labelledby="markets" className="py-20 md:py-28">
        <div className="container-site">
          <h2 id="markets" className="text-display-lg">
            Where we work
          </h2>
          <ul className="mt-10 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {markets.map((m) => (
              <li key={m.href} className="border-b border-line py-6 sm:pr-6">
                <Link href={m.href} className="font-display text-2xl hover:text-gold-deep">
                  {`Campaignly in ${m.label === "USA" || m.label === "UAE" ? `the ${m.label}` : m.label}`}
                </Link>
                <p className="mt-2 text-sm text-mute">
                  {m.currency} · {m.timeZone}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
