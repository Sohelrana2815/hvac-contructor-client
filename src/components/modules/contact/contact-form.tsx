/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useActionState } from "react";
import { SERVICE_TYPE_OPTIONS, SERVICE_REQUESTED_OPTIONS } from "@/zod/contact.validation";
import { createContactAction } from "@/actions/contactAction";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(createContactAction, null);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Request an HVAC Service</h2>
      <p className="text-sm text-gray-600 mb-6">
        Fill out the form below and we will get back to you instantly.
      </p>

      {/* Success / Error Banners */}
      {state?.success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
          {state.message}
        </div>
      )}

      {state?.success === false && state?.message && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
          {state.message}
        </div>
      )}

      <form action={formAction} className="space-y-4">
        {/* First & Last Name */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
            <input
              type="text"
              name="firstName"
              placeholder="John"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
            />
            {state?.errors?.find((e: any) => e.field === "firstName") && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.find((e: any) => e.field === "firstName")?.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
            <input
              type="text"
              name="lastName"
              placeholder="Doe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
            />
            {state?.errors?.find((e: any) => e.field === "lastName") && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.find((e: any) => e.field === "lastName")?.message}
              </p>
            )}
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
            />
            {state?.errors?.find((e: any) => e.field === "email") && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.find((e: any) => e.field === "email")?.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
            <input
              type="text"
              name="phone"
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
            />
            {state?.errors?.find((e: any) => e.field === "phone") && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.find((e: any) => e.field === "phone")?.message}
              </p>
            )}
          </div>
        </div>

        {/* Service Type & Service Requested Dropdowns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service Type *</label>
            <select
              name="serviceType"
              defaultValue=""
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-black"
            >
              <option value="" disabled>Select Option</option>
              {SERVICE_TYPE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {state?.errors?.find((e: any) => e.field === "serviceType") && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.find((e: any) => e.field === "serviceType")?.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service Requested *</label>
            <select
              name="serviceRequested"
              defaultValue=""
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-black"
            >
              <option value="" disabled>Select Option</option>
              {SERVICE_REQUESTED_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            {state?.errors?.find((e: any) => e.field === "serviceRequested") && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.find((e: any) => e.field === "serviceRequested")?.message}
              </p>
            )}
          </div>
        </div>

        {/* Message / Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Project Details / Message *</label>
          <textarea
            name="message"
            rows={4}
            placeholder="Please describe how we can help you..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"
          />
          {state?.errors?.find((e: any) => e.field === "message") && (
            <p className="text-red-500 text-xs mt-1">
              {state.errors.find((e: any) => e.field === "message")?.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="w-full py-3 px-4 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-lg transition duration-200 disabled:opacity-50"
        >
          {isPending ? "Submitting Inquiry..." : "Submit Inquiry"}
        </button>
      </form>
    </div>
  );
}