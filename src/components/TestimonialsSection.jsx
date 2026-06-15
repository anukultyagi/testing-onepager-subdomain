import Image from "next/image";
import { Star } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    featured: true,
    name: "Rahul Sharma",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=800&auto=format&fit=crop&q=80",
    review:
      "Moving to a new city felt overwhelming at first, but having meals, housekeeping and everything already managed made settling in much easier. It genuinely made daily life feel less stressful.",
  },
  {
    name: "Priya Gupta",
    role: "MBA Student",

    review:
      "The environment feels safe, welcoming and genuinely comfortable. Everything feels professionally managed.",
  },
  {
    name: "Aman Verma",
    role: "Product Designer",

    review:
      "Fully furnished spaces and zero brokerage made relocating much less stressful.",
  },
  {
    name: "Sneha Kapoor",
    role: "Marketing Professional",

    review:
      "Meals and housekeeping honestly removed a lot of everyday hassle.",
  },
];

const featuredReview = testimonials.find(
  (item) => item.featured
);

const supportingReviews = testimonials.filter(
  (item) => !item.featured
);

export default function TestimonialsSection() {
  return (
    <Section
      id="reviews-section"
      background="bg-[#FFFDFB]"
      className="scroll-mt-28"
    >
      <Container>

        <SectionHeading
          centered
          eyebrow="What Living With Uniliv Feels Like"
          title="Hear From Our Residents."
          description="Real stories from students and professionals living with Uniliv."
        />

        {/* Bento */}
        <div className="mt-14 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Featured */}
          <div className="overflow-hidden rounded-2xl border border-[#F3D4BF] bg-[#FFF7F2] shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-[2px]">

            <div className="relative h-[260px] sm:h-[300px]">
              <Image
                src={featuredReview.image}
                alt={featuredReview.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6 sm:p-8">

              <p className="text-lg leading-8 text-(--text-primary) sm:text-xl sm:leading-9">
                “{featuredReview.review}”
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex items-center gap-4">
                  {/* <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <Image
                      src={featuredReview.image}
                      alt={featuredReview.name}
                      fill
                      className="object-cover"
                    />
                  </div> */}

                  <div>
                    <h4 className="font-semibold text-(--text-primary)">
                      {featuredReview.name}
                    </h4>

                    <p className="text-sm text-(--text-muted)">
                      {featuredReview.role}
                    </p>
                  </div>
                </div>

                <div className="flex text-[#F38744]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      size={16}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Supporting */}
          <div className="grid gap-5">
            {supportingReviews.map(
              (testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-2xl border border-[#F3D4BF] bg-white p-6 shadow-[0_12px_30px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-[2px]"
                >
                  <p className="leading-8 text-(--text-primary)">
                    “{testimonial.review}”
                  </p>

                  <div className="mt-6 flex items-center justify-between">

                    <div className="flex items-center gap-3">
                      {/* <div className="relative h-12 w-12 overflow-hidden rounded-full">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div> */}

                      <div>
                        <h4 className="font-medium text-(--text-primary)">
                          {testimonial.name}
                        </h4>

                        <p className="text-sm text-(--text-muted)">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <div className="flex text-[#F38744]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={14}
                          fill="currentColor"
                          strokeWidth={1.5}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
