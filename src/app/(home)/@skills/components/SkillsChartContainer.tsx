"use client";

import Chart from "@/components/shared/Chart";
import { ChartConfig } from "@/components/ui/chart";
import { getTechstackData } from "@/data/project";
import { useEffect, useRef, useState } from "react";

export default function SkillsChartContainer() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [chartData, setChartData] = useState({
    languageCount: [{}],
    frameworkCount: [{}],
  });

  const chartConfig = {
    count: {
      label: "Count",
      color: "#161616",
    },
  } satisfies ChartConfig;

  useEffect(() => {
    setChartData(getTechstackData(5));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4" ref={containerRef}>
      <div className="flex flex-col items-center space-y-4">
        <Chart
          data={chartData.languageCount}
          config={chartConfig}
          label="tech"
          trigger={containerRef.current}
        />
        <p>Technology</p>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <Chart
          data={chartData.frameworkCount}
          config={chartConfig}
          label="tech"
          trigger={containerRef.current}
        />
        <p>Framework</p>
      </div>
    </div>
  );
}
