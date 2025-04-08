"use client";

import { useRef } from "react";
import gsap from "gsap";
import HomeHeader from "@/components/shared/HomeHeader";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";

export default function SummarySection() {
  const summaryData = [
    "Built dynamic and user-friendly interfaces for seamless interactions.",
    "Designed scalable microservices that adapt to workload demands.",
    "Automated CI/CD pipelines for faster and more reliable deployments.",
    "Leveraged cloud platforms to build scalable and secure applications.",
    "Created applications that run smoothly across multiple platforms.",
    "Integrated APIs and services to enhance functionality and interoperability.",
  ];

  const cardsRef = useRef<HTMLDivElement[]>([]);
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
      className="flex flex-col space-y-[var(--content-space-y)] bg-white text-[var(--black)] px-[var(--content-px)] py-[var(--content-py)]"
    >
      <HomeHeader ref={headerRef}>
        <p className="text-[var(--gray-accent)]">I've built projects across</p>
        <p>
          various scopes <span className="text-[var(--gray-accent)]">and</span>{" "}
          platforms
        </p>
      </HomeHeader>
      <div className="grid grid-cols-3 gap-4">
        {summaryData.map((summary, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardsRef.current[index] = el;
            }}
            className="bg-[var(--white-accent)] rounded-md p-6"
          >
            {summary}
          </div>
        ))}
      </div>
    </div>
  );
}
