import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";

type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
};

const roles: Role[] = [
  {
    title: "ML Engineer — NLP & LLM Projects",
    company: "Independent / Contract",
    location: "Remote, USA",
    period: "Jun 2025 – Present",
    bullets: [
      "Fine-tuned BERT-based sentiment model (88.14% F1), deployed via FastAPI for real-time classification.",
      "Engineered production RAG pipeline (LangChain + ChromaDB, 500-char chunking, top-4 retrieval), deployed on Streamlit Cloud with zero hallucination tolerance.",
      "Built end-to-end MLflow experiment tracking across 3 models (75.4% peak accuracy), automated drift detection flagging 11.7% accuracy drop and triggering retraining.",
    ],
  },
  {
    title: "Data & Technical Systems (Volunteer)",
    company: "Your Hearing Dog Inc.",
    location: "Remote, USA",
    period: "Jun 2025 – Present",
    bullets: [
      "Developed and maintained web systems (HTML, CSS, JS, WordPress) supporting org workflows.",
      "Analyzed traffic data for bottlenecks; implemented SEO and analytics improvements.",
    ],
  },
  {
    title: "Business Operations Intern",
    company: "Knowles Teacher Initiative",
    location: "Morristown, NJ",
    period: "May – Aug 2024",
    bullets: [
      "Administered SAP financial system tracking $80K in fellowship funding; SQL-based reporting for 600+ Fellows across 42 states.",
      "Automated Salesforce CRM workflows for 1,000+ stakeholder records.",
      "Built Power BI & Tableau dashboards for senior leadership KPI tracking.",
    ],
  },
  {
    title: "Data Analyst",
    company: "KK Educational Services",
    location: "Bengaluru, India",
    period: "Jun 2020 – Jul 2023",
    bullets: [
      "Built 8+ Power BI/Tableau dashboards on SQL-cleaned datasets for 200+ student records.",
      "Identified at-risk cohorts contributing to 15% pass rate increase over 3 academic years.",
      "Automated ETL pipelines reducing manual reporting time by 35%.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="relative">
        <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-violet-500/40 via-cyan-500/30 to-transparent" />
        <div className="space-y-6">
          {roles.map((r, i) => (
            <motion.div
              key={r.title + r.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-12 md:pl-16"
            >
              <div className="absolute left-0 md:left-2 top-6 h-9 w-9 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-violet-600/30 ring-4 ring-[#050508]">
                <Briefcase className="h-4 w-4 text-white" />
              </div>
              <div className="glass glass-hover rounded-2xl p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                  <h3 className="text-xl font-semibold tracking-tight">{r.title}</h3>
                  <span className="text-xs font-mono text-violet-400/80">{r.period}</span>
                </div>
                <div className="text-sm text-muted-foreground mb-4">
                  <span className="text-foreground/90">{r.company}</span>
                  <span className="mx-2 text-muted-foreground/50">·</span>
                  <span>{r.location}</span>
                </div>
                <ul className="space-y-2">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-2 h-1 w-1 rounded-full bg-cyan-400 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
