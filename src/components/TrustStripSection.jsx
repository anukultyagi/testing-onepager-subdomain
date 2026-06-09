import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

const trustedBrands = [
  "IIT Delhi",
  "Delhi University",
  "Infosys",
  "TCS",
  "Wipro",
  "Accenture",
];

export default function TrustStripSection() {
  return (
    <Section className="py-12 lg:py-16">
      <Container>
        <div className="rounded-[28] border border-[--border] bg-white/60 px-6 py-10 backdrop-blur-sm">
          
          <p className="text-center text-sm font-medium tracking-wide text-[--text-muted] uppercase">
            Trusted by residents from top universities & companies
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
            {trustedBrands.map((brand) => (
              <div
                key={brand}
                className="text-sm font-semibold tracking-wide text-neutral-400 transition duration-300 hover:text-neutral-600"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}