import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-2 glass glass-hover rounded-2xl p-8 md:p-10"
        >
          <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
            I'm a <span className="text-foreground">Data Engineer and ML Engineer</span> with 3+ years of
            experience building scalable data pipelines, NLP systems, and analytics dashboards. Currently on
            <span className="text-foreground"> F1-OPT</span>, MS in Data Science from Rowan University (2025).
            I specialize in <span className="text-foreground">PySpark, Delta Lake, LLMs, RAG,</span> and
            end-to-end ML systems.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="glass glass-hover rounded-2xl p-8 flex flex-col justify-between"
        >
          <div>
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center mb-5 shadow-lg shadow-violet-600/30">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Education</div>
            <div className="font-semibold text-lg">MS Data Science</div>
            <div className="text-muted-foreground">Rowan University</div>
          </div>
          <div className="text-sm text-violet-400 mt-6">Class of 2025</div>
        </motion.div>
      </div>
    </Section>
  );
}
