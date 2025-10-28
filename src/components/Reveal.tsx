import { PropsWithChildren } from "react";
import { useReveal } from "@/hooks/useReveal";

export default function Reveal({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
