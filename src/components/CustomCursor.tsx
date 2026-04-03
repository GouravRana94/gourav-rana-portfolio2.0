import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-[9999]"
        style={{ x: pos.x - 6, y: pos.y - 6 }}
        transition={{ type: "spring", damping: 30, stiffness: 500 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border border-primary pointer-events-none z-[9999]"
        style={{ x: pos.x - 12, y: pos.y - 12, opacity: 0.5 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />
      {/* Trailing laser dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-primary pointer-events-none z-[9999]"
        animate={{ x: pos.x - 3, y: pos.y - 3 }}
        transition={{ type: "spring", damping: 15, stiffness: 150 }}
        style={{ opacity: 0.6 }}
      />
    </>
  );
};

export default CustomCursor;
