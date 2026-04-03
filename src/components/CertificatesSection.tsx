import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
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
  { title: "ICECMSN 2025 — IEEE Conference", issuer: "Hindusthan Institute of Technology", image: cert1 },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {certs.map((c, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              viewport={{ once: true }}
              onClick={() => setSelected(i)}
              className="glass-card group hover:border-primary/40 transition-all text-left overflow-hidden cursor-none"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <span className="absolute top-2 left-2 font-display text-[7px] tracking-widest text-primary bg-primary/10 border border-primary/20 px-1.5 py-0.5">
                  CLASSIFIED
                </span>
              </div>
              <div className="p-3">
                <h3 className="font-display text-[10px] sm:text-xs font-bold text-foreground leading-snug line-clamp-2">
                  {c.title}
                </h3>
                <p className="font-body text-[10px] text-muted-foreground mt-1 truncate">{c.issuer}</p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 cursor-none"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors cursor-none"
          >
            <X size={28} />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={certs[selected].image}
            alt={certs[selected].title}
            className="max-h-[85vh] max-w-[90vw] object-contain border border-primary/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="font-display text-sm text-foreground">{certs[selected].title}</p>
            <p className="font-body text-xs text-muted-foreground mt-1">{certs[selected].issuer}</p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default CertificatesSection;
