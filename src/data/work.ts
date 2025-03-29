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
  content?: string;
}

const highlight = (text: string): string => {
  return `<span class='text-black font-semibold'>${text}</span>`;
};

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
    content: `During my internship, I worked on ${highlight(
      "enhancing"
    )} the template creation experience by ${highlight(
      "introducing SVG support"
    )}, allowing users to incorporate scalable vector graphics into their templates. I implemented features enabling users to ${highlight(
      "import SVGs"
    )} or use ${highlight(
      "predefined SVG"
    )} shape templates, providing ${highlight(
      "greater flexibility"
    )} in design. Additionally, I developed customization options, ${highlight(
      "allowing users to modify attributes"
    )} such as size, stroke, fill, and color. To further enhance user control, I added functionality to ${highlight(
      "manipulate SVG shapes"
    )} by adjusting coordinates or adding new points. Lastly, I ensured that SVGs maintained dynamic sizing within templates, ${highlight(
      "optimizing rendering performance"
    )} by adhering to minimal height and width constraints when storing data.`,
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
      start: "2021",
      end: "2023",
    },
    project: "Dynamic Question Maker",
    content: `As a Senior Lab Assistant, I was responsible for ${highlight(
      "managing weekly tests"
    )} for students from previous semesters, where their scores directly impacted their ability to pass the class. ${highlight(
      "I designed impactful"
    )} and ${highlight(
      "challenging"
    )} test materials based on the topics taught each week to assess their true understanding and problem-solving skills. Before administering the tests, ${highlight(
      "I also provided instructional support"
    )}, ensuring that students had a solid grasp of the material. Additionally, I ${highlight(
      "maintained the laboratory"
    )}, ensuring it was always ready for use, both technically and physically, to provide a seamless learning environment.`,
  },
];
