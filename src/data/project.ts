import {
  TechstackFramework,
  TechstackLanguage,
  TechstackTool,
} from "./techstack";

export interface ProjectData {
  name: string;
  slug: string;
  languages: TechstackLanguage[];
  frameworks: TechstackFramework[];
  tools: TechstackTool[];
  tags: string[];
  introduction: string;
  description: string;
}

export const projectData: ProjectData[] = [
  {
    name: "Portfolio Website v2",
    slug: "portfolio-website-v2",
    languages: ["HTML", "Typescript", "Tailwind"],
    frameworks: ["React", "NextJS"],
    tools: ["Figma"],
    tags: [
      "Creativity",
      "Problem solving",
      "Optimization",
      "Maintainability",
      "Scalablity",
    ],
    introduction: "A personal project to show my works",
    description:
      "A personal website designed and developed to showcase my professional work, skills, and background. Built using NextJS, React and Tailwind, the site emphasizes clean design, smooth navigation, and responsive performance across devices. This project reflects both my front-end development abilities and attention to user experience, while serving as a living document of my ongoing growth and creative work.",
  },
  {
    name: "SVG Editor in Template Designer",
    slug: "svg-editor-in-template-designer",
    languages: ["Typescript", "CSS"],
    frameworks: ["React"],
    tools: [],
    tags: [
      "DOM manipulation",
      "SVG customization",
      "Optimized event handling",
      "Existing codebase",
    ],
    introduction: "project introduction goes here",
    description:
      "Integrated a new feature for Template Designer, where now users can use and customize SVGs. This feature allows customizations such as colour and shape customization. Shape customization works by the user drag dots around the SVG and its shape will follow based on the interaction.",
  },
  {
    name: "Dynamic Question Maker",
    slug: "dynamic-question-maker",
    languages: ["HTML", "Typescript", "Tailwind", "MySQL"],
    frameworks: ["React", "ExpressJS"],
    tools: ["Figma", "Postman"],
    tags: [
      "DOM manipulation",
      "SVG customization",
      "DOM manipulation",
      "SVG customization",
      "DOM manipulation",
      "SVG customization",
    ],
    introduction: "project introduction goes here",
    description:
      "Creating a dynamic question maker for handling weekly tests using React Typescript. This question maker can take texts, images, or code segments for questions, and various types for answers, such as texts, multiple choices or multiple options.",
  },
  {
    name: "Kitchenwares",
    slug: "kitchenwares",
    languages: ["HTML", "Typescript", "CSS", "C#", "MySQL"],
    frameworks: ["React", ".NET"],
    tools: [
      "Docker",
      "Kubernets",
      "Postman",
      "RabbitMQ",
      "Prometheus",
      "Grafana",
      "Google Cloud",
    ],
    tags: ["DOM manipulation", "SVG customization"],
    introduction: "project introduction goes here",
    description: "",
  },
  {
    name: "Checkin Device",
    slug: "checkin-device",
    languages: ["C++", "Typescript"],
    frameworks: ["Arduino", "ExpressJS"],
    tools: ["Postman"],
    tags: ["DOM manipulation", "SVG customization"],
    introduction: "project introduction goes here",
    description: "",
  },
  {
    name: "Fruit Storage Management",
    slug: "fruit-storage-management",
    languages: ["HTML", "Typescript", "CSS", "PHP"],
    frameworks: ["React", "Laravel"],
    tools: [],
    tags: ["DOM manipulation", "SVG customization"],
    introduction: "project introduction goes here",
    description: "",
  },
  {
    name: "Portfolio Website v1",
    slug: "portfolio-website-v1",
    languages: ["HTML", "Typescript", "CSS"],
    frameworks: ["React"],
    tools: ["Figma"],
    tags: ["DOM manipulation", "SVG customization"],
    introduction: "project introduction goes here",
    description:
      "A personal portfolio website built with React and SCSS to showcase my projects, skills, and experience. The project emphasizes responsive design, smooth user interactions, and modern UI/UX principles. Features include dynamic project displays, SVG animations, and reusable code structure.",
  },
  {
    name: "Bible API",
    slug: "bible-api",
    languages: ["Javascript", "MySQL"],
    frameworks: ["ExpressJS"],
    tools: ["Figma"],
    tags: ["DOM manipulation", "SVG customization"],
    introduction: "project introduction goes here",
    description:
      "A personal portfolio website built with React and SCSS to showcase my projects, skills, and experience. The project emphasizes responsive design, smooth user interactions, and modern UI/UX principles. Features include dynamic project displays, SVG animations, and reusable code structure.",
  },
];
