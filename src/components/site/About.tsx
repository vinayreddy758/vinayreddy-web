import portrait from "@/assets/portrait.jpg";
import { Reveal } from "./Reveal";

const tags = ["Freelance", "Remote, worldwide", "Replies within 24h"];

const paragraphs = [
  "I'm a freelance web designer and developer focused on building modern, high-performing websites for small businesses.",
  "I believe a website should do more than look good — it should build trust, generate enquiries, and help businesses grow.",
  "Every project is designed with usability, speed, responsiveness, and professionalism in mind so that visitors have a great experience on every device.",
  "Whether it's a clinic, restaurant, salon, law firm, startup, or local business, I create websites that reflect the brand and make a lasting first impression.",
  "I work closely with every client, understand their goals, and deliver websites that are clean, fast, easy to manage, and built for long-term success.",
];

export function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32 bg-neutral-50 border-y border-black/5">
      <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-12 md:gap-16 items-start">
        <Reveal className="md:col-span-5">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-neutral-200 shadow-[var(--shadow-soft)]">
              <img
                src={portrait}
                alt="Portrait of the designer behind atelier.web"
                width={1024}
                height={1024}
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
