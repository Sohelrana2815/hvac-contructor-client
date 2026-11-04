"use client";

import { NAV_ITEMS } from "@/constants/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="hidden lg:flex items-center gap-8">
      {NAV_ITEMS.map((nItem) => {
        const isActive = pathname === nItem.href;
        return (
          <Link
            key={nItem.href}
            href={nItem.href}
            className={`text-sm md:text-lg font-medium transition-colors ${
              isActive
                ? "text-primary font-semibold border-b-2 border-accent"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {nItem.label}
          </Link>
        );
      })}
    </div>
  );
}
