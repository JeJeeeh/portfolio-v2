export interface WorkData {
  company: {
    name: string;
    url: string;
  };
  position: string;
  year: {
    start: string;
    end: string;
  };
  project: string;
}

export const workData: WorkData[] = [
  {
    company: {
      name: "Cape",
      url: "https://www.bycape.io/",
    },
    position: "Front-end developer intern",
    year: {
      start: "2024",
      end: "2025",
    },
    project: "SVG Editor in Template Designer",
  },
  {
    company: {
      name: "UBS Gold",
      url: "https://ubsgold.com/",
    },
    position: "Fullstack intern",
    year: {
      start: "2023",
      end: "2023",
    },
    project: "Presentation Grading Tool",
  },
  {
    company: {
      name: "ISTTS",
      url: "https://istts.ac.id/",
    },
    position: "Senior Lab Assistant",
    year: {
      start: "2022",
      end: "2022",
    },
    project: "Dynamic Question Maker",
  },
];
