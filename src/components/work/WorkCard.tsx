import { WorkData } from "@/data/work";
import Link from "next/link";

interface Props {
  data: WorkData;
}

export default function WorkCard({ data }: Props) {
  return (
    <div className="bg-[var(--black-accent)] rounded-md p-6 flex flex-col space-y-2">
      <Link href={data.company.url}>
        <h5 className="text-3xl font-semibold duration-200 transition-colors hover:text-[var(--gray)]">
          {data.company.name}
        </h5>
      </Link>
      <div>
        <p className="text-xl">{data.position}</p>
        <p className="text-[var(--gray)]">{data.project}</p>
      </div>
    </div>
  );
}
