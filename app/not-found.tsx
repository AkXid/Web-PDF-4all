import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="text-6xl font-bold text-[#1a365d] mb-4">404</p>
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-slate-600 mb-8">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#1a365d] hover:bg-[#2b5ea7] text-white font-medium px-5 py-2.5 transition-colors"
        >
          Zur Startseite
        </Link>
      </div>
    </section>
  );
}
