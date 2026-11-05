"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Snowflake,
  Flame,
  Activity,
  Wrench,
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  Phone,
  User,
  MapPin,
} from "lucide-react";

interface HvacIssue {
  id: string;
  title: string;
  description: string;
  baseMin: number;
  baseMax: number;
  icon: string;
}

const HVAC_ISSUES: HvacIssue[] = [
  {
    id: "ac-cooling",
    title: "A/C Not Cooling",
    description: "Weak airflow, warm vents, or refrigerant leaks.",
    baseMin: 150,
    baseMax: 350,
    icon: "Snowflake",
  },
  {
    id: "furnace-noise",
    title: "Furnace Making Noise",
    description: "Banging, screeching, or clicking sounds on startup.",
    baseMin: 200,
    baseMax: 450,
    icon: "Flame",
  },
  {
    id: "thermostat-issues",
    title: "Thermostat & Electrical",
    description: "Blank screen, erratic cycling, or wiring failures.",
    baseMin: 120,
    baseMax: 280,
    icon: "Activity",
  },
  {
    id: "poor-airflow",
    title: "Blocked / Poor Airflow",
    description: "Clogged filters, duct blockage, or failing blower motor.",
    baseMin: 180,
    baseMax: 400,
    icon: "Wrench",
  },
];

function IssueIcon({
  name,
  isSelected,
}: {
  name: string;
  isSelected: boolean;
}) {
  const iconClass = `w-6 h-6 ${isSelected ? "text-primary-foreground" : "text-primary"}`;
  switch (name) {
    case "Snowflake":
      return <Snowflake className={iconClass} />;
    case "Flame":
      return <Flame className={iconClass} />;
    case "Activity":
      return <Activity className={iconClass} />;
    case "Wrench":
      return <Wrench className={iconClass} />;
    default:
      return <Snowflake className={iconClass} />;
  }
}

