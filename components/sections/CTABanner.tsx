"use client";

import Link from "next/link";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { Button } from "@/components/ui/button";

export function CTABanner() {
  return (
    <section className="bg-[#1a365d] text-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Bereit für Ihr barrierefreies Dokument?
          </h2>
          <p className="text-white/80 leading-relaxed mb-8">
            In einem kurzen Gespräch klären wir Ihren Bedarf – unverbindlich und kostenlos.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-[#b45309] hover:bg-[#d97706] text-white rounded-md">
              <Link href="/kontakt">Kostenloses Erstgespräch anfragen</Link>
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
