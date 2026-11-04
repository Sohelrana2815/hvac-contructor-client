import { z } from "zod";

export const SERVICE_TYPE_OPTIONS = [
  "Cooling",
  "Heating",
  "Indoor Air Quality",
  "Other",
] as const;

export const SERVICE_REQUESTED_OPTIONS = [
  "Installation",
  "Maintenance",
  "Repair",
  "Other",
] as const;

export const contactZodSchema = z.object({
  firstName: z
    .string({ error: "First Name must be a string" })
    .nonempty("First Name is required")
    .min(3, "First Name is too short!")
    .max(100, "First Name is too long"),
  lastName: z
    .string({ error: "Last Name must be a string" })
    .nonempty("Last Name is required")
    .min(2, "Last Name is too short!")
    .max(100, "Last Name is too long"),
  email: z.email("Invalid email format").nonempty("Email is required"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
      "Invalid phone number format",
    ),
  serviceType: z.enum(SERVICE_TYPE_OPTIONS, {
    error: "Please select a valid service type",
  }),
  serviceRequested: z.enum(SERVICE_REQUESTED_OPTIONS, {
    error: "Please select a valid requested service",
  }),
  message: z
    .string()
    .min(10, "Please provide more details (at least 10 characters)")
    .max(2000, "Message cannot exceed 2000 characters")
    .nonempty("Project details are required"),
});
