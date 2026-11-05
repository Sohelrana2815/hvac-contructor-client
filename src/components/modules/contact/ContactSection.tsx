import ContactProcessInfo from "./ContactProcessInfo";
import ContactForm from "./contact-form";

export default function ContactSection() {
  return (
    <section className="py-20 lg:py-30 bg-background">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Information Steps (Takes up 5 cols) */}
          <div className="lg:col-span-5">
            <ContactProcessInfo />
          </div>

          {/* Right Column: Your Existing Form (Takes up 7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>
    </section>
  );
}