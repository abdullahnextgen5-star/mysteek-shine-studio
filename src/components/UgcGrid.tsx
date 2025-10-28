import { useReveal } from "@/hooks/useReveal";
import { ugcImages } from "@/data/home";
import { useState } from "react";
import { X } from "lucide-react";

export default function UgcGrid() {
  const ref = useReveal<HTMLElement>();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  
  return (
    <section ref={ref} className="reveal py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          Real People. <span style={{ color: "hsl(var(--brand-accent))" }}>Bold Color.</span>
        </h2>
        <p className="text-white/70 text-center mb-12">
          Share your look with #MysteekNaturals
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {ugcImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="aspect-square overflow-hidden rounded-lg group"
            >
              <img
                src={img}
                alt={`Customer photo ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </button>
          ))}
        </div>
      </div>
      
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-[80] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            aria-label="Close"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          <img
            src={ugcImages[lightboxIndex]}
            alt={`Customer photo ${lightboxIndex + 1}`}
            className="max-w-full max-h-full rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
