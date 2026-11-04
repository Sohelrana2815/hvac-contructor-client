"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_ITEMS } from "@/constants/navigation";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden flex items-center gap-3">
      {/* Quick Mobile Emergency Button */}
      <a
        href="tel:1234567890"
        className="bg-accent text-accent-foreground p-2 rounded-full text-xs font-bold shadow-xs flex items-center justify-center"
        aria-label="Call Emergency Hotline"
      >
        <Phone />
      </a>

      {/* Hamburger Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground focus:outline-none rounded-lg hover:bg-muted transition-colors"
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown Menu Drawer */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-background border-b border-border shadow-xl p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((nItem) => {
              const isActive = pathname === nItem.href;
              return (
                <Link
                  key={nItem.href}
                  href={nItem.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {nItem.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-4 border-t border-border flex flex-col gap-3">
            <a
              href="tel:1234567890"
              className="flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold text-sm shadow-sm hover:bg-accent/90 transition-all animate-pulse"
            >
              <span className="text-base">
                <Phone />
              </span>
              <span>24/7 Emergency Hotline: (123) 456-7890</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
