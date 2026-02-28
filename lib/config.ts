export interface SiteConfig {
  company: {
    name: string;
    owner: string;
    claim: string;
    foundedYear: number;
    phone: string;
    email: string;        // info@ – öffentlich (Footer, Kontakt-Sidebar)
    emailContact: string; // bena@ – offiziell (Impressum, Datenschutz)
    address: { street: string; zip: string; city: string };
    region: string;
    serviceRadius: string;
    openingHours: { weekdays: string; saturday: string };
    certification: string;
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

export const siteConfig: SiteConfig = {
  company: {
    name: "pdf-4all.de",
    owner: "Dragan Bena",
    claim: "Ihr Spezialist für barrierefreie PDF-Dokumente",
    foundedYear: 2014,
    phone: "+34 685 753 707",
    email: "info@pdf-4all.de",
    emailContact: "bena@pdf-4all.de",
    address: { street: "[Straße]", zip: "[PLZ]", city: "[Ort]" },
    region: "deutschlandweit (remote)",
    serviceRadius: "deutschlandweit (remote)",
    openingHours: { weekdays: "Mo–Fr: 09:00–17:00 Uhr", saturday: "nach Vereinbarung" },
    certification: "PDF/UA Accessibility Senior Specialist",
  },
  colors: {
    primary: "#1a365d",
    primaryLight: "#2b5ea7",
    primaryLighter: "#e8f0fe",
    accent: "#b45309",
    accentLight: "#d97706",
  },
  seo: {
    title: "PDF-4all – Ihr Spezialist für barrierefreie Dokumente",
    description: "Professionelle Erstellung und Prüfung barrierefreier PDF-Dokumente nach PDF/UA-1 (ISO 14289-1) Standard. BFSG-konform.",
    keywords: ["PDF/UA", "barrierefreie PDFs", "Barrierefreiheit", "BFSG", "WCAG", "PDF barrierefrei"],
  },
  features: {
    notdienstBanner: false,
    whatsappButton: false,
    analytics: false,
    analyticsId: "",
    cookieConsent: true,
    kontaktBackend: "frontend",
    faq: true,
    galerie: false,
    teamSektion: false,
    blog: true,
    googleBewertung: false,
    leadMagnet: "checklist",
  },
  socialProof: {
    yearsExperience: 12,
    completedProjects: 500,
    satisfactionRate: "98 %",
    turnaroundDays: 5,
  },
  navigation: [
    { label: "Startseite", href: "/" },
    {
      label: "Leistungen",
      href: "/leistungen",
      children: [
        { label: "Manuelle Tag-Strukturierung", href: "/leistungen/pdf-ua-konvertierung" },
        { label: "Komplexe PDF-Formulare", href: "/leistungen/komplexe-pdf-formulare" },
        { label: "PDF-Bestandsanalyse", href: "/leistungen/pdf-bestandsanalyse" },
        { label: "Alternativtexte", href: "/leistungen/alternativtexte" },
        { label: "Kostenloses Erstgutachten", href: "/leistungen/barrierefreiheitspruefung" },
        { label: "White-Label für Agenturen", href: "/leistungen/white-label" },
      ],
    },
    { label: "Blog", href: "/blog" },
    { label: "Kontakt", href: "/kontakt" },
  ],
};

export const heroContent = {
  headline: "Informationen sollten keine Barrieren kennen.",
  subline: "Über 107 Millionen Menschen in Europa sind auf barrierefreie Dokumente angewiesen. Ich mache Ihre Kommunikation für jeden zugänglich – präzise, sicher und zukunftssicher.",
  ctaPrimary: "Kostenloses Erstgespräch anfragen",
  ctaSecondary: "Angebot für Ihr Dokument",
};

export const leadMagnetContent = {
  type: "checklist",
  title: "Dein kostenloser BFSG-Leitfaden",
  subtitle: "Der kostenlose Leitfaden, der dir zeigt, was dein Unternehmen jetzt tun muss",
  cta: "Leitfaden kostenlos herunterladen",
  description: "Prüfen Sie in 5 Minuten, ob Ihre PDFs die wichtigsten Barrierefreiheitsanforderungen erfüllen.",
};

export const testimonials = [
  {
    text: "Barrierefreiheit ist kein \u201eNice-to-have\u201c. Es ist ein Muss. Wir müssen Barrierefreiheit als eine grundlegende menschliche Verantwortung betrachten, nicht nur als eine technische Checkliste.",
    name: "Satya Nadella",
    company: "CEO von Microsoft",
    rating: 5,
    date: "2025-01",
  },
  {
    text: "Für Menschen ohne Behinderung macht Technologie die Dinge einfacher. Für Menschen mit Behinderungen macht Technologie die Dinge erst möglich.",
    name: "Mary Pat Radabaugh",
    company: "ehem. Direktorin IBM National Support Center",
    rating: 5,
    date: "2024-11",
  },
  {
    text: "Barrierefreie PDFs sind nicht nur für Menschen mit Behinderungen gut \u2013 sie verbessern die Suchmaschinenoptimierung und die allgemeine Benutzererfahrung für alle.",
    name: "Mark Rogers",
    company: "Accessibility-Experte",
    rating: 5,
    date: "2024-09",
  },
];

export const faqs = [
  {
    question: "Was ist PDF/UA?",
    answer: "PDF/UA (Universal Accessibility) ist ein ISO-Standard (14289-1), der festlegt, wie ein PDF-Dokument technisch aufgebaut sein muss, damit es von Screenreadern und anderen assistiven Technologien korrekt ausgelesen werden kann.",
  },
  {
    question: "Welche Gesetze verpflichten zur Barrierefreiheit von Dokumenten?",
    answer: "In Deutschland sind öffentliche Stellen durch die BITV 2.0 verpflichtet, digitale Inhalte barrierefrei zugänglich zu machen. Das Barrierefreiheitsstärkungsgesetz (BFSG) erweitert diese Pflicht ab 2025 auf viele privatwirtschaftliche Unternehmen.",
  },
  {
    question: "Wie lange dauert die Konvertierung eines Dokuments?",
    answer: "Die Bearbeitungszeit hängt vom Umfang und der Komplexität des Dokuments ab. Einfache Dokumente sind oft in 1–3 Werktagen fertig. Für umfangreiche Dokumente erhalten Sie vorab eine realistische Zeitschätzung.",
  },
  {
    question: "Was kostet die Barrierefreiheitsprüfung eines Dokuments?",
    answer: "Die Kosten richten sich nach Seitenanzahl und Komplexität des Dokuments. Ich erstelle Ihnen vorab ein transparentes Festpreisangebot – kontaktieren Sie mich einfach mit Ihrem Dokument.",
  },
  {
    question: "Kann ich die Barrierefreiheit meiner PDFs selbst prüfen?",
    answer: "Mit kostenlosen Tools wie PAC 2024 können Sie einen ersten Schnellcheck durchführen. Allerdings erkennen automatische Tools nur rund 30 % der tatsächlichen Barrierefreiheitsprobleme – eine manuelle Prüfung ist unerlässlich.",
  },
  {
    question: "Arbeiten Sie auch mit Agenturen und Freelancern zusammen?",
    answer: "Ja, ich biete auch White-Label-Kooperationen für Agenturen und Grafikbüros an. Wenn Sie PDF/UA als Leistung anbieten möchten, ohne selbst die Expertise aufzubauen, sprechen Sie mich gerne an.",
  },
];
