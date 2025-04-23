"use client";

import ResumeCertificationCard from "@/components/cards/ResumeCertificationCard";
import { itemsSlideIn, slideIn } from "@/config/gsapConfig";
import { getDefaultPageStyle } from "@/config/stylingConfig";
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

      tl.from(titleRef.current, slideIn);

      tl.from(tagRef.current, slideIn, "-=0.4");

      tl.from(cardsRef.current, itemsSlideIn, "-=0.4");
    },
    [],
    containerRef
  );

  return (
    <div
      ref={containerRef}
      className={`flex flex-col text-[var(--black)] ${getDefaultPageStyle()} `}
    >
      <div className="flex flex-col items-center space-y-2 md:space-y-4 items-center">
        <h2 ref={titleRef} className="text-2xl md:text-5xl font-semibold">
          Certifications
        </h2>
        <p
          ref={tagRef}
          className="text-xs md:text-base text-center text-[var(--gray-accent)] px-6 md:px-12"
        >
          Throughout my career, I have pursued various certifications to expand
          my knowledge and stay up to date with industry standards. These
          certifications have helped me develop expertise in different
          technologies, best practices, and problem-solving approaches. Below
          are the certifications I have earned throughout my journey.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
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
