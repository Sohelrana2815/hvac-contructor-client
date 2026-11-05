import ContactHero from "@/components/modules/contact/ContactHero";
import ContactSection from "@/components/modules/contact/ContactSection";
import ServiceAreaMapSection from "@/components/modules/contact/ServiceAreaMapSection";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* 1. Top Banner & 4 Info Cards */}
      <ContactHero />

      {/* 2. Side-by-Side Information & Form Section */}
      <ContactSection />

      {/* 3. Service Area & Map Section */}
      <ServiceAreaMapSection
        locationName="San Antonio"
        businessAddress="1710 Lookout Rd, San Antonio, TX 78232"
      />
    </main>
  );
}
