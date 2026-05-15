import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { MouseEvent, useRef } from "react";
import { Section } from "./Section";
import ddfLogo from "@/assets/datadropfriday-logo.png";

type Project = {
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  github: string;
};

const featured: Project = {
  title: "DataDropFriday",
  description:
    "A content platform delivering weekly music trend publication tracking what's rising, peaking, and falling across streaming platforms — delivered every Friday through clean, data-driven visuals. Pulling from sources like Apple Music, Spotify, and more, each drop breaks down the top songs, artists, and genres of the week with the cultural context behind the numbers. Think of it as the music industry's pulse, translated into something anyone can actually read.",
  tech: ["Python", "Streamlit", "Pandas", "NLP", "Automated Reporting"],
  github: "https://github.com/kanupriyaguha/DataDropFriday",
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
    tech: ["Python", "Pandas", "RFM", "Cohort Analysis", "Plotly", "Streamlit"],
    demo: "https://e-commerce-customer-analytics.streamlit.app",
    github: "https://github.com/KanupriyaGuha/E-Commerce-Customer-Analytics",
  },
  {
    title: "Databricks ETL Pipeline",
    description:
      "Production-style PySpark ETL pipeline processing 1.18M+ records through Bronze → Silver → Gold medallion architecture with automated data quality validation and referential integrity checks.",
    tech: ["PySpark", "Delta Lake", "Medallion", "Data Validation", "Streamlit"],
    demo: "https://databricks-etl-pipeline.streamlit.app",
    github: "https://github.com/KanupriyaGuha/Databricks-ETL-Pipeline",
  },
  {
    title: "Resume Analyzer — RAG Pipeline",
    description:
      "Production RAG pipeline that chunks PDF resumes into 500-character embeddings stored in ChromaDB, retrieves semantically similar content per query, and generates grounded LLM answers with zero hallucination tolerance.",
    tech: ["Python", "LangChain", "ChromaDB", "LLM", "Streamlit"],
    demo: "https://resume-analyzer-rag.streamlit.app",
    github: "https://github.com/kanupriyaguha/resume-analyzer-rag",
  },
  {
    title: "NLP Sentiment Analyzer — BERT",
    description:
      "Fine-tuned BERT-base-uncased for 3-class sentiment classification achieving 88.14% weighted F1. Deployed as a FastAPI REST API and a live Gradio interface on HuggingFace Spaces.",
    tech: ["Python", "PyTorch", "HuggingFace", "BERT", "FastAPI", "Gradio"],
    github: "https://github.com/kanupriyaguha/nlp-sentiment-analyzer",
  },
  {
    title: "ML Pipeline with MLflow & FastAPI",
    description:
      "Production ML system with MLflow experiment tracking across 3 models, FastAPI inference endpoint, and automated drift detection — identified 11.7% accuracy drop and triggered retraining pipeline.",
    tech: ["Python", "MLflow", "Scikit-learn", "FastAPI", "Docker"],
    github: "https://github.com/kanupriyaguha/ml-pipeline-mlflow",
  },
];

function useTilt() {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(sy, [-50, 50], [6, -6]);
  const rotateY = useTransform(sx, [-50, 50], [-6, 6]);
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };
  return { ref, rotateX, rotateY, handleMove, handleLeave };
}

function FeaturedCard({ p }: { p: Project }) {
  const t = useTilt();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      style={{ perspective: 1200 }}
      className="mb-6"
    >
      <motion.div
        ref={t.ref}
        onMouseMove={t.handleMove}
        onMouseLeave={t.handleLeave}
        style={{ rotateX: t.rotateX, rotateY: t.rotateY, transformStyle: "preserve-3d" }}
        className="glass glass-hover rounded-3xl p-8 md:p-12 relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/15 via-transparent to-cyan-500/15 pointer-events-none" />
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
        <div className="relative grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-400/30 bg-violet-500/10 text-violet-300 text-[11px] font-medium uppercase tracking-widest mb-5">
              <Sparkles className="h-3 w-3" /> Flagship Project
            </div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gradient mb-4">
              {p.title}
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-7">
              {p.tech.map((tech) => (
                <span key={tech} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="gradient-button inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium text-white"
              >
                <Github className="h-4 w-4" /> View on GitHub
              </a>
            </div>
          </div>
          <div className="md:col-span-2 hidden md:flex items-center justify-center">
            <div className="relative h-56 w-56">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-500 opacity-30 blur-2xl" />
              <div className="relative h-full w-full glass rounded-3xl flex items-center justify-center p-6 bg-white/95">
                <img
                  src={ddfLogo}
                  alt="DataDropFriday logo"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const t = useTilt();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: i * 0.08 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        ref={t.ref}
        onMouseMove={t.handleMove}
        onMouseLeave={t.handleLeave}
        style={{ rotateX: t.rotateX, rotateY: t.rotateY, transformStyle: "preserve-3d" }}
        className="glass glass-hover rounded-2xl p-8 h-full flex flex-col relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 via-transparent to-cyan-500/0 group-hover:from-violet-600/10 group-hover:to-cyan-500/10 transition-all duration-500 pointer-events-none" />
        <div className="text-xs text-violet-400/70 font-mono mb-3">0{i + 1}</div>
        <h3 className="text-xl font-bold tracking-tight mb-3">{p.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {p.tech.map((x) => (
            <span key={x} className="text-[11px] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-muted-foreground">
              {x}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className="gradient-button inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-white"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
            </a>
          )}
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
      <FeaturedCard p={featured} />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} p={p} i={i} />
        ))}
      </div>
    </Section>
  );
}
