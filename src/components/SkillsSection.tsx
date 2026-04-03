import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

interface Skill {
  name: string;
  level: number;
}

const primaryArsenal: Skill[] = [
  { name: "React / Next.js", level: 90 },
  { name: "Python", level: 85 },
  { name: "JavaScript / TypeScript", level: 88 },
  { name: "Node.js / Express", level: 85 },
  { name: "C# / ASP.NET", level: 70 },
];

const supportSystems: Skill[] = [
  { name: "MongoDB", level: 80 },
  { name: "MySQL / SQL", level: 78 },
  { name: "Git / GitHub", level: 90 },
  { name: "Docker", level: 65 },
  { name: "AWS", level: 60 },
  { name: "Tailwind CSS", level: 92 },
  { name: "AI / ML (PyTorch, HF)", level: 75 },
];

const StatBar = ({ skill, delay }: { skill: Skill; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.4, delay }}
    viewport={{ once: true }}
    className="mb-4"
  >
    <div className="flex justify-between items-center mb-1">
      <span className="font-display text-[10px] tracking-widest uppercase text-foreground">{skill.name}</span>
      <span className="font-display text-[10px] text-primary">{skill.level}%</span>
    </div>
    <div className="h-1.5 bg-secondary rounded-sm overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-primary to-primary/60"
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        transition={{ duration: 1.2, delay: delay + 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  </motion.div>
);

const SkillsSection = () => (
  <section id="skills" className="py-24">
    <div className="container">
      <SectionTitle label="// Arsenal" title="SKILL SET" />
      <div className="grid md:grid-cols-2 gap-12">
        <div className="glass-card p-6">
          <h3 className="font-display text-xs tracking-[0.2em] text-primary mb-6">PRIMARY ARSENAL</h3>
          {primaryArsenal.map((s, i) => (
            <StatBar key={s.name} skill={s} delay={i * 0.1} />
          ))}
        </div>
        <div className="glass-card p-6">
          <h3 className="font-display text-xs tracking-[0.2em] text-accent mb-6 glow-text-accent">SUPPORT SYSTEMS</h3>
          {supportSystems.map((s, i) => (
            <StatBar key={s.name} skill={s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
