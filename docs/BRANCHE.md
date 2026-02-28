# Branchen-Konfiguration

> **Dies ist die EINZIGE Datei, die du für dein Unternehmen anpassen musst.**
> Alles andere (Design, Struktur, Animationen, Technik) wird automatisch aus den anderen Dateien übernommen.

---

## Branche

**Typ:** Barrierefreiheit / PDF/UA – Erstellung barrierefreier Dokumente

---

## Firmendaten

```yaml
firmenname: "FIRMENNAME_PLATZHALTER"
inhaber: "INHABERNAME_PLATZHALTER"
rechtsform: "Einzelunternehmen"
claim: "CLAIM_PLATZHALTER"        # z.B. "Ihr Spezialist für barrierefreie PDF-Dokumente"
gruendungsjahr: JAHR_PLATZHALTER  # z.B. 2018
meisterbetrieb: false
innungsmitglied: false
zertifizierung: "ZERTIFIZIERUNG_PLATZHALTER"  # z.B. "PDF/UA-Spezialist (PDFUA Foundation)"
```

## Kontakt

```yaml
telefon: "TELEFON_PLATZHALTER"         # z.B. "030 1234567"
email: "EMAIL_PLATZHALTER"             # z.B. "info@mein-unternehmen.de"
website: "WEBSITE_PLATZHALTER"         # z.B. "www.mein-unternehmen.de"
strasse: "STRASSE_PLATZHALTER"
plz: "PLZ_PLATZHALTER"
stadt: "STADT_PLATZHALTER"
region: "REGION_PLATZHALTER"           # z.B. "deutschlandweit"
service_radius: "deutschlandweit"
oeffnungszeiten:
  werktags: "Mo–Fr: 09:00–17:00 Uhr"
  samstag: "nach Vereinbarung"
```

## Leistungen

> Definiere hier die 4–6 Kernleistungen.
> Jede Leistung bekommt eine eigene Unterseite.

