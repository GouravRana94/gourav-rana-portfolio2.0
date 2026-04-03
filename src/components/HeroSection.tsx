import { motion } from "framer-motion";
import profileImg from "@/assets/profile.png";
import TacticalButton from "./TacticalButton";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
    <div className="container flex flex-col-reverse md:flex-row items-center gap-12 pt-20">
      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left"
      >
        <p className="font-display text-xs tracking-[0.4em] text-primary mb-4 glow-text-primary">
          SYSTEM ONLINE
        </p>
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight animate-glitch">
          GOURAV
          <br />
          <span className="text-primary">RANA</span>
        </h1>
        <p className="font-body text-lg text-muted-foreground mt-4 max-w-md mx-auto md:mx-0">
          Developer & Tactical Problem Solver — Full-Stack Engineer specializing in React, Node.js, Python & AI/ML
        </p>
        <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
          <TacticalButton href="#projects">View Missions</TacticalButton>
          <TacticalButton variant="outline" href="#contact">Contact</TacticalButton>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex-shrink-0"
      >
        <div className="relative">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-sm overflow-hidden tactical-border animate-pulse-ring">
            <img src={profileImg} alt="Gourav Rana" className="w-full h-full object-cover object-top" loading="eager" />
          </div>
          {/* Corner accents */}
          <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary" />
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary" />
          <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary" />
          <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary" />
        </div>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
    >
      <div className="w-5 h-8 border border-muted-foreground rounded-full flex justify-center pt-1">
        <div className="w-1 h-2 bg-primary rounded-full" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
