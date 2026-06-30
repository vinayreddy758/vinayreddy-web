import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "How long does a project usually take?",
    a: "Most websites take between two and six weeks, depending on scope, content readiness, and how many rounds of feedback we go through. I'll give you a clear timeline before we begin.",
  },
  {
    q: "Do I need to have content and images ready?",
    a: "It helps, but it's not required. I can guide structure, help shape copy, and use carefully chosen placeholder imagery while final assets are prepared.",
  },
  {
    q: "Will I be able to edit the website myself?",
    a: "Yes. Sites are handed over with a simple way to update text, images and key content. For more involved changes, an optional retainer is available.",
  },
  {
    q: "Do you handle hosting and the domain?",
    a: "I can set up modern hosting and connect your domain, or work with your existing provider. Either way you stay in full ownership of both.",
  },
  {
    q: "What happens after launch?",
    a: "You get a short complimentary period for small tweaks, then optional ongoing support to keep the site fast, secure and up to date.",
  },
  {
    q: "How do payments work?",
    a: "Typically a deposit to begin, with the balance due before launch. Larger engagements can be split into milestone-based payments.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="font-mono text-[10px] uppercase tracking-widest text-brand mb-4">
            Frequently asked
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.05] mb-12 text-balance">
            Honest answers to the questions clients ask first.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-black/10">
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold py-6 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-neutral-600 text-[15px] leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
