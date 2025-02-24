import Image from "next/image";
import Hello from "./hello";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="home-intro overflow-hidden">
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
          </div>
        </div>
      </header>
    </>
  );
}
