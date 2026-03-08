"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="bg-white py-20">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Etwas ist schiefgelaufen
        </h1>
        <p className="text-slate-600 mb-8">
          Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-[#1a365d] hover:bg-[#2b5ea7] text-white font-medium px-5 py-2.5 transition-colors"
          >
            Erneut versuchen
          </button>
          <Link
            href="/"
            className="border border-slate-300 hover:border-slate-400 text-slate-700 font-medium px-5 py-2.5 transition-colors"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </section>
  );
}
