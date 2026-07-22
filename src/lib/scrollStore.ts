"use client";

import { useSyncExternalStore } from "react";

type State = {
  progress: number; // 0..1 over full doc
  velocity: number; // recent scroll velocity
  activePlanet: number | null; // index into projects, hovered from list
};

let state: State = { progress: 0, velocity: 0, activePlanet: null };
const listeners = new Set<() => void>();

export const scrollStore = {
  set(next: Partial<State>) {
    state = { ...state, ...next };
    listeners.forEach((l) => l());
  },
  get(): State {
    return state;
  },
  subscribe(l: () => void) {
    listeners.add(l);
    return () => listeners.delete(l);
  },
};

export function useScrollProgress(): number {
  return useSyncExternalStore(
    scrollStore.subscribe,
    () => scrollStore.get().progress,
    () => 0,
  );
}

export function useActivePlanet(): number | null {
  return useSyncExternalStore(
    scrollStore.subscribe,
    () => scrollStore.get().activePlanet,
    () => null,
  );
}

// Map global progress (0..1) to a local phase (0..1) over [from, to]
export function phase(p: number, from: number, to: number): number {
  if (to <= from) return 0;
  const t = (p - from) / (to - from);
  return Math.min(1, Math.max(0, t));
}

// Smoothstep for nicer easing
export function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}
