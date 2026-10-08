"use client";

import { useState } from "react";
import { ChevronDown, Info } from "lucide-react";

import { faqs, faqNote } from "@/data/site";
import { SectionHeading } from "@/components/SectionHeading";
import { FadeIn } from "@/components/FadeIn";

export function FAQ() {
  // Track the open item by index; null = all collapsed.
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-sand py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          description="Helpful general information — your consultation covers anything specific to you."
        />

        <FadeIn className="mx-auto mt-12 max-w-3xl">
          <dl className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-canvas shadow-soft">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;
              return (
                <div key={faq.question}>
                  <dt>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-plum-soft/50 sm:px-6"
                    >
                      <span className="font-serif text-lg text-ink">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={20}
                        aria-hidden="true"
                        className={`shrink-0 text-plum transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </dt>
                  <dd
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    hidden={!isOpen}
                    className="px-5 pb-6 text-sm leading-relaxed text-muted sm:px-6"
                  >
                    {faq.answer}
                  </dd>
                </div>
              );
            })}
          </dl>

          {/* Consultation reassurance note */}
          <p className="mt-6 flex items-start gap-2 text-center text-sm text-muted">
            <Info size={18} className="mt-0.5 shrink-0 text-plum" aria-hidden="true" />
            <span className="text-left">{faqNote}</span>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
