import Link from "next/link";
import { Send } from "lucide-react";
import type { ComponentProps } from "react";

export function QuoteButtonContent({ label = "Request a Quote" }: { label?: string }) {
  return <>
    <span className="quote-button-label">{label}</span>
    <span className="quote-button-icon" aria-hidden="true"><Send size={21} strokeWidth={1.6} /></span>
  </>;
}

export function QuoteButton({ className = "", ...props }: Omit<ComponentProps<typeof Link>, "children">) {
  return <Link {...props} className={`button quote-button ${className}`}><QuoteButtonContent /></Link>;
}
