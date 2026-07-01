import { Reveal } from "./Reveal";

const services = [
  { t: "Business Websites", d: "Authoritative sites that turn visitors into qualified enquiries." },
  { t: "Landing Pages", d: "Single-purpose pages built around one conversion goal." },
  { t: "Clinic Websites", d: "Calm, trustworthy design with simple booking flows." },
  { t: "Restaurant Websites", d: "Menus, ambience and reservations — beautiful on mobile." },
  { t: "Portfolio Websites", d: "Editorial showcases for studios, creatives and professionals." },
  { t: "Website Redesign", d: "Modernise a dated site without losing what already works." },
  { t: "Website Maintenance", d: "Ongoing care to keep your site fast, secure and current." },
  { t: "Responsive Design", d: "Considered layouts from phone to widescreen." },
  { t: "SEO-Friendly Development", d: "Semantic markup, fast metrics and clean URLs by default." },
  { t: "WhatsApp Integration", d: "One-tap enquiries direct to your phone." },
  { t: "Contact Forms", d: "Simple forms tuned for completion, not abandonment." },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
            <div className="min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-widest text-brand mb-4">
                What I do
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] max-w-2xl text-balance">
                A focused practice, built around one outcome — your business growing.
              </h2>
            </div>
            <p className="text-neutral-500 md:max-w-xs">
              Pick the engagement that fits, or start a conversation and we'll shape it together.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 40}>
              <article className="group h-full p-7 rounded-2xl border border-black/5 bg-white hover:bg-neutral-50 hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-bold text-lg tracking-tight">{s.t}</h3>
                  <span
                    aria-hidden
                    className="text-brand opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    →
                  </span>
                </div>
                <p className="mt-3 text-sm text-neutral-500 leading-relaxed">{s.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
