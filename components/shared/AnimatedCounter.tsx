"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { counterReveal } from "@/lib/animations";

interface AnimatedCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  label: string;
}

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 1.5,
  label,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      variants={counterReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-center"
    >
      <span className="font-mono text-2xl md:text-3xl font-bold">
        {prefix}{count}{suffix}
      </span>
      <span className="block text-sm text-white/70 mt-1">{label}</span>
    </motion.div>
  );
}
