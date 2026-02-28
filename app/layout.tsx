import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/shared/FloatingCTA";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
import { siteConfig } from "@/lib/config";
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
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <FloatingCTA />
        <ScrollToTop />
      </body>
    </html>
  );
}
