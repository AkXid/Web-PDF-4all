"use client";
import { useState } from "react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { leadMagnetContent, siteConfig } from "@/lib/config";
import { Download } from "lucide-react";

export function LeadMagnet() {
  const [vorname, setVorname] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  if (siteConfig.features.leadMagnet === "none" || !siteConfig.features.leadMagnet) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vorname, email }),
    });

    if (res.ok) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

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

          {status === "success" ? (
            <div className="bg-white/10 rounded-md px-6 py-4 text-white text-lg font-medium">
              ✅ Fast geschafft! Bitte prüfe deine E-Mail und bestätige deine Anmeldung.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Ihr Name"
                value={vorname}
                onChange={(e) => setVorname(e.target.value)}
                className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <input
                type="email"
                placeholder="Ihre E-Mail"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#b45309] hover:bg-[#d97706] text-white font-semibold px-5 py-2 rounded-md shrink-0 transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Wird gesendet..." : leadMagnetContent.cta}
              </button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-red-300 text-sm">Etwas ist schiefgelaufen. Bitte versuche es erneut.</p>
          )}
        </RevealOnScroll>
      </div>
    </section>
  );
}
