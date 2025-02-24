import Image from "next/image";
import Hello from "./hello";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="home-intro overflow-hidden">
        <div className="container ">
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
        <div className="container">
          <div className="video-card">
            <div className="lj_video_wrapper w-full flex justify-center">
              <video className="h-full w-full rounded-3xl" preload="none" autoPlay loop>
                <source src="https://cdn.prod.website-files.com/60db5e59f76ae577e9f50d42/63600c288b483e9c7398616b_reel-transcode.mp4" />
              </video>
            </div>
            <div className="header-card-overlay"></div>
          </div>
        </div>
      </header>
    </>
  );
}
