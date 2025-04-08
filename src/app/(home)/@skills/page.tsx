"use client";

import { useRef } from "react";
import SkillsChartContainer from "./components/SkillsChartContainer";
import HomeHeader from "@/components/shared/HomeHeader";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import gsap from "gsap";

export default function SkillSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapScrollTrigger(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      tl.from(headerRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    },
    [],
    containerRef
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col space-y-[var(--content-space-y)] bg-[var(--black)] text-[var(--white)] px-[var(--content-px)] py-[var(--content-py)]"
    >
      <HomeHeader ref={headerRef}>
        <p>
          <span className="text-[var(--gray-accent)]">I've utilized</span>{" "}
          various tech-stacks
        </p>
        <p>
          <span className="text-[var(--gray-accent)]">to suit</span> different
          project needs
        </p>
      </HomeHeader>
      <SkillsChartContainer />
    </div>
  );
}
