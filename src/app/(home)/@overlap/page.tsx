"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TechstackIcon from "@/components/icons/techstacks/TechstackIcon";
import { getDefaultPageStyle } from "@/config/stylingConfig";

export default function Overlap() {
  const trackRef = useRef<HTMLDivElement>(null);
  const displayedTechs = [
    "HTML",
    "CSS",
    "Javascript",
    "Typescript",
    "PHP",
    "C#",
    "Java",
    "React",
    "NextJS",
    ".NET",
    "Docker",
    "Kubernets",
  ];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const originalItems = Array.from(track.children) as HTMLElement[];

    // Clone original items for seamless loop
    originalItems.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      track.appendChild(clone);
    });

    originalItems.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      track.appendChild(clone);
    });

    originalItems.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      track.appendChild(clone);
    });

    // Wait for DOM layout
    requestAnimationFrame(() => {
      const itemCount = originalItems.length;
      const itemSpacing = 64; // space-x-16
      const itemWidth = originalItems[0].offsetWidth;

      const totalScrollWidth = itemCount * (itemWidth + itemSpacing);

      // Set initial position
      gsap.set(track, { x: 0 });

      gsap.to(track, {
        x: -totalScrollWidth,
        duration: 120,
        ease: "none",
        repeat: -1,
      });
    });
  }, []);

  return (
    <div
      className={`relative h-[6vh] lg:h-[12vh] w-full bg-[var(--black-accent)] flex justify-center items-center filter grayscale px-[var(--padding-x-sm)] md:px-[var(--padding-x-md)] lg:px-[var(--padding-x-lg)]`}
    >
      <div className="w-[100%] pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 inset-0 z-10 bg-gradient-to-r from-[var(--black-accent)] from-10% via-transparent to-[var(--black-accent)] to-90% opacity-100" />
      <div className="relative w-[100%] overflow-hidden">
        <div ref={trackRef} className="flex space-x-8 lg:space-x-16 w-max">
          {displayedTechs.map((tech) => (
            <TechstackIcon
              tech={tech}
              key={tech}
              className="h-[3vh] lg:h-[6vh] w-auto home-techcard"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
