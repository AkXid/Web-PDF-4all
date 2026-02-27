# Vollständige Anforderungen: PDF/UA Barrierefreiheit – Landingpage

> Diese Datei beschreibt die komplette Seitenstruktur, alle Sektionen, SEO-Anforderungen,
> Lead-Generierung und technische Details. Referenziert aus `CLAUDE.md`.

---

## Interaktiver Setup-Prozess

**Beim ersten Start: Stelle dem Nutzer die folgenden Fragen nacheinander.**
Warte jeweils die Antwort ab, bevor du zur nächsten Frage übergehst.
Die Antworten werden in `lib/config.ts` und `docs/BRANCHE.md` eingetragen.

### Frage 1: Firmendaten
```
Für wen erstellen wir die Website?
- Firmenname
- Inhaber / Freelancer-Name
- Stadt / Region
- Telefonnummer
- E-Mail-Adresse
- Website-Domain (z.B. www.mein-unternehmen.de)
```

### Frage 2: Leistungsspektrum
```
Welche Leistungen bieten Sie konkret an? (aus BRANCHE.md vorschlagen)
→ Ich schlage die 4 Standardleistungen vor, Sie bestätigen oder ergänzen.
```

### Frage 3: Analytics
```
Web-Analytics integrieren?
→ JA → Google Analytics Measurement-ID eingeben (G-XXXXXXXXXX)
→ NEIN → Weiter
```

### Frage 4: Cookie-Consent
```
DSGVO Cookie-Banner integrieren?
→ JA → Clientseitiger Banner (kein externer Dienst)
→ NEIN → Weiter
```

### Frage 5: Kontaktformular-Backend
```
Wie sollen Anfragen ankommen?
→ A) E-Mail (Resend API-Key benötigt)
→ B) Webhook (Make.com / n8n URL benötigt)
→ C) Nur Frontend (später anbinden)
```

### Frage 6: Farbschema
```
Farbschema bestätigen?
→ A) Standard: Dunkelblau + Goldgelb (empfohlen für Barrierefreiheits-Dienstleister)
→ B) Eigene Farben (Primary + Accent als Hex)
```

### Frage 7: Lead Magnet
```
Lead Magnet integrieren?
→ A) Checkliste (PDF-Download gegen E-Mail) ← empfohlen: "PDF/UA-Checkliste"
→ B) Keinen
```

### Frage 8: Zusatzfeatures
```
Zusatzfeatures? (Mehrfachauswahl)
□ WhatsApp-Button
□ FAQ-Akkordeon (empfohlen – aktiviert)
□ DSGVO Cookie-Consent (empfohlen – aktiviert)
```

> **Nicht relevant für dieses Unternehmen (dauerhaft deaktiviert):**
> - ~~Notdienst-Banner~~ → kein Notdienst
> - ~~Team-Sektion~~ → Einzelunternehmen
> - ~~Google Bewertungsbox~~ → nicht gewünscht
> - ~~Bildergalerie~~ → nicht nötig

---

## Zentrale Konfiguration (`lib/config.ts`)

Alle Daten aus `docs/BRANCHE.md` werden in eine typisierte Konfiguration überführt.
Der Nutzer muss **nur `docs/BRANCHE.md` ändern** – `config.ts` liest daraus.

```typescript
// Type-Definition
export interface SiteConfig {
  company: {
    name: string;
    owner: string;
    claim: string;
    foundedYear: number;
    phone: string;
    email: string;
    address: { street: string; zip: string; city: string };
    region: string;
    serviceRadius: string;
    openingHours: { weekdays: string; saturday: string };
    certification?: string;
  };
  colors: {
    primary: string;
    primaryLight: string;
    primaryLighter: string;
    accent: string;
    accentLight: string;
  };
  seo: { title: string; description: string; keywords: string[] };
  features: Record<string, boolean | string>;
  socialProof: {
    yearsExperience: number;
    completedProjects: number;
    satisfactionRate: string;
    turnaroundDays: number;
  };
  navigation: Array<{ label: string; href: string; children?: Array<{ label: string; href: string }> }>;
}
```

