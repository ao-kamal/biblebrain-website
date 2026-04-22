"use client";

import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
}

const offsetMap = {
  up: { y: 32, x: 0 },
  left: { y: 0, x: -32 },
  right: { y: 0, x: 32 },
  none: { y: 0, x: 0 },
} as const;

export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3, delay } },
      }
    : {
        hidden: { opacity: 0, ...offsetMap[direction] },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay },
        },
      };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}
