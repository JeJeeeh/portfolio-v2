"use client";

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

      tl.from(
        descriptionsRef.map((ref) => ref.current),
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
      className="flex flex-col items-center space-y-[var(--content-space-y)] px-[var(--content-px)] py-[var(--content-py)]"
    >
      <div className="flex flex-col space-y-4 items-center">
        <div ref={titleRef} className="text-6xl font-semibold">
          <p>Jason</p>
          <p>Jonathan</p>
          <p>Effendi</p>
        </div>
        <div ref={tagRef} className="text-[var(--gray-accent)] text-center">
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

      <div className="grid grid-cols-2 gap-8">
        {descriptionData.map((desc, index) => (
          <div
            ref={descriptionsRef[index]}
            key={index}
            className="flex flex-col space-y-4"
          >
            <h3 className="text-4xl font-semibold">{desc.title}</h3>
            <p className="text-[var(--gray-accent)]">{desc.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