---

## Seitenstruktur

### Globaler Header

- **Sticky** mit `bg-white/90 backdrop-blur-sm` beim Scrollen
- Logo links (Text-Logo mit Firmenname, kein Bild nötig)
- Navigation mittig (Desktop) / Hamburger (Mobile, shadcn `Sheet`)
- Rechts: Telefonnummer (Desktop) + CTA-Button "Anfrage" in Akzentfarbe
- Framer Motion: sanftes `y: -10 → 0` beim initialen Laden
- **Kein Notdienst-Banner** (dauerhaft deaktiviert)

### Globaler Footer

- `bg-slate-900 text-white`
- 3–4-Spalten Layout → 1 Spalte mobil
  - Spalte 1: Firmenname, Kurztext, Zertifizierung
  - Spalte 2: Leistungen (Links)
  - Spalte 3: Kontaktdaten, Öffnungszeiten
  - Spalte 4: Rechtliches (Impressum, Datenschutz, AGB)
- Untere Zeile: `© {Jahr} {Firmenname}. Alle Rechte vorbehalten.`

### Rechtliche Seiten

**Impressum** – Pflichtangaben nach § 5 TMG:
- Firmendaten, Kontakt, USt-ID (Platzhalter), Freiberufler/Einzelunternehmen
- Keine Handwerkskammer – stattdessen: zutreffende Berufsbezeichnung
- Streitschlichtung (EU OS-Plattform Link)
- **Hinweis:** "Platzhalter – bitte von Rechtsanwalt prüfen lassen"

**Datenschutz** – DSGVO-konforme Vorlage:
- Verantwortlicher, Datenerfassung, Hosting (GitHub Pages), Kontaktformular, Cookies
- Analytics-Absatz nur wenn `features.analytics === true`
- **Hinweis:** "Platzhalter – bitte von Rechtsanwalt prüfen lassen"

**AGB** – Allgemeine Geschäftsbedingungen:
- Dienstleistungs-spezifische Klauseln (Auftragserteilung, Lieferformat, Gewährleistung)
- **Hinweis:** "Platzhalter – bitte von Rechtsanwalt prüfen lassen"

---

## Landingpage-Sektionen (Hauptseite)

### 1. HERO

- Vollbreiter Hintergrund (Platzhalter-Bild oder ruhiger Farbhintergrund, dunkles Overlay `bg-black/50`)
- Headline: Benefit-driven aus `BRANCHE.md` → `hero.headline`
- Subheadline aus `BRANCHE.md` → `hero.subline`
- Primary CTA: `hero.cta_primary` → scrollt zum Kontaktformular
- Secondary CTA: `hero.cta_secondary` → scrollt zu Angebot-Formular
- Trust-Leiste (4 Badges): Jahre Erfahrung, Projekte, Normkonformität, Zielgruppen

### 2. TRUST BAR

- Schmaler Streifen direkt unter Hero, `bg-primary`
- 4 Kennzahlen mit `font-mono` für die Zahlen
- AnimatedCounter (zählt hoch wenn sichtbar)
- Werte aus `socialProof` in der Config: Jahre, Projekte, Zufriedenheit, Bearbeitungszeit

### 3. LEISTUNGSÜBERSICHT

- `bg-white`, Headline "Meine Leistungen"
- Grid: 2 Spalten (lg), 2 (md), 1 (sm) – 4 Leistungen passen besser in 2x2
- Cards: Border, kein Shadow, Icon + Titel + Kurztext + Link
- Daten aus `services-data.ts` (generiert aus `BRANCHE.md`)

### 4. ÜBER MICH (statt "Über uns")

- `bg-slate-50`, Split-Layout
- Text links: Kurze persönliche Vorstellung, Badges (Zertifizierung, Erfahrung, Spezialisierung)
- Bild rechts: Platzhalter (Profilfoto)
- Da Einzelunternehmen: "Ich" statt "Wir", "Mein" statt "Unser"
- Kein Team, keine Mitarbeiterliste

