"use client";

import { useState, useEffect } from "react";

const themes = [
  "Cottagecore",
  "Grunge",
  "Clean Girl",
  "Study Vibe",
];

function getRandomTheme() {
  return themes[Math.floor(Math.random() * themes.length)];
}

function getRandomImages(theme: string, count: number) {
  // Use Unsplash source with theme as query
  return Array.from({ length: count }, (_, i) => {
    const width = 400;
    const height = 300;
    const sig = Math.random();
    return `https://source.unsplash.com/random/${width}x${height}?${theme}&sig=${sig}`;
  });
}

export default function VibeBoard() {
  const [theme, setTheme] = useState<string>(getRandomTheme());
  const [images, setImages] = useState<string[]>([]);

  const generateBoard = () => {
    const newTheme = getRandomTheme();
    const count = Math.floor(Math.random() * 3) + 4; // 4–6 images
    setTheme(newTheme);
    setImages(getRandomImages(newTheme, count));
  };

  useEffect(() => {
    generateBoard();
  }, []);

  return (
    <div className="flex flex-col items-center gap-6 p-4 bg-[#FFF8F0]">
      <h1 className="text-2xl font-semibold text-[#F2A6A6]">{theme}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${theme} image ${idx + 1}`}
            className="w-full h-auto rounded-lg shadow-md transition-transform duration-300 hover:scale-105 border-2 border-[#FFFFFF]"
          />
        ))}
      </div>
      <button
        onClick={generateBoard}
        className="px-6 py-2 bg-[#C8B6FF] text-[#333333] rounded-md hover:bg-[#FFD6BA] transition-colors"
      >
        Generate Mood Board
      </button>
    </div>
  );
}
