import Link from "next/link";
import { industries, services } from "@/content/catalog";
import { hasCaseStudies } from "@/lib/contact";
import { MIN_POSTS_FOR_NAV, publishedPostCountSync } from "@/lib/blog";
import { SiteNav, type NavLink } from "@/components/SiteNav";
import { Wordmark } from "@/components/Wordmark";

/** Floating glass bar. Sticky (not fixed) so it keeps its own space and causes no layout shift. */
export function Header() {
  const links: NavLink[] = [
    ...(hasCaseStudies ? [{ label: "Case studies", href: "/case-studies/" }] : []),
    ...(publishedPostCountSync() >= MIN_POSTS_FOR_NAV ? [{ label: "Insights", href: "/blog/" }] : []),
    { label: "About", href: "/about/" },
  ];
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 rounded-2xl border border-white/70 bg-white/75 pr-2 pl-4 shadow-[0_10px_40px_-18px_rgb(40_30_90/0.35)] backdrop-blur-xl backdrop-saturate-150 md:pl-5">
        <Wordmark />
        <div className="flex items-center gap-6">
          <SiteNav
            groups={[
              { label: "Services", href: "/services/", items: services.map(({ href, label }) => ({ href, label })) },
              { label: "Industries", href: "/industries/", items: industries.map(({ href, label }) => ({ href, label })) },
            ]}
            links={links}
          />
          <Link href="/apply/" data-cta="header_apply" className="btn btn-primary hidden min-h-11 px-5 py-2 lg:inline-flex">
            Apply to Partner
          </Link>
        </div>
      </div>
    </header>
  );
}
