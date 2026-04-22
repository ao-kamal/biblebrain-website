import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionLabel } from "@/components/ui/SectionLabel";

const pillars = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    title: "Television-Based Competition",
    description:
      "Broadcast-ready formats that bring the competition to a wider audience and amplify the reach of the platform.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 4.5h3" />
      </svg>
    ),
    title: "Digital Engagement",
    description:
      "Leveraging digital platforms to extend reach beyond physical events, engaging teenagers wherever they are.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
    title: "School & Church Participation",
    description:
      "Deep integration with schools and churches, creating a grassroots network of young people engaged with Scripture.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
      </svg>
    ),
    title: "Global Expansion Framework",
    description:
      "A scalable model designed to cross borders — from Nigeria to the world, engaging teenagers across nations.",
  },
];

export function OurModel() {
  return (
    <section className="bg-[#F5F5F5] py-24 lg:py-32">
      <Container>
        <AnimatedSection className="mb-16 text-center">
          <SectionLabel className="mb-4 block">How We Work</SectionLabel>
          <h2 className="font-display text-3xl font-bold text-[#0A1F44] sm:text-4xl">
            Our Model
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[#0A1F44]/60">
            A multi-channel platform built for depth, scale, and long-term impact.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <AnimatedSection key={pillar.title} delay={i * 0.12} direction="up">
              <div className="flex gap-5 rounded-2xl bg-white p-7 shadow-sm">
                <div className="mt-0.5 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0A1F44] text-[#D4AF37]">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="mb-2 font-display text-lg font-bold text-[#0A1F44]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#0A1F44]/60">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