### 5. LEAD MAGNET

- Nur wenn `features.leadMagnet !== "none"`
- `bg-primary`, weiße Schrift, zentriert
- Headline + Subline aus `BRANCHE.md` → `lead_magnet`
- Formular: Name + E-Mail + Submit
- Variante: **checklist** → PDF-Download nach Submit

### 6. KUNDENSTIMMEN

- `bg-white`
- 3er-Grid oder Slider
- **Kein Google-Logo / keine Google-Bewertungsbox** (nicht gewünscht)
- Karten: Sterne, Text, Name + Firma, Datum
- Daten aus `BRANCHE.md` → `bewertungen`

### 7. ZIELGRUPPEN / EINZUGSGEBIET

- `bg-slate-50`
- Headline: "Für wen ich arbeite" (statt regionaler Einzugsgebiet-Karte)
- 4 Zielgruppen-Badges: Behörden, Unternehmen, KMU, Agenturen
- Hinweis: "Deutschlandweit, online – kein Vor-Ort-Termin nötig"

### 8. FAQ

- `bg-white`, linksbündig, `max-w-3xl mx-auto`
- shadcn `Accordion`
- Daten aus `BRANCHE.md` → `faqs`

### 9. CTA BANNER

- `bg-primary`, zentriert
- Headline: "Bereit für Ihr barrierefreies Dokument?"
- 2 Buttons: Erstgespräch anfragen + Angebot anfordern

---

## Leistungs-Unterseiten (`app/leistungen/[slug]/page.tsx`)

Dynamisch generiert aus `services-data.ts`. Jede Seite enthält:

1. **Mini-Hero**: Leistungstitel + Kurzbeschreibung
2. **Problemstellung**: "Kennen Sie das?" → `kundenprobleme` aus BRANCHE.md
3. **Lösung**: Ausführliche Beschreibung
4. **Vorteile**: 3 Icon-Cards
5. **Prozess-Timeline**: 4 Schritte (Anfrage → Analyse → Umsetzung → Lieferung)
6. **CTA**: Kontaktformular oder Button
7. **FAQ**: Leistungsspezifische Fragen

### SEO pro Unterseite:
- Dynamische Metadata aus `seo_title`, `seo_description`, `seo_keywords`
- JSON-LD `Service` Schema

---

## Kontaktformular

**Felder:**
- Anrede (Select: Herr/Frau/Divers)
- Name (Text, Pflicht)
- E-Mail (Email, Pflicht)
- Telefon (Tel, optional)
- Betreff (Select, dynamisch aus Leistungen)
- Nachricht / Projektbeschreibung (Textarea)
- Datenschutz-Checkbox (Pflicht)

**Technik:**
- React Hook Form + Zod Validation
- API Route `app/api/contact/route.ts`
- Backend je nach Config: E-Mail / Webhook / nur Frontend
- Erfolgsmeldung: "Vielen Dank! Ich melde mich innerhalb von 24 Stunden."
- Loading State auf Button

---

## SEO & Structured Data

### Metadata (Next.js App Router):
- Dynamisch pro Seite via `generateMetadata()`
- Open Graph + Twitter Cards
- Canonical URLs

### JSON-LD Schemas:
```typescript
// Auf jeder Seite: Person oder LocalBusiness (Einzelunternehmen)
{
  "@type": "ProfessionalService",
  "name": config.company.name,
  "address": { ... },
  "telephone": config.company.phone,
  "openingHours": [ ... ],
  // Keine aggregateRating ohne echte Google-Daten
}

// Auf Leistungsseiten: Service
{
  "@type": "Service",
  "name": service.titel,
  "provider": { "@type": "ProfessionalService", "name": config.company.name },
  "areaServed": "DE",
}

// Auf FAQ-Sektion: FAQPage
{
  "@type": "FAQPage",
  "mainEntity": faqs.map(f => ({
    "@type": "Question",
    "name": f.frage,
    "acceptedAnswer": { "@type": "Answer", "text": f.antwort }
  }))
}
```

