import Image from "next/image";
import { Phone } from "lucide-react";

import { hero, telHref, asset } from "@/data/site";
import { bookHref, bookIsExternal } from "@/lib/booking";
import { FadeIn } from "@/components/FadeIn";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Full-width soft background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={asset(hero.image)}
          alt={hero.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Warm wash for text legibility (AA) over the photo */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-canvas/95 via-canvas/80 to-canvas/40"
          aria-hidden="true"
        />
      </div>

      <div className="container-page flex min-h-[88vh] items-center pb-16 pt-28 sm:min-h-screen md:pt-32">
        <div className="max-w-2xl">
          <FadeIn>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-plum">
              {hero.eyebrow}
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <h1 className="text-4xl leading-[1.08] tracking-tightish sm:text-5xl md:text-6xl">
              {hero.headline}
            </h1>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {hero.subheadline}
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={bookHref}
                {...(bookIsExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="inline-flex items-center justify-center rounded-full bg-plum px-7 py-3.5 text-base font-semibold text-canvas shadow-soft transition-colors hover:bg-plum-hover"
              >
                Book a Consultation
              </a>
              <a
                href={telHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-plum/30 bg-canvas/70 px-7 py-3.5 text-base font-semibold text-plum backdrop-blur-sm transition-colors hover:bg-plum-soft"
              >
                <Phone size={18} aria-hidden="true" />
                Call Us
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
