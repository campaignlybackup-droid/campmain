import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Aurora } from "@/components/Aurora";
import { Header } from "@/components/Header";
import { Motion } from "@/components/Motion";
import { AttributionOnly } from "@/components/AttributionOnly";
import { Tracking } from "@/components/Tracking";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { publicEnv, trackingConfigured } from "@/lib/env";
import { siteConfig } from "@/content/site.config";
import { brand } from "@/lib/brand";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const verification: Metadata["verification"] = {
  ...(siteConfig.searchConsoleVerification ? { google: siteConfig.searchConsoleVerification } : {}),
  ...(siteConfig.bingVerification ? { other: { "msvalidate.01": siteConfig.bingVerification } } : {}),
};

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  applicationName: brand.displayName,
  formatDetection: { telephone: false, email: false, address: false },
  ...(Object.keys(verification).length ? { verification } : {}),
};

export const viewport: Viewport = {
  themeColor: "#f7f5f2",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Marks JS as available before first paint, so scroll reveals never flash. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="relative isolate">
        <div className="scroll-progress" aria-hidden="true" />
        {/* Page-top colour glow shared by every page */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60rem] overflow-hidden">
          <Aurora />
        </div>
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-ink px-5 py-3 font-medium text-paper focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Motion />
        {trackingConfigured ? <Tracking ga4Id={publicEnv.ga4Id} pixelId={publicEnv.metaPixelId} /> : <AttributionOnly />}
      </body>
    </html>
  );
}
