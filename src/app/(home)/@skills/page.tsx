"use client";

import { useRef } from "react";
import SkillsChartContainer from "./components/SkillsChartContainer";
import HomeHeader from "@/components/shared/HomeHeader";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import gsap from "gsap";
import { getDefaultPageStyle } from "@/config/stylingConfig";
import { slideIn } from "@/config/gsapConfig";

export default function SkillSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGsapScrollTrigger(
    () => {
      gsap.from(headerRef.current, {
        ...slideIn,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    [],
    containerRef
  );

  return (
    <div
      ref={containerRef}
      className={`flex flex-col bg-[var(--black)] text-[var(--white)] ${getDefaultPageStyle()}`}
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
