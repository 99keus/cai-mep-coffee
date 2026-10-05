import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export function CTASection() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow light">FROM OUR ORIGIN TO YOUR NEXT CHAPTER</p>
          <h2>Let’s bring Vietnamese coffee to your world.</h2>
          <p>
            A signature roast, a new blend, a coffee worth sharing. Tell us what you have in mind, along with your required grade, screen size, process and quantity. We’ll help you take the next step with a tailored quotation.
          </p>
        </div>
        <Link className="button cream" href="/contact">
          Request a Quote <ArrowUpRight size={19} />
        </Link>
      </div>
    </section>
  );
}
