import { FadeIn } from "@/components/FadeIn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

/** Consistent eyebrow + serif title + optional lead for each section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <FadeIn className={`max-w-2xl ${alignment}`}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-plum">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
