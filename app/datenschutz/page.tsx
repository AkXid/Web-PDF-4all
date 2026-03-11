import type { Metadata } from "next";
import { ProtectedText } from "@/components/shared/ProtectedText";

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
            <ProtectedText parts={["Drag", "an ", "Bena"]} /><br />
            Autónomo (Einzelunternehmer)<br />
            Av. Maisonnave, nº 41, 3º<br />
            03003 Alicante, España<br />
            E-Mail: <ProtectedText parts={["bena", "@pdf", "-4all", ".de"]} />
          </p>

          {/* 2. Grundsätze */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">2. Grundsätze der Datenverarbeitung</h2>
          <p>
            Ich verarbeite personenbezogene Daten nur, soweit dies zur Erbringung meiner
            Dienstleistungen erforderlich ist oder Sie ausdrücklich eingewilligt haben. Rechtsgrundlagen
            der Verarbeitung sind Art. 6 DSGVO (Vertragserfüllung, berechtigtes Interesse,
            Einwilligung) sowie die einschlägigen Bestimmungen der LOPDGDD.
          </p>

          {/* 3. Hosting */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">3. Hosting – Vercel &amp; GitHub</h2>

          <p><strong>3a. Vercel (Produktivbetrieb)</strong></p>
          <p>
            Diese Website wird über <strong>Vercel</strong> (Vercel, Inc., 340 S Lemon Ave #4133,
            Walnut, CA 91789, USA) gehostet und ausgeliefert. Beim Aufruf der Website verarbeitet
            Vercel automatisch technische Zugriffsdaten in Server-Logfiles, darunter IP-Adresse,
            Browsertyp, Betriebssystem, Referrer-URL sowie Datum und Uhrzeit des Zugriffs.
          </p>
          <p>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
            Interesse am sicheren und performanten Betrieb der Website). Vercel ist unter dem
            EU-US Data Privacy Framework zertifiziert. Weitere Informationen:{" "}
            <a href="https://vercel.com/legal/privacy-policy"
              target="_blank" rel="noopener noreferrer" className="text-[#1a365d] hover:underline">
              Datenschutzrichtlinie Vercel
            </a>
          </p>

          <p><strong>3b. GitHub (Quellcode-Repository)</strong></p>
          <p>
            Der Quellcode dieser Website wird auf <strong>GitHub</strong> (GitHub, Inc., 88 Colin P.
            Kelly Jr. St., San Francisco, CA 94107, USA) verwaltet. Dabei werden keine
            personenbezogenen Daten der Website-Besucher an GitHub übermittelt. GitHub ist unter
            dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen:{" "}
            <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
              target="_blank" rel="noopener noreferrer" className="text-[#1a365d] hover:underline">
              GitHub Datenschutz
            </a>
          </p>

          <p><strong>3c. Vercel Analytics (Webanalyse)</strong></p>
          <p>
            Diese Website nutzt <strong>Vercel Analytics</strong>, einen datenschutzfreundlichen
            Analysedienst der Vercel, Inc. (340 S Lemon Ave #4133, Walnut, CA 91789, USA).
            Vercel Analytics arbeitet <strong>ohne Cookies</strong> und ohne persistente
            Identifikatoren. Es werden ausschließlich aggregierte, nicht personenbezogene
            Messwerte erfasst, darunter Seitenaufrufe, ungefähre Herkunftsregion (auf
            Länderebene), Gerätekategorie, Browsertyp sowie Core Web Vitals
            (Ladezeit, Layoutstabilität).
          </p>
          <p>
            Eine Zuordnung dieser Daten zu einzelnen Personen ist nicht möglich und nicht
            beabsichtigt. Eine Einwilligung (Cookie-Banner) ist daher nicht erforderlich.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
            Verbesserung der Website-Performance und Nutzerfreundlichkeit). Vercel ist unter
            dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen:{" "}
            <a href="https://vercel.com/docs/analytics/privacy-policy"
              target="_blank" rel="noopener noreferrer" className="text-[#1a365d] hover:underline">
              Vercel Analytics Datenschutz
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

          {/* 8. Cookies und Consent-Management */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">8. Cookies und Consent-Management – Cookiebot</h2>

          <p>
            Diese Website verwendet Cookies. Beim ersten Besuch erscheint ein Cookie-Banner, über
            das Sie Ihre Einwilligung für die verschiedenen Cookie-Kategorien erteilen oder
            verweigern können. Technisch notwendige Cookies werden ohne Einwilligung gesetzt;
            alle anderen Cookies werden erst nach Ihrer ausdrücklichen Einwilligung aktiviert.
          </p>
          <p>
            Das Cookie-Consent-Management wird durch <strong>Cookiebot</strong> bereitgestellt,
            einem Dienst der <strong>Usercentrics A/S</strong>, Havnegade 39, 1058 Kopenhagen,
            Dänemark. Cookiebot dokumentiert und verwaltet Ihre Einwilligungsentscheidung und
            speichert diese in einem Cookie (<code>CookieConsent</code>) in Ihrem Browser, damit
            Ihre Präferenz bei erneuten Besuchen erhalten bleibt.
          </p>
          <p>
            Rechtsgrundlage für den Einsatz von Cookiebot ist Art. 6 Abs. 1 lit. c DSGVO
            (Erfüllung der rechtlichen Verpflichtung zur Einholungs- und Nachweispflicht gemäß
            Art. 7 DSGVO) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
            rechtskonformen Gestaltung der Website). Weitere Informationen:{" "}
            <a href="https://www.cookiebot.com/de/privacy-policy/"
              target="_blank" rel="noopener noreferrer" className="text-[#1a365d] hover:underline">
              Datenschutzrichtlinie Cookiebot
            </a>
          </p>

          {/* 9. Google Tag Manager */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">9. Google Tag Manager</h2>

          <p>
            Diese Website verwendet den <strong>Google Tag Manager</strong> (Container-ID:
            GTM-PZ867C2K), einen Tag-Management-Dienst der <strong>Google Ireland Limited</strong>,
            Gordon House, Barrow Street, Dublin 4, Irland. Der Google Tag Manager selbst
            verarbeitet keine personenbezogenen Daten und setzt keine Cookies. Er dient
            ausschließlich der technischen Verwaltung und dem Laden der auf dieser Website
            eingesetzten Skripte (z. B. Google Analytics 4).
          </p>
          <p>
            Die über den Google Tag Manager eingebundenen Dienste unterliegen den in den
            jeweiligen Abschnitten dieser Datenschutzerklärung beschriebenen Datenschutzregelungen.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einer
            effizienten und datenschutzkonformen Tag-Verwaltung). Weitere Informationen:{" "}
            <a href="https://marketingplatform.google.com/about/analytics/tag-manager/use-policy/"
              target="_blank" rel="noopener noreferrer" className="text-[#1a365d] hover:underline">
              Google Tag Manager Nutzungsrichtlinien
            </a>
          </p>

          {/* 10. Google Analytics 4 */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">10. Google Analytics 4</h2>

          <p>
            Diese Website nutzt <strong>Google Analytics 4</strong> (Mess-ID: G-LCNY3EQ0VN),
            einen Webanalysedienst der <strong>Google Ireland Limited</strong>, Gordon House,
            Barrow Street, Dublin 4, Irland. Google Analytics 4 wird über den Google Tag Manager
            geladen und <strong>nur aktiviert, wenn Sie im Cookie-Banner der Kategorie
            „Statistiken" zugestimmt haben</strong>.
          </p>
          <p>
            Bei aktiviertem Google Analytics 4 werden Daten über Ihr Nutzungsverhalten auf dieser
            Website erfasst (aufgerufene Seiten, Verweildauer, ungefährer Standort auf Länderebene,
            Gerätetyp, Browsertyp). IP-Adressen werden von Google Analytics 4 standardmäßig
            anonymisiert (IP-Masking). Die Daten werden auf Servern von Google in den USA
            gespeichert. Google ist unter dem EU-US Data Privacy Framework zertifiziert, sodass
            ein angemessenes Datenschutzniveau gewährleistet ist.
          </p>
          <p>
            Google Analytics 4 setzt Cookies (<code>_ga</code>, <code>_ga_LCNY3EQ0VN</code>)
            mit einer Laufzeit von bis zu 2 Jahren, um Nutzer über mehrere Sitzungen hinweg zu
            unterscheiden. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Sie
            können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie
            über den Cookie-Banner die Kategorie „Statistiken" deaktivieren. Weitere
            Informationen:{" "}
            <a href="https://policies.google.com/privacy"
              target="_blank" rel="noopener noreferrer" className="text-[#1a365d] hover:underline">
              Google Datenschutzerklärung
            </a>
          </p>

          {/* 11. Ihre Rechte */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">11. Ihre Rechte als betroffene Person</h2>
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
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte per E-Mail an: <ProtectedText parts={["bena", "@pdf", "-4all", ".de"]} />
          </p>

          {/* 12. Beschwerderecht */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">12. Beschwerderecht bei der Aufsichtsbehörde</h2>
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

          {/* 13. Datensicherheit */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">13. Datensicherheit</h2>
          <p>
            Diese Website nutzt aus Sicherheitsgründen eine SSL/TLS-Verschlüsselung. Eine
            verschlüsselte Verbindung erkennen Sie an dem „https://" in der Adresszeile Ihres
            Browsers. Übermittelte Daten können so nicht von Dritten mitgelesen werden.
          </p>

          {/* 14. Aktualisierung */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">14. Aktualisierung dieser Datenschutzerklärung</h2>
          <p>
            Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an
            geänderte Rechtslage oder Änderungen der Website anzupassen. Die jeweils aktuelle
            Version ist auf dieser Seite abrufbar.
          </p>

          <p className="text-xs text-slate-400 mt-10">Stand: März 2026</p>
        </div>
      </div>
    </section>
  );
}
