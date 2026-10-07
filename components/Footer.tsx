import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";
import { company } from "@/data/company";
export function Footer() {
  return <footer className="footer">
    <div className="container footer-grid">
      <div>
        <Link href="/" className="brand" aria-label={`${company.name} home`}><BrandLogo /></Link>
        <small className="company-legal-name">{company.legalName}</small>
      </div>
      <div><h3>Explore</h3><Link href="/products">Products</Link><Link href="/about">About</Link><Link href="/coffee-origins">Origin</Link></div>
      <div><h3>Our coffee</h3>{["Green Coffee Beans", "Roasted Coffee Beans", "Ground Coffee"].map(c => <Link href={`/products?category=${encodeURIComponent(c)}`} key={c}>{c}</Link>)}</div>
      <div><h3>Let’s talk coffee</h3><a href={`mailto:${company.email}`}>{company.email}</a><a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp: {company.whatsapp}</a><p>{company.address}</p></div>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} {company.name}</span><span>Rooted in Vietnam. Shared with the world.</span></div>
  </footer>;
}
