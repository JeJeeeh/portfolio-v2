import DownIcon from "../icons/testimonials/DownIcon";
import Avatar from "../shared/Avatar";
import { Button } from "../ui/button";

export default function TestimonialCard() {
  return (
    <div className="bg-[var(--white-accent)] w-full rounded-md p-6 flex-flex-col space-y-2">
      <div className="flex items-center space-x-4">
        <Avatar src="https://github.com/shadcn.png" alt="JD" />
        <p className="text-xl font-semibold">John Doe</p>
      </div>
      <p className="text-[var(--gray-accent)]">
        Front-end Developer @ Company A
      </p>
      <Button className="bg-[var(--gray)] hover:bg-[var(--gray-accent)] text-[var(--black)]">
        <DownIcon /> See more
      </Button>
    </div>
  );
}
