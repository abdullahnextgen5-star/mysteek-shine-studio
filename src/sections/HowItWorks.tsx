import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/animation/variants";
import Reveal from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "Choose Your Shade",
    description: "Browse our vibrant collection or use our Shade Finder to discover your perfect color match."
  },
  {
    number: "02",
    title: "Apply to Clean Hair",
    description: "Work product through dry or damp hair. Build intensity by adding more layers."
  },
  {
    number: "03",
    title: "Style & Express",
    description: "Style as usual. Your bold color stays vibrant for 24+ hours."
  },
  {
    number: "04",
    title: "Wash Out Clean",
    description: "Shampoo out completely when you're ready for a new look. No staining, no damage."
  }
];

export default function HowItWorks() {
  return (
    <Reveal>
      <section id="how-to-apply" className="relative mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "hsl(var(--brand-accent))" }}
          >
            How It Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Color in Minutes
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer(0.2, 0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              <div className="glass-card p-6 md:p-8 h-full">
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 font-bold text-2xl"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--brand-primary)), hsl(var(--brand-purple-glow)))",
                    color: "hsl(var(--foreground))"
                  }}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {step.number}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector line (hidden on mobile and last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-8 h-[2px] -translate-x-4">
                  <motion.div
                    className="h-full"
                    style={{ background: "hsl(var(--brand-accent))" }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.15, duration: 0.5 }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="#tutorials"
            className="group relative overflow-hidden rounded-full border-2 px-6 py-3 text-sm md:text-base font-semibold text-white transition-all hover:border-white/60"
            style={{ borderColor: "rgba(255, 255, 255, 0.3)" }}
          >
            <span className="relative z-10">Watch Video Tutorials</span>
            <span
              className="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0"
              style={{ background: "rgba(255, 255, 255, 0.1)" }}
            ></span>
          </a>
        </motion.div>

        {/* Background decoration */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none -z-10"
          style={{
            background: "radial-gradient(circle, hsl(var(--brand-primary) / 0.1), transparent)",
            filter: "blur(80px)"
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </section>
    </Reveal>
  );
}
