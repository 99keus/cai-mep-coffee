import type { Metadata } from "next";
import { Suspense } from "react";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description: "Request a quotation for Vietnamese coffee. Tell us about your next coffee and the products you are interested in.",
};

export default function Contact() {
  return (
    <section className="container contact-simple">
      <Suspense fallback={<p>Loading inquiry form…</p>}>
        <ContactForm />
      </Suspense>
    </section>
  );
}
