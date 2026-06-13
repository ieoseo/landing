"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal driver. Mirrors the handoff prototype's behavior:
 * staggers `.reveal` elements (i % 3) * 80ms and adds `in` as each enters the
 * viewport. Honors reduced-motion and degrades gracefully without IntersectionObserver.
 * Renders nothing — it only wires up the effect once on mount.
 */
export function RevealController() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    if (els.length === 0) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    els.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 3) * 80}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
