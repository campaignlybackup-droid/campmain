import Link from "next/link";
import { ButtonLink } from "@/components/Button";
import { CtaBand } from "@/components/CtaBand";
import { JsonLd } from "@/components/JsonLd";
import { StatsStrip } from "@/components/StatsStrip";
import { HeroStage } from "@/components/HeroStage";
import { Icon, type IconName } from "@/components/Icon";
import { AutomationArt, CreativeArt, GoogleArt, MetaArt } from "@/components/ServiceArt";
import { industries, markets, method, services } from "@/content/catalog";
import { graph, webPageNode, websiteNode } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata("/");

/** Homepage copy is deliberately short; the detail lives on each service, industry and market page. */
const principles: { icon: IconName; title: string; text: string }[] = [
  { icon: "compass", title: "Strategy before spend", text: "Diagnosis first. Budget second." },
  { icon: "layers", title: "One funnel, one team", text: "Ads, creative, pages and follow-up, run together." },
  { icon: "eye", title: "Transparent by default", text: "Accounts and data stay in your name." },
  { icon: "zap", title: "Built for speed", text: "Leads answered and qualified in minutes." },
];

const fit = {
  good: ["Accountable for revenue or pipeline", "An existing product, offer and budget", "Want a long-term partner"],
  notYet: ["One-off boosted posts", "Choosing on the lowest fee", "No budget for testing"],
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

const serviceIcons: Record<string, IconName> = {
  "/services/seo/": "search",
  "/services/ecommerce-growth/": "cart",
  "/services/social-media/": "users",
  "/services/landing-pages/": "layout",
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

const svc = (href: string) => services.find((s) => s.href === href)!;

function TileHead({ href, label, summary }: { href: string; label: string; summary: string }) {
  return (
    <>
      <h3 className="font-display text-2xl font-bold tracking-[-0.03em]">
        <Link href={href} className="after:absolute after:inset-0 after:rounded-[inherit]">
          {label}
        </Link>
      </h3>
      <p className="mt-2 max-w-sm text-[0.95rem] text-mute">{summary}</p>
    </>
  );
}

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="grid size-9 shrink-0 place-items-center rounded-full bg-canvas text-ink transition-all duration-500 group-hover:-rotate-45 group-hover:bg-ink group-hover:text-white"
    >
      <Icon name="arrow" size={16} />
    </span>
  );
}

