export interface ServiceData {
  slug: string;
  title: string;
  icon: string;
  short: string;
  description: string;
  customerProblems: string[];
  benefits: Array<{ title: string; text: string }>;
  processSteps?: Array<{ step: string; title: string; desc: string }>;
  ctaText?: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
}

export const services: ServiceData[] = [
  {
    slug: "pdf-ua-konvertierung",
    title: "Manuelle Tag-Strukturierung",
    icon: "Tags",
    short: "Wir bauen die logische Baumstruktur (Tags) Ihrer Dokumente von Grund neu auf.",
    description: "Jedes PDF, das durch meine Hände geht, wird manuell geprüft, getaggt und optimiert – Schritt für Schritt, ohne Abkürzungen. Ich setze bewusst keine KI-Tools oder automatisierten Konverter ein, denn echte Barrierefreiheit lässt sich nicht auf Knopfdruck erzeugen. Das kostet Zeit, aber genau das ist der Unterschied zwischen einem Dokument, das die Anforderungen erfüllt, und einem, das wirklich barrierefrei ist.",
    customerProblems: [
      "Ihre PDFs entsprechen nicht der PDF/UA-Norm?",
      "Sie benötigen barrierefreie Dokumente für Ihre Website oder Ihr Intranet?",
      "Eine Prüfung hat Barrierefreiheitsmängel in Ihren Dokumenten festgestellt?",
    ],
    benefits: [
      { title: "Normkonform", text: "Ich arbeite streng nach PDF/UA-1 (ISO 14289-1) Standard." },
      { title: "Visuelle Qualitätskontrolle", text: "PAC (PDF Accessibility Checker) ist bei der Prüfung unerlässlich – aber kein Ersatz für die visuelle Kontrolle." },
      { title: "Transparentes Angebot", text: "Sie erhalten vorab ein unverbindliches Angebot – transparent und ohne versteckte Kosten." },
    ],
    seoTitle: "PDF/UA-Konvertierung – Barrierefreie PDFs erstellen",
    seoDescription: "Professionelle PDF/UA-Konvertierung nach ISO 14289-1. Bestehende PDFs barrierefrei machen – manuell geprüft, normkonform.",
    seoKeywords: ["PDF/UA Konvertierung", "barrierefreie PDFs", "PDF barrierefrei machen"],
  },
  {
    slug: "komplexe-pdf-formulare",
    title: "Komplexe PDF-Formulare",
    icon: "FormInput",
    short: "Barrierefreie PDF-Formulare mit komplexer Struktur – technisch präzise und normkonform.",
    description: "Interaktive PDF-Formulare sind eine besondere Herausforderung im Bereich Barrierefreiheit. Ich entwickle und saniere komplexe Formularstrukturen – mit korrekter Tab-Reihenfolge, beschrifteten Feldern, Pflichtfeldkennzeichnung und vollständiger PDF/UA-Konformität. Ob mehrseitige Antragsformulare, dynamische Felder oder verschachtelte Strukturen – ich sorge dafür, dass Ihre Formulare für alle Nutzer barrierefrei sind.",
    customerProblems: [
      "Ihre PDF-Formulare sind nicht mit dem Screenreader bedienbar?",
      "Formularfelder sind falsch beschriftet oder die Tab-Reihenfolge stimmt nicht?",
      "Sie müssen komplexe Formulare BFSG- oder BITV-konform bereitstellen?",
    ],
    benefits: [
      { title: "Korrekte Feldbeschriftung", text: "Alle Formularfelder erhalten präzise Labels und Tooltips – für Screenreader und Tastaturnutzer." },
      { title: "Tab-Reihenfolge & Logik", text: "Ich prüfe und korrigiere die Lesereihenfolge manuell – auch bei komplexen, mehrseitigen Formularen." },
      { title: "Vollständig PDF/UA-konform", text: "Das fertige Formular besteht den PAC-Check und die manuelle Prüfung nach ISO 14289-1." },
    ],
    seoTitle: "Komplexe PDF-Formulare – Barrierefreie Formular-Architektur",
    seoDescription: "Professionelle Barrierefreiheit für komplexe PDF-Formulare nach PDF/UA und WCAG. BFSG-konform, manuell geprüft.",
    seoKeywords: ["barrierefreie PDF-Formulare", "PDF/UA Formular", "interaktive Formulare barrierefrei"],
  },
  {
    slug: "pdf-bestandsanalyse",
    title: "PDF-Bestandsanalyse",
    icon: "Archive",
    short: "Ihr Archiv an alten PDFs strategisch priorisieren und gezielt barrierefrei machen.",
    description: "Nicht jedes alte Dokument muss sofort umgewandelt werden – aber die richtigen zu identifizieren, ist entscheidend. Ich analysiere Ihren Dokumentenbestand, bewerte welche Alt-PDFs weiterhin aktiv genutzt werden (z. B. Formulare oder Anleitungen) und erstelle gemeinsam mit Ihnen einen klaren Remediationsplan. So investieren Sie gezielt und effizient – ohne Ressourcen für selten genutzte Dokumente zu verschwenden.",
    customerProblems: [
      "Sie haben einen großen Bestand an alten PDFs und wissen nicht, wo Sie anfangen sollen?",
      "Sie möchten priorisieren, welche Dokumente zuerst barrierefrei gemacht werden müssen?",
      "Sie benötigen einen strukturierten Plan zur BFSG-konformen Umsetzung Ihres Archivs?",
    ],
    benefits: [
      { title: "Strukturierte Analyse", text: "Ich sichte Ihren Bestand und kategorisiere Dokumente nach Nutzungshäufigkeit und Dringlichkeit." },
      { title: "Klarer Remediationsplan", text: "Sie erhalten eine priorisierte Liste mit konkreten Handlungsempfehlungen – realistisch und umsetzbar." },
      { title: "Kosteneffizienz", text: "Durch gezielte Priorisierung vermeiden Sie unnötige Ausgaben und fokussieren sich auf das Wesentliche." },
    ],
    processSteps: [
      { step: "1", title: "Anfrage", desc: "Sie beschreiben mir Ihren Dokumentenbestand – Umfang, Formate, Nutzungshäufigkeit." },
      { step: "2", title: "Sichtung", desc: "Ich analysiere Ihr Archiv und bewerte die Dokumente nach Dringlichkeit und Aufwand." },
      { step: "3", title: "Priorisierung", desc: "Gemeinsam entscheiden wir, welche Dokumente zuerst remediatiert werden sollen." },
      { step: "4", title: "Remediationsplan", desc: "Sie erhalten einen klaren, umsetzbaren Plan – inklusive Zeitschätzung und Kostenrahmen." },
    ],
    ctaText: "Beschreiben Sie mir kurz Ihren Dokumentenbestand – ich melde mich für ein unverbindliches Erstgespräch.",
    seoTitle: "PDF-Bestandsanalyse – Alte Dokumente strategisch barrierefrei machen",
    seoDescription: "Strategische Analyse und Priorisierung Ihres PDF-Archivs. Klarer Remediationsplan für Ihre Alt-PDFs – BFSG-konform.",
    seoKeywords: ["PDF-Bestandsanalyse", "Alt-PDF barrierefrei", "PDF Remediation", "Dokumentenbestand Barrierefreiheit"],
  },
  {
    slug: "alternativtexte",
    title: "Alternativtexte",
    icon: "ImageIcon",
    short: "Präzise Alt-Texte für Bilder, Grafiken und Diagramme – verständlich und normkonform.",
    description: "Bilder, Grafiken, Diagramme und Logos ohne Alternativtext sind für blinde und sehbehinderte Nutzer schlicht nicht vorhanden. Ich analysiere alle visuellen Elemente in Ihren Dokumenten und erstelle präzise, informative Alternativtexte nach PDF/UA-Standard. Dabei unterscheide ich zwischen dekorativen Elementen (die als Artefakt ausgezeichnet werden) und inhaltlich relevanten Grafiken – für eine korrekte und sinnvolle Screenreader-Ausgabe.",
    customerProblems: [
      "Bilder und Grafiken in Ihren PDFs haben keine oder unzureichende Alternativtexte?",
      "Ihr Dokument fällt beim PAC-Check wegen fehlender Alt-Texte durch?",
      "Sie wissen nicht, welche Bilder einen Alt-Text brauchen und welche nicht?",
    ],
    benefits: [
      { title: "Inhaltlich präzise", text: "Ich formuliere Alt-Texte, die den Inhalt der Grafik wirklich transportieren – nicht nur 'Bild1.png'." },
      { title: "Dekorativ vs. informativ", text: "Dekorative Elemente werden korrekt als Artefakt markiert – so bleibt die Screenreader-Ausgabe sauber." },
      { title: "PDF/UA-konform", text: "Alle Alternativtexte entsprechen den Anforderungen nach ISO 14289-1." },
    ],
    seoTitle: "Alternativtexte für PDFs – Bilder barrierefrei beschriften",
    seoDescription: "Professionelle Alternativtexte für Bilder und Grafiken in PDF-Dokumenten. PDF/UA-konform, manuell geprüft.",
    seoKeywords: ["Alternativtexte PDF", "Alt-Text barrierefrei", "PDF/UA Bilder"],
  },
  {
    slug: "barrierefreiheitspruefung",
    title: "Kostenloses Erstgutachten",
    icon: "ShieldCheck",
    short: "Ich prüfe Ihr Dokument kostenlos und liefere Ihnen eine erste Einschätzung – unverbindlich und ohne Risiko.",
    description: "Sie möchten wissen, ob Ihr Dokument PDF/UA-konform ist – aber möchten erst mal keinen Auftrag erteilen? Kein Problem. Schicken Sie mir ein Dokument (bis max. 10 Seiten) und ich liefere Ihnen eine erste ehrliche Einschätzung: Was stimmt, was nicht – und was es brauchen würde, um es barrierefrei zu machen. Ganz ohne Verpflichtung. Bei umfangreicheren Dokumenten sprechen wir einfach kurz miteinander – in vielen Fällen lässt sich auch das unkompliziert regeln.",
    customerProblems: [
      "Sie wissen nicht, ob Ihre Dokumente die gesetzlichen Anforderungen erfüllen?",
      "Sie möchten sich erst ein Bild machen, bevor Sie einen Auftrag erteilen?",
      "Sie brauchen eine unabhängige Einschätzung ohne Kostenrisiko?",
    ],
    benefits: [
      { title: "Kostenlos & unverbindlich", text: "Kein Auftrag, keine Rechnung – ich prüfe Ihr Dokument und gebe Ihnen ehrliches Feedback." },
      { title: "Bis 10 Seiten – und mehr nach Absprache", text: "Das Erstgutachten gilt für ein Dokument mit maximal 10 Seiten. Bei größeren Dokumenten sprechen wir einfach kurz miteinander – vieles lässt sich unkompliziert regeln." },
      { title: "Klare Einschätzung", text: "Sie erhalten eine verständliche Rückmeldung: Was ist gut, was fehlt, und was wäre der nächste Schritt." },
    ],
    processSteps: [
      { step: "1", title: "Dokument senden", desc: "Sie schicken mir ein PDF mit bis zu 10 Seiten direkt per E-Mail." },
      { step: "2", title: "Prüfung", desc: "Ich analysiere das Dokument manuell und mit PAC – ohne Zeitdruck, aber zügig." },
      { step: "3", title: "Einschätzung", desc: "Sie erhalten von mir eine ehrliche Rückmeldung zu den wichtigsten Befunden." },
      { step: "4", title: "Kein Druck", desc: "Ob Sie danach einen Auftrag erteilen, entscheiden Sie – ganz ohne Verpflichtung." },
    ],
    ctaText: "Schicken Sie mir Ihr Dokument – ich melde mich mit einer ersten Einschätzung. Kostenlos und unverbindlich.",
    seoTitle: "Kostenloses Erstgutachten – PDF auf Barrierefreiheit prüfen lassen",
    seoDescription: "Kostenloses Erstgutachten für Ihr PDF-Dokument. Ich prüfe bis zu 10 Seiten auf PDF/UA-Konformität – unverbindlich und ohne Risiko.",
    seoKeywords: ["kostenloses PDF Gutachten", "Barrierefreiheitsprüfung kostenlos", "PDF/UA Check gratis"],
  },
  {
    slug: "white-label",
    title: "White-Label für Agenturen",
    icon: "Handshake",
    short: "PDF/UA-Barrierefreiheit als stille Leistung im Hintergrund – unter Ihrem Namen, ohne Aufwand für Sie.",
    description: "Sie sind eine Agentur, ein Grafikbüro oder ein Dienstleister und Ihre Kunden fragen nach barrierefreien PDFs – aber die Expertise fehlt intern? Ich arbeite diskret im Hintergrund: Sie nehmen den Auftrag an, ich liefere das fertige, normkonforme Dokument. Ihr Kunde sieht nur Sie. Keine Konkurrenz, keine Weitervermittlung – einfach zuverlässige Partnerschaft auf Augenhöhe.",
    customerProblems: [
      "Ihre Kunden fragen nach barrierefreien PDFs, aber Sie haben intern keine Expertise?",
      "Sie möchten PDF/UA als Leistung anbieten, ohne selbst tief einzusteigen?",
      "Sie suchen einen verlässlichen Partner im Hintergrund – diskret und professionell?",
    ],
    benefits: [
      { title: "Diskret & zuverlässig", text: "Ich trete nicht in Erscheinung – Ihr Kunde kennt nur Sie als Ansprechpartner." },
      { title: "Feste Partnerschaft", text: "Keine einmalige Zusammenarbeit – ich bin Ihr verlässlicher Partner für alle PDF/UA-Aufträge." },
      { title: "Faire Konditionen", text: "Transparente Preise für Agenturpartner – sprechen Sie mich einfach an." },
    ],
    processSteps: [
      { step: "1", title: "Kontakt aufnehmen", desc: "Sie melden sich bei mir und wir besprechen kurz wie eine Zusammenarbeit aussehen könnte." },
      { step: "2", title: "Auftrag weiterleiten", desc: "Sie erhalten einen Kundenauftrag und leiten mir die Dokumente diskret weiter." },
      { step: "3", title: "Umsetzung", desc: "Ich remediatiere das Dokument manuell und normkonform – ohne direkten Kontakt zu Ihrem Kunden." },
      { step: "4", title: "Lieferung an Sie", desc: "Sie erhalten das fertige PDF und liefern es unter Ihrem Namen an Ihren Kunden aus." },
    ],
    ctaText: "Interesse an einer White-Label-Partnerschaft? Schreiben Sie mir kurz – ich freue mich auf den Austausch.",
    seoTitle: "White-Label PDF/UA – Barrierefreie PDFs für Agenturen",
    seoDescription: "White-Label-Service für Agenturen und Grafikbüros: Ich liefere barrierefreie PDFs nach PDF/UA – diskret im Hintergrund, unter Ihrem Namen.",
    seoKeywords: ["White-Label PDF Barrierefreiheit", "PDF/UA Agentur", "barrierefreie PDFs outsourcen"],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
