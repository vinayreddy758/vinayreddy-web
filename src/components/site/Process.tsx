import { Reveal } from "./Reveal";

const steps = [
  { t: "Understand your business", d: "We start with your goals, audience, and what success actually looks like for you." },
  { t: "Plan the user experience", d: "Sitemap, key journeys and content priorities — clarity before pixels." },
  { t: "Design a premium interface", d: "A considered visual system that reflects your brand and earns trust on sight." },
  { t: "Develop a responsive website", d: "Clean, semantic code that performs from the smallest phone to the largest screen." },
  { t: "Test across all devices", d: "Quality pass across browsers, devices and real-world network conditions." },
  { t: "Launch the website", d: "A coordinated launch with redirects, analytics and search visibility handled." },
  { t: "Provide ongoing support", d: "Optional retainer for updates, content tweaks and performance care." },
];

export function Process() {
  return (
    <section id="process" className="px-6 py-24 md:py-32 bg-neutral-50 border-y border-black/5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="font-mono text-[10px] uppercase tracking-widest text-brand mb-4">
            My approach
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] max-w-3xl text-balance">
            A calm, repeatable process — no surprises, no scope creep.
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          <div className="absolute left-[14px] md:left-1/2 top-0 bottom-0 w-px bg-black/10 md:-translate-x-1/2" />
          <ol className="space-y-12">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 50}>
                <li className="relative grid md:grid-cols-2 md:gap-16 items-start">
                  <div className={`pl-12 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:order-2 md:pl-12"}`}>
                    <div className="font-mono text-xs text-brand mb-2">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">{s.t}</h3>
                    <p className="mt-2 text-neutral-600 leading-relaxed max-w-md md:max-w-none md:inline-block">
                      {s.d}
                    </p>
                  </div>
                  <div
                    className={`absolute left-0 md:left-1/2 top-1 size-7 rounded-full bg-white border border-black/10 grid place-items-center md:-translate-x-1/2 ${i % 2 === 0 ? "" : ""}`}
                  >
                    <span className="size-2.5 rounded-full bg-brand" />
                  </div>
                  <div className={i % 2 === 0 ? "hidden md:block" : "hidden md:block md:order-1"} />
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
