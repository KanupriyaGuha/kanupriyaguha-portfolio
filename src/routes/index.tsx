import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/Background";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kanupriya Guha — Data Engineer & ML Engineer" },
      { name: "description", content: "Portfolio of Kanupriya Guha — Data Engineer and ML Engineer building data pipelines, ML systems, and analytics at scale. PySpark, Delta Lake, LLMs, RAG." },
      { property: "og:title", content: "Kanupriya Guha — Data Engineer & ML Engineer" },
      { property: "og:description", content: "Building data pipelines, ML systems, and analytics at scale." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
