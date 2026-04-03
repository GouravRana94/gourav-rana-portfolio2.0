import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import {
  Code2, Database, GitBranch, Cloud, Palette, Terminal,
  Braces, FileCode, Server, Container, Globe, Cpu,
  Layers, Box
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  icon: LucideIcon;
}

const primaryArsenal: Skill[] = [
  { name: "React / Next.js", level: 90, icon: Code2 },
  { name: "Python", level: 85, icon: Terminal },
  { name: "JavaScript / TypeScript", level: 88, icon: Braces },
  { name: "Node.js / Express", level: 85, icon: Server },
  { name: "C# / ASP.NET", level: 70, icon: FileCode },
];

const supportSystems: Skill[] = [
  { name: "MongoDB", level: 80, icon: Database },
  { name: "MySQL / SQL", level: 78, icon: Database },
  { name: "Git / GitHub", level: 90, icon: GitBranch },
  { name: "Docker", level: 65, icon: Container },
  { name: "AWS", level: 60, icon: Cloud },
  { name: "Tailwind CSS", level: 92, icon: Palette },
  { name: "AI / ML (PyTorch, HF)", level: 75, icon: Cpu },
];

const softSkills = [
  { name: "Problem-Solving", icon: Layers },
  { name: "Team Collaboration", icon: Globe },
  { name: "Adaptability", icon: Box },
  { name: "Active Listener", icon: Terminal },
];

const StatBar = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const Icon = skill.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay }}
      viewport={{ once: true }}
      className="mb-4 group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 flex items-center justify-center bg-primary/8 border border-primary/15 text-primary/80 group-hover:text-primary group-hover:border-primary/30 transition-colors">
            <Icon size={13} />
          </div>
          <span className="font-display text-[10px] tracking-[0.1em] uppercase text-foreground/90">{skill.name}</span>
        </div>
        <span className="font-display text-[10px] text-primary/80">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-secondary/70 overflow-hidden ml-[38px]">
        <motion.div
          className="h-full bg-gradient-to-r from-primary/80 to-primary/30 relative"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-foreground/40" />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="container">
      <SectionTitle label="// Arsenal" title="SKILL SET" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="glass-card p-6 tactical-border">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            <h3 className="font-display text-[10px] tracking-[0.2em] text-primary/90">PRIMARY ARSENAL</h3>
          </div>
          {primaryArsenal.map((s, i) => (
            <StatBar key={s.name} skill={s} delay={i * 0.08} />
          ))}
        </div>
        <div className="glass-card p-6 border border-accent/15">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 bg-accent rounded-full" />
            <h3 className="font-display text-[10px] tracking-[0.2em] text-accent/90">SUPPORT SYSTEMS</h3>
          </div>
          {supportSystems.map((s, i) => (
            <StatBar key={s.name} skill={s} delay={i * 0.08} />
          ))}
        </div>
      </div>
      {/* Soft Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-6 glass-card p-6"
      >
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full" />
          <h3 className="font-display text-[10px] tracking-[0.2em] text-muted-foreground">TACTICAL TRAITS</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {softSkills.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.name} className="flex items-center gap-2 p-3 bg-secondary/40 border border-border/50 hover:border-primary/20 transition-colors">
                <Icon size={13} className="text-primary/70" />
                <span className="font-display text-[9px] tracking-[0.1em] text-muted-foreground">{s.name}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </section>
);

export default SkillsSection;
