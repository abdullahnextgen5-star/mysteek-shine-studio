import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import { Sparkles } from "lucide-react";

export default function ShadeFinderCta() {
  const ref = useReveal<HTMLElement>();
  const [hairType, setHairType] = useState("");
  const [colorFamily, setColorFamily] = useState("");
  const [occasion, setOccasion] = useState("");
  
  return (
    <section ref={ref} className="reveal py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="glass-card p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/20 px-4 py-2 text-sm mb-4">
                <Sparkles className="h-4 w-4" style={{ color: "hsl(var(--brand-accent))" }} />
                <span className="text-white/90">Find Your Perfect Match</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Not sure which shade?
              </h2>
              <p className="text-white/70 mb-6">
                Answer a few quick questions and we'll recommend the perfect shades for your style.
              </p>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm mb-2">Your hair type</label>
                  <div className="flex gap-2">
                    {["Straight", "Wavy", "Curly", "Coily"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setHairType(type)}
                        className={`flex-1 px-3 py-2 rounded-lg border text-sm transition ${
                          hairType === type
                            ? "border-brand-accent bg-white/10 text-white"
                            : "border-white/20 text-white/70 hover:border-white/40"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm mb-2">Preferred color family</label>
                  <select
                    value={colorFamily}
                    onChange={(e) => setColorFamily(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/5 text-white"
                  >
                    <option value="">Select...</option>
                    <option value="purples">Purples</option>
                    <option value="blues">Blues</option>
                    <option value="pinks">Pinks</option>
                    <option value="reds">Reds</option>
                    <option value="greens">Greens</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm mb-2">Occasion</label>
                  <div className="flex gap-2">
                    {["Everyday", "Special Event", "Weekend Fun"].map((occ) => (
                      <button
                        key={occ}
                        onClick={() => setOccasion(occ)}
                        className={`flex-1 px-3 py-2 rounded-lg border text-xs transition ${
                          occasion === occ
                            ? "border-brand-accent bg-white/10 text-white"
                            : "border-white/20 text-white/70 hover:border-white/40"
                        }`}
                      >
                        {occ}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <button className="btn-primary mt-6 w-full md:w-auto">
                Find Your Shade
              </button>
            </div>
            
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&h=600&fit=crop"
                alt="Shade finder"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
