import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function useGsapScrollTrigger(
  animationFn: (ctx: gsap.Context) => void,
  deps: any[] = [],
  scopeRef?: React.RefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context((innerCtx) => {
      animationFn(innerCtx);
    }, scopeRef?.current || undefined);

    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      cancelAnimationFrame(id);
      ctx.revert(); // Clean up
    };
  }, deps);
}
