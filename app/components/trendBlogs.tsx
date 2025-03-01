'use client'

import React from "react";
import Image from "next/image";


type Blog = {
  id: number;
  title: string;
  subtitle: string;
  blog: string;
  author: string;
  date: string;
  image: string;
  likes: number;
  views: number;
  category: string[]; // Array of category names
};

const trendingBlogs: Blog[] = [
  {
    id: 1,
    title: "Exploring the Hidden Gems of Palawan",
    subtitle: "Discover breathtaking spots beyond the usual tourist paths.",
    blog: "Palawan is known for its crystal-clear waters and stunning landscapes, but beyond the famous destinations like El Nido and Coron, there are hidden gems waiting to be explored...",
    author: "John Doe",
    date: "2025-02-28",
    image: "https://example.com/palawan-thumbnail.jpg",
    likes: 300,
    views: 1200,
    category: ["Travel", "Adventure", "Philippines"],
  },
  {
    id: 2,
    title: "The Ultimate Guide to Island Hopping in El Nido",
    subtitle: "A must-read guide for first-time travelers to El Nido.",
    blog: "Island hopping in El Nido is an experience like no other. From the stunning Big Lagoon to the hidden beaches of Cadlao, this guide covers everything you need to know...",
    author: "Jane Smith",
    date: "2025-02-27",
    image: "https://example.com/elnido-thumbnail.jpg",
    likes: 250,
    views: 980,
    category: ["Travel", "Beach", "El Nido"],
  },
];

const TrendBlogs = () => {
  return (
    <section className="section section-trend-blogs">
      <div className="container">
        <div className="mb-1">
          <p className=" ml-0 lg:ml-[3vw] mb-1 lg:mb-5 md:mb-3">Trending Blogs</p>
          <div className="stripe dark:bg-white bg-gray-800"></div>
        </div>
        <div className="mt-10">
          <div className="slides h-[80vh] flex justify-center items-center">
            <div className="bg-black h-80 w-20">

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendBlogs;
