"use client";
import { useRef, useState, type ReactNode, type KeyboardEvent } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
const sections = ["Overview", "Specifications"] as const;
export function ProductDetailTabs({ overview, specifications, slug }: { overview: ReactNode; specifications: ReactNode; slug: string }) {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  function onKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const next = event.key === "ArrowRight" ? (index + 1) % 2 : event.key === "ArrowLeft" ? (index + 1) % 2 : event.key === "Home" ? 0 : event.key === "End" ? 1 : null;
    if (next === null) return;
    event.preventDefault(); setActive(next); buttons.current[next]?.focus();
  }
  return <div className="product-detail-panel">
    <div className="panel-controls"><p>Discover the coffee. Explore the details.</p><div>
      <button type="button" className="round-control" aria-label="Previous section" disabled={active === 0} onClick={() => setActive(0)}><ArrowLeft size={19}/></button>
      <button type="button" className="round-control" aria-label="Next section" disabled={active === 1} onClick={() => setActive(1)}><ArrowRight size={19}/></button>
    </div></div>
    <div className="product-tabs" role="tablist" aria-label="Product information">{sections.map((label, i) => <button key={label} ref={el => { buttons.current[i] = el; }} type="button" role="tab" id={`product-tab-${i}`} aria-controls={`product-panel-${i}`} aria-selected={active === i} tabIndex={active === i ? 0 : -1} onKeyDown={e => onKey(e, i)} onClick={() => setActive(i)}>{label}</button>)}</div>
    <div className="product-panel-body" onTouchStart={e => { touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }} onTouchEnd={e => {
      const start = touchStart.current; touchStart.current = null;
      if (!start) return;
      const dx = e.changedTouches[0].clientX - start.x, dy = e.changedTouches[0].clientY - start.y;
      if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.5) setActive(dx < 0 ? 1 : 0);
    }}>
      <section id="product-panel-0" role="tabpanel" aria-labelledby="product-tab-0" tabIndex={0} hidden={active !== 0}>{overview}</section>
      <section id="product-panel-1" role="tabpanel" aria-labelledby="product-tab-1" tabIndex={0} hidden={active !== 1}>{specifications}</section>
    </div>
    <div className="product-detail-actions"><Link className="button" href={`/contact?product=${slug}`}>Request a Quote <ArrowUpRight size={18}/></Link><Link className="button outline" href="/contact">Contact Us</Link></div>
  </div>;
}
