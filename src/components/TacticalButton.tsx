import { useState, type ReactNode, type MouseEvent } from "react";

interface Props {
  children: ReactNode;
  variant?: "primary" | "outline";
  onClick?: () => void;
  href?: string;
  className?: string;
}

const TacticalButton = ({ children, variant = "primary", onClick, href, className = "" }: Props) => {
  const [flash, setFlash] = useState(false);

  const handleClick = (e: MouseEvent) => {
    setFlash(true);
    setTimeout(() => setFlash(false), 150);
    onClick?.();
    if (href) {
      e.preventDefault();
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const base = "relative font-display text-xs tracking-widest uppercase px-8 py-3 transition-all duration-200 overflow-hidden cursor-none";
  const variants = {
    primary: "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(8_100%_50%/0.4)]",
    outline: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  };

  return (
    <button onClick={handleClick} className={`${base} ${variants[variant]} ${className}`}>
      {flash && <span className="absolute inset-0 muzzle-flash pointer-events-none" />}
      {children}
    </button>
  );
};

export default TacticalButton;
