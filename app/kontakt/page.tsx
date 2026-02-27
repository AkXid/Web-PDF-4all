"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/config";
import { services } from "@/lib/services-data";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

// ⚠️  FORMSPREE: Deine Form-ID hier eintragen!
// 1. Geh auf https://formspree.io und erstelle ein neues Formular
// 2. Ersetze "DEINE_FORM_ID" mit deiner echten ID (z.B. "xpwzabcd")
const FORMSPREE_ENDPOINT = "https://formspree.io/f/DEINE_FORM_ID";

const contactSchema = z.object({
  anrede: z.string().min(1, "Bitte wählen Sie eine Anrede"),
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  phone: z.string().optional(),
  subject: z.string().min(1, "Bitte wählen Sie einen Betreff"),
  message: z.string().min(10, "Bitte beschreiben Sie Ihr Anliegen (mind. 10 Zeichen)"),
  privacy: z.literal(true, { message: "Bitte akzeptieren Sie die Datenschutzerklärung" }),
  // 🍯 Honeypot – muss leer bleiben, wird für Menschen versteckt
  website: z.string().max(0, "").optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactForm) => {
    // 🍯 Honeypot-Check: Feld ausgefüllt = Bot → still ignorieren
    if (data.website) return;

    setSubmitError(null);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          anrede: data.anrede,
          name: data.name,
          email: data.email,
          telefon: data.phone || "–",
          betreff: data.subject,
          nachricht: data.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        const json = await response.json();
        setSubmitError(
          json?.errors?.[0]?.message ||
            "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut."
        );
      }
    } catch {
      setSubmitError(
        "Verbindungsfehler. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut."
      );
    }
  };

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-3">
          Kontakt aufnehmen
        </h1>
        <p className="text-slate-600 leading-relaxed mb-10 max-w-2xl">
          Schildern Sie mir Ihr Anliegen – ich melde mich innerhalb von 24 Stunden bei Ihnen.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 p-8 text-center">
                <h2 className="text-xl font-bold text-green-800 mb-2">Vielen Dank!</h2>
                <p className="text-green-700">
                  Ich melde mich innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* 🍯 Honeypot – für Menschen unsichtbar, Bots füllen es aus */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <label htmlFor="website">Website leer lassen</label>
                  <input
                    type="text"
                    id="website"
                    {...register("website")}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Anrede *</label>
                    <select
                      {...register("anrede")}
                      className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a365d]"
                    >
                      <option value="">Bitte wählen</option>
                      <option value="Herr">Herr</option>
                      <option value="Frau">Frau</option>
                      <option value="Divers">Divers</option>
                    </select>
                    {errors.anrede && <p className="text-red-500 text-xs mt-1">{errors.anrede.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Name *</label>
                    <Input {...register("name")} placeholder="Ihr vollständiger Name" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">E-Mail *</label>
                    <Input {...register("email")} type="email" placeholder="ihre@email.de" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Telefon</label>
                    <Input {...register("phone")} type="tel" placeholder="Optional" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Betreff *</label>
                  <select
                    {...register("subject")}
                    className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1a365d]"
                  >
                    <option value="">Bitte wählen</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Sonstiges">Sonstiges</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Nachricht *</label>
                  <Textarea {...register("message")} rows={5} placeholder="Beschreiben Sie Ihr Projekt oder Anliegen..." />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    {...register("privacy")}
                    id="privacy"
                    className="mt-1 h-4 w-4 rounded border-slate-300"
                  />
                  <label htmlFor="privacy" className="text-sm text-slate-600">
                    Ich habe die{" "}
                    <a href="/datenschutz" className="text-[#1a365d] underline">Datenschutzerklärung</a>{" "}
                    gelesen und bin mit der Verarbeitung meiner Daten einverstanden. *
                  </label>
                </div>
                {errors.privacy && <p className="text-red-500 text-xs">{errors.privacy.message}</p>}

                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-700 text-sm">
                    {submitError}
                  </div>
                )}

                <Button type="submit" size="lg" disabled={isSubmitting} className="gap-2">
                  <Send className="w-4 h-4" />
                  {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
                </Button>
              </form>
            )}
          </div>

          {/* Contact info sidebar */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-4">Direkt erreichen</h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#1a365d] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-slate-900">Telefon</p>
                    <a href={`tel:${siteConfig.company.phone.replace(/\s/g, "")}`} className="hover:text-[#1a365d]">
                      {siteConfig.company.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#1a365d] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-slate-900">E-Mail</p>
                    <a href={`mailto:${siteConfig.company.email}`} className="hover:text-[#1a365d]">
                      {siteConfig.company.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1a365d] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-slate-900">Adresse</p>
                    <p>{siteConfig.company.address.street}</p>
                    <p>{siteConfig.company.address.zip} {siteConfig.company.address.city}</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#1a365d] mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-slate-900">Erreichbarkeit</p>
                    <p>{siteConfig.company.openingHours.weekdays}</p>
                    <p>Sa: {siteConfig.company.openingHours.saturday}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
