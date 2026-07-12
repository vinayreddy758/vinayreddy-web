import portrait from "@/assets/portrait.jpg";
import { Reveal } from "./Reveal";

const tags = ["Freelance", "Remote, worldwide", "Replies within 24h"];

const paragraphs = [
  "I'm Vinay Reddy AD — a freelance web designer and developer helping small businesses build a strong online presence.",
  "A website should do more than look good. It should build trust, generate enquiries and help your business grow — on every device, at every screen size.",
  "I work one-to-one with clinics, restaurants, salons, law firms and local brands to deliver clean, fast websites that reflect the business and stand up over time.",
];

export function About() {
  return (
    <section id="about" className="px-6 py-16 md:py-32 bg-neutral-50 border-y border-black/5">
      <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-10 md:gap-16 items-start">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-200 shadow-[var(--shadow-soft)]">
              <img
                src={portrait}
                alt="Portrait of Vinay Reddy AD, freelance web designer and developer"
                width={1024}
                height={1280}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white rounded-2xl px-5 py-4 shadow-[var(--shadow-soft)] border border-black/5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                Now booking
              </div>
              <div className="font-semibold text-sm mt-0.5">Q3 — Q4 projects</div>
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-7" delay={120}>
          <div className="font-mono text-[10px] uppercase tracking-widest text-brand mb-5">
            About
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-balance">
            Helping small businesses build a strong online presence.
          </h2>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white border border-black/5 px-3.5 py-1.5 text-sm font-medium text-neutral-700">
            <span className="size-1.5 rounded-full bg-brand" />
            Founder — Vinay Reddy AD
          </div>

          <div className="mt-8 space-y-5 text-neutral-700 leading-relaxed text-[17px] text-pretty">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 rounded-full bg-white border border-black/5 text-xs font-medium text-neutral-700"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
