import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { GridPattern } from "@/components/ui/grid-pattern";
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
        <GridPattern
          width={40}
          height={40}
          squares={[[3, 1], [8, 3], [13, 2], [17, 1], [21, 4], [24, 2], [27, 3], [31, 1]]}
          className="fill-white/[0.07] stroke-white/[0.08] [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]"
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4">
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
