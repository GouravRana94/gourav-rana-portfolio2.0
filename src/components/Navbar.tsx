import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Arsenal", href: "#skills" },
  { label: "Missions", href: "#experience" },
  { label: "Operations", href: "#projects" },
  { label: "Documents", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? "glass shadow-lg shadow-background/50" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16">
        <button onClick={() => scrollTo("#hero")} className="font-display text-sm tracking-[0.2em] text-primary glow-text-primary cursor-none flex items-center gap-2">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          GR
        </button>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="font-display text-[10px] tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground px-4 py-2 hover:bg-primary/5 transition-all cursor-none relative group"
            >
              {l.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-primary group-hover:w-3/4 transition-all duration-300" />
            </button>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground cursor-none p-2">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-border/50">
          {links.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="block w-full text-left px-6 py-3.5 font-display text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all cursor-none">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
