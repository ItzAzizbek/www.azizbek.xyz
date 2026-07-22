"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-24 pt-40 md:px-10 md:pb-32 md:pt-48"
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
        }}
        className="flex flex-col gap-10"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 12 },
            show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
          }}
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-mute"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-ink" />
          AI Engineer · Samarkand
        </motion.div>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 24 },
            show: { opacity: 1, y: 0, transition: { duration: 1, ease } },
          }}
          className="font-display text-[clamp(3rem,11vw,10rem)] leading-[0.95] tracking-tight text-ink"
        >
          Eshimov Azizbek<span className="text-ink-dim">.</span>
        </motion.h1>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
          }}
          className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end"
        >
          <p className="max-w-xl text-lg leading-relaxed text-ink-dim md:text-xl">
            AI engineer, 14. I build{" "}
            <span className="text-ink">Portail</span> — a unified AI
            workspace valued at $300K — and ship the rest solo, fast, with
            taste.
          </p>

          <a
            href="#work"
            className="link-underline self-start font-mono text-xs uppercase tracking-[0.2em] text-ink md:self-end"
          >
            View work →
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1, ease }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-mute">
          Scroll
        </span>
        <span className="block h-8 w-px overflow-hidden bg-line">
          <span className="block h-2 w-px animate-[drop_2.4s_cubic-bezier(0.5,0.05,0.4,1)_infinite] bg-ink" />
        </span>
      </motion.div>

      <style jsx>{`
        @keyframes drop {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(400%);
          }
        }
      `}</style>
    </section>
  );
}
