"use client";
import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { company } from "@/data/company";
import { origins } from "@/data/origins";
const productLinks = [
  { label: "All products", href: "/products" },
  { label: "Green Coffee Beans", href: "/products?category=Green%20Coffee%20Beans" },
  { label: "Robusta", href: "/products?category=Green%20Coffee%20Beans&species=Robusta", sub: true },
  { label: "Arabica", href: "/products?category=Green%20Coffee%20Beans&species=Arabica", sub: true },
  { label: "Excelsa", href: "/products?category=Green%20Coffee%20Beans&species=Excelsa", sub: true },
  { label: "Roasted Coffee Beans", href: "/products?category=Roasted%20Coffee%20Beans" },
  { label: "Ground Coffee", href: "/products?category=Ground%20Coffee" },
];
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/products", label: "Products", children: productLinks },
  { href: "/coffee-origins", label: "Coffee origins", children: [
    { label: "Explore all origins", href: "/coffee-origins" },
    ...origins.map(o => ({ label: o.name, href: `/coffee-origins#${o.slug}` })),
  ] },
  { href: "/contact", label: "Contact" },
];
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const header = useRef<HTMLElement>(null);
  function close() { setOpen(false); setExpanded(null); }
  useEffect(() => {
    function outside(e: PointerEvent) {
      if (!header.current?.contains(e.target as Node)) { setOpen(false); setExpanded(null); }
    }
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, []);
  function navigation(mode: "desktop" | "mobile") {
    return links.map(item => {
      const id = `${mode}-${item.label.replaceAll(" ", "-").toLowerCase()}`;
      const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
      return <div className="nav-item" key={item.href}
        onMouseEnter={() => { if (mode === "desktop") setExpanded(item.children ? id : null); }}
        onMouseLeave={() => { if (mode === "desktop") setExpanded(current => current === id ? null : current); }}
        onBlur={e => {
        if (!e.currentTarget.contains(e.relatedTarget)) setExpanded(current => current === id ? null : current);
      }} onKeyDown={e => {
        if (e.key === "Escape") {
          setExpanded(null);
          e.currentTarget.querySelector<HTMLAnchorElement>(".nav-item-heading a")?.focus();
          e.stopPropagation();
        }
      }}>
        <div className="nav-item-heading">
          <Link href={item.href} className={item.children ? "nav-label" : undefined}
            aria-current={active ? "page" : undefined}
            aria-expanded={item.children ? mode === "mobile" || expanded === id : undefined}
            aria-controls={item.children ? `${id}-links` : undefined}
            onKeyDown={e => {
              if (item.children && e.key === "ArrowDown") {
                e.preventDefault();
                setExpanded(id);
              }
            }}
            onClick={close}>{item.label}</Link>
        </div>
        {item.children && (mode === "mobile" || expanded === id) && <div className="nav-dropdown" id={`${id}-links`}>
          {item.children.map(child => <Link key={child.href} href={child.href} className={"sub" in child && child.sub ? "nav-sub-link" : undefined} onClick={close}>{child.label}</Link>)}
        </div>}
      </div>;
    });
  }
  return <header className="site-header" ref={header} onKeyDown={e => {
    if (e.key === "Escape") { close(); header.current?.querySelector<HTMLButtonElement>(".menu-toggle")?.focus(); }
  }}>
    <div className="container header-inner">
      <Link className="brand" href="/" aria-label={`${company.name} home`} onClick={close}>
        <BrandLogo priority />
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation("desktop")}</nav>
      <Link className="button header-quote" href="/contact" onClick={close}>Request a Quote <ArrowUpRight size={17} /></Link>
      <button className="menu-toggle" onClick={() => { setOpen(!open); setExpanded(null); }} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{navigation("mobile")}<Link href="/contact" onClick={close}>Request a Quote ↗</Link></nav>}
  </header>;
}
