"use client";

import TechstackIcon from "@/components/icons/techstacks/TechstackIcon";
import { Separator } from "@/components/ui/separator";
import { ProjectData } from "@/data/project";
import { forwardRef, useImperativeHandle, useRef } from "react";

interface Props {
  data: ProjectData;
}

const HomeProjectCard = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

  return (
    <div
      ref={containerRef}
      className="flex flex-col space-y-2 lg:space-y-4 space-x-4 w-[90%] lg:w-[50%] items-center"
    >
      {/* project image */}
      <div className="h-[150px] lg:h-[250px] aspect-video bg-gray-500 projectcard-image"></div>

      {/* project content */}
      <div className="flex flex-col space-y-2 lg:space-y-4 items-center">
        <div className="text-lg lg:text-3xl font-semibold projectcard-name">
          {data.name}
        </div>
        <div className="flex space-x-4 projectcard-tech">
          {data.languages.map((tech, index) => (
            <div key={index}>
              <TechstackIcon
                className="h-[18px] md:h-[20px] lg:h-[24px]"
                tech={tech}
                label
              />
            </div>
          ))}
          {data.frameworks.map((tech, index) => (
            <div key={index}>
              <TechstackIcon
                className="h-[18px] md:h-[20px] lg:h-[24px]"
                tech={tech}
                label
              />
            </div>
          ))}
        </div>
        <Separator className="bg-black projectcard-separator" />
        <div className="text-xs lg:text-base text-[var(--gray-accent)] text-center flex grow projectcard-description">
          {data.description}
        </div>
      </div>
    </div>
  );
});

HomeProjectCard.displayName = "HomeProjectCard";
export default HomeProjectCard;
