export function Footer() {
  return (
    <footer className="px-6 py-12 md:py-14 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="min-w-0">
          <div className="font-extrabold tracking-tight text-lg md:text-xl">
            Vinay Reddy <span className="text-brand">AD</span>
          </div>
          <p className="text-sm text-neutral-500 mt-1">
            Premium websites for small businesses.
          </p>
          <div className="mt-3 flex flex-col gap-1 text-sm text-neutral-600">
            <a href="mailto:vinayad1776@gmail.com" className="hover:text-foreground break-all">
              vinayad1776@gmail.com
            </a>
            <a href="tel:+919353261314" className="hover:text-foreground">
              +91 93532 61314
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-600">
          <a href="#work" className="hover:text-foreground">Work</a>
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#process" className="hover:text-foreground">Process</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </div>
        <div className="text-xs text-neutral-400 font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} Vinay Reddy AD
        </div>
      </div>
    </footer>
  );
}
