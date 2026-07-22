"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const FACTS = [
  { label: "Age", value: "14" },
  { label: "IELTS", value: "8.0" },
  { label: "SAT", value: "1370" },
  { label: "Based in", value: "Samarkand" },
];

const PRINCIPLES = [
  {
    code: "01",
    title: "Models are a means",
    body: "The model is never the product. Context, memory, and routing are where the real engineering lives.",
  },
  {
    code: "02",
    title: "AI writes, I decide",
    body: "Generation is delegated; judgment isn't. I hold the architecture and the taste — the model holds the keyboard.",
  },
  {
    code: "03",
    title: "Velocity",
    body: "Ship a working surface in a day. Iterate against real users — not committees.",
  },
  {
    code: "04",
    title: "Useful on day one",
    body: "Tools that earn their keep immediately. No vapor, no decks. Links you can click.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-48"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
        className="flex flex-col gap-20"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
            01 — About
          </span>
          <span className="h-px flex-1 bg-line" />
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight text-ink"
          >
            Fourteen, and already{" "}
            <span className="italic text-ink-dim">shipping</span> AI to real
            users.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-6 text-base leading-[1.7] text-ink-dim md:text-lg"
          >
            <p>
              I&apos;m an AI engineer. My main project, Portail, unifies every
              frontier model behind one thread of context — it carries a $300K
              valuation. Everything in it was prototyped, designed, and built
              manually, character by character.
            </p>
            <p className="text-ink-mute">
              I&apos;m not interested in shortcuts that strip the craft out of
              the work. I&apos;m interested in tools that quietly do something
              that used to be tedious, expensive, or impossible.
            </p>
          </motion.div>
        </div>

        <motion.dl
          variants={fadeUp}
          className="grid grid-cols-2 gap-px border-t border-l border-line bg-line md:grid-cols-4"
        >
          {FACTS.map((f) => (
            <div
              key={f.label}
              className="flex flex-col gap-2 border-b border-r border-line bg-bg p-8"
            >
              <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-mute">
                {f.label}
              </dt>
              <dd className="font-display text-[clamp(1.8rem,4vw,3rem)] leading-none tracking-tight text-ink">
                {f.value}
              </dd>
            </div>
          ))}
        </motion.dl>

        <motion.dl
          variants={fadeUp}
          className="grid grid-cols-1 gap-px border-t border-l border-line bg-line md:grid-cols-2 lg:grid-cols-4"
        >
          {PRINCIPLES.map((p) => (
            <div
              key={p.code}
              className="group flex flex-col gap-4 border-b border-r border-line bg-bg p-8 transition-colors duration-500 hover:bg-bg-soft"
            >
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
                <span>{p.code}</span>
                <span className="block h-px w-6 bg-ink-faint transition-all duration-500 group-hover:w-10 group-hover:bg-ink" />
              </div>
              <dt className="font-display text-2xl text-ink">{p.title}</dt>
              <dd className="text-sm leading-relaxed text-ink-dim">
                {p.body}
              </dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
