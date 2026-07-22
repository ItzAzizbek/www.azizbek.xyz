"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const STACK = [
  { name: "TypeScript", note: "Language" },
  { name: "JavaScript", note: "Language" },
  { name: "React", note: "Interface" },
  { name: "Next.js", note: "Framework" },
  { name: "Tailwind CSS", note: "Styling" },
  { name: "SCSS", note: "Styling" },
  { name: "Framer Motion", note: "Motion" },
  { name: "Three.js", note: "3D" },
  { name: "Node.js", note: "Runtime" },
  { name: "Express", note: "APIs" },
  { name: "SQL", note: "Data" },
  { name: "Supabase", note: "Backend" },
  { name: "Firebase", note: "Backend" },
  { name: "LLM APIs", note: "AI" },
  { name: "Figma", note: "Design" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export function Stack() {
  return (
    <section
      id="stack"
      className="relative mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-48"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.08 } },
        }}
        className="flex flex-col gap-20"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
            03 — Stack
          </span>
          <span className="h-px flex-1 bg-line" />
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <motion.h2
            variants={fadeUp}
            className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight text-ink"
          >
            Sharp tools, <span className="italic text-ink-dim">chosen</span> —
            not collected.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-6 text-base leading-[1.7] text-ink-dim md:text-lg"
          >
            <p>
              What I build with day to day. The list stays short on purpose —
              depth in a few tools beats a wall of logos.
            </p>
          </motion.div>
        </div>

        <motion.ul
          variants={fadeUp}
          className="grid grid-cols-2 gap-px border-t border-l border-line bg-line md:grid-cols-3 lg:grid-cols-5"
        >
          {STACK.map((s) => (
            <li
              key={s.name}
              className="group flex flex-col gap-3 border-b border-r border-line bg-bg p-6 transition-colors duration-500 hover:bg-bg-soft md:p-8"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-mute">
                {s.note}
              </span>
              <span className="font-display text-xl leading-none tracking-tight text-ink">
                {s.name}
              </span>
              <span className="mt-1 block h-px w-5 bg-ink-faint transition-all duration-500 group-hover:w-9 group-hover:bg-ink" />
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
