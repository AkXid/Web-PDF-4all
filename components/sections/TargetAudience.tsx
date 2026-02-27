"use client";

import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { Badge } from "@/components/ui/badge";
import { Building2, Landmark, Users, Palette } from "lucide-react";

const audiences = [
  { icon: Landmark, label: "Behörden & öffentliche Stellen", desc: "BITV 2.0 konforme Dokumente" },
  { icon: Building2, label: "Unternehmen", desc: "BFSG-Pflichten erfüllen" },
  { icon: Users, label: "KMU & Mittelstand", desc: "Barrierefreie Kommunikation" },
  { icon: Palette, label: "Agenturen & Grafikbüros", desc: "White-Label-Kooperation" },
];

export function TargetAudience() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
            Für wen ich arbeite
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl">
            Deutschlandweit, online – kein Vor-Ort-Termin nötig. Ich arbeite mit Kunden aus dem
            gesamten DACH-Raum.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {audiences.map((a) => (
            <RevealOnScroll key={a.label}>
              <div className="bg-white border-2 border-transparent p-5 rounded-tl-none rounded-br-none rounded-tr-2xl rounded-bl-2xl hover:border-[#1a365d]/40 transition-colors duration-300 shadow-sm hover:shadow-md">
                <a.icon className="w-8 h-8 text-[#1a365d] mb-3" />
                <h3 className="font-bold text-sm text-slate-900 mb-1">{a.label}</h3>
                <p className="text-xs text-slate-500">{a.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {["Deutschlandweit", "Österreich", "Schweiz", "Remote / Online"].map((loc) => (
            <Badge key={loc} variant="outline" className="text-xs">
              {loc}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
