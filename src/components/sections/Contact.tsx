"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export function Contact() {
  return (
    <section
      id="contact"
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
            03 — Contact
          </span>
          <span className="h-px flex-1 bg-line" />
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          <motion.div variants={fadeUp} className="flex flex-col gap-8">
            <h2 className="font-display text-[clamp(2.4rem,7vw,6rem)] leading-[0.98] tracking-tight text-ink">
              Let&apos;s build{" "}
              <span className="italic text-ink-dim">something</span>.
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-ink-dim md:text-lg">
              Working on something ambitious in AI, investing, or want to
              compare notes on solo shipping? My inbox is open.
            </p>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="mailto:info@portail.cc"
                className="group inline-flex items-center gap-3 self-start border border-ink bg-ink px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-bg transition-colors duration-300 hover:bg-bg hover:text-ink"
              >
                info@portail.cc
                <ArrowOut />
              </a>
              <a
                href="https://portail.cc"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 self-start border border-line px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-dim transition-colors duration-300 hover:border-ink hover:text-ink"
              >
                Main project: Portail
                <ArrowOut />
              </a>
            </div>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            className="grid grid-cols-2 self-end border-t border-l border-line"
          >
            <Meta label="Region" value="Samarkand" />
            <Meta label="Focus" value="AI Engineering" />
            <Meta label="Status" value="Available" />
            <Meta label="Year" value="MMXXVI" />
          </motion.dl>
        </div>

        <motion.div
          variants={fadeUp}
          className="flex flex-col items-start justify-between gap-4 border-t border-line pt-8 font-mono text-xs uppercase tracking-[0.2em] text-ink-mute sm:flex-row sm:items-center"
        >
          <span>© 2026 · Eshimov Azizbek</span>
          <span>Hand-coded with Next · Framer</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-2 border-b border-r border-line p-6">
      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-mute">
        {label}
      </dt>
      <dd className="font-display text-lg text-ink">{value}</dd>
    </div>
  );
}

function ArrowOut() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M3 11 L11 3 M5 3 L11 3 L11 9"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}
