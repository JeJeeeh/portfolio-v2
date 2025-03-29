import ResumeWorkCard from "@/components/cards/ResumeWorkCard";
import { workData } from "@/data/work";

export default function ResumeWorkSection() {
  return (
    <div className="flex flex-col space-y-[var(--content-space-y)] px-[var(--content-px)] py-[var(--content-py)]">
      <h2 className="text-5xl font-semibold">Work Experience</h2>
      <div className="grid grid-cols-1 gap-4 w-full">
        {workData.map((work, index) => (
          <ResumeWorkCard key={index} data={work} />
        ))}
      </div>
    </div>
  );
}
