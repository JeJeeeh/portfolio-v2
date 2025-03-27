export default function ResumeHeaderSection() {
  return (
    <div className="flex flex-col items-center space-y-[var(--content-space-y)] px-[var(--content-px)] py-[var(--content-py)]">
      <div className="flex flex-col space-y-4 items-center">
        <div className="text-6xl font-semibold">
          <p>Jason</p>
          <p>Jonathan</p>
          <p>Effendi</p>
        </div>
        <div className="text-[var(--gray-accent)] text-center">
          <p>
            I'm a full-stack developer with a passion for creating and solving
            problems.
          </p>
          <p>My goals is to help bring your ideas to life, and</p>
          <p className="text-[var(--black)]">
            I'm excited to [realify] your ideas!
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col space-y-4">
          <h3 className="text-4xl font-semibold">Goals</h3>
          <p className="text-[var(--gray-accent)]">
            I specialize in crafting interactive and accessible user interfaces
            while building scalable and efficient server applications. I focus
            on writing clean, maintainable code that ensure performance and
            long-term sustainability. I enjoy collaboration where we work
            together to turn ideas into reality.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-4xl font-semibold">Strengths</h3>
          <p className="text-[var(--gray-accent)]">
            My strengths lie in my problem-solving mindset, keen attention to
            detail, and passion for writing clean, maintainable code. I’m always
            eager to learn and grow, staying up to date with the latest
            technologies and best practices.
          </p>
        </div>
      </div>
    </div>
  );
}
