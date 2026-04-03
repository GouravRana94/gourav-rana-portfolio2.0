import { motion } from "framer-motion";

interface Props {
  label: string;
  title: string;
}

const SectionTitle = ({ label, title }: Props) => (
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, type: "spring", damping: 15 }}
    viewport={{ once: true, margin: "-100px" }}
    className="mb-12"
  >
    <span className="font-display text-xs tracking-[0.3em] text-primary uppercase glow-text-primary">
      {label}
    </span>
    <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 text-foreground">
      {title}
    </h2>
    <div className="w-16 h-0.5 bg-primary mt-4 glow-primary" />
  </motion.div>
);

export default SectionTitle;
