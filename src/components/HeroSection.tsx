import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";
import TacticalButton from "./TacticalButton";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

const stats = [
  { label: "PROJECTS", value: "10+" },
  { label: "CERTS", value: "13" },
  { label: "TECH STACK", value: "15+" },
];

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
    {/* Ambient glow */}
    <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-1/4 -right-32 w-72 h-72 bg-accent/3 rounded-full blur-[100px] pointer-events-none" />

    <div className="container flex flex-col-reverse md:flex-row items-center gap-16 pt-24 pb-12">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <div className="flex items-center gap-3 justify-center md:justify-start mb-6">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <p className="font-display text-[10px] tracking-[0.4em] text-accent">
            SYSTEM ONLINE — READY FOR DEPLOYMENT
          </p>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] animate-glitch">
          GOURAV
          <br />
          <span className="text-primary glow-text-primary">RANA</span>
        </h1>

        <p className="font-body text-base sm:text-lg text-muted-foreground mt-5 max-w-lg mx-auto md:mx-0 leading-relaxed">
          Developer & Tactical Problem Solver — Full-Stack Engineer specializing in React, Node.js, Python & AI/ML
        </p>

        {/* Quick info badges */}
        <div className="flex flex-wrap items-center gap-4 mt-5 justify-center md:justify-start">
          {[
            { icon: GraduationCap, text: "M.Tech AI/ML" },
            { icon: MapPin, text: "India" },
            { icon: Briefcase, text: "Open to Work" },
          ].map((item, i) => (
            <span key={i} className="flex items-center gap-1.5 text-muted-foreground font-body text-xs">
              <item.icon size={12} className="text-primary/70" />
              {item.text}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
          <TacticalButton href="#projects">View Missions</TacticalButton>
          <TacticalButton variant="outline" href="#contact">Contact</TacticalButton>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-8 mt-10 justify-center md:justify-start">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.15 }}
              className="text-center"
            >
              <p className="font-display text-xl sm:text-2xl font-bold text-foreground">{s.value}</p>
              <p className="font-display text-[8px] tracking-[0.2em] text-muted-foreground mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-shrink-0"
      >
        <div className="relative">
          {/* Outer glow */}
          <div className="absolute -inset-4 bg-primary/5 blur-2xl rounded-sm pointer-events-none" />
          <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-sm overflow-hidden tactical-border animate-pulse-ring relative">
            <img src={profileImg} alt="Gourav Rana" className="w-full h-full object-cover object-top" loading="eager" />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>
          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-primary" />
          <div className="absolute -top-2 -right-2 w-5 h-5 border-t-2 border-r-2 border-primary" />
          <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b-2 border-l-2 border-primary" />
          <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-primary" />
          {/* Status label */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-background border border-primary/30 px-3 py-1">
            <span className="font-display text-[8px] tracking-[0.3em] text-primary">OPERATIVE</span>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-5 h-8 border border-muted-foreground/40 rounded-full flex justify-center pt-1.5">
        <div className="w-1 h-2 bg-primary rounded-full" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
