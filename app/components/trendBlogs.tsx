"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import SanVicente from "@/app/img/San-Vicente.jpg";

const TrendBlogs = () => {
  const slidesContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!slidesContainerRef.current) return;
    
    const slidesContainer = slidesContainerRef.current;
    const slides = Array.from(slidesContainer.querySelectorAll<HTMLDivElement>('.slide'));
    
    if (slides.length === 0) return;
    
    const totalWidth = slides.length * (slides[0].offsetWidth + 20) - window.innerWidth;
    
    // Set the first slide in the middle initially
    gsap.set(slidesContainer, {
      x: (window.innerWidth / 2) - (slides[0].offsetWidth / 2)
    });
    
    // Create the horizontal scroll animation
    gsap.to(slidesContainer, {
      x: -totalWidth + (window.innerWidth / 2) - (slides[0].offsetWidth / 2),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: ".carousel-sticky",
        anticipatePin: 1,
        invalidateOnRefresh: true,
      }
    });
    
    // Update the center slide based on scroll position
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        const progress = self.progress;
        const slideIndex = Math.round(progress * (slides.length - 1));
        
        // Remove active class from all slides
        slides.forEach((slide: HTMLDivElement) => slide.classList.remove('active'));
        
        // Add active class to the center slide
        if (slides[slideIndex]) {
          slides[slideIndex].classList.add('active');
        }
      }
    });
    
    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="section section-trend-blogs">
      <div className="container carousel-sticky">
        <div className="mb-1">
          <p className="ml-0 lg:ml-[3vw] mb-1 lg:mb-5 md:mb-3">
            Trending Blogs
          </p>
          <div className="stripe dark:bg-white bg-gray-800"></div>
        </div>
        <div className="mt-10 overflow-hidden">
          <div 
            ref={slidesContainerRef} 
            className="slides h-[70vh] flex justify-start items-center gap-5"
          >
            <div className="slide h-full w-96 flex flex-shrink-0 transition-all duration-300">
              <Image
                className="object-cover"
                src={SanVicente}
                width={0}
                height={0}
                alt="San Vicente"
              />
            </div>
            <div className="slide h-full w-96 flex flex-shrink-0 transition-all duration-300">
              <Image
                className="object-cover"
                src={SanVicente}
                width={0}
                height={0}
                alt="San Vicente"
              />
            </div>
            <div className="slide h-full w-96 flex flex-shrink-0 transition-all duration-300">
              <Image
                className="object-cover"
                src={SanVicente}
                width={0}
                height={0}
                alt="San Vicente"
              />
            </div>
            <div className="slide h-full w-96 flex flex-shrink-0 transition-all duration-300">
              <Image
                className="object-cover"
                src={SanVicente}
                width={0}
                height={0}
                alt="San Vicente"
              />
            </div>
            <div className="slide h-full w-96 flex flex-shrink-0 transition-all duration-300">
              <Image
                className="object-cover"
                src={SanVicente}
                width={0}
                height={0}
                alt="San Vicente"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendBlogs;