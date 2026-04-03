import { motion } from "framer-motion";

interface Props {
  label: string;
  title: string;
}

const SectionTitle = ({ label, title }: Props) => (
  <motion.div
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, type: "spring", damping: 18 }}
    viewport={{ once: true, margin: "-80px" }}
    className="mb-14"
  >
    <span className="font-display text-[10px] tracking-[0.3em] text-primary/80 uppercase">
      {label}
    </span>
    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold mt-2 text-foreground">
      {title}
    </h2>
    <div className="flex items-center gap-3 mt-4">
      <div className="w-12 h-0.5 bg-primary/80" />
      <div className="w-2 h-0.5 bg-primary/40" />
      <div className="w-1 h-0.5 bg-primary/20" />
    </div>
  </motion.div>
);

export default SectionTitle;
