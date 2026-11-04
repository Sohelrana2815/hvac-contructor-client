import { z } from "zod";

export const estimateZodSchema = z.object({
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
  zipCode: z
    .string()
    .min(5, "Zip Code must be at least 5 digits")
    .max(10, "Invalid Zip Code"),
  selectedIssue: z
    .string()
    .min(1, "Primary issue selection is required"),
  systemAge: z
    .number()
    .min(0, "System age cannot be negative")
    .max(50, "Invalid system age"),
  estimatedRange: z
    .string()
    .min(1, "Estimated range is required"),
});

export type EstimateFormData = z.infer<typeof estimateZodSchema>;