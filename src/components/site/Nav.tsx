import { useEffect, useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#pricing", label: "Pricing" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-[#ECECEC]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl h-[72px] md:h-[76px] pl-6 pr-5 md:px-8 flex items-center justify-between gap-4">
        <a
          href="#top"
          className="font-extrabold tracking-tight text-lg md:text-xl shrink-0 min-w-0 truncate leading-none transition-opacity hover:opacity-80 active:opacity-60"
        >
          zero<span className="text-brand">frame</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:bg-brand transition-colors shrink-0"
        >
          Book a Free Consultation
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden size-8 rounded-full bg-foreground text-background grid place-items-center shrink-0 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <div className="flex flex-col gap-[3px]">
            <span className="block w-3.5 h-[1.5px] bg-current rounded-full" />
            <span className="block w-3.5 h-[1.5px] bg-current rounded-full" />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#ECECEC] bg-white/95 backdrop-blur-xl animate-fade-in">
          <div className="px-6 py-4 flex flex-col gap-3 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-neutral-700"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center bg-foreground text-background px-4 py-3 rounded-full font-medium"
            >
              Book a Free Consultation
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
