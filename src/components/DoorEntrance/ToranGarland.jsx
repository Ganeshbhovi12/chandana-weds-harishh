import React from 'react';

// Single Marigold Flower Bloom
const MarigoldBloom = ({ color = "orange", size = "md" }) => {
  const isOrange = color === "orange";
  const sizeClasses = size === "sm" ? "w-4 h-4 md:w-5 md:h-5" : "w-5 h-5 md:w-6 md:h-6";

  return (
    <div className={`relative ${sizeClasses} rounded-full flex items-center justify-center drop-shadow-md`}>
      {/* Outer petal glow */}
      <div
        className={`absolute inset-0 rounded-full ${
          isOrange
            ? "bg-gradient-to-br from-[#FF9E00] via-[#E85D04] to-[#9D0208]"
            : "bg-gradient-to-br from-[#FFEAA7] via-[#FFB703] to-[#FB8500]"
        } shadow-sm`}
      />
      {/* Middle Petal Ring */}
      <div
        className={`relative w-3/4 h-3/4 rounded-full ${
          isOrange ? "bg-[#FFB703]" : "bg-[#FFF4C8]"
        } flex items-center justify-center opacity-90`}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#E85D04]" />
      </div>
    </div>
  );
};

// Mango Leaf (Maavilai) with realistic tapered shape & natural green gradient
const MangoLeaf = ({ angle = 0, delay = 0 }) => (
  <div
    className="relative flex flex-col items-center origin-top animate-toran-sway"
    style={{
      transform: `rotate(${angle}deg)`,
      animationDelay: `${delay}s`,
    }}
  >
    <svg viewBox="0 0 30 80" fill="none" className="w-6 h-14 md:w-8 md:h-20 drop-shadow-sm">
      <path
        d="M15 0 C13 18, 2 34, 4 58 C6 72, 14 79, 15 80 C16 79, 24 72, 26 58 C28 34, 17 18, 15 0 Z"
        fill="url(#mangoLeafGrad)"
        stroke="#1E441E"
        strokeWidth="0.75"
      />
      {/* Leaf center vein */}
      <path d="M15 0 V76" stroke="#85B242" strokeWidth="0.8" opacity="0.6" />
      <defs>
        <linearGradient id="mangoLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F772D" />
          <stop offset="50%" stopColor="#31572C" />
          <stop offset="100%" stopColor="#132A13" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

export const ToranGarland = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-30 pointer-events-none overflow-hidden">
      {/* Top carved wooden lintel header bar */}
      <div className="w-full h-3 md:h-4 bg-gradient-to-r from-[#24130B] via-[#4A2E1F] to-[#24130B] border-b border-[#C5A059]/40 shadow-lg flex items-center justify-around px-2">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shadow-sm opacity-80" />
        ))}
      </div>

      {/* Main Floral Swag Bar */}
      <div className="relative flex items-center justify-between px-2 sm:px-6 md:px-12 -mt-1">
        {/* Continuous strand of marigold beads */}
        <div className="absolute top-1 left-0 right-0 h-2 bg-gradient-to-r from-[#E85D04] via-[#FFB703] to-[#E85D04] opacity-80 blur-[0.5px]" />

        {/* Distributed Mango Leaves and Marigolds across the width */}
        <div className="w-full flex items-start justify-between">
          {[...Array(14)].map((_, idx) => {
            const isOrange = idx % 2 === 0;
            const leafAngle = ((idx % 3) - 1) * 3;
            const delay = (idx * 0.25) % 2;

            return (
              <div key={idx} className="flex flex-col items-center">
                {/* Marigold bloom at junction */}
                <div className="relative z-10 -mb-2">
                  <MarigoldBloom color={isOrange ? "orange" : "yellow"} size={idx % 4 === 0 ? "md" : "sm"} />
                </div>
                {/* Mango Leaf hanging downwards */}
                <MangoLeaf angle={leafAngle} delay={delay} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Hanging Bell Tassels on Left and Right sides */}
      <div className="absolute top-1 left-2 sm:left-4 flex flex-col items-center gap-1">
        <MarigoldBloom color="orange" size="sm" />
        <MarigoldBloom color="yellow" size="sm" />
        <div className="w-2.5 h-3.5 bg-gradient-to-b from-[#FFF4C8] to-[#C5A059] rounded-b-md border border-[#3D2418] shadow-sm" />
      </div>

      <div className="absolute top-1 right-2 sm:right-4 flex flex-col items-center gap-1">
        <MarigoldBloom color="yellow" size="sm" />
        <MarigoldBloom color="orange" size="sm" />
        <div className="w-2.5 h-3.5 bg-gradient-to-b from-[#FFF4C8] to-[#C5A059] rounded-b-md border border-[#3D2418] shadow-sm" />
      </div>
    </div>
  );
};

export default ToranGarland;

