import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-10">
    <div className="container">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-display text-[9px] tracking-[0.25em] text-muted-foreground">
          © 2026 GOURAV RANA — ALL SYSTEMS OPERATIONAL
        </p>
        <div className="flex items-center gap-5">
          {[
            { icon: Github, href: "https://github.com/GouravRana94" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/gourav-rana-/" },
            { icon: Mail, href: "mailto:grana3766@gmail.com" },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground/60 hover:text-primary transition-colors cursor-none">
              <s.icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
