import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import SectionTitle from "./SectionTitle";

const certs = [
  { title: "ICECMSN 2025 — IEEE Conference", issuer: "Hindusthan Institute of Technology", date: "Nov 2025", note: "Paper: Explainable Hybrid ML Models for Predicting Renal Stone Re-occurrence & CKD" },
  { title: "AI Fundamentals: Language and Vision", issuer: "IBM SkillsBuild", date: "Mar 2026", link: "https://www.credly.com/go/o6Y60ed2" },
  { title: "Mastering DevOps", issuer: "Infosys Springboard", date: "Mar 2026" },
  { title: "Master Generative AI & Tools", issuer: "Infosys Springboard", date: "Mar 2026" },
  { title: "Google Analytics Certification", issuer: "Google", date: "Mar 2026" },
  { title: "Machine Learning with Python", issuer: "freeCodeCamp", date: "Mar 2026", note: "~300 hours of coursework" },
  { title: "MERN Stack Development", issuer: "Excellence Technology", date: "Jan–May 2025" },
];

const CertificatesSection = () => (
  <section id="certificates" className="py-24 grid-bg">
    <div className="container">
      <SectionTitle label="// Classified Documents" title="CERTIFICATES" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="glass-card p-5 group hover:border-primary/30 transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 text-primary flex-shrink-0">
                <FileText size={16} />
              </div>
              <div className="min-w-0">
                <span className="font-display text-[9px] tracking-widest text-primary block mb-1">TOP SECRET</span>
                <h3 className="font-display text-xs font-bold text-foreground leading-snug">{c.title}</h3>
                <p className="font-body text-xs text-muted-foreground mt-1">{c.issuer}</p>
                <p className="font-display text-[9px] text-muted-foreground mt-1">{c.date}</p>
                {c.note && <p className="font-body text-[10px] text-muted-foreground mt-2 italic">{c.note}</p>}
                {c.link && (
                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent text-[10px] mt-2 hover:underline cursor-none">
                    Verify <ExternalLink size={10} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CertificatesSection;
