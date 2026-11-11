import Link from "next/link";
import { industries, services } from "@/content/catalog";
import { hasCaseStudies } from "@/lib/contact";
import { publishedPostCount } from "@/lib/content-flags";
import { SiteNav, type NavLink } from "@/components/SiteNav";
import { Wordmark } from "@/components/Wordmark";

export function Header() {
  const links: NavLink[] = [
    ...(hasCaseStudies ? [{ label: "Case studies", href: "/case-studies/" }] : []),
    ...(publishedPostCount >= 3 ? [{ label: "Insights", href: "/blog/" }] : []),
    { label: "About", href: "/about/" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur supports-[backdrop-filter]:bg-ink/75">
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-6">
        <Wordmark />
        <div className="flex items-center gap-8">
          <SiteNav
            groups={[
              { label: "Services", href: "/services/", items: services.map(({ href, label }) => ({ href, label })) },
              { label: "Industries", href: "/industries/", items: industries.map(({ href, label }) => ({ href, label })) },
            ]}
            links={links}
          />
          <div className="hidden items-center gap-6 lg:flex">
            <Link href="/free-ad-account-review/" data-cta="header_review" className="link-quiet text-[0.95rem] text-mute hover:text-paper">
              Free ad account review
            </Link>
            <Link
              href="/apply/"
              data-cta="header_apply"
              className="inline-flex min-h-11 items-center bg-gold px-5 text-[0.95rem] font-medium text-ink transition-colors hover:bg-paper"
            >
              Apply to Partner
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
