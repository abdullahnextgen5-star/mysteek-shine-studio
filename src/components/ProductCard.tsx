import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

type Props = {
  image: string;
  title: string;
  price: number;
  shade?: string;
};

export default function ProductCard({ image, title, price, shade }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 glass-card"
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{
            background: "linear-gradient(135deg, hsl(var(--brand-primary)), hsl(var(--brand-purple-glow)))"
          }}
        >
          <ShoppingCart className="h-4 w-4" />
          Quick Add
        </motion.button>
      </div>
      <div className="p-4 md:p-5">
        {shade && (
          <div className="mb-2 text-xs font-medium uppercase tracking-wide" style={{ color: "hsl(var(--brand-accent))" }}>
            {shade}
          </div>
        )}
        <h3 className="text-base md:text-lg font-semibold text-white mb-1">{title}</h3>
        <div className="text-lg font-bold" style={{ color: "hsl(var(--brand-accent))" }}>
          ${price.toFixed(2)}
        </div>
      </div>
    </motion.article>
  );
}
