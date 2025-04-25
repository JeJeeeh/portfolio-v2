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
    introduction: "Customizing and reshaping SVGs for digital campaigns",
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
      "Dynamic inputs",
      "Files management",
      "Ease of use",
      "Existing codebase",
    ],
    introduction: "Dynamic question maker for files and texts",
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
    tags: [
      "Microservice architecture",
      "Scaling services",
      "Load balancing",
      "Cloud hosting",
    ],
    introduction: "Fullstack ecommerce application for kitchen tools",
    description:
      "Built a cloud-native, microservice-based eCommerce platform tailored for kitchen tools, featuring real-time data flow and resilient architecture. Leveraged React for the frontend and .NET for robust backend services. Employed Docker and Kubernetes for container orchestration and scaling, integrated RabbitMQ for asynchronous communication between services, and monitored performance with Prometheus and Grafana. Ensured reliability through load balancing and deployed on Google Cloud for high availability.",
  },
  {
    name: "Checkin Device",
    slug: "checkin-device",
    languages: ["C++", "Typescript"],
    frameworks: ["Arduino", "ExpressJS"],
    tools: ["Postman"],
    tags: ["Embedded systems", "IOT", "Cloud database"],
    introduction: "Check in arduino device using NFC that stores data on cloud",
    description:
      "Engineered an IoT-based check-in system using Arduino and NFC technology to capture attendance and store the data in a cloud database. The device communicates with an ExpressJS API, enabling real-time data updates and centralized access. Designed with a focus on low power consumption, seamless connectivity, and secure data transmission between embedded hardware and cloud services.",
  },
  {
    name: "Fruit Storage Management",
    slug: "fruit-storage-management",
    languages: ["HTML", "Typescript", "CSS", "PHP"],
    frameworks: ["React", "Laravel"],
    tools: [],
    tags: [
      "Storage management",
      "Transaction management",
      "Dashboard",
      "Data report",
    ],
    introduction:
      "A fullstack application that is used to centralize different store branches",
    description:
      "Developed a centralized inventory and transaction management system for fruit storage businesses operating across multiple locations. Utilized Laravel for the backend and React for an interactive frontend experience. Implemented real-time dashboards, detailed transaction logs, and comprehensive data reports to optimize storage operations. Focused on improving data accessibility and minimizing redundancy across branches.",
  },
  {
    name: "Portfolio Website v1",
    slug: "portfolio-website-v1",
    languages: ["HTML", "Typescript", "CSS"],
    frameworks: ["React"],
    tools: ["Figma"],
    tags: ["Creativity", "Maintainability", "Scalablity"],
    introduction: "First portfolio website using React and SCSS",
    description:
      "A personal portfolio website built with React and SCSS to showcase my projects, skills, and experience. The project emphasizes responsive design, smooth user interactions, and modern UI/UX principles. Features include dynamic project displays, SVG animations, and reusable code structure.",
  },
  {
    name: "Bible API",
    slug: "bible-api",
    languages: ["Javascript", "MySQL"],
    frameworks: ["ExpressJS"],
    tools: ["Figma"],
    tags: ["Third party API", "Security", "Scalability"],
    introduction: "A backend application utilizing third party APIs",
    description:
      "Developed a scalable and secure backend service that aggregates and serves Bible content from third-party APIs. Implemented authentication and rate-limiting mechanisms to ensure safe and efficient access. Designed a clean API structure for easy integration with client applications and documented the endpoints using Postman. Focused on handling large volumes of requests and ensuring data integrity across different sources.",
  },
];
