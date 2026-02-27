"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          aria-label="Zurück nach oben"
          className="
            fixed bottom-6 right-6 z-50
            w-11 h-11
            flex items-center justify-center
            rounded-lg
            bg-slate-800/75 backdrop-blur-sm
            text-white
            shadow-lg
            border border-white/10
            hover:bg-slate-700/90
            hover:scale-110
            hover:shadow-xl
            active:scale-95
            transition-all duration-200
            cursor-pointer
          "
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
