"use client";

import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { siteConfig } from "@/lib/config";

export function TrustBar() {
  return (
    <section className="bg-[#1a365d] text-white pt-6 pb-10 border-t border-white/10 -mt-6 relative z-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <AnimatedCounter
          end={siteConfig.socialProof.yearsExperience}
          suffix=""
          label="Jahre Erfahrung"
        />
        <AnimatedCounter
          end={siteConfig.socialProof.completedProjects}
          suffix="+"
          label="Projekte abgeschlossen"
        />
        <AnimatedCounter
          end={siteConfig.socialProof.turnaroundDays}
          suffix=" Tage"
          label="Ø Bearbeitungszeit"
        />
      </div>
    </section>
  );
}
