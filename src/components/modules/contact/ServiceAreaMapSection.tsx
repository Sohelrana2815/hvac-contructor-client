import Link from "next/link";
import { MapPin, Navigation, ExternalLink, Star } from "lucide-react";

interface ServiceAreaMapProps {
  locationName?: string;
  businessAddress?: string;
  googleMapsUrl?: string;
}

export default function ServiceAreaMapSection({
  locationName = "San Antonio",
  businessAddress = "1710 Lookout Rd, San Antonio, TX 78232",
  googleMapsUrl = "https://maps.google.com",
}: ServiceAreaMapProps) {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/50 dark:bg-slate-900/20 border-b border-border relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
            Find Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Serving {locationName} and All <span className="text-primary">Surrounding Counties</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Our headquarters is located at {businessAddress}. Stop by during business hours or call for dispatch the any time, and we will come to you instead.
          </p>
        </div>

        {/* Map Container Wrapper */}
        <div className="relative w-full rounded-2xl overflow-hidden border border-border shadow-xl bg-card">
          
          {/* Simulated/Embedded Map Background Graphic */}
          <div className="relative w-full h-[380px] sm:h-[450px] bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
            {/* 
              NOTE: Later when you want a live embedded map, you can replace this background div 
              with a real iframe from Google Maps embed API:
              <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" />
            */}
            <div className="absolute inset-0 opacity-80 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] dark:bg-[radial-gradient(#334155_1px,transparent_1px)]" />
            
            {/* Central Map Pin Marker Indicator */}
            <div className="absolute z-10 flex flex-col items-center animate-bounce">
              <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full shadow-lg text-xs font-bold flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5" /> SBSC HVAC HQ
              </div>
              <div className="w-4 h-4 bg-primary rotate-45 shadow-md -mt-2" />
            </div>

            {/* Floating Business Card Overlay (Inspired by your design reference) */}
            <div className="absolute bottom-6 left-6 z-20 bg-background/95 backdrop-blur-md border border-border p-4 rounded-xl shadow-2xl max-w-xs w-full space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-bold text-foreground text-sm">SBSC HVAC Services</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{businessAddress}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-amber-400 text-xs font-semibold pt-1">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-foreground ml-1">4.9 (1,200+ reviews)</span>
              </div>

              <div className="pt-2 border-t border-border">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline"
                >
                  <Navigation className="w-3.5 h-3.5" /> Open in Google Maps <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}