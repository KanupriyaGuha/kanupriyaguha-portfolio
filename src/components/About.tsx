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
          className="glass glass-hover rounded-2xl p-7 flex flex-col gap-6"
        >
          <div>
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center mb-4 shadow-lg shadow-violet-600/30">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Education</div>
            <div className="font-semibold">MS Data Science</div>
            <div className="text-sm text-muted-foreground">Rowan University</div>
            <div className="text-xs text-violet-400 mt-1">Class of 2025</div>
          </div>
          <div className="pt-5 border-t border-white/5">
            <div className="font-semibold">BS Computer Applications</div>
            <div className="text-sm text-muted-foreground">Mount Carmel College (Autonomous)</div>
            <div className="text-xs text-muted-foreground/80">Bengaluru, India</div>
            <div className="text-xs text-cyan-400 mt-1">Nov 2022</div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
