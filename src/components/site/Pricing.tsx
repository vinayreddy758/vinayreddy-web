import { Reveal } from "./Reveal";

type Tier = {
  name: string;
  price: string;
  blurb: string;
  bestFor: string[];
  includes: string[];
  delivery?: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Essential Website",
    price: "Starting at ₹8k",
    blurb: "A focused site to launch your business online.",
    bestFor: ["New businesses", "Personal brands", "Landing pages"],
    includes: [
      "1–3 pages",
      "Mobile responsive",
      "Contact form",
      "WhatsApp integration",
      "Basic SEO",
    ],
    delivery: "5–7 days",
  },
  {
    name: "Business Website",
    price: "Starting at ₹15k",
    blurb: "A complete website for growing local businesses.",
    bestFor: ["Clinics", "Salons", "Restaurants", "Local businesses"],
    includes: [
      "Up to 8 pages",
      "Custom design",
      "Admin panel to edit content",
      "Contact forms",
      "WhatsApp integration",
      "Google Maps",
      "Basic SEO",
      "Speed optimization",
      "30 days support",
    ],
    delivery: "7–14 days",
    featured: true,
  },

  {
    name: "Premium Website",
    price: "Starting at ₹25k",
    blurb: "A stronger, richer presence for established businesses.",
    bestFor: ["Established businesses", "Brands needing a stronger presence"],
    includes: [
      "Everything in Business",
      "Advanced animations",
      "Blog or CMS",
      "Booking or enquiry system",
      "Premium UI/UX",
      "Performance optimization",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="px-6 py-16 md:py-32 bg-neutral-50 border-y border-black/5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
            <div className="min-w-0">
              <div className="font-mono text-[10px] uppercase tracking-widest text-brand mb-4">
                Pricing
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] max-w-2xl text-balance">
                Simple & transparent pricing.
              </h2>
            </div>
            <p className="text-neutral-500 md:max-w-xs">
              Final quote depends on scope and content. Reply within 24 hours.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 60}>
              <div
                className={`h-full p-8 rounded-3xl border transition-all flex flex-col ${
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
                <div className={`mt-2 text-sm font-semibold ${t.featured ? "text-[color:var(--accent-orange)]" : "text-brand"}`}>
                  {t.price}
                </div>
                <p className={`mt-3 text-sm leading-relaxed ${t.featured ? "text-white/70" : "text-neutral-500"}`}>
                  {t.blurb}
                </p>

                <div className="mt-6">
                  <div className={`text-[10px] uppercase tracking-widest font-mono mb-2 ${t.featured ? "text-white/60" : "text-neutral-400"}`}>
                    Best for
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {t.bestFor.map((b) => (
                      <span
                        key={b}
                        className={`px-2.5 py-1 rounded-full text-xs ${
                          t.featured
                            ? "bg-white/10 text-white/80"
                            : "bg-neutral-100 text-neutral-700"
                        }`}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <div className={`text-[10px] uppercase tracking-widest font-mono mb-3 ${t.featured ? "text-white/60" : "text-neutral-400"}`}>
                    Includes
                  </div>
                  <ul className="space-y-2.5 text-sm">
                    {t.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-3">
                        <span
                          className={`mt-1.5 size-1.5 rounded-full shrink-0 ${
                            t.featured ? "bg-[color:var(--accent-orange)]" : "bg-brand"
                          }`}
                        />
                        <span className={t.featured ? "text-white/90" : "text-neutral-700"}>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {t.delivery && (
                  <div className={`mt-6 text-xs font-medium ${t.featured ? "text-white/70" : "text-neutral-500"}`}>
                    Delivery: {t.delivery}
                  </div>
                )}

                <a
                  href="#contact"
                  className={`mt-8 inline-flex w-full justify-center items-center gap-2 px-5 py-3.5 rounded-full font-semibold text-sm transition-colors mt-auto ${
                    t.featured
                      ? "bg-background text-foreground hover:bg-[color:var(--accent-orange)] hover:text-white"
                      : "bg-foreground text-background hover:bg-brand"
                  }`}
                >
                  Request Quote
                  <span aria-hidden>→</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-xs md:text-sm text-neutral-500 max-w-3xl leading-relaxed">
            <span className="font-semibold text-neutral-700">Not included:</span> Domain, hosting,
            business email, premium third-party services and annual renewal charges. These are
            billed separately and remain the client's responsibility.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
