import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPost, getAllSlugs } from "@/lib/blog-data";
import { Clock, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} – Blog`,
    description: post.metaDescription,
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("de-DE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

// Einfacher Markdown-zu-HTML Converter (ohne externe Abhängigkeiten)
function renderMarkdown(content: string): string {
  return content
    // H2 Überschriften
    .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold text-slate-900 tracking-tight mt-10 mb-4">$1</h2>')
    // H3 Überschriften
    .replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold text-slate-900 mt-8 mb-3">$1</h3>')
    // Fett
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-bold text-slate-900">$1</strong>')
    // Absätze
    .split("\n\n")
    .map((block) => {
      if (block.startsWith("<h")) return block;
      if (block.trim() === "") return "";
      return `<p class="text-slate-700 leading-relaxed mb-5">${block.replace(/\n/g, " ")}</p>`;
    })
    .join("\n");
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <article className="bg-white py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4">

        {/* Zurück-Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-[#1a365d] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Alle Artikel
        </Link>

        {/* Kategorie */}
        <div className="mb-4">
          <span className="text-xs font-medium text-white bg-[#1a365d] px-3 py-1 uppercase tracking-wider">
            {post.category}
          </span>
        </div>

        {/* Titel */}
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-4 text-sm text-slate-400 pb-8 border-b border-slate-200 mb-8">
          <span>{formatDate(post.date)}</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime} Min. Lesezeit
          </span>
        </div>

        {/* Artikel-Inhalt */}
        <div
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
        />

        {/* CTA am Ende */}
        <div className="mt-12 bg-[#1a365d] px-8 py-8">
          <p className="text-white font-bold text-lg mb-2">
            Ihre Dokumente auf Barrierefreiheit prüfen lassen?
          </p>
          <p className="text-white/70 text-sm mb-5 leading-relaxed">
            Ein kurzer Check zeigt Ihnen, wo Ihre PDFs stehen – und was zu tun ist.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-[#b45309] hover:bg-[#d97706] text-white text-sm font-medium px-5 py-2.5 transition-colors"
          >
            Jetzt Kontakt aufnehmen →
          </Link>
        </div>

        {/* Zurück-Navigation */}
        <div className="mt-8 pt-8 border-t border-slate-200">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-[#1a365d] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Blog-Übersicht
          </Link>
        </div>
      </div>
    </article>
  );
}
