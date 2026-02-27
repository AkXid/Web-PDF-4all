"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { siteConfig } from "@/lib/config";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-sm shadow-md"
          : "bg-white"
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
          {siteConfig.navigation.map((item) =>
            item.children ? (
              <div key={item.label} className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-[#1a365d] transition-colors">
                  {item.label}
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <div className="bg-white border border-slate-200 shadow-md py-2 min-w-[220px]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#1a365d] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-[#1a365d] transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
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
