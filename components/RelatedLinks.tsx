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
      <ul className="mt-8 grid gap-3">
        {items.map((i) => (
          <li key={i.href} className="reveal">
            <Link href={i.href} data-spot="" className="card card-hover spot group flex items-center justify-between gap-6 px-6 py-5">
              <span>
                <span className="font-display text-xl font-bold tracking-[-0.02em]">{i.label}</span>
                {i.summary ? <span className="mt-1 block text-[0.95rem] text-mute">{i.summary}</span> : null}
              </span>
              <span aria-hidden="true" className="grid size-9 shrink-0 place-items-center rounded-full bg-canvas text-ink transition-all duration-500 group-hover:-rotate-45 group-hover:bg-ink group-hover:text-white">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
