import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog – Wissen rund um PDF/UA & Barrierefreiheit",
  description:
    "Aktuelle Artikel, Tipps und Fachwissen zu barrierefreien Dokumenten, PDF/UA, WCAG und dem Barrierefreiheitsstärkungsgesetz (BFSG).",
};

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-[#1a365d] text-white py-16 md:py-20 overflow-hidden">
        {/* Hintergrund-Grafik: Dokumenten-Linien */}
        <svg
          className="absolute right-0 top-0 h-full w-1/2 opacity-[0.06] pointer-events-none"
          viewBox="0 0 400 300"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Dokument-Umriss */}
          <rect x="60" y="20" width="200" height="260" rx="6" fill="none" stroke="white" strokeWidth="3" />
          {/* Ecke umgeklappt */}
          <path d="M220 20 L260 60 L220 60 Z" fill="white" opacity="0.5" />
          <path d="M220 20 L260 60" fill="none" stroke="white" strokeWidth="3" />
          {/* Textzeilen */}
          <line x1="85" y1="90" x2="235" y2="90" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="85" y1="115" x2="235" y2="115" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="85" y1="140" x2="235" y2="140" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="85" y1="165" x2="200" y2="165" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="85" y1="190" x2="235" y2="190" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="85" y1="215" x2="175" y2="215" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="85" y1="240" x2="235" y2="240" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          {/* Zweites Dokument versetzt im Hintergrund */}
          <rect x="140" y="50" width="200" height="260" rx="6" fill="none" stroke="white" strokeWidth="2" opacity="0.4" />
          <line x1="165" y1="120" x2="315" y2="120" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          <line x1="165" y1="145" x2="315" y2="145" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
          <line x1="165" y1="170" x2="280" y2="170" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        </svg>

        <div className="relative max-w-6xl mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">
            Fachwissen, Praxis-Tipps und aktuelle Entwicklungen rund um PDF/UA,
            Barrierefreiheit und die gesetzlichen Anforderungen.
          </p>
        </div>
      </section>

    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">

        {blogPosts.length === 0 ? (
          <div className="bg-[#1a365d] px-8 py-16 flex flex-col items-center justify-center text-center">
            <Clock className="w-12 h-12 text-[#d97706] mb-5" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Coming Soon
            </h2>
            <p className="text-white/70 max-w-md text-base leading-relaxed">
              Hier erscheinen bald Fachartikel, Praxis-Tipps und aktuelle
              Entwicklungen rund um barrierefreie Dokumente.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group border border-slate-200 bg-white hover:border-[#1a365d]/30 transition-colors flex flex-col"
              >
                {/* Kategorie-Streifen */}
                <div className="bg-[#1a365d] px-4 py-2">
                  <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>

                {/* Inhalt */}
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-[#1a365d] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-100">
                    <span>{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime} Min.
                    </span>
                  </div>

                  {/* CTA */}
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#b45309] group-hover:gap-2 transition-all">
                    Artikel lesen
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
    </>
  );
}
