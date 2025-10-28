import { useReveal } from "@/hooks/useReveal";
import { shadeFamilies } from "@/data/home";
import { ArrowRight } from "lucide-react";

export default function ShadeFamilies() {
  const ref = useReveal<HTMLElement>();
  
  return (
    <section ref={ref} className="reveal py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Shop by <span style={{ color: "hsl(var(--brand-accent))" }}>Shade Family</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {shadeFamilies.map((family) => (
            <a
              key={family.id}
              href={`#shade-${family.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative overflow-hidden rounded-2xl border border-white/15 aspect-square"
            >
              <img 
                src={family.image} 
                alt={family.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div className="text-white font-bold text-lg mb-1">{family.name}</div>
                <div className="text-white/70 text-sm flex items-center gap-2">
                  {family.count} shades
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
