const CertificationCard = () => {
  return (
    <div className="bg-[var(--white-accent)] rounded-md p-6">
      <p className="text-xl">Redhat</p>
      <p className="text-[var(--gray)]">2025</p>
    </div>
  );
};

export default function ResumeCertificationsSection() {
  return (
    <div className="flex flex-col text-[var(--black)] space-y-[var(--content-space-y)] px-[var(--content-px)] py-[var(--content-py)]">
      <div className="flex flex-col items-center space-y-4 items-center">
        <h2 className="text-5xl font-semibold">Certifications</h2>
        <p className="text-center text-[var(--gray-accent)] px-12">
          Throughout my career, I have pursued various certifications to expand
          my knowledge and stay up to date with industry standards. These
          certifications have helped me develop expertise in different
          technologies, best practices, and problem-solving approaches. Below
          are the certifications I have earned throughout my journey.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <CertificationCard />
        <CertificationCard />
      </div>
    </div>
  );
}
