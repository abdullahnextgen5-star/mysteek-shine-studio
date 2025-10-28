import { useReveal } from "@/hooks/useReveal";
import { Star, Heart, Shield, Sparkles } from "lucide-react";

const stats = [
  { icon: Heart, label: "10K+", sub: "Happy Customers" },
  { icon: Star, label: "4.8★", sub: "Avg Rating" },
  { icon: Sparkles, label: "24hr", sub: "Vibrant Wear" },
  { icon: Shield, label: "100%", sub: "Vegan & Cruelty-Free" }
];

export default function StatsTiles() {
  const ref = useReveal<HTMLElement>();
  
  return (
    <section ref={ref} className="reveal py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center hover:bg-white/10 transition"
            >
              <stat.icon className="h-8 w-8 mx-auto mb-3" style={{ color: "hsl(var(--brand-accent))" }} />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-white/70">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
