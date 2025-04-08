"use client";

import ResumeWorkCard from "@/components/cards/ResumeWorkCard";
import { workData } from "@/data/work";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

export default function ResumeWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGsapScrollTrigger(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      tl.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      ScrollTrigger.batch(".resume-workcard", {
        onEnter: (batch) =>
          gsap.from(batch, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.1,
          }),
        once: true,
      });
    },
    [],
    containerRef
  );

  return (
    <div
      ref={containerRef}
      className="flex flex-col space-y-[var(--content-space-y)] px-[var(--content-px)] py-[var(--content-py)]"
    >
      <h2 ref={titleRef} className="text-5xl font-semibold">
        Work Experience
      </h2>
      <div className="grid grid-cols-1 gap-4 w-full">
        {workData.map((work, index) => (
          <div key={index} className="resume-workcard">
            <ResumeWorkCard data={work} />
          </div>
        ))}
      </div>
    </div>
  );
}
