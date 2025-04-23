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
import Link from "next/link";

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
      <div
        className="flex flex-col space-y-8 lg:space-y-16 items-center"
        id="home-projects"
      >
        {higlightProjects.map((project, index) => (
          <HomeProjectCard key={index} data={project} />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          href={"/projects"}
          className="relative text-sm md:text-base inline-block font-semibold
          text-current transition-colors duration-300 
          hover:text-[var(--gray-accent)] 
          after:block after:h-[2px] after:bg-[var(--gray-accent)] 
          after:scale-x-0 after:transition-transform after:duration-300 after:origin-left 
          hover:after:scale-x-100"
        >
          [See more projects]
        </Link>
      </div>
    </div>
  );
}
