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

          {/* LEFT VISUALS */}
          <div className="relative">

            {/* Main image */}
            <div className="overflow-hidden rounded-[32px] border border-(--border)  bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              <div className="relative h-[520px]">
                <Image
                  src="https://images.unsplash.com/photo-1544025162-d76694265947?w=1200&q=80"
                  alt="Fresh meals"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Today's special */}
            <div className="absolute bottom-6 left-6 rounded-[28px] border border-white/60 bg-white/90 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A66B48]">
                Today’s Special
              </p>

              <h4 className="mt-2 text-xl font-semibold text-(--text-primary)">
                Paneer Tikka Meal
              </h4>

              <p className="mt-1 text-sm text-(--text-secondary)">
                Fresh rotis, rice, dal & salad
              </p>
            </div>

            {/* Floating trust card */}
            <div className="absolute -right-5 top-8 rounded-[24px] border border-(--border)  bg-white p-5 shadow-[0_20px_40px_rgba(0,0,0,0.06)]">
              <p className="text-sm font-medium text-(--text-secondary)">
                Fresh meals served
              </p>

              <h4 className="mt-1 text-3xl font-bold text-(--text-primary)">
                Daily
              </h4>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <SectionHeading
              eyebrow="Fresh Meals"
              title="Fresh, Homely Meals Served Daily."
              description="Focus on work, studies and life — we’ll take care of the meals. Thoughtfully prepared food designed for comfort, convenience and healthy everyday living."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {mealFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 rounded-[22px] border border-(--border)  bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.03)]"
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

            <p className="mt-8 text-sm leading-7 text-(--text-secondary)">
              Meal plans may vary by property, with select locations offering
              included or optional food services.
            </p>

            <button className="mt-8 rounded-md bg-[#F38744] px-7 py-4 font-semibold text-white transition duration-300 hover:-translate-y-[2px] hover:opacity-90">
              View Sample Menu
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}