import Link from "next/link";
import { Snowflake, Flame, Wind, ArrowRight } from "lucide-react";
import { CORE_SERVICES } from "@/data/core-services-data";

// Helper component to map icon string to Lucide icon element
function ServiceIcon({ name }: { name: string }) {
  switch (name) {
    case "Snowflake":
      return <Snowflake className="w-7 h-7 text-primary" />;
    case "Flame":
      return <Flame className="w-7 h-7 text-accent" />;
    case "Wind":
      return <Wind className="w-7 h-7 text-primary" />;
    default:
      return <Snowflake className="w-7 h-7 text-primary" />;
  }
}

export default function CoreServices() {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-xs font-semibold text-primary tracking-wider uppercase">
              What We Offer
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Our Core Services
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            From emergency breakdowns to routine seasonal maintenance, our certified technicians deliver top-tier residential and commercial solutions.
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-card text-card-foreground rounded-2xl p-8 border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Icon Wrapper */}
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <div className="group-hover:brightness-200 transition-all">
                    <ServiceIcon name={service.iconName} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature Bullet Points */}
                <ul className="space-y-2 mb-8 border-t border-border pt-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-xs sm:text-sm text-foreground/80 flex items-center gap-2 font-medium">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer Link */}
              <div className="pt-2">
                <Link
                  href={service.slug}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:text-accent transition-colors"
                >
                  <span>Explore {service.title}</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}