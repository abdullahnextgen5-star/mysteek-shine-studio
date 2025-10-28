import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ShoppingCart, Search, Menu } from "lucide-react";

export default function GlassNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-3 z-50 flex justify-center px-3">
      <motion.nav
        initial={false}
        animate={
          scrolled
            ? {
                scale: 0.98,
                y: 0,
                boxShadow: "0 12px 32px rgba(168, 85, 247, 0.2)"
              }
            : {
                scale: 1,
                y: 0,
                boxShadow: "0 8px 24px rgba(0, 0, 0, 0.3)"
              }
        }
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className={cn(
          "w-full max-w-7xl rounded-full border border-white/10",
          "backdrop-blur-xl",
          "px-4 md:px-8"
        )}
        style={{
          background: "linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(168, 85, 247, 0.05))",
          backdropFilter: "blur(20px)"
        }}
      >
        <div className="flex h-16 md:h-18 items-center justify-between">
          <a 
            href="/" 
            className="font-bold text-xl md:text-2xl tracking-tight"
            style={{ color: "hsl(var(--foreground))" }}
          >
            Mysteek <span style={{ color: "hsl(var(--brand-accent))" }}>Naturals</span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {["Shop", "Shade Finder", "How To Apply", "Before & After", "About"].map((label) => (
              <li key={label}>
                <a
                  href={"#" + label.toLowerCase().replace(/\s+/g, "-")}
                  className="group relative px-3 py-2 text-[15px] text-white/80 hover:text-white transition-colors duration-200"
                >
                  <span className="relative z-10">{label}</span>
                  <span className="absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                    style={{ background: "hsl(var(--brand-accent))" }}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button 
              className="hidden md:block p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </button>
            <button className="group relative overflow-hidden rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium text-white transition-all hover:border-white/40">
              <span className="relative z-10 flex items-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                <span className="hidden sm:inline">Cart</span>
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-bold"
                  style={{ background: "hsl(var(--brand-accent))", color: "hsl(var(--accent-foreground))" }}
                >
                  0
                </span>
              </span>
              <span 
                className="absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0"
                style={{ background: "hsl(var(--brand-primary) / 0.2)" }}
              ></span>
            </button>
            <button 
              className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}
