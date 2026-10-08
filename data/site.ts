/**
 * ─────────────────────────────────────────────────────────────────────────
 *  Allure Laser Hair Treatment Center — single source of truth for content.
 * ─────────────────────────────────────────────────────────────────────────
 *  Edit everything here. Fields marked `// REPLACE` are placeholders: swap in
 *  the real values, then delete the comment. Do not add prices, guarantees,
 *  medical claims, or reviews that the business has not approved.
 */

import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  ShieldCheck,
  HeartHandshake,
  Cpu,
  CalendarCheck,
  Stethoscope,
  RefreshCw,
  ScanFace,
  PersonStanding,
  Hand,
  Footprints,
  Flower2,
} from "lucide-react";

/* ── Business facts ──────────────────────────────────────────────────────
 * Real, confirmed values are filled in. Anything marked // REPLACE is a
 * placeholder — update it before launch.
 */
export const business = {
  name: "Allure Laser Hair Treatment Center",
  shortName: "Allure Laser",
  tagline: "Laser Hair Removal in Winnipeg",

  // Confirmed location (city/region). Street address not yet provided:
  address: {
    street: "74 Mandalay Dr", // REPLACE with the real street address + suite
    city: "Winnipeg",
    region: "MB",
    postalCode: "R2P 1V8", // REPLACE with the real postal code
    country: "CA",
  },

  phone: "+1 (204) 632-1606", // REPLACE with the real phone number (used for tel: link + display)
  email: "hello@example.com", // REPLACE with the real email (used for mailto: link + display)

  // Opening hours, shown in the Contact section. Edit days/times as needed.
  hours: [
    { day: "Monday", time: "12 p.m.-7 p.m." }, // REPLACE with real hours
    { day: "Tuesday - Saturday", time: "10:30 a.m.-7 p.m." }, // REPLACE with real hours
    { day: "Sunday", time: "Closed" }, // REPLACE with real hours
  ],

  // Leave empty ("") to route all "Book" buttons to the contact form.
  // Set to a real booking URL to send visitors there instead.
  bookingUrl: "", // REPLACE (optional) with an online booking link, e.g. "https://..."

  // Real links / coordinates (confirmed).
  facebookUrl:
    "https://www.facebook.com/people/Allure-Laser-Hair-Treatment-Center/100063693246287/",
  mapsUrl:
    "https://www.google.com/maps/place/Allure+Laser+Hair+Treatment/@49.9481268,-97.1831822,17z/data=!4m6!3m5!1s0x52ea7213c87f5f61:0xe327893cc1fc56dd!8m2!3d49.9481268!4d-97.1831822!16s%2Fg%2F1tdgv148",
  geo: { lat: 49.9481268, lng: -97.1831822 },

  // Canonical site URL (used for metadata, Open Graph, sitemap, JSON-LD).
  // GitHub Pages project site. Change this if you add a custom domain.
  siteUrl: "https://navdeepsingh06.github.io/allure",
};

/* Derived helpers for tel:/mailto: links (strip spaces/format chars). */
export const telHref = `tel:${business.phone.replace(/[^+\d]/g, "")}`;
export const mailtoHref = `mailto:${business.email}`;

/*
 * Contact form endpoint (for static hosting like GitHub Pages — there is no
 * backend). Point this at a form service that accepts a POST, e.g.
 * Formspree ("https://formspree.io/f/xxxxxxx") or Web3Forms. Leave it ""
 * to fall back to opening the visitor's email app with the message prefilled.
 */
export const contactFormEndpoint = ""; // REPLACE (optional) with your form service URL

/*
 * Base path for a GitHub Pages *project* site (https://<user>.github.io/<repo>/).
 * Set automatically by the deploy workflow; empty for a user site / custom domain.
 * next/image and next/link handle this for you — it's exposed here only so
 * absolute metadata URLs (Open Graph) can include it.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/*
 * Prefix a local asset path (e.g. /images/hero.jpg) with the base path.
 * Needed for <Image> on a project Pages site, because next/image does NOT
 * auto-prepend basePath to `unoptimized` local images. Returns the path
 * unchanged when basePath is empty (user site / custom domain).
 */
export const asset = (p: string) => `${basePath}${p}`;

/* ── Navigation ──────────────────────────────────────────────────────── */
export const nav = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

/* ── Hero ────────────────────────────────────────────────────────────── */
export const hero = {
  eyebrow: "Laser Hair Removal · Winnipeg, MB",
  headline: "Smooth, Confident Skin. Long-Term.",
  subheadline:
    "Personalized laser hair removal in a calm, private setting — thoughtful care from your first consultation through every session.",
  // Hero image lives in /public/images. Swap the file or change this path.
  image: "/images/hero.jpg",
  imageAlt:
    "Calm, softly lit treatment room with neutral tones at a laser hair removal clinic.",
};

