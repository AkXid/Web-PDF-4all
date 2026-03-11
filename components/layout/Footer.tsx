import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, Clock, Linkedin, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { ProtectedLink } from "@/components/shared/ProtectedText";
import { services } from "@/lib/services-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <Link href="/" className="inline-block mb-4" aria-label={siteConfig.company.name}>
              <Image
                src="/logo.png"
                alt={siteConfig.company.name}
                width={140}
                height={35}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-3">
              {siteConfig.company.claim}
            </p>
            {siteConfig.company.certification && (
              <p className="text-sm text-slate-400 mb-4">
                {siteConfig.company.certification}
              </p>
            )}
            {/* LinkedIn Icon – Link wird noch ergänzt */}
            <a
              href="https://www.linkedin.com/in/dragan-bena"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dragan Bena auf LinkedIn"
              className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-slate-700 hover:bg-[#0077b5] text-slate-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-slate-300 mb-3">
              Leistungen
            </h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/leistungen/${service.slug}`}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="border-t border-slate-700 mt-4 pt-4">
              <p className="text-xs uppercase tracking-wider text-slate-500 mb-2">Tools</p>
              <Link
                href="/bfsg-check"
                className="text-sm text-slate-400 hover:text-white transition-colors"
              >
                BFSG-Check
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-slate-300 mb-3">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                <ProtectedLink
                  textParts={["info", "@pdf", "-4all", ".de"]}
                  hrefParts={["mail", "to:i", "nfo@pdf", "-4all.de"]}
                  className="hover:text-white transition-colors"
                />
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                <ProtectedLink
                  textParts={["+34", " 613", " 590", " 301"]}
                  hrefParts={["tel:+34", "613", "590", "301"]}
                  className="hover:text-white transition-colors"
                />
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5 shrink-0" />
                <span>{siteConfig.company.openingHours.weekdays}</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  {siteConfig.company.address.street}<br />
                  {siteConfig.company.address.zip} {siteConfig.company.address.city}<br />
                  España
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-slate-300 mb-3">
              Rechtliches
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="text-sm text-slate-400 hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-sm text-slate-400 hover:text-white transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-10 pt-6 text-center text-sm text-slate-500">
          &copy; {year} {siteConfig.company.name}. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
