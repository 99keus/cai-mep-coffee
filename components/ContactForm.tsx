"use client";
import { useState } from "react";
import { useQueryParams } from "@/lib/useQueryParams";
import { Download } from "lucide-react";
import { QuoteButtonContent } from "@/components/QuoteButton";
import { products } from "@/data/products";
import { company } from "@/data/company";
export function ContactForm({ variant = "page" }: { variant?: "page" | "inline" }) {
  const params = useQueryParams();
  const selected = products.some((p) => p.slug === params.get("product"))
    ? params.get("product")!
    : "";
  const [busy, setBusy] = useState(false);
  const [status, setStatus] = useState("");
  const [draft, setDraft] = useState("");
  async function submit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setBusy(true);
    setStatus("");
    setDraft("");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const product =
      products.find((p) => p.slug === data.product)?.name || "Please advise";
    const contactDetails = variant === "inline"
      ? `Email: ${data.email}\nPhone: ${data.phone || "Not provided"}`
      : `Company: ${data.company || "Not provided"}\nEmail: ${data.email}\nCountry: ${data.country || "Not provided"}`;
    const text = `COFFEE QUOTATION REQUEST\n\nName: ${data.name}\n${contactDetails}\nProduct of Interest: ${product}\nRequired Quantity: ${data.quantity || "Please advise"}\n\nMessage:\n${data.message}`;
    try {
      if (company.inquiryEndpoint) {
        const response = await fetch(company.inquiryEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, product }),
        });
        if (!response.ok)
          throw new Error(
            "The inquiry could not be submitted. Please try again or download your request.",
          );
        setStatus("Your quotation request has been submitted.");
      } else if (company.email) {
        window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Coffee quotation: ${product}`)}&body=${encodeURIComponent(text)}`;
        setDraft(text);
        setStatus(
          "Your email app has been opened with your quotation request. Please send the email to complete your inquiry.",
        );
      } else {
        setDraft(text);
        setStatus(
          "Your inquiry is ready to download. It has not been sent: company contact details are awaiting confirmation.",
        );
      }
    } catch {
      setDraft(text);
      setStatus(
        "We could not submit your inquiry. Your details are preserved below; download the request and try again later.",
      );
    } finally {
      setBusy(false);
    }
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([draft], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = "coffee-quotation-request.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
  }
  return (
    <form className={`contact-form${variant === "inline" ? " contact-form-inline" : ""}`} onSubmit={submit}>
      {variant === "inline" ? <h3>Request a quote.</h3> : <h1>Tell us about your next coffee.</h1>}
      <p className="form-intro">Fields marked * are required.</p>
      <div className="form-grid">
        <label className={variant === "inline" ? "full-width" : undefined}>
          Name *
          <input
            name="name"
            autoComplete="name"
            required
            maxLength={120}
            placeholder="Your full name"
          />
        </label>
        {variant === "page" && <label>
          Company
          <input
            name="company"
            autoComplete="organization"
            maxLength={160}
            placeholder="Company name"
          />
        </label>}
        <label>
          Email *
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={180}
            placeholder="you@company.com"
          />
        </label>
        <label>
          {variant === "inline" ? "Phone" : "Country"}
          <input
            name={variant === "inline" ? "phone" : "country"}
            type={variant === "inline" ? "tel" : "text"}
            autoComplete={variant === "inline" ? "tel" : "country-name"}
            maxLength={100}
            placeholder={variant === "inline" ? "Your phone number" : "Country / destination"}
          />
        </label>
        <label>
          Product of Interest *
          <select name="product" required defaultValue={selected} key={selected}>
            <option value="" disabled>Select a product</option>
            <option value="please-advise">Please advise / multiple products</option>
            {products.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Required Quantity
          <input
            name="quantity"
            maxLength={100}
            placeholder="e.g. 20 metric tonnes"
          />
        </label>
        <label className="full-width">
          Message *
          <textarea
            name="message"
            required
            rows={variant === "inline" ? 3 : 5}
            maxLength={6000}
            placeholder={variant === "inline" ? "Tell us about your coffee needs." : "Tell us your grade, screen size, processing method, packing requirements and preferred shipment timing."}
          />
        </label>
      </div>
      {!company.inquiryEndpoint && !company.email && (
        <p className="form-notice">
          Inquiry delivery is not connected yet. You can prepare and download
          your request here; no message will be sent.
        </p>
      )}
      <button type="submit" className="button quote-button" disabled={busy}>
        <QuoteButtonContent label={busy ? "Preparing…" : "Send to us"} />
      </button>
      <div aria-live="polite" role="status">
        {status && (
          <div className="form-status">
            <p>{status}</p>
            {draft && (
              <>
                <button
                  type="button"
                  className="button outline"
                  onClick={download}
                >
                  <Download size={17} /> Download inquiry
                </button>
                <details>
                  <summary>Review your inquiry</summary>
                  <pre>{draft}</pre>
                </details>
              </>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