```yaml
leistungen:
  - slug: "pdf-ua-konvertierung"
    titel: "PDF/UA-Konvertierung"
    icon: "FileCheck"                   # Lucide Icon Name
    kurz: "Bestehende PDFs barrierefrei machen"
    beschreibung: "Wir wandeln Ihre bestehenden PDF-Dokumente in vollständig barrierefreie PDF/UA-konforme Dateien um. Jedes Dokument wird manuell geprüft und optimiert – nicht nur maschinell konvertiert."
    kundenprobleme:
      - "Ihre PDFs entsprechen nicht der PDF/UA-Norm?"
      - "Sie benötigen barrierefreie Dokumente für Ihre Website oder Ihr Intranet?"
      - "Eine Prüfung hat Barrierefreiheitsmängel in Ihren Dokumenten festgestellt?"
    vorteile:
      - titel: "Manuelle Qualitätsprüfung"
        text: "Jedes Dokument wird von Hand geprüft – automatische Tools übersehen bis zu 70 % der Fehler."
      - titel: "Normkonform"
        text: "Wir arbeiten nach PDF/UA-1 (ISO 14289-1) und WCAG 2.1 Level AA."
      - titel: "Transparentes Angebot"
        text: "Sie erhalten vorab ein verbindliches Festpreisangebot ohne versteckte Kosten."
    seo_title: "PDF/UA-Konvertierung – Barrierefreie PDFs erstellen"
    seo_description: "Professionelle PDF/UA-Konvertierung nach ISO 14289-1. Bestehende PDFs barrierefrei machen – manuell geprüft, normkonform. Jetzt Angebot anfragen."
    seo_keywords: ["PDF/UA Konvertierung", "barrierefreie PDFs", "PDF barrierefrei machen"]

  - slug: "barrierefreie-dokumente"
    titel: "Barrierefreie Dokumente"
    icon: "FileText"
    kurz: "Neugestaltung von Dokumenten nach WCAG & PDF/UA"
    beschreibung: "Wir erstellen für Sie neue Dokumente (aus Word, InDesign oder anderen Quellen), die von Anfang an barrierefrei sind. Korrekte Tags, Lesereihenfolge, Alt-Texte und Farbkontraste inklusive."
    kundenprobleme:
      - "Sie möchten neue Dokumente direkt barrierefrei erstellen lassen?"
      - "Ihr Team erstellt Dokumente, die aber nicht barrierefreikonform sind?"
      - "Sie haben gesetzliche Pflichten (BFSG, BITV) zu erfüllen?"
    vorteile:
      - titel: "Aus einer Hand"
        text: "Vom Rohentwurf bis zum fertigen PDF/UA-Dokument – alles bei einem Ansprechpartner."
      - titel: "Gesetzeskonform"
        text: "BFSG, BITV 2.0, EN 301 549 – wir kennen die relevanten Normen."
      - titel: "Alle Formate"
        text: "Word, InDesign, PowerPoint, Excel – wir arbeiten mit Ihrer Software-Umgebung."
    seo_title: "Barrierefreie Dokumente erstellen lassen"
    seo_description: "Professionelle Erstellung barrierefreier Dokumente nach WCAG 2.1 und PDF/UA. BFSG-konform. Jetzt kostenlos beraten lassen."
    seo_keywords: ["barrierefreie Dokumente", "BFSG Barrierefreiheit", "PDF barrierefrei erstellen"]

  - slug: "barrierefreiheitspruefung"
    titel: "Barrierefreiheitsprüfung"
    icon: "ClipboardCheck"
    kurz: "Audit Ihrer Dokumente auf PDF/UA-Konformität"
    beschreibung: "Wir prüfen Ihre vorhandenen Dokumente systematisch auf Barrierefreiheit und liefern Ihnen einen detaillierten Prüfbericht mit konkreten Handlungsempfehlungen."
    kundenprobleme:
      - "Sie wissen nicht, ob Ihre Dokumente die gesetzlichen Anforderungen erfüllen?"
      - "Sie benötigen einen Nachweis zur Barrierefreiheit Ihrer Dokumente?"
      - "Sie möchten vor einem Launch prüfen lassen, ob alles korrekt ist?"
    vorteile:
      - titel: "Detaillierter Prüfbericht"
        text: "Sie erhalten einen strukturierten Bericht mit allen Befunden und Prioritäten."
      - titel: "PAC & manuelle Prüfung"
        text: "Kombination aus automatisierten Tools (PAC 2024) und manueller Sichtprüfung."
      - titel: "Normreferenzen"
        text: "Jeder Befund wird einer konkreten Norm (PDF/UA, WCAG) zugeordnet."
    seo_title: "Barrierefreiheitsprüfung für PDFs und Dokumente"
    seo_description: "Professionelles Barrierefreiheits-Audit für PDFs und Dokumente. Prüfbericht nach PDF/UA und WCAG 2.1. Jetzt anfragen."
    seo_keywords: ["Barrierefreiheitsprüfung PDF", "PDF/UA Audit", "Barrierefreiheit Dokumente prüfen"]

  - slug: "schulung-beratung"
    titel: "Schulung & Beratung"
    icon: "GraduationCap"
    kurz: "Ihr Team fit machen für barrierefreie Dokumente"
    beschreibung: "Wir schulen Ihr Team in der Erstellung barrierefreier Dokumente – individuell zugeschnitten auf Ihre Software-Umgebung und Ihre Anforderungen. Online oder vor Ort."
    kundenprobleme:
      - "Ihr Team soll zukünftig selbst barrierefreie Dokumente erstellen?"
      - "Sie möchten interne Prozesse für Barrierefreiheit aufbauen?"
      - "Sie benötigen eine unabhängige Beratung zur Barrierefreiheitsstrategie?"
    vorteile:
      - titel: "Praxisnah"
        text: "Kein Frontalunterricht – wir arbeiten mit Ihren echten Dokumenten."
      - titel: "Software-unabhängig"
        text: "Word, InDesign, Acrobat – wir schulen in der Software, die Sie nutzen."
      - titel: "Online oder vor Ort"
        text: "Flexibel nach Ihren Möglichkeiten – deutschlandweit."
    seo_title: "Schulung Barrierefreie Dokumente – PDF/UA Kurs"
    seo_description: "Schulungen zur Erstellung barrierefreier Dokumente (PDF/UA, WCAG). Online oder vor Ort. Für Teams und Einzelpersonen. Jetzt Beratung anfragen."
    seo_keywords: ["Schulung barrierefreie Dokumente", "PDF/UA Kurs", "WCAG Schulung"]
```

## Social Proof & Zahlen

```yaml
# Keine Google-Bewertung – direkte Kundenstimmen stattdessen
jahre_erfahrung: JAHRE_PLATZHALTER          # z.B. 8
abgeschlossene_projekte: PROJEKTE_PLATZHALTER  # z.B. 500
kundenzufriedenheit: "ZUFRIEDENHEIT_PLATZHALTER"  # z.B. "98 %"
bearbeitungszeit_tage: TAGE_PLATZHALTER     # z.B. 5
```

## Kundenstimmen

> Ersetze diese mit echten Kundenstimmen

```yaml
bewertungen:
  - text: "KUNDENSTIMME_1_PLATZHALTER"
    name: "NAME_1_PLATZHALTER"
    firma: "FIRMA_1_PLATZHALTER"
    sterne: 5
    datum: "2025-01"

  - text: "KUNDENSTIMME_2_PLATZHALTER"
    name: "NAME_2_PLATZHALTER"
    firma: "FIRMA_2_PLATZHALTER"
    sterne: 5
    datum: "2024-11"

  - text: "KUNDENSTIMME_3_PLATZHALTER"
    name: "NAME_3_PLATZHALTER"
    firma: "FIRMA_3_PLATZHALTER"
    sterne: 5
    datum: "2024-09"
```

