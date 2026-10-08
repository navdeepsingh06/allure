import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";

import { business, legal, basePath } from "@/data/site";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

// Open Graph / Twitter need the base path baked in (unlike next/image).
const ogImage = `${basePath}/images/hero.jpg`;

// Elegant serif for headings, clean sans for body — wired to Tailwind via
// the CSS variables referenced in tailwind.config.ts.
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  title: {
    default: `${business.name} | ${business.tagline}`,
    template: `%s | ${business.name}`,
  },
  description: legal.seoDescription,
  keywords: [
    "laser hair removal",
    "Winnipeg",
    "Manitoba",
    "hair removal clinic",
    business.name,
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: business.siteUrl,
    siteName: business.name,
    title: `${business.name} | ${business.tagline}`,
    description: legal.seoDescription,
    images: [
      {
        url: ogImage,
        width: 1600,
        height: 1067,
        alt: `${business.name} treatment room`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} | ${business.tagline}`,
    description: legal.seoDescription,
    images: [ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans antialiased">
        {/* Keyboard users can skip straight to the content */}
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-plum focus:px-4 focus:py-2 focus:text-canvas"
        >
          Skip to content
        </a>
        {children}
        <JsonLd />
      </body>
    </html>
  );
}
