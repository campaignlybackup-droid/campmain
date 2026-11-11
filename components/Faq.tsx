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
          <ul className="border-t border-line">
            {items.map((f) => (
              <li key={f.q} className="border-b border-line">
                <details className="group">
                  <summary className="flex min-h-14 cursor-pointer list-none items-start justify-between gap-6 py-5 text-lg font-medium [&::-webkit-details-marker]:hidden">
                    <h3 className="font-sans text-[1.0625rem] font-medium tracking-normal md:text-lg">{f.q}</h3>
                    <span
                      aria-hidden="true"
                      className="mt-1 text-xl leading-none text-gold transition-transform duration-200 group-open:rotate-45"
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
