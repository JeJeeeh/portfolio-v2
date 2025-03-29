import WorkCard from "@/components/cards/WorkCard";
import { workData } from "@/data/work";

export default function WorkSection() {
  return (
    <div className="flex flex-col space-y-[var(--content-space-y)] bg-[var(--black)] text-[var(--white)] px-[var(--content-px)] py-[var(--content-py)]">
      <h2 className="text-3xl font-semibold">
        <p>
          <span className="text-[var(--gray-accent)]">I've worked with</span>{" "}
          different companies
        </p>
        <p>
          <span className="text-[var(--gray-accent)]">
            that contributed to my
          </span>{" "}
          growth
        </p>
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {workData.map((work, index) => (
          <WorkCard key={index} data={work} />
        ))}
      </div>
      <div className="flex flex-col text-[var(--gray-accent)] text-center">
        <p>I'm excited to find the next company where I can make an impact</p>
        <p>
          while continuing to grow.{" "}
          <span className="text-[var(--white)]"> Could it be yours?</span>
        </p>
      </div>
    </div>
  );
}
