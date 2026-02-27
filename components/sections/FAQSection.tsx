"use client";

import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/config";

export function FAQSection() {
  return (
    <section id="faq" className="bg-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4">
        <RevealOnScroll>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-8">
            Häufige Fragen
          </h2>
        </RevealOnScroll>

        <RevealOnScroll>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealOnScroll>
      </div>
    </section>
  );
}
