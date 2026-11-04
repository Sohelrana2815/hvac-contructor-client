"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Snowflake,
  Flame,
  Activity,
  Wrench,
  ArrowRight,
  ShieldAlert,
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

  // Dynamic price calculation based on issue base + age multiplier
  const ageMultiplier = 1 + systemAge * 0.04; // 4% increase per year of system age
  const estimatedMin = Math.round(selectedIssue.baseMin * ageMultiplier);
  const estimatedMax = Math.round(selectedIssue.baseMax * ageMultiplier);

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
                    ${estimatedMin} – ${estimatedMax}
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

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={() => {
                    // Scroll to contact or trigger popup modal later
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    } else {
                      alert(
                        `Locking in estimate for ${selectedIssue.title}: $${estimatedMin} - $${estimatedMax}`,
                      );
                    }
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
    </section>
  );
}
