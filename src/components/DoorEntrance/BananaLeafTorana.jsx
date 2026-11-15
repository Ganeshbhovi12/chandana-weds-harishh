import React from 'react';

// Single Authentic Broad South Indian Banana Leaf (Vazhai Ilai)
export const BananaLeaf = ({ 
  angle = 0, 
  delay = 0, 
  scale = 1,
  className = "w-14 h-32 sm:w-20 sm:h-44 md:w-28 md:h-56" 
}) => {
  return (
    <div
      className={`relative flex flex-col items-center origin-top select-none pointer-events-none animate-leaf-sway ${className}`}
      style={{
        transform: `rotate(${angle}deg) scale(${scale})`,
        animationDelay: `${delay}s`,
      }}
    >
      <svg
        viewBox="0 0 120 260"
        fill="none"
        className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)]"
      >
        {/* Banana Leaf Outer Blade Silhouette */}
        <path
          d="M 60 4 
             C 45 35, 12 75, 8 135 
             C 4 195, 30 240, 58 258 
             C 62 258, 88 240, 112 195 
             C 116 135, 75 35, 60 4 Z"
          fill="url(#bananaLeafGradient)"
          stroke="#173812"
          strokeWidth="1.5"
        />

        {/* Central Thick Leaf Midrib / Rachis (Thandu) */}
        <path
          d="M 60 0 C 60 70, 60 180, 60 258"
          stroke="url(#midribGradient)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Left Side Lateral Veins (Naranbu) */}
        {[30, 60, 90, 120, 150, 180, 210].map((y, i) => (
          <path
            key={`left-${i}`}
            d={`M 60 ${y} C 45 ${y - 8}, 25 ${y + 5}, 14 ${y + 16}`}
            stroke="#7CB535"
            strokeWidth="1.2"
            opacity="0.65"
          />
        ))}

        {/* Right Side Lateral Veins (Naranbu) */}
        {[30, 60, 90, 120, 150, 180, 210].map((y, i) => (
          <path
            key={`right-${i}`}
            d={`M 60 ${y} C 75 ${y - 8}, 95 ${y + 5}, 106 ${y + 16}`}
            stroke="#7CB535"
            strokeWidth="1.2"
            opacity="0.65"
          />
        ))}

        {/* Natural Sunlit Highlight on Left Upper Blade */}
        <path
          d="M 58 25 C 42 55, 25 90, 22 135 C 20 160, 32 190, 45 215 C 38 180, 35 130, 48 80 C 52 50, 56 32, 58 25 Z"
          fill="#A6D953"
          opacity="0.3"
        />

        {/* Top Leaf Stem / Petiole */}
        <rect
          x="57"
          y="0"
          width="6"
          height="12"
          rx="2"
          fill="#4A751F"
          stroke="#1D380E"
          strokeWidth="1"
        />

        <defs>
          {/* Lush Green Fresh South Indian Banana Leaf Gradient */}
          <linearGradient id="bananaLeafGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#559929" />
            <stop offset="25%" stopColor="#3E7B1D" />
            <stop offset="55%" stopColor="#2A5C14" />
            <stop offset="85%" stopColor="#1E440E" />
            <stop offset="100%" stopColor="#143209" />
          </linearGradient>

          {/* Yellowish-Lime Midrib Stem Gradient */}
          <linearGradient id="midribGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#BCE367" />
            <stop offset="50%" stopColor="#8FC738" />
            <stop offset="100%" stopColor="#548A1B" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

