export interface CertificationData {
  name: string;
  title: string;
  description: string;
  link: string;
  year: string;
}

export const certificationData: CertificationData[] = [
  {
    name: "Red Hat",
    title: "Red Hat Certified System Administrator (RHCSA)",
    description:
      "An IT professional who has earned the Red Hat® Certified System Administrator (RHCSA®) is able to perform the core system administration skills required in Red Hat Enterprise Linux environments. The credential is earned after successfully passing the Red Hat Certified System Administrator (RHCSA) Exam (EX200).",
    link: "https://www.credly.com/badges/c143b8fc-c53c-471e-a1a1-1dd5500fed6d/linked_in_profile",
    year: "2023",
  },
  {
    name: "Dicoding Indonesia",
    title: "Learn to Create Flutter Apps for Beginners",
    description:
      "This class is intended for beginners who want to start their career in Flutter Development by referring to industry standards. At the end of the class, students can create a Flutter application by utilizing widgets to organize its layout.",
    link: "https://www.dicoding.com/certificates/1OP800401XQK",
    year: "2023",
  },
];
