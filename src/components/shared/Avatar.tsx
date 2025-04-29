import {
  Avatar as AvatarShad,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

interface Props {
  src: string;
  alt: string;
}

export default function Avatar({ src, alt }: Props) {
  return (
    <AvatarShad>
      <AvatarImage src={src} alt={alt} />
      <AvatarFallback>{alt}</AvatarFallback>
    </AvatarShad>
  );
}
