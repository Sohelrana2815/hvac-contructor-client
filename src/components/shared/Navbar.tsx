import Link from "next/link";
// import Image from "next/image";
import { Phone } from "lucide-react";
import Image from "next/image";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/90 backdrop-blur-md shadow-xs">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="Premier HVAC Solutions Home"
          className="flex items-center gap-2"
        >
          {/* Replace with your actual logo file path */}
          <div className="font-bold text-xl tracking-tight text-primary flex items-center gap-2">
            <Image
              src="/logo.png" // or /logo.png
              alt="Premier HVAC Solutions"
              width={160}
              height={40}
              className="h-16 lg:h-20 w-auto object-contain" // Height fixed to 36px (h-9), width scales naturally
              priority
            />
            <div>
              <span className="text-primary font-bold text-lg block leading-none">
                PREMIER
              </span>
              <span className="text-base font-semibold text-accent tracking-wider">
                HVAC SOLUTIONS
              </span>
            </div>
          </div>
        </Link>

        {/* Primary Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <NavLinks />
        </nav>

        {/* Right Actions: Emergency Hotline & Consultation CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:1234567890"
            className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-sm hover:bg-accent/90 transition-all animate-pulse"
          >
            <span className="text-base">
              <Phone />
            </span>
            <span>Call 123-456-7890</span>
          </a>
        </div>

        {/* Mobile Navigation Trigger */}
        <div className="flex items-center lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
