"use client";

import React, { useState } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  User,
  Phone,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

export default function BookingSection() {
  const [step, setStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>("January 18, 2026");
  const [selectedSlot, setSelectedSlot] = useState<string>(
    "Morning (8:00 AM - 12:00 PM)",
  );
  const [serviceType, setServiceType] = useState<string>("AC Repair");

  // Form input states
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    streetAddress: "",
    zipCode: "",
    notes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally call your Next.js Server Action
    setIsSubmitted(true);
  };

  return (
    <section
      id="booking-section"
      className="py-20 lg:py-28 bg-background relative overflow-hidden border-b border-border"
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20">
            <span className="text-xs font-semibold text-accent tracking-wider uppercase">
              Online Dispatcher
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Book Online Instantly
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Select your preferred time slot and location. Our certified
            technicians will dispatch directly to your home.
          </p>
        </div>

        {/* Booking Card Container */}
        <div className="max-w-4xl mx-auto bg-card text-card-foreground rounded-3xl border border-border shadow-xl overflow-hidden p-6 sm:p-10">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center gap-4 mb-10 pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                1
              </span>
              <span className="text-xs sm:text-sm font-semibold text-foreground hidden sm:inline">
                Date & Time
              </span>
            </div>
            <div className="w-12 h-0.5 bg-border" />
            <div className="flex items-center gap-2">
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                2
              </span>
              <span className="text-xs sm:text-sm font-semibold text-foreground hidden sm:inline">
                Service & Address
              </span>
            </div>
            <div className="w-12 h-0.5 bg-border" />
            <div className="flex items-center gap-2">
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                3
              </span>
              <span className="text-xs sm:text-sm font-semibold text-foreground hidden sm:inline">
                Confirmation
              </span>
            </div>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleBookingSubmit}>
              {/* STEP 1: DATE & TIME SLOTS */}
              {step === 1 && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Date Picker Mockup / Selection */}
                    <div className="space-y-4">
                      <label className="text-sm font-bold text-foreground flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 text-primary" /> Select
                        Dispatch Date
                      </label>
                      <input
                        type="date"
                        defaultValue="2026-02-15"
                        className="w-full p-4 rounded-xl border border-input bg-background text-foreground font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                        onChange={(e) => setSelectedDate(e.target.value)}
                      />
                      <p className="text-xs text-muted-foreground">
                        Emergency same-day dispatch slots available 24/7.
                      </p>
                    </div>

                    {/* Time Slots */}
                    <div className="space-y-4">
                      <label className="text-sm font-bold text-foreground flex items-center gap-2">
                        <Clock className="w-4 h-4 text-primary" /> Select Time
                        Window
                      </label>
                      <div className="space-y-2.5">
                        {[
                          "Morning (8:00 AM - 12:00 PM)",
                          "Afternoon (12:00 PM - 4:00 PM)",
                          "Emergency ASAP (Within 2 Hours)",
                        ].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedSlot(slot)}
                            className={`w-full p-3.5 rounded-xl text-left text-sm font-semibold transition-all border ${
                              selectedSlot === slot
                                ? "bg-primary text-primary-foreground border-primary shadow-md"
                                : "bg-muted/50 text-foreground border-border hover:bg-muted"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Step 1 Next Button */}
                  <div className="flex justify-end pt-6 border-t border-border">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md"
                    >
                      Next: Service & Address <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: SERVICE TYPE & LOCATION DETAILS */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="space-y-4">
                    <label className="text-sm font-bold text-foreground">
                      Select Required Service
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {[
                        "AC Repair",
                        "Heating Repair",
                        "Maintenance",
                        "New Installation",
                      ].map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setServiceType(srv)}
                          className={`p-3 rounded-xl text-xs sm:text-sm font-bold transition-all border text-center ${
                            serviceType === srv
                              ? "bg-accent text-accent-foreground border-accent shadow-sm"
                              : "bg-muted/50 text-foreground border-border hover:bg-muted"
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground">
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

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground">
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
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2 space-y-2">
                      <label className="text-xs font-bold text-foreground">
                        Street Address
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-3.5 w-4 h-4 text-muted-foreground" />
                        <input
                          type="text"
                          name="streetAddress"
                          required
                          placeholder="123 Main Street"
                          value={formData.streetAddress}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-bold text-foreground">
                        Zip Code
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        required
                        placeholder="90210"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  {/* Step 2 Buttons */}
                  <div className="flex items-center justify-between pt-6 border-t border-border">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-muted text-muted-foreground hover:bg-muted/80 transition-all"
                    >
                      <ArrowLeft className="w-4 h-4" /> Back
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold bg-accent text-accent-foreground hover:bg-accent/90 transition-all shadow-md"
                    >
                      Confirm Appointment Request{" "}
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            /* STEP 3: SUCCESS CONFIRMATION STATE */
            <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-500">
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                Appointment Requested Successfully!
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto text-sm sm:text-base">
                Thank you,{" "}
                <span className="font-bold text-foreground">
                  {formData.fullName}
                </span>
                . We have locked in your slot for{" "}
                <span className="font-bold text-primary">{selectedSlot}</span>.
                Our dispatcher is reviewing your address and will call you
                shortly.
              </p>
              <div className="pt-6">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-3 rounded-xl bg-muted text-foreground font-semibold text-sm hover:bg-muted/80 transition-all"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
