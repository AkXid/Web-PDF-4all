export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: number; // Minuten
  category: string;
  content: string; // Markdown-Text
  metaDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "bfsg-pdf-pflicht",
    title: "BFSG PDF Pflicht: Wer ist wirklich betroffen – und wer nicht?",
    excerpt:
      "Seit dem 28. Juni 2025 gilt das Barrierefreiheitsstärkungsgesetz. Viele Unternehmen wissen nicht ob sie betroffen sind. Hier ist, was wirklich gilt.",
    date: "2026-02-21",
    readingTime: 5,
    category: "Recht & Pflicht",
    metaDescription:
      "BFSG PDF Pflicht: Wer ist wirklich betroffen? Klare Antworten ohne Juristendeutsch – inklusive Ausnahmen für KMU und Kleinstunternehmen.",
    content: `Seit dem 28. Juni 2025 gilt das Barrierefreiheitsstärkungsgesetz. Seitdem kursieren viele Halbwahrheiten darüber, wen die BFSG PDF Pflicht trifft. Manche Unternehmen machen sich unnötig Sorgen – andere wägen sich in falscher Sicherheit. Hier ist, was wirklich gilt.

## Das Gesetz gilt nicht für alle

Wer "BFSG" hört, denkt oft: betrifft mich bestimmt. Das stimmt so nicht. Das Gesetz richtet sich an Unternehmen, die Produkte oder Dienstleistungen an Verbraucher anbieten – also im B2C-Bereich tätig sind. Reine B2B-Unternehmen, die ausschließlich mit anderen Unternehmen arbeiten, sind grundsätzlich nicht betroffen.

Kleinstunternehmen sind ebenfalls weitgehend ausgenommen. Wer weniger als zehn Mitarbeiter hat und unter zwei Millionen Euro Jahresumsatz bleibt, muss in den meisten Fällen nichts ändern. Die Ausnahme: Wer Produkte herstellt, die explizit im Gesetz genannt werden – da greift die Ausnahme nicht.

## Wann werden PDFs zum Thema?

PDFs sind dann betroffen, wenn sie Teil einer Dienstleistung sind, die Verbraucher nutzen. Ein Online-Shop der Rechnungen als PDF verschickt, eine Bank die Kontoauszüge als Download anbietet, ein Versicherer der Vertragsunterlagen digital bereitstellt – all das fällt unter das Gesetz.

Das Dokument selbst muss dann den PDF/UA-Standard erfüllen. Das bedeutet: korrekte Tag-Struktur, logische Lesereihenfolge, Alternativtexte für Bilder, hinterlegte Dokumentsprache. Kein Hexenwerk – aber auch kein Selbstläufer. Ein PDF das gut aussieht, ist noch lange nicht barrierefrei.

Wer seine PDFs nachträglich anpassen muss, merkt schnell: Das kostet Zeit. Wer es von Anfang an richtig aufsetzt, spart sich diesen Aufwand.

## Was passiert bei Verstößen?

Das BFSG ist kein zahnloser Tiger. Bei Verstößen drohen Bußgelder bis zu 100.000 Euro – und Abmahnungen, die in ihrer Wirkung ähnlich schmerzhaft sein können. Die Behörden haben bis Ende 2025 etwas Zeit gehabt, sich einzuspielen. Ab 2026 dürfte die Durchsetzung ernster werden.

Wer jetzt noch nicht geprüft hat ob seine Dokumente den Anforderungen entsprechen, sollte das nachholen. Der kostenlose PAC-Checker (PDF Accessibility Checker) liefert in wenigen Minuten eine erste Einschätzung – ohne Expertenwissen, ohne Kosten.

## Eine ehrliche Einschätzung

Ist das BFSG ein bürokratisches Monstrum? Für viele kleine Unternehmen: nein, sie sind gar nicht betroffen. Für größere B2C-Anbieter: der Aufwand ist real, aber überschaubar wenn man strukturiert vorgeht.

Das Gesetz hat einen sinnvollen Kern. Menschen mit Behinderungen – rund 135 Millionen in der EU – sollen digitale Inhalte genauso nutzen können wie alle anderen. Das ist kein unrealistisches Ziel.

Willst du wissen ob deine Dokumente betroffen sind? Melde dich gerne – ein kurzer Check zeigt dir wo du stehst.`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