/* ── Services ────────────────────────────────────────────────────────────
 * Honest, general area descriptions. Add, remove, or reword freely.
 * No prices are shown unless you add them to the business-approved copy.
 * Each card uses a Lucide icon (swap `icon` for any lucide-react icon).
 */
export interface Service {
  icon: LucideIcon;
  name: string;
  description: string;
}

export const services: Service[] = [
  {
    icon: ScanFace,
    name: "Face & Upper Lip",
    description:
      "Gentle, precise treatment for delicate facial areas including the upper lip and chin.",
  },
  {
    icon: PersonStanding,
    name: "Underarms",
    description:
      "A quick, popular treatment area — smooth underarms with minimal fuss.",
  },
  {
    icon: Hand,
    name: "Arms",
    description:
      "Full or half arm treatments for consistently smooth, low-maintenance skin.",
  },
  {
    icon: Footprints,
    name: "Legs",
    description:
      "Full or lower leg sessions designed to reduce regrowth over time.",
  },
  {
    icon: Flower2,
    name: "Bikini & Brazilian",
    description:
      "Comfortable, private treatment with tailored coverage to suit you.",
  },
  {
    icon: Sparkles,
    name: "Full Body",
    description:
      "Combine multiple areas into a personalized plan for head-to-toe smoothness.",
  },
];

/* ── Ambiance band ───────────────────────────────────────────────────────
 * A single full-width atmospheric image with a short, honest line of copy.
 */
export const ambiance = {
  image: "/images/ambiance.jpg",
  imageAlt: "Calm, warmly lit spa interior with natural wood and soft lighting.",
  quote: "A calm, private space — because comfort is part of the result.",
};

/* ── Why Choose Us ───────────────────────────────────────────────────── */
export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyUs: Feature[] = [
  {
    icon: Sparkles,
    title: "Professional Treatments",
    description:
      "Every session is carried out with care, attention, and respect for your comfort.",
  },
  {
    icon: ShieldCheck,
    title: "Comfortable & Private",
    description:
      "A calm, discreet space designed to put you at ease from arrival to aftercare.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Plans",
    description:
      "Treatments are tailored to your skin, hair, and goals — never one-size-fits-all.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description:
      "We use modern laser equipment suited to a range of skin and hair types.",
  },
];

/* ── How It Works (3 steps) ──────────────────────────────────────────── */
export interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const steps: Step[] = [
  {
    icon: Stethoscope,
    title: "Consultation",
    description:
      "We review your skin, hair, and goals, answer your questions, and confirm suitability.",
  },
  {
    icon: CalendarCheck,
    title: "Treatment",
    description:
      "Comfortable, focused sessions spaced to work with your hair's natural growth cycle.",
  },
  {
    icon: RefreshCw,
    title: "Follow-Up",
    description:
      "We track your progress and adjust your plan so results build over time.",
  },
];

/* ── FAQ ─────────────────────────────────────────────────────────────────
 * General, honest answers. A consultation always confirms suitability.
 */
export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "How many sessions will I need?",
    answer:
      "Because hair grows in cycles, most people need a series of sessions spaced several weeks apart for the best results. The exact number varies by area, skin, and hair type — your consultation gives you a realistic, personalized estimate.",
  },
  {
    question: "Does laser hair removal hurt?",
    answer:
      "Most people describe the sensation as a quick, warm snap. Comfort varies by area and individual, and we work at a pace that keeps you at ease throughout the session.",
  },
  {
    question: "How should I prepare for my appointment?",
    answer:
      "Generally, shave the area the day before, avoid plucking or waxing beforehand, and keep the skin out of direct sun. We'll give you specific preparation guidance based on your treatment at your consultation.",
  },
  {
    question: "What is aftercare like?",
    answer:
      "The treated area may be slightly pink or warm for a short time. We typically recommend gentle skincare, sun protection, and avoiding heat or friction for a day or two. You'll receive clear aftercare instructions after each session.",
  },
  {
    question: "Is laser hair removal suitable for me?",
    answer:
      "Laser treatments can suit many skin and hair types, but suitability depends on your individual profile. A consultation lets us assess your skin and hair and recommend the right approach — or let you know if it isn't the best fit.",
  },
  {
    question: "How long does a session take?",
    answer:
      "It depends on the area — smaller areas such as the upper lip or underarms can take just a few minutes, while larger areas take longer. We'll outline expected timing during your consultation.",
  },
];

/* Reassurance note shown under the FAQ. */
export const faqNote =
  "Every treatment plan begins with a consultation to confirm suitability for your skin and hair.";

/* ── Legal / footer ──────────────────────────────────────────────────── */
export const legal = {
  privacyUrl: "#", // REPLACE with a link to your privacy policy page
  // SEO / social sharing description (also used for Open Graph).
  seoDescription:
    "Allure Laser Hair Treatment Center offers personalized laser hair removal in Winnipeg, MB — face, underarms, arms, legs, bikini, and full body. Book a consultation today.",
};
