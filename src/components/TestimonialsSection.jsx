import Image from "next/image";
import { Star } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const testimonials = [
  {
    featured: true,
    name: "Rahul Sharma",
    role: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=800&auto=format&fit=crop&q=80",
    review:
      "Relocating to a new city felt overwhelming at first, but having meals, housekeeping and everything already managed made settling in much easier. It genuinely feels thoughtfully managed.",
  },
  {
    name: "Priya Gupta",
    role: "MBA Student",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&q=80",
    review:
      "The environment feels welcoming, safe and very comfortable. Everything is managed smoothly.",
  },
  {
    name: "Aman Verma",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&q=80",
    review:
      "Fully furnished rooms and zero brokerage made the move genuinely stress-free.",
  },
  {
    name: "Sneha Kapoor",
    role: "Marketing Professional",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&q=80",
    review:
      "Meals and housekeeping honestly removed a lot of daily hassle.",
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
      className="scroll-mt-28 py-20"
    >
      <Container>
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-medium tracking-wide text-[#A96B45]">
            Loved by our residents
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-(--text-primary) md:text-5xl">
            What Living Here
            Actually Feels Like
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-(--text-secondary)">
            Real stories from students and professionals
            who chose a more comfortable way of living.
          </p>
        </div>

        {/* Bento layout */}
        <div className="mt-16 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">

          {/* Featured story */}
          <div className="overflow-hidden rounded-2xl border border-(--border)  bg-[#FFF7F2] transition duration-300 hover:-translate-y-[2px]">

            <div className="relative h-[340px]">
              <Image
                src={featuredReview.image}
                alt={featuredReview.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-8">
              <p className="text-xl leading-9 text-(--text-primary)">
                “{featuredReview.review}”
              </p>

              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full">
                    <Image
                      src={featuredReview.image}
                      alt={featuredReview.name}
                      fill
                      className="object-cover"
                    />
                  </div>

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

          {/* Supporting reviews */}
          <div className="grid gap-5">
            {supportingReviews.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl border border-(--border)  bg-white p-6 transition duration-300 hover:-translate-y-[2px]"
              >
                <p className="leading-8 text-(--text-primary)">
                  “{testimonial.review}”
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>

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
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
