import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, Send } from "lucide-react";
import SectionTitle from "./SectionTitle";
import TacticalButton from "./TacticalButton";

const socials = [
  { icon: Mail, href: "mailto:grana3766@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+918626890450", label: "Phone" },
  { icon: Github, href: "https://github.com/GouravRana94", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/gourav-rana-/", label: "LinkedIn" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailTo = `mailto:grana3766@gmail.com?subject=Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
    window.open(mailTo);
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const inputClass = "w-full bg-secondary/50 border border-border/60 px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:bg-secondary/70 transition-all cursor-none";

  return (
    <section id="contact" className="py-24">
      <div className="container max-w-4xl">
        <SectionTitle label="// Secure Channel" title="CONTACT" />
        <div className="grid md:grid-cols-5 gap-8">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Ready for new missions. Whether it's a full-time role, freelance project, or collaboration — let's connect.
            </p>
            <div className="space-y-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 glass-card hover:border-primary/20 transition-all cursor-none group"
                >
                  <s.icon size={16} className="text-primary/70 group-hover:text-primary transition-colors" />
                  <span className="font-display text-[10px] tracking-[0.1em] text-muted-foreground group-hover:text-foreground transition-colors">{s.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-3 glass-card p-6 space-y-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Send size={12} className="text-primary/70" />
              <span className="font-display text-[9px] tracking-[0.2em] text-primary/80">ENCRYPTED CHANNEL</span>
            </div>
            <input
              type="text"
              placeholder="Callsign (Name)"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            <input
              type="email"
              placeholder="Secure Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={inputClass}
            />
            <textarea
              placeholder="Encrypted Message"
              required
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
            />
            <TacticalButton className="w-full">
              {sent ? "MESSAGE SENT ✓" : "SEND ENCRYPTED MESSAGE"}
            </TacticalButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
