"use client";

import { useEffect, useState } from "react";

export function useViewportBelow(breakpoint: number): boolean {
  const [isBelow, setIsBelow] = useState(false);

  useEffect(() => {
    const update = () => {
      setIsBelow(window.innerWidth < breakpoint);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [breakpoint]);

  return isBelow;
}
