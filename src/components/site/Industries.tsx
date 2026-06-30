import { Reveal } from "./Reveal";

const industries = [
  "Clinics",
  "Doctors",
  "Salons",
  "Restaurants",
  "Law Firms",
  "Real Estate",
  "Gyms",
  "Hotels",
  "Education",
  "Local Businesses",
  "Startups",
];

export function Industries() {
  return (
    <section className="px-6 py-24 md:py-28 border-b border-black/5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="font-mono text-[10px] uppercase tracking-widest text-brand mb-4">
            Industries served
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight max-w-2xl text-balance">
            Trusted by service businesses that live and die by first impressions.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {industries.map((i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full border border-black/10 bg-white text-sm font-medium text-neutral-700 hover:border-foreground transition-colors"
              >
                {i}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
