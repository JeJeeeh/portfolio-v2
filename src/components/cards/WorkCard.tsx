import { WorkData } from "@/data/work";
import Link from "next/link";
import { forwardRef, useImperativeHandle, useRef } from "react";

interface Props {
  data: WorkData;
}

const WorkCard = forwardRef<HTMLDivElement, Props>(({ data }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => containerRef.current as HTMLDivElement);

  return (
    <div
      ref={containerRef}
      className="bg-[var(--black-accent)] rounded-md p-6 flex flex-col space-y-2"
    >
      <Link href={data.company.url}>
        <h5 className="text-3xl font-semibold duration-200 transition-colors hover:text-[var(--gray)]">
          {data.company.name}
        </h5>
      </Link>
      <div>
        <p className="text-xl">{data.position}</p>
        <p className="text-[var(--gray)]">{data.project}</p>
      </div>
    </div>
  );
});

WorkCard.displayName = "WorkCard";
export default WorkCard;
