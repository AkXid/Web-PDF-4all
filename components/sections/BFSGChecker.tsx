"use client";
import { useState } from "react";
import Link from "next/link";

type StepId = 0 | 1 | 2 | 3 | "result";

interface Answers {
  hasB2C: boolean | null;
  employees: "under10" | "10plus" | null;
  revenueUnder2M: boolean | null;
  offerings: string[];
}

interface OfferingOption {
  value: string;
  label: string;
  desc: string;
  affected: string;
  exempt?: string;
  noExempt?: string;
  isService: boolean;
}

const offeringOptions: OfferingOption[] = [
  {
    value: "webseite",
    label: "Webseite",
    desc: "Unternehmenswebseite, Blog, Kundenportal",
    affected:
      "Ihre Webseite muss barrierefrei gestaltet sein, sofern sie Dienstleistungen für Verbraucher erbringt (z.\u202fB. Buchungen, Kundenportal, Kontaktformulare). Ein rein informativer Blog ohne Interaktionsfunktion ist nicht direkt betroffen.",
    exempt:
      "Als Kleinstunternehmen sind Sie für Dienstleistungen wie Ihre Webseite von der BFSG-Pflicht ausgenommen.",
    isService: true,
  },
  {
    value: "online-shop",
    label: "Online-Shop",
    desc: "E-Commerce, Online-Bestellungen",
    affected:
      "Ihr Online-Shop fällt als E-Commerce-Dienstleistung unter das BFSG. Alle Bestellprozesse, Produktseiten und Zahlungsvorgänge müssen barrierefrei gestaltet sein.",
    exempt:
      "Als Kleinstunternehmen sind Sie für Ihren Online-Shop von der BFSG-Pflicht ausgenommen.",
    isService: true,
  },
  {
    value: "app",
    label: "App / Software",
    desc: "Mobile App oder Web-Anwendung für Endkunden",
    affected:
      "Ihre App fällt unter das BFSG, wenn sie Dienstleistungen für Verbraucher bereitstellt. Die App muss die Barrierefreiheitsanforderungen nach EN 301 549 erfüllen.",
    exempt:
      "Als Kleinstunternehmen sind Sie für Ihre App von der BFSG-Pflicht ausgenommen.",
    isService: true,
  },
  {
    value: "dokumente",
    label: "Digitale Dokumente",
    desc: "PDFs, E-Books, digitale Formulare",
    affected:
      "Ihre digitalen Dokumente müssen barrierefrei sein, wenn sie Teil einer BFSG-pflichtigen Dienstleistung sind. PDFs müssen dem PDF/UA-Standard entsprechen – das gilt für Rechnungen, Verträge, AGBs und alle kundenrelevanten Dokumente.",
    exempt:
      "Als Kleinstunternehmen sind Sie für digitale Dokumente von der BFSG-Pflicht ausgenommen. PDF/UA-Konformität wird dennoch empfohlen.",
    isService: true,
  },
  {
    value: "produkte",
    label: "Physische Produkte",
    desc: "Produkte mit digitaler Bedienoberfläche (Terminals, Automaten)",
    affected:
      "Physische Produkte mit digitaler Bedienoberfläche (z.\u202fB. Selbstbedienungsterminals, Automaten) fallen unter das BFSG. Die Kleinstunternehmen-Ausnahme gilt hier ausdrücklich NICHT.",
    noExempt:
      "Physische Produkte mit digitaler Bedienoberfläche fallen unter das BFSG. Die Kleinstunternehmen-Ausnahme gilt für Produkte NICHT – auch als Kleinstunternehmen sind Sie hier betroffen.",
    isService: false,
  },
];

// ── Small reusable pieces ──────────────────────────────────────────────────

function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1 text-sm text-slate-400 mb-6 hover:text-primary transition-colors"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Zurück
    </button>
  );
}

function StepBadge({ number, label }: { number: string; label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-lighter rounded-full text-primary text-sm font-medium mb-4">
      <span className="font-mono">{number}</span>
      <span className="w-px h-3 bg-primary/30" />
      <span>{label}</span>
    </div>
  );
}

function OptionCard({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className="option-card border-2 border-slate-200 rounded-sm p-6 text-left group hover:border-primary-light hover:bg-slate-50 active:scale-[0.98] transition-all"
    >
      {children}
    </button>
  );
}

// ── Steps ─────────────────────────────────────────────────────────────────

