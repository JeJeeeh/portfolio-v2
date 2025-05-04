import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col space-y-2 md:space-y-4 text-[var(--white)] items-center">
      <div className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
        <Image
          src="/images/portrait.png"
          alt="portrait"
          fill
          className="rounded-full object-cover"
          sizes="150px, 200px"
        />
      </div>
      <div className="text-2xl md:text-6xl font-bold">I'm Jason</div>
      <div className="text-md md:text-xl">A full-stack developer</div>
      <div className="flex flex-col text-xs md:text-base text-[var(--gray)] text-center">
        <p>This portfolio showcases my full-stack development</p>
        <p>experience, from building intuitive user interfaces to</p>
        <p>developing scalable back-end systems.</p>
      </div>
      <Link href={"/projects"}>
        <Button
          className="bg-transparent text-xs md:text-base"
          variant={"outline"}
        >
          See Projects
        </Button>
      </Link>
    </div>
  );
}
