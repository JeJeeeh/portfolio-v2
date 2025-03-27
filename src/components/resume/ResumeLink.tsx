import Link from "next/link";
import { Button } from "../ui/button";

export default function ResumeLink() {
  return (
    <div className="flex flex-col space-y-[var(--content-space-y)] bg-[var(--black)] text-[var(--white)] px-[var(--content-px)] py-[var(--content-py)]">
      <div className="flex flex-col space-y-4 items-center rounded-xl py-[var(--content-py)] bg-[var(--black-accent)]">
        <p className="text-5xl font-semibold">Resume</p>
        <p className="text-[var(--gray)]">Read more about my experience</p>
        <Link href={"/resume"}>
          <Button variant={"outline"} className="bg-transparent">
            See Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}
