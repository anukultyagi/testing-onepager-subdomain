import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

const benefits = [
  {
    number: "01",
    title: "Everything Professionally Managed",
    description:
      "Meals, housekeeping, Wi-Fi and maintenance thoughtfully handled so everyday living feels easier.",
  },
  {
    number: "02",
    title: "Move In Without The Hassle",
    description:
      "Fully furnished, move-in ready spaces designed so you can settle in comfortably from day one.",
  },
  {
    number: "03",
    title: "Comfort You Can Rely On",
    description:
      "Safe, professionally managed living spaces for students and working professionals.",
  },
];

export default function BenefitsSection() {
  return (
    <Section
      className="scroll-mt-28 bg-[#FFFDFB]"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* Left content */}
          <div className="lg:sticky lg:top-32 h-fit">

            <SectionHeading
              eyebrow="Why people choose Uniliv"
              title="Designed For Easier Everyday Living."
              description="Professionally managed living spaces designed to reduce daily hassle — so you can focus on work, studies and living comfortably."
            />

          </div>

          {/* Benefits */}
          <div className="space-y-10">

            {benefits.map(
              (
                benefit,
                index
              ) => (
                <div
                  key={benefit.title}
                  className={`pb-10 ${index !==
                      benefits.length - 1
                      ? "border-b border-[#F3D4BF]"
                      : ""
                    }`}
                >
                  <div className="flex gap-4 sm:gap-5">

                    {/* Number */}
                    <span className="shrink-0 pt-1 text-sm font-semibold tracking-wide text-[#F38744]">
                      {benefit.number}
                    </span>

                    {/* Content */}
                    <div className="max-w-xl">
                      <h3 className="text-xl font-semibold tracking-tight text-(--text-primary) sm:text-2xl">
                        {benefit.title}
                      </h3>

                      <p className="mt-3 leading-8 text-(--text-secondary)">
                        {benefit.description}
                      </p>
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