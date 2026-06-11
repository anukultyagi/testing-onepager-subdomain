import Image from "next/image";
import { Check } from "lucide-react";

import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const mealFeatures = [
  "Breakfast, Lunch & Dinner",
  "Healthy & Hygienic Meals",
  "Weekend Specials",
  "Custom Meal Preferences",
];

export default function MealsSection() {
  return (
    <Section
      id="meals-section"
      background="bg-[#FFF7F2]"
      className="scroll-mt-28"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

          {/* LEFT VISUAL */}
          <div className="relative">

            {/* Main image */}
            <div className="overflow-hidden rounded-2xl border border-[#F3D4BF] bg-white shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
              <div className="relative h-[320px] sm:h-[420px] lg:h-[520px]">
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80"
                  alt="Fresh meals at Uniliv"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Meal card */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto rounded-2xl border border-[#F3D4BF] bg-white/95 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.04)] backdrop-blur-sm sm:max-w-[280px]">

              <p className="text-xs font-medium tracking-wide text-[#A96B45]">
                Freshly Prepared Meals
              </p>

              <h4 className="mt-2 text-lg font-semibold leading-tight text-(--text-primary)">
                Comforting, homely food
                designed for everyday living.
              </h4>

              <p className="mt-2 text-sm leading-6 text-(--text-secondary)">
                Fresh meals prepared to make
                daily life simpler and stress-free.
              </p>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <SectionHeading
              eyebrow="Meals & Dining"
              title="Fresh, Homely Meals For Easier Living."
              description="Focus on work, studies and everyday life while we take care of the meals — thoughtfully prepared for comfort and convenience."
            />

            {/* Features */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {mealFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-[#F3D4BF] bg-white p-4 shadow-[0_12px_30px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FFF4ED]">
                    <Check
                      size={18}
                      className="text-[#F38744]"
                    />
                  </div>

                  <p className="font-medium text-(--text-primary)">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="mt-8 text-sm leading-7 text-(--text-secondary)">
              Meal plans may vary by property,
              with select locations offering
              included or optional food services.
            </p>

            {/* CTA */}
            <a
              href="/sample-menu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-[#F38744] px-6 font-semibold text-white transition duration-300 hover:-translate-y-[2px] hover:opacity-90"
            >
              View Sample Menu
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}