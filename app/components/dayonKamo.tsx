'use client'

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Elnido from "@/app/img/Elnido.jpg";
import SanVicente from "@/app/img/San-Vicente.jpg";
import Link from "next/link";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const dayonKamo = () => {
  const containerRef = useRef(null);
  const rightImageRef = useRef(null);
  const leftImageRef = useRef(null);


  useEffect (()=>{
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "+=90px bottom",
        end: "bottom center",
        markers:true,
        scrub: true,
      },
      stagger: 0.1,
    });

    // Image animations
    tl.fromTo(
      rightImageRef.current,
      { x: -550, rotate: 0, y:0 },
      { x: 0, duration: 3, rotate: 5 }
    ).fromTo(
      leftImageRef.current,
      { x: 550, rotate: 0, y:0 },
      { x: 0, duration: 3, rotate: -5 },
      "<"
    );


  },[])


  return (
    <section className="section section-photo-wrapper">
      <div className="photo-wrapper-sticky" ref={containerRef}>
        <div className="content-wrap photo left" ref={leftImageRef}>
          <Image
            className="photo-image"
            src={Elnido}
            width={0}
            height={0}
            alt="elnido-palawan.png"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw"
          ></Image>
        </div>
        <div className="content-wrap ">
          <div className="flex flex-col justify-center items-center">
            <h1>Dayon Kamo</h1>
            <div className="vertical-stripe  dark:bg-white/30 bg-gray-800"></div>
            <p className="small mt-[2vw]">
              A Place that you can find the true meaning of peace.
            </p>
          </div>
          <div>
            <Link className="button big button-link prim" href="/destination">
              Destination
            </Link>
          </div>
        </div>
        <div className="content-wrap photo right" ref={rightImageRef}>
          <Image
            className="photo-image"
            src={SanVicente}
            width={0}
            height={0}
            alt="sanvicente-palawan.png"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 33vw"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default dayonKamo;
