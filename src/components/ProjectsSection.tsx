import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    name: "Multi-Model Orchestrator",
    desc: "Interactive AI application supporting 6 tasks: text generation, sentiment analysis, summarization, image analysis, classification, and translation with a multi-agent orchestration system.",
    tech: ["Python", "Streamlit", "HuggingFace", "PyTorch"],
    github: "https://github.com/GouravRana94",
    period: "Mar 2026",
  },
  {
    name: "GreenCart",
    desc: "Full-stack grocery e-commerce platform with product browsing, cart management, and secure Stripe payments. Built with React frontend and Node.js backend.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"],
    github: "https://github.com/GouravRana94",
    period: "Jan 2026",
  },
  {
    name: "Job Match Portal",
    desc: "Full-stack job matching platform with 5 core features: job matching, resume parsing, application tracking, skill gap analysis, and AI-powered recommendations.",
    tech: ["React", "Node.js", "Python", "FastAPI", "Docker"],
    github: "https://github.com/GouravRana94",
    period: "Nov 2025",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24">
    <div className="container">
      <SectionTitle label="// Operations Panel" title="PROJECTS" />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card group hover:border-primary/25 transition-all duration-300 flex flex-col"
          >
            {/* Header strip */}
            <div className="flex items-center justify-between px-6 pt-5 pb-0">
              <span className="font-display text-[8px] tracking-[0.15em] text-accent bg-accent/10 px-2 py-0.5 border border-accent/15">
                STATUS: COMPLETE
              </span>
              <span className="font-display text-[9px] text-muted-foreground">{p.period}</span>
            </div>

            <div className="p-6 pt-4 flex flex-col flex-1">
              <h3 className="font-display text-sm font-bold text-foreground mb-2 group-hover:text-primary transition-colors flex items-center gap-1.5">
                {p.name}
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-5 leading-relaxed flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="font-display text-[8px] tracking-[0.1em] px-2 py-1 bg-secondary/80 text-muted-foreground border border-border/50">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pt-3 border-t border-border/50">
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors cursor-none font-display text-[9px] tracking-wider">
                  <Github size={14} />
                  CODE
                </a>
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-muted-foreground hover:text-accent transition-colors cursor-none font-display text-[9px] tracking-wider">
                  <ExternalLink size={14} />
                  DEMO
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
