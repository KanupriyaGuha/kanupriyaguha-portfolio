import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Typewriter } from "./Typewriter";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05]"
        >
          Kanupriya Guha
          <br />
          <span className="text-gradient">
            <Typewriter words={["Data Engineer", "ML Engineer", "Pipeline Builder", "Analytics Developer"]} />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          Building data pipelines, ML systems, and analytics at scale.
          <br />
          <span className="text-sm md:text-base text-muted-foreground/70 mt-2 block">
            MS Data Science · NLP · LLMs · RAG · PySpark · Delta Lake
          </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="gradient-button inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="glass glass-hover inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
          >
            <Download className="h-4 w-4" /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
