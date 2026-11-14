import { method } from "@/content/catalog";

/** The six-stage method as numbered cards. Works on light and dark (.on-ink) backgrounds. */
export function MethodList({ headingLevel = "h3" }: { headingLevel?: "h3" | "h4" }) {
  const H = headingLevel;
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {method.map((m, i) => (
        <li
          key={m.step}
          className="reveal method-card relative overflow-hidden rounded-3xl border p-7 md:p-8"
          style={{ ["--i" as string]: i % 3 }}
        >
          <span
            aria-hidden="true"
            className="block font-display text-6xl leading-none font-extrabold tracking-[-0.06em] text-gradient md:text-7xl"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <H className="mt-8 font-display text-2xl font-bold tracking-[-0.02em]">{m.step}</H>
          <p className="mt-3 text-mute">{m.text}</p>
        </li>
      ))}
    </ol>
  );
}
