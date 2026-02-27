"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { heroContent, siteConfig } from "@/lib/config";
import { heroReveal, stagger } from "@/lib/animations";
import { Shield, FileCheck, Users, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-[#1a365d] text-white min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero-Bild rechts mit weichem Übergang */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      >
        <Image
          src="/hero-image.png"
          alt="Barrierefreie PDF-Dokumente"
          fill
          className="object-cover object-center opacity-[0.12]"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 md:py-32">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-3xl md:max-w-xl lg:max-w-2xl"
        >
          <motion.h1
            variants={heroReveal}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-white"
          >
            {heroContent.headline}
          </motion.h1>
          <motion.p
            variants={heroReveal}
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl"
          >
            {heroContent.subline}
          </motion.p>
          <motion.div variants={heroReveal} className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="bg-[#b45309] hover:bg-[#d97706] text-white rounded-md">
              <Link href="/kontakt">{heroContent.ctaPrimary}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1a365d] rounded-md bg-transparent"
            >
              <Link href="/kontakt">{heroContent.ctaSecondary}</Link>
            </Button>
          </motion.div>
          <motion.div
            variants={heroReveal}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#d97706]" />
              <span className="text-sm text-white/80">{siteConfig.socialProof.yearsExperience} Jahre Erfahrung</span>
            </div>
            <div className="flex items-center gap-2">
              <FileCheck className="w-5 h-5 text-[#d97706]" />
              <span className="text-sm text-white/80">{siteConfig.socialProof.completedProjects}+ Projekte</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#d97706]" />
              <span className="text-sm text-white/80">ISO 14289-1</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#d97706]" />
              <span className="text-sm text-white/80">Behörden & Unternehmen</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
