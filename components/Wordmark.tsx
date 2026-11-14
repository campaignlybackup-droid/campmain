import Link from "next/link";
import { siteConfig } from "@/content/site.config";

/** Logo. Uses the configured logo file when present, otherwise a typographic wordmark. */
export function Wordmark({ className = "", size = "header" }: { className?: string; size?: "header" | "footer" }) {
  return (
    <Link href="/" className={`group inline-flex min-h-11 items-center ${className}`} aria-label="Campaignly Media, home">
      {siteConfig.logo ? (
        // The gold C sits on an ink tile, like the app icon, so it holds contrast on the light theme.
        <span
          className={`grid place-items-center rounded-xl bg-ink shadow-[0_8px_20px_-8px_rgb(13_27_46/0.6),inset_0_1px_0_rgb(255_255_255/0.12)] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-rotate-6 group-hover:scale-105 ${size === "footer" ? "size-14 rounded-2xl" : "size-10"}`}
        >
          {/* Source is 121x108; width/height reserve the space so the header does not shift. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={siteConfig.logo} alt="" width={121} height={108} className={size === "footer" ? "h-8 w-auto" : "h-6 w-auto"} />
        </span>
      ) : (
        <span className="font-display text-[1.6rem] leading-none font-bold tracking-[-0.03em]">
          Campaignly<span className="text-gold-deep">.</span>
        </span>
      )}
    </Link>
  );
}
