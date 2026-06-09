import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const mealFeatures = [
  "Breakfast, Lunch & Dinner",
  "Custom meal preferences",
  "Healthy & hygienic meals",
  "Weekend specials",
];

export default function MealsSection() {
  return (
    <Section id="meals-section" className="scroll-mt-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          
          {/* LEFT */}
          <div>
            <SectionHeading
              eyebrow="Fresh Meals"
              title="Fresh, Homely Meals Served Daily."
              description="Nutritious meals thoughtfully prepared so you can focus on studies, work and life."
            />

            <div className="mt-8 space-y-4">
              {mealFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-4"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFF4ED]">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#F38744]" />
                  </div>

                  <p className="text-(--text-secondary)">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-8 rounded-[16] border border-[#F38744]/20 bg-[#FFF4ED] px-6 py-4 font-semibold text-[#F38744] transition hover:bg-[#F38744] hover:text-white">
              View Sample Menu
            </button>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            
            {/* Main image card */}
            <div className="overflow-hidden rounded-[40] border border-(--border) bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
              
              <div className="h-[500] bg-linear-to-br from-[#FFE7D7] via-[#FFF2EA] to-[#FFD8C1]" />
            </div>

            {/* Floating glass card */}
            <div className="absolute bottom-6 left-6 rounded-[24] border border-white/60 bg-white/75 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-xl">
              
              <p className="text-xs font-medium uppercase tracking-wide text-(--text-muted)">
                Today’s Special
              </p>

              <h4 className="mt-2 text-lg font-semibold text-(--text-primary)">
                Paneer Tikka Meal
              </h4>

              <p className="mt-1 text-sm text-(--text-secondary)">
                Fresh rotis, rice, dal & salad
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}