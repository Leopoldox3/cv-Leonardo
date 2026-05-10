import { Hero, About, Experience, Stack, Projects } from "@/components";
import CtaBanner from "@/components/ctaBanner";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Leonardo Palacios",
  jobTitle: "Software Developer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lima",
    addressCountry: "PE",
  },
  url: "https://leonardopalacios.dev",
  sameAs: [
    "https://github.com/Leopoldox3",
    "https://www.linkedin.com/in/leonardopal/",
  ],
  knowsAbout: ["React", "Flutter", "Node.js", "Supabase", "AWS", "AI Assistants"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Leonardo Palacios CV",
  url: "https://leonardopalacios.dev",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-dots-dark" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Hero />
        </div>
      </section>

      <section className="relative">
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400" />
        <div className="absolute inset-0 -z-10 bg-grid-soft" />
				<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
					<About />
					<Experience />
					<Stack />
					<Projects />
				</div>
      </section>

      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-dots-dark" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-green-400" />
          <CtaBanner />
        </div>
      </section>
    </>
  );
}
