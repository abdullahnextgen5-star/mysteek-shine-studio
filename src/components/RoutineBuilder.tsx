import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import { Check } from "lucide-react";

export default function RoutineBuilder() {
  const ref = useReveal<HTMLElement>();
  const [selectedColor, setSelectedColor] = useState(false);
  const [selectedTools, setSelectedTools] = useState(false);
  const [selectedCare, setSelectedCare] = useState(false);
  
  const subtotal = 
    (selectedColor ? 19.99 : 0) + 
    (selectedTools ? 12.99 : 0) + 
    (selectedCare ? 8.99 : 0);
  
  return (
    <section ref={ref} className="reveal py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          Build Your <span style={{ color: "hsl(var(--brand-accent))" }}>Routine</span>
        </h2>
        <p className="text-white/70 text-center mb-12">
          Customize your perfect color experience
        </p>
        
        <div className="glass-card p-6 md:p-8">
          <div className="space-y-4 mb-6">
            <label className="flex items-center gap-4 p-4 rounded-xl border border-white/20 hover:border-white/40 cursor-pointer transition">
              <input
                type="checkbox"
                checked={selectedColor}
                onChange={(e) => setSelectedColor(e.target.checked)}
                className="w-5 h-5"
              />
              <div className="flex-1">
                <div className="text-white font-semibold">Pick a Color</div>
                <div className="text-white/60 text-sm">Choose your shade</div>
              </div>
              <div className="text-white font-bold">$19.99</div>
            </label>
            
            <label className="flex items-center gap-4 p-4 rounded-xl border border-white/20 hover:border-white/40 cursor-pointer transition">
              <input
                type="checkbox"
                checked={selectedTools}
                onChange={(e) => setSelectedTools(e.target.checked)}
                className="w-5 h-5"
              />
              <div className="flex-1">
                <div className="text-white font-semibold">Add Tools</div>
                <div className="text-white/60 text-sm">Brush + Cape</div>
              </div>
              <div className="text-white font-bold">$12.99</div>
            </label>
            
            <label className="flex items-center gap-4 p-4 rounded-xl border border-white/20 hover:border-white/40 cursor-pointer transition">
              <input
                type="checkbox"
                checked={selectedCare}
                onChange={(e) => setSelectedCare(e.target.checked)}
                className="w-5 h-5"
              />
              <div className="flex-1">
                <div className="text-white font-semibold">Choose Care</div>
                <div className="text-white/60 text-sm">Conditioning spray</div>
              </div>
              <div className="text-white font-bold">$8.99</div>
            </label>
          </div>
          
          <div className="border-t border-white/20 pt-4 flex items-center justify-between mb-4">
            <span className="text-white font-semibold">Subtotal</span>
            <span className="text-2xl font-bold" style={{ color: "hsl(var(--brand-accent))" }}>
              ${subtotal.toFixed(2)}
            </span>
          </div>
          
          <button 
            className="btn-primary w-full"
            disabled={subtotal === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}
