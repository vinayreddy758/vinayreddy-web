import trustAdvocate from "@/assets/trust-advocate.jpg";
import glowcare from "@/assets/glowcare.jpg";
import prestige from "@/assets/prestige-events.jpg";
import { Reveal } from "./Reveal";

type Project = {
  name: string;
  category: string;
  tag: string;
  image: string;
  problem: string;
  solution: string;
  features: string[];
  href: string;
};

const projects: Project[] = [
  {
    name: "Trust Advocate",
    category: "Legal & Advocacy",
    tag: "Trust-focused",
    image: trustAdvocate,
    problem:
      "An advocacy practice needed an online presence that matched the seriousness of their work and gave prospects a clear next step.",
    solution:
      "A composed, authoritative website built around clarity — practice areas, credentials, and a calm path to a first consultation.",
    features: ["Practice areas", "Consultation enquiry flow", "Editorial typography", "Fast on mobile"],
    href: "https://trust-advocate-web.lovable.app/",
  },
  {
    name: "GlowCare",
    category: "Beauty & Healthcare",
    tag: "Conversion-led",
    image: glowcare,
    problem:
      "A skincare clinic wanted a digital home that felt as considered as the experience inside the studio.",
    solution:
      "An elegant, image-led layout with clear treatments and a low-friction booking surface designed for repeat visits.",
    features: ["Treatment catalogue", "Appointment CTA", "Soft, premium branding", "Mobile-first"],
    href: "https://glowcare-site.lovable.app/",
  },
  {
    name: "Prestige Events",
    category: "Event Management",
    tag: "Multi-page",
    image: prestige,
    problem:
      "A full-service event company needed a structured site to present services, past work, and an easy way to enquire.",
    solution:
      "A multi-page architecture with strong section navigation, a portfolio surface, and a quote enquiry funnel.",
    features: ["Services pages", "About & process", "Portfolio gallery", "Enquiry form"],
    href: "https://prestigeeevents.com/about.php",
  },
];

export function Projects() {
  return (
    <section id="work" className="px-6 py-24 md:py-32 bg-neutral-950 text-white">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-14 md:mb-20">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--accent-orange)] mb-4">
              Selected work
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-balance max-w-3xl">
              Three recent builds, each shaped around a real business outcome.
            </h2>
          </div>
        </Reveal>

        <div className="space-y-20 md:space-y-28">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <article className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
                <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="block group relative overflow-hidden rounded-2xl bg-neutral-900 ring-1 ring-white/10"
                  >
                    <img
                      src={p.image}
                      alt={`${p.name} website preview`}
                      width={1600}
                      height={1000}
                      loading="lazy"
                      className="w-full h-auto aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </a>
                </div>
                <div className={`md:col-span-5 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="flex flex-wrap gap-2 mb-5 font-mono text-[10px] uppercase tracking-widest">
                    <span className="px-2.5 py-1 border border-white/15 rounded-full text-white/70">
                      {p.category}
                    </span>
                    <span className="px-2.5 py-1 bg-[color:var(--accent-orange)]/15 text-[color:var(--accent-orange)] rounded-full">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-5">{p.name}</h3>
                  <div className="space-y-4 text-neutral-400 leading-relaxed text-pretty">
                    <p>
                      <span className="text-white/80 font-medium">Problem · </span>
                      {p.problem}
                    </p>
                    <p>
                      <span className="text-white/80 font-medium">Solution · </span>
                      {p.solution}
                    </p>
                  </div>
                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-neutral-300">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="size-1 rounded-full bg-[color:var(--accent-orange)]" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-8 inline-flex items-center gap-2 text-white font-semibold border-b border-white/40 hover:border-white pb-1 transition-colors"
                  >
                    Visit website
                    <span aria-hidden>↗</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
