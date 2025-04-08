import DynamicFrameworkIcon from "@/components/icons/techstacks/frameworks/DynamicFrameworkIcon";
import DynamicLanguageIcon from "@/components/icons/techstacks/languages/DynamicLanguageIcon";
import DynamicToolIcon from "@/components/icons/techstacks/tools/DynamicToolIcon";
import { forwardRef, useImperativeHandle, useRef } from "react";

export type techstackType = "language" | "framework" | "tool";

interface Props {
  tech: string;
  type: techstackType;
}

const TechstackCard = forwardRef<HTMLDivElement, Props>(
  ({ tech, type }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

    return (
      <div
        ref={containerRef}
        className="rounded-md bg-[var(--white-accent)] p-6 flex flex-col items-start space-y-2"
      >
        {type === "language" && <DynamicLanguageIcon tech={tech} />}
        {type === "framework" && <DynamicFrameworkIcon tech={tech} />}
        {type === "tool" && <DynamicToolIcon tech={tech} />}
        <p className="text-xl">{tech}</p>
      </div>
    );
  }
);

TechstackCard.displayName = "TechstackCard";
export default TechstackCard;
