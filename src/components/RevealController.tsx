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
    // 일부 모바일 브라우저가 로드 직후 이전 스크롤 위치(하단)를 복원해 "맨 아래에서 시작"하는
    // 문제를 막는다. 해시 딥링크(#download 등)가 없으면 최상단에서 시작한다.
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    if (!window.location.hash) window.scrollTo(0, 0);

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
