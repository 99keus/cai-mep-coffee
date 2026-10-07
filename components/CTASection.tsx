import { ContactForm } from "@/components/ContactForm";
import { company } from "@/data/company";

export function CTASection() {
  return (
    <section className="cta-section" id="request-a-quote" aria-labelledby="cta-title">
      <div className="cta-heading">
        <div className="container">
          <h3 id="cta-title">Your next coffee starts here.</h3>
        </div>
      </div>
      <div className="container cta-body">
        <p className="cta-intro">Green, roasted or ground. Tell us what you need, and we’ll help you find the right coffee.</p>
        <div className="cta-inner">
          <div className="cta-contact">
            <h3>Contact.</h3>
            <div className="cta-contact-links">
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <a href={company.whatsappHref}>WhatsApp {company.whatsapp}</a>
            </div>
          </div>
          <ContactForm variant="inline" />
        </div>
      </div>
    </section>
  );
}
