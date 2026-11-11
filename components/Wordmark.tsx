import Link from "next/link";
import { siteConfig } from "@/content/site.config";

/** Logo. Uses the configured logo file when present, otherwise a typographic wordmark. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex min-h-11 items-center ${className}`} aria-label="Campaignly Media, home">
      {siteConfig.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={siteConfig.logo} alt="Campaignly Media logo" width={160} height={32} className="h-7 w-auto" />
      ) : (
        <span className="font-display text-[1.6rem] leading-none font-normal tracking-[-0.02em]">
          Campaignly<span className="text-gold">.</span>
        </span>
      )}
    </Link>
  );
}
