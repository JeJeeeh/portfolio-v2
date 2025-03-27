export default function ResumeBackgroundSection() {
  return (
    <div className="flex flex-col text-[var(--black)] space-y-[var(--content-space-y)] px-[var(--content-px)] py-[var(--content-py)]">
      <div className="flex flex-col items-center space-y-4 items-center">
        <h2 className="text-5xl font-semibold">Background</h2>
        <p className="text-center text-[var(--gray-accent)] px-12">
          I was born and raised in Surabaya, Indonesia. I earned my bachelor
          title from my dual degree program from Indonesia and The Netherlands,
          where it shaped my global perspective in software development.
          Throughout my career, I’ve had opportunity to work in companies in
          both countries, collaborating with diverse teams and gaining valuable
          insights. I’m always eager to expand my knowledge and refine my
          skills. As a person, I am flexible, adaptable, and calm to challenges
          and I believe in a collaborative and growth-oriented approach,
          fostering teamwork and continuous learning.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col space-y-4">
          <h3 className="text-4xl font-semibold">Experience</h3>
          <p className="text-[var(--gray-accent)]">
            With 2 years of experience in full-stack development, I have worked
            with various companies, contributing to projects that enhanced user
            experiences, optimized performance, and improved system efficiency.
            My experience spans front-end and back-end development, working with
            modern frameworks, databases, and cloud technologies. Collaborating
            with teams, I have helped build scalable applications and
            maintainable codebases while continuously learning and adapting to
            new challenges.
          </p>
        </div>
        <div className="flex flex-col space-y-4">
          <h3 className="text-4xl font-semibold">Passion</h3>
          <p className="text-[var(--gray-accent)]">
            My passion is turning ideas into impactful digital experiences. I
            love building intuitive UIs, optimizing performance, and solving
            real-world problems. My goal is to help bring creative ideas to life
            while continuously learning and growing in the ever-evolving tech
            landscape.
          </p>
        </div>
      </div>
    </div>
  );
}
