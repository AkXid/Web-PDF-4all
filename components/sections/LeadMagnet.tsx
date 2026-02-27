"use client";

import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { leadMagnetContent, siteConfig } from "@/lib/config";
import { Download } from "lucide-react";

// Brevo-Formular-Endpunkt (aus dem Brevo-Dashboard kopiert)
const BREVO_FORM_URL =
  "https://aa59aa08.sibforms.com/serve/MUIFALMuGSShu4CR611F9hD-1ewcUvlQM5MWYgbSTKtDZmY9FCmQlhHZi2HahZC4LRIhlr_fZwCbmOplTNKNHyzEBPFYOb3zY0QEmay3IkzP_pY2OA6GsnFuhL0jzoUocli4d2QdRyHitq6UaYD2HnAPAP05Rz420UNqrEJ-QDFj-nMHAKeXOcWmGAlOZPWtaizhTMbAoRrM9HJvWQ==";

export function LeadMagnet() {
  if (siteConfig.features.leadMagnet === "none" || !siteConfig.features.leadMagnet) return null;

  return (
    <section className="bg-[#1a365d] text-white py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <RevealOnScroll>
          <Download className="w-10 h-10 mx-auto mb-4 text-[#d97706]" />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            {leadMagnetContent.title}
          </h2>
          <p className="text-white/80 leading-relaxed mb-8">
            {leadMagnetContent.subtitle}
          </p>

          <form
            method="POST"
            action={BREVO_FORM_URL}
            className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto"
          >
            <input
              type="text"
              name="VORNAME"
              placeholder="Ihr Name"
              className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              name="EMAIL"
              placeholder="Ihre E-Mail"
              required
              className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input type="text" name="email_address_check" value="" readOnly className="hidden" />
            <input type="hidden" name="locale" value="de" />
            <input type="hidden" name="html_type" value="simple" />
            <button
              type="submit"
              className="bg-[#b45309] hover:bg-[#d97706] text-white font-semibold px-5 py-2 rounded-md shrink-0 transition-colors"
            >
              {leadMagnetContent.cta}
            </button>
          </form>
        </RevealOnScroll>
      </div>
    </section>
  );
}
