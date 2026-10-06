"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type PointerEvent } from "react";

const coffees = [
  { name: "Green Coffee Beans", image: "/images/company/hero-green-coffee-sack.png", description: "Robusta, Arabica & Excelsa" },
  { name: "Roasted Coffee Beans", image: "/images/company/hero-roasted-coffee-sack.png", description: "Whole beans. Share your roast requirements." },
  { name: "Ground Coffee", image: "/images/company/hero-ground-coffee-pack.png", description: "Coffee prepared for your brewing needs." },
];

export function HeroShowcase() {
  const [selected, setSelected] = useState(0);
  const gesture = useRef<{ id: number; x: number; y: number } | null>(null);
  const dragged = useRef(false);
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  function endDrag(event: PointerEvent<HTMLDivElement>, cancelled = false) {
    const start = gesture.current;
    if (!start || start.id !== event.pointerId) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    // Resolve direction before clearing the gesture; state updates may run later.
    if (!cancelled && Math.abs(dx) >= 45 && Math.abs(dx) > Math.abs(dy)) {
      const step = dx < 0 ? 1 : -1;
      setSelected(current => (current + step + coffees.length) % coffees.length);
      dragged.current = true;
    }
    gesture.current = null;
    setDragX(0);
    setIsDragging(false);
  }
  const active = coffees[selected];
  return <div className="hero-showcase">
    <div className="showcase-stage" aria-label="Coffee categories"
      onPointerDown={event => {
        if (!event.isPrimary || event.button !== 0) return;
        gesture.current = { id: event.pointerId, x: event.clientX, y: event.clientY };
        dragged.current = false;
        const target = (event.target as HTMLElement).closest("button") || event.currentTarget;
        target.setPointerCapture(event.pointerId);
      }}
      onPointerMove={event => {
        const start = gesture.current;
        if (!start || start.id !== event.pointerId) return;
        const dx = event.clientX - start.x;
        const dy = event.clientY - start.y;
        if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
          dragged.current = true;
          setIsDragging(true);
          setDragX(Math.max(-160, Math.min(160, dx)));
        }
      }}
      onPointerUp={event => endDrag(event)}
      onPointerCancel={event => endDrag(event, true)}
      onLostPointerCapture={event => endDrag(event, true)}
      onClickCapture={event => {
        if (dragged.current && event.detail !== 0) {
          event.preventDefault();
          event.stopPropagation();
          dragged.current = false;
        }
      }}>
      <div className="showcase-track" data-dragging={isDragging} style={{ transform: `translateX(${dragX}px)` }}>
      {coffees.map((coffee, index) => {
        const offset = (index - selected + 3) % 3;
        const position = offset === 0 ? "center" : offset === 1 ? "right" : "left";
        return <button key={coffee.name} type="button" className="showcase-coffee" data-position={position} aria-label={`Select ${coffee.name}`} aria-pressed={selected === index} onClick={() => setSelected(index)}>
          <Image src={coffee.image} alt={coffee.name} width={600} height={600} preload sizes="(max-width:760px) 75vw, 420px" draggable={false} />
          <span>{coffee.name}</span>
        </button>;
      })}
      </div>
    </div>
    <div className="showcase-bottom">
      <div className="showcase-selectors" role="group" aria-label="Choose coffee type">
        {coffees.map((coffee, index) => <button type="button" key={coffee.name} aria-label={`Show ${coffee.name}`} aria-pressed={selected === index} onClick={() => setSelected(index)}>
          <Image src={coffee.image} alt="" width={64} height={64} sizes="64px" />
        </button>)}
      </div>
      <div className="button-row">
        <Link className="button cream" href={`/products?category=${encodeURIComponent(active.name)}`}>Explore</Link>
        <Link className="button hero-quote" href="/contact">Request a Quote</Link>
      </div>
      <p className="showcase-description" aria-live="polite"><strong>{active.name}</strong><span>{active.description}</span></p>
    </div>
  </div>;
}
