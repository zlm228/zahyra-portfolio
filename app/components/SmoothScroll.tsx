"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const usesTouch = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || usesTouch) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.88,
    });

    return () => lenis.destroy();
  }, []);

  return null;
}
