/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { ContactServices } from "@/services/contact.service";
import { contactZodSchema } from "@/zod/contact.validation";

export const createContactAction = async (
  _currentState: any,
  formData: FormData,
) => {
  try {
    // 1. Extract payload from FormData matching form input names
    const rawPayload = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      serviceType: formData.get("serviceType"),
      serviceRequested: formData.get("serviceRequested"),
      message: formData.get("message"),
    };

    // 2. Validate payload using Zod schema
    const validatedPayload = contactZodSchema.safeParse(rawPayload);
    
    if (!validatedPayload.success) {
      return {
        success: false,
        errors: validatedPayload.error.issues.map((issue) => ({
          field: issue.path[0],
          message: issue.message,
        })),
      };
    }

    // 3. Send to Service Layer (Saves to MongoDB + Triggers Nodemailer email)
    const result = await ContactServices.submitContactForm(validatedPayload.data);

    return {
      success: true,
      message: "Message sent successfully! We will contact you within 24 hours.",
      data: JSON.parse(JSON.stringify(result)), // Clean object for client component boundary
    };
  } catch (error: any) {
    console.error("Error submitting contact form:", error);
    return {
      success: false,
      message: error.message || "An unexpected error occurred. Please try again.",
    };
  }
};