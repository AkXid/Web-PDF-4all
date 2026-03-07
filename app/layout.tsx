import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/shared/FloatingCTA";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { siteConfig } from "@/lib/config";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const fontSans = localFont({
  src: [
    { path: "./fonts/DMSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/DMSans-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/DMSans-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

const fontMono = localFont({
  src: [
    { path: "./fonts/JetBrainsMono-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-mono",
  display: "swap",
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.seo.title,
    template: `%s | ${siteConfig.company.name}`,
  },
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  openGraph: {
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    type: "website",
    locale: "de_DE",
    // OG-Bild wird automatisch via app/opengraph-image.tsx generiert
  },
  verification: {
    google: "4PBZf0hUZ6IE_bivPSVsCTyVl3Jf-yI4NAREY5ktm-4",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${fontSans.variable} ${fontMono.variable}`}>
      <body className="font-sans">
        {/* GTM noscript – für Browser ohne JavaScript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZ867C2K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* 1. Consent Mode v2 defaults */}
        <Script id="consent-mode" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'analytics_storage': 'denied',
            'wait_for_update': 500
          });
        `}</Script>

        {/* 2. Cookiebot – Cookie-Banner + aktualisiert Consent Mode */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="058f8bf7-da6b-4780-8552-20f1030e23e2"
          data-blockingmode="auto"
          strategy="afterInteractive"
        />

        {/* 3. Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PZ867C2K');
        `}</Script>

        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <FloatingCTA />
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  );
}
