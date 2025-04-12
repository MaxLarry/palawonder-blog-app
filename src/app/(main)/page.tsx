import Image from "next/image";
import Hello from "./hello";
import DayonKamo from "@/src/components/dayonKamo";
import TrendBlogs from "@/src/components/trendBlogs";
import Link from "next/link";
import Quotes from "@/src/components/quotes";
import Showcase from "@/src/components/showcase";
import { Camera } from "lucide-react";

export default function Home() {
  return (
    <>
      <header className="home-intro section overflow-hidden">
        <div className="container home-text-intro">
          <div className="ito flex flex-col justify-center items-center over">
            <p className="small">
              🏝️ Your Gateway to Palawan’s Hidden Wonders ☀️
            </p>
            <h1 className="flex text-center big">
              Discover. Share.
              <br />
              Connect
            </h1>
            <p>
              Unveiling the beauty of Palawan through real stories, hidden gems,
              and a thriving travel community.
            </p>
            <Link className="button big button-link prim" href="/write-blog">
              Write a Blog
            </Link>
          </div>
        </div>
        <div className="container video-container">
          <div className="video-card">
            <div className="lj_video_wrapper">
              <video preload="none" autoPlay loop>
                <source src="https://youtu.be/bmHrdsNvsYY" />
              </video>
            </div>
            <div className="header-card-overlay"></div>
            <div className="absolute flex gap-3 items-center justify-center bottom-0 mb-4"><Camera/><p className="medium">Our Awesome Planet</p></div>
          </div>
        </div>
      </header>
      <DayonKamo />
      <TrendBlogs />
      <Showcase />
      <Quotes />
    </>
  );
}
