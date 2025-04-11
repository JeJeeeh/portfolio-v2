"use client";

import { useRef } from "react";
import gsap from "gsap";
import HomeHeader from "@/components/shared/HomeHeader";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import { getDefaultPageStyle } from "@/config/stylingConfig";
import { itemsSlideIn, slideIn } from "@/config/gsapConfig";

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
      gsap.from(headerRef.current, {
        ...slideIn,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      gsap.from(cardsRef.current, {
        ...itemsSlideIn,
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
      className={`flex flex-col bg-white text-[var(--black)] ${getDefaultPageStyle()}`}
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
