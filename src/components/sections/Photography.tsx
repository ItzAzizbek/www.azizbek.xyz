"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { photos } from "@/lib/photos";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export function Photography() {
  return (
    <section
      id="photography"
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
            03 — Photography
          </span>
          <span className="h-px flex-1 bg-line" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-mute">
            Off the clock
          </span>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] leading-[1.05] tracking-tight text-ink">
              Through the{" "}
              <span className="italic text-ink-dim">viewfinder</span>.
            </h2>
            <p className="max-w-md text-base leading-relaxed text-ink-dim md:text-lg">
              Frames from cities, mornings, and quiet corners — a side practice
              that keeps the eye honest.
            </p>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            className="grid grid-cols-2 self-end border-t border-l border-line"
          >
            <Meta label="Frames" value={String(photos.length).padStart(2, "0")} />
            <Meta label="Process" value="Available light" />
          </motion.dl>
        </div>

        {photos.length === 0 ? (
          <motion.p
            variants={fadeUp}
            className="border border-dashed border-line p-12 text-center font-mono text-xs uppercase tracking-[0.2em] text-ink-mute"
          >
            Drop photos into /public/photography/ and add them to src/lib/photos.ts
          </motion.p>
        ) : (
          <motion.ul
            variants={fadeUp}
            className="grid auto-rows-[180px] grid-flow-dense grid-cols-2 gap-2 md:auto-rows-[220px] md:grid-cols-4 md:gap-3"
          >
            {photos.map((p, i) => {
              const isFeature = i % 7 === 0;
              const isTall = i % 5 === 2;
              const isWide = i % 6 === 4;
              const span = isFeature
                ? "md:col-span-2 md:row-span-2"
                : isTall
                  ? "md:row-span-2"
                  : isWide
                    ? "md:col-span-2"
                    : "";

              return (
                <li key={p.src} className={span}>
                  <figure className="group relative h-full w-full overflow-hidden bg-bg-soft">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes={
                        isFeature
                          ? "(min-width: 768px) 50vw, 100vw"
                          : "(min-width: 768px) 25vw, 50vw"
                      }
                      className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                    />

                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    {(p.caption || p.year) && (
                      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 px-4 pb-3 pt-12 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        {p.caption && (
                          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/90">
                            {p.caption}
                          </span>
                        )}
                        {p.year && (
                          <span className="ml-auto font-mono text-[10px] tabular-nums text-white/70">
                            {p.year}
                          </span>
                        )}
                      </figcaption>
                    )}
                  </figure>
                </li>
              );
            })}
          </motion.ul>
        )}
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
