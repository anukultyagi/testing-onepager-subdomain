"use client"
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import scrollToLeadForm from "@/lib/scrollToLeadForm";

export default function FinalCTASection() {
    return (
        <Section className="pt-10 lg:pt-16 scroll-mt-28">
            <Container>
                <div className="overflow-hidden rounded-[40] bg-[#FFF4ED] px-8 py-12 lg:px-14 lg:py-16">

                    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                        {/* Left */}
                        <div className="max-w-2xl">
                            <p className="font-medium text-[#F38744]">
                                Limited Availability
                            </p>

                            <h2 className="mt-4 text-4xl font-bold tracking-tight text-(--text-primary) lg:text-5xl">
                                Your Perfect Space Is Waiting.
                            </h2>

                            <p className="mt-5 text-lg leading-8 text-(--text-secondary)">
                                Find a premium co-living
                                experience with meals, WiFi,
                                housekeeping and zero
                                brokerage.
                            </p>

                            <p className="mt-4 text-sm text-(--text-muted)">
                                Trusted by students &
                                professionals across cities.
                            </p>
                        </div>

                        {/* Right */}
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <button onClick={scrollToLeadForm} className="rounded-[18] bg-[#F38744] px-8 py-4 font-semibold text-white transition hover:scale-[1.01] hover:opacity-95">
                                Find My Space
                            </button>

                            <button onClick={scrollToLeadForm} className="rounded-[18] border border-[#F38744]/20 bg-white px-8 py-4 font-semibold text-[#F38744] transition hover:bg-[#F38744] hover:text-white">
                                Schedule a Visit
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}