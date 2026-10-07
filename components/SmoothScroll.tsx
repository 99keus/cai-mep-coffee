"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;

    function configure() {
      lenis?.destroy();
      lenis = undefined;
      if (preference.matches) return;

      lenis = new Lenis({
        autoRaf: true,
        smoothWheel: true,
        lerp: 0.085,
        syncTouch: false,
        allowNestedScroll: true,
        anchors: { offset: -100 },
      });
    }

    configure();
    preference.addEventListener("change", configure);
    return () => {
      lenis?.destroy();
      preference.removeEventListener("change", configure);
    };
  }, [pathname]);

  return null;
}
