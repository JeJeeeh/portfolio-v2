export default function SummarySection() {
  const summaryData = [
    "Implemented interactive interfaces",
    "Auto-scaling micro service architecture",
    "Pipeline automation for CI/CD processes",
    "Utilized cloud technologies",
    "Developed multi platform applications",
    "Integrating third-party sources",
  ];

  return (
    <div className="flex flex-col space-y-[var(--content-space-y)] bg-white px-[var(--content-px)] py-[var(--content-py)]">
      <h2 className="text-[var(--gray-accent)] text-3xl font-semibold">
        <p>I've built projects across</p>
        <p>
          <span className="text-[var(--black)]">various scopes</span> and
          <span className="text-[var(--black)]"> platforms</span>
        </p>
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {summaryData.map((summary, index) => (
          <div key={index} className="bg-[var(--white-accent)] rounded-md p-6">
            {summary}
          </div>
        ))}
      </div>
    </div>
  );
}
