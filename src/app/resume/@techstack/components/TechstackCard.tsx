import TechstackIcon from "@/components/icons/techstacks/TechstackIcon";
import { forwardRef, useImperativeHandle, useRef } from "react";

interface Props {
  tech: string;
}

const TechstackCard = forwardRef<HTMLDivElement, Props>(({ tech }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

  return (
    <div
      ref={containerRef}
      className="rounded-md bg-[var(--white-accent)] p-3 md:p-6 flex flex-col items-start space-y-2"
    >
      <TechstackIcon tech={tech} className="h-[24px] md:h-[36px]" />
      <p className="text-xs md:text-xl">{tech}</p>
    </div>
  );
});

TechstackCard.displayName = "TechstackCard";
export default TechstackCard;
