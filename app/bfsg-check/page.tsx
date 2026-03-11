import type { Metadata } from "next";
import { BFSGChecker } from "@/components/sections/BFSGChecker";
import { GridPattern } from "@/components/ui/grid-pattern";

export const metadata: Metadata = {
  title: "BFSG-Check: Bin ich betroffen?",
  description:
    "Finden Sie in unter 60 Sekunden heraus, ob das Barrierefreiheitsstärkungsgesetz (BFSG) für Ihr Unternehmen gilt. Kostenloser Schnell-Check von PDF-4all.de.",
  openGraph: {
    title: "BFSG-Check: Bin ich betroffen?",
    description:
      "Kostenloser Schnell-Check: In 2 Minuten wissen, ob das BFSG für Ihr Unternehmen gilt.",
    url: "https://www.pdf-4all.de/bfsg-check",
  },
};

export default function BFSGCheckPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative bg-[#1a365d] text-white overflow-hidden">
        <GridPattern
          width={40}
          height={40}
          squares={[[4, 3], [9, 1], [13, 2], [17, 4], [21, 1], [24, 3], [27, 2], [30, 4]]}
          className="fill-white/[0.07] stroke-white/[0.08] [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 py-8 md:py-12">
          <p className="text-sm font-medium text-white/70 mb-1 tracking-wide uppercase">
            Kostenloser Schnell-Check
          </p>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            BFSG-Check: Bin ich betroffen?
          </h1>
          <p className="mt-2 text-white/80 text-base md:text-lg leading-relaxed">
            Finden Sie in unter 60 Sekunden heraus, ob das Barrierefreiheitsstärkungsgesetz für Ihr
            Unternehmen gilt.
          </p>
        </div>
      </header>

      {/* Checker (includes progress bar + step content) */}
      <BFSGChecker />

      {/* Disclaimer */}
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 py-6 text-center">
          <p className="text-sm text-slate-400">
            Dieser Check dient zur ersten Orientierung und ersetzt keine Rechtsberatung.
          </p>
          <p className="text-sm text-slate-400 mt-2">
            Ein Tool von{" "}
            <a
              href="https://www.pdf-4all.de"
              className="text-[#1a365d] hover:underline font-medium"
            >
              PDF-4all.de
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
