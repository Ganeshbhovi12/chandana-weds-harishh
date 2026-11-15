import React from 'react';

// Single Authentic South Indian Hanging Brass Temple Bell (Mani / Ghanta)
export const TempleBell = ({ 
  chainLength = "h-10 sm:h-16 md:h-20", 
  bellSize = "w-7 sm:w-10 md:w-12", 
  delay = 0,
  scale = 1
}) => {
  return (
    <div
      className="relative flex flex-col items-center pointer-events-none select-none animate-bell-sway"
      style={{
        animationDelay: `${delay}s`,
        transform: `scale(${scale})`,
        transformOrigin: "top center",
      }}
    >
      {/* 1. Top Hanging Ring Mount attached to the Lintel */}
      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full border-2 border-[#8C6826] bg-[#1E0F07] shadow-sm -mb-0.5" />

      {/* 2. Brass Link Chain */}
      <div className={`w-1.5 ${chainLength} flex flex-col items-center justify-between py-0.5 relative`}>
        {/* Repeating chain links visual */}
        <div className="absolute inset-x-0 inset-y-0 flex flex-col items-center justify-between">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2.5 rounded-full border-[1.5px] border-[#C5A059] bg-[#4A3016] shadow-sm -my-0.5"
            />
          ))}
        </div>
      </div>

      {/* 3. Bell Top Cap / Crown Loop */}
      <div className="relative z-10 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-b from-[#FFF4C8] via-[#C5A059] to-[#78482D] border border-[#24130B] shadow-md flex items-center justify-center -mb-1">
        <div className="w-1 h-1 rounded-full bg-[#FFFDF9]" />
      </div>

      {/* 4. The Brass Temple Bell Body (Authentic South Indian Koyil Mani) */}
      <div className={`relative z-10 ${bellSize} flex flex-col items-center drop-shadow-[0_8px_16px_rgba(0,0,0,0.85)]`}>
        <svg
          viewBox="0 0 100 120"
          fill="none"
          className="w-full h-auto"
        >
          {/* Bell Outer Silhouette */}
          <path
            d="M 50 10 
               C 38 10, 32 25, 30 45 
               C 28 65, 20 85, 8 98 
               C 5 102, 10 108, 20 108 
               L 80 108 
               C 90 108, 95 102, 92 98 
               C 80 85, 72 65, 70 45 
               C 68 25, 62 10, 50 10 Z"
            fill="url(#brassBellGradient)"
            stroke="#2B170B"
            strokeWidth="2.5"
          />

          {/* Stepped Decorative Relief Bands on Bell Body */}
          <path
            d="M 28 50 C 35 55, 65 55, 72 50"
            stroke="#FFE89E"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
          <path
            d="M 22 75 C 32 82, 68 82, 78 75"
            stroke="#6B4619"
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M 16 90 C 28 98, 72 98, 84 90"
            stroke="#FFE89E"
            strokeWidth="3"
            fill="none"
          />

          {/* Flared Acoustic Rim Base */}
          <ellipse
            cx="50"
            cy="108"
            rx="40"
            ry="9"
            fill="url(#rimGradient)"
            stroke="#24130B"
            strokeWidth="2"
          />

          {/* Inner Hollow Rim Depth */}
          <ellipse
            cx="50"
            cy="108"
            rx="34"
            ry="6"
            fill="#1E0E06"
          />

          {/* Visible Hanging Brass Clapper (Naaku) */}
          <circle
            cx="50"
            cy="114"
            r="7"
            fill="url(#clapperGradient)"
            stroke="#24130B"
            strokeWidth="1.5"
          />
          <line
            x1="50"
            y1="104"
            x2="50"
            y2="114"
            stroke="#C5A059"
            strokeWidth="2"
          />

          {/* Light Gloss Reflection Strip on Bell Body */}
          <path
            d="M 42 16 C 36 30, 34 50, 31 82 C 34 85, 36 85, 38 80 C 40 55, 43 32, 45 16 Z"
            fill="#FFFDF9"
            opacity="0.45"
          />

          <defs>
            {/* Rich Antique Temple Brass Metallic Gradient */}
            <linearGradient id="brassBellGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4A2F12" />
              <stop offset="15%" stopColor="#966C23" />
              <stop offset="35%" stopColor="#E5C97D" />
              <stop offset="50%" stopColor="#FFF4C8" />
              <stop offset="68%" stopColor="#E5C97D" />
              <stop offset="85%" stopColor="#966C23" />
              <stop offset="100%" stopColor="#381F0A" />
            </linearGradient>

            <linearGradient id="rimGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2E1809" />
              <stop offset="30%" stopColor="#E5C97D" />
              <stop offset="50%" stopColor="#FFF8E7" />
              <stop offset="70%" stopColor="#C5A059" />
              <stop offset="100%" stopColor="#24130B" />
            </linearGradient>

            <linearGradient id="clapperGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF8E7" />
              <stop offset="50%" stopColor="#C5A059" />
              <stop offset="100%" stopColor="#4A2F12" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

// Row of Traditional Hanging Temple Bells Suspended from Top Lintel
export const TempleBellsRow = () => {
  return (
    <div className="absolute top-5 sm:top-7 md:top-9 left-0 right-0 z-35 flex items-start justify-between px-4 sm:px-10 md:px-16 lg:px-24 pointer-events-none">
      {/* 1. Far Left Bell */}
      <TempleBell
        chainLength="h-8 sm:h-12 md:h-16"
        bellSize="w-6 sm:w-8 md:w-10"
        delay={0.2}
        scale={0.9}
      />

      {/* 2. Mid Left Bell */}
      <TempleBell
        chainLength="h-12 sm:h-18 md:h-24"
        bellSize="w-7 sm:w-10 md:w-12"
        delay={0.9}
        scale={1.0}
      />

      {/* 3. Center Grand Temple Bell */}
      <TempleBell
        chainLength="h-14 sm:h-22 md:h-28"
        bellSize="w-8 sm:w-12 md:w-14"
        delay={0}
        scale={1.15}
      />

      {/* 4. Mid Right Bell */}
      <TempleBell
        chainLength="h-12 sm:h-18 md:h-24"
        bellSize="w-7 sm:w-10 md:w-12"
        delay={1.4}
        scale={1.0}
      />

      {/* 5. Far Right Bell */}
      <TempleBell
        chainLength="h-8 sm:h-12 md:h-16"
        bellSize="w-6 sm:w-8 md:w-10"
        delay={0.6}
        scale={0.9}
      />
    </div>
  );
};

export default TempleBellsRow;
