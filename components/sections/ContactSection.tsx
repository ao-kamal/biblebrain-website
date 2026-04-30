"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";
import { submitContact } from "@/app/actions/contact";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "message@biblebrain.ng",
    href: "mailto:message@biblebrain.ng",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
    label: "YouTube",
    value: "@biblebrainng",
    href: "https://www.youtube.com/@biblebrainng",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    label: "Website",
    value: "www.biblebrain.ng",
    href: "https://www.biblebrain.ng",
  },
];

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    startTransition(async () => {
      const result = await submitContact(data);
      if (result.success) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    });
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mb-10 text-center sm:mb-16">
          <SectionLabel className="mb-4 block">Contact</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#0A1F44]/60">
            Whether you&apos;re interested in partnering, sponsoring, or learning more —
            we&apos;d love to hear from you.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Contact info */}
          <AnimatedSection direction="left">
            <h3 className="mb-8 font-display text-xl font-bold text-[#0A1F44]">
              Reach Us Directly
            </h3>
            <ul className="mb-10 space-y-5">
              {contactInfo.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 text-[#0A1F44]/70 transition hover:text-[#0A1F44]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] transition group-hover:bg-[#D4AF37] group-hover:text-[#0A1F44]">
                      {item.icon}
                    </span>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-[#0A1F44]/40">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>

            {/* Partnership note */}
            <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-6">
              <p className="text-sm font-semibold text-[#0A1F44]">
                Interested in sponsorship?
              </p>
              <p className="mt-1 text-sm text-[#0A1F44]/60">
                Mention it in your message and we&apos;ll send you the full sponsorship
                deck with package details.
              </p>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection direction="right" delay={0.1}>
            {status === "success" ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl bg-green-50 p-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-8 w-8 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-[#0A1F44]">
                  Message Sent!
                </h3>
                <p className="mb-6 text-[#0A1F44]/60">
                  Thank you for reaching out. We&apos;ll be in touch soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-sm font-semibold text-[#D4AF37] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-[#0A1F44]">
                    Full Name <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your full name"
                    {...register("name")}
                    className="w-full rounded-xl border border-[#0A1F44]/15 bg-[#F5F5F5] px-4 py-3.5 text-[#0A1F44] placeholder-[#0A1F44]/30 transition focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-[#0A1F44]">
                    Email Address <span className="text-[#D4AF37]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    {...register("email")}
                    className="w-full rounded-xl border border-[#0A1F44]/15 bg-[#F5F5F5] px-4 py-3.5 text-[#0A1F44] placeholder-[#0A1F44]/30 transition focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-[#0A1F44]">
                    Message <span className="text-[#D4AF37]">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us about your interest in Bible Brain®..."
                    {...register("message")}
                    className="w-full resize-none rounded-xl border border-[#0A1F44]/15 bg-[#F5F5F5] px-4 py-3.5 text-[#0A1F44] placeholder-[#0A1F44]/30 transition focus:border-[#D4AF37] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>
                  )}
                </div>

                {status === "error" && (
                  <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isPending}
                  className="w-full disabled:opacity-60"
                >
                  {isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
