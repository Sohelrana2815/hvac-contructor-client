import { z } from "zod";

const envSchema = z.object({
  PORT: z.coerce.number().default(3000), // Hex/String from process.env coerced to Number
  DATABASE_URL: z.url("DATABASE_URL must be a valid connection string"), // Added .string() before .url() to fix Zod syntax
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  SMTP_HOST: z.string().min(1, "SMTP Host is required"),
  SMTP_PORT: z.coerce.number().default(465),
  SMTP_USER: z.string().min(1, "SMTP User is required"),
  SMTP_PASS: z.string().min(1, "SMTP Pass is required"),
  ADMIN_EMAIL: z.string().min(1, "Admin email is required"),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
  console.error("❌ Invalid environment variables:", _env.error.message);
  throw new Error("Invalid environment variables");
}

export const envVars = _env.data;
