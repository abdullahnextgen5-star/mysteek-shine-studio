import { useReveal } from "@/hooks/useReveal";
import BeforeAfter from "./BeforeAfter";
import { beforeAfter } from "@/data/home";

export default function BeforeAfterRow() {
  const ref = useReveal<HTMLElement>();
  
  return (
    <section ref={ref} className="reveal py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          See the <span style={{ color: "hsl(var(--brand-accent))" }}>Transformation</span>
        </h2>
        <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
          Real results on natural hair. Drag to compare before and after.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {beforeAfter.map((item, idx) => (
            <BeforeAfter
              key={idx}
              before={item.before}
              after={item.after}
              caption={item.caption}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
