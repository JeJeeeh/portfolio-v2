"use client";

import WorkCard from "@/components/cards/WorkCard";
import HomeHeader from "@/components/shared/HomeHeader";
import { workData } from "@/data/work";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import gsap from "gsap";
import { createRef, useMemo, useRef } from "react";

export default function WorkSection() {
  const cardsRef = useMemo(
    () => workData.map(() => createRef<HTMLDivElement>()),
    []
  );
  const headerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

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

      tl.from(
        cardsRef.map((ref) => ref.current),
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.4"
      );

      tl.from(
        descriptionRef.current,
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
      className="flex flex-col space-y-[var(--content-space-y)] bg-[var(--black)] text-[var(--white)] px-[var(--content-px)] py-[var(--content-py)]"
    >
      <HomeHeader ref={headerRef}>
        <p>
          <span className="text-[var(--gray-accent)]">I've worked with</span>{" "}
          different companies
        </p>
        <p>
          <span className="text-[var(--gray-accent)]">
            that contributed to my
          </span>{" "}
          growth
        </p>
      </HomeHeader>
      <div className="grid grid-cols-3 gap-4">
        {workData.map((work, index) => (
          <WorkCard ref={cardsRef[index]} key={index} data={work} />
        ))}
      </div>
      <div
        ref={descriptionRef}
        className="flex flex-col text-[var(--gray-accent)] text-center"
      >
        <p>I'm excited to find the next company where I can make an impact</p>
        <p>
          while continuing to grow.{" "}
          <span className="text-[var(--white)]"> Could it be yours?</span>
        </p>
      </div>
    </div>
  );
}
