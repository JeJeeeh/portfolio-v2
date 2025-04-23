import { navbarStyling } from "@/config/stylingConfig";

export default function ContactLayout({
  form,
  detail,
  resume,
}: Readonly<{
  form: React.ReactNode;
  detail: React.ReactNode;
  resume: React.ReactNode;
}>) {
  return (
    <div className="bg-[var(--black)] w-full text-[var(--white)]">
      {/* navbar placholder */}
      <div className={`w-full ${navbarStyling.totalHeight}`} />
      {form}
      {detail}
      {resume}
    </div>
  );
}
