"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, ChevronDown, Tags, FormInput, Archive,
  ImageIcon, ShieldCheck, Handshake, FileCheck, Search, FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { siteConfig } from "@/lib/config";
import { blogPosts } from "@/lib/blog-data";
import { services } from "@/lib/services-data";
import { dropdownMenu } from "@/lib/animations";

const serviceIconMap: Record<string, React.ElementType> = {
  Tags, FormInput, Archive, ImageIcon, ShieldCheck, Handshake, FileCheck,
};

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const recentPosts = blogPosts.slice(0, 3);
  const servicesCol1 = services.slice(0, 3);
  const servicesCol2 = services.slice(3, 6);

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" aria-label={siteConfig.company.name}>
          <Image
            src="/logo.png"
            alt={siteConfig.company.name}
            width={200}
            height={50}
            priority
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {siteConfig.navigation.map((item) => {

            if (item.label === "Leistungen") {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu("leistungen")}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-[#1a365d] transition-colors py-2">
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openMenu === "leistungen" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openMenu === "leistungen" && (
                      <div className="absolute left-0 top-full pt-2 z-50">
                        <motion.div
                          variants={dropdownMenu}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="bg-white border border-slate-200 shadow-md p-5 w-max"
                        >
                          <div className="flex flex-col gap-4">
                            {/* Zeile 1: 2 Leistungs-Spalten */}
                            <div className="flex gap-6">
                              {/* Spalte 1 */}
                              <div>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                  Leistungen
                                </p>
                                <ul className="space-y-1">
                                  {servicesCol1.map((s) => {
                                    const Icon = serviceIconMap[s.icon] || FileCheck;
                                    return (
                                      <li key={s.slug}>
                                        <Link
                                          href={`/leistungen/${s.slug}`}
                                          className="flex items-center gap-3 group px-2 py-1.5 -mx-2 hover:bg-slate-50 transition-colors duration-150"
                                        >
                                          <div className="flex w-7 h-7 shrink-0 items-center justify-center border border-slate-200 text-[#1a365d] group-hover:bg-[#1a365d] group-hover:text-white transition-colors duration-200">
                                            <Icon className="w-3.5 h-3.5" />
                                          </div>
                                          <p className="text-sm font-medium text-slate-700 group-hover:text-[#1a365d] transition-colors whitespace-nowrap">
                                            {s.title}
                                          </p>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>

                              <div className="w-px bg-slate-100" />

                              {/* Spalte 2 */}
                              <div>
                                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                  &nbsp;
                                </p>
                                <ul className="space-y-1">
                                  {servicesCol2.map((s) => {
                                    const Icon = serviceIconMap[s.icon] || FileCheck;
                                    return (
                                      <li key={s.slug}>
                                        <Link
                                          href={`/leistungen/${s.slug}`}
                                          className="flex items-center gap-3 group px-2 py-1.5 -mx-2 hover:bg-slate-50 transition-colors duration-150"
                                        >
                                          <div className="flex w-7 h-7 shrink-0 items-center justify-center border border-slate-200 text-[#1a365d] group-hover:bg-[#1a365d] group-hover:text-white transition-colors duration-200">
                                            <Icon className="w-3.5 h-3.5" />
                                          </div>
                                          <p className="text-sm font-medium text-slate-700 group-hover:text-[#1a365d] transition-colors whitespace-nowrap">
                                            {s.title}
                                          </p>
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>

                            {/* Trennlinie */}
                            <div className="h-px bg-slate-100" />

                            {/* Zeile 2: Tools */}
                            <div>
                              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                                Tools
                              </p>
                              <Link
                                href="/bfsg-check"
                                className="flex items-center gap-3 group px-2 py-1.5 -mx-2 hover:bg-slate-50 transition-colors duration-150"
                              >
                                <div className="flex w-7 h-7 shrink-0 items-center justify-center border border-slate-200 text-[#1a365d] group-hover:bg-[#1a365d] group-hover:text-white transition-colors duration-200">
                                  <Search className="w-3.5 h-3.5" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-slate-700 group-hover:text-[#1a365d] transition-colors">
                                    BFSG-Checker
                                  </p>
                                  <p className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors">
                                    In 2 Minuten prüfen, ob Ihr Unternehmen betroffen ist.
                                  </p>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (item.label === "Blog") {
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenMenu("blog")}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-[#1a365d] transition-colors py-2">
                    {item.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openMenu === "blog" ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openMenu === "blog" && (
                      <div className="absolute left-0 top-full pt-2 z-50">
                        <motion.div
                          variants={dropdownMenu}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="bg-white border border-slate-200 shadow-md p-5 w-80"
                        >
                          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                            Neueste Beiträge
                          </p>
                          <ul className="space-y-1">
                            {recentPosts.map((post) => (
                              <li key={post.slug}>
                                <Link
                                  href={`/blog/${post.slug}`}
                                  className="flex items-start gap-3 group px-2 py-1.5 -mx-2 hover:bg-slate-50 transition-colors duration-150"
                                >
                                  <div className="flex w-7 h-7 shrink-0 items-center justify-center border border-slate-200 text-[#1a365d] group-hover:bg-[#1a365d] group-hover:text-white transition-colors duration-200 mt-0.5">
                                    <FileText className="w-3.5 h-3.5" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-medium text-slate-700 group-hover:text-[#1a365d] transition-colors leading-snug line-clamp-2">
                                      {post.title}
                                    </p>
                                    <p className="text-xs text-slate-400 group-hover:text-slate-600 transition-colors mt-0.5">
                                      {post.category} · {post.readingTime} Min.
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 pt-3 border-t border-slate-100">
                            <Link
                              href="/blog"
                              className="text-xs font-medium text-[#1a365d] hover:underline"
                            >
                              Alle Artikel ansehen →
                            </Link>
                          </div>
                        </motion.div>
                      </div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            // Normale Links (Startseite, Kontakt)
            return (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-[#1a365d] transition-colors"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right */}
        <div className="hidden lg:flex items-center gap-4">
          <Button asChild size="sm">
            <Link href="/kontakt">Anfrage</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="lg:hidden p-2" aria-label="Menü öffnen">
              <Menu className="w-6 h-6 text-slate-700" />
            </button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              {siteConfig.navigation.map((item) =>
                item.children ? (
                  <div key={item.label} className="flex flex-col gap-2">
                    <span className="text-sm font-bold text-[#1a365d]">{item.label}</span>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="text-sm text-slate-600 hover:text-[#1a365d] pl-4"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-medium text-slate-700 hover:text-[#1a365d]"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Button asChild className="mt-2">
                <Link href="/kontakt" onClick={() => setOpen(false)}>
                  Anfrage senden
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
