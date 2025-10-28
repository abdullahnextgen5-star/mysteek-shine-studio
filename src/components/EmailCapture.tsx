import { useReveal } from "@/hooks/useReveal";
import { useState } from "react";
import { Mail, Check } from "lucide-react";

export default function EmailCapture() {
  const ref = useReveal<HTMLElement>();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };
  
  return (
    <section ref={ref} className="reveal py-16">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="glass-card p-8 md:p-12 text-center">
          <div 
            className="h-16 w-16 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ background: "hsl(var(--brand-primary))" }}
          >
            <Mail className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Get 10% Off Your First Order
          </h2>
          <p className="text-white/70 mb-8 max-w-lg mx-auto">
            Join our community and be the first to know about new shades, tutorials, and exclusive offers.
          </p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-accent"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Get 10% Off
              </button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 text-white">
              <Check className="h-5 w-5" style={{ color: "hsl(var(--brand-accent))" }} />
              <span>Thanks! Check your email for your discount code.</span>
            </div>
          )}
          
          <p className="text-white/50 text-xs mt-4">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </div>
      </div>
    </section>
  );
}
