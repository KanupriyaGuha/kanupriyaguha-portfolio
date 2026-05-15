import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const items = [
  { Icon: Mail, label: "Email", value: "kanupriyaguha25@gmail.com", href: "mailto:kanupriyaguha25@gmail.com" },
  { Icon: Phone, label: "Phone", value: "856-347-6694", href: "tel:+18563476694" },
  { Icon: MapPin, label: "Location", value: "New York City, NY" },
  { Icon: Github, label: "GitHub", value: "github.com/kanupriyaguha", href: "https://github.com/kanupriyaguha" },
  { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kanupriyaguha", href: "https://linkedin.com/in/kanupriyaguha" },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-xs uppercase tracking-[0.3em] text-violet-400/80 mb-4">Get in Touch</div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-gradient mb-6">
            Let's build something.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
            Let’s connect and build something great together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 text-left"
        >
          {items.map((it) => {
            const inner = (
              <div className="glass glass-hover rounded-2xl p-5 h-full flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-600/30 to-cyan-500/30 border border-violet-400/20 flex items-center justify-center shrink-0">
                  <it.Icon className="h-4 w-4 text-violet-300" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-0.5">{it.label}</div>
                  <div className="text-sm font-medium truncate">{it.value}</div>
                </div>
              </div>
            );
            return it.href ? (
              <a key={it.label} href={it.href} target={it.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                {inner}
              </a>
            ) : (
              <div key={it.label}>{inner}</div>
            );
          })}
        </motion.div>

        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="mailto:kanupriyaguha25@gmail.com"
          className="inline-flex items-center gap-3 gradient-button px-8 py-4 rounded-full text-base font-medium text-white"
        >
          <Mail className="h-5 w-5" /> Send me an email
        </motion.a>
      </div>
      <div className="mx-auto max-w-7xl mt-32 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kanupriya Guha. Built with React, Tailwind & Framer Motion.
      </div>
    </section>
  );
}
