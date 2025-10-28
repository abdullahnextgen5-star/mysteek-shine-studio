import { useReveal } from "@/hooks/useReveal";
import { Shield, Droplet, Info } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "No Harsh Chemicals",
    description: "Free from ammonia, peroxide, and PPD. Gentle formula that respects your hair's natural structure."
  },
  {
    icon: Droplet,
    title: "Patch Test Recommended",
    description: "Always test on a small area 48 hours before full application. Safety first, always."
  },
  {
    icon: Info,
    title: "Less Staining Tips",
    description: "Apply to dry hair, avoid excess product, and let dry completely before touching. Use a barrier cream at hairline."
  }
];

export default function IngredientsSafety() {
  const ref = useReveal<HTMLElement>();
  
  return (
    <section ref={ref} className="reveal py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          Safe & <span style={{ color: "hsl(var(--brand-accent))" }}>Gentle</span>
        </h2>
        <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
          Formulated for natural hair with ingredients you can trust
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="glass-card p-6 text-center">
              <div 
                className="h-16 w-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                style={{ background: "hsl(var(--brand-primary) / 0.2)" }}
              >
                <item.icon className="h-8 w-8" style={{ color: "hsl(var(--brand-accent))" }} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
