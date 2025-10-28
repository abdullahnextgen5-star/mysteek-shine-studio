import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export const staggerContainer = (delay = 0.1, interval = 0.08): Variants => ({
  hidden: {},
  visible: { 
    transition: { 
      delayChildren: delay, 
      staggerChildren: interval 
    } 
  }
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

export const slideFrom = (dir: "left" | "right" | "up" | "down"): Variants => {
  const map = {
    left: { x: -24, y: 0 },
    right: { x: 24, y: 0 },
    up: { x: 0, y: 24 },
    down: { x: 0, y: -24 }
  }[dir];
  
  return {
    hidden: { opacity: 0, ...map },
    visible: { 
      opacity: 1, 
      x: 0, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };
};
