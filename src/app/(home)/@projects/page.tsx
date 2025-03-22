export default function ProjectsSection() {
  return (
    <div className="min-h-screen flex flex-col space-y-[var(--content-space-y)] bg-white text-[var(--black)] px-[var(--content-px)] py-[var(--content-py)]">
      <h2 className="text-3xl font-semibold">
        <p>
          <span className="text-[var(--gray-accent)]">
            I've built projects that
          </span>{" "}
          sharpened
        </p>
        <p>
          my skills <span className="text-[var(--gray-accent)]">and</span>{" "}
          experience
        </p>
      </h2>
    </div>
  );
}
