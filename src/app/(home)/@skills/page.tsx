import Chart from "@/components/shared/Chart";
import { type ChartConfig } from "@/components/ui/chart";

export default function SkillSection() {
  const chartData = [
    { tech: "Tech 1", count: 5 },
    { tech: "Tech 2", count: 10 },
    { tech: "Tech 3", count: 8 },
    { tech: "Tech 4", count: 6 },
    { tech: "Tech 5", count: 12 },
  ];

  const chartConfig = {
    count: {
      label: "Count",
      color: "#161616",
    },
  } satisfies ChartConfig;

  return (
    <div className="flex flex-col space-y-[var(--content-space-y)] bg-[var(--black)] text-[var(--white)] px-[var(--content-px)] py-[var(--content-py)]">
      <h2 className="text-3xl font-semibold">
        <p>
          <span className="text-[var(--gray-accent)]">I've utilized</span>{" "}
          various tech-stacks
        </p>
        <p>
          <span className="text-[var(--gray-accent)]">to suit</span> different
          project needs
        </p>
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center space-y-4">
          <Chart data={chartData} config={chartConfig} label="tech" />
          <p>Technology</p>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <Chart data={chartData} config={chartConfig} label="tech" />
          <p>Framework</p>
        </div>
      </div>
    </div>
  );
}
