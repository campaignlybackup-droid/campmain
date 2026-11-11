import { siteConfig } from "@/content/site.config";

/** Verified stats only. Renders nothing until stats exist in site.config.ts. Each figure shows its period. */
export function StatsStrip() {
  const stats = siteConfig.stats?.filter((s) => s.value && s.label && s.period) ?? [];
  if (stats.length === 0) return null;
  return (
    <section aria-labelledby="stats-heading" className="border-t border-line">
      <div className="container-site py-20 md:py-24">
        <h2 id="stats-heading" className="eyebrow">
          Results
        </h2>
        <dl className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col border-t border-line pt-6">
              <dt className="text-mute">{s.label}</dt>
              <dd className="order-first mt-0 font-display text-5xl text-gold">{s.value}</dd>
              <dd className="mt-2 text-sm text-mute">{s.period}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
