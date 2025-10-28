import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ minMs = 1800 }: { minMs?: number }) {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), minMs);
    return () => clearTimeout(t);
  }, [minMs]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[70] grid place-items-center"
          style={{
            background: "linear-gradient(135deg, hsl(270 50% 5%), hsl(270 60% 8%))"
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              className="relative h-20 w-20"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 1.2, 
                ease: "linear", 
                repeat: Infinity 
              }}
            >
              <div 
                className="absolute inset-0 rounded-full border-4 border-transparent"
                style={{ 
                  borderTopColor: "hsl(var(--brand-primary))", 
                  borderRightColor: "hsl(var(--brand-accent))",
                  filter: "drop-shadow(0 0 8px hsl(var(--brand-primary) / 0.5))"
                }} 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                transition: { delay: 0.3, duration: 0.5 } 
              }}
              className="text-xl md:text-2xl font-bold tracking-wide"
              style={{ color: "hsl(var(--foreground))" }}
            >
              Mysteek Naturals
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: [0, 1, 1, 0],
                scale: [0.9, 1, 1, 0.9],
                transition: { 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                } 
              }}
              className="text-sm text-white/60"
            >
              Bold. Washable. Natural.
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
