const trust = [
  "Replies within 24 hours",
  "Mobile-first",
  "SEO Ready",
  "Based in India · Serving worldwide",
];

export function Hero() {
  return (
    <section id="top" className="px-6 pt-14 pb-16 md:pt-28 md:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-neutral-500 mb-6">
            <span className="size-1.5 rounded-full bg-[var(--accent-orange)]" />
            Freelance studio of one — taking on 2 projects this quarter
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.02] text-balance max-w-4xl">
            Websites that quietly do the{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-brand">hard work</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-[color-mix(in_oklab,var(--accent-orange)_30%,transparent)] -z-0" />
            </span>{" "}
            of growing your business.
          </h1>
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-neutral-600 max-w-2xl leading-relaxed">
            Premium websites for small businesses — built to earn trust and turn
            visitors into enquiries.
          </p>
          <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-3 md:gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 md:px-7 py-3.5 md:py-4 rounded-full font-semibold text-base hover:bg-brand transition-colors shadow-[var(--shadow-soft)]"
            >
              Book a Free Consultation
              <span aria-hidden>→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-6 md:px-7 py-3.5 md:py-4 rounded-full font-semibold text-base border border-black/10 hover:border-foreground transition-colors"
            >
              View Selected Work
            </a>
          </div>
          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-neutral-500">
            {trust.map((t) => (
              <li key={t} className="inline-flex items-center gap-2">
                <span className="size-1 rounded-full bg-[var(--accent-orange)]" />
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
