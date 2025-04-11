"use client";

import { Sun, AudioLines, Moon } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const toggleSwitch = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // to avoid hydration mismatch sabi

  return (
    <>
      <div
        className="w-9 lg:w-7 h-9 lg:h-7 cursor-pointer z-2 flex justify-center items-center rounded-full dark:bg-white/30 bg-black/10"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <Sun width={17}></Sun> : <Moon width={17}></Moon>}
      </div>
      <div
        className="w-9 lg:w-7 h-9 lg:h-7 cursor-pointer z-2 flex justify-center items-center rounded-full dark:bg-white/30 bg-black/10"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? (
          <div className="flex items-center justify-center gap-[1px] h-full">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                className="w-[2px] dark:bg-white bg-black rounded"
                animate={{ height: [4, 12, 4] }} // Adjust height for balance
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15, // Smooth animation timing
                }}
              />
            ))}
          </div>
        ) : (
          <AudioLines size={17} />
        )}
      </div>
    </>
  );
};

export default toggleSwitch;
