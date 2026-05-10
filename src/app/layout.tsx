import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://leonardopalacios.dev"),
  title: "Leonardo Palacios | Software Developer",
  description:
    "Portfolio and CV of Leonardo Palacios, Software Developer focused on mobile, web, backend, and cloud engineering.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Leonardo Palacios | Software Developer",
    description:
      "Portfolio and CV of Leonardo Palacios, Software Developer focused on mobile, web, backend, and cloud engineering.",
    url: "/",
    siteName: "Leonardo Palacios CV",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "Leonardo Palacios Software Developer portfolio",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonardo Palacios | Software Developer",
    description:
      "Portfolio and CV of Leonardo Palacios, Software Developer focused on mobile, web, backend, and cloud engineering.",
    images: ["/og-cover.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body id="top" className="min-h-screen bg-background text-foreground antialiased">
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