function Step0({ onAnswer }: { onAnswer: (val: boolean) => void }) {
  return (
    <div>
      <div className="mb-8">
        <StepBadge number="01" label="Kundentyp" />
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
          Haben Sie Privatpersonen als Kunden?
        </h2>
        <p className="mt-2 text-slate-500 leading-relaxed">
          Das BFSG gilt nur für Unternehmen, die Produkte oder Dienstleistungen für Verbraucher
          (B2C) anbieten.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <OptionCard onClick={() => onAnswer(true)}>
          <div className="w-10 h-10 rounded-full bg-primary-lighter flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <p className="font-bold text-lg text-slate-900">Ja</p>
          <p className="text-sm text-slate-500 mt-1">Wir haben Privatkunden (B2C)</p>
        </OptionCard>
        <OptionCard onClick={() => onAnswer(false)}>
          <div className="w-10 h-10 rounded-full bg-primary-lighter flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <p className="font-bold text-lg text-slate-900">Nein</p>
          <p className="text-sm text-slate-500 mt-1">Nur Geschäftskunden (B2B)</p>
        </OptionCard>
      </div>
    </div>
  );
}

function Step1({
  onBack,
  onAnswer,
}: {
  onBack: () => void;
  onAnswer: (val: "under10" | "10plus") => void;
}) {
  return (
    <div>
      <BackButton onClick={onBack} />
      <div className="mb-8">
        <StepBadge number="02" label="Unternehmensgröße" />
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
          Wie viele Mitarbeiter hat Ihr Unternehmen?
        </h2>
        <p className="mt-2 text-slate-500 leading-relaxed">
          Für die Kleinstunternehmen-Ausnahme müssen weniger als 10 Beschäftigte vorliegen.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <OptionCard onClick={() => onAnswer("under10")}>
          <div className="w-10 h-10 rounded-full bg-primary-lighter flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <p className="font-bold text-lg text-slate-900">Unter 10</p>
          <p className="text-sm text-slate-500 mt-1">Weniger als 10 Beschäftigte</p>
        </OptionCard>
        <OptionCard onClick={() => onAnswer("10plus")}>
          <div className="w-10 h-10 rounded-full bg-primary-lighter flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <p className="font-bold text-lg text-slate-900">10 oder mehr</p>
          <p className="text-sm text-slate-500 mt-1">10 oder mehr Beschäftigte</p>
        </OptionCard>
      </div>
    </div>
  );
}

function Step2({ onBack, onAnswer }: { onBack: () => void; onAnswer: (val: boolean) => void }) {
  return (
    <div>
      <BackButton onClick={onBack} />
      <div className="mb-8">
        <StepBadge number="03" label="Umsatz" />
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
          Liegt Ihr Jahresumsatz unter 2 Millionen Euro?
        </h2>
        <p className="mt-2 text-slate-500 leading-relaxed">
          Zusammen mit der Mitarbeiterzahl entscheidet der Umsatz, ob die
          Kleinstunternehmen-Ausnahme greift.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <OptionCard onClick={() => onAnswer(true)}>
          <div className="w-10 h-10 rounded-full bg-primary-lighter flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="font-mono text-sm font-bold">&lt;2M</span>
          </div>
          <p className="font-bold text-lg text-slate-900">Ja, unter 2 Mio. €</p>
          <p className="text-sm text-slate-500 mt-1">Jahresumsatz unter 2 Millionen Euro</p>
        </OptionCard>
        <OptionCard onClick={() => onAnswer(false)}>
          <div className="w-10 h-10 rounded-full bg-primary-lighter flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
            <span className="font-mono text-sm font-bold">≥2M</span>
          </div>
          <p className="font-bold text-lg text-slate-900">Nein, 2 Mio. € oder mehr</p>
          <p className="text-sm text-slate-500 mt-1">Jahresumsatz ab 2 Millionen Euro</p>
        </OptionCard>
      </div>
    </div>
  );
}

const offeringIcons: Record<string, React.ReactNode> = {
  webseite: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  "online-shop": (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
    </svg>
  ),
  app: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  dokumente: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  produkte: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
};

