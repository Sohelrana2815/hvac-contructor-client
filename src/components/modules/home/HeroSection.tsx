import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Star, ShieldCheck, UserCheck } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden py-20 lg:py-28 border-b border-border">
      
      {/* 1. Full-Width Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/home/hero-image.jpg"
          alt="Professional HVAC Technician servicing an outdoor AC condenser unit"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* 2. Directional Gradient Overlay (Dark on the left for text contrast, fading to transparent on the right to keep the image clear) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 lg:via-slate-950/60 to-transparent" />

      {/* 3. Hero Content Container */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-start space-y-6">
          
          {/* Urgent Service Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/20 border border-accent/30 backdrop-blur-sm">
            <span className="flex h-2.5 w-2.5 rounded-full bg-accent animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-orange-400 tracking-wide uppercase">
              24/7 Emergency Repair Available
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Your Trusted HVAC Experts. <br className="hidden sm:inline" />
            <span className="text-blue-400">Fast, Reliable, & Affordable.</span>
          </h1>

          {/* Sub-headline / Value Proposition */}
          <p className="text-lg sm:text-xl text-slate-300 max-w-xl font-normal leading-relaxed">
            Professional Heating, AC, & Ductwork Services. We protect your home’s comfort with upfront pricing and guaranteed quality.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              Schedule Repair
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base bg-accent text-accent-foreground hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Trust Badges Card Grid */}
          <div className="pt-8 w-full max-w-2xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-slate-800 shadow-xl">
              
              {/* Badge 1 */}
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-white leading-none">LICENSED</p>
                  <p className="text-slate-400 text-[10px] uppercase">& Insured</p>
                </div>
              </div>

              {/* Badge 2 */}
              <div className="flex items-center gap-2.5">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400 shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-white leading-none">5-STAR</p>
                  <p className="text-slate-400 text-[10px] uppercase">Rated Service</p>
                </div>
              </div>

              {/* Badge 3 */}
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-white leading-none">NATE</p>
                  <p className="text-slate-400 text-[10px] uppercase">Certified</p>
                </div>
              </div>

              {/* Badge 4 */}
              <div className="flex items-center gap-2.5">
                <UserCheck className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="text-xs">
                  <p className="font-bold text-white leading-none">FAMILY</p>
                  <p className="text-slate-400 text-[10px] uppercase">Owned & Operated</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}