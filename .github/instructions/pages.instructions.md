---
name: 'App Router Pages'
description: 'Regeln für Next.js App Router Seiten und Layouts – PDF/UA Barrierefreiheit Landingpage'
applyTo: 'app/**/*.tsx'
---

# App Router Regeln

## Metadata
- Jede `page.tsx` MUSS `generateMetadata()` oder `export const metadata` haben
- Titel-Format: "{Seitenname} | {Firmenname}"
- Description: Unter 160 Zeichen
- Open Graph Bild: `/images/og-image.jpg`

## Layout
- `app/layout.tsx`: Header + Footer wrappen, Font laden, JSON-LD einbetten
- Keine verschachtelten Layouts für Unterseiten (eine Layout-Ebene reicht)

## Pages
- **ALLE Seiten müssen statisch gerendert werden** – GitHub Pages hat kein Server-Rendering
- `"use client"` NUR in interaktiven Komponenten, nicht auf Page-Ebene
- Sektionen als separate Komponenten importieren, nicht inline

## API Routes
- `app/api/contact/route.ts`: POST only, Zod Validation
- **Hinweis:** API Routes funktionieren nicht mit `output: 'export'` (GitHub Pages)
- → Kontaktformular-Backend muss extern sein (Resend, Make.com, n8n) oder über `action=""` im Formular

## SEO
- JSON-LD Schema in layout.tsx (ProfessionalService statt LocalBusiness) und auf Unterseiten (Service, FAQPage)
- Keine `aggregateRating` ohne echte Google-Bewertungsdaten
- `app/sitemap.ts` für automatische Sitemap
- `app/robots.ts` für robots.txt
- Canonical URLs auf jeder Seite
