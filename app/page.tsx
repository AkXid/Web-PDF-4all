import { HeroSection } from "@/components/sections/HeroSection";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { AboutMe } from "@/components/sections/AboutMe";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTABanner } from "@/components/sections/CTABanner";
import { siteConfig, faqs } from "@/lib/config";

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.company.name,
    description: siteConfig.seo.description,
    telephone: siteConfig.company.phone,
    email: siteConfig.company.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.company.address.street,
      postalCode: siteConfig.company.address.zip,
      addressLocality: siteConfig.company.address.city,
      addressCountry: "DE",
    },
    areaServed: "DE",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <HeroSection />
      <TrustBar />
      <TargetAudience />
      <ServicesGrid />
      <LeadMagnet />
      <FAQSection />
      <AboutMe />
      <CTABanner />
    </>
  );
}
