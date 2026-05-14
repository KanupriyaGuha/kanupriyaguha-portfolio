import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="relative py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="text-xs uppercase tracking-[0.3em] text-violet-400/80 mb-4">{eyebrow}</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-gradient">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
