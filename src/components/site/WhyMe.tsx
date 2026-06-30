import { Reveal } from "./Reveal";

const reasons = [
  { t: "Business-focused solutions", d: "Decisions are made against your outcomes, not design trends." },
  { t: "Premium modern design", d: "A high standard of craft, applied consistently across every page." },
  { t: "Mobile-first development", d: "Built for the device most of your visitors will actually use." },
  { t: "Fast-loading websites", d: "Lean code and considered assets — speed is a feature." },
  { t: "SEO-ready structure", d: "Clean semantics, metadata and performance set up from day one." },
  { t: "Clean user experience", d: "Clear paths and quiet interfaces that respect the visitor." },
  { t: "Reliable communication", d: "Predictable updates and one direct point of contact throughout." },
  { t: "Support after launch", d: "I don't disappear when the site goes live." },
];

export function WhyMe() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="font-mono text-[10px] uppercase tracking-widest text-brand mb-4">
            Why work with me
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] max-w-3xl text-balance">
            One designer, end to end. No handoffs, no diluted vision.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={i * 40}>
              <div className="h-full p-6 rounded-2xl bg-neutral-50 border border-black/5 hover:bg-white hover:border-foreground/10 hover:shadow-[var(--shadow-soft)] transition-all">
                <div className="size-7 rounded-full bg-brand/10 text-brand grid place-items-center mb-5 text-sm font-bold">
                  ✓
                </div>
                <h3 className="font-bold tracking-tight">{r.t}</h3>
                <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
