import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { staggerContainer, scaleIn } from "@/animation/variants";
import { products } from "@/data/home";

export default function BestSellers() {
  return (
    <Reveal>
      <section id="shop" className="mx-auto max-w-7xl px-4 md:px-6 py-12 md:py-20">
        <div className="text-center mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "hsl(var(--brand-accent))" }}
          >
            Best Sellers
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-white"
          >
            Most Loved Shades
          </motion.h2>
        </div>

        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={scaleIn}>
              <ProductCard {...product} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 md:mt-12 text-center"
        >
          <a href="#all-colors" className="btn-primary">
            View All Colors
          </a>
        </motion.div>
      </section>
    </Reveal>
  );
}
