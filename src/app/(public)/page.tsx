import HeroSection from "@/components/modules/home/HeroSection";
import CoreServices from "@/components/modules/home/CoreServices";
import ClientSystemShowcase from "@/components/modules/home/ClientSystemShowcase";
import CostEstimator from "@/components/modules/home/CostEstimator";
import BookingSection from "../../components/modules/home/BookingSection";
import ComfortClubSection from "@/components/modules/home/ComfortClubSection";
import ReviewSection from "@/components/modules/home/ReviewSection";

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* 1. HERO SECTION (Emergency Intent & Main Value Proposition) */}
      <HeroSection />

      {/* 2. CORE SERVICES SECTION (What We Do Grid) */}
      <CoreServices />

      {/* 3. CUSTOMER REVIEWS FEED (Early Social Proof & Trust Building) */}
      <ReviewSection />

      {/* 4. INTERACTIVE REPAIR COST ESTIMATOR (High-Engagement Tool) */}
      <CostEstimator />

      {/* 5. 3D SYSTEM SHOWCASE SLIDER (Visual Equipment & Technical Quality) */}
      <ClientSystemShowcase />

      {/* 6. COMFORT CLUB MEMBERSHIP SECTION (Recurring Maintenance Upsell) */}
      <ComfortClubSection />

      {/* 7. ONLINE BOOKING DISPATCHER SECTION (Final Conversion & Form Dispatch) */}
      <BookingSection />
    </main>
  );
}
