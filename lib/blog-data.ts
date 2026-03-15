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
    slug: "tagged-pdf-erklaert",
    title: "Tagged PDF: Was steckt dahinter – und warum sollten Sie das kennen?",
    excerpt:
      "Ein PDF ist ein PDF, oder? Nicht ganz. Ob ein PDF nur gut aussieht oder auch wirklich gelesen werden kann – das entscheidet sich unsichtbar im Hintergrund. Genau dafür gibt es das Tagged PDF.",
    date: "2026-03-15",
    readingTime: 4,
    category: "Grundlagen",
    metaDescription:
      "Ein Tagged PDF ist mehr als ein gut aussehendes Dokument. Erfahren Sie, was Tags leisten, warum sie für Screenreader entscheidend sind – und was ohne sie schiefläuft.",
    content: `Ein PDF ist ein PDF, oder? Nicht ganz. Ob ein PDF nur gut aussieht oder auch wirklich gelesen werden kann – das entscheidet sich unsichtbar im Hintergrund. Genau dafür gibt es das Tagged PDF.

## Was ein Tag in einem PDF eigentlich macht

Wenn Sie ein PDF öffnen, sehen Sie Text, Bilder, Überschriften. Aber ein Screenreader – also die Software, die blinden oder sehbehinderten Menschen Inhalte vorliest – sieht das anders. Er braucht Struktur. Er muss wissen: Das ist eine Überschrift. Das ist ein Absatz. Das ist eine Tabelle mit drei Spalten. Das ist ein Bild mit einer Beschreibung.

Genau das leisten Tags. Sie sind unsichtbare Metadaten im Dokument, die den Inhalt strukturieren und beschreibbar machen. Ein getaggtes PDF weiß, was es ist – nicht nur wie es aussieht.

## Ein PDF ohne Tags – was passiert dann?

Stellen Sie sich vor, Sie lesen einen Text, bei dem alle Leerzeichen und Absätze fehlen. Alles ein langer Zeichenblock. Ungefähr so erlebt ein Screenreader ein PDF ohne Tags. Er kann den Inhalt irgendwie vorlesen, aber die Reihenfolge stimmt nicht, Überschriften werden nicht erkannt, Tabellen klingen wie Kauderwelsch.

Das ist kein Nischenproblem. In Deutschland leben rund 1,2 Millionen blinde und sehbehinderte Menschen – plus alle, die temporär eingeschränkt sind, ein Dokument per Tastatur navigieren oder einfach von einer klaren Struktur profitieren.

## Was ein Tagged PDF konkret besser macht

Ein getaggtes PDF hat eine logische Lesereihenfolge. Screenreader lesen den Inhalt in der richtigen Reihenfolge – nicht nach der visuellen Position auf der Seite, sondern nach der inhaltlichen Logik.

Überschriften sind als Überschriften erkennbar. Das klingt banal, ist es aber nicht. Wer mit Tastatur oder Screenreader navigiert, springt zwischen Überschriften. Ohne Tags geht das nicht.

Bilder bekommen [Alternativtexte](/leistungen/alternativtexte). Ein Tagged PDF kann beschreibende Texte für Grafiken hinterlegen – was das Bild zeigt, welche Information es trägt. Für jemanden der nicht sieht, ist das der Unterschied zwischen Information und Lücke.

Tabellen werden als Tabellen erkannt. Kopfzeilen, Spalten, Zellen – das alles bekommt eine Struktur die Sinn macht, wenn man es vorgelesen bekommt.

## Ein kurzes Beispiel aus der Praxis

Ich hatte kürzlich ein Angebot als PDF – vier Seiten, sauber gestaltet, professionell. Kein einziger Tag drin. Der Screenreader hat die Seitenzahl vor dem ersten Absatz vorgelesen, dann die Fußzeile, dann irgendwo mittendrin den Firmennamen. Inhaltlich war alles da. Nutzbar war es nicht.

Dasselbe Dokument, diesmal korrekt getaggt: Überschriften als Überschriften, Absätze als Absätze, die Tabelle mit Preisen als echte Tabelle – alles in der Reihenfolge, wie es gemeint war.

Von außen sieht das PDF genauso aus wie vorher. Gleiche Schrift, gleiche Seiten, gleiche Gestaltung. Was sich geändert hat, steckt innen drin – und genau dort entscheidet sich, ob ein Dokument für alle funktioniert oder nur für manche.

## Und was hat das mit PDF/UA zu tun?

PDF/UA ist der internationale Standard für barrierefreie PDFs – und Tags sind seine Grundlage. Ohne ein vollständig getaggtes Dokument ist [PDF/UA-Konformität](/leistungen/pdf-ua-konvertierung) schlicht nicht möglich. Tags sind kein optionales Extra, sondern das Fundament.

Gerade weil der Markt gerade voller Tools und Versprechen ist, die Barrierefreiheit automatisch oder auf Knopfdruck liefern sollen, lohnt es sich genau hinzuschauen. Ein PDF kann optisch tadellos wirken und trotzdem für Menschen mit Screenreader komplett unbrauchbar sein. Der Unterschied liegt nicht im Design – er liegt in der Struktur darunter.

Und noch etwas das oft übersehen wird: Ein Prüftool kann ein PDF als fehlerfrei ausgeben – und trotzdem ist es nicht wirklich barrierefrei. Tools prüfen was messbar ist. Ob ein Alternativtext wirklich beschreibt was auf einem Bild zu sehen ist, ob die Lesereihenfolge inhaltlich Sinn ergibt, ob eine Tabelle beim Vorlesen verständlich bleibt – das kann kein Algorithmus beurteilen. Dafür braucht es Fachverständnis und eine [manuelle Prüfung](/leistungen/barrierefreiheitspruefung).

Wer seine Dokumente also ernsthaft zugänglich machen will – nicht nur optisch, sondern wirklich nutzbar für alle – kommt an einem ordentlich getaggten PDF nicht vorbei.

Haben Sie schon mal geprüft, ob Ihre wichtigsten PDFs überhaupt Tags haben? Das geht schneller als Sie denken – und was Sie dabei finden, ist meistens aufschlussreich.`,
  },
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

Möchten Sie wissen, ob Ihre Dokumente betroffen sind? Melden Sie sich gerne – ein kurzer Check zeigt Ihnen, wo Sie stehen.`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
