import Link from "next/link";

export function RelatedLinks({
  id,
  heading,
  items,
}: {
  id: string;
  heading: string;
  items: { href: string; label: string; summary?: string }[];
}) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="text-display-md">
        {heading}
      </h2>
      <ul className="mt-8 border-t border-line">
        {items.map((i) => (
          <li key={i.href} className="border-b border-line">
            <Link href={i.href} className="group flex items-baseline justify-between gap-6 py-5">
              <span>
                <span className="font-display text-xl transition-colors group-hover:text-gold">{i.label}</span>
                {i.summary ? <span className="mt-1 block text-[0.95rem] text-mute">{i.summary}</span> : null}
              </span>
              <span aria-hidden="true" className="text-gold transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
