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
      <div className="w-full h-38" />
      {form}
      {detail}
      {resume}
    </div>
  );
}
