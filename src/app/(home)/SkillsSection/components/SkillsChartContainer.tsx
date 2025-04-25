"use client";

import Chart from "@/components/shared/Chart";
import { ChartConfig } from "@/components/ui/chart";
import { projectData } from "@/data/project";
import {
  techstackFramework,
  TechstackFramework,
  techstackLanguage,
  TechstackLanguage,
} from "@/data/techstack";
import { useGsapScrollTrigger } from "@/hooks/useGsapScrollTrigger";
import { useMemo, useRef } from "react";
import gsap from "gsap";
import { itemsScaleUp } from "@/config/gsapConfig";

export default function SkillsChartContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartsRef = useRef<HTMLDivElement[]>([]);

  const chartData = useMemo(() => {
    const getTechstackData = (limit: number = 0) => {
      const languageCount: Record<TechstackLanguage, number> =
        Object.fromEntries(
          techstackLanguage.map((tech) => [tech, 0])
        ) as Record<TechstackLanguage, number>;
      const frameworkCount: Record<TechstackFramework, number> =
        Object.fromEntries(
          techstackFramework.map((tech) => [tech, 0])
        ) as Record<TechstackFramework, number>;

      projectData.forEach((project) => {
        project.languages.forEach((tech) => {
          languageCount[tech] += 1;
        });

        project.frameworks.forEach((tech) => {
          frameworkCount[tech] += 1;
        });
      });

      const mappedLanguageCount = Object.entries(languageCount)
        .map(([tech, count]) => ({
          tech,
          count,
        }))
        .sort((a, b) => b.count - a.count);

      const mappedFrameworkCount = Object.entries(frameworkCount)
        .map(([tech, count]) => ({
          tech,
          count,
        }))
        .sort((a, b) => b.count - a.count);

      return {
        languageCount:
          limit > 0 ? mappedLanguageCount.slice(0, limit) : mappedLanguageCount,
        frameworkCount:
          limit > 0
            ? mappedFrameworkCount.slice(0, limit)
            : mappedFrameworkCount,
      };
    };

    return getTechstackData(5);
  }, []);

  useGsapScrollTrigger(
    () => {
      gsap.from(chartsRef.current, {
        ...itemsScaleUp,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
      });
    },
    [],
    containerRef
  );

  const chartConfig = {
    count: {
      label: "Count",
      color: "#161616",
    },
  } satisfies ChartConfig;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4" ref={containerRef}>
      <div className="flex flex-col items-center space-y-4">
        <div
          className="w-full"
          ref={(el) => {
            if (el) {
              chartsRef.current[0] = el;
            }
          }}
        >
          <Chart
            data={chartData.languageCount}
            config={chartConfig}
            label="tech"
            trigger={containerRef.current}
          />
        </div>
        <p className="text-xs lg:text-base">Technology</p>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <div
          className="w-full"
          ref={(el) => {
            if (el) {
              chartsRef.current[1] = el;
            }
          }}
        >
          <Chart
            data={chartData.frameworkCount}
            config={chartConfig}
            label="tech"
            trigger={containerRef.current}
          />
        </div>

        <p className="text-xs lg:text-base">Framework</p>
      </div>
    </div>
  );
}
