"use client";

import dynamic from "next/dynamic";

// Dynamically import your Swiper component with SSR disabled safely inside a Client Boundary
const SystemShowcaseSlider = dynamic(
  () => import("@/components/modules/home/SystemShowcaseSlider"),
  {
    ssr: false,
    loading: () => (
      <div className="py-28 text-center text-muted-foreground bg-muted/40">
        Loading System Showcase...
      </div>
    ),
  }
);

export default function ClientSystemShowcase() {
  return <SystemShowcaseSlider />;
}