"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { scrollStore } from "@/lib/scrollStore";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      touchMultiplier: 1.4,
    });
    lenisRef.current = lenis;

    let lastY = 0;
    function raf(time: number) {
      lenis.raf(time);
      const max =
        document.documentElement.scrollHeight - window.innerHeight || 1;
      const y = window.scrollY;
      const progress = Math.min(1, Math.max(0, y / max));
      const velocity = y - lastY;
      lastY = y;
      scrollStore.set({ progress, velocity });
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
