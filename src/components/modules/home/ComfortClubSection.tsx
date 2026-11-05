import Image from "next/image";
import Link from "next/link";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$15.99",
    period: "/mo",
    popular: false,
    features: [
      "2 Annual Inspections",
      "15% Off Repairs",
      "Priority Scheduling",
    ],
  },
  {
    name: "Premium",
    price: "$29.99",
    period: "/mo",
    popular: true,
    stars: 3,
    features: [
      "2 Annual Inspections",
      "15% Off Repairs",
      "Priority Scheduling",
    ],
  },
  {
    name: "Elite",
    price: "$49.99",
    period: "/mo",
    popular: false,
    features: [
      "2 Annual Inspections",
      "15% Off Repairs",
      "No Diagnostic Fees",
    ],
  },
];

export default function ComfortClubSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/20 border-b border-border relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground uppercase">
            The Comfort Club
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            Recurring Maintenance Membership
          </p>
        </div>

        {/* Main Grid: Badge + Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Comfort Club Badge Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] drop-shadow-xl hover:scale-105 transition-transform duration-300">
              <Image
                src="/home/comfort-club.png"
                alt="Comfort Club Membership Badge"
                fill
                priority
                className="object-contain"
                sizes="(max-width: 768px) 280px, 340px"
              />
            </div>
          </div>

          {/* Right Column: Pricing Cards & CTA */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`rounded-2xl bg-card border shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl ${
                    plan.popular
                      ? "border-primary ring-2 ring-primary/20 scale-[1.02] sm:-translate-y-2"
                      : "border-border"
                  }`}
                >
                  {/* Card Header */}
                  <div
                    className={`p-5 text-center ${
                      plan.popular
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted/40 text-foreground"
                    }`}
                  >
                    {plan.stars && (
                      <div className="flex justify-center gap-1 mb-1 text-amber-400">
                        {[...Array(plan.stars)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400" />
                        ))}
                      </div>
                    )}
                    <h3 className="font-bold text-lg">{plan.name}</h3>
                    <div className="mt-1 flex items-baseline justify-center gap-0.5">
                      <span className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs opacity-80">{plan.period}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-background">
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="font-medium text-foreground/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Button */}
            <div className="flex justify-center sm:justify-start pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base bg-accent text-accent-foreground hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl active:scale-[0.98] w-full sm:w-auto"
              >
                Join the Club
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}