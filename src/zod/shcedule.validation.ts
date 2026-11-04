import { z } from "zod";

// 1. Separate your Enums cleanly for maintainability and reusability
export const ServiceTypeEnum = z.enum(
  ["AC Repair", "Heating Repair", "System Maintenance", "New Installation"],
  { error: "Please select a valid service type" }
);

export const TimeSlotEnum = z.enum(
  ["Morning (8:00 AM - 12:00 PM)", "Afternoon (12:00 PM - 4:00 PM)", "Emergency ASAP"],
  { error: "Please select a valid time window" }
);

// 2. Main schema utilizing the separated enums
export const scheduleZodSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full Name is required")
    .max(100, "Full Name is too long"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Invalid phone number format"
    ),
  streetAddress: z
    .string()
    .min(5, "Full street address is required for technician dispatch"),
  zipCode: z
    .string()
    .min(5, "Zip Code is required")
    .max(10, "Invalid Zip Code"),
  serviceType: ServiceTypeEnum,
  preferredDate: z
    .string()
    .min(1, "Please select an appointment date"),
  preferredTimeSlot: TimeSlotEnum,
  notes: z.string().optional(),
});

export type ScheduleFormData = z.infer<typeof scheduleZodSchema>;