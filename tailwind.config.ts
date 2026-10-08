import type { Config } from "tailwindcss";

/**
 * Theme is driven by CSS variables declared in app/globals.css (:root).
 * To rebrand, change the variable values there — these tokens stay the same.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm white canvas + soft blush/sand neutrals
        canvas: "rgb(var(--color-canvas) / <alpha-value>)",
        sand: "rgb(var(--color-sand) / <alpha-value>)",
        blush: "rgb(var(--color-blush) / <alpha-value>)",
        // Text
        ink: "rgb(var(--color-ink) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
        // Single refined accent: deep plum
        plum: {
          DEFAULT: "rgb(var(--color-plum) / <alpha-value>)",
          hover: "rgb(var(--color-plum-hover) / <alpha-value>)",
          soft: "rgb(var(--color-plum-soft) / <alpha-value>)",
        },
        line: "rgb(var(--color-line) / <alpha-value>)",
      },
      fontFamily: {
        // Wired to next/font CSS variables set in app/layout.tsx
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "var(--radius-xl)",
        "2xl": "var(--radius-2xl)",
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        lift: "var(--shadow-lift)",
      },
      maxWidth: {
        container: "76rem",
      },
      letterSpacing: {
        tightish: "-0.015em",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-max, 500px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
