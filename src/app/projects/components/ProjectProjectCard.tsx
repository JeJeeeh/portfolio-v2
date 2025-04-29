"use client";

import { ProjectData } from "@/data/project";
import { forwardRef, useImperativeHandle, useRef } from "react";
import TechstackIcon from "@/components/icons/techstacks/TechstackIcon";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  data: ProjectData;
}

const ProjectProjectCard = forwardRef<HTMLDivElement, Props>(
  ({ data }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

    return (
      <div
        ref={containerRef}
        className="flex flex-col md:flex-row space-x-4 items-center w-full h-auto md:h-[250px]"
      >
        {/* project image */}
        <div className="hidden md:inline-block h-full aspect-video bg-gray-500 projectcard-image"></div>

        {/* project content */}
        <div className="flex flex-col space-y-4 grow h-full">
          <div>
            <div className="text-xl md:text-3xl font-semibold projectcard-name">
              {data.name}
            </div>
            <div className="text-xs md:text-base text-[var(--gray-accent)] projectcard-introduction">
              {data.introduction}
            </div>
          </div>
          <div className="flex space-x-2 md:space-x-4 projectcard-tech">
            {data.languages.map((tech, index) => (
              <div key={index}>
                <TechstackIcon
                  className="h-[18px] md:h-[24px]"
                  tech={tech}
                  label
                />
              </div>
            ))}
            {data.frameworks.map((tech, index) => (
              <div key={index}>
                <TechstackIcon
                  className="h-[18px] md:h-[24px]"
                  tech={tech}
                  label
                />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1 md:gap-2 projectcard-tags">
            {data.tags.map((tag, index) => (
              <div
                className="border border-[var(--gray-accent)] text-[var(--gray-accent)] rounded-xl text-xs md:text-sm px-2 py-1"
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="grow "></div>
          <div className="projectcard-button">
            <Link href={`/projects/${data.slug}`}>
              <Button variant={"outline"} className="text-xs md:text-base">
                See more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
);

ProjectProjectCard.displayName = "ProjectProjectCard";

export default ProjectProjectCard;
