import AllServicesSection from "@/components/modules/services/AllServices";

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Render the services grid with your dynamic props */}
      <AllServicesSection
        locationName="Your Location"
        phoneNumber="(210) 380-8000"
      />
    </main>
  );
}
