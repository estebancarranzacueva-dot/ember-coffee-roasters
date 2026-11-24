"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Fades and slides its children up once, the first time they scroll into view.
// The hidden starting state is only applied when the user has not asked for
// reduced motion (see [data-reveal] in app/globals.css).
export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.setAttribute("data-visible", "true");
        observer.disconnect();
      },
      { rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} data-reveal>
      {children}
    </div>
  );
}
