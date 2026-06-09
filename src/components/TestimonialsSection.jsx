import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { Star } from "lucide-react";


const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    initials: "RS",
    review:
      "The experience genuinely feels premium. Meals, housekeeping and WiFi are all taken care of — made relocating stress-free.",
  },
  {
    name: "Priya Gupta",
    role: "MBA Student",
    initials: "PG",
    review:
      "Loved the sense of community here. It feels safe, comfortable and everything is well managed.",
  },
  {
    name: "Aman Verma",
    role: "Product Designer",
    initials: "AV",
    review:
      "Zero brokerage and fully furnished rooms made the move incredibly smooth. Highly recommend.",
  },
];

export default function TestimonialsSection() {
  return (
    <Section id="reviews-section" background="bg-[#FFFDFB]" className="scroll-mt-28">
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
                <div className="mb-5 flex text-[#F38744]">
                  {[1, 2, 3, 4, 5].map(
                    (star) => (
                      <Star
                        key={star}
                        size={18}
                        fill="currentColor"
                        strokeWidth={1.5}
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
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF4ED] font-semibold text-[#F38744]">
                    {testimonial.initials}
                  </div>

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