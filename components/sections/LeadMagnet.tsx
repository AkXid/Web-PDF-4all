"use client";
import { useState } from "react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { leadMagnetContent, siteConfig } from "@/lib/config";
import { Download } from "lucide-react";

export function LeadMagnet() {
  const [vorname, setVorname] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  if (siteConfig.features.leadMagnet === "none" || !siteConfig.features.leadMagnet) return null;

  function isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");

    if (!isValidEmail(email)) {
      setErrorMsg("Bitte geben Sie eine gültige E-Mail-Adresse ein.");
      return;
    }

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
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-3">
            {leadMagnetContent.title}
          </h2>
          <p className="text-white/80 leading-relaxed mb-8">
            {leadMagnetContent.subtitle}
          </p>

          {status === "success" ? (
            <div className="bg-white/10 rounded-md px-6 py-4 text-white text-lg font-medium">
              ✅ Fast geschafft! Bitte prüfen Sie Ihre E-Mail und bestätigen Sie Ihre Anmeldung.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center mx-auto">
              <div>
                <label htmlFor="leadmagnet-name" className="sr-only">Name</label>
                <input
                  id="leadmagnet-name"
                  type="text"
                  placeholder="Ihr Name"
                  value={vorname}
                  onChange={(e) => setVorname(e.target.value)}
                  className="w-36 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <div>
                <label htmlFor="leadmagnet-email" className="sr-only">E-Mail</label>
                <input
                  id="leadmagnet-email"
                  type="email"
                  placeholder="Ihre E-Mail"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-40 px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#b45309] hover:bg-[#d97706] text-white font-semibold px-5 py-2 rounded-md shrink-0 transition-colors disabled:opacity-50"
              >
                {status === "loading" ? "Wird gesendet..." : leadMagnetContent.cta}
              </button>
            </form>
          )}

          {errorMsg && (
            <p className="mt-3 text-red-300 text-sm">{errorMsg}</p>
          )}
          {status === "error" && !errorMsg && (
            <p className="mt-3 text-red-300 text-sm">Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.</p>
          )}

          {/* Sekundärer CTA – BFSG-Check */}
          <div className="mt-8 flex items-center gap-4">
            <div className="flex-1 border-t border-white/20" />
            <span className="text-white/50 text-sm shrink-0">oder</span>
            <div className="flex-1 border-t border-white/20" />
          </div>
          <div className="mt-6">
            <p className="text-white/70 text-sm mb-3">
              Finden Sie in 2 Minuten heraus, ob Ihr Unternehmen betroffen ist.
            </p>
            <a
              href="/bfsg-check"
              className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-5 py-2 rounded-md transition-colors"
            >
              BFSG-Check starten
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
