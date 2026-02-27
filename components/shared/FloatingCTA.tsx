"use client";

import { useState, useEffect } from "react";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
      <a
        href={`mailto:${siteConfig.company.email}`}
        className="flex items-center justify-center gap-2 w-full bg-[#b45309] hover:bg-[#d97706] text-white py-3 px-6 rounded-md shadow-lg font-medium transition-colors"
      >
        <Mail className="w-5 h-5" />
        Jetzt anfragen
      </a>
    </div>
  );
}
