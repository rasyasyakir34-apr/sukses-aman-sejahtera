"use client";

import { useEffect } from "react";

/**
 * Fades in every `[data-reveal]` element as it enters the viewport.
 * The visible state is a data attribute so hydration never sees a mismatch.
 */
export function ScrollReveal() {
  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    let observer: IntersectionObserver | null = null;

    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.setAttribute("data-visible", ""));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.setAttribute("data-visible", "");
            observer?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -6% 0px", threshold: 0.08 },
      );

      elements.forEach((el) => observer?.observe(el));
    }

    const onPointerMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      const card = target?.closest<HTMLElement>("[data-spotlight]");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
      card.style.setProperty("--my", `${event.clientY - rect.top}px`);
    };

    document.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      observer?.disconnect();
      document.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return null;
}
