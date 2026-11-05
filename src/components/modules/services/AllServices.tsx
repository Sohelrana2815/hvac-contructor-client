import Link from "next/link";
import {
  Wrench,
  Clock,
  ShieldCheck,
  PlusCircle,
  RefreshCw,
  Flame,
  Home,
  ArrowUpDown,
  Wind,
  Activity,
  Smartphone,
  Building2,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import { ServiceItem, servicesData } from "@/data/all-services-data";

// Icon mapping helper for the service items
// Icon mapping helper (Notice we removed text-primary from individual icons)
const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-6 h-6" />,
  Clock: <Clock className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  PlusCircle: <PlusCircle className="w-6 h-6" />,
  RefreshCw: <RefreshCw className="w-6 h-6" />,
  Flame: <Flame className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  ArrowUpDown: <ArrowUpDown className="w-6 h-6" />,
  Wind: <Wind className="w-6 h-6" />,
  Activity: <Activity className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Building2: <Building2 className="w-6 h-6" />,
};

interface AllServicesProps {
  locationName?: string;
  phoneNumber?: string;
}

export default function AllServicesSection({
  locationName = "Your Area",
  phoneNumber = "(210) 380-8000",
}: AllServicesProps) {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Complete HVAC Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            AC Repair, Heating & Air Duct{" "}
            <span className="text-primary">Services in {locationName}</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            From same-day AC repair to full heating system installation, our
            licensed HVAC contractors handle residential and commercial jobs
            with transparent pricing and guaranteed quality.
          </p>
        </div>

        {/* 12 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {servicesData.map((service: ServiceItem) => (
            <div
              key={service.id}
              className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Icon container */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-accent/20 group-hover:text-accent transition-colors">
                  {iconMap[service.icon] || <Wrench className="w-6 h-6" />}
                </div>

                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Learn More Link */}
              <div className="pt-6 mt-6 border-t border-border">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Learn More{" "}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar (View All & Call Number Button) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 border-t border-border">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base bg-accent text-accent-foreground hover:bg-accent/90 transition-all shadow-md"
          >
            View All Services
          </Link>
          <a
            href={`tel:${phoneNumber.replace(/[^0-9+]/g, "")}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base bg-card border border-border text-foreground hover:bg-muted transition-all shadow-sm"
          >
            <PhoneCall className="w-5 h-5 text-primary" />
            Call {phoneNumber}
          </a>
        </div>
      </div>
    </section>
  );
}
