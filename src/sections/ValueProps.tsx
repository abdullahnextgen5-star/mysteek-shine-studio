import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "@/animation/variants";
import { Droplet, Sparkles, Clock, Heart } from "lucide-react";

const items = [
  {
    icon: Droplet,
    title: "Washable",
    desc: "Rinses clean without harsh removers"
  },
  {
    icon: Heart,
    title: "No Harsh Chemicals",
    desc: "Gentle on natural hair"
  },
  {
    icon: Clock,
    title: "Fast Application",
    desc: "Bold color in minutes"
  },
  {
    icon: Sparkles,
    title: "Curl Friendly",
    desc: "Defines without stiffness"
  }
];

export default function ValueProps() {
  return (
    <motion.section
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
    >
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={item.title}
            variants={scaleIn}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group rounded-2xl border border-white/15 glass-card p-5 md:p-6 text-white hover:border-white/30 transition-all duration-300"
          >
            <div
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl mb-4 transition-all duration-300 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, hsl(var(--brand-primary) / 0.2), hsl(var(--brand-accent) / 0.1))"
              }}
            >
              <Icon className="h-6 w-6" style={{ color: "hsl(var(--brand-accent))" }} />
            </div>
            <div className="text-base md:text-lg font-bold mb-2">{item.title}</div>
            <div className="text-sm text-white/70 leading-relaxed">{item.desc}</div>
          </motion.div>
        );
      })}
    </motion.section>
  );
}
