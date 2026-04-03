import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
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
            initial={{ opacity: 0, y: 30, rotate: 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="glass-card p-6 group hover:border-primary/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-display text-[9px] tracking-widest text-accent bg-accent/10 px-2 py-0.5">
                OPERATION STATUS: COMPLETE
              </span>
              <span className="font-display text-[9px] text-muted-foreground">{p.period}</span>
            </div>
            <h3 className="font-display text-sm font-bold text-foreground mb-2">{p.name}</h3>
            <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span key={t} className="font-display text-[9px] tracking-wider px-2 py-0.5 bg-secondary text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors cursor-none">
                <Github size={16} />
              </a>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors cursor-none">
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
