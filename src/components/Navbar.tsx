import { useState } from "react";
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

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass">
      <div className="container flex items-center justify-between h-16">
        <button onClick={() => scrollTo("#hero")} className="font-display text-sm tracking-[0.2em] text-primary glow-text-primary cursor-none">
          GR
        </button>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="font-display text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors cursor-none">
              {l.label}
            </button>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground cursor-none">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-border">
          {links.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="block w-full text-left px-6 py-3 font-display text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary cursor-none">
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
