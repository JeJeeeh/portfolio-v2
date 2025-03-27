import DownIcon from "@/components/icons/testimonials/DownIcon";
import { Button } from "@/components/ui/button";
import { workData, WorkData } from "@/data/work";
import Link from "next/link";

interface Props {
  data: WorkData;
}

const ResumeWorkCard = ({ data }: Props) => {
  return (
    <div className="bg-[var(--white-accent)] rounded-md p-6 flex flex-col items-start space-y-2">
      <Link href={data.company.url}>
        <h4 className="text-3xl font-semibold transition-colors duration-200 hover:text-[var(--gray-accent)]">
          {data.company.name}
        </h4>
      </Link>

      <div>
        <h5>{data.position}</h5>
        <p className="text-[var(--gray-accent)]">
          {data.year.start === data.year.end
            ? `${data.year.start}`
            : `${data.year.start} - ${data.year.end}`}
        </p>
      </div>
      <Button className="bg-[var(--gray)] hover:bg-[var(--gray-accent)] text-[var(--black)]">
        <DownIcon /> See more
      </Button>
    </div>
  );
};

export default function ResumeWorkSection() {
  return (
    <div className="flex flex-col space-y-[var(--content-space-y)] px-[var(--content-px)] py-[var(--content-py)]">
      <h2 className="text-5xl font-semibold">Work Experience</h2>
      <div className="grid grid-cols-1 gap-4 w-full">
        {workData.map((work, index) => (
          <ResumeWorkCard key={index} data={work} />
        ))}
      </div>
    </div>
  );
}
