"use client";
import { RevealOnScroll } from "@/components/shared/RevealOnScroll";
import { leadMagnetContent, siteConfig } from "@/lib/config";
import { Download } from "lucide-react";

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
          <iframe
            width="540"
            height="305"
            src="https://aa59aa08.sibforms.com/serve/MUIFAOClEhRVrwQChlmrs8v0bZsNOd-uSNgjXbnAC_xNBMbF6qSWb0EhjXAybr6nv6g6d4geYXXWbvUrf0yt7I5LPME8b2blEjxqV-wPtFUiK1I1e6vYEmH7E3IMBS1U6NMX3iprryzZ3Vb9nePaFvYzjVGC782jQxjgELio6ZTgGkODD_DBNUFOAIHJx5uJST9gV71hS94lQpFQ7g=="
            frameBorder="0"
            scrolling="auto"
            allowFullScreen
            style={{ display: "block", marginLeft: "auto", marginRight: "auto", maxWidth: "100%" }}
          />
        </RevealOnScroll>
      </div>
    </section>
  );
}
