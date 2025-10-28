import { motion } from "framer-motion";
import { staggerContainer, fadeUp, slideFrom } from "@/animation/variants";
import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home-hero" className="relative overflow-hidden pt-8 pb-12 md:pt-16 md:pb-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 px-4 md:px-6">
        <motion.div
          variants={staggerContainer(0.1, 0.08)}
          initial="hidden"
          animate="visible"
          className="relative z-10"
        >
          <motion.div
            variants={slideFrom("down")}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm mb-6"
          >
            <Sparkles className="h-4 w-4" style={{ color: "hsl(var(--brand-accent))" }} />
            <span className="text-white/90">As Featured in Essence & Allure</span>
          </motion.div>

          <motion.h1
            variants={slideFrom("down")}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] text-white mb-6"
          >
            Vibrant, Washable Color{" "}
            <span className="block mt-2" style={{ color: "hsl(var(--brand-accent))" }}>
              No Harsh Chemicals
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed mb-8"
          >
            Express yourself with bold, buildable shades that love your natural hair. 
            Washes out clean, defines beautifully.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <a href="#shop" className="btn-primary">
              Shop Hair Colors
            </a>
            <a
              href="#shade-finder"
              className="group relative overflow-hidden rounded-full border-2 px-6 py-3 text-sm md:text-base font-semibold text-white transition-all hover:border-white/60"
              style={{ borderColor: "rgba(255, 255, 255, 0.3)" }}
            >
              <span className="relative z-10">Find Your Shade</span>
              <span
                className="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0"
                style={{ background: "rgba(255, 255, 255, 0.1)" }}
              ></span>
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-8 text-sm"
          >
            {[
              { label: "10K+", sub: "Happy Customers" },
              { label: "Vegan", sub: "& Cruelty-Free" },
              { label: "24hr", sub: "Vibrant Color" }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-bold" style={{ color: "hsl(var(--brand-accent))" }}>
                  {stat.label}
                </div>
                <div className="text-white/70">{stat.sub}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.2 } }}
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden glass-card">
            <img
              src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&h=1000&fit=crop"
              alt="Model with vibrant purple hair color"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
          </div>

          <motion.div
            className="absolute -bottom-6 -left-4 md:-left-8 rounded-2xl glass-card px-5 py-4 text-sm md:text-base text-white max-w-[240px] shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.6 } }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full flex items-center justify-center" style={{ background: "hsl(var(--brand-primary))" }}>
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold">Washes Out Clean</div>
                <div className="text-xs text-white/70">No staining. No damage.</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute -top-4 -right-4 md:-right-8 h-20 w-20 md:h-24 md:w-24 rounded-full"
            style={{
              background: "radial-gradient(circle, hsl(var(--brand-accent)), transparent)",
              filter: "blur(40px)"
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>

      {/* Background gradients */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(50% 40% at 20% 20%, hsl(var(--brand-accent) / 0.15), transparent),
            radial-gradient(50% 50% at 80% 10%, hsl(var(--brand-primary) / 0.25), transparent),
            radial-gradient(40% 60% at 50% 100%, hsl(var(--brand-primary) / 0.15), transparent)
          `
        }}
      />
    </section>
  );
}