export default function CostEstimator() {
  const [selectedIssue, setSelectedIssue] = useState<HvacIssue>(HVAC_ISSUES[0]);
  const [systemAge, setSystemAge] = useState<number>(5); // default 5 years

  // Modal and Submission States
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // Form input states (aligns with estimateZodSchema)
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    zipCode: "",
  });

  // Dynamic price calculation based on issue base + age multiplier
  const ageMultiplier = 1 + systemAge * 0.04; // 4% increase per year of system age
  const estimatedMin = Math.round(selectedIssue.baseMin * ageMultiplier);
  const estimatedMax = Math.round(selectedIssue.baseMax * ageMultiplier);
  const priceRangeString = `$${estimatedMin} – $${estimatedMax}`;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEstimateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can call your Next.js Server Action using estimateZodSchema validation
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 lg:py-28 bg-background border-b border-border relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-xs font-semibold text-primary tracking-wider uppercase">
              Transparent Pricing Tool
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Interactive Repair Cost Estimator
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Select your HVAC issue and system age to instantly calculate
            estimated repair ranges before scheduling a technician.
          </p>
        </div>

        {/* Estimator Container Box */}
        <div className="max-w-5xl mx-auto bg-card border border-border rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Select Issue & System Age (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* 1. Select Issue Grid */}
              <div>
                <label className="block text-sm font-bold text-foreground uppercase tracking-wider mb-3">
                  1. Select Your Primary Issue
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {HVAC_ISSUES.map((issue) => {
                    const isSelected = selectedIssue.id === issue.id;
                    return (
                      <button
                        key={issue.id}
                        type="button"
                        onClick={() => setSelectedIssue(issue)}
                        className={`text-left p-4 rounded-2xl border transition-all flex items-start gap-3.5 cursor-pointer ${
                          isSelected
                            ? "bg-primary text-primary-foreground border-primary shadow-md"
                            : "bg-muted/50 hover:bg-muted text-foreground border-border"
                        }`}
                      >
                        <div
                          className={`p-2.5 rounded-xl shrink-0 ${
                            isSelected ? "bg-white/20" : "bg-primary/10"
                          }`}
                        >
                          <IssueIcon
                            name={issue.icon}
                            isSelected={isSelected}
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm sm:text-base leading-tight">
                            {issue.title}
                          </h4>
                          <p
                            className={`text-xs mt-1 line-clamp-1 ${
                              isSelected
                                ? "text-primary-foreground/80"
                                : "text-muted-foreground"
                            }`}
                          >
                            {issue.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. System Age Slider */}
              <div className="space-y-4 pt-2 border-t border-border">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-foreground uppercase tracking-wider">
                    2. Estimated System Age
                  </label>
                  <span className="px-3 py-1 bg-primary/10 text-primary font-bold text-sm rounded-full">
                    {systemAge} {systemAge === 1 ? "Year" : "Years"} old
                  </span>
                </div>

                <div className="py-2">
                  <Slider
                    defaultValue={[5]}
                    value={[systemAge]}
                    max={15}
                    step={1}
                    onValueChange={(vals) =>
                      setSystemAge(typeof vals === "number" ? vals : vals[0])
                    }
                    className="w-full cursor-pointer"
                  />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground font-medium">
                  <span>Brand New (0 yrs)</span>
                  <span>Average (7-8 yrs)</span>
                  <span>Aging Unit (15+ yrs)</span>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Price Output Box (5 Cols) */}
            <div className="lg:col-span-5 bg-muted/60 border border-border rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-accent/20 text-accent text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                Estimated Range
              </div>

              <div className="space-y-6 pt-2">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Selected Issue
                  </p>
                  <h3 className="text-lg font-bold text-foreground mt-0.5">
                    {selectedIssue.title}
                  </h3>
                </div>

                {/* Price Display */}
                <div className="py-4 bg-card border border-border rounded-2xl shadow-inner">
                  <span className="text-xs text-muted-foreground block uppercase font-medium mb-1">
                    Projected Repair Cost
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-primary tracking-tight">
                    {priceRangeString}
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-2 px-4">
                    *Includes diagnostic, standard parts, and labor. Final quote
                    confirmed on-site.
                  </p>
                </div>

                <div className="flex items-center gap-2 text-xs text-left text-muted-foreground bg-accent/10 p-3 rounded-xl border border-accent/20">
                  <ShieldAlert className="w-5 h-5 text-accent shrink-0" />
                  <span>
                    Aging systems (10+ yrs) may require specialized components.
                  </span>
                </div>
              </div>

              {/* Action Button: Opens Lead Capture Modal */}
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full py-4 px-6 rounded-xl font-bold text-base bg-accent text-accent-foreground hover:bg-accent/90 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>Get Accurate Estimate</span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- LEAD CAPTURE MODAL DIALOG --- */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md bg-card text-card-foreground border border-border rounded-3xl p-6 sm:p-8">
          {!isSubmitted ? (
            <div className="space-y-6">
              <DialogHeader className="space-y-2 text-left">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase w-fit">
                  Price Lock Guarantee
                </div>
                <DialogTitle className="text-2xl font-extrabold text-foreground tracking-tight">
                  Lock In Your Estimated Range
                </DialogTitle>
                <DialogDescription className="text-muted-foreground text-sm">
                  We’ve calculated your repair cost for{" "}
                  <span className="font-bold text-foreground">
                    {selectedIssue.title}
                  </span>{" "}
                  ({priceRangeString}). Enter your details to lock in this quote
                  and request technician dispatch.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleEstimateSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3.5 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="John Smith"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3.5 w-4 h-4 text-muted-foreground" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(555) 000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                    Zip Code
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      name="zipCode"
                      required
                      placeholder="90210"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md text-base flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit & Request Dispatch</span>
                    <CheckCircle2 className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* SUCCESS CONFIRMATION STATE */
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-extrabold text-foreground">
                Estimate Locked Successfully!
              </h3>
              <p className="text-muted-foreground text-sm">
                Thank you,{" "}
                <span className="font-bold text-foreground">
                  {formData.fullName}
                </span>
                . Your estimate of{" "}
                <span className="font-bold text-primary">
                  {priceRangeString}
                </span>{" "}
                for {selectedIssue.title} has been sent to our dispatch team. We
                will call you at{" "}
                <span className="font-bold text-foreground">
                  {formData.phone}
                </span>{" "}
                shortly.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full py-3 rounded-xl bg-muted text-foreground font-bold text-sm hover:bg-muted/80 transition-all cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}