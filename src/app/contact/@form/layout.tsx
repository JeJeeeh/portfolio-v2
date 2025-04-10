"use client";

import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

export default function AboutFormLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useGsapScrollTrigger(
    () => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      tl.from(
        formRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );
    },
    [],
    containerRef
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center space-y-[var(--content-space-y)] px-[var(--content-px)] py-[var(--content-py)]"
    >
      <h2 ref={titleRef} className="text-5xl font-semibold">
        Contact me
      </h2>
      <div ref={formRef}>{children}</div>
    </div>
  );
}
