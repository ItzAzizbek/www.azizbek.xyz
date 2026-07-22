export type Project = {
  name: string;
  tagline: string;
  url: string;
  // Planet appearance — referenced by Cosmos canvas
  color: string;        // base color hex
  emissive: string;     // emissive tint hex
  size: number;         // radius (relative)
  hasRing?: boolean;
  ringTilt?: number;
  category: string;
  meta?: string;        // headline stat, shown on the card
  blurb?: string;       // longer description, flagship card only
};

export const projects: Project[] = [
  {
    name: "Portail",
    tagline: "Every frontier model. One thread of context.",
    url: "https://portail.cc",
    blurb:
      "GPT-5.5, Claude, Gemini and Llama in a single minimalist chat. Switch models mid-conversation without losing the thread — shared memory, document uploads, branching, and bring-your-own-key.",
    color: "#48cae4",
    emissive: "#00b4d8",
    size: 1,
    hasRing: true,
    ringTilt: 0.35,
    category: "AI Workspace",
    meta: "$300K valuation",
  },
  {
    name: "Clevora AI",
    tagline: "AI content creation and automation for creators.",
    url: "https://getclevora.xyz",
    color: "#7dd3fc",
    emissive: "#0284c7",
    size: 0.78,
    hasRing: true,
    ringTilt: -0.6,
    category: "Creator Tools",
    meta: "Live",
  },
];
