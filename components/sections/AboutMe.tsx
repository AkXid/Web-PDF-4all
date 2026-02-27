"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/lib/config";
import { Shield, Award, Briefcase } from "lucide-react";

export function AboutMe() {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {/* Zwei-Spalten-Layout: Text links, Foto rechts */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">
            {/* Text-Spalte */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2">
                Über mich
              </h2>
              <p className="text-xl font-semibold text-slate-700 mb-5">
                Hola, ich bin Dragan.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Seit 2014 arbeite ich als Freelancer – remote von Spanien aus, für Kunden im DACH-Raum – und unterstütze meine Kunden dabei, Dokumente zu erstellen, die nicht nur professionell aussehen, sondern auch wirklich für alle zugänglich sind. Barrierefreiheit ist für mich kein Pflichtprogramm – es ist ein Qualitätsmerkmal, das ich in jedes Projekt einbringe.
              </p>
              <p className="text-slate-600 leading-relaxed mb-6">
                Seit meinen Anfängen arbeite ich eng mit einem langjährigen Partner in der Schweiz zusammen – eine Zusammenarbeit, die auf gegenseitigem Vertrauen und gemeinsamen Ansprüchen an Qualität gewachsen ist. Diese Kontinuität spiegelt wider, wofür ich stehe: Verlässlichkeit, Sorgfalt und ein echtes Interesse daran, dass Ihre Dokumente den Unterschied machen.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="accent" className="flex items-center gap-1.5 px-3 py-1.5">
                  <Shield className="w-3.5 h-3.5" />
                  {siteConfig.company.certification}
                </Badge>
                <Badge variant="accent" className="flex items-center gap-1.5 px-3 py-1.5">
                  <Award className="w-3.5 h-3.5" />
                  {siteConfig.socialProof.yearsExperience} Jahre Erfahrung
                </Badge>
                <Badge variant="accent" className="flex items-center gap-1.5 px-3 py-1.5">
                  <Briefcase className="w-3.5 h-3.5" />
                  {siteConfig.socialProof.completedProjects}+ Projekte
                </Badge>
              </div>
            </div>

            {/* Foto-Spalte */}
            <div className="flex-shrink-0 mt-4 md:mt-28">
              <div className="rounded-2xl overflow-hidden shadow-lg ring-4 ring-white">
                <div style={{ marginTop: "-40px" }}>
                  <Image
                    src="/Bild_Dragan.png"
                    alt="Dragan Bena – PDF/UA Accessibility Spezialist"
                    width={220}
                    height={304}
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
