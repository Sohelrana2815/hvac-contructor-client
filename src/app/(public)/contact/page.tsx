import ContactForm from "@/components/modules/contact/contact-form";

export default function ContactPage() {
  return (
    <main className="min-h-screen py-12 px-4 bg-gray-50">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900">Contact Our HVAC Team</h1>
        <p className="text-gray-600 mt-2">We are available 24/7 for emergency repairs and consultations.</p>
      </div>
      
      <ContactForm />
    </main>
  );
}