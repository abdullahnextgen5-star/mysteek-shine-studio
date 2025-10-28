import { useRef, useState, useEffect } from "react";

type Props = {
  before: string;
  after: string;
  altBefore?: string;
  altAfter?: string;
  caption?: string;
};

export default function BeforeAfter({ 
  before, 
  after, 
  altBefore = "Before", 
  altAfter = "After", 
  caption 
}: Props) {
  const root = useRef<HTMLDivElement | null>(null);
  const [pct, setPct] = useState(50);
  
  const clamp = (n: number) => Math.min(100, Math.max(0, n));
  
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    
    const move = (clientX: number) => {
      const r = el.getBoundingClientRect();
      setPct(clamp(((clientX - r.left) / r.width) * 100));
    };
    
    let drag = false;
    const down = (e: PointerEvent) => { drag = true; move(e.clientX); };
    const up = () => { drag = false; };
    const moveEv = (e: PointerEvent) => { if (drag) move(e.clientX); };
    
    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", moveEv);
    window.addEventListener("pointerup", up);
    
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", moveEv);
      window.removeEventListener("pointerup", up);
    };
  }, []);
  
  return (
    <div 
      ref={root} 
      className="relative w-full overflow-hidden rounded-2xl border border-white/15 cursor-ew-resize"
    >
      <img src={before} alt={altBefore} className="block w-full h-auto" />
      <div 
        className="absolute inset-0 overflow-hidden pointer-events-none" 
        style={{ width: `${pct}%` }}
      >
        <img 
          src={after} 
          alt={altAfter} 
          className="absolute inset-0 w-full h-full object-cover" 
          style={{ width: `${10000 / pct}%` }}
        />
      </div>
      <div 
        className="absolute top-0 bottom-0 pointer-events-none" 
        style={{ left: `${pct}%` }}
      >
        <div className="h-full w-[3px] shadow-[0_0_0_2px_rgba(0,0,0,.2)]" style={{ background: "hsl(var(--brand-accent))" }} />
      </div>
      {caption && (
        <div className="absolute left-3 bottom-3 rounded-xl bg-black/60 backdrop-blur-sm px-3 py-2 text-xs text-white">
          {caption}
        </div>
      )}
      <span className="sr-only">Drag to compare before and after</span>
    </div>
  );
}
