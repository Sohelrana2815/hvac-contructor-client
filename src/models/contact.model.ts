import { Schema, model, models, Document } from "mongoose";

export interface IContact extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceType: string;
  serviceRequested: string;
  message: string;
  createdAt: Date;
}

const contactSchema = new Schema<IContact>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    serviceType: { type: String, required: true },
    serviceRequested: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const Contact = models.Contact || model<IContact>("Contact", contactSchema);