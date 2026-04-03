import { motion } from "framer-motion";
import { FileText, ExternalLink, Award, ShieldCheck, BookOpen } from "lucide-react";
import SectionTitle from "./SectionTitle";

const certs = [
  { title: "ICECMSN 2025 — IEEE Conference", issuer: "Hindusthan Institute of Technology", date: "Nov 2025", note: "Paper: Explainable Hybrid ML Models for Predicting Renal Stone Re-occurrence & CKD", icon: Award, highlight: true },
  { title: "AI Fundamentals: Language and Vision", issuer: "IBM SkillsBuild", date: "Mar 2026", link: "https://www.credly.com/go/o6Y60ed2", icon: ShieldCheck },
  { title: "Mastering DevOps", issuer: "Infosys Springboard", date: "Mar 2026", icon: BookOpen },
  { title: "Master Generative AI & Tools", issuer: "Infosys Springboard", date: "Mar 2026", icon: BookOpen },
  { title: "Google Analytics Certification", issuer: "Google", date: "Mar 2026", icon: ShieldCheck },
  { title: "Machine Learning with Python", issuer: "freeCodeCamp", date: "Mar 2026", note: "~300 hours of coursework", icon: Award },
  { title: "MERN Stack Development", issuer: "Excellence Technology", date: "Jan–May 2025", icon: FileText },
];

const CertificatesSection = () => (
  <section id="certificates" className="py-24 grid-bg">
    <div className="container">
      <SectionTitle label="// Classified Documents" title="CERTIFICATES" />

      {/* Featured cert */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="glass-card p-6 mb-6 tactical-border relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl" />
        <div className="flex items-start gap-4 relative">
          <div className="p-3 bg-primary/15 border border-primary/30 text-primary flex-shrink-0">
            <Award size={24} />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="font-display text-[9px] tracking-widest text-primary bg-primary/10 px-2 py-0.5 border border-primary/20">
                TOP SECRET — FEATURED
              </span>
              <span className="font-display text-[9px] text-muted-foreground">{certs[0].date}</span>
            </div>
            <h3 className="font-display text-sm font-bold text-foreground mt-2">{certs[0].title}</h3>
            <p className="font-body text-sm text-muted-foreground mt-1">{certs[0].issuer}</p>
            {certs[0].note && (
              <p className="font-body text-xs text-muted-foreground mt-2 italic border-l-2 border-primary/30 pl-3">{certs[0].note}</p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Rest of certs */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.slice(1).map((c, i) => {
          const Icon = c.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20, rotate: 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="glass-card p-5 group hover:border-primary/30 transition-all relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-all" />
              <div className="flex items-start gap-3 relative">
                <div className="p-2 bg-primary/10 border border-primary/20 text-primary flex-shrink-0">
                  <Icon size={16} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-display text-[8px] tracking-widest text-primary/70">CLASSIFIED</span>
                    <span className="font-display text-[8px] text-muted-foreground">{c.date}</span>
                  </div>
                  <h3 className="font-display text-[11px] font-bold text-foreground leading-snug">{c.title}</h3>
                  <p className="font-body text-[11px] text-muted-foreground mt-1">{c.issuer}</p>
                  {c.note && <p className="font-body text-[10px] text-muted-foreground mt-2 italic">{c.note}</p>}
                  {c.link && (
                    <a href={c.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent text-[10px] mt-2 hover:underline cursor-none font-display tracking-wider">
                      VERIFY <ExternalLink size={10} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default CertificatesSection;
