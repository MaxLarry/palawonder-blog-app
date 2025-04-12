import Elnido from "@/src/img/Elnido.jpg";
import SanVicente from "@/src/img/San-Vicente.jpg";
import Image, { StaticImageData } from "next/image";

type Blog = {
  id: number;
  title: string;
  subtitle: string;
  blog: string;
  author: string;
  date: string;
  image: string | StaticImageData;
  likes: number;
  views: number;
  category: string[]; // Array of category names
  postedBy: {
    userId: string;
    username: string;
    profilePic: string;
  };
};

export const trendingBlogs: Blog[] = [
  {
    id: 1,
    title: "Exploring the Hidden Gems of Palawan",
    subtitle: "Discover breathtaking spots beyond the usual tourist paths.",
    blog: "Palawan is known for its crystal-clear waters and stunning landscapes, but beyond the famous destinations like El Nido and Coron, there are hidden gems waiting to be explored...",
    author: "John Doe",
    date: "2025-02-28",
    image: Elnido,
    likes: 3000,
    views: 1200,
    category: ["Travel", "Adventure", "Philippines"],
    postedBy: {
      userId: "1209102091209102",
      username: "Larry_1920",
      profilePic:
        "https://res.cloudinary.com/dyyglc78v/image/upload/v1728993435/adminprofile/user-2024-10-15T11-57-13.718Z.jpg",
    },
  },
  {
    id: 2,
    title: "The Ultimate Guide to Island Hopping in El Nido",
    subtitle: "A must-read guide for first-time travelers to El Nido.",
    blog: "Island hopping in El Nido is an experience like no other. From the stunning Big Lagoon to the hidden beaches of Cadlao, this guide covers everything you need to know...",
    author: "Jane Smith",
    date: "2025-02-27",
    image: SanVicente,
    likes: 2502323,
    views: 980,
    category: ["Travel", "Beach", "El Nido"],
    postedBy: {
      userId: "1209102091209102",
      username: "Larry_1920",
      profilePic:
        "https://res.cloudinary.com/dyyglc78v/image/upload/v1728993435/adminprofile/user-2024-10-15T11-57-13.718Z.jpg",
    },
  },
  {
    id: 2,
    title: "The Ultimate Guide to Island Hopping in El Nido",
    subtitle: "A must-read guide for first-time travelers to El Nido.",
    blog: "Island hopping in El Nido is an experience like no other. From the stunning Big Lagoon to the hidden beaches of Cadlao, this guide covers everything you need to know...",
    author: "Jane Smith",
    date: "2025-02-27",
    image: SanVicente,
    likes: 250,
    views: 980,
    category: ["Travel", "Beach", "El Nido"],
    postedBy: {
      userId: "1209102091209102",
      username: "Larry_1920",
      profilePic:
        "https://res.cloudinary.com/dyyglc78v/image/upload/v1728993435/adminprofile/user-2024-10-15T11-57-13.718Z.jpg",
    },
  },

  {
    id: 2,
    title: "The Ultimate Guide to Island Hopping in El Nido",
    subtitle: "A must-read guide for first-time travelers to El Nido.",
    blog: "Island hopping in El Nido is an experience like no other. From the stunning Big Lagoon to the hidden beaches of Cadlao, this guide covers everything you need to know...",
    author: "Jane Smith",
    date: "2025-02-27",
    image: SanVicente,
    likes: 2509,
    views: 980,
    category: ["Travel", "Beach", "El Nido"],
    postedBy: {
      userId: "1209102091209102",
      username: "Larry_1920",
      profilePic:
        "https://res.cloudinary.com/dyyglc78v/image/upload/v1728993435/adminprofile/user-2024-10-15T11-57-13.718Z.jpg",
    },
  },

  {
    id: 2,
    title: "The Ultimate Guide to Island Hopping in El Nido",
    subtitle: "A must-read guide for first-time travelers to El Nido.",
    blog: "Island hopping in El Nido is an experience like no other. From the stunning Big Lagoon to the hidden beaches of Cadlao, this guide covers everything you need to know...",
    author: "Jane Smith",
    date: "2025-02-27",
    image: SanVicente,
    likes: 2503,
    views: 980,
    category: ["Travel", "Beach", "El Nido"],
    postedBy: {
      userId: "1209102091209102",
      username: "Larry_1920",
      profilePic:
        "https://res.cloudinary.com/dyyglc78v/image/upload/v1728993435/adminprofile/user-2024-10-15T11-57-13.718Z.jpg",
    },
  },

  {
    id: 2,
    title: "The Ultimate Guide to Island Hopping in El Nido",
    subtitle: "A must-read guide for first-time travelers to El Nido.",
    blog: "Island hopping in El Nido is an experience like no other. From the stunning Big Lagoon to the hidden beaches of Cadlao, this guide covers everything you need to know...",
    author: "Jane Smith",
    date: "2025-02-27",
    image: SanVicente,
    likes: 250332,
    views: 980,
    category: ["Travel", "Beach", "El Nido"],
    postedBy: {
      userId: "1209102091209102",
      username: "Larry_1920",
      profilePic:
        "https://res.cloudinary.com/dyyglc78v/image/upload/v1728993435/adminprofile/user-2024-10-15T11-57-13.718Z.jpg",
    },
  },
  {
    id: 2,
    title: "The Ultimate Guide to Island Hopping in El Nido",
    subtitle: "A must-read guide for first-time travelers to El Nido.",
    blog: "Island hopping in El Nido is an experience like no other. From the stunning Big Lagoon to the hidden beaches of Cadlao, this guide covers everything you need to know...",
    author: "Jane Smith",
    date: "2025-02-27",
    image: SanVicente,
    likes: 250,
    views: 980,
    category: ["Travel", "Beach", "El Nido"],
    postedBy: {
      userId: "1209102091209102",
      username: "Larry_1920",
      profilePic:
        "https://res.cloudinary.com/dyyglc78v/image/upload/v1728993435/adminprofile/user-2024-10-15T11-57-13.718Z.jpg",
    },
  },
  {
    id: 2,
    title: "The Ultimate Guide to Island Hopping in El Nido",
    subtitle: "A must-read guide for first-time travelers to El Nido.",
    blog: "Island hopping in El Nido is an experience like no other. From the stunning Big Lagoon to the hidden beaches of Cadlao, this guide covers everything you need to know...",
    author: "Jane Smith",
    date: "2025-02-27",
    image: SanVicente,
    likes: 250,
    views: 980,
    category: ["Travel", "Beach", "El Nido"],
    postedBy: {
      userId: "1209102091209102",
      username: "Larry_1920",
      profilePic:
        "https://res.cloudinary.com/dyyglc78v/image/upload/v1728993435/adminprofile/user-2024-10-15T11-57-13.718Z.jpg",
    },
  },
  {
    id: 2,
    title: "The Ultimate Guide to Island Hopping in El Nido",
    subtitle: "A must-read guide for first-time travelers to El Nido.",
    blog: "Island hopping in El Nido is an experience like no other. From the stunning Big Lagoon to the hidden beaches of Cadlao, this guide covers everything you need to know...",
    author: "Jane Smith",
    date: "2025-02-27",
    image: SanVicente,
    likes: 250,
    views: 980,
    category: ["Travel", "Beach", "El Nido"],
    postedBy: {
      userId: "1209102091209102",
      username: "Larry_1920",
      profilePic:
        "https://res.cloudinary.com/dyyglc78v/image/upload/v1728993435/adminprofile/user-2024-10-15T11-57-13.718Z.jpg",
    },
  },
];

export const showcaseItem = [
  Elnido,
  SanVicente,
  Elnido,
  SanVicente,
  Elnido,
  SanVicente,
  Elnido,
  SanVicente,
];
