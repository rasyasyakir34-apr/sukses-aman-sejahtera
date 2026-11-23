import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { site } from "@/lib/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "CV. Sukses Aman Sejahtera — General Supplier Palembang",
    template: "%s — CV. Sukses Aman Sejahtera",
  },
  description:
    "General supplier di Palembang sejak 2013 untuk material bangunan, geosintetik, perlengkapan K3, alat teknik, laboratorium sipil, dan kebutuhan proyek konstruksi.",
  keywords: [
    "supplier Palembang",
    "general supplier Palembang",
    "supplier material bangunan Palembang",
    "pengadaan proyek konstruksi",
    "perlengkapan K3 Palembang",
    "geotextile Palembang",
    "alat laboratorium teknik sipil",
    "CV Sukses Aman Sejahtera",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  category: "business",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    siteName: site.name,
    title: "CV. Sukses Aman Sejahtera — General Supplier Palembang",
    description:
      "Material tepat, proyek jalan. Pengadaan material dan perlengkapan proyek konstruksi di Palembang sejak 2013.",
    images: [
      {
        url: "/images/5.jpg",
        width: 750,
        height: 550,
        alt: "Proyek Jembatan Musi IV Palembang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CV. Sukses Aman Sejahtera — General Supplier Palembang",
    description:
      "Pengadaan material dan perlengkapan proyek konstruksi di Palembang sejak 2013.",
    images: ["/images/5.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#1c5bff",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "GeneralContractor"],
      "@id": `${site.url}/#business`,
      name: site.name,
      alternateName: "Sukses Aman Sejahtera",
      url: site.url,
      telephone: site.phoneRaw,
      email: site.email,
      foundingDate: "2013",
      description: site.tagline,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Jl. Merbau No.66, 9 Ilir, Ilir Timur II",
        addressLocality: "Palembang",
        addressRegion: "Sumatera Selatan",
        addressCountry: "ID",
      },
      areaServed: ["Palembang", "Sumatera Selatan", "Indonesia"],
      knowsAbout: [
        "Pengadaan material konstruksi",
        "Perlengkapan K3",
        "Geotextile dan geomembrane",
        "Alat laboratorium teknik sipil",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "id-ID",
      publisher: { "@id": `${site.url}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${bricolage.variable} ${manrope.variable}`}
    >
      <body className="flex min-h-screen flex-col overflow-x-clip">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-signal px-5 py-3 text-sm font-bold text-white transition-transform focus:translate-y-0"
        >
          Lewati ke konten
        </a>
        <ScrollProgress />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <WhatsAppFab />
        <ScrollReveal />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
