import GlassNav from "@/components/GlassNav";
import Loader from "@/components/Loader";
import Hero from "@/sections/Hero";
import ValueProps from "@/sections/ValueProps";
import BestSellers from "@/sections/BestSellers";
import HowItWorks from "@/sections/HowItWorks";
import { motion } from "framer-motion";

export default function Index() {
  return (
    <>
      <Loader minMs={1800} />
      <GlassNav />
      <main className="relative">
        <Hero />
        <ValueProps />
        <BestSellers />
        <HowItWorks />

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative mt-20 border-t border-white/10"
        >
          <div className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold mb-4" style={{ color: "hsl(var(--foreground))" }}>
                  Mysteek <span style={{ color: "hsl(var(--brand-accent))" }}>Naturals</span>
                </h3>
                <p className="text-white/70 max-w-md leading-relaxed">
                  Bold, washable hair color that celebrates natural hair. No harsh chemicals, 
                  just vibrant self-expression.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">Shop</h4>
                <ul className="space-y-2 text-white/70">
                  <li><a href="#" className="link-underline hover:text-white transition">All Colors</a></li>
                  <li><a href="#" className="link-underline hover:text-white transition">New Arrivals</a></li>
                  <li><a href="#" className="link-underline hover:text-white transition">Best Sellers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 text-white/90">Support</h4>
                <ul className="space-y-2 text-white/70">
                  <li><a href="#" className="link-underline hover:text-white transition">How To Apply</a></li>
                  <li><a href="#" className="link-underline hover:text-white transition">Shade Finder</a></li>
                  <li><a href="#" className="link-underline hover:text-white transition">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
              <div>© 2025 Mysteek Naturals. All rights reserved.</div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition">Privacy</a>
                <a href="#" className="hover:text-white transition">Terms</a>
                <a href="#" className="hover:text-white transition">Accessibility</a>
              </div>
            </div>
          </div>
        </motion.footer>
      </main>
    </>
  );
}