## Lead Magnet

```yaml
lead_magnet:
  typ: "checklist"
  titel: "PDF/UA-Checkliste für Einsteiger"
  untertitel: "12 Punkte, die jedes barrierefreie PDF erfüllen muss"
  cta: "Checkliste kostenlos herunterladen"
  beschreibung: "Prüfen Sie in 5 Minuten, ob Ihre PDFs die wichtigsten Barrierefreiheitsanforderungen erfüllen."
```

## Features (ein/aus)

```yaml
features:
  notdienst_banner: false         # kein Notdienst
  whatsapp_button: false
  whatsapp_nummer: ""
  google_maps: false
  google_maps_key: ""
  analytics: false
  analytics_id: ""
  cookie_consent: true
  kontakt_backend: "frontend"     # "email" | "webhook" | "frontend"
  kontakt_webhook_url: ""
  kontakt_email_api_key: ""
  faq: true
  galerie: false                  # keine Bildergalerie nötig
  team_sektion: false             # Einzelunternehmen – kein Team
  blog: false
  google_bewertung: false         # keine Google-Bewertungsbox
```

## Hero-Texte

```yaml
hero:
  headline: "HERO_HEADLINE_PLATZHALTER"
  # Beispiel: "Barrierefreie PDFs – professionell, normkonform, termingerecht."
  subline: "HERO_SUBLINE_PLATZHALTER"
  # Beispiel: "Seit {gruendungsjahr} erstelle und prüfe ich Dokumente nach PDF/UA und WCAG – für Behörden, Unternehmen und Agenturen."
  cta_primary: "Kostenloses Erstgespräch anfragen"
  cta_secondary: "Angebot für Ihr Dokument"
```

## FAQ

```yaml
faqs:
  - frage: "Was ist PDF/UA?"
    antwort: "PDF/UA (Universal Accessibility) ist ein ISO-Standard (14289-1), der festlegt, wie ein PDF-Dokument technisch aufgebaut sein muss, damit es von Screenreadern und anderen assistiven Technologien korrekt ausgelesen werden kann."

  - frage: "Welche Gesetze verpflichten zur Barrierefreiheit von Dokumenten?"
    antwort: "In Deutschland sind öffentliche Stellen durch die BITV 2.0 verpflichtet, digitale Inhalte barrierefrei zugänglich zu machen. Das Barrierefreiheitsstärkungsgesetz (BFSG) erweitert diese Pflicht ab 2025 auf viele privatwirtschaftliche Unternehmen."

  - frage: "Wie lange dauert die Konvertierung eines Dokuments?"
    antwort: "Die Bearbeitungszeit hängt vom Umfang und der Komplexität des Dokuments ab. Einfache Dokumente sind oft in 1–3 Werktagen fertig. Für umfangreiche Dokumente erhalten Sie vorab eine realistische Zeitschätzung."

  - frage: "Was kostet die Barrierefreiheitserstellung eines Dokuments?"
    antwort: "Die Kosten richten sich nach Seitenanzahl und Komplexität des Dokuments. Ich erstelle Ihnen vorab ein transparentes Festpreisangebot – kontaktieren Sie mich einfach mit Ihrem Dokument."

  - frage: "Kann ich die Barrierefreiheit meiner PDFs selbst prüfen?"
    antwort: "Mit kostenlosen Tools wie PAC 2024 können Sie einen ersten Schnellcheck durchführen. Allerdings erkennen automatische Tools nur rund 30 % der tatsächlichen Barrierefreiheitsprobleme – eine manuelle Prüfung ist unerlässlich."

  - frage: "Arbeiten Sie auch mit Agenturen und Freelancern zusammen?"
    antwort: "Ja, ich biete auch White-Label-Kooperationen für Agenturen und Grafikbüros an. Wenn Sie PDF/UA als Leistung anbieten möchten, ohne selbst die Expertise aufzubauen, sprechen Sie mich gerne an."
```

## Einzugsgebiet / Zielgruppe

```yaml
service_orte:
  - "Deutschlandweit"
  - "Österreich"
  - "Schweiz"
  - "Remote / Online"
```

---

## Anpassungshinweise

> **Bitte ersetze alle `_PLATZHALTER`-Felder** mit Ihren echten Daten:
>
> 1. **Firmendaten** → Firmenname, Name, Gründungsjahr, Kontaktdaten
> 2. **Hero-Texte** → Ihre persönliche Headline und Subline
> 3. **Zahlen** → Jahre Erfahrung, Projektanzahl, Bearbeitungszeit
> 4. **Kundenstimmen** → Echte Referenzen (mit Erlaubnis der Kunden)
> 5. **Zertifizierungen** → Ihre tatsächlichen Qualifikationen
>
> **Nicht nötig zu ändern:** Design, Technik, Animationen, Seitenstruktur.
