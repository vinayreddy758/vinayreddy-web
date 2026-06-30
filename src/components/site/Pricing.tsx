import { Reveal } from "./Reveal";

const tiers = [
  {
    name: "Essential",
    blurb: "A focused single-page site for new businesses establishing presence.",
    includes: [
      "Up to 1 page, fully bespoke",
      "Mobile-first responsive build",
      "Contact form + WhatsApp link",
      "SEO basics & analytics",
      "Launch support",
    ],
    cta: "Start small",
    featured: false,
  },
  {
    name: "Professional",
    blurb: "A complete multi-page website for established businesses ready to grow.",
    includes: [
      "Up to 6 bespoke pages",
      "Premium visual system",
      "Enquiry & booking flows",
      "SEO-ready structure",
      "Content management setup",
      "30 days of post-launch care",
    ],
    cta: "Most teams pick this",
    featured: true,
  },
  {
    name: "Custom",
    blurb: "Bigger scopes — redesigns, multi-language, integrations, ongoing retainer.",
    includes: [
      "Discovery & strategy phase",
      "Tailored scope & timeline",
      "Integrations as required",
      "Ongoing maintenance retainer",
    ],
    cta: "Let's talk",
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-24 md:py-32 bg-neutral-50 border-y border-black/5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-brand mb-4">
                Engagements
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] max-w-2xl text-balance">
                Transparent scopes. Quote sent within 24 hours.
              </h2>
            </div>
            <p className="text-neutral-500 md:max-w-xs">
              Final pricing depends on scope and content. Reach out for a tailored quote.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <div
                className={`h-full p-8 rounded-3xl border transition-all ${
                  t.featured
                    ? "bg-foreground text-background border-foreground shadow-[var(--shadow-elegant)]"
                    : "bg-white border-black/5 hover:border-foreground/20"
                }`}
              >
                {t.featured && (
                  <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-mono text-[color:var(--accent-orange)] mb-4">
                    <span className="size-1.5 rounded-full bg-[color:var(--accent-orange)]" />
                    Most popular
                  </div>
                )}
                <h3 className="text-2xl font-extrabold tracking-tight">{t.name}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${t.featured ? "text-white/70" : "text-neutral-500"}`}>
                  {t.blurb}
                </p>
                <ul className="mt-8 space-y-3 text-sm">
                  {t.includes.map((inc) => (
                    <li key={inc} className="flex items-start gap-3">
                      <span
                        className={`mt-1 size-1.5 rounded-full shrink-0 ${
                          t.featured ? "bg-[color:var(--accent-orange)]" : "bg-brand"
                        }`}
                      />
                      <span className={t.featured ? "text-white/90" : "text-neutral-700"}>{inc}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-10 inline-flex w-full justify-center items-center gap-2 px-5 py-3.5 rounded-full font-semibold text-sm transition-colors ${
                    t.featured
                      ? "bg-background text-foreground hover:bg-[color:var(--accent-orange)] hover:text-white"
                      : "bg-foreground text-background hover:bg-brand"
                  }`}
                >
                  {t.cta}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
