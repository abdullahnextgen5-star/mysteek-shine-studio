import { useReveal } from "@/hooks/useReveal";
import { blogPosts } from "@/data/home";
import { ArrowRight } from "lucide-react";

export default function BlogLearn() {
  const ref = useReveal<HTMLElement>();
  
  return (
    <section ref={ref} className="reveal py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center">
          Learn & <span style={{ color: "hsl(var(--brand-accent))" }}>Explore</span>
        </h2>
        <p className="text-white/70 text-center mb-12">
          Tips, tutorials, and stories from our community
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group glass-card overflow-hidden hover:bg-white/10 transition"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-white/60 text-xs mb-2">{post.date}</div>
                <h3 className="text-lg font-bold text-white mb-2">{post.title}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                <a 
                  href="#blog" 
                  className="inline-flex items-center gap-2 text-sm font-medium link-underline"
                  style={{ color: "hsl(var(--brand-accent))" }}
                >
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
