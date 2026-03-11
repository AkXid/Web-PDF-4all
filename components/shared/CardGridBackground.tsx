"use client";

import { useId } from "react";

const PATTERNS: number[][][] = [
  [[7, 2], [10, 4], [8, 1]],
  [[3, 3], [11, 2], [6, 5]],
  [[8, 1], [4, 4], [12, 3]],
  [[5, 2], [9, 5], [7, 3]],
  [[11, 1], [3, 4], [8, 2]],
  [[6, 3], [10, 1], [4, 5]],
  [[9, 2], [5, 4], [12, 1]],
];

interface CardGridBackgroundProps {
  patternIndex?: number;
  subtle?: boolean;
  size?: number;
}

export function CardGridBackground({
  patternIndex = 0,
  subtle = false,
  size = 20,
}: CardGridBackgroundProps) {
  const patternId = useId();
  const squares = PATTERNS[patternIndex % PATTERNS.length];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Gradient Hintergrund */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100 to-white" />

      {/* SVG Grid Overlay */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,white_20%,transparent_75%)]"
        style={{ opacity: subtle ? 0.25 : 0.5 }}
      >
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full mix-blend-overlay stroke-[#1a365d]/20 fill-[#1a365d]/15"
        >
          <defs>
            <pattern
              id={patternId}
              width={size}
              height={size}
              patternUnits="userSpaceOnUse"
              x="-12"
              y="4"
            >
              <path d={`M.5 ${size}V.5H${size}`} fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
          <svg x="-12" y="4" className="overflow-visible">
            {squares.map(([x, y]) => (
              <rect
                key={`${x}-${y}`}
                strokeWidth="0"
                width={size + 1}
                height={size + 1}
                x={x * size}
                y={y * size}
              />
            ))}
          </svg>
        </svg>
      </div>
    </div>
  );
}
