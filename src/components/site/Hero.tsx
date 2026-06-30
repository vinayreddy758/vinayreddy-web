export function Hero() {
  return (
    <section id="top" className="px-6 pt-16 pb-24 md:pt-28 md:pb-36">
      <div className="mx-auto max-w-6xl">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-6">
            <span className="size-1.5 rounded-full bg-[var(--accent-orange)]" />
            Freelance studio of one — taking on 2 projects this quarter
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.02] text-balance max-w-4xl">
            Websites that quietly do the{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand">hard work</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-[color-mix(in_oklab,var(--accent-orange)_30%,transparent)] -z-0" />
            </span>{" "}
            of growing your business.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
            I design and build premium websites for clinics, restaurants, salons, law firms and
            local businesses — focused on trust, enquiries, and lasting first impressions.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 rounded-full font-semibold text-base hover:bg-brand transition-colors shadow-[var(--shadow-soft)]"
            >
              Start your project
              <span aria-hidden>→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-base border border-black/10 hover:border-foreground transition-colors"
            >
              See selected work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
