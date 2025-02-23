"use client";

import Image from "next/image";
import Hello from "./hello";

export default function Home() {
  return (
    <>
      <header className="home-intro">
        <div className="container overflow-hidden">
          <div className="ito flex flex-col justify-center items-center over">
            <p className="small">Your Gateway to Palawan’s Hidden Wonders</p>
            <h1 className="flex text-center big">
              Discover. Share.
              <br />
              Connect
            </h1>
            <p>
              Unveiling the beauty of Palawan through real stories, hidden gems, and a thriving travel community.
            </p>
          </div>
        </div>
      </header>
    </>
  );
}
