import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const missions = [
  {
    role: "M.Tech — AI & Machine Learning",
    org: "Lovely Professional University, Punjab",
    period: "Aug 2025 – Present",
    points: ["CGPA: 8.88", "Specialization in Artificial Intelligence and Machine Learning"],
    status: "ACTIVE",
  },
  {
    role: "MERN Stack Development Trainee",
    org: "Excellence Technology",
    period: "Jan 2025 – May 2025",
    points: [
      "Completed 4 months of ISO-certified training in full-stack development",
      "Built projects using MongoDB, Express.js, React, and Node.js",
      "Learned industry best practices for web application development",
    ],
    status: "COMPLETE",
  },
  {
    role: "Graphic Design Trainee",
    org: "PACFC Dharamshala",
    period: "Jun 2024 – Jul 2024",
    points: [
      "Created engaging visual content including posters, banners, and social media graphics",
      "Utilized Adobe Photoshop and Canva for promotional materials",
      "Collaborated with marketing team to maintain brand consistency",
    ],
    status: "COMPLETE",
  },
  {
    role: "B.Tech — Computer Science & Engineering",
    org: "Himachal Pradesh Technical University",
    period: "Jun 2021 – May 2025",
    points: ["CGPA: 7.44"],
    status: "COMPLETE",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 grid-bg">
    <div className="container">
      <SectionTitle label="// Mission Log" title="EXPERIENCE" />
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />
        <div className="space-y-8">
          {missions.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, rotate: 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-20"
            >
              {/* Dot */}
              <div className="absolute left-[12px] md:left-[28px] top-2 w-3 h-3 bg-primary rounded-sm glow-primary" />
              <div className="glass-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display text-sm font-bold text-foreground">{m.role}</h3>
                    <p className="font-body text-sm text-muted-foreground">{m.org}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-display text-[10px] tracking-wider text-muted-foreground">{m.period}</span>
                    <span className={`font-display text-[9px] tracking-widest px-2 py-0.5 ${m.status === "ACTIVE" ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"}`}>
                      {m.status}
                    </span>
                  </div>
                </div>
                <ul className="space-y-1">
                  {m.points.map((p, j) => (
                    <li key={j} className="font-body text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
