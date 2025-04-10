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
  description: string;
}

export const demoprojectData: ProjectData[] = [
  {
    name: "Project A",
    slug: "project-a",
    languages: ["HTML", "CSS", "Javascript", "Typescript", "Java", "MySQL"],
    frameworks: ["React", "SpringBoot"],
    tools: ["Docker", "Postman", "Figma", "Cypress"],
    tags: [
      "Discovery",
      "Prototyping",
      "Internal tool",
      "Concept",
      "Product Delivery",
    ],
    description:
      "Together with the founder of Aleris X, we created the initial concepts of a better and more human-focused healthcare app that later became Doktor24 and Platform24 - with a vision to create a healthier world by delivering preventive and accessible care services on patients' terms. ",
  },
  {
    name: "Project B",
    slug: "project-b",
    languages: ["HTML", "CSS", "Tailwind", "Javascript", "PHP"],
    frameworks: ["ExpressJS", "Laravel", "React"],
    tools: ["Docker", "Postman", "Figma", "Google Cloud", "Linux"],
    tags: [
      "Design lead",
      "Design strategy",
      "Rapid growth",
      "Discovery",
      "Team building",
    ],
    description:
      "I contributed to the development of Viafree's latest sports initiative. The goal was to engage sports enthusiasts with the most recent and relevant sports updates within an attractive narrative setup with fewer interruptions (advertisements). ",
  },
  {
    name: "Project C",
    slug: "project-c",
    languages: ["Java", "PHP", "Kotlin", "MySQL"],
    frameworks: ["ExpressJS", "Laravel", "NextJS", "Flutter", "Arduino"],
    tools: ["Kubernets", "RabbitMQ", "Prometheus", "Grafana"],
    tags: [
      "Prototyping",
      "Visual design",
      "Hands-on",
      "Experience vision",
      "App",
    ],
    description:
      "Accountable for the discovery phase of the next version of the content curation platform. As a senior product designer, I joined the Product Programming team to improve the internal tools used by music editors to curate a better music experience.",
  },
  {
    name: "Project D",
    slug: "project-d",
    languages: ["HTML", "CSS", "Tailwind", "Javascript", "Typescript", "PHP"],
    frameworks: ["NextJS", "ExpressJS", ".NET"],
    tools: ["Google Cloud", "Linux", "Figma"],
    tags: [
      "Fintech",
      "Design strategy",
      "Discovery",
      "Product led",
      "Hands-on",
      "Leadership",
    ],
    description:
      "At Klarna, I contributed to redesigning the existing in-store experience. We analyzed the current user experience to understand the challenges. We improved the interaction design, reduced pain points, optimized user flows, and minimized the steps required to complete an in-store purchase.",
  },
  {
    name: "Project E",
    slug: "project-e",
    languages: ["HTML", "CSS", "Tailwind"],
    frameworks: ["NextJS", "ExpressJS", ".NET"],
    tools: ["Docker", "Kubernets", "Postman"],
    tags: [
      "Design lead",
      "Design strategy",
      "Rapid growth",
      "Discovery",
      "Team building",
    ],
    description:
      "We were working on designing the future of magazines in the digital landscape. Our process involved conducting in-depth research on user journeys and continuously refining new ideas to meet our customers' needs. This included identifying basic expectations and pain points, mapping out the current user experience, and defining our vision for the future experience.",
  },
];

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
    description:
      "Integrated a new feature for Template Designer, where now users can use and customize SVGs. This feature allows customizations such as colour and shape customization. Shape customization works by the user drag dots around the SVG and its shape will follow based on the interaction.",
  },
  {
    name: "Dynamic Question Maker",
    slug: "dynamic-question-maker",
    languages: ["HTML", "Typescript", "Tailwind", "MySQL"],
    frameworks: ["React", "ExpressJS"],
    tools: ["Figma", "Postman"],
    tags: [],
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
    tags: [],
    description: "",
  },
  {
    name: "Checkin Device",
    slug: "checkin-device",
    languages: ["C++", "Typescript"],
    frameworks: ["Arduino", "ExpressJS"],
    tools: ["Postman"],
    tags: [],
    description: "",
  },
  {
    name: "Fruit Storage Management",
    slug: "fruit-storage-management",
    languages: ["HTML", "Typescript", "CSS"],
    frameworks: ["React"],
    tools: [],
    tags: [],
    description: "",
  },
  {
    name: "Portfolio Website v1",
    slug: "portfolio-website-v1",
    languages: ["HTML", "Typescript", "CSS"],
    frameworks: ["React"],
    tools: ["Figma"],
    tags: [],
    description:
      "A personal portfolio website built with React and SCSS to showcase my projects, skills, and experience. The project emphasizes responsive design, smooth user interactions, and modern UI/UX principles. Features include dynamic project displays, SVG animations, and reusable code structure.",
  },
  {
    name: "Bible API",
    slug: "bible-api",
    languages: ["Javascript", "MySQL"],
    frameworks: ["ExpressJS"],
    tools: ["Figma"],
    tags: [],
    description:
      "A personal portfolio website built with React and SCSS to showcase my projects, skills, and experience. The project emphasizes responsive design, smooth user interactions, and modern UI/UX principles. Features include dynamic project displays, SVG animations, and reusable code structure.",
  },
];
