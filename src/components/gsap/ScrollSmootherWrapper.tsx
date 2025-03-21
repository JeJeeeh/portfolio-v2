"use client";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  children: React.ReactNode;
}

export default function ScrollSmootherWrapper({ children }: Props) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Sync Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Register ScrollTrigger proxy
    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value || 0) : lenis.scroll;
      },
    });

    return () => lenis.destroy();
  }, []);

  return (
    <div id="smooth-wrapper" className="grow">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
