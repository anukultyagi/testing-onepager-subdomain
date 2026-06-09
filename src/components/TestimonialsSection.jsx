import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    review:
      "The experience genuinely feels premium. Meals, housekeeping and WiFi are all taken care of — made relocating stress-free.",
  },
  {
    name: "Priya Gupta",
    role: "MBA Student",
    review:
      "Loved the sense of community here. It feels safe, comfortable and everything is well managed.",
  },
  {
    name: "Aman Verma",
    role: "Product Designer",
    review:
      "Zero brokerage and fully furnished rooms made the move incredibly smooth. Highly recommend.",
  },
];

export default function TestimonialsSection() {
  return (
    <Section id="reviews-section" background="bg-[#FFFDFB]">
      <Container>
        <SectionHeading
          centered
          eyebrow="Reviews"
          title="Loved By Students & Professionals"
          description="Trusted by residents across cities for comfortable, hassle-free living."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map(
            (testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-[28] border border-(--border) bg-white p-8 shadow-[0_16px_40px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-1"
              >
                {/* Rating */}
                <div className="mb-5 flex gap-1">
                  {[1, 2, 3, 4, 5].map(
                    (star) => (
                      <div
                        key={star}
                        className="h-5 w-5 rounded-full bg-[#F38744]/20"
                      />
                    )
                  )}
                </div>

                {/* Review */}
                <p className="leading-8 text-(--text-secondary)">
                  “{testimonial.review}”
                </p>

                {/* User */}
                <div className="mt-8 flex items-center gap-4">
                  <div className="h-14 w-14 rounded-full bg-[#FFF4ED]" />

                  <div>
                    <h4 className="font-semibold text-(--text-primary)">
                      {testimonial.name}
                    </h4>

                    <p className="text-sm text-(--text-muted)">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </Container>
    </Section>
  );
}