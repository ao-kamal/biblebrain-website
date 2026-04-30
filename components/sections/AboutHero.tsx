"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/images/gallery/biblebrain/image19.jpeg')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[#0A1F44]/80" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37]">
            Our Story
          </span>
          <h1 className="mb-6 font-display text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            About Bible Brain<span className="text-[#D4AF37]">®</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/75 md:text-xl">
            A structured, long-term Scripture engagement platform combining faith,
            education, and media to guide teenagers through Scripture in a structured
            and engaging way.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
