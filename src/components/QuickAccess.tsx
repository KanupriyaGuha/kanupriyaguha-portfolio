import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
import { Section } from "./Section";

const cards = [
  {
    label: "LinkedIn",
    url: "https://linkedin.com/in/kanupriyaguha",
    handle: "linkedin.com/in/kanupriyaguha",
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://linkedin.com/in/kanupriyaguha",
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    url: "https://github.com/kanupriyaguha",
    handle: "github.com/kanupriyaguha",
    qr: "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://github.com/kanupriyaguha",
    Icon: Github,
  },
];

export function QuickAccess() {
  return (
    <Section id="quick-access" eyebrow="Quick Access" title="Scan to connect instantly">
      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {cards.map((c, i) => (
          <motion.a
            key={c.label}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass glass-hover rounded-2xl p-8 flex flex-col items-center text-center group"
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-violet-400/80 mb-5">
              <c.Icon className="h-4 w-4" /> {c.label}
            </div>
            <div className="relative">
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-violet-600/40 to-cyan-500/40 blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
              <div className="relative p-3 rounded-2xl bg-white">
                <img src={c.qr} alt={`${c.label} QR code`} width={200} height={200} className="block h-[200px] w-[200px]" />
              </div>
            </div>
            <div className="mt-6 text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
              {c.handle}
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
