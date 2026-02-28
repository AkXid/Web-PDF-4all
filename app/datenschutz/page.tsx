import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung / Política de Privacidad",
};

export default function DatenschutzPage() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8">
          Datenschutzerklärung
        </h1>

        <div className="space-y-6 text-sm leading-relaxed text-slate-600">

          {/* 1. Verantwortlicher */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">1. Verantwortlicher</h2>
          <p>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO / RGPD) und des
            spanischen Datenschutzgesetzes (LOPDGDD, Ley Orgánica 3/2018) ist:
          </p>
          <p>
            Dragan Bena<br />
            Autónomo (Einzelunternehmer)<br />
            [Straße und Hausnummer]<br />
            [PLZ] [Stadt], España<br />
            E-Mail: bena@pdf-4all.de
          </p>

          {/* 2. Grundsätze */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">2. Grundsätze der Datenverarbeitung</h2>
          <p>
            Ich verarbeite personenbezogene Daten nur, soweit dies zur Erbringung meiner
            Dienstleistungen erforderlich ist oder Sie ausdrücklich eingewilligt haben. Rechtsgrundlagen
            der Verarbeitung sind Art. 6 DSGVO (Vertragserfüllung, berechtigtes Interesse,
            Einwilligung) sowie die einschlägigen Bestimmungen der LOPDGDD.
          </p>

          {/* 3. Hosting – GitHub Pages */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">3. Hosting – GitHub Pages</h2>
          <p>
            Diese Website wird über <strong>GitHub Pages</strong> (GitHub, Inc., 88 Colin P. Kelly Jr. St.,
            San Francisco, CA 94107, USA) gehostet. Beim Aufruf der Website werden automatisch
            technische Zugriffsdaten in Server-Logfiles gespeichert, darunter IP-Adresse,
            Browsertyp, Betriebssystem, Referrer-URL sowie Datum und Uhrzeit des Zugriffs.
          </p>
          <p>
            Diese Daten werden von GitHub erhoben und nicht von mir kontrolliert. Die Verarbeitung
            erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am
            sicheren Betrieb der Website). GitHub ist unter dem EU-US Data Privacy Framework
            zertifiziert. Weitere Informationen:{" "}
            <a href="https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#data-collection"
              target="_blank" rel="noopener noreferrer" className="text-[#1a365d] hover:underline">
              GitHub Pages Datenschutz
            </a>
          </p>

          {/* 4. Domain – Infomaniak */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">4. Domain – Infomaniak</h2>
          <p>
            Die Domain dieser Website ist registriert bei <strong>Infomaniak Network AG</strong>,
            Rue Eugène-Marziano 25, 1227 Genf, Schweiz. Im Rahmen der Domain-Registrierung
            werden Name und Kontaktdaten des Domain-Inhabers verarbeitet. Infomaniak unterliegt
            dem Schweizer Datenschutzgesetz (DSG) sowie den DSGVO-Anforderungen für
            Datenübermittlungen in die Schweiz (Angemessenheitsbeschluss der EU-Kommission).
            Weitere Informationen:{" "}
            <a href="https://www.infomaniak.com/de/agb/datenschutzrichtlinie"
              target="_blank" rel="noopener noreferrer" className="text-[#1a365d] hover:underline">
              Datenschutzrichtlinie Infomaniak
            </a>
          </p>

          {/* 5. Kontaktformular – Formspree */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">5. Kontaktformular – Formspree</h2>
          <p>
            Das Kontaktformular auf dieser Website wird über den Dienst <strong>Formspree</strong>
            (Formspree, Inc., 2093 Philadelphia Pike #3226, Claymont, DE 19703, USA) betrieben.
            Wenn Sie das Kontaktformular nutzen, werden die von Ihnen eingegebenen Daten (Name,
            E-Mail-Adresse, Nachricht) an Formspree übermittelt und von dort direkt an meine
            E-Mail-Adresse weitergeleitet. Eine Speicherung der Daten über die Weiterleitung
            hinaus erfolgt nicht.
          </p>
          <p>
            Die Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht
            an Dritte weitergegeben. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
            (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
            der Beantwortung von Anfragen). Formspree ist unter dem EU-US Data Privacy Framework
            zertifiziert. Weitere Informationen:{" "}
            <a href="https://formspree.io/legal/privacy-policy/"
              target="_blank" rel="noopener noreferrer" className="text-[#1a365d] hover:underline">
              Datenschutzrichtlinie Formspree
            </a>
          </p>

          {/* 6. Kostenlose Downloads */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">6. Kostenlose Downloads</h2>
          <p>
            Wenn Sie ein kostenloses Dokument oder eine Ressource anfordern, wird Ihre
            E-Mail-Adresse einmalig verarbeitet, um Ihnen die angeforderte Datei zuzusenden.
          </p>
          <p>
            Ihre E-Mail-Adresse wird ausschließlich für den einmaligen Versand des angeforderten
            Inhalts verwendet. Eine Aufnahme in einen Newsletter oder eine wiederkehrende
            Kontaktaufnahme erfolgt nicht ohne Ihre ausdrückliche Einwilligung. Rechtsgrundlage
            ist Art. 6 Abs. 1 lit. b DSGVO (Erfüllung einer Anfrage).
          </p>

          {/* 7. KI-Ausschluss */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">7. Keine KI-Verarbeitung von Kundendokumenten</h2>
          <p>
            Dokumente, die Sie mir im Rahmen einer Beauftragung per E-Mail zusenden, werden
            ausschließlich <strong>manuell von mir persönlich bearbeitet</strong>. Es werden
            keine KI-Tools, automatisierten Konverter oder maschinelle Lernverfahren zur
            Verarbeitung Ihrer Dokumente eingesetzt.
          </p>
          <p>
            Ihre Dokumente werden nicht an Drittanbieter von KI-Diensten weitergegeben und
            nicht für das Training von KI-Modellen verwendet. Die Bearbeitung erfolgt
            ausschließlich durch mich als natürliche Person – Schritt für Schritt, manuell
            und ohne automatisierte Entscheidungsfindung im Sinne von Art. 22 DSGVO.
          </p>

          {/* 8. Cookies */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">8. Cookies</h2>

          <p>
            Diese Website verwendet ausschließlich technisch notwendige Cookies, die für den
            ordnungsgemäßen Betrieb der Website erforderlich sind. Diese Cookies speichern keine
            personenbezogenen Daten und werden nicht für Tracking- oder Werbezwecke eingesetzt.
            Eine Einwilligung ist für technisch notwendige Cookies gemäß Art. 5 Abs. 3 der
            ePrivacy-Richtlinie nicht erforderlich.
          </p>
          <p>
            Es werden derzeit keine Analyse-, Marketing- oder Tracking-Cookies verwendet.
          </p>

          {/* 9. Ihre Rechte */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">9. Ihre Rechte als betroffene Person</h2>
          <p>Gemäß DSGVO und LOPDGDD haben Sie folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li><strong>Auskunft</strong> (Art. 15 DSGVO): Sie können Auskunft über die von mir gespeicherten Daten verlangen.</li>
            <li><strong>Berichtigung</strong> (Art. 16 DSGVO): Sie können die Berichtigung unrichtiger Daten verlangen.</li>
            <li><strong>Löschung</strong> (Art. 17 DSGVO): Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</li>
            <li><strong>Einschränkung</strong> (Art. 18 DSGVO): Sie können die Einschränkung der Verarbeitung verlangen.</li>
            <li><strong>Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie können Ihre Daten in einem gängigen Format erhalten.</li>
            <li><strong>Widerspruch</strong> (Art. 21 DSGVO): Sie können der Verarbeitung auf Basis berechtigter Interessen widersprechen.</li>
            <li><strong>Widerruf</strong> (Art. 7 DSGVO): Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</li>
          </ul>
          <p className="mt-2">
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte per E-Mail an: bena@pdf-4all.de
          </p>

          {/* 10. Beschwerderecht */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">10. Beschwerderecht bei der Aufsichtsbehörde</h2>
          <p>
            Sie haben das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.
            Als in Spanien ansässiger Verantwortlicher ist die zuständige Behörde:
          </p>
          <p>
            <strong>Agencia Española de Protección de Datos (AEPD)</strong><br />
            C/ Jorge Juan, 6<br />
            28001 Madrid, España<br />
            <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer"
              className="text-[#1a365d] hover:underline">
              www.aepd.es
            </a>
          </p>
          <p>
            Betroffene Personen mit Wohnsitz in Deutschland können sich alternativ auch an die
            zuständige deutsche Landesdatenschutzbehörde wenden.
          </p>

          {/* 11. Datensicherheit */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">11. Datensicherheit</h2>
          <p>
            Diese Website nutzt aus Sicherheitsgründen eine SSL/TLS-Verschlüsselung. Eine
            verschlüsselte Verbindung erkennen Sie an dem „https://" in der Adresszeile Ihres
            Browsers. Übermittelte Daten können so nicht von Dritten mitgelesen werden.
          </p>

          {/* 12. Aktualisierung */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">12. Aktualisierung dieser Datenschutzerklärung</h2>
          <p>
            Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an
            geänderte Rechtslage oder Änderungen der Website anzupassen. Die jeweils aktuelle
            Version ist auf dieser Seite abrufbar.
          </p>

          <p className="text-xs text-slate-400 mt-10">Stand: Februar 2026</p>
        </div>
      </div>
    </section>
  );
}
