export default function AboutFormLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col items-center space-y-[var(--content-space-y)] px-[var(--content-px)] py-[var(--content-py)]">
      <h2 className="text-5xl font-semibold">Contact me</h2>
      {children}
    </div>
  );
}
