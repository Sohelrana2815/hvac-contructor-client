import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ShieldCheck, Award } from "lucide-react";

interface FooterProps {
  phoneNumber?: string;
  emailAddress?: string;
  locationName?: string;
}

export default function Footer({
  phoneNumber = "(210) 380-8000",
  emailAddress = "support@sbsc_hvac.com",
  locationName = "San Antonio & Surrounding Areas",
}: FooterProps) {
  return (
    <footer className="bg-card text-foreground border-t border-border">
      {/* Top Banner / Emergency Call-out Bar (Light Soft Blue/Muted background) */}
  {/* Top Banner / Emergency Call-out Bar (Primary & Accent Only) */}
      <div className="border-b border-primary/20 bg-primary/5 py-6">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="p-3 rounded-xl bg-accent/10 text-accent">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-bold text-primary text-base">24/7 Emergency HVAC Repairs</h4>
              <p className="text-xs text-primary/80">No heat or AC breakdown? Our technicians are on call around the clock.</p>
            </div>
          </div>
          <a
            href={`tel:${phoneNumber.replace(/[^0-9+]/g, "")}`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-accent text-accent-foreground hover:bg-accent/90 transition-all shadow-md active:scale-95"
          >
            <Phone className="w-4 h-4 text-accent-foreground" />
            Emergency Line: {phoneNumber}
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Column 1 & 2: Brand, Logo & About */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-block">
              <div className="relative w-40 h-12">
                <Image
                  src="/logo.png" 
                  alt="SBSC HVAC Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            
            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Your trusted partner for professional heating, cooling, and air duct services. We protect your indoor comfort with upfront pricing, certified technicians, and 100% satisfaction guarantees.
            </p>

            {/* Trust Badges Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg border border-border">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                Licensed & Insured
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-foreground bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg border border-border">
                <Award className="w-4 h-4 text-amber-500" />
                NATE Certified
              </div>
            </div>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-foreground font-bold text-sm uppercase tracking-wider border-l-2 border-primary pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-xs text-primary">›</span> Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-xs text-primary">›</span> All Services
                </Link>
              </li>
              <li>
                <Link href="/comfort-club" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-xs text-primary">›</span> Comfort Club Membership
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-xs text-primary">›</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-xs text-primary">›</span> Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Popular Services */}
          <div className="space-y-4">
            <h3 className="text-foreground font-bold text-sm uppercase tracking-wider border-l-2 border-primary pl-3">
              Core Services
            </h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>
                <Link href="/services/ac-repair" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-xs text-primary">›</span> AC Repair & Tune-ups
                </Link>
              </li>
              <li>
                <Link href="/services/heating-repair" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-xs text-primary">›</span> Heating & Furnace
                </Link>
              </li>
              <li>
                <Link href="/services/air-duct-cleaning" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-xs text-primary">›</span> Air Duct Cleaning
                </Link>
              </li>
              <li>
                <Link href="/services/heat-pump-installation" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-xs text-primary">›</span> Heat Pump Systems
                </Link>
              </li>
              <li>
                <Link href="/services/commercial-hvac" className="hover:text-primary transition-colors flex items-center gap-2">
                  <span className="text-xs text-primary">›</span> Commercial HVAC
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-foreground font-bold text-sm uppercase tracking-wider border-l-2 border-primary pl-3">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${phoneNumber}`} className="flex items-start gap-3 hover:text-primary transition-colors group">
                  <Phone className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground">Call Us Anytime</p>
                    <span className="font-semibold text-foreground group-hover:text-primary">{phoneNumber}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${emailAddress}`} className="flex items-start gap-3 hover:text-primary transition-colors group">
                  <Mail className="w-4 h-4 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-xs text-muted-foreground">Email Inquiries</p>
                    <span className="font-semibold text-foreground group-hover:text-primary">{emailAddress}</span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                <div>
                  <p className="text-xs text-muted-foreground">Service Coverage</p>
                  <span className="font-semibold text-foreground">{locationName}</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Legal Bar */}
      <div className="border-t border-border bg-slate-50 dark:bg-slate-900/80 py-6">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 HVAC Services. All rights reserved. Powered by Fatah Dev.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-foreground transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-foreground transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}