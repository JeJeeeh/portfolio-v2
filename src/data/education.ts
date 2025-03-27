export interface EducationData {
  schoolName: string;
  major: string;
  year: {
    start: string;
    end: string;
  };
}

export const educationData: EducationData[] = [
  {
    schoolName: "Fontys University of Applied Sciences",
    major: "ICT Software Engineering",
    year: {
      start: "2023",
      end: "2025",
    },
  },
  {
    schoolName: "Institut Sains dan Teknologi Terpadu Surabaya",
    major: "Information and Communication Technology",
    year: {
      start: "2020",
      end: "2025",
    },
  },
  {
    schoolName: "SMA Gloria 2",
    major: "Senior High School",
    year: {
      start: "2017",
      end: "2020",
    },
  },
  {
    schoolName: "SMP Gloria 2",
    major: "Junior High School",
    year: {
      start: "2014",
      end: "2017",
    },
  },
];
