"use client"

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { showcaseItem } from "../lib/data";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
  const leftShowcase = useRef<HTMLDivElement>(null);
  const rightShowcase = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !leftShowcase.current || !rightShowcase.current) return;

    const leftEl = leftShowcase.current;
    const rightEl = rightShowcase.current;

    gsap.fromTo(
      leftEl,
      { x: 700 },
      {
        x: 0,
        ease: "power1.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: leftEl,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        //   markers: true,
        },
      }
    );

    gsap.fromTo(
      rightEl,
      { x: -700 },
      {
        x: 0,
        ease: "power1.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: rightEl,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        //   markers: true,
        },
      }
    );
  }, [mounted]);

  return (
    <div className="section section-showcase overflow-hidden">
      <div className="flex flex-col gap-3">
        <div ref={leftShowcase} className="flex gap-3 left justify-end">
          {showcaseItem.map((img, index) => (
            <div key={index} className="showcase-wrapper">
              <div className="showcase-ratio rounded md:rounded-lg lg:rounded-2xl">
                <Image
                  className="showcase-image"
                  src={img}
                  alt={`img-${index}`}
                />
              </div>
            </div>
          ))}
        </div>
        <div ref={rightShowcase} className="flex gap-3 right justify-start">
          {showcaseItem.map((img, index) => (
            <div key={index} className="showcase-wrapper">
              <div className="showcase-ratio rounded md:rounded-lg lg:rounded-2xl">
                <Image
                  className="showcase-image"
                  src={img}
                  alt={`img-${index}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
