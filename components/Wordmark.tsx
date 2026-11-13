import Link from "next/link";
import { siteConfig } from "@/content/site.config";

/** Logo. Uses the configured logo file when present, otherwise a typographic wordmark. */
export function Wordmark({ className = "", size = "header" }: { className?: string; size?: "header" | "footer" }) {
  return (
    <Link href="/" className={`inline-flex min-h-11 items-center ${className}`} aria-label="Campaignly Media, home">
      {siteConfig.logo ? (
        // Source is 493x89; width/height reserve the space so the header does not shift.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={siteConfig.logo}
          alt=""
          width={493}
          height={89}
          className={size === "footer" ? "h-12 w-auto md:h-14" : "h-9 w-auto md:h-11"}
        />
      ) : (
        <span className="font-display text-[1.6rem] leading-none font-normal tracking-[-0.02em]">
          Campaignly<span className="text-gold">.</span>
        </span>
      )}
    </Link>
  );
}
