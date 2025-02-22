"use client";

import Image from "next/image";
import Hello from "./hello";

export default function Home() {
  return (
    <>
      <header className="section">
        <div className="container overflow-hidden">
          <div className="flex flex-col justify-center items-center over">
            <p>Your Gateway to Palawan’s Hidden Wonders</p>
            <h1 className="flex text-center text-9xl">
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
