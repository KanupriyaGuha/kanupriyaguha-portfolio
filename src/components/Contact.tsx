import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-violet-400/80 mb-4">Contact</div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gradient mb-8">
            Let's build something.
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Open to Data Engineering and ML Engineering roles. Currently on F1-OPT — STEM extension eligible.
          </p>
          <a
            href="mailto:guhakanupriya@gmail.com"
            className="inline-flex items-center gap-3 gradient-button px-8 py-4 rounded-full text-base font-medium text-white mb-8"
          >
            <Mail className="h-5 w-5" /> guhakanupriya@gmail.com
          </a>
          <div className="flex justify-center gap-3">
            <a href="https://github.com/kanupriyaguha" target="_blank" rel="noreferrer"
              className="h-12 w-12 inline-flex items-center justify-center rounded-full glass glass-hover">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/kanupriyaguha" target="_blank" rel="noreferrer"
              className="h-12 w-12 inline-flex items-center justify-center rounded-full glass glass-hover">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
      <div className="mx-auto max-w-7xl mt-32 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kanupriya Guha. Built with React, Tailwind & Framer Motion.
      </div>
    </section>
  );
}
