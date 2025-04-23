"use client";

import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import { languageIcons } from "./languages/languagesMapping";
import { frameworkIcons } from "./frameworks/frameworksMapping";
import { toolIcons } from "./tools/toolsMapping";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export interface TechstackIconData {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface Props {
  tech: string;
  className?: string;
  label?: boolean;
}

const TechstackIcon = forwardRef<HTMLDivElement, Props>(
  ({ tech, className, label = false }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

    const techstackMapping = useMemo(() => {
      return { ...languageIcons, ...frameworkIcons, ...toolIcons };
    }, []);

    const IconComponent = techstackMapping[tech.toLowerCase()];

    const iconElement = IconComponent ? (
      <IconComponent />
    ) : (
      <span>Icon not found</span>
    );

    const content = label ? (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div ref={containerRef} className={className}>
              {iconElement}
            </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{tech}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ) : (
      <div ref={containerRef} className={className}>
        {iconElement}
      </div>
    );

    return content;
  }
);

TechstackIcon.displayName = "TechstackIcon";

export default TechstackIcon;
