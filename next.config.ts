import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emits a fully static site to `out/`, served by GitHub Pages at www.azizbek.xyz.
  output: "export",
  // Pages has no image optimizer, so `next/image` must serve sources as-is.
  images: { unoptimized: true },
};

export default nextConfig;
