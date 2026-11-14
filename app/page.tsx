import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { MethodList } from "@/components/MethodList";
import { StatsStrip } from "@/components/StatsStrip";
import { HeroStage } from "@/components/HeroStage";
import { Icon, type IconName } from "@/components/Icon";
import { AutomationArt, CreativeArt, GoogleArt, MetaArt } from "@/components/ServiceArt";
import { industries, markets, services } from "@/content/catalog";
import { graph, webPageNode, websiteNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/");

const principles: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "compass",
    title: "Strategy before spend",
    text: "Every engagement starts with a diagnosis of your accounts, tracking, funnel and margins. The budget is set once the plan is clear.",
  },
  {
    icon: "layers",
    title: "Execution across the funnel",
    text: "Ads, creative, landing pages and follow-up are run as one system, so a gain in one place is not lost in the next.",
  },
  {
    icon: "eye",
    title: "Transparency by default",
    text: "Ad accounts, pixels and data stay in your name. You see the same numbers we see, including the ones that are not going well.",
  },
  {
    icon: "zap",
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

const channels = [
  "Meta ads",
  "Instagram",
  "Google Search",
  "Performance Max",
  "Shopping",
  "YouTube",
  "WhatsApp Business",
  "SEO",
  "AI search",
  "Landing pages",
  "CRM automation",
  "LinkedIn",
];

const showcase = [
  {
    href: "/services/meta-ads/",
    kicker: "Paid social",
    tags: ["Facebook", "Instagram", "Lead forms"],
    Art: MetaArt,
  },
  {
    href: "/services/google-ads/",
    kicker: "Search and shopping",
    tags: ["Search", "Performance Max", "Shopping", "YouTube"],
    Art: GoogleArt,
  },
  {
    href: "/services/ad-creative/",
    kicker: "Creative",
    tags: ["Video", "UGC", "Static", "Variants"],
    Art: CreativeArt,
  },
  {
    href: "/services/ai-automation/",
    kicker: "Automation",
    tags: ["WhatsApp", "Lead qualification", "CRM"],
    Art: AutomationArt,
  },
] as const;

const serviceIcons: Record<string, IconName> = {
  "/services/seo/": "search",
  "/services/ecommerce-growth/": "cart",
  "/services/social-media/": "users",
  "/services/landing-pages/": "layout",
  "/services/brand-strategy/": "flag",
};

const industryIcons: Record<string, IconName> = {
  "/industries/ecommerce-d2c/": "bag",
  "/industries/education/": "cap",
  "/industries/healthcare/": "heart",
  "/industries/real-estate/": "building",
  "/industries/b2b-professional-services/": "briefcase",
  "/industries/saas/": "cloud",
  "/industries/hospitality/": "bed",
};

const marketCodes: Record<string, string> = {
  "/locations/india/": "IN",
  "/locations/usa/": "US",
  "/locations/canada/": "CA",
  "/locations/uae/": "AE",
};

export default function HomePage() {
  const featured = showcase.map((f) => ({ ...f, service: services.find((s) => s.href === f.href)! }));
  const more = services.filter((s) => !showcase.some((f) => f.href === s.href));

  return (
    <>
      <JsonLd data={graph(websiteNode(), webPageNode("/"))} />

      {/* Hero: the H1 is the LCP element. Its lines rise in with transform only, so it paints at once. */}
      <section className="container-site pt-14 pb-10 text-center md:pt-24">
        <h1 className="mx-auto max-w-6xl text-display-xl">
          <span className="eyebrow fade-up mx-auto mb-8 flex font-sans tracking-[0.14em]">Campaignly Media</span>
          <span className="sr-only">: </span>
          <span className="rise block">
            <span>
              The advertising-first <span className="text-gradient animate">growth partner</span> for scaling{" "}
              <span className="scribble">
                businesses
                <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                  <path
                    d="M3 14 C 60 4, 120 4, 170 9 S 260 16, 297 6"
                    fill="none"
                    stroke="#c9a84c"
                    strokeWidth="5"
                    strokeLinecap="round"
                    pathLength={1}
                    className="draw-path"
                  />
                </svg>
              </span>
            </span>
          </span>
        </h1>
        <p className="fade-up mx-auto mt-10 max-w-2xl text-lead text-mute" style={{ animationDelay: "120ms" }}>
          We plan, run and measure paid media, search, creative and automation for founders and marketing heads with
          real acquisition budgets, across India, the USA, Canada and the UAE.
        </p>
        <div
          className="fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          style={{ animationDelay: "220ms" }}
        >
          <ButtonLink href="/apply/" ctaId="hero_apply">
            Apply to Partner
          </ButtonLink>
          <ButtonLink href="/services/" variant="secondary" ctaId="hero_services">
            Explore services
          </ButtonLink>
        </div>
        <ul
          className="fade-up mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-mute"
          style={{ animationDelay: "320ms" }}
        >
          {["Accounts stay in your name", "One plan across channels", "Reporting you can audit"].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <span className="grid size-5 place-items-center rounded-full bg-gold-tint text-gold-deep">
                <Icon name="check" size={12} />
              </span>
              {t}
            </li>
          ))}
        </ul>
        <HeroStage />
      </section>

      {/* Channels marquee */}
      <section aria-labelledby="channels-heading" className="py-14 md:py-20">
        <h2 id="channels-heading" className="label text-center">
          Channels we plan, run and report on
        </h2>
        <div className="marquee mt-8">
          {[0, 1].map((n) => (
            <ul key={n} aria-hidden={n === 1 ? true : undefined} className="marquee-track">
              {channels.map((c) => (
                <li
                  key={c}
                  className="flex items-center gap-3 font-display text-2xl font-bold tracking-[-0.03em] whitespace-nowrap text-ink/80 md:text-3xl"
                >
                  <span aria-hidden="true" className="text-gold">
                    ✦
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* Positioning */}
      <section aria-labelledby="different-heading" className="container-site py-10 md:py-16">
        <div className="panel reveal px-4 py-12 sm:px-6 sm:py-14 md:px-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="eyebrow">What Campaignly is</p>
              <h2 id="different-heading" className="mt-6 text-display-lg">
                A growth partner built around <span className="text-gradient animate">paid advertising.</span>
              </h2>
            </div>
            <p className="text-lead text-mute md:col-span-5 md:col-start-8 md:self-end">
              Campaignly is built around advertising: the channel where spend, data and results meet. We compete on
              strategy, execution, transparency and technology. We never compete on price.
            </p>
          </div>
          <ul className="mt-14 grid gap-5 md:grid-cols-2">
            {principles.map((p, i) => (
              <li key={p.title} className="reveal" style={{ ["--i" as string]: i }}>
                <div data-tilt="4" data-spot="" className="card card-hover spot h-full bg-canvas/60 p-7 md:p-9">
                  <span className="chip">
                    <Icon name={p.icon} />
                  </span>
                  <h3 className="mt-6 text-2xl">{p.title}</h3>
                  <p className="mt-3 text-mute">{p.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <StatsStrip />

      {/* Services */}
      <section aria-labelledby="services-heading" className="container-site py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow reveal">Services</p>
          <h2 id="services-heading" className="reveal mt-6 max-w-3xl text-display-lg">
            Nine services, <span className="text-gradient animate">planned and reported together.</span>
          </h2>
        </div>
        <ul className="mt-14 grid gap-6 md:gap-8">
          {featured.map(({ href, kicker, tags, Art, service }, i) => (
            <li key={href} className="panel reveal overflow-hidden p-3 md:p-4">
              <Link href={href} className="group grid items-center gap-8 md:grid-cols-2 md:gap-12">
                <div data-tilt="5" className={i % 2 === 1 ? "md:order-2" : ""}>
                  <Art />
                </div>
                <div className="px-4 pb-8 md:px-6 md:py-8">
                  <p className="eyebrow">{kicker}</p>
                  <h3 className="mt-5 text-display-md">
                    <span className="text-gradient">{service.label}</span>
                  </h3>
                  <p className="mt-4 max-w-md text-lead text-mute">{service.summary}</p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {tags.map((t) => (
                      <li key={t} className="tag">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-8 inline-flex items-center gap-2 font-semibold">
                    <span className="link-quiet">Explore {service.label}</span>
                    <span
                      aria-hidden="true"
                      className="grid size-9 place-items-center rounded-full bg-ink text-white transition-transform duration-500 group-hover:translate-x-1 group-hover:-rotate-45"
                    >
                      <Icon name="arrow" size={16} />
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2 md:mt-8 lg:grid-cols-5">
          {more.map((s, i) => (
            <li key={s.href} className="reveal" style={{ ["--i" as string]: i }}>
              <Link
                href={s.href}
                data-tilt="6"
                data-spot=""
                className="card card-hover spot group flex h-full flex-col p-6"
              >
                <span className="chip">
                  <Icon name={serviceIcons[s.href] ?? "sparkles"} />
                </span>
                <span className="mt-6 font-display text-xl font-bold tracking-[-0.02em]">{s.label}</span>
                <span className="mt-2 text-[0.95rem] text-mute">{s.summary}</span>
                <span aria-hidden="true" className="mt-auto pt-6 text-gold-deep transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/services/" variant="secondary">
            All performance marketing services
          </ButtonLink>
        </div>
      </section>

      {/* Method */}
      <section aria-labelledby="method-heading" className="container-site py-10 md:py-16">
        <div className="panel-ink on-ink reveal px-4 py-12 sm:px-6 sm:py-16 md:px-14 md:py-24">
          <div aria-hidden="true" className="grid-fade" />
          <div className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="eyebrow">The method</p>
              <h2 id="method-heading" className="mt-6 text-display-lg">
                <span className="text-gradient animate">How every engagement runs.</span>
              </h2>
            </div>
            <p className="text-mute md:col-span-4 md:col-start-9 md:self-end">
              Six stages, in this order. Skipping the first two is the most common reason ad budgets stop working as
              they grow.
            </p>
          </div>
          <div className="mt-14">
            <MethodList />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section aria-labelledby="industries-heading" className="container-site py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:sticky lg:top-32 lg:col-span-4 lg:self-start">
            <p className="eyebrow reveal">Industries</p>
            <h2 id="industries-heading" className="reveal mt-6 text-display-lg">
              Shaped around how each <span className="text-gradient animate">industry buys.</span>
            </h2>
            <div className="mt-8">
              <ButtonLink href="/industries/" variant="text">
                Industry growth programmes
              </ButtonLink>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {industries.map((ind, i) => (
              <li key={ind.href} className="reveal" style={{ ["--i" as string]: i % 2 }}>
                <Link
                  href={ind.href}
                  data-tilt="5"
                  data-spot=""
                  className="card card-hover spot group flex h-full items-start gap-5 p-6"
                >
                  <span className="chip shrink-0">
                    <Icon name={industryIcons[ind.href] ?? "sparkles"} />
                  </span>
                  <span>
                    <span className="block font-display text-xl font-bold tracking-[-0.02em]">{ind.label}</span>
                    <span className="mt-1.5 block text-[0.95rem] text-mute">{ind.summary}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Markets */}
      <section aria-labelledby="markets-heading" className="container-site py-10 md:py-16">
        <div className="panel reveal px-4 py-12 sm:px-6 sm:py-14 md:px-14 md:py-20">
          <div className="flex flex-col items-center text-center">
            <p className="eyebrow">Markets</p>
            <h2 id="markets-heading" className="mt-6 max-w-3xl text-display-lg">
              Four markets, each with its own <span className="text-gradient animate">billing, hours and creative.</span>
            </h2>
          </div>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {markets.map((m, i) => (
              <li key={m.href} className="reveal" style={{ ["--i" as string]: i }}>
                <Link
                  href={m.href}
                  data-tilt="7"
                  data-spot=""
                  className="card card-hover spot group flex h-full flex-col overflow-hidden bg-canvas/60 p-6"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-[4.5rem] leading-none font-extrabold tracking-[-0.06em] text-gradient"
                  >
                    {marketCodes[m.href]}
                  </span>
                  <span className="mt-4 font-display text-2xl font-bold tracking-[-0.02em]">{m.label}</span>
                  <dl className="mt-3 flex flex-wrap gap-2 text-xs">
                    <div className="tag bg-white">
                      <dt className="sr-only">Billing</dt>
                      <dd>{m.currency}</dd>
                    </div>
                    <div className="tag bg-white">
                      <dt className="sr-only">Time zone</dt>
                      <dd>{m.timeZone}</dd>
                    </div>
                  </dl>
                  <span className="mt-4 text-[0.95rem] text-mute">{m.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Fit */}
      <section aria-labelledby="fit-heading" className="container-site py-16 md:py-24">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow reveal">Fit</p>
          <h2 id="fit-heading" className="reveal mt-6 max-w-3xl text-display-lg">
            Who we work <span className="text-gradient animate">best with.</span>
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          <div className="card reveal p-7 md:p-10">
            <h3 className="text-2xl">A strong fit</h3>
            <ul className="mt-6 grid gap-4">
              {fit.good.map((f) => (
                <li key={f} className="flex gap-4">
                  <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full bg-gold text-ink">
                    <Icon name="check" size={14} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-[1.75rem] border border-dashed border-line-strong p-7 md:p-10" style={{ ["--i" as string]: 1 }}>
            <h3 className="text-2xl">Not the right fit yet</h3>
            <ul className="mt-6 grid gap-4">
              {fit.notYet.map((f) => (
                <li key={f} className="flex gap-4 text-mute">
                  <span aria-hidden="true" className="grid size-7 shrink-0 place-items-center rounded-full border border-line-strong">
                    <Icon name="minus" size={14} />
                  </span>
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
