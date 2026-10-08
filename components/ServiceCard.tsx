import { ArrowRight } from "lucide-react";

import type { Service } from "@/data/site";
import { bookHref, bookIsExternal } from "@/lib/booking";

/** A single, reusable service card: icon, area name, one line, Book link. */
export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-line bg-canvas p-7 shadow-soft transition-shadow duration-300 hover:shadow-lift">
      <span
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-plum-soft text-plum transition-colors duration-300 group-hover:bg-plum group-hover:text-canvas"
        aria-hidden="true"
      >
        <Icon size={26} />
      </span>

      <h3 className="mt-6 text-xl">{service.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {service.description}
      </p>

      <a
        href={bookHref}
        {...(bookIsExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-plum transition-colors hover:text-plum-hover"
        aria-label={`Book ${service.name}`}
      >
        Book
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </a>
    </article>
  );
}
