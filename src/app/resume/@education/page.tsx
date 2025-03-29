import { educationData, EducationData } from "@/data/education";
import { languageData, LanguageData } from "@/data/language";

interface EducationCardProps {
  data: EducationData;
}

const EducationCard = ({ data }: EducationCardProps) => {
  return (
    <div className="bg-[var(--white-accent)] rounded-md p-6 flex flex-col items-start space-y-2">
      <p className="text-3xl font-semibold">{data.schoolName}</p>
      <div>
        <p>{data.major}</p>
        <p className="text-[var(--gray-accent)]">{`${data.year.start} - ${data.year.end}`}</p>
      </div>
    </div>
  );
};

interface LanguageCardProps {
  data: LanguageData[];
}

const LanguageCard = ({ data }: LanguageCardProps) => {
  return (
    <div className="bg-[var(--white-accent)] rounded-md p-6 flex flex-col items-start space-y-2">
      <p className="text-3xl font-semibold">Language</p>
      <div>
        {data.map((language, index) => (
          <p key={index}>{`${language.language}: ${language.proficiency}`}</p>
        ))}
      </div>
    </div>
  );
};

export default function ResumeEducationSection() {
  return (
    <div className="flex flex-col space-y-[var(--content-space-y)] px-[var(--content-px)] py-[var(--content-py)]">
      <h2 className="text-5xl font-semibold">Education and language</h2>
      <div className="grid grid-cols-1 gap-4 w-full">
        {educationData.map((education, index) => (
          <EducationCard key={index} data={education} />
        ))}
        <LanguageCard data={languageData} />
      </div>
    </div>
  );
}
