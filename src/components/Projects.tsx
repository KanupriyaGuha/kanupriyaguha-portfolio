import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { MouseEvent, useRef } from "react";
import { Section } from "./Section";

type Project = {
  title: string;
  description: string;
  tech: string[];
  demo: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "A/B Testing Framework",
    description:
      "Statistical experimentation platform supporting z-test, t-test, chi-square, and power analysis on 30K+ synthetic users. Interactive Streamlit dashboard with real-time significance testing.",
    tech: ["Python", "SciPy", "Pandas", "Plotly", "Streamlit"],
    demo: "https://a-b-testing-framework.streamlit.app",
    github: "https://github.com/KanupriyaGuha/A-B-Testing-Framework",
  },
  {
    title: "E-commerce Customer Analytics",
    description:
      "Full RFM segmentation and cohort retention analysis on 2,000 customers and 11K transactions. 11 behavioral segments, churn risk scoring, and revenue trend analysis.",
    tech: ["Python", "Pandas", "RFM Analysis", "Cohort Analysis", "Plotly", "Streamlit"],
    demo: "https://e-commerce-customer-analytics.streamlit.app",
    github: "https://github.com/KanupriyaGuha/E-Commerce-Customer-Analytics",
  },
  {
    title: "Databricks ETL Pipeline",
    description:
      "Production-style PySpark ETL pipeline processing 1.18M+ records through Bronze → Silver → Gold medallion architecture with automated data quality validation and referential integrity checks.",
    tech: ["PySpark", "Delta Lake", "Medallion Architecture", "Data Validation", "Python", "Streamlit"],
    demo: "https://databricks-etl-pipeline.streamlit.app",
    github: "https://github.com/KanupriyaGuha/Databricks-ETL-Pipeline",
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(sy, [-50, 50], [8, -8]);
  const rotateY = useTransform(sx, [-50, 50], [-8, 8]);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: i * 0.12 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="glass glass-hover rounded-2xl p-8 h-full flex flex-col relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 via-transparent to-cyan-500/0 group-hover:from-violet-600/10 group-hover:to-cyan-500/10 transition-all duration-500 pointer-events-none" />
        <div className="text-xs text-violet-400/70 font-mono mb-3">0{i + 1}</div>
        <h3 className="text-2xl font-bold tracking-tight mb-4">{p.title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{p.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {p.tech.map((t) => (
            <span key={t} className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <a
            href={p.demo}
            target="_blank"
            rel="noreferrer"
            className="gradient-button inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white"
          >
            <ExternalLink className="h-3.5 w-3.5" /> Live Demo
          </a>
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border border-white/10 hover:border-violet-400/50 hover:bg-white/5 transition"
          >
            <Github className="h-3.5 w-3.5" /> GitHub
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </Section>
  );
}
