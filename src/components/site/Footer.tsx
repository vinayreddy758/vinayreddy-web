export function Footer() {
  return (
    <footer className="px-6 py-14 border-t border-black/5 bg-white">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <div className="font-extrabold tracking-tighter text-xl">
            atelier<span className="text-brand">.web</span>
          </div>
          <p className="text-sm text-neutral-500 mt-1">
            Premium websites for small businesses.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-neutral-600">
          <a href="#work" className="hover:text-foreground">Work</a>
          <a href="#services" className="hover:text-foreground">Services</a>
          <a href="#process" className="hover:text-foreground">Process</a>
          <a href="#pricing" className="hover:text-foreground">Pricing</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
          <a href="#contact" className="hover:text-foreground">Contact</a>
        </div>
        <div className="text-xs text-neutral-400 font-mono uppercase tracking-widest">
          © {new Date().getFullYear()} atelier.web
        </div>
      </div>
    </footer>
  );
}
