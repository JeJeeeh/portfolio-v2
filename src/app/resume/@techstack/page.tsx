export default function ResumeTechstackSection() {
  return (
    <div className="flex flex-col text-[var(--black)] space-y-[var(--content-space-y)] px-[var(--content-px)] py-[var(--content-py)]">
      <div className="flex flex-col items-center space-y-4 items-center">
        <h2 className="text-5xl font-semibold">Tech-stacks</h2>
        <p className="text-center text-[var(--gray-accent)] px-12">
          Throughout my career, I have worked with a variety of technologies
          across the full stack. From front-end frameworks to back-end systems
          and databases, I have gained hands-on experience with tools that help
          build efficient and scalable applications. Below are the tech stacks I
          have used in my projects.
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <h4 className="text-4xl font-semibold">Languages</h4>
        <div className="grid grid-cols-5 gap-4">
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <h4 className="text-4xl font-semibold">Frameworks</h4>
        <div className="grid grid-cols-5 gap-4">
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        <h4 className="text-4xl font-semibold">Tools</h4>
        <div className="grid grid-cols-5 gap-4">
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
          <div className="rounded-md h-24 bg-[var(--white-accent)]"></div>
        </div>
      </div>
    </div>
  );
}
