"use client";

import {
  techstackFramework,
  techstackLanguage,
  techstackTool,
} from "@/data/techstack";
import { useRef } from "react";
import TechstackCard from "./components/TechstackCard";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

export default function ResumeTechstackSection() {
  const techstackData = [
    {
      title: "Languages",
      data: techstackLanguage,
    },
    {
      title: "Frameworks",
      data: techstackFramework,
    },
    {
      title: "Tools",
      data: techstackTool,
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);

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

      tl.from(
        tagRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      );

      ScrollTrigger.batch(".techstack-title", {
        onEnter: (batch) => {
          gsap.from(batch, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
          });
        },
        once: true,
      });

      ScrollTrigger.batch(".techstack-card", {
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
      className="flex flex-col text-[var(--black)] space-y-[var(--content-space-y)] px-[var(--content-px)] py-[var(--content-py)]"
    >
      <div className="flex flex-col items-center space-y-4 items-center">
        <h2 ref={titleRef} className="text-5xl font-semibold">
          Tech-stacks
        </h2>
        <p ref={tagRef} className="text-center text-[var(--gray-accent)] px-12">
          Throughout my career, I have worked with a variety of technologies
          across the full stack. From front-end frameworks to back-end systems
          and databases, I have gained hands-on experience with tools that help
          build efficient and scalable applications. Below are the tech stacks I
          have used in my projects.
        </p>
      </div>
      {techstackData.map((techstack, index) => (
        <div key={index} className="flex flex-col space-y-4">
          <h4 className="text-4xl font-semibold techstack-title">
            {techstack.title}
          </h4>
          <div className="grid grid-cols-5 gap-4">
            {techstack.data.map((tech, cardIndex) => (
              <div key={cardIndex} className="techstack-card">
                <TechstackCard tech={tech} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
