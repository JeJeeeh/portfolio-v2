"use client";

import { ProjectData } from "@/data/project";
import { forwardRef, useImperativeHandle, useRef } from "react";
import TechstackIcon from "@/components/icons/techstacks/TechstackIcon";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
        className="flex space-x-4 items-center w-full h-[250px]"
      >
        {/* project image */}
        <div className="h-full aspect-video bg-gray-500 projectcard-image"></div>

        {/* project content */}
        <div className="flex flex-col space-y-4 grow h-full">
          <div>
            <div className="text-3xl font-semibold projectcard-name">
              {data.name}
            </div>
            <div className="text-[var(--gray-accent)] projectcard-introduction">
              {data.introduction}
            </div>
          </div>
          <div className="flex space-x-4 projectcard-tech">
            {data.languages.map((tech, index) => (
              <div key={index}>
                <TechstackIcon className="h-[24px]" tech={tech} />
              </div>
            ))}
            {data.frameworks.map((tech, index) => (
              <div key={index}>
                <TechstackIcon className="h-[24px]" tech={tech} />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 projectcard-tags">
            {data.tags.map((tag, index) => (
              <div
                className="border border-[var(--gray-accent)] text-[var(--gray-accent)] rounded-xl text-sm px-2 py-1"
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="grow "></div>
          <div className="projectcard-button">
            <Link href={`/projects/${data.slug}`}>
              <Button variant={"outline"}>See more</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
);

ProjectProjectCard.displayName = "ProjectProjectCard";

export default ProjectProjectCard;
