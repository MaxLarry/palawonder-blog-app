"use client";

import Image from "next/image";
import React from "react";
import Palawonder from "@/public/Palawonder.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header className="nav">
      <div className="container logo-container justify-between flex cursor-pointer">
        <div className="flex justify-center items-center select-none gap-9">
          <Image
            src={Palawonder}
            width={50}
            height={60}
            alt="palawonder"
          ></Image>
          {/* <div className='flex items-center'><p className='m-0'>Palawonder</p></div> */}
          <ul className="nav-links">
            <li className="btn">
              <a href="#">Explore</a>
            </li>
            <li className="btn">
              <a href="#">Destination</a>
            </li>
            <li className="btn">
              <a href="#">Community</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-row gap-5 ">
          <Link className="button-link" href="/login">
            <button>Login</button>
          </Link>
          <Link className="button-link signup" href="/login">
            <button>Sign up</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
