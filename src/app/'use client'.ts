'use client'

import SanVicente from "@/app/img/San-Vicente.jpg";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TrendBlogs = () => {
  const slidesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!slidesRef.current) return;

    const slides = slidesRef.current;
    const slideItems = Array.from(slides.children) as HTMLElement[];
    const slideWidth = slideItems[0]?.offsetWidth || 0;

    gsap.to(slides, {
      x: () => `-${(slideWidth + 20) * (slideItems.length - 1)}px`, // Move slides
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: slides,
        start: "top top",
        end: `+=${slideItems.length * 100}%`,
        scrub: 1,
        snap: {
          snapTo: (value) => Math.round(value / slideWidth) * slideWidth, // Snap to each slide
          duration: 0.5,
          ease: "power1.inOut",
        },
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section className="section section-trend-blogs">
      <div className="">
        {/* Title (remains static) */}
        <div className="mb-5">
          <p className="ml-0 lg:ml-[3vw] text-2xl font-bold">Trending Blogs</p>
          <div className="stripe dark:bg-white bg-gray-800 h-1 w-32"></div>
        </div>

        {/* Image carousel (moves horizontally) */}
        <div className="carousel-sticky">
          <div className="slides" ref={slidesRef}>
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="slide">
                <Image
                  className="object-cover w-full h-full"
                  src={SanVicente} // Replace with your image path
                  width={400}
                  height={300}
                  alt={`San Vicente ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendBlogs;




type Blog = {
  id: number;
  title: string;
  subtitle: string;
  blog: string;
  author: string;
  date: string;
  image: string;
  likes: number;
  views: number;
  category: string[]; // Array of category names
};

const trendingBlogs: Blog[] = [
  {
    id: 1,
    title: "Exploring the Hidden Gems of Palawan",
    subtitle: "Discover breathtaking spots beyond the usual tourist paths.",
    blog: "Palawan is known for its crystal-clear waters and stunning landscapes, but beyond the famous destinations like El Nido and Coron, there are hidden gems waiting to be explored...",
    author: "John Doe",
    date: "2025-02-28",
    image: "https://example.com/palawan-thumbnail.jpg",
    likes: 300,
    views: 1200,
    category: ["Travel", "Adventure", "Philippines"],
  },
  {
    id: 2,
    title: "The Ultimate Guide to Island Hopping in El Nido",
    subtitle: "A must-read guide for first-time travelers to El Nido.",
    blog: "Island hopping in El Nido is an experience like no other. From the stunning Big Lagoon to the hidden beaches of Cadlao, this guide covers everything you need to know...",
    author: "Jane Smith",
    date: "2025-02-27",
    image: "https://example.com/elnido-thumbnail.jpg",
    likes: 250,
    views: 980,
    category: ["Travel", "Beach", "El Nido"],
  },
];