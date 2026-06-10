import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const benefits = [
  {
    number: "01",
    title: "Everything Managed",
    description:
      "Meals, housekeeping, WiFi and maintenance — thoughtfully handled so daily living feels effortless.",
  },
  {
    number: "02",
    title: "Move In Without Stress",
    description:
      "Fully furnished, move-in ready spaces designed so you can settle in from day one.",
  },
  {
    number: "03",
    title: "Comfort You Can Rely On",
    description:
      "Safe, professionally managed spaces built for students and working professionals.",
  },
];

export default function BenefitsSection() {
  return (
    <Section
      className="scroll-mt-28 bg-[#FFFDFB] py-20"
    >
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          
          {/* Left content */}
          <div>
            <p className="text-sm font-medium tracking-wide text-[#A96B45]">
              Why residents choose Uniliv
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight text-(--text-primary) lg:text-5xl">
              Designed for
              Easier Living.
            </h2>

            <p className="mt-6 max-w-md leading-8 text-(--text-secondary)">
              More comfort, less daily hassle —
              thoughtfully managed spaces designed
              around real everyday living.
            </p>
          </div>

          {/* Benefits */}
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`pb-8 ${
                  index !== benefits.length - 1
                    ? "border-b border-[#F3D4BF]"
                    : ""
                }`}
              >
                <div className="flex gap-5">
                  
                  <span className="text-sm font-semibold text-[#F38744]">
                    {benefit.number}
                  </span>

                  <div>
                    <h3 className="text-2xl font-semibold text-(--text-primary)">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 max-w-lg leading-8 text-(--text-secondary)">
                      {benefit.description}
                    </p>
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
