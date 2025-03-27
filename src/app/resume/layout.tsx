export default function ResumeLayout({
  header,
  techstack,
  work,
  background,
  certifications,
  education,
}: Readonly<{
  header: React.ReactNode;
  techstack: React.ReactNode;
  work: React.ReactNode;
  background: React.ReactNode;
  certifications: React.ReactNode;
  education: React.ReactNode;
}>) {
  return (
    <div className="w-full text-[var(--black)]">
      {/* navbar placeholder */}
      <div className="w-full h-38" />
      {header}
      {techstack}
      {work}
      {background}
      {certifications}
      {education}
    </div>
  );
}
