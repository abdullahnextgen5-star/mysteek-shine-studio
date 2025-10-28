import { useReveal } from "@/hooks/useReveal";
import { pressLogos } from "@/data/home";

export default function PressStrip() {
  const ref = useReveal<HTMLElement>();
  
  return (
    <section ref={ref} className="reveal py-12 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <p className="text-center text-white/60 text-sm uppercase tracking-wider mb-6">
          As Featured In
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {pressLogos.map((logo) => (
            <a
              key={logo.name}
              href={logo.url}
              className="text-white/40 hover:text-white/70 transition text-xl font-bold"
            >
              {logo.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
