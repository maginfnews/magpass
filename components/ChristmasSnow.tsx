"use client";
import { useEffect, useState } from "react";

export default function ChristmasSnow() {
  const [snowflakes, setSnowflakes] = useState<Array<{
    id: number;
    left: number;
    animationDuration: number;
    opacity: number;
    size: number;
  }>>([]);

  useEffect(() => {
    const flakes = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: Math.random() * 3 + 5,
      opacity: Math.random() * 0.6 + 0.4,
      size: Math.random() * 4 + 2
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-snowfall"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: flake.opacity
          }}
        >
          <div 
            className="rounded-full bg-white"
            style={{
              width: `${flake.size}px`,
              height: `${flake.size}px`,
              boxShadow: '0 0 10px rgba(255, 255, 255, 0.8)'
            }}
          />
        </div>
      ))}
    </div>
  );
}
