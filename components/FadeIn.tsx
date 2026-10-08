"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  /** Stagger helper: delay in seconds before this element animates. */
  delay?: number;
  /** Render as a different element if needed (defaults to div). */
  as?: "div" | "li" | "section";
}

/**
 * Subtle fade + rise on scroll into view. Fully disabled when the user
 * prefers reduced motion — content simply appears, no transform.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  as = "div",
}: FadeInProps) {
  const shouldReduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={shouldReduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
      whileInView={shouldReduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
