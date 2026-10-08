# Allure Laser Hair Treatment Center — Website

A single-page marketing site for **Allure Laser Hair Treatment Center** (Winnipeg, MB).
Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.
Calm, premium, accessible, and fast. Ships as a **static site** (no backend) and
deploys to **GitHub Pages** automatically via the included workflow.

---

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

Other scripts:

```bash
npm run build     # production build
npm run start     # serve the production build
npm run lint      # ESLint
```

Requires Node 18.18+ (tested on Node 24).

---

## Editing content

**All copy and business details live in one file: [`data/site.ts`](data/site.ts).**
You rarely need to touch the components.

Fields marked `// REPLACE` are placeholders — swap in the real values and
delete the comment. Before launch, fill in:

| Field | Where | Notes |
| --- | --- | --- |
| `business.address.street` / `postalCode` | `data/site.ts` | Street + suite + postal code |
| `business.phone` | `data/site.ts` | Powers the display + click-to-call `tel:` link |
| `business.email` | `data/site.ts` | Powers the display + `mailto:` link |
| `business.hours` | `data/site.ts` | Day/time rows shown in Contact |
| `business.bookingUrl` | `data/site.ts` | Leave `""` to route all "Book" buttons to the contact form; set a URL to send visitors there |
| `business.siteUrl` | `data/site.ts` | Your real domain (used for SEO, Open Graph, sitemap, JSON-LD) |
| `legal.privacyUrl` | `data/site.ts` | Link to your privacy policy |

Already filled with **real, confirmed** values: business name, city (Winnipeg, MB),
Facebook URL, Google Maps place link, and map coordinates. No prices, reviews,
credentials, or medical claims are included — add those only with the clinic's approval.

You can also edit the services list, "Why Us" points, the 3 steps, and the FAQ
array in the same file.

---

## Swapping images

Images live in [`public/images`](public/images):

- `hero.jpg` — hero background (recommended ~1600×1067)
- `ambiance.jpg` — full-width divider image (recommended ~1800×1200)

Replace the files (keep the same names) or change the paths in `data/site.ts`
(`hero.image` and `ambiance.image`). Images are served locally and lazy-loaded
via `next/image`; the hero is marked `priority`.

The service cards and other sections use **Lucide icons** (no photos). To change
a service icon, edit its `icon` in `data/site.ts` — import any icon from
[`lucide-react`](https://lucide.dev).

### Logo / wordmark
The header and footer use a text wordmark built from `business.shortName`.
To use an image logo, drop it in `public/images` and edit `components/Header.tsx`
and `components/Footer.tsx`.

---

## Rebranding colors & fonts

**Colors** are CSS variables in [`app/globals.css`](app/globals.css) under `:root`
(stored as `R G B` channels). Change them once and the whole site updates — the
Tailwind tokens in [`tailwind.config.ts`](tailwind.config.ts) read these variables
(`canvas`, `sand`, `blush`, `ink`, `muted`, `plum`, `plum.hover`, `plum.soft`, `line`).

**Fonts** are loaded with `next/font` in [`app/layout.tsx`](app/layout.tsx)
(Playfair Display for headings, DM Sans for body). Swap them there; they're wired
to Tailwind's `font-serif` / `font-sans` via CSS variables.

---

## Contact form (no backend)

This is a **static site** (see Deploying below), so the form can't post to a
server you run. The form (`components/ContactForm.tsx`) still validates with
**react-hook-form + zod** ([`lib/contactSchema.ts`](lib/contactSchema.ts)), then:

- **Out of the box (no setup):** it opens the visitor's email app with the
  message prefilled to `business.email` (a `mailto:` fallback).
- **Recommended:** point it at a free static form service so submissions arrive
  without the visitor needing an email client. Set `contactFormEndpoint` in
  [`data/site.ts`](data/site.ts) to your endpoint, e.g.:
  - [Formspree](https://formspree.io): `https://formspree.io/f/xxxxxxx`
  - [Web3Forms](https://web3forms.com) or [Getform](https://getform.io) also work.

  The form POSTs JSON `{ name, phone, email, service, message }` to that URL.

A hidden honeypot field (`company`) helps filter spam bots.

---

## Project structure

```
app/              layout, page, globals.css, sitemap, robots
components/        Header, Hero, Services + ServiceCard, Ambiance, WhyUs,
                   HowItWorks, FAQ, Contact + ContactForm, Footer, FadeIn,
                   SectionHeading, JsonLd
data/site.ts       ← all content
lib/               contactSchema.ts (zod), booking.ts (CTA target)
public/images/     hero.jpg, ambiance.jpg
public/.nojekyll   lets GitHub Pages serve the _next/ asset folder
.github/workflows/deploy.yml   builds + deploys to GitHub Pages on push
```

The site is configured for **static export** (`output: "export"` in
`next.config.mjs`) — `npm run build` writes a static `out/` folder. There is no
server runtime.

---

## Accessibility & SEO

- Semantic landmarks, skip-to-content link, keyboard-operable menu & FAQ accordion,
  visible focus states, alt text, labelled form fields.
- `prefers-reduced-motion` is respected globally and in animations.
- Page metadata + Open Graph + Twitter cards, `sitemap.xml`, `robots.txt`, and
  JSON-LD (`HealthAndBeautyBusiness`) using the real business details.

---

## Deploying to GitHub Pages

A workflow is included at `.github/workflows/deploy.yml` — it builds the static
site and publishes it on every push to `main`.

1. **Create a repo** and push this project to it.
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions.**
3. Push to `main` (or run the workflow from the **Actions** tab). The first run
   builds and deploys automatically.
4. Your site goes live at:
   - `https://<user>.github.io/<repo>/` for a normal repo (a *project* site), or
   - `https://<user>.github.io/` if the repo is named `<user>.github.io` (a *user* site).

### Base path (important for project sites)
A project site is served from a subfolder (`/<repo>/`), so assets must be
prefixed with it. **The workflow handles this automatically** by setting
`NEXT_PUBLIC_BASE_PATH` from the repo name (and leaving it empty for a user site
or a custom domain). You don't need to configure anything.

To build locally the way Pages does (e.g. to preview a subpath build):

```bash
# PowerShell
$env:NEXT_PUBLIC_BASE_PATH="/your-repo-name"; npm run build
# bash
NEXT_PUBLIC_BASE_PATH=/your-repo-name npm run build
# then serve ./out under /your-repo-name/
```

### Set your URL for SEO
In [`data/site.ts`](data/site.ts), set `business.siteUrl` to the **full deployed URL**,
including the subpath for a project site — e.g. `https://yourname.github.io/allure`.
This is used for canonical/Open Graph URLs, the sitemap, and JSON-LD.

### Custom domain (optional)
Add a file `public/CNAME` containing just your domain (e.g. `allurelaser.ca`),
configure the domain in **Settings → Pages**, and set `business.siteUrl` to
`https://your-domain`. With a custom domain the base path is empty (the workflow
detects the `CNAME` file and skips it).

> Deploys just as easily to Netlify, Cloudflare Pages, or any static host —
> point them at `npm run build` with publish directory `out`.
