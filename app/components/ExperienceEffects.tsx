"use client";
import { useEffect, useState } from "react";

export default function ExperienceEffects() {
  const [interactive, setInteractive] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const updateCursor = (event: MouseEvent) => {
      root.style.setProperty("--cursor-x", `${event.clientX}px`); root.style.setProperty("--cursor-y", `${event.clientY}px`);
      setInteractive(Boolean((event.target as Element | null)?.closest("a, button, summary")));
    };
    const updateScroll = () => root.style.setProperty("--page-scroll", `${window.scrollY}px`);
    document.body.classList.add("has-custom-cursor"); window.addEventListener("mousemove", updateCursor, { passive: true }); window.addEventListener("scroll", updateScroll, { passive: true }); updateScroll();
    return () => { document.body.classList.remove("has-custom-cursor"); window.removeEventListener("mousemove", updateCursor); window.removeEventListener("scroll", updateScroll); };
  }, []);
  return <div className={`custom-cursor${interactive ? " is-interactive" : ""}`} aria-hidden="true"><span>✦</span></div>;
}
