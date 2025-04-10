"use client";

import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";
import { languageIcons } from "./languages/languagesMapping";
import { frameworkIcons } from "./frameworks/frameworksMapping";
import { toolIcons } from "./tools/toolsMapping";

export interface TechstackIconData {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
}

interface Props {
  tech: string;
  className?: string;
}

const TechstackIcon = forwardRef<HTMLDivElement, Props>(
  ({ tech, className }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

    const techstackMapping = useMemo(() => {
      return { ...languageIcons, ...frameworkIcons, ...toolIcons };
    }, []);

    const IconComponent = techstackMapping[tech.toLowerCase()];
    return (
      <div ref={containerRef} className={className}>
        {IconComponent ? <IconComponent /> : <span>Icon not found</span>}
      </div>
    );
  }
);

TechstackIcon.displayName = "TechstackIcon";

export default TechstackIcon;
