"use client";

import { useEffect, useRef } from "react";

type SolutionsGridAlignerProps = {
  children: React.ReactNode;
  className: string;
};

const ALIGNMENT_TARGETS = [
  "[data-card-description]",
  "[data-card-meta]",
  "[data-card-features]",
  "[data-card-approach]",
] as const;

export default function SolutionsGridAligner({
  children,
  className,
}: SolutionsGridAlignerProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let frameId = 0;

    const syncHeights = () => {
      frameId = 0;

      for (const selector of ALIGNMENT_TARGETS) {
        const nodes = Array.from(root.querySelectorAll<HTMLElement>(selector));

        for (const node of nodes) {
          node.style.minHeight = "";
        }

        if (nodes.length === 0) {
          continue;
        }

        const maxHeight = Math.max(
          ...nodes.map((node) => Math.ceil(node.getBoundingClientRect().height)),
        );

        for (const node of nodes) {
          node.style.minHeight = `${maxHeight}px`;
        }
      }
    };

    const scheduleSync = () => {
      if (frameId) return;
      frameId = window.requestAnimationFrame(syncHeights);
    };

    const resizeObserver = new ResizeObserver(() => {
      scheduleSync();
    });

    resizeObserver.observe(root);

    for (const card of root.querySelectorAll<HTMLElement>("[data-solution-card]")) {
      resizeObserver.observe(card);
    }

    scheduleSync();
    window.addEventListener("resize", scheduleSync);

    return () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }

      resizeObserver.disconnect();
      window.removeEventListener("resize", scheduleSync);
    };
  }, []);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
}
