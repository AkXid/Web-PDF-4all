"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { Button } from "@/components/ui/button";
import { faqs } from "@/lib/config";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="bg-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4">

        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8">
            Häufige Fragen
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="w-full border-t border-slate-200">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-slate-200">

                {/* Frage / Toggle */}
                <button
                  onClick={() => toggle(i)}
                  aria-expanded={openIndex === i}
                  className="w-full flex items-center justify-between py-4 text-left gap-4 group"
                >
                  <span
                    className={`text-base font-medium transition-colors duration-200 ${
                      openIndex === i
                        ? "text-[#1a365d]"
                        : "text-slate-700 group-hover:text-slate-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-colors duration-200 ${
                        openIndex === i ? "text-[#1a365d]" : "text-slate-400"
                      }`}
                    />
                  </motion.div>
                </button>

                {/* Antwort / Animated */}
                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      key={`answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.22, ease: "easeOut" },
                          opacity: { duration: 0.15, delay: 0.06 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.18, ease: "easeIn" },
                          opacity: { duration: 0.1 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 text-slate-600 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Noch Fragen? */}
        <RevealOnScroll>
          <div className="mt-6 pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-bold text-slate-900 text-lg">
                  Noch weitere Fragen?
                </p>
                <p className="text-slate-500 text-sm mt-0.5">
                  Ich helfe Ihnen gerne persönlich weiter.
                </p>
              </div>
              <Button
                asChild
                className="bg-[#1a365d] hover:bg-[#2b5ea7] text-white rounded-md shrink-0 gap-2"
              >
                <Link href="/kontakt">
                  Jetzt Kontakt aufnehmen <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}
