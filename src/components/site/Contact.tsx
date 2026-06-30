import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Enquiry received", {
        description: "Thanks — I'll get back to you within 24 hours.",
      });
    }, 600);
  };

  return (
    <section id="contact" className="px-6 py-24 md:py-32 bg-brand text-white">
      <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-12 md:gap-16">
        <Reveal className="md:col-span-5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/70 mb-5">
            Start a project
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-balance">
            Let's build a website that grows your business.
          </h2>
          <p className="mt-6 text-white/80 leading-relaxed text-lg max-w-md">
            Tell me a little about your business and what you're trying to achieve. I'll come back
            with thoughts — and a quote — within one working day.
          </p>
          <div className="mt-10 space-y-3 text-sm text-white/80">
            <div className="flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-[color:var(--accent-orange)]" />
              Reply within 24 hours
            </div>
            <div className="flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-[color:var(--accent-orange)]" />
              Working remotely with clients worldwide
            </div>
            <div className="flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-[color:var(--accent-orange)]" />
              No obligation — first call is always free
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-7" delay={120}>
          <form
            onSubmit={onSubmit}
            className="bg-white text-foreground rounded-3xl p-7 md:p-10 shadow-[var(--shadow-elegant)]"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name" name="name" placeholder="Jane Smith" required />
              <Field label="Email" name="email" type="email" placeholder="jane@business.com" required />
              <Field label="Business type" name="business" placeholder="Clinic, restaurant, law firm…" />
              <Field label="Budget (optional)" name="budget" placeholder="e.g. $2k–$5k" />
            </div>
            <div className="mt-4">
              <label className="block text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">
                What are you trying to build?
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="A few sentences about your business and the website you have in mind."
                className="w-full bg-neutral-50 border border-black/5 rounded-2xl px-4 py-3.5 text-sm focus:bg-white focus:border-foreground outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-foreground text-background font-semibold py-4 rounded-full hover:bg-brand transition-colors disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Submit enquiry"}
              {!submitting && <span aria-hidden>→</span>}
            </button>
            <p className="mt-4 text-xs text-neutral-500 text-center">
              By submitting you agree to be contacted about your project. No marketing emails, ever.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-neutral-50 border border-black/5 rounded-2xl px-4 py-3.5 text-sm focus:bg-white focus:border-foreground outline-none transition-colors"
      />
    </div>
  );
}
