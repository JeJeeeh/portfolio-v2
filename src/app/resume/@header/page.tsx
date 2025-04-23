"use client";

import { itemsSlideIn, slideIn } from "@/config/gsapConfig";
import { getDefaultPageStyle } from "@/config/stylingConfig";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import gsap from "gsap";
import { createRef, useMemo, useRef } from "react";

export default function ResumeHeaderSection() {
  const descriptionData: { title: string; body: string }[] = [
    {
      title: "Goals",
      body: "I specialize in crafting interactive and accessible user interfaces while building scalable and efficient server applications. I focus on writing clean, maintainable code that ensure performance and long-term sustainability. I enjoy collaboration where we work together to turn ideas into reality.",
    },
    {
      title: "Strenghts",
      body: "My strengths lie in my problem-solving mindset, keen attention to detail, and passion for writing clean, maintainable code. I’m always eager to learn and grow, staying up to date with the latest technologies and best practices.",
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const descriptionsRef = useMemo(
    () => descriptionData.map(() => createRef<HTMLDivElement>()),
    []
  );

  useGsapScrollTrigger(
    () => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, slideIn);

      tl.from(tagRef.current, slideIn, "-=0.4");

      tl.from(
        descriptionsRef.map((ref) => ref.current),
        itemsSlideIn,
        "-=0.4"
      );
    },
    [],
    containerRef
  );

  return (
    <div
      ref={containerRef}
      className={`flex flex-col items-center ${getDefaultPageStyle()}`}
    >
      <div className="flex flex-col space-y-2 md:space-y-4 items-center">
        <div ref={titleRef} className="text-3xl md:text-6xl font-semibold">
          <p>Jason</p>
          <p>Jonathan</p>
          <p>Effendi</p>
        </div>
        <div
          ref={tagRef}
          className="text-xs md:text-base text-[var(--gray-accent)] text-center"
        >
          <p>
            I'm a full-stack developer with a passion for creating and solving
            problems.
          </p>
          <p>My goals is to help bring your ideas to life, and</p>
          <p className="text-[var(--black)]">
            I'm excited to [realify] your ideas!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {descriptionData.map((desc, index) => (
          <div
            ref={descriptionsRef[index]}
            key={index}
            className="flex flex-col space-y-2 md:space-y-4"
          >
            <h3 className="text-xl md:text-4xl font-semibold">{desc.title}</h3>
            <p className="text-xs md:text-base text-[var(--gray-accent)]">
              {desc.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
