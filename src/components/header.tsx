"use client";

import Image from "next/image";
import React from "react";
import Palawonder from "@/public/Palawonder.svg";
import Link from "next/link";
import ToggleSwitch from "./toggleSwitch";

const Header = () => {
  return (
    <div className="nav">
      <div className="toggle-switch flex items-center gap-3">
        <ToggleSwitch />
      </div>
      <div className="container logo-container justify-between flex cursor-pointer">
        <div className="flex justify-center items-center select-none gap-9">
          <Link href="/">
            <Image
              src={Palawonder}
              width={40}
              height={60}
              alt="palawonder"
            ></Image>
          </Link>

          <ul className="nav-links">
            <li className="btn">
              <Link href="/explore">Explore</Link>
            </li>
            <li className="btn">
              <Link href="/destination">Destination</Link>
            </li>
            <li className="btn">
              <Link href="/community">Community</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <Link className=" button button-link" href="/login">
            Login
          </Link>
          <Link className=" button button-link prim hidden" href="/register">
            Sign up
          </Link>

          <div className="" aria-label="menu" role="button">
            <div className="button mobile-button prim ">
              <div className="mobile-button-text">Menu</div>
              <div className="mobile-button-text">Close</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
