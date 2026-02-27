import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allgemeine Geschäftsbedingungen",
};

export default function AGBPage() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8">
          Allgemeine Geschäftsbedingungen
        </h1>

        <div className="space-y-6 text-sm leading-relaxed text-slate-600">

          {/* § 1 Geltungsbereich */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">§ 1 Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen
            [Vorname Nachname], tätig als Autónomo (Einzelunternehmer) mit Sitz in Spanien
            (nachfolgend „Auftragnehmer"), und dem jeweiligen Auftraggeber über Dienstleistungen
            im Bereich der digitalen Barrierefreiheit, insbesondere PDF/UA-Konvertierung,
            Dokumentenremediatierung, Alternativtexte, Formular-Barrierefreiheit sowie
            verwandte Beratungs- und Analyseleistungen.
          </p>
          <p>
            Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn,
            der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.
          </p>

          {/* § 2 Vertragsschluss */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">§ 2 Vertragsschluss</h2>
          <p>
            Ein Vertrag kommt zustande durch die schriftliche Auftragsbestätigung des
            Auftragnehmers per E-Mail oder durch den Beginn der Leistungserbringung.
            Angebote des Auftragnehmers sind freibleibend und unverbindlich, sofern sie
            nicht ausdrücklich als verbindlich gekennzeichnet sind.
          </p>
          <p>
            Der Auftraggeber ist verpflichtet, alle für die Leistungserbringung notwendigen
            Unterlagen und Informationen rechtzeitig und vollständig zur Verfügung zu stellen.
            Verzögerungen, die auf unvollständige oder verspätete Zulieferung zurückzuführen
            sind, gehen nicht zu Lasten des Auftragnehmers.
          </p>

          {/* § 3 Leistungsumfang */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">§ 3 Leistungsumfang</h2>
          <p>
            Der Umfang der zu erbringenden Leistung ergibt sich aus dem individuellen
            schriftlichen Angebot. Änderungen oder Erweiterungen des Leistungsumfangs
            bedürfen der schriftlichen Vereinbarung und können zu einer Anpassung von
            Preis und Lieferzeit führen.
          </p>
          <p>
            Sofern nicht anders vereinbart, erfolgt die Lieferung im Format PDF/UA-1
            (ISO 14289-1). Der Auftragnehmer erbringt alle Leistungen ausschließlich manuell –
            ohne den Einsatz von KI-Tools oder automatisierten Konvertern. Eine Konformität
            mit dem vereinbarten Standard wird durch manuelle Prüfung und den Einsatz des
            PDF Accessibility Checker (PAC) sichergestellt.
          </p>

          {/* § 4 Mitwirkungspflichten */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">§ 4 Mitwirkungspflichten des Auftraggebers</h2>
          <p>
            Der Auftraggeber stellt sicher, dass er berechtigt ist, die übermittelten
            Dokumente und Inhalte zur Bearbeitung an den Auftragnehmer zu übergeben.
            Er stellt den Auftragnehmer von Ansprüchen Dritter frei, die aus einer
            fehlenden oder unzureichenden Berechtigung entstehen.
          </p>
          <p>
            Der Auftraggeber benennt bei Bedarf einen Ansprechpartner für Rückfragen
            und erteilt Freigaben innerhalb angemessener Fristen. Verzögerungen durch
            ausstehende Freigaben verlängern die vereinbarte Lieferzeit entsprechend.
          </p>

          {/* § 5 Preise und Zahlung */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">§ 5 Preise und Zahlung</h2>
          <p>
            Alle Preise verstehen sich in Euro (€) netto. Die Anwendung der
            Mehrwertsteuer richtet sich nach den jeweils geltenden steuerrechtlichen
            Bestimmungen. Bei Leistungen an Unternehmen innerhalb der EU gilt das
            Reverse-Charge-Verfahren gemäß Art. 196 MwStSystRL; der Auftraggeber
            schuldet in diesem Fall die Steuer in seinem Land selbst.
          </p>
          <p>
            Rechnungen sind innerhalb von <strong>14 Tagen</strong> nach Rechnungsstellung
            ohne Abzug zahlbar. Die Zahlung erfolgt nach Lieferung des vereinbarten
            Ergebnisses. Bei größeren Aufträgen (nach individueller Vereinbarung) kann
            eine Abschlagszahlung vereinbart werden.
          </p>
          <p>
            Bei Zahlungsverzug ist der Auftragnehmer berechtigt, Verzugszinsen in
            gesetzlicher Höhe sowie eine Mahnpauschale von 5,00 € je Mahnung zu berechnen.
          </p>

          {/* § 6 Lieferung und Abnahme */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">§ 6 Lieferung und Abnahme</h2>
          <p>
            Die Lieferung erfolgt per E-Mail in digitaler Form. Vereinbarte Liefertermine
            sind Richtwerte und setzen die rechtzeitige Zulieferung aller notwendigen
            Unterlagen durch den Auftraggeber voraus.
          </p>
          <p>
            Der Auftraggeber hat das gelieferte Ergebnis innerhalb von <strong>7 Werktagen</strong>
            nach Erhalt zu prüfen und etwaige Mängel schriftlich zu rügen. Erfolgt innerhalb
            dieser Frist keine Rüge, gilt die Leistung als abgenommen.
          </p>

          {/* § 7 Gewährleistung */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">§ 7 Gewährleistung</h2>
          <p>
            Der Auftragnehmer gewährleistet, dass die gelieferten Dokumente dem vereinbarten
            Standard (z. B. PDF/UA-1 nach ISO 14289-1) zum Zeitpunkt der Lieferung entsprechen.
            Mängel müssen innerhalb von <strong>14 Tagen</strong> nach Lieferung schriftlich
            gerügt werden. Nachbesserung erfolgt kostenlos innerhalb angemessener Frist.
          </p>
          <p>
            Keine Gewährleistung besteht für Mängel, die auf fehlerhaften, unvollständigen
            oder nachträglich veränderten Quelldokumenten beruhen, oder die durch den
            Auftraggeber selbst nach Lieferung verursacht wurden.
          </p>

          {/* § 8 Urheberrecht und Nutzungsrechte */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">§ 8 Urheberrecht und Nutzungsrechte</h2>
          <p>
            Mit vollständiger Bezahlung der Rechnung überträgt der Auftragnehmer dem
            Auftraggeber alle Nutzungsrechte an den gelieferten Ergebnissen – zeitlich,
            räumlich und inhaltlich unbeschränkt. Der Auftraggeber ist insbesondere berechtigt,
            die Ergebnisse im Rahmen von White-Label-Leistungen unter eigenem Namen
            weiterzuverwenden und an Dritte weiterzugeben.
          </p>
          <p>
            Vor vollständiger Zahlung verbleiben alle Rechte beim Auftragnehmer.
          </p>

          {/* § 9 Vertraulichkeit */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">§ 9 Vertraulichkeit</h2>
          <p>
            Der Auftragnehmer verpflichtet sich, alle ihm im Rahmen der Zusammenarbeit
            übermittelten Dokumente, Informationen und Daten des Auftraggebers streng
            vertraulich zu behandeln. Eine Weitergabe an Dritte erfolgt nicht, es sei denn,
            dies ist zur Leistungserbringung ausdrücklich notwendig und wurde mit dem
            Auftraggeber abgestimmt.
          </p>
          <p>
            Übermittelte Dokumente werden ausschließlich für den vereinbarten Auftrag
            verwendet und nach Abschluss des Projekts auf Wunsch des Auftraggebers
            gelöscht. Diese Vertraulichkeitspflicht besteht auch nach Beendigung des
            Vertragsverhältnisses fort.
          </p>

          {/* § 10 Haftung */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">§ 10 Haftungsbeschränkung</h2>
          <p>
            Der Auftragnehmer haftet unbeschränkt für Schäden aus der Verletzung des Lebens,
            des Körpers oder der Gesundheit sowie für vorsätzlich oder grob fahrlässig
            verursachte Schäden.
          </p>
          <p>
            Im Übrigen ist die Haftung auf den vertragstypischen, vorhersehbaren Schaden
            begrenzt. Die Haftung für mittelbare Schäden, entgangenen Gewinn oder Folgeschäden
            ist ausgeschlossen, soweit gesetzlich zulässig.
          </p>
          <p>
            Der Auftragnehmer übernimmt keine Haftung dafür, dass die gelieferten Dokumente
            von sämtlichen am Markt verfügbaren Screenreadern oder assistiven Technologien
            vollständig korrekt verarbeitet werden, sofern die Konformität mit dem vereinbarten
            Standard (PDF/UA-1) nachweislich gegeben ist.
          </p>

          {/* § 11 Datenschutz */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">§ 11 Datenschutz</h2>
          <p>
            Die Verarbeitung personenbezogener Daten erfolgt gemäß der Datenschutz-Grundverordnung
            (DSGVO) sowie dem spanischen Datenschutzgesetz (LOPDGDD). Einzelheiten entnehmen
            Sie bitte der Datenschutzerklärung auf dieser Website.
          </p>

          {/* § 12 Schlussbestimmungen */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">§ 12 Schlussbestimmungen</h2>
          <p>
            Es gilt spanisches Recht unter Ausschluss des UN-Kaufrechts (CISG). Gerichtsstand
            ist, soweit gesetzlich zulässig, der Wohnort des Auftragnehmers in Spanien.
            Für Verbraucher mit Wohnsitz in der EU gelten ergänzend die zwingenden
            Verbraucherschutzbestimmungen ihres jeweiligen Wohnsitzlandes.
          </p>
          <p>
            Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, bleibt
            die Wirksamkeit der übrigen Bestimmungen unberührt. Die unwirksame Bestimmung
            wird durch eine wirksame ersetzt, die dem wirtschaftlichen Zweck der unwirksamen
            Bestimmung am nächsten kommt.
          </p>
          <p>
            Änderungen und Ergänzungen dieser AGB bedürfen der Schriftform. Dies gilt
            auch für die Abbedingung des Schriftformerfordernisses selbst.
          </p>

          <p className="text-xs text-slate-400 mt-10">Stand: Februar 2026</p>
        </div>
      </div>
    </section>
  );
}
