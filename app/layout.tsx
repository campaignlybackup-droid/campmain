import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/content/site.config";
import { brand } from "@/lib/brand";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-fraunces",
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
  themeColor: "#030303",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only z-[100] bg-gold px-4 py-3 font-medium text-ink focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main" tabIndex={-1} className="outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
