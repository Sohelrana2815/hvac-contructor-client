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

  // Build a clean, unified subject line (avoiding multiline SMTP header breaks)
  const serviceDetail = payload.serviceRequested
    ? `${payload.serviceType} - ${payload.serviceRequested}`
    : payload.serviceType;

  // 4. Send instant email notification to the HVAC contractor/owner
  await transporter.sendMail({
    from: `"${payload.firstName} ${payload.lastName} via Website" <${envVars.SMTP_USER}>`,
    to: envVars.ADMIN_EMAIL,
    replyTo: `"${payload.firstName} ${payload.lastName}" <${payload.email}>`,
    subject: `New Lead: ${serviceDetail} (${payload.firstName} ${payload.lastName})`,
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="color-scheme" content="light dark">
        <meta name="supported-color-schemes" content="light dark">
        <style>
          :root {
            color-scheme: light dark;
            supported-color-schemes: light dark;
          }
          /* Dark mode adaptation for mobile apps & desktop clients */
          @media (prefers-color-scheme: dark) {
            .email-bg { background-color: #1a1a1a !important; }
            .card-bg { background-color: #262626 !important; border-color: #333333 !important; }
            .text-primary { color: #f3f4f6 !important; }
            .text-secondary { color: #9ca3af !important; }
            .msg-box { background-color: #171717 !important; border-left-color: #2563eb !important; color: #e5e7eb !important; }
            .badge { background-color: #1e3a8a !important; color: #93c5fd !important; }
            .divider { border-top-color: #333333 !important; }
          }
        </style>
      </head>
      <body style="margin: 0; padding: 0; width: 100%; word-break: break-word; -webkit-font-smoothing: antialiased;">
        <!-- Outer Email Wrapper -->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" class="email-bg" style="background-color: #f4f6f8; padding: 20px 10px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
          <tr>
            <td align="center">
              <!-- Main Centered Container -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; width: 100%;">
                <tr>
                  <td class="card-bg" style="background-color: #ffffff; padding: 28px; border-radius: 8px; border: 1px solid #e5e7eb; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
                    
                    <!-- Header Section -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td>
                          <span class="badge" style="display: inline-block; background-color: #eff6ff; color: #1d4ed8; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; padding: 4px 10px; border-radius: 4px; margin-bottom: 8px;">
                            New Contact Inquiry
                          </span>
                          <h2 class="text-primary" style="margin: 0; color: #111827; font-size: 20px; font-weight: 700;">
                            ${payload.serviceType} Inquiry
                          </h2>
                        </td>
                      </tr>
                    </table>

                    <div class="divider" style="border-top: 1px solid #e5e7eb; margin: 18px 0;"></div>

                    <!-- Lead Metadata Table -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="font-size: 14px; line-height: 1.6;">
                      <tr>
                        <td width="35%" class="text-secondary" style="color: #6b7280; padding: 6px 0; font-weight: 600;">Customer Name:</td>
                        <td width="65%" class="text-primary" style="color: #111827; padding: 6px 0; font-weight: 500;">
                          ${payload.firstName} ${payload.lastName}
                        </td>
                      </tr>
                      <tr>
                        <td class="text-secondary" style="color: #6b7280; padding: 6px 0; font-weight: 600;">Phone Number:</td>
                        <td class="text-primary" style="color: #111827; padding: 6px 0; font-weight: 500;">
                          <a href="tel:${payload.phone}" style="color: #2563eb; text-decoration: none;">${payload.phone}</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-secondary" style="color: #6b7280; padding: 6px 0; font-weight: 600;">Email Address:</td>
                        <td class="text-primary" style="color: #111827; padding: 6px 0; font-weight: 500;">
                          <a href="mailto:${payload.email}" style="color: #2563eb; text-decoration: none;">${payload.email}</a>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-secondary" style="color: #6b7280; padding: 6px 0; font-weight: 600;">Service Category:</td>
                        <td class="text-primary" style="color: #111827; padding: 6px 0; font-weight: 500;">${payload.serviceType}</td>
                      </tr>
                      <tr>
                        <td class="text-secondary" style="color: #6b7280; padding: 6px 0; font-weight: 600;">Specific Request:</td>
                        <td class="text-primary" style="color: #111827; padding: 6px 0; font-weight: 500;">${payload.serviceRequested || "General Request"}</td>
                      </tr>
                    </table>

                    <!-- Customer Message Container -->
                    <div style="margin-top: 20px;">
                      <div class="text-secondary" style="color: #6b7280; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                        Customer Message:
                      </div>
                      <div class="msg-box" style="background-color: #f8fafc; border-left: 4px solid #2563eb; border-radius: 4px; padding: 14px 16px; color: #334155; font-size: 14px; line-height: 1.6;">
                        ${payload.message ? payload.message.replace(/\n/g, "<br>") : "<em>No additional details provided.</em>"}
                      </div>
                    </div>

                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
  });

  return savedContact;
};

export const ContactServices = {
  submitContactForm,
};
