import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-[#050508]/70 border-b border-white/5" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="group relative">
          <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 font-bold text-white tracking-tight shadow-lg shadow-violet-600/30">
            KG
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-white/5"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href="https://github.com/kanupriyaguha" target="_blank" rel="noreferrer"
            className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-white/10 hover:border-violet-400/50 hover:bg-white/5 transition">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://linkedin.com/in/kanupriyaguha" target="_blank" rel="noreferrer"
            className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-white/10 hover:border-violet-400/50 hover:bg-white/5 transition">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.header>
  );
}
