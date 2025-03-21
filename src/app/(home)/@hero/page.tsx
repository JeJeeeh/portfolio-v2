import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="flex flex-col space-y-4 text-[var(--white)] items-center">
      <Image
        src={"/images/portrait.png"}
        className="rounded-full"
        alt="portrait"
        width={150}
        height={150}
      />
      <div className="text-6xl font-bold">I'm Jason</div>
      <div className="text-xl">A full-stack developer</div>
      <div className="flex flex-col text-[var(--gray)] text-center">
        <p>This portfolio showcases my full-stack development</p>
        <p>experience, from building intuitive user interfaces to</p>
        <p>developing scalable back-end systems.</p>
      </div>
      <Button className="bg-transparent" variant={"outline"}>
        See Projects
      </Button>
    </div>
  );
}
