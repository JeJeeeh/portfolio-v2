"use client";

import HomeHeader from "@/components/shared/HomeHeader";
import { projectData } from "@/data/project";
import HomeProjectCard from "./components/HomeProjectCard";
import { useMemo, useRef } from "react";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { itemsSlideIn, slideIn } from "@/config/gsapConfig";
import { getDefaultPageStyle } from "@/config/stylingConfig";

export default function ProjectsSection() {
  const highlights = [
    "portfolio-website-v2",
    "svg-editor-in-template-designer",
  ];

  const higlightProjects = useMemo(() => {
    return projectData.filter((x) => highlights.includes(x.slug));
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGsapScrollTrigger(
    () => {
      gsap.from(headerRef.current, {
        ...slideIn,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });

      const batchSelectors = [
        ".projectcard-image",
        ".projectcard-name",
        ".projectcard-tech",
        ".projectcard-separator",
        ".projectcard-description",
        ".projectcard-button",
      ];

      batchSelectors.forEach((selector) => {
        ScrollTrigger.batch(`#home-projects ${selector}`, {
          onEnter: (batch) => {
            gsap.from(batch, {
              ...itemsSlideIn,
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%",
              },
            });
          },
          once: true,
        });
      });
    },
    [],
    containerRef
  );

  return (
    <div
      className={`flex flex-col bg-white text-[var(--black)] ${getDefaultPageStyle()}`}
    >
      <HomeHeader ref={headerRef}>
        <p>
          <span className="text-[var(--gray-accent)]">
            I've built projects that
          </span>{" "}
          sharpened
        </p>
        <p>
          my skills <span className="text-[var(--gray-accent)]">and</span>{" "}
          experience
        </p>
      </HomeHeader>
      <div className="flex flex-col space-y-16 items-center" id="home-projects">
        {higlightProjects.map((project, index) => (
          <HomeProjectCard key={index} data={project} />
        ))}
      </div>
    </div>
  );
}
