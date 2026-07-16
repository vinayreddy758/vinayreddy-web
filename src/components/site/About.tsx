import { Reveal } from "./Reveal";
import { Smartphone, Zap, Search, ShieldCheck } from "lucide-react";

const paragraphs = [
  "We founded ZeroFrame to help small businesses compete with confidence online. Every website we build is designed to create trust, communicate clearly and turn visitors into enquiries.",
  "Rather than using generic templates, we create tailored websites focused on performance, usability and long-term value.",
  "From strategy and design to launch and ongoing support, we manage the complete process so business owners can focus on growing their company.",
];

const features = [
  { icon: Smartphone, label: "Responsive Design" },
  { icon: Zap, label: "Fast Performance" },
  { icon: Search, label: "SEO Ready" },
  { icon: ShieldCheck, label: "Secure Development" },
];

export function About() {
  return (
    <section
      id="about"
      className="px-6 py-12 md:py-24 bg-neutral-50 border-y border-black/5"
    >
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="font-mono text-[10px] uppercase tracking-widest text-brand mb-5">
            About
          </div>

          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full bg-white border border-black/[0.06] px-4 py-1.5 text-[11px] font-medium text-neutral-700 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <span className="size-1.5 rounded-full bg-brand" />
            <span className="uppercase tracking-[0.14em]">
              Founder Vinay Reddy AD · Co-Founder Yashas S
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-balance">
            Helping businesses build trust before the first conversation.
          </h2>

          <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed text-[16px] md:text-[17px] text-pretty text-left md:text-center">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {features.map((f, i) => (
            <Reveal key={f.label} delay={i * 80}>
              <div className="group h-full flex flex-col items-center justify-center gap-2.5 rounded-2xl bg-white border border-black/[0.06] px-4 py-5 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:border-foreground/20 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300">
                <div className="size-9 rounded-full bg-neutral-50 border border-black/[0.04] grid place-items-center text-brand group-hover:scale-105 transition-transform">
                  <f.icon className="size-4" strokeWidth={1.75} />
                </div>
                <div className="text-[13px] font-semibold text-neutral-800 tracking-tight text-center">
                  {f.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
