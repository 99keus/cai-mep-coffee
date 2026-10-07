"use client";

import Image from "next/image";
import Link from "next/link";
import { QuoteButton } from "@/components/QuoteButton";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";

const coffees = [
  { name: "Green Coffee Beans", image: "/images/company/hero-green-coffee-sack.png", description: "Robusta, Arabica & Excelsa" },
  { name: "Roasted Coffee Beans", image: "/images/company/hero-roasted-coffee-sack.png", description: "Whole beans. Share your roast requirements." },
  { name: "Ground Coffee", image: "/images/company/hero-ground-coffee-pack.png", description: "Coffee prepared for your brewing needs." },
];
const coffeeIndex = (index: number) => ((index % coffees.length) + coffees.length) % coffees.length;
// Keep spare copies beyond both edges so recycling never happens in view.
const loopCopies = 5;
const centerCopy = Math.floor(loopCopies / 2);
const showcaseCoffees = Array.from({ length: coffees.length * loopCopies }, (_, slot) => ({
  coffee: coffees[coffeeIndex(slot)],
  index: coffeeIndex(slot),
  slot: slot - centerCopy * coffees.length,
}));

export function HeroShowcase() {
  const [selected, setSelected] = useState(0);
  const selectedIndex = useRef(0);
  const stage = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const selectCoffee = useRef<((index: number) => void) | null>(null);

  useEffect(() => {
    const root = stage.current;
    const list = track.current;
    if (!root || !list) return;
    gsap.registerPlugin(Draggable, InertiaPlugin);
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const items = Array.from(list.querySelectorAll<HTMLButtonElement>(".showcase-coffee"));
    let spacing = items[0].offsetWidth * 1.1;
    let pressSlot = 0;
    let draggable: Draggable;

    function render() {
      const x = Number(gsap.getProperty(list, "x"));
      const halfLoop = spacing * items.length / 2;
      const wrap = gsap.utils.wrap(-halfLoop, halfLoop);
      items.forEach((item, index) => {
        const position = wrap(showcaseCoffees[index].slot * spacing + x);
        const distance = Math.abs(position / spacing);
        const emphasis = Math.min(distance, 1);
        gsap.set(item, {
          x: position - x, xPercent: -50, yPercent: -50,
          scale: 1 - emphasis * 0.3,
          autoAlpha: 1 - emphasis * 0.5,
          zIndex: distance < 0.5 ? 2 : 1,
        });
        // Expose one copy of each coffee; spare copies remain pointer-clickable.
        item.setAttribute("aria-hidden", String(distance >= 1.5));
        item.tabIndex = distance < 0.5 ? 0 : -1;
      });
      const index = coffeeIndex(Math.round(-x / spacing));
      if (index !== selectedIndex.current) {
        selectedIndex.current = index;
        setSelected(index);
      }
    }

    function settle() {
      // Keep the continuous track coordinate across the last/first boundary.
      render();
      draggable.update();
    }

    const context = gsap.context(() => {
      gsap.set(list, { x: 0 });
      render();
      [draggable] = Draggable.create(list, {
        type: "x",
        trigger: root,
        dragClickables: true,
        allowNativeTouchScrolling: true,
        minimumMovement: 6,
        cursor: "grab",
        activeCursor: "grabbing",
        inertia: !preference.matches,
        throwResistance: 2200,
        minDuration: 0.25,
        maxDuration: 0.65,
        overshootTolerance: 0,
        edgeResistance: 0.9,
        bounds: { minX: -spacing, maxX: spacing },
        snap(value: number) {
          const slot = gsap.utils.clamp(pressSlot - 1, pressSlot + 1, Math.round(-value / spacing));
          return -slot * spacing;
        },
        onPress() {
          gsap.killTweensOf(list);
          pressSlot = Math.round(-this.x / spacing);
          this.applyBounds({ minX: -(pressSlot + 1) * spacing, maxX: -(pressSlot - 1) * spacing });
          root.dataset.holding = "true";
        },
        onDrag: render,
        onRelease() { root.dataset.holding = "false"; },
        onDragEnd() {
          if (preference.matches) {
            gsap.set(list, { x: -Math.round(-this.x / spacing) * spacing });
            render();
            settle();
          }
        },
        onThrowUpdate: render,
        onThrowComplete: settle,
      });
    }, root);

    selectCoffee.current = index => {
      draggable.tween?.kill();
      gsap.killTweensOf(list);
      const x = Number(gsap.getProperty(list, "x"));
      const nearestSlot = Math.round(-x / spacing);
      const nearestIndex = coffeeIndex(nearestSlot);
      const difference = coffeeIndex(index - nearestIndex + 1) - 1;
      gsap.to(list, {
        x: -(nearestSlot + difference) * spacing,
        duration: preference.matches ? 0 : 0.5,
        ease: "power3.out",
        onUpdate: render,
        onComplete: settle,
      });
    };

    const resize = () => {
      draggable.disable();
      draggable.tween?.kill();
      gsap.killTweensOf(list);
      root.dataset.holding = "false";
      spacing = items[0].offsetWidth * 1.1;
      draggable.vars.inertia = !preference.matches;
      gsap.set(list, { x: -selectedIndex.current * spacing });
      render();
      const x = Number(gsap.getProperty(list, "x"));
      draggable.applyBounds({ minX: x - spacing, maxX: x + spacing });
      draggable.update();
      draggable.enable();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(root);
    preference.addEventListener("change", resize);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", resize);
      selectCoffee.current = null;
      draggable.tween?.kill();
      draggable.kill();
      gsap.killTweensOf([list, ...items]);
      context.revert();
      root.removeAttribute("data-holding");
    };
  }, []);

  const active = coffees[selected];
  return <div className="hero-showcase">
    <div className="showcase-stage" ref={stage} role="group" aria-roledescription="carousel" aria-label="Coffee categories" tabIndex={0}
      onKeyDown={event => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
        event.preventDefault();
        selectCoffee.current?.(coffeeIndex(selectedIndex.current + (event.key === "ArrowRight" ? 1 : -1)));
      }}>
      <div className="showcase-track" ref={track}>
        {showcaseCoffees.map(({ coffee, index, slot }) => {
          const offset = coffeeIndex(index - selected);
          const position = offset === 0 ? "center" : offset === 1 ? "right" : "left";
          return <button key={slot} type="button" className="showcase-coffee" data-position={position} data-loop-copy={slot < 0 || slot >= coffees.length} data-coffee-index={index} aria-hidden={slot < 0 || slot >= coffees.length} tabIndex={slot === 0 ? 0 : -1} aria-label={`Select ${coffee.name}`} aria-pressed={selected === index}
            onClick={() => selectCoffee.current?.(index)}>
            <Image src={coffee.image} alt={coffee.name} width={600} height={600} preload sizes="(max-width:760px) 75vw, 420px" draggable={false} />
            <span>{coffee.name}</span>
          </button>;
        })}
      </div>
    </div>
    <div className="showcase-bottom">
      <div className="showcase-selectors" role="group" aria-label="Choose coffee type">
        {coffees.map((coffee, index) => <button type="button" key={coffee.name} aria-label={`Show ${coffee.name}`} aria-pressed={selected === index} onClick={() => selectCoffee.current?.(index)}>
          <Image src={coffee.image} alt="" width={64} height={64} sizes="64px" />
        </button>)}
      </div>
      <div className="button-row">
        <Link className="button cream" href={`/products?category=${encodeURIComponent(active.name)}`}>Explore</Link>
        <QuoteButton href="/contact" />
      </div>
      <p className="showcase-description" aria-live="polite"><strong>{active.name}</strong><span>{active.description}</span></p>
    </div>
  </div>;
}
