import type { MetadataRoute } from "next";
import { services } from "@/lib/services-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.pdf-4all.de";

  const servicePages = services.map((s) => ({
    url: `${baseUrl}/leistungen/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/kontakt`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/bfsg-check`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ...servicePages,
    // Impressum, Datenschutz, AGB absichtlich nicht in Sitemap (noindex)
  ];
}
