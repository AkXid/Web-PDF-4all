"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { stagger, fadeUp } from "@/lib/animations";
import { testimonials } from "@/lib/config";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-10">
            Zitate
          </h2>
        </RevealOnScroll>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="shadow-sm border border-slate-100 h-full">
                <CardContent className="p-6">
                  <p className="text-slate-600 leading-relaxed mb-4 text-sm">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <p className="font-medium text-sm text-slate-900">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
