export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full">
      <div className="w-full h-18" />
      {children}
    </div>
  );
}
