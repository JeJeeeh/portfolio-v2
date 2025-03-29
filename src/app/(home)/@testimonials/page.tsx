import TestimonialCard from "@/components/cards/TestimonialCard";
import { testimonialData } from "@/data/testimonial";

export default function TestimonialsSection() {
  return (
    <div className="flex flex-col space-y-[var(--content-space-y)] bg-white text-[var(--black)] px-[var(--content-px)] py-[var(--content-py)]">
      <h2 className="text-3xl font-semibold">
        <p>
          <span className="text-[var(--gray-accent)]">I've worked with</span>{" "}
          amazing people,
        </p>
        <p>
          <span className="text-[var(--gray-accent)]">
            and here's what they
          </span>{" "}
          say about me
        </p>
      </h2>
      <div className="flex flex-col space-y-4">
        {testimonialData.map((testimonial, index) => (
          <TestimonialCard key={index} data={testimonial} />
        ))}
      </div>
    </div>
  );
}
