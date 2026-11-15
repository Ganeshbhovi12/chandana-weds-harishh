import React from 'react';

// South Indian Floor Kolam / Traditional Rangoli at the Entrance Threshold
export const RangoliFloor = () => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-24 md:h-32 pointer-events-none z-20 flex flex-col items-center justify-end overflow-hidden opacity-85">
      {/* Stone threshold step */}
      <div className="w-full h-3 md:h-4 bg-gradient-to-r from-[#1E0F07] via-[#3D2418] to-[#1E0F07] border-t border-[#C5A059]/40 shadow-inner" />

      {/* Rangoli Lotus Mandala SVG */}
      <svg
        viewBox="0 0 400 120"
        fill="none"
        className="w-full h-full text-white/90 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
      >
        {/* Semi-circle Outer Boundary */}
        <path
          d="M 50 120 A 150 90 0 0 1 350 120"
          stroke="#FFFDF9"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <path
          d="M 70 120 A 130 75 0 0 1 330 120"
          stroke="#C5A059"
          strokeWidth="1"
        />

        {/* 12 Petals Fan Arc */}
        {[15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x = 200 - Math.cos(rad) * 110;
          const y = 120 - Math.sin(rad) * 65;
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={i % 2 === 0 ? "3" : "2"}
              fill="#FFFDF9"
            />
          );
        })}

        {/* Kumkum Red Dots */}
        {[20, 40, 60, 80, 100, 120, 140, 160].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x = 200 - Math.cos(rad) * 85;
          const y = 120 - Math.sin(rad) * 50;
          return <circle key={i} cx={x} cy={y} r="2.5" fill="#E85D04" />;
        })}

        {/* Central Lotus Flower */}
        <path
          d="M 180 120 C 180 95, 200 90, 200 80 C 200 90, 220 95, 220 120 Z"
          fill="#FFFDF9"
          fillOpacity="0.85"
        />
        <path
          d="M 160 120 C 160 105, 185 100, 195 95 C 190 110, 180 120, 160 120 Z"
          fill="#FFFDF9"
          fillOpacity="0.65"
        />
        <path
          d="M 240 120 C 240 105, 215 100, 205 95 C 210 110, 220 120, 240 120 Z"
          fill="#FFFDF9"
          fillOpacity="0.65"
        />
      </svg>
    </div>
  );
};

export default RangoliFloor;

