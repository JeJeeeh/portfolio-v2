"use client";

import { getDefaultPageStyle } from "@/config/stylingConfig";
import { projectData } from "@/data/project";
import ProjectProjectCard from "./components/ProjectProjectCard";
import { Separator } from "@/components/ui/separator";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import { itemsSlideIn, slideIn } from "@/config/gsapConfig";

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGsapScrollTrigger(
    () => {
      gsap.from(headerRef.current, {
        ...slideIn,
      });

      const batchSelectors = [
        ".projectcard-image",
        ".projectcard-name",
        ".projectcard-introduction",
        ".projectcard-tech",
        ".projectcard-tags",
        ".projectcard-button",
        ".projectpage-separator",
      ];

      batchSelectors.forEach((selector) => {
        ScrollTrigger.batch(`#project-projects ${selector}`, {
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
      ref={containerRef}
      className={`flex flex-col items-center ${getDefaultPageStyle()}`}
    >
      <h2 ref={headerRef} className="text-5xl font-semibold">
        Projects
      </h2>
      <div className="flex flex-col space-y-16 w-full">
        {projectData.map((project, index) => (
          <div
            key={index}
            id="project-projects"
            className="flex flex-col space-y-16"
          >
            <ProjectProjectCard data={project} />
            {index < projectData.length - 1 && (
              <Separator className="bg-black projectpage-separator" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
