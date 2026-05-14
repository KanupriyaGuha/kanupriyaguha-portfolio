import { motion } from "framer-motion";
import { Database, Brain, Code2, Cloud } from "lucide-react";
import { Section } from "./Section";

const groups = [
  { icon: Database, title: "Data Engineering", items: ["PySpark", "Delta Lake", "Databricks", "SQL", "dbt", "Airflow", "ETL"] },
  { icon: Brain, title: "Machine Learning", items: ["PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace", "LLMs", "RAG"] },
  { icon: Code2, title: "Languages & Tools", items: ["Python", "SQL", "Java", "Git", "Docker"] },
  { icon: Cloud, title: "Cloud & Platforms", items: ["AWS", "GCP", "Databricks", "Streamlit", "FastAPI"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools of the trade">
      <div className="grid sm:grid-cols-2 gap-6">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass glass-hover rounded-2xl p-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-600/30 to-cyan-500/30 border border-violet-400/20 flex items-center justify-center">
                <g.icon className="h-5 w-5 text-violet-300" />
              </div>
              <h3 className="font-semibold text-lg">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="skill-pill text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-muted-foreground hover:text-foreground"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
