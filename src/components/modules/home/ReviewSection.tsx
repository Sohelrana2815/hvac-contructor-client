"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Star, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const reviews = [
  {
    name: "Sarah M.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    content: "Fast service! Came out the same day and fixed our A/C right before the heatwave hit. Highly professional!",
    rating: 5,
    source: "Google",
  },
  {
    name: "David K.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    content: "The technician was extremely professional, wore shoe covers, and explained everything clearly before starting repairs.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Jessica L.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    content: "We joined the Comfort Club maintenance plan last year. Best decision ever! Our furnace runs like brand new.",
    rating: 5,
    source: "Yelp",
  },
  {
    name: "Robert T.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    content: "Upfront pricing with no hidden fees. They replaced our entire commercial HVAC unit seamlessly.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Amanda R.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80",
    content: "Prompt, courteous, and very clean work. They even cleaned up the workspace completely after the installation.",
    rating: 5,
    source: "Facebook",
  },
  {
    name: "Michael B.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    content: "Honest diagnosis. Other companies tried to sell me a new unit, but they repaired it for a fraction of the cost.",
    rating: 5,
    source: "Google",
  },
];

export default function ReviewSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 6000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 dark:bg-slate-900/40 border-b border-border relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground uppercase">
              What Our Customers Say
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground font-medium flex items-center justify-center md:justify-start gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              Live 5-Star Reviews Feed
            </p>
          </div>

          {/* Carousel Arrow Navigation */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all shadow-sm active:scale-95"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollNext}
              className="p-3 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all shadow-sm active:scale-95"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embla Carousel Viewport with Multi-Item Responsive Sizing */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing -mx-3" ref={emblaRef}>
          <div className="flex">
            
            {/* Card 1: Rating Summary Badge Slide */}
            <div className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3 min-w-0">
              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-6 h-[240px] hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-foreground">4.9</span>
                    <span className="text-sm font-semibold text-muted-foreground">out of 5 stars</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    based on <span className="font-semibold text-foreground">1,200+ verified reviews</span>
                  </p>
                </div>

                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="font-bold tracking-tight text-blue-600 text-base">Google</span>
                  <span className="font-bold tracking-tight text-red-600 text-base">Yelp</span>
                  <span className="font-bold tracking-tight text-blue-500 text-base">Facebook</span>
                </div>
              </div>
            </div>

            {/* Dynamic Review Cards Slides */}
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3 min-w-0"
              >
                <div className="bg-card border border-border rounded-2xl p-6 shadow-sm flex flex-col justify-between space-y-5 h-[240px] hover:shadow-md transition-shadow">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Review Content (Controlled line height & clamping for uniform height) */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3 flex-1">
                    &ldquo;{review.content}&rdquo;
                  </p>

                  {/* Customer Info */}
                  <div className="flex items-center gap-3 pt-3 border-t border-border">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden bg-muted shrink-0">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-foreground flex items-center gap-1.5">
                        {review.name}
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      </h4>
                      <p className="text-[11px] text-muted-foreground">Verified {review.source} Review</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Carousel Pagination Indicator Dots */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`transition-all rounded-full ${
                index === selectedIndex
                  ? "w-8 h-2.5 bg-primary"
                  : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Go to slide group ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}