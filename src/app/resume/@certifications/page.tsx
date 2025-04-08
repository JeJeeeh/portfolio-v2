"use client";

import ResumeCertificationCard from "@/components/cards/ResumeCertificationCard";
import { certificationData } from "@/data/certification";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

export default function ResumeCertificationsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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

      tl.from(tagRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      tl.from(
        cardsRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
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
      className="flex flex-col text-[var(--black)] space-y-[var(--content-space-y)] px-[var(--content-px)] py-[var(--content-py)]"
    >
      <div className="flex flex-col items-center space-y-4 items-center">
        <h2 ref={titleRef} className="text-5xl font-semibold">
          Certifications
        </h2>
        <p ref={tagRef} className="text-center text-[var(--gray-accent)] px-12">
          Throughout my career, I have pursued various certifications to expand
          my knowledge and stay up to date with industry standards. These
          certifications have helped me develop expertise in different
          technologies, best practices, and problem-solving approaches. Below
          are the certifications I have earned throughout my journey.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {certificationData.map((cert, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
          >
            <ResumeCertificationCard data={cert} />
          </div>
        ))}
      </div>
    </div>
  );
}
