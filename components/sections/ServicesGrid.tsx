"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { stagger, fadeUp } from "@/lib/animations";
import { services } from "@/lib/services-data";
import { Tags, FormInput, Archive, ShieldCheck, ImageIcon, Handshake } from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Tags,
  FormInput,
  Archive,
  ShieldCheck,
  ImageIcon,
  Handshake,
};

export function ServicesGrid() {
  return (
    <section id="leistungen" className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-10">
            Meine Leistungen
          </h2>
        </RevealOnScroll>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || FileCheck;
            return (
              <motion.div key={service.slug} variants={fadeUp}>
                <Card className="border-2 border-transparent bg-white p-6 rounded-tl-none rounded-br-none rounded-tr-2xl rounded-bl-2xl hover:border-[#1a365d]/40 transition-colors duration-300 group h-full shadow-sm hover:shadow-md">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <CardTitle className="text-xl font-bold text-slate-900">{service.title}</CardTitle>
                      <div className="w-11 h-11 flex items-center justify-center bg-transparent rounded-lg text-[#1a365d] transition-all duration-300 group-hover:bg-[#1a365d] group-hover:text-white group-hover:scale-110 flex-shrink-0 ml-3">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-slate-600 leading-relaxed">{service.short}</p>
                    <Button variant="ghost" asChild className="mt-4 p-0 text-[#1a365d] group-hover:underline">
                      <Link href={`/leistungen/${service.slug}`}>Mehr erfahren →</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
