import { method } from "@/content/catalog";

export function MethodList({ headingLevel = "h3" }: { headingLevel?: "h3" | "h4" }) {
  const H = headingLevel;
  return (
    <ol className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-3">
      {method.map((m, i) => (
        <li key={m.step} className="reveal border-b border-line py-8 sm:pr-8 lg:[&:nth-child(3n+2)]:px-8 lg:[&:nth-child(3n)]:pl-8">
          <span aria-hidden="true" className="block font-display text-5xl font-light text-gold md:text-6xl">
            {String(i + 1).padStart(2, "0")}
          </span>
          <H className="mt-6 font-display text-2xl">{m.step}</H>
          <p className="mt-3 text-mute">{m.text}</p>
        </li>
      ))}
    </ol>
  );
}
