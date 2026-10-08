import Image from "next/image";

import { ambiance, asset } from "@/data/site";
import { FadeIn } from "@/components/FadeIn";

/** Full-width atmospheric image divider with a short overlaid line. */
export function Ambiance() {
  return (
    <section
      aria-label="Our space"
      className="relative isolate flex min-h-[340px] items-center overflow-hidden md:min-h-[420px]"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={asset(ambiance.image)}
          alt={ambiance.imageAlt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark wash so the white quote meets AA contrast over the photo */}
        <div
          className="absolute inset-0 bg-ink/55"
          aria-hidden="true"
        />
      </div>

      <div className="container-page">
        <FadeIn>
          <p className="max-w-2xl font-serif text-2xl leading-snug text-canvas sm:text-3xl md:text-4xl">
            {ambiance.quote}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
