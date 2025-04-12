"use client";

import React from "react";

const quotes = () => {
  return (
    <section className="section">
      <div className="container flex w-full justify-center items-">
        <div className=" flex flex-col justify-center items-center text-center max-w-4xl">
          <p className="medium">
            Palawan is a paradise of crystal-clear waters, white sandy beaches,
            and breathtaking limestone cliffs. From the enchanting underground
            river to El Nido’s hidden lagoons and Coron’s vibrant marine life,
            every corner feels like a dream. Whether you're exploring, diving,
            or simply watching the sunset, Palawan is where adventure and
            serenity come together.
          </p>
          <div className="vertical-stripe dark:bg-white bg-gray-800 my-5"></div>
          <p className="medium">
            "Palawan isn’t just a place—it’s a feeling, a story, and a journey
            waiting to unfold."
          </p>
        </div>
      </div>
    </section>
  );
};

export default quotes;
