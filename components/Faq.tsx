import type { Faq as FaqItem } from "@/lib/schema";

/** Visible FAQ. Native <details> keeps answers in the static HTML and keyboard-operable without JS. */
export function Faq({ items, heading = "Frequently asked questions" }: { items: FaqItem[]; heading?: string }) {
  return (
    <section aria-labelledby="faq-heading" className="container-site py-20 md:py-28">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 id="faq-heading" className="text-display-md">
            {heading}
          </h2>
        </div>
        <div className="md:col-span-8">
          <ul className="grid gap-3">
            {items.map((f) => (
              <li key={f.q} className="reveal">
                <details className="group card overflow-hidden px-5 transition-shadow open:shadow-[0_24px_50px_-28px_rgb(13_27_46/0.35)] md:px-7">
                  <summary className="flex min-h-14 cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-medium [&::-webkit-details-marker]:hidden">
                    <h3 className="font-display text-[1.0625rem] font-semibold tracking-[-0.01em] md:text-lg">{f.q}</h3>
                    <span
                      aria-hidden="true"
                      className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-line-strong text-lg leading-none transition-all duration-300 group-open:rotate-45 group-open:border-ink group-open:bg-ink group-open:text-white"
                    >
                      +
                    </span>
                  </summary>
                  <p className="prose-site pb-6 text-mute">{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