export default function HomePage() {
  const meta = svc("/services/meta-ads/");
  const google = svc("/services/google-ads/");
  const creative = svc("/services/ad-creative/");
  const automation = svc("/services/ai-automation/");
  const small = ["/services/seo/", "/services/ecommerce-growth/", "/services/social-media/", "/services/landing-pages/"].map(svc);
  const brandStrategy = svc("/services/brand-strategy/");

  return (
    <>
      <JsonLd data={graph(websiteNode(), webPageNode("/"))} />

      {/* Hero: dark stage. The H1 is the LCP element; its lines rise with transform only. */}
      <section className="container-site pt-2 md:pt-4">
        <div className="panel-ink on-ink px-5 pt-14 pb-36 sm:px-10 md:px-14 md:pt-20 md:pb-64">
          <div aria-hidden="true" className="grid-fade" />
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h1 className="text-[clamp(2.5rem,1.4rem+4vw,5rem)] leading-[1.02]">
                <span className="eyebrow fade-up mb-8 flex font-sans tracking-[0.18em]">Campaignly Media</span>
                <span className="sr-only">: </span>
                <span className="rise block">
                  <span>
                    The advertising-first <span className="text-gradient animate">growth partner</span> for scaling
                    businesses
                  </span>
                </span>
              </h1>
              <p className="fade-up mt-8 max-w-xl text-lead text-mute" style={{ animationDelay: "120ms" }}>
                Paid media, search, creative and automation, run as one system.
              </p>
              <div
                className="fade-up mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
                style={{ animationDelay: "220ms" }}
              >
                <ButtonLink href="/apply/" variant="gold" ctaId="hero_apply">
                  Apply to Partner
                </ButtonLink>
                <ButtonLink href="/services/" variant="secondary" ctaId="hero_services">
                  Explore services
                </ButtonLink>
              </div>
            </div>
            <p
              aria-hidden="true"
              className="kinetic hidden self-end text-right font-display text-5xl leading-[1.05] font-extrabold tracking-[-0.05em] lg:col-span-4 lg:block xl:text-[3.75rem]"
            >
              <span>Outperform.</span>
              <span>Outshine.</span>
              <span>Outwin.</span>
            </p>
          </div>
        </div>
        <div className="relative z-10 -mt-24 md:-mt-48">
          <HeroStage />
        </div>
      </section>

      {/* Channels */}
      <section aria-labelledby="channels-heading" className="py-16 md:py-24">
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
      <section aria-labelledby="different-heading" className="container-site pb-16 md:pb-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow reveal">What Campaignly is</p>
            <h2 id="different-heading" className="reveal mt-6 text-display-lg">
              A growth partner built around <span className="text-gradient animate">paid advertising.</span>
            </h2>
          </div>
          <p className="reveal text-lead text-mute lg:col-span-4 lg:col-start-9">
            We compete on strategy, execution, transparency and technology. Never on price.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <li key={p.title} className="reveal" style={{ ["--i" as string]: i }}>
              <div data-tilt="5" data-spot="" className="card card-hover spot h-full p-6 md:p-7">
                <span className="chip">
                  <Icon name={p.icon} />
                </span>
                <h3 className="mt-6 text-xl">{p.title}</h3>
                <p className="mt-2 text-[0.95rem] text-mute">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <StatsStrip />

      {/* Services: bento */}
      <section aria-labelledby="services-heading" className="container-site py-16 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow reveal">Services</p>
            <h2 id="services-heading" className="reveal mt-6 max-w-2xl text-display-lg">
              Nine services, <span className="text-gradient animate">one plan.</span>
            </h2>
          </div>
          <ButtonLink href="/services/" variant="text">
            All performance marketing services
          </ButtonLink>
        </div>

        <ul className="bento mt-12">
          <li className="bento-xl reveal">
            <div data-spot="" className="card card-hover spot group relative flex h-full flex-col gap-6 p-4 md:p-5">
              <div className="flex items-start justify-between gap-4 px-2 pt-2">
                <div>
                  <TileHead {...meta} />
                </div>
                <Arrow />
              </div>
              <div data-tilt="4" className="mt-auto">
                <MetaArt className="aspect-[16/11]" />
              </div>
            </div>
          </li>
          <li className="bento-wide reveal" style={{ ["--i" as string]: 1 }}>
            <div data-spot="" className="card card-hover spot group relative grid h-full items-center gap-6 p-4 sm:grid-cols-2 md:p-5">
              <div className="px-2">
                <TileHead {...google} />
              </div>
              <div data-tilt="5">
                <GoogleArt className="aspect-[16/11]" />
              </div>
            </div>
          </li>
          <li className="bento-wide reveal" style={{ ["--i" as string]: 2 }}>
            <div data-spot="" className="card card-hover spot group relative grid h-full items-center gap-6 p-4 sm:grid-cols-2 md:p-5">
              <div className="px-2">
                <TileHead {...automation} />
              </div>
              <div data-tilt="5">
                <AutomationArt className="aspect-[16/11]" />
              </div>
            </div>
          </li>
          {small.map((s, i) => (
            <li key={s.href} className="reveal" style={{ ["--i" as string]: i }}>
              <div data-tilt="6" data-spot="" className="card card-hover spot group relative flex h-full flex-col p-6">
                <div className="flex items-start justify-between">
                  <span className="chip">
                    <Icon name={serviceIcons[s.href] ?? "sparkles"} />
                  </span>
                  <Arrow />
                </div>
                <div className="mt-6">
                  <TileHead {...s} />
                </div>
              </div>
            </li>
          ))}
          <li className="bento-wide reveal">
            <div data-spot="" className="card card-hover spot group relative grid h-full items-center gap-6 p-4 sm:grid-cols-2 md:p-5">
              <div className="px-2">
                <TileHead {...creative} />
              </div>
              <div data-tilt="5">
                <CreativeArt className="aspect-[16/10]" />
              </div>
            </div>
          </li>
          <li className="reveal" style={{ ["--i" as string]: 1 }}>
            <div data-tilt="6" data-spot="" className="card card-hover spot group relative flex h-full flex-col p-6">
              <div className="flex items-start justify-between">
                <span className="chip">
                  <Icon name="flag" />
                </span>
                <Arrow />
              </div>
              <div className="mt-6">
                <TileHead {...brandStrategy} />
              </div>
            </div>
          </li>
          <li className="reveal" style={{ ["--i" as string]: 2 }}>
            <Link
              href="/apply/"
              data-cta="bento_apply"
              className="group panel-ink on-ink flex h-full flex-col justify-between rounded-[1.75rem] p-6 transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="font-display text-2xl font-bold tracking-[-0.03em]">
                <span className="text-gradient">Not sure where to start?</span>
              </span>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-soft">
                Apply to Partner
                <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </section>

      {/* Method: a gold rail across six stages */}
      <section aria-labelledby="method-heading" className="container-site py-10 md:py-16">
        <div className="panel-ink on-ink reveal px-5 py-14 sm:px-10 md:px-14 md:py-20">
          <div aria-hidden="true" className="grid-fade" />
          <p className="eyebrow">The method</p>
          <h2 id="method-heading" className="mt-6 max-w-2xl text-display-lg">
            <span className="text-gradient animate">How every engagement runs.</span>
          </h2>
          <ol className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            <span aria-hidden="true" className="rail hidden lg:block" />
            {method.map((m, i) => (
              <li key={m.step} className="relative">
                <span
                  aria-hidden="true"
                  className="relative z-10 grid size-10 place-items-center rounded-full border border-gold/50 bg-[#0e0d13] font-display text-sm font-bold text-gold-soft"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 text-xl">{m.step}</h3>
                <p className="mt-2 text-[0.95rem] text-mute">{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Industries and markets */}
      <section aria-labelledby="industries-heading" className="container-site py-16 md:py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-10">
          <div>
            <p className="eyebrow reveal">Industries</p>
            <h2 id="industries-heading" className="reveal mt-6 text-display-md">
              Shaped around how each <span className="text-gradient animate">industry buys.</span>
            </h2>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {industries.map((ind, i) => (
                <li key={ind.href} className="reveal" style={{ ["--i" as string]: i % 4 }}>
                  <Link
                    href={ind.href}
                    title={ind.summary}
                    className="group inline-flex min-h-12 items-center gap-2.5 rounded-full border border-line bg-paper py-2 pr-5 pl-2 font-medium shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/60"
                  >
                    <span className="grid size-8 place-items-center rounded-full bg-gold-tint text-gold-deep transition-colors group-hover:bg-ink group-hover:text-gold-soft">
                      <Icon name={industryIcons[ind.href] ?? "sparkles"} size={16} />
                    </span>
                    {ind.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow reveal">Markets</p>
            <h2 id="markets-heading" className="reveal mt-6 text-display-md">
              Four markets, <span className="text-gradient animate">local by design.</span>
            </h2>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {markets.map((m, i) => (
                <li key={m.href} className="reveal" style={{ ["--i" as string]: i }}>
                  <Link
                    href={m.href}
                    data-tilt="8"
                    data-spot=""
                    className="card card-hover spot group flex h-full flex-col p-5"
                  >
                    <span aria-hidden="true" className="font-display text-5xl leading-none font-extrabold tracking-[-0.06em] text-gradient">
                      {marketCodes[m.href]}
                    </span>
                    <span className="mt-4 font-display text-lg font-bold tracking-[-0.02em]">{m.label}</span>
                    <span className="mt-1 text-sm text-mute">
                      {m.currency} · {m.timeZone}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Fit */}
      <section aria-labelledby="fit-heading" className="container-site pb-8 md:pb-12">
        <h2 id="fit-heading" className="reveal text-display-md">
          Who we work <span className="text-gradient animate">best with.</span>
        </h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <div className="card reveal p-7 md:p-9">
            <h3 className="text-xl">A strong fit</h3>
            <ul className="mt-5 grid gap-3">
              {fit.good.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full bg-gold text-ink">
                    <Icon name="check" size={13} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal rounded-[1.75rem] border border-dashed border-line-strong p-7 md:p-9" style={{ ["--i" as string]: 1 }}>
            <h3 className="text-xl">Not the right fit yet</h3>
            <ul className="mt-5 grid gap-3 text-mute">
              {fit.notYet.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span aria-hidden="true" className="grid size-6 shrink-0 place-items-center rounded-full border border-line-strong">
                    <Icon name="minus" size={13} />
                  </span>
                  {f}
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
