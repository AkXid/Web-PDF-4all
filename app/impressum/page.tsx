import type { Metadata } from "next";
import { ProtectedText, ProtectedLink } from "@/components/shared/ProtectedText";

export const metadata: Metadata = { title: "Impressum / Aviso Legal" };

export default function ImpressumPage() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8">
          Impressum / Aviso Legal
        </h1>

        <div className="prose prose-slate max-w-none space-y-6 text-sm leading-relaxed text-slate-600">

          {/* Angaben gemäß LSSI-CE */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">
            Angaben gemäß Art. 10 LSSI-CE (Ley 34/2002)
          </h2>
          <p>
            <strong>Name:</strong> <ProtectedText parts={["Drag", "an ", "Bena"]} /><br />
            <strong>Rechtsform:</strong> Autónomo (Einzelunternehmer)<br />
            <strong>Steueridentifikationsnummer (NIF):</strong> <ProtectedText parts={["X42", "566", "83G"]} /><br />
            <strong>Eingetragene Adresse:</strong><br />
            Calle Bilbao 7<br />
            03170 Rojales<br />
            España / Spanien
          </p>

          {/* Kontakt */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">Kontakt</h2>
          <p>
            <strong>Telefon:</strong> <ProtectedText parts={["+34", " 685", "75", "707"]} /><br />
            <strong>E-Mail:</strong> <ProtectedText parts={["bena", "@pdf", "-4all", ".de"]} />
          </p>

          {/* Berufliche Tätigkeit */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">Berufliche Tätigkeit</h2>
          <p>
            Dienstleister für digitale Barrierefreiheit / PDF/UA-Spezialist<br />
            PDF/UA Accessibility Senior Specialist
          </p>

          {/* Steuerliche Angaben */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">Steuerliche Angaben</h2>
          <p>
            <strong>Spanische NIF:</strong> <ProtectedText parts={["X42", "566", "83G"]} /><br />
            <strong>EU-Umsatzsteuer-Identifikationsnummer (VAT-ID):</strong> <ProtectedText parts={["ES", "X42", "566", "83G"]} />
          </p>
          <p>
            Als in Spanien ansässiger Autónomo unterliege ich der spanischen Steuerpflicht.
            Für grenzüberschreitende Dienstleistungen innerhalb der EU gelten die einschlägigen
            Bestimmungen der EU-Mehrwertsteuerrichtlinie.
          </p>

          {/* Aufsichtsbehörde */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">Zuständige Aufsichtsbehörde</h2>
          <p>
            Secretaría de Estado de Digitalización e Inteligencia Artificial (SEDIA)<br />
            Ministerio para la Transformación Digital y de la Función Pública<br />
            <a
              href="https://www.digitalizacion.gob.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a365d] hover:underline"
            >
              www.digitalizacion.gob.es
            </a>
          </p>

          {/* Online-Streitbeilegung */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">Online-Streitbeilegung (ODR)</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1a365d] hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p>
            Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>

          {/* Haftungsausschluss */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">Haftungsausschluss</h2>
          <p>
            Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
            Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr
            übernehmen. Als Diensteanbieter bin ich gemäß Art. 13 ff. LSSI-CE für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
          </p>

          {/* Urheberrecht */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">Urheberrecht</h2>
          <p>
            Die durch mich erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
            spanischen Urheberrecht (Real Decreto Legislativo 1/1996 – Ley de Propiedad
            Intelectual). Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
            Verwertung außerhalb der Grenzen des Urheberrechts bedürfen meiner schriftlichen
            Zustimmung.
          </p>

          {/* Geltendes Recht */}
          <h2 className="text-lg font-bold text-slate-900 mt-8">Geltendes Recht</h2>
          <p>
            Es gilt spanisches Recht. Gerichtsstand ist, soweit gesetzlich zulässig, der
            Wohnort des Diensteanbieters in Spanien. Für Verbraucher mit Wohnsitz in der EU
            gelten ergänzend die zwingenden Verbraucherschutzbestimmungen des jeweiligen
            Mitgliedstaates.
          </p>

          {/* Letzte Aktualisierung */}
          <p className="text-xs text-slate-400 mt-10">
            Stand: Februar 2026
          </p>
        </div>
      </div>
    </section>
  );
}
