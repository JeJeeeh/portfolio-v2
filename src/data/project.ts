import {
  techstackFramework,
  TechstackFramework,
  techstackLanguage,
  TechstackLanguage,
  TechstackTool,
} from "./techstack";

export interface ProjectData {
  name: string;
  languages: TechstackLanguage[];
  frameworks: TechstackFramework[];
  tools: TechstackTool[];
}

export const projectData: ProjectData[] = [
  {
    name: "Project A",
    languages: ["HTML", "CSS", "Javascript", "Typescript", "Java", "MySQL"],
    frameworks: ["React", "SpringBoot"],
    tools: ["Docker", "Postman", "Figma", "Cypress"],
  },
  {
    name: "Project B",
    languages: ["HTML", "CSS", "Tailwind", "Javascript", "PHP"],
    frameworks: ["ExpressJS", "Laravel", "React"],
    tools: ["Docker", "Postman", "Figma", "Google Cloud", "Linux"],
  },
  {
    name: "Project C",
    languages: ["Java", "PHP", "Kotlin", "MySQL"],
    frameworks: ["ExpressJS", "Laravel", "NextJS", "Flutter", "Arduino"],
    tools: ["Kubernets", "RabbitMQ", "Prometheus", "Grafana"],
  },
  {
    name: "Project D",
    languages: ["HTML", "CSS", "Tailwind", "Javascript", "Typescript", "PHP"],
    frameworks: ["NextJS", "ExpressJS", ".NET"],
    tools: ["Google Cloud", "Linux", "Figma"],
  },
  {
    name: "Project D",
    languages: ["HTML", "CSS", "Tailwind"],
    frameworks: ["NextJS", "ExpressJS", ".NET"],
    tools: ["Docker", "Kubernets", "Postman"],
  },
];

export const getTechstackData = (limit: number = 0) => {
  const languageCount: Record<TechstackLanguage, number> = Object.fromEntries(
    techstackLanguage.map((tech) => [tech, 0])
  ) as Record<TechstackLanguage, number>;
  const frameworkCount: Record<TechstackFramework, number> = Object.fromEntries(
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
      limit > 0 ? mappedFrameworkCount.slice(0, limit) : mappedFrameworkCount,
  };
};
