import AmenitiesSection from "@/components/AmenitiesSection";
import BenefitsSection from "@/components/BenefitsSection";

import FooterSection from "@/components/footer/FooterSection";
import HeroSection from "@/components/HeroSection";
import MealsSection from "@/components/MealsSection";
import RoomsSection from "@/components/RoomsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TrustStripSection from "@/components/TrustStripSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TrustStripSection />
      <RoomsSection />
      <AmenitiesSection />
      <MealsSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}
