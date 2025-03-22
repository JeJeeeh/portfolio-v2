"use client";

import { Bar, BarChart, XAxis } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

interface ChartData {
  [key: string]: number | string;
}

interface Props {
  data: ChartData[];
  config: ChartConfig;
  label?: string;
  tooltip?: boolean;
}

const Chart = ({ data, config, label, tooltip = false }: Props) => {
  const barData = label
    ? (() => {
        const { [label]: _, ...rest } = data[0];
        return Object.keys(rest);
      })()
    : data;

  return (
    <ChartContainer config={config} className="h-[200px] w-full">
      <BarChart accessibilityLayer data={data}>
        {label && (
          <XAxis
            dataKey="tech"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
        )}
        {tooltip && <ChartTooltip content={<ChartTooltipContent />} />}
        {barData.map((bar, index) => (
          <Bar
            key={index}
            dataKey={bar as string}
            fill="var(--gray-accent)"
            radius={4}
          />
        ))}
      </BarChart>
    </ChartContainer>
  );
};

export default Chart;
