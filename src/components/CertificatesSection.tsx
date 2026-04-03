import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import SectionTitle from "./SectionTitle";

import cert1 from "@/assets/certs/cert-1.jpg";
import cert2 from "@/assets/certs/cert-2.jpg";
import cert3 from "@/assets/certs/cert-3.jpg";
import cert4 from "@/assets/certs/cert-4.jpg";
import cert5 from "@/assets/certs/cert-5.jpg";
import cert6 from "@/assets/certs/cert-6.jpg";
import cert7 from "@/assets/certs/cert-7.jpg";
import cert8 from "@/assets/certs/cert-8.jpg";
import cert9 from "@/assets/certs/cert-9.jpg";
import cert10 from "@/assets/certs/cert-10.jpg";
import cert11 from "@/assets/certs/cert-11.jpg";
import cert12 from "@/assets/certs/cert-12.jpg";
import cert13 from "@/assets/certs/cert-13.jpg";

const certs = [
  { title: "ICECMSN 2025 — IEEE Conference", issuer: "Hindusthan Institute of Technology", image: cert1, featured: true },
  { title: "AI Fundamentals: Language & Vision", issuer: "IBM SkillsBuild", image: cert2 },
  { title: "Mastering DevOps", issuer: "Infosys Springboard", image: cert3 },
  { title: "Master Generative AI & Tools", issuer: "Infosys Springboard", image: cert4 },
  { title: "Google Analytics Certification", issuer: "Google", image: cert5 },
  { title: "Machine Learning with Python", issuer: "freeCodeCamp", image: cert6 },
  { title: "MERN Stack Development", issuer: "Excellence Technology", image: cert7 },
  { title: "Azure Cloud Computing", issuer: "Microsoft / LinkedIn Learning", image: cert8 },
  { title: "Node.js", issuer: "Infosys Springboard", image: cert9 },
  { title: "Personality Development", issuer: "Excellence Technology", image: cert10 },
  { title: "Python for Data Science", issuer: "Infosys Springboard", image: cert11 },
  { title: "SkillUp 101 — Python", issuer: "EDUCBA", image: cert12 },
  { title: "Soft Skills Training", issuer: "Infosys Springboard", image: cert13 },
];

const CertificatesSection = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="certificates" className="py-24 grid-bg">
      <div className="container">
        <SectionTitle label="// Classified Documents" title="CERTIFICATES" />

        {/* Featured cert - first one large */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          onClick={() => setSelected(0)}
          className="w-full glass-card tactical-border group overflow-hidden mb-6 text-left cursor-none"
        >
          <div className="grid md:grid-cols-2">
            <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
              <img src={certs[0].image} alt={certs[0].title} loading="lazy" className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/60 hidden md:block" />
              <span className="absolute top-3 left-3 font-display text-[7px] tracking-[0.2em] text-primary bg-primary/15 border border-primary/25 px-2 py-0.5">
                TOP SECRET — FEATURED
              </span>
            </div>
            <div className="p-6 flex flex-col justify-center">
              <h3 className="font-display text-sm font-bold text-foreground leading-snug group-hover:text-primary transition-colors">{certs[0].title}</h3>
              <p className="font-body text-sm text-muted-foreground mt-2">{certs[0].issuer}</p>
              <p className="font-body text-xs text-muted-foreground/70 mt-3 italic border-l-2 border-primary/25 pl-3">
                Paper: Explainable Hybrid ML Models for Predicting Renal Stone Re-occurrence & CKD
              </p>
              <div className="flex items-center gap-1.5 mt-4 text-primary/70 group-hover:text-primary transition-colors">
                <ZoomIn size={14} />
                <span className="font-display text-[9px] tracking-[0.15em]">VIEW DOCUMENT</span>
              </div>
            </div>
          </div>
        </motion.button>

        {/* Grid of remaining certs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {certs.slice(1).map((c, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              viewport={{ once: true }}
              onClick={() => setSelected(i + 1)}
              className="glass-card group hover:border-primary/25 transition-all text-left overflow-hidden cursor-none"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-background/30">
                  <ZoomIn size={20} className="text-foreground" />
                </div>
                <span className="absolute top-2 left-2 font-display text-[6px] tracking-[0.2em] text-primary/80 bg-background/60 border border-primary/15 px-1.5 py-0.5">
                  CLASSIFIED
                </span>
              </div>
              <div className="p-3">
                <h3 className="font-display text-[9px] sm:text-[10px] font-bold text-foreground leading-snug line-clamp-2 group-hover:text-primary/90 transition-colors">
                  {c.title}
                </h3>
                <p className="font-body text-[10px] text-muted-foreground mt-1 truncate">{c.issuer}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-none"
            onClick={() => setSelected(null)}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-muted-foreground hover:text-foreground transition-colors cursor-none p-2"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={certs[selected].image}
                alt={certs[selected].title}
                className="w-full max-h-[80vh] object-contain border border-border/50 shadow-2xl"
              />
              <div className="mt-4 text-center">
                <p className="font-display text-xs text-foreground tracking-wider">{certs[selected].title}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{certs[selected].issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CertificatesSection;