### Auto-generiert:
- `app/sitemap.ts` → XML Sitemap
- `app/robots.ts` → robots.txt

---

## Performance

- Lighthouse Score: **90+** auf allen Kategorien
- `next/image` mit `priority` für Hero, `loading="lazy"` für alles andere
- `next/font` mit `display: "swap"` – keine externen Font-Requests
- SSG (Static Site Generation) für alle Seiten – Pflicht für GitHub Pages
- Keine unnötigen Client-Komponenten – `"use client"` nur wo nötig (Formulare, Animationen)
- Bundle-Größe minimieren: Framer Motion Tree-Shaking beachten

---

## Mobil-spezifisch

- **Floating CTA** am unteren Rand (nur mobil): "Jetzt anfragen" mit Mail-Icon
- Click-to-Call auf ALLEN Telefonnummern
- Sheet-basierte Mobile Navigation (kein Fullscreen-Overlay)
- Touch-Targets: mindestens 44px
- Kein Hover-only Content

---

## Deployment (GitHub Pages – statischer Export)

```bash
# Setup
npx create-next-app@latest [projektname] --typescript --tailwind --app --src-dir=false
cd [projektname]
npx shadcn@latest init
npx shadcn@latest add button card accordion sheet input textarea select checkbox badge separator form
npm install framer-motion react-hook-form @hookform/resolvers zod lucide-react

# next.config.ts für statischen Export anpassen:
# output: 'export'
# images: { unoptimized: true }  ← nötig für GitHub Pages

# Build & Export
npm run build
# Output: /out Ordner → in GitHub Pages deployen
```

### GitHub Pages Setup:
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - uses: actions/deploy-pages@v4
```

### Env-Variablen (falls nötig):
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxx       # nur wenn Email-Backend gewählt
WEBHOOK_URL=https://...        # nur wenn Webhook-Backend gewählt
```

> **Wichtig:** Da GitHub Pages kein Server-Rendering unterstützt,
> muss `output: 'export'` in `next.config.ts` gesetzt sein.
> Kontaktformular-Backend muss als externer Dienst (Resend, Make.com, n8n) eingebunden werden.

---

## Lead-Generierung: Strategie-Zusammenfassung

### Die 6 Conversion-Hebel auf der Seite:
1. **Hero CTA** – Sofort sichtbar, Benefit-driven (Erstgespräch + Angebot)
2. **E-Mail / Telefon überall** – Header, Hero, Footer
3. **Lead Magnet** – E-Mail-Capture gegen PDF/UA-Checkliste
4. **Kontaktformular** – Kurz, mit Leistungs-Vorauswahl
5. **Social Proof** – Kundenstimmen, Kennzahlen
6. **CTA-Banner** – Letzter Push vor dem Footer

---

## Reihenfolge der Implementierung

1. Projekt-Scaffold + Dependencies (mit `output: 'export'` von Anfang an)
2. `lib/config.ts` aus BRANCHE.md befüllen
3. `lib/animations.ts` + `lib/services-data.ts`
4. `components/shared/RevealOnScroll.tsx`
5. `components/layout/Header.tsx` + `Footer.tsx`
6. `app/layout.tsx` (Root Layout)
7. Sektionen der Hauptseite (in Reihenfolge: Hero → Trust → Services → About → Lead Magnet → Testimonials → Zielgruppen → FAQ → CTA)
8. `app/page.tsx` (alles zusammensetzen)
9. Leistungs-Unterseiten
10. Kontaktformular + API Route (oder externe Anbindung)
11. Rechtliche Seiten
12. SEO (Metadata, JSON-LD, Sitemap, Robots)
13. Mobile Floating CTA
14. GitHub Actions Workflow erstellen
15. Performance-Audit + Deploy
