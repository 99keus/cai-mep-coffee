"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
export function ProductGallery({ image, gallery, name, alt }: { image: string; gallery: string[]; name: string; alt?: string }) {
  const images = [...new Set([image, ...gallery])];
  const [selected, setSelected] = useState(0);
  const start = useRef<{x:number;y:number}|null>(null);
  function move(by: number) { setSelected(i => (i + by + images.length) % images.length); }
  return <div className="product-gallery" aria-label={`${name} photographs`}>
    <div className="product-photo" onTouchStart={e => {start.current={x:e.touches[0].clientX,y:e.touches[0].clientY};}} onTouchEnd={e=>{const s=start.current;start.current=null;if(!s)return;const dx=e.changedTouches[0].clientX-s.x,dy=e.changedTouches[0].clientY-s.y;if(Math.abs(dx)>65&&Math.abs(dx)>Math.abs(dy)*1.5)move(dx<0?1:-1);}}>
      <Image src={images[selected]} alt={selected === 0 ? alt || name : `${name} — view ${selected + 1}`} fill priority sizes="(max-width: 900px) 92vw, 46vw"/>
      {images.length > 1 && <><button type="button" className="photo-control previous" aria-label="Previous product image" onClick={() => move(-1)}><ChevronLeft/></button><button type="button" className="photo-control next" aria-label="Next product image" onClick={() => move(1)}><ChevronRight/></button></>}
      <span className="photo-counter" aria-live="polite">{String(selected+1).padStart(2,"0")} / {String(images.length).padStart(2,"0")}</span>
    </div>
    <div className="product-thumbnails">{images.map((src,i)=><button type="button" key={src} aria-label={`Show product image ${i+1}`} aria-pressed={selected===i} onClick={()=>setSelected(i)}><Image src={src} alt="" fill sizes="100px"/></button>)}</div>
  </div>;
}
