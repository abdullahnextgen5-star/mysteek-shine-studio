import { useReveal } from "@/hooks/useReveal";
import { bundles } from "@/data/home";
import { Check } from "lucide-react";

export default function Bundles() {
  const ref = useReveal<HTMLElement>();
  
  return (
    <section ref={ref} className="reveal py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          Value <span style={{ color: "hsl(var(--brand-accent))" }}>Bundles</span>
        </h2>
        <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
          Save more when you bundle. Perfect for trying multiple shades or gifting.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className="relative glass-card p-6 hover:bg-white/10 transition group"
            >
              {bundle.tag && (
                <div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: "hsl(var(--brand-accent))" }}
                >
                  {bundle.tag}
                </div>
              )}
              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white mb-2">{bundle.title}</h3>
                <p className="text-white/60 text-sm mb-3">{bundle.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl font-bold" style={{ color: "hsl(var(--brand-accent))" }}>
                    ${bundle.price}
                  </span>
                  <span className="text-white/40 text-sm line-through">
                    ${bundle.originalPrice}
                  </span>
                </div>
                <div className="text-xs font-semibold mt-1" style={{ color: "hsl(var(--brand-accent))" }}>
                  {bundle.savings}
                </div>
              </div>
              <ul className="space-y-2 mb-6">
                {bundle.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-white/80 text-sm">
                    <Check className="h-4 w-4 flex-shrink-0" style={{ color: "hsl(var(--brand-accent))" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full">
                Add Bundle
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
