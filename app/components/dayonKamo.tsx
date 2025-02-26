import Image from "next/image";
import React from "react";
import Elnido from "@/app/img/Elnido.jpg";
import SanVicente from "@/app/img/San-Vicente.jpg";
import Link from "next/link";

const dayonKamo = () => {
  return (
    <section className="section section-photo-wrapper">
      <div className="photo-wrapper-sticky">
        <div className="content-wrap photo left">
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
          <div>
            <h1>Dayon Kamo</h1>
            <div className="vertical-strip"></div>
            <p>
              Dayon Kamo is a Filipino phrase that translates to "Welcome Home"
              in
            </p>
          </div>
          <div>
          <Link className="button big button-link prim" href="/write-blog">
              Write a Blog
            </Link>
          </div>
        </div>
        <div className="content-wrap photo right">
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
