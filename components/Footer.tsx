import Link from "next/link";
import { industries, markets, services } from "@/content/catalog";
import { siteConfig } from "@/content/site.config";
import { brand } from "@/lib/brand";
import { telHref, whatsappHref } from "@/lib/contact";
import { Wordmark } from "@/components/Wordmark";
import { ConsentSettingsButton } from "@/components/ConsentSettingsButton";
import { trackingConfigured } from "@/lib/env";

const socialLabels: Record<keyof typeof siteConfig.social, string> = {
  linkedin: "LinkedIn",
  instagram: "Instagram",
  facebook: "Facebook",
  x: "X",
  youtube: "YouTube",
};

function Column({ title, items }: { title: string; items: readonly { href: string; label: string }[] }) {
  return (
    <div>
      <h2 className="eyebrow">{title}</h2>
      <ul className="mt-5 grid gap-2.5 text-[0.95rem]">
        {items.map((i) => (
          <li key={i.href}>
            <Link href={i.href} className="link-quiet text-mute hover:text-paper">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  const c = siteConfig;
  const wa = whatsappHref();
  const tel = telHref();
  const socials = (Object.keys(c.social) as (keyof typeof c.social)[]).filter((k) => c.social[k]);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-site grid gap-14 py-16 md:py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Wordmark />
          <p className="mt-5 max-w-sm text-mute">
            Campaignly Media is an advertising-first, AI-enabled growth partner for scaling businesses in India, the USA,
            Canada and the UAE.
          </p>
          <p className="mt-6 font-display text-xl">{brand.tagline}</p>
          {(c.email || tel || wa || c.address) && (
            <address className="mt-8 grid gap-2 text-[0.95rem] not-italic text-mute">
              {c.email && (
                <a href={`mailto:${c.email}`} className="link-quiet hover:text-paper">
                  {c.email}
                </a>
              )}
              {tel && c.phone && (
                <a href={tel} className="link-quiet hover:text-paper">
                  {c.phone}
                </a>
              )}
              {wa && (
                <a href={wa} data-cta="footer_whatsapp" rel="noopener" target="_blank" className="link-quiet hover:text-paper">
                  WhatsApp
                </a>
              )}
              {c.address && (
                <span>
                  {c.address.streetAddress}, {c.address.addressLocality}, {c.address.addressRegion} {c.address.postalCode}
                </span>
              )}
            </address>
          )}
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 lg:col-span-8">
          <Column title="Services" items={services} />
          <Column title="Industries" items={industries} />
          <Column title="Markets" items={markets} />
          <Column
            title="Company"
            items={[
              { href: "/about/", label: "About" },
              { href: "/apply/", label: "Apply to Partner" },
              { href: "/free-ad-account-review/", label: "Free ad account review" },
              { href: "/contact/", label: "Contact" },
            ]}
          />
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-4 py-8 text-sm text-mute md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {c.legalName ?? brand.displayName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((k) => (
              <li key={k}>
                <a href={c.social[k] ?? undefined} rel="noopener me" target="_blank" className="link-quiet hover:text-paper">
                  {socialLabels[k]}
                </a>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy/" className="link-quiet hover:text-paper">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/terms/" className="link-quiet hover:text-paper">
                Terms
              </Link>
            </li>
            {trackingConfigured ? (
              <li>
                <ConsentSettingsButton />
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </footer>
  );
}
