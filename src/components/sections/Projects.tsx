"use client";

import { motion } from "framer-motion";
import { projects } from "@/lib/projects";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section
      id="work"
      className="relative mx-auto max-w-7xl px-6 py-32 md:px-10 md:py-48"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.06 } },
        }}
        className="flex flex-col gap-16"
      >
        <motion.div variants={fadeUp} className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
            02 — Selected work
          </span>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
            {String(projects.length).padStart(2, "0")} in orbit
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-col gap-6">
          <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight text-ink">
            Things I&apos;ve <span className="italic text-ink-dim">shipped</span>.
          </h2>
          <p className="max-w-md text-base leading-relaxed text-ink-dim md:text-lg">
            Two products in active orbit. Both live, both clickable.
          </p>
        </motion.div>

        <motion.a
          variants={fadeUp}
          href={featured.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col gap-10 overflow-hidden border border-line bg-bg-soft p-8 transition-colors duration-500 hover:bg-bg md:gap-14 md:p-14"
        >
          <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
            <span className="inline-flex items-center gap-2 text-ink">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
              Main project · 01
            </span>
            <span>{featured.category}</span>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-display text-[clamp(2.6rem,8vw,6.5rem)] leading-[0.95] tracking-tight text-ink transition-transform duration-700 ease-out group-hover:-translate-y-1">
              {featured.name}<span className="text-ink-dim">.</span>
            </h3>
            <p className="max-w-2xl text-base leading-relaxed text-ink-dim md:text-lg">
              {featured.tagline}
            </p>
            {featured.blurb && (
              <p className="max-w-2xl text-sm leading-relaxed text-ink-mute md:text-base">
                {featured.blurb}
              </p>
            )}
          </div>

          <div className="mt-2 flex flex-wrap items-center justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.2em] text-ink">
            <span className="inline-flex items-center gap-3">
              <span>Visit</span>
              <span className="block h-px w-10 bg-ink transition-all duration-500 group-hover:w-20" />
              <ArrowOut />
            </span>
            {featured.meta && (
              <span className="text-ink-dim">{featured.meta}</span>
            )}
          </div>
        </motion.a>

        <motion.ul
          variants={fadeUp}
          className="flex flex-col border-t border-line"
        >
          {rest.map((proj, i) => (
            <li key={proj.name}>
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid items-baseline gap-4 border-b border-line px-2 py-8 transition-colors duration-500 hover:bg-bg-soft md:grid-cols-[4rem_1fr_auto] md:gap-10 md:px-6 md:py-10"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] tabular-nums text-ink-mute">
                  {String(i + 2).padStart(2, "0")}
                </span>

                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
                  <h3 className="font-display text-2xl tracking-tight text-ink transition-transform duration-500 ease-out group-hover:-translate-y-0.5 md:min-w-[10rem] md:text-3xl">
                    {proj.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-dim md:text-base">
                    {proj.tagline}
                  </p>
                </div>

                <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute transition-colors duration-300 group-hover:text-ink">
                  <span>{proj.category}</span>
                  <span className="block h-px w-6 bg-current transition-all duration-500 group-hover:w-12" />
                  <ArrowOut />
                </div>
              </a>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}

function ArrowOut() {
  return (
    <svg
      width="12"
      height="12"
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
