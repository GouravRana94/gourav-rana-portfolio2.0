import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";
import SectionTitle from "./SectionTitle";
import TacticalButton from "./TacticalButton";

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

  const inputClass = "w-full bg-secondary border border-border px-4 py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors cursor-none";

  return (
    <section id="contact" className="py-24">
      <div className="container max-w-2xl">
        <SectionTitle label="// Secure Channel" title="CONTACT" />
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-card p-8 space-y-4"
        >
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
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputClass} resize-none`}
          />
          <TacticalButton className="w-full">
            {sent ? "MESSAGE SENT ✓" : "SEND ENCRYPTED MESSAGE"}
          </TacticalButton>
        </motion.form>

        <div className="flex justify-center gap-6 mt-8">
          {[
            { icon: <Mail size={18} />, href: "mailto:grana3766@gmail.com" },
            { icon: <Phone size={18} />, href: "tel:+918626890450" },
            { icon: <Github size={18} />, href: "https://github.com/GouravRana94" },
            { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/gourav-rana-/" },
          ].map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors cursor-none">
              {l.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
