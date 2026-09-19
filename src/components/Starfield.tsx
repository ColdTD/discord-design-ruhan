import React, { useMemo } from "react";

type Star = {
  top: number;
  left: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
  soft: boolean;
  glow: boolean;
};

// Deterministic PRNG so the sky never reshuffles between renders
const mulberry32 = (seed: number) => () => {
  seed |= 0;
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const COLORS = ["#ffffff", "#ffffff", "#ffffff", "#c7d0ff", "#5865F2", "#7289DA"];

const Starfield: React.FC<{ count?: number }> = ({ count = 140 }) => {
  const stars = useMemo<Star[]>(() => {
    const rand = mulberry32(20260919);
    return Array.from({ length: count }, () => {
      const sizeRoll = rand();
      const size = sizeRoll < 0.8 ? 1 + rand() : 2 + rand() * 1.5;
      return {
        top: rand() * 100,
        left: rand() * 100,
        size: Number(size.toFixed(2)),
        color: COLORS[Math.floor(rand() * COLORS.length)],
        duration: Number((1.6 + rand() * 4.4).toFixed(2)),
        delay: Number((rand() * 6).toFixed(2)),
        soft: rand() > 0.6,
        glow: size > 2.2,
      };
    });
  }, [count]);

  return (
    <div aria-hidden className="fixed inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <span
          key={i}
          className="star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: star.color,
            boxShadow: star.glow ? `0 0 ${star.size * 4}px ${star.color}` : undefined,
            animationName: star.soft ? "twinkle-soft" : "twinkle",
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Starfield;
