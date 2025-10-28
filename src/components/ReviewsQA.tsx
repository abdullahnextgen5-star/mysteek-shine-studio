import { useReveal } from "@/hooks/useReveal";
import { reviews, qa } from "@/data/home";
import { Star, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function ReviewsQA() {
  const ref = useReveal<HTMLElement>();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <section ref={ref} className="reveal py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Reviews */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Customer <span style={{ color: "hsl(var(--brand-accent))" }}>Love</span>
            </h2>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="glass-card p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" style={{ color: "hsl(var(--brand-accent))" }} />
                    ))}
                  </div>
                  <p className="text-white/90 mb-3 leading-relaxed">{review.text}</p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="text-white/70">
                      {review.name} • {review.shade}
                    </div>
                    {review.verified && (
                      <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/60">
                        Verified
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Q&A */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Questions & <span style={{ color: "hsl(var(--brand-accent))" }}>Answers</span>
            </h2>
            <div className="space-y-3">
              {qa.map((item, idx) => (
                <div key={idx} className="glass-card overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition"
                  >
                    <span className="text-white font-medium pr-4">{item.q}</span>
                    <ChevronDown 
                      className={`h-5 w-5 text-white/70 flex-shrink-0 transition-transform ${
                        openIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === idx && (
                    <div className="px-6 pb-4 text-white/70 leading-relaxed">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