// Traditional Mango Leaf Accent (Maavilai)
export const MangoLeafAccent = ({ angle = 0, delay = 0 }) => (
  <div
    className="relative flex flex-col items-center origin-top select-none pointer-events-none animate-toran-sway"
    style={{
      transform: `rotate(${angle}deg)`,
      animationDelay: `${delay}s`,
    }}
  >
    <svg viewBox="0 0 30 90" fill="none" className="w-5 h-16 sm:w-6 sm:h-20 drop-shadow-md">
      <path
        d="M15 0 C12 20, 2 40, 4 68 C6 82, 14 89, 15 90 C16 89, 24 82, 26 68 C28 40, 18 20, 15 0 Z"
        fill="url(#mangoLeafGrad2)"
        stroke="#1E441E"
        strokeWidth="0.8"
      />
      <path d="M15 0 V86" stroke="#90C545" strokeWidth="1" opacity="0.75" />
      <defs>
        <linearGradient id="mangoLeafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#588531" />
          <stop offset="50%" stopColor="#386321" />
          <stop offset="100%" stopColor="#1C3810" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Marigold Flower Blossom (Sevvanthi)
export const MarigoldFlower = ({ color = "orange", size = "w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" }) => {
  const isOrange = color === "orange";
  return (
    <div className={`relative ${size} rounded-full flex items-center justify-center drop-shadow-md`}>
      <div
        className={`absolute inset-0 rounded-full ${
          isOrange
            ? "bg-gradient-to-br from-[#FF9E00] via-[#E85D04] to-[#9D0208]"
            : "bg-gradient-to-br from-[#FFF3B0] via-[#FFB703] to-[#E85D04]"
        } shadow-sm`}
      />
      <div
        className={`relative w-2/3 h-2/3 rounded-full ${
          isOrange ? "bg-[#FFB703]" : "bg-[#FFF4C8]"
        } flex items-center justify-center opacity-95`}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#E85D04]" />
      </div>
    </div>
  );
};

// Full South Indian Banana Leaf Torana spanning across the Top Frame
export const BananaLeafTorana = () => {
  return (
    <div className="relative w-full z-30 pointer-events-none select-none">
      
      {/* 1. Heavy Carved Top Wooden Lintel Beam (Uthiram) */}
      <div className="relative w-full h-6 sm:h-8 md:h-10 bg-gradient-to-b from-[#381A0B] via-[#261208] to-[#140804] border-b-2 border-[#C5A059]/60 shadow-[0_8px_24px_rgba(0,0,0,0.95)] flex items-center justify-between px-3 sm:px-8">
        {/* Carved molding filigree & brass studs row */}
        <div className="w-full flex items-center justify-between">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-br from-[#FFF4C8] via-[#C5A059] to-[#78482D] border border-[#24130B] shadow-sm"
            />
          ))}
        </div>
      </div>

      {/* 2. Draping Banana Leaf Torana & Marigold Garland Array */}
      <div className="absolute top-full left-0 right-0 z-30 pointer-events-none">
        
        {/* Marigold Garland String binding the Torana */}
        <div className="relative w-full h-2.5 sm:h-3.5 bg-gradient-to-r from-[#D00000] via-[#FFB703] to-[#D00000] opacity-95 shadow-md flex items-center justify-between px-2 sm:px-4">
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${
                i % 2 === 0 ? "bg-[#FFB703]" : "bg-[#E85D04]"
              } shadow-sm`}
            />
          ))}
        </div>

        {/* Draping Banana Leaves across the width */}
        <div className="relative flex items-start justify-around px-1 sm:px-4 md:px-8 -mt-1 sm:-mt-1.5 overflow-visible">
          
          {/* Left Side Fan of Banana Leaves */}
          <div className="flex items-start -space-x-4 sm:-space-x-6 md:-space-x-8">
            <BananaLeaf angle={-10} delay={0.2} scale={0.9} />
            <BananaLeaf angle={-4} delay={0.6} scale={1.0} />
            <BananaLeaf angle={2} delay={1.0} scale={0.95} />
          </div>

          {/* Center Draping Banana Leaves & Auspicious Garland */}
          <div className="flex flex-col items-center -space-y-2 sm:-space-y-4">
            <div className="flex items-start -space-x-3 sm:-space-x-5">
              <BananaLeaf angle={-3} delay={0} scale={1.08} />
              <BananaLeaf angle={3} delay={0.4} scale={1.08} />
            </div>
            {/* Central Marigold Medallion Bloom */}
            <div className="relative z-20 flex items-center gap-1 -mt-4 sm:-mt-6">
              <MarigoldFlower color="orange" size="w-6 h-6 sm:w-8 sm:h-8" />
              <MarigoldFlower color="yellow" size="w-7 h-7 sm:w-9 sm:h-9" />
              <MarigoldFlower color="orange" size="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
          </div>

          {/* Right Side Fan of Banana Leaves */}
          <div className="flex items-start -space-x-4 sm:-space-x-6 md:-space-x-8">
            <BananaLeaf angle={-2} delay={0.8} scale={0.95} />
            <BananaLeaf angle={4} delay={1.2} scale={1.0} />
            <BananaLeaf angle={10} delay={1.5} scale={0.9} />
          </div>

        </div>

        {/* Decorative Hanging Marigold Droplets at Left & Right Ends */}
        <div className="absolute top-3 left-2 sm:left-4 md:left-6 flex flex-col items-center gap-1 z-30">
          <MarigoldFlower color="orange" size="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          <MarigoldFlower color="yellow" size="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          <MarigoldFlower color="orange" size="w-4.5 h-4.5 sm:w-6 sm:h-6" />
          <div className="w-2 h-4 bg-gradient-to-b from-[#C5A059] to-[#8C6826] rounded-b-md shadow-md" />
        </div>

        <div className="absolute top-3 right-2 sm:right-4 md:right-6 flex flex-col items-center gap-1 z-30">
          <MarigoldFlower color="yellow" size="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          <MarigoldFlower color="orange" size="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          <MarigoldFlower color="yellow" size="w-4.5 h-4.5 sm:w-6 sm:h-6" />
          <div className="w-2 h-4 bg-gradient-to-b from-[#C5A059] to-[#8C6826] rounded-b-md shadow-md" />
        </div>

      </div>

    </div>
  );
};

export default BananaLeafTorana;