function Step3({
  employees,
  offerings,
  onBack,
  onToggle,
  onSubmit,
}: {
  employees: "under10" | "10plus" | null;
  offerings: string[];
  onBack: () => void;
  onToggle: (val: string) => void;
  onSubmit: () => void;
}) {
  const stepNumber = employees === "10plus" ? "03" : "04";
  const [showHint, setShowHint] = useState(false);

  function handleSubmit() {
    if (offerings.length === 0) {
      setShowHint(true);
      return;
    }
    onSubmit();
  }

  return (
    <div>
      <BackButton onClick={onBack} />
      <div className="mb-8">
        <StepBadge number={stepNumber} label="Angebote" />
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-slate-900">
          Was bieten Sie Ihren Kunden an?
        </h2>
        <p className="mt-2 text-slate-500 leading-relaxed">
          Wählen Sie alle zutreffenden Optionen. Daraus ergibt sich, was genau betroffen ist.
        </p>
      </div>
      <div className="space-y-3">
        {offeringOptions.map((opt) => {
          const selected = offerings.includes(opt.value);
          return (
            <button
              key={opt.value}
              onClick={() => onToggle(opt.value)}
              className={`w-full border-2 rounded-sm p-4 text-left flex items-center gap-4 group transition-all ${
                selected
                  ? "border-primary bg-primary-lighter"
                  : "border-slate-200 hover:border-primary-light hover:bg-slate-50"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-colors ${
                  selected
                    ? "bg-primary text-white"
                    : "bg-primary-lighter group-hover:bg-primary group-hover:text-white"
                }`}
              >
                {offeringIcons[opt.value]}
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900">{opt.label}</p>
                <p className="text-sm text-slate-500">{opt.desc}</p>
              </div>
              <div
                className={`w-6 h-6 border-2 rounded-sm flex items-center justify-center flex-shrink-0 transition-colors ${
                  selected ? "bg-primary border-primary" : "border-slate-300"
                }`}
              >
                <svg
                  className={`w-4 h-4 text-white transition-opacity ${selected ? "opacity-100" : "opacity-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>
      <div className="mt-8 flex items-center justify-between">
        <p className={`text-sm text-red-500 transition-opacity ${showHint && offerings.length === 0 ? "opacity-100" : "opacity-0"}`}>
          Bitte wählen Sie mindestens eine Option.
        </p>
        <button
          onClick={handleSubmit}
          className={`ml-auto flex items-center gap-1 font-bold px-8 py-3 rounded-md text-white transition-all ${
            offerings.length > 0
              ? "bg-accent hover:bg-accent-light hover:-translate-y-px"
              : "bg-accent opacity-50 cursor-not-allowed"
          }`}
        >
          Ergebnis anzeigen
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── Result ─────────────────────────────────────────────────────────────────

interface ResultItem {
  value: string;
  label: string;
  status: "affected" | "exempt";
  text: string;
}

interface ResultData {
  status: "not-affected" | "affected" | "partial";
  headline: string;
  summary: string;
  hint: string;
  items: ResultItem[];
}

const statusStyles = {
  "not-affected": {
    bg: "bg-green-50",
    border: "border-green-200",
    text: "text-green-800",
    icon: "text-green-600",
  },
  affected: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-800",
    icon: "text-amber-600",
  },
  partial: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-800",
    icon: "text-blue-600",
  },
};

const resultIcons = {
  "not-affected": (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  affected: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
    </svg>
  ),
  partial: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

function ResultView({ result, onRestart }: { result: ResultData; onRestart: () => void }) {
  const colors = statusStyles[result.status];
  const hasDokumente = result.items.some((i) => i.value === "dokumente" && i.status === "affected");
  const hasOtherAffected = result.items.some(
    (i) => i.status === "affected" && i.value !== "dokumente"
  );
  const otherLabels = result.items
    .filter((i) => i.status === "affected" && i.value !== "dokumente")
    .map((i) => i.label)
    .join(", ");
  const allAffectedLabels = result.items
    .filter((i) => i.status === "affected")
    .map((i) => i.label)
    .join(", ");

  return (
    <div className="space-y-4">
      {/* Header card */}
      <div className={`${colors.bg} ${colors.border} border-2 rounded-sm p-6 md:p-8`}>
        <div className="flex items-start gap-4">
          <div className={`${colors.icon} flex-shrink-0 mt-1`}>{resultIcons[result.status]}</div>
          <div>
            <h2 className={`text-xl md:text-2xl font-bold ${colors.text}`}>{result.headline}</h2>
            <p className="mt-2 text-slate-700 leading-relaxed">{result.summary}</p>
            {result.hint && (
              <p className="mt-3 text-sm text-slate-500 leading-relaxed">{result.hint}</p>
            )}
          </div>
        </div>
      </div>

      {/* Detail items */}
      {result.items.length > 0 && (
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-4">Detailauswertung</h3>
          <div className="space-y-3">
            {result.items.map((item) => {
              const isAffected = item.status === "affected";
              return (
                <div
                  key={item.value}
                  className={`border rounded-sm p-4 md:p-5 ${
                    isAffected
                      ? "bg-amber-50 border-amber-200"
                      : "bg-green-50 border-green-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h4 className="font-bold text-slate-900">{item.label}</h4>
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold whitespace-nowrap ${
                        isAffected
                          ? "bg-amber-100 text-amber-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {isAffected ? (
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01" />
                        </svg>
                      ) : (
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                      {isAffected ? "Betroffen" : "Ausgenommen"}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* CTA – Dokumente */}
      {hasDokumente && (
        <div className="bg-primary text-white rounded-sm p-6 md:p-8">
          <h3 className="text-lg font-bold mb-2">Ihre Dokumente barrierefrei machen</h3>
          <p className="text-white/80 leading-relaxed mb-4">
            Ihre digitalen Dokumente (PDFs) müssen PDF/UA-konform sein – das betrifft Rechnungen,
            Verträge, AGBs und alle kundenrelevanten Unterlagen. Als PDF/UA-Spezialist ist das genau
            mein Fachgebiet. Ich mache Ihre Dokumente professionell barrierefrei.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-white font-bold px-6 py-3 rounded-md transition-all hover:-translate-y-px"
          >
            Kostenlose Erstberatung anfragen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      )}

      {/* CTA – andere betroffene Bereiche */}
      {hasOtherAffected && (
        <div className="border-2 border-slate-200 rounded-sm p-6 md:p-8">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            {hasDokumente
              ? "Und was ist mit den anderen Bereichen?"
              : "Nächster Schritt: Barrierefreiheit umsetzen"}
          </h3>
          <p className="text-slate-600 leading-relaxed mb-4">
            {hasDokumente
              ? `Für Ihre weiteren betroffenen Bereiche (${otherLabels}) benötigen Sie spezialisierte Anbieter. Kontaktieren Sie mich gerne – ich berate Sie zur Gesamtsituation und vermittle bei Bedarf passende Experten aus meinem Netzwerk.`
              : `Das BFSG ist seit Juni 2025 in Kraft. Für die Umsetzung der Barrierefreiheit in den Bereichen ${allAffectedLabels} benötigen Sie spezialisierte Anbieter. Kontaktieren Sie mich gerne für eine erste Orientierung – ich berate Sie zur Gesamtsituation und vermittle bei Bedarf passende Experten.`}
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center gap-2 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-3 rounded-md transition-all"
          >
            Kontakt aufnehmen
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      )}

      {/* Restart */}
      <div className="text-center pt-2">
        <button
          onClick={onRestart}
          className="text-sm text-slate-400 hover:text-primary inline-flex items-center gap-1 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Check erneut starten
        </button>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export function BFSGChecker() {
  const [step, setStep] = useState<StepId>(0);
  const [history, setHistory] = useState<StepId[]>([0]);
  const [answers, setAnswers] = useState<Answers>({
    hasB2C: null,
    employees: null,
    revenueUnder2M: null,
    offerings: [],
  });
  const [animKey, setAnimKey] = useState(0);

  function advance(nextStep: StepId, updates?: Partial<Answers>) {
    if (updates) setAnswers((prev) => ({ ...prev, ...updates }));
    setHistory((prev) => [...prev, nextStep]);
    setStep(nextStep);
    setAnimKey((k) => k + 1);
  }

  function goBack() {
    if (history.length <= 1) return;
    const newHistory = history.slice(0, -1);
    setHistory(newHistory);
    setStep(newHistory[newHistory.length - 1]);
    setAnimKey((k) => k + 1);
  }

  function toggleOffering(value: string) {
    setAnswers((prev) => {
      const idx = prev.offerings.indexOf(value);
      if (idx > -1) return { ...prev, offerings: prev.offerings.filter((o) => o !== value) };
      return { ...prev, offerings: [...prev.offerings, value] };
    });
  }

  function restart() {
    setStep(0);
    setHistory([0]);
    setAnswers({ hasB2C: null, employees: null, revenueUnder2M: null, offerings: [] });
    setAnimKey((k) => k + 1);
  }

  // Progress
  const totalSteps = answers.employees === "10plus" ? 3 : 4;

  function getProgress(): { label: string; pct: number } {
    if (step === "result") return { label: "Ergebnis", pct: 100 };
    if (answers.employees === "10plus") {
      const map: Partial<Record<StepId, number>> = { 0: 1, 1: 2, 3: 3 };
      const visual = map[step] ?? 1;
      return { label: `Frage ${visual} von ${totalSteps}`, pct: Math.round((visual / totalSteps) * 100) };
    }
    const visual = (step as number) + 1;
    return { label: `Frage ${visual} von ${totalSteps}`, pct: Math.round((visual / totalSteps) * 100) };
  }

  // Result computation
  const isKleinst = answers.employees === "under10" && answers.revenueUnder2M === true;

  function computeResult(): ResultData {
    if (!answers.hasB2C) {
      return {
        status: "not-affected",
        headline: "Sie sind nicht betroffen",
        summary:
          "Da Ihr Unternehmen ausschließlich Geschäftskunden (B2B) bedient, fallen Sie nicht unter das Barrierefreiheitsstärkungsgesetz (BFSG). Das Gesetz gilt nur für Produkte und Dienstleistungen, die sich an Verbraucher (B2C) richten.",
        hint: "Hinweis: Sollten Sie in Zukunft auch Privatpersonen als Kunden ansprechen, ändert sich Ihre Situation. Barrierefreiheit ist aber auch im B2B-Bereich ein Qualitätsmerkmal.",
        items: [],
      };
    }

    const items: ResultItem[] = answers.offerings.map((val) => {
      const opt = offeringOptions.find((o) => o.value === val)!;
      if (isKleinst && opt.isService) {
        return { value: val, label: opt.label, status: "exempt", text: opt.exempt! };
      }
      if (isKleinst && !opt.isService) {
        return { value: val, label: opt.label, status: "affected", text: opt.noExempt ?? opt.affected };
      }
      return { value: val, label: opt.label, status: "affected", text: opt.affected };
    });

    const affectedCount = items.filter((i) => i.status === "affected").length;
    const exemptCount = items.filter((i) => i.status === "exempt").length;

    if (affectedCount === 0) {
      return {
        status: "not-affected",
        headline: "Kleinstunternehmen-Ausnahme",
        summary:
          "Ihr Unternehmen erfüllt die Kriterien eines Kleinstunternehmens (unter 10 Beschäftigte, unter 2 Mio. € Umsatz). Für Ihre Dienstleistungen greift die Ausnahme des BFSG.",
        hint: "Hinweis: Die Ausnahme gilt nur für Dienstleistungen, nicht für Produkte. Außerdem: Barrierefreiheit verbessert die Nutzererfahrung für alle Kunden und kann ein Wettbewerbsvorteil sein.",
        items,
      };
    }

    if (exemptCount === 0) {
      return {
        status: "affected",
        headline: "Sie sind betroffen",
        summary: `Ihr Unternehmen fällt mit ${affectedCount === 1 ? "folgendem Angebot" : "folgenden Angeboten"} unter das BFSG. Seit dem 28. Juni 2025 müssen die Barrierefreiheitsanforderungen erfüllt werden.`,
        hint: "",
        items,
      };
    }

    return {
      status: "partial",
      headline: "Teilweise betroffen",
      summary: `Für ${affectedCount} Ihrer Angebote gilt das BFSG. ${exemptCount === 1 ? "1 Angebot ist" : exemptCount + " Angebote sind"} durch die Kleinstunternehmen-Ausnahme befreit.`,
      hint: "Die Kleinstunternehmen-Ausnahme gilt nur für Dienstleistungen, nicht für Produkte mit digitaler Bedienoberfläche.",
      items,
    };
  }

  const { label: progressLabel, pct: progressPct } = getProgress();

  return (
    <div>
      {/* Progress Bar */}
      <div className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-500">{progressLabel}</span>
            <span className="text-sm font-mono font-medium text-primary">{progressPct}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
            <div
              className={`h-2 rounded-full transition-all duration-500 ${
                step === "result" ? "bg-green-600" : "bg-primary"
              }`}
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
      </div>

      {/* Step content */}
      <main className="max-w-3xl mx-auto px-4 py-8 md:py-12">
        <div key={animKey} className="animate-bfsg-in">
          {step === 0 && (
            <Step0
              onAnswer={(val) =>
                val ? advance(1, { hasB2C: true }) : advance("result", { hasB2C: false })
              }
            />
          )}
          {step === 1 && (
            <Step1
              onBack={goBack}
              onAnswer={(val) =>
                val === "under10"
                  ? advance(2, { employees: "under10" })
                  : advance(3, { employees: "10plus", revenueUnder2M: false })
              }
            />
          )}
          {step === 2 && (
            <Step2 onBack={goBack} onAnswer={(val) => advance(3, { revenueUnder2M: val })} />
          )}
          {step === 3 && (
            <Step3
              employees={answers.employees}
              offerings={answers.offerings}
              onBack={goBack}
              onToggle={toggleOffering}
              onSubmit={() => advance("result")}
            />
          )}
          {step === "result" && (
            <ResultView result={computeResult()} onRestart={restart} />
          )}
        </div>
      </main>
    </div>
  );
}
