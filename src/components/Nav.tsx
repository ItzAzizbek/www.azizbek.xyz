"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [now, setNow] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setNow(
        d.toLocaleTimeString("en-GB", {
          timeZone: "Asia/Samarkand",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }) + " SMK",
      );
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled
          ? "border-b border-line bg-bg/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a
          href="#hero"
          className="font-display text-lg tracking-tight text-ink"
        >
          Eshimov<span className="italic text-ink-dim">.</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="link-underline text-sm text-ink-dim transition-colors hover:text-ink"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="hidden font-mono text-xs tracking-tight text-ink-mute tabular-nums md:block">
          {now || "—"}
        </div>
      </div>
    </header>
  );
}
