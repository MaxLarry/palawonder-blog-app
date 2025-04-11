"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { trendingBlogs } from "../lib/data";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserRound, Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TrendBlogs = () => {
  const titleWrapperRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !titleWrapperRef.current || !listRef.current) return;

    const items = gsap.utils.toArray(".tb-item") as HTMLElement[];
    const section = document.querySelector(".section-trend-blogs");

    gsap.set(items, { yPercent: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        // markers: true,
      },
    });

    tl.fromTo(
      titleWrapperRef.current,
      { height: 0 },
      {
        height: "70vh",
        ease: "power1.inOut",
        duration: 0.2,
      }
    );

    if (items.length > 1) {
      tl.to(items, {
        yPercent: -103 * (items.length - 1),
        ease: "none",
        duration: 0.8,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [mounted]);

  if (!mounted) return null; // prevent hydration mismatch

  return (
    <section className="section section-trend-blogs">
      <div className="container">
        <div className="trend-blog-wrapper">
          <div ref={titleWrapperRef} className="tb-title-wrapper">
            <div className="tblog-wrapper">
              <div ref={listRef} className="tb-list">
                {trendingBlogs.map((tblogs, index) => (
                  <div className="tb-item" key={`trendblogs-${index}`}>
                    <div className="tb-card article">
                      <Image
                        className="tb-photo"
                        src={tblogs.image}
                        fill
                        alt={`trendblog-${index}`}
                      />
                      <div className="tb-card-overlay rounded-b-3xl">
                        <div className="tb-card-overlay-info">
                          <div className="flex flex-col text-left">
                            <h2 className="medium">{tblogs.title}</h2>
                            <p className="small">{tblogs.blog}</p>
                          </div>
                          <div className="flex justify-between">
                            <div className="flex items-center space-x-2 ">
                              <Avatar>
                                {tblogs.postedBy?.profilePic ? (
                                  <AvatarImage
                                    src={tblogs.postedBy.profilePic}
                                    alt={`${tblogs.postedBy.username} - profile pic`}
                                  />
                                ) : (
                                  <AvatarFallback>
                                    <UserRound />
                                  </AvatarFallback>
                                )}{" "}
                              </Avatar>
                              <p className="medium font-bold">
                                {tblogs.author}
                              </p>
                            </div>
                            <div className="flex items-center space-x-2 ">
                              <Heart></Heart>
                              <p className="medium">{tblogs.likes.toLocaleString()}</p>
                            </div>
                          </div>
                        </div>
                        <div className="tb-card-overlay-background" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="tb-name-mask top">
              <h1 className="tb-name top medium">
                Trending <span> </span>
                <span className="opacity-0">Blog</span>
              </h1>
            </div>
            <div className="tb-name-mask bottom">
              <h1 className="tb-name bottom medium">
                <span className="opacity-0">Trending </span>
                Blog
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendBlogs;
