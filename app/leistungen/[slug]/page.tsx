import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, getAllServiceSlugs } from "@/lib/services-data";
import { siteConfig } from "@/lib/config";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    keywords: service.seoKeywords,
  };
}

const defaultProcessSteps = [
  { step: "1", title: "Anfrage", desc: "Sie senden mir Ihr Dokument oder beschreiben Ihr Projekt." },
  { step: "2", title: "Analyse", desc: "Ich prüfe den Umfang und erstelle ein unverbindliches Angebot." },
  { step: "3", title: "Umsetzung", desc: "Ihr Dokument wird manuell bearbeitet und geprüft." },
  { step: "4", title: "Lieferung", desc: "Sie erhalten das fertige, normkonforme Dokument + PAC-Prüfbericht." },
];

export default async function LeistungPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const processSteps = service.processSteps ?? defaultProcessSteps;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@type": "ProfessionalService", name: siteConfig.company.name },
    areaServed: "DE",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Mini Hero */}
      <section className="bg-[#1a365d] text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Badge variant="accent" className="mb-4">Leistung</Badge>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">{service.title}</h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">{service.short}</p>
        </div>
      </section>

      {/* Problemstellung */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-6">Kennen Sie das?</h2>
          <ul className="space-y-3 max-w-2xl">
            {service.customerProblems.map((p, i) => (
              <li key={i} className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-[#b45309] mt-0.5 shrink-0" />
                <span className="text-slate-600 leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Lösung */}
      <section className="bg-slate-50 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">Meine Lösung</h2>
          <p className="text-slate-600 leading-relaxed max-w-3xl mb-8">{service.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.benefits.map((b, i) => (
              <Card key={i} className="border border-slate-200 bg-white">
                <CardContent className="p-6">
                  <CheckCircle className="w-6 h-6 text-green-600 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{b.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prozess */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-8">So läuft es ab</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((s, i) => (
              <div key={s.step} className="relative">
                <span className={`font-mono text-4xl font-bold block mb-2 ${i === processSteps.length - 1 ? "text-green-600" : "text-[#1a365d]"}`}>{s.step}</span>
                <h3 className="font-bold text-slate-900 mb-1">{s.title}</h3>
                <p className="text-sm text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a365d] text-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4">
            Interesse an {service.title}?
          </h2>
          <p className="text-white/80 mb-6">
            {service.ctaText ?? "Senden Sie mir Ihr Dokument – ich erstelle Ihnen ein unverbindliches Angebot."}
          </p>
          <Button asChild size="lg" className="bg-[#b45309] hover:bg-[#d97706] text-white rounded-md gap-2">
            <Link href="/kontakt">
              Jetzt Angebot anfragen <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
