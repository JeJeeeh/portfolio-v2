import { navbarStyling } from "@/config/stylingConfig";
import ContactDetailSection from "./DetailSection/page";
import ContactForm from "./FormSection/page";
import ContactResumeSection from "./ResumeSection/page";

export default function ContactPage() {
  return (
    <div className="bg-[var(--black)] w-full text-[var(--white)]">
      {/* navbar placholder */}
      <div className={`w-full ${navbarStyling.totalHeight}`} />
      <ContactForm />
      <ContactDetailSection />
      <ContactResumeSection />
    </div>
  );
}
