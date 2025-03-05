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

  return (
    <section ref={sectionRef} className="section section-trend-blogs">
      <div className="container carousel-sticky">
        <div className="mb-1">
          <p className="ml-0 lg:ml-[3vw] mb-1 lg:mb-5 md:mb-3">
            Trending Blogs
          </p>
          <div className="stripe dark:bg-white bg-gray-800"></div>
        </div>
        <div className="mt-10">
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