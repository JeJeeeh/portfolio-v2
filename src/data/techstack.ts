export const techstackLanguage = [
  "HTML",
  "CSS",
  "Tailwind",
  "Javascript",
  "Typescript",
  "PHP",
  "Java",
  "C#",
  "C++",
  "Python",
  "Kotlin",
  "MySQL",
] as const;

export type TechstackLanguage = (typeof techstackLanguage)[number];

export const techstackFramework = [
  "React",
  "NextJS",
  "ExpressJS",
  ".NET",
  "Laravel",
  "SpringBoot",
  "Flutter",
  "Arduino",
] as const;

export type TechstackFramework = (typeof techstackFramework)[number];

export const techstackTool = [
  "Docker",
  "Kubernets",
  "Postman",
  "Cypress",
  "RabbitMQ",
  "Prometheus",
  "Grafana",
  "Google Cloud",
  "Linux",
  "Figma",
] as const;

export type TechstackTool = (typeof techstackTool)[number];
