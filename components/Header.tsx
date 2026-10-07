"use client";
import { BrandLogo } from "@/components/BrandLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { QuoteButton } from "@/components/QuoteButton";
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
  { href: "/about", label: "About" },
  { href: "/products", label: "Products", children: productLinks },
  { href: "/coffee-origins", label: "Origin", children: [
    { label: "Explore all origins", href: "/coffee-origins" },
    ...origins.map(o => ({ label: o.name, href: `/coffee-origins#${o.slug}` })),
  ] },
];
export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0, top: 0 });
  const header = useRef<HTMLElement>(null);
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  const attachHeader = useCallback((element: HTMLElement | null) => {
    header.current = element;
    setPortalTarget(element);
  }, []);
  function close() { setOpen(false); setExpanded(null); }
  useEffect(() => {
    function outside(e: PointerEvent) {
      if (!header.current?.contains(e.target as Node)) { setOpen(false); setExpanded(null); }
    }
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, []);
  useEffect(() => {
    const element = header.current;
    if (!element) return;
    let frame = 0;
    function update() {
      frame = 0;
      if (!element) return;
      const current = Math.max(0, window.scrollY);
      const firstSection = pathname === "/" ? document.querySelector<HTMLElement>(".hero-transition") : null;
      const threshold = firstSection ? firstSection.getBoundingClientRect().bottom + current : 24;
      element.dataset.scrolled = String(current >= threshold);
    }
    function onScroll() {
      setExpanded(null);
      if (!frame) frame = requestAnimationFrame(update);
    }
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  function navigation(mode: "desktop" | "mobile") {
    return links.map(item => {
      const id = `${mode}-${item.label.replaceAll(" ", "-").toLowerCase()}`;
      const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
      function expand(element: HTMLElement) {
        const bounds = element.getBoundingClientRect();
        setDropdownPosition({ left: bounds.left - 20, top: bounds.bottom });
        setExpanded(item.children ? id : null);
      }
      const dropdown = item.children && (mode === "mobile" || expanded === id) && <div
        className={`nav-dropdown${mode === "desktop" ? " desktop-nav-dropdown" : ""}`} id={`${id}-links`}
        style={mode === "desktop" ? { left: dropdownPosition.left, top: dropdownPosition.top } : undefined}
        onMouseEnter={() => { if (mode === "desktop") setExpanded(id); }}
        onMouseLeave={() => { if (mode === "desktop") setExpanded(null); }}
        onBlur={e => {
          if (!e.currentTarget.contains(e.relatedTarget)) setExpanded(null);
        }}
        onKeyDown={e => {
          if (e.key === "Escape") {
            setExpanded(null);
            header.current?.querySelector<HTMLAnchorElement>(`[aria-controls="${id}-links"]`)?.focus();
            e.stopPropagation();
          }
        }}>
        {item.children?.map(child => <Link key={child.href} href={child.href} className={"sub" in child && child.sub ? "nav-sub-link" : undefined} onClick={close}>{child.label}</Link>)}
      </div>;
      return <div className="nav-item" key={item.href}
        onMouseEnter={e => { if (mode === "desktop") expand(e.currentTarget); }}
        onMouseLeave={e => {
          if (mode === "desktop" && !(e.relatedTarget instanceof Node && header.current?.querySelector(`#${id}-links`)?.contains(e.relatedTarget))) {
            setExpanded(current => current === id ? null : current);
          }
        }}
        onBlur={e => {
        if (!e.currentTarget.contains(e.relatedTarget) && !header.current?.querySelector(`#${id}-links`)?.contains(e.relatedTarget)) setExpanded(current => current === id ? null : current);
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
                expand(e.currentTarget.closest<HTMLElement>(".nav-item")!);
                requestAnimationFrame(() => header.current?.querySelector<HTMLAnchorElement>(`#${id}-links a`)?.focus());
              }
            }}
            onClick={close}>{item.label}</Link>
        </div>
        {mode === "desktop" ? dropdown && portalTarget && createPortal(dropdown, portalTarget) : dropdown}
      </div>;
    });
  }
  return <header className={`site-header${pathname === "/" ? " header-home" : ""}${open || expanded ? " header-open" : ""}`} ref={attachHeader} onKeyDown={e => {
    if (e.key === "Escape") { close(); header.current?.querySelector<HTMLButtonElement>(".menu-toggle")?.focus(); }
  }}>
    <div className="container header-inner header-blend-layer">
      <Link className="brand" href="/" aria-label={`${company.name} home`} onClick={close}>
        <BrandLogo priority animated />
      </Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navigation("desktop")}</nav>
      <button className="menu-toggle" onClick={() => { setOpen(!open); setExpanded(null); }} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
    </div>
    <div className="container header-inner header-action-layer">
      <span className="brand header-action-spacer" aria-hidden="true">
        <span className="brand-lockup"><span className="brand-mark-piece" /><span className="brand-words-mask" /></span>
      </span>
      <QuoteButton className="header-quote" href="/contact" onClick={close} />
    </div>
    {open && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{navigation("mobile")}<QuoteButton href="/contact" onClick={close} /></nav>}
  </header>;
}
