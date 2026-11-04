"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { SHOWCASE_ITEMS } from "@/data/showcase";
import { Snowflake, Flame, Zap, Wind } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// Helper for dynamic icons
function ShowcaseIcon({ name }: { name: string }) {
  switch (name) {
    case "Flame":
      return <Flame className="w-7 h-7 text-white" />;
    case "Snowflake":
      return <Snowflake className="w-7 h-7 text-white" />;
    case "Zap":
      return <Zap className="w-7 h-7 text-white" />;
    case "Wind":
      return <Wind className="w-7 h-7 text-white" />;
    default:
      return <Snowflake className="w-7 h-7 text-white" />;
  }
}

export default function SystemShowcaseSlider() {
  return (
    <section className="py-20 lg:py-28 bg-muted/40 overflow-hidden border-b border-border">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-3">
          <span className="text-xs font-semibold text-primary tracking-wider uppercase">
            Visual Expertise
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
          Advanced System Showcase
        </h2>
        <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mt-3">
          Explore our specialized equipment handling, precision diagnostics, and professional installation standards.
        </p>
      </div>

      {/* 3D Coverflow Swiper Container */}
      <div className="w-full max-w-7xl mx-auto px-4">
        <SwifierCoverflowWrapper />
      </div>
    </section>
  );
}

// Sub-component to keep Swiper clean and avoid layout hydration shifts
function SwifierCoverflowWrapper() {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      initialSlide={1}
      loop={true}
      speed={800}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 20,
        stretch: 0,
        depth: 180,
        modifier: 1.5,
        slideShadows: false,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination, Autoplay]}
      className="w-full py-12 !overflow-visible"
    >
      {SHOWCASE_ITEMS.map((item) => (
        <SwiperSlide
          key={item.id}
          className="!w-[300px] sm:!w-[340px] md:!w-[380px] h-[520px] bg-card rounded-3xl overflow-hidden shadow-xl border border-border flex flex-col transition-all select-none"
        >
          {/* Card Header (Primary Blue Box with Icon & Title) */}
          <div className="bg-primary text-primary-foreground p-7 flex flex-col items-center justify-center text-center relative overflow-hidden shrink-0">
            <div className="absolute inset-0 bg-black/5 pointer-events-none" />
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-3 shadow-sm">
              <ShowcaseIcon name={item.iconName} />
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              {item.title}
            </h3>
            <p className="text-[11px] uppercase tracking-widest text-primary-foreground/80 mt-1 font-medium">
              {item.subtitle}
            </p>
          </div>

          {/* Card Body (White section with image preview & description) */}
          <div className="p-6 flex-1 flex flex-col justify-between bg-card text-card-foreground">
            <div className="relative w-full h-36 rounded-xl overflow-hidden mb-4 shadow-inner bg-muted">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
              {item.description}
            </p>
            <div className="pt-2">
              <span className="text-xs font-bold text-primary uppercase tracking-wider flex items-center gap-1 hover:gap-2 transition-all">
                Certified Technicians &rarr;
              </span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}