import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("in");
      return;
    }
    
    const io = new IntersectionObserver(
      (entries) => entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      }),
      { threshold: 0.18 }
    );
    
    io.observe(el);
    return () => io.disconnect();
  }, []);
  
  return ref;
}
