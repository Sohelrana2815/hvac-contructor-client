import HeroSection from "@/components/modules/home/HeroSection";
import CoreServices from "@/components/modules/home/CoreServices";
import ClientSystemShowcase from "@/components/modules/home/ClientSystemShowcase";
import CostEstimator from "@/components/modules/home/CostEstimator";

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. CORE SERVICES SECTION */}
      <CoreServices />

      {/* 3. 3D SYSTEM SHOWCASE SLIDER */}
      <ClientSystemShowcase />
      {/* 4. INTERACTIVE REPAIR COST ESTIMATOR */}
      <CostEstimator />
    </main>
  );
}
