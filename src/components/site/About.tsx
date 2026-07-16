import { Reveal } from "./Reveal";

const tags = ["Freelance", "Remote, worldwide", "Replies within 24h"];

const paragraphs = [
  "We are Vinay Reddy AD and Yashas — co-founders of zeroframe, a freelance web design and development studio helping small businesses build a strong online presence.",
  "A website should do more than look good. It should build trust, generate enquiries and help your business grow — on every device, at every screen size.",
  "We work one-to-one with clinics, restaurants, salons, law firms and local brands to deliver clean, fast websites that reflect the business and stand up over time.",
];

export function About() {
  return (
    <section id="about" className="px-6 py-16 md:py-32 bg-neutral-50 border-y border-black/5">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <div className="font-mono text-[10px] uppercase tracking-widest text-brand mb-5">
            About
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-balance">
            Helping small businesses build a strong online presence.
          </h2>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white border border-black/5 px-3.5 py-1.5 text-sm font-medium text-neutral-700">
            <span className="size-1.5 rounded-full bg-brand" />
            Co Founders — Vinay Reddy AD & Yashas
          </div>

          <div className="mt-8 space-y-5 text-neutral-700 leading-relaxed text-[17px] text-pretty text-left md:text-center">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
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
