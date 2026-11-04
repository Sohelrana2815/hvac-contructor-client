import nodemailer from "nodemailer";
import { connectDB } from "@/lib/db";
import { Contact } from "@/models/contact.model";
import { envVars } from "@/config/env.config";

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  serviceRequested: string;
  message: string;
}

const submitContactForm = async (payload: ContactPayload) => {
  // 1. Ensure secure cached database connection
  await connectDB();

  // 2. Save submission to MongoDB
  const savedContact = await Contact.create(payload);

  // 3. Configure Nodemailer transporter
  const transporter = nodemailer.createTransport({
    host: envVars.SMTP_HOST,
    port: Number(envVars.SMTP_PORT),
    secure: true,
    auth: {
      user: envVars.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // 4. Send instant email notification to the HVAC contractor/owner
  await transporter.sendMail({
    from: envVars.SMTP_USER,
    to: envVars.ADMIN_EMAIL,
    replyTo: payload.email,
    subject: `Service Inquiry: ${payload.serviceType} - ${payload.firstName} ${payload.lastName}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; background: #f8f9fa; border-radius: 8px;">
        <h2 style="color: #004aad; margin-top: 0;">New Service Inquiry!</h2>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 15px 0;" />
        <p><strong>Name:</strong> ${payload.firstName} ${payload.lastName}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Phone:</strong> ${payload.phone}</p>
        <p><strong>Service Type:</strong> ${payload.serviceType}</p>
        <p><strong>Service Requested:</strong> ${payload.serviceRequested}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #ffffff; padding: 15px; border-left: 4px solid #004aad; border-radius: 4px;">
          ${payload.message.replace(/\n/g, "<br>")}
        </blockquote>
      </div>
    `,
  });

  return savedContact;
};

export const ContactServices = {
  submitContactForm,
};
