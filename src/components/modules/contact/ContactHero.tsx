import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contactInfoData, ContactInfoCard } from "@/data/contact-info";

// Icon mapping helper
const iconMap: Record<string, React.ReactNode> = {
  Phone: <Phone className="w-5 h-5 text-primary" />,
  Mail: <Mail className="w-5 h-5 text-primary" />,
  MapPin: <MapPin className="w-5 h-5 text-primary" />,
  Clock: <Clock className="w-5 h-5 text-primary" />,
};

export default function ContactHero() {
  return (
    <div className="relative w-full bg-slate-900 text-white">
      {/* 1. Top Banner Background & Content Header */}
      <div className="relative w-full py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-950/90 border-b border-border">
        <div className="container mx-auto max-w-7xl text-center space-y-4">
          <p className="text-xs uppercase tracking-widest text-primary font-bold">
            Home / Contact Us
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Contact <span className="text-primary">Business Name</span>
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Call the dispatch line any hour of any day, or send the form and we will come back to you in no time.
          </p>
        </div>
      </div>

      {/* 2. Overlapping 4 Info Cards Grid */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 -mt-10 sm:-mt-12 mb-12 top-10">
        <div className="md:grid grid-cols-1 lg:grid-cols-4 gap-4">
          {contactInfoData.map((item: ContactInfoCard) => {
            const CardWrapper = item.actionUrl ? "a" : "div";
            const wrapperProps = item.actionUrl
              ? { href: item.actionUrl, target: item.id === "location" ? "_blank" : undefined, rel: "noopener noreferrer" }
              : {};

            return (
              <CardWrapper
                key={item.id}
                {...wrapperProps}
                className={`bg-card text-card-foreground border border-border rounded-2xl p-6 shadow-xl flex flex-col justify-between space-y-3 transition-all ${
                  item.actionUrl ? "hover:border-primary hover:shadow-2xl cursor-pointer group" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
                    {iconMap[item.icon] || <Phone className="w-5 h-5" />}
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {item.title}
                  </h3>
                </div>

                <div className="space-y-1">
                  <p className="text-base sm:text-lg font-extrabold text-foreground group-hover:text-primary transition-colors">
                    {item.detail}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.subDetail}
                  </p>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </div>
  );
}