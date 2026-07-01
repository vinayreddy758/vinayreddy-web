import { type FormEvent } from "react";
import { Reveal } from "./Reveal";

const PHONE_DISPLAY = "+91 93532 61314";
const PHONE_WA = "919353261314";
const EMAIL = "vinayad1776@gmail.com";

export function Contact() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = (data.get("name") as string) || "";
    const email = (data.get("email") as string) || "";
    const business = (data.get("business") as string) || "";
    const budget = (data.get("budget") as string) || "";
    const message = (data.get("message") as string) || "";

    const text = [
      `Hi Vinay, I'd like to enquire about a website.`,
      ``,
      `Name: ${name}`,
      `Email: ${email}`,
      business ? `Business: ${business}` : "",
      budget ? `Budget: ${budget}` : "",
      ``,
      `Details:`,
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${PHONE_WA}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="px-6 py-16 md:py-32 bg-brand text-white">
      <div className="mx-auto max-w-6xl grid md:grid-cols-12 gap-10 md:gap-16">
        <Reveal className="md:col-span-5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/70 mb-5">
            Get in touch
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] text-balance">
            Let's build something your customers will trust.
          </h2>
          <p className="mt-6 text-white/80 leading-relaxed text-lg max-w-md">
            Tell me about your business. I usually reply within 24 hours.
          </p>

          <div className="mt-10 space-y-3 text-sm">
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 text-white/90 hover:text-white transition-colors break-all"
            >
              <span className="size-1.5 rounded-full bg-[color:var(--accent-orange)] shrink-0" />
              {EMAIL}
            </a>
            <a
              href={`tel:+${PHONE_WA}`}
              className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
            >
              <span className="size-1.5 rounded-full bg-[color:var(--accent-orange)] shrink-0" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={`https://wa.me/${PHONE_WA}`}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-4 inline-flex items-center gap-2 bg-white text-foreground px-5 py-3 rounded-full font-semibold text-sm hover:bg-[color:var(--accent-orange)] hover:text-white transition-colors"
            >
              Chat on WhatsApp
              <span aria-hidden>↗</span>
            </a>
          </div>
        </Reveal>

        <Reveal className="md:col-span-7" delay={120}>
          <form
            onSubmit={onSubmit}
            className="bg-white text-foreground rounded-3xl p-6 md:p-10 shadow-[var(--shadow-elegant)]"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your name" name="name" placeholder="Jane Smith" required />
              <Field label="Email" name="email" type="email" placeholder="jane@business.com" required />
              <Field label="Business type" name="business" placeholder="Clinic, restaurant, law firm…" />
              <Field label="Budget (optional)" name="budget" placeholder="e.g. ₹12k–₹25k" />
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
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-foreground text-background font-semibold py-4 rounded-full hover:bg-brand transition-colors"
            >
              Submit enquiry on WhatsApp
              <span aria-hidden>→</span>
            </button>
            <p className="mt-4 text-xs text-neutral-500 text-center">
              Your enquiry opens WhatsApp with your details ready to send.
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
    <div className="min-w-0">
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
