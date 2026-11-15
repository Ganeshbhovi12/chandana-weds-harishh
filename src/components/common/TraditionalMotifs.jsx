import React from 'react';

// Sacred Kalash Motif with Coconut and Mango Leaves
export const KalashMotif = ({ className = "w-10 h-10 text-antiqueGold" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Base pot shadow */}
    <ellipse cx="50" cy="88" rx="28" ry="6" fill="currentColor" fillOpacity="0.2" />
    {/* Pot base ring */}
    <path d="M35 84 H65 C62 88, 38 88, 35 84 Z" fill="currentColor" />
    {/* Kumbham (Pot body) */}
    <path
      d="M28 58 C24 68, 28 82, 50 82 C72 82, 76 68, 72 58 C70 52, 64 50, 60 48 H40 C36 50, 30 52, 28 58 Z"
      fill="currentColor"
      fillOpacity="0.85"
      stroke="currentColor"
      strokeWidth="2"
    />
    {/* Swastika / sacred mark on kalash */}
    <circle cx="50" cy="66" r="6" stroke="#FFFDF9" strokeWidth="1.5" />
    <circle cx="50" cy="66" r="2" fill="#FFFDF9" />
    {/* Neck band */}
    <rect x="38" y="44" width="24" height="4" rx="2" fill="currentColor" />
    {/* Mango leaves emerging from neck */}
    <path d="M50 44 C42 32, 28 32, 24 38 C34 46, 44 44, 50 44 Z" fill="currentColor" fillOpacity="0.7" />
    <path d="M50 44 C58 32, 72 32, 76 38 C66 46, 56 44, 50 44 Z" fill="currentColor" fillOpacity="0.7" />
    <path d="M50 44 C46 26, 38 22, 34 24 C40 36, 46 40, 50 44 Z" fill="currentColor" />
    <path d="M50 44 C54 26, 62 22, 66 24 C60 36, 54 40, 50 44 Z" fill="currentColor" />
    {/* Coconut */}
    <path
      d="M50 16 C42 22, 40 36, 44 44 C46 44, 54 44, 56 44 C60 36, 58 22, 50 16 Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <circle cx="50" cy="20" r="2.5" fill="#FFFDF9" />
  </svg>
);

// Traditional Brass Diya with Flame
export const DiyaMotif = ({ className = "w-6 h-6 text-antiqueGold" }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Diya Base */}
    <ellipse cx="50" cy="85" rx="30" ry="7" fill="currentColor" fillOpacity="0.25" />
    <path d="M32 82 H68 L64 76 H36 L32 82 Z" fill="currentColor" />
    <path d="M46 76 H54 V64 H46 V76 Z" fill="currentColor" />
    {/* Bowl */}
    <path
      d="M20 54 C20 72, 80 72, 80 54 C80 50, 68 52, 50 52 C32 52, 20 50, 20 54 Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
    />
    {/* Oil lip spout */}
    <path d="M48 52 L50 48 L52 52 Z" fill="currentColor" />
    {/* Flame */}
    <path
      d="M50 48 C44 40, 43 28, 50 14 C57 28, 56 40, 50 48 Z"
      fill="#FFB703"
      className="animate-flame origin-bottom"
    />
    <path
      d="M50 46 C46 39, 46 32, 50 22 C54 32, 54 39, 50 46 Z"
      fill="#FFF4C8"
    />
  </svg>
);

// Ornate Corner Accent (Filigree / Temple Zari)
export const OrnateCorner = ({ position = "top-left", className = "w-8 h-8 text-antiqueGold" }) => {
  const getRotation = () => {
    switch (position) {
      case "top-right":
        return "scale-x-[-1]";
      case "bottom-left":
        return "scale-y-[-1]";
      case "bottom-right":
        return "scale-[-1]";
      default:
        return "";
    }
  };

  return (
    <div className={`absolute ${getPositionClass(position)} ${getRotation()} ${className} pointer-events-none`}>
      <svg viewBox="0 0 50 50" fill="none" className="w-full h-full text-current">
        <path d="M2 2 H42 M2 2 V42" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M8 8 H32 M8 8 V32" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        <circle cx="2" cy="2" r="2.5" fill="currentColor" />
        <circle cx="16" cy="16" r="3" fill="currentColor" fillOpacity="0.8" />
        <path d="M2 16 C8 16, 16 8, 16 2" stroke="currentColor" strokeWidth="1" fill="none" />
        <path d="M2 28 C14 28, 28 14, 28 2" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" fill="none" />
      </svg>
    </div>
  );
};

const getPositionClass = (position) => {
  switch (position) {
    case "top-left":
      return "top-2 left-2";
    case "top-right":
      return "top-2 right-2";
    case "bottom-left":
      return "bottom-2 left-2";
    case "bottom-right":
      return "bottom-2 right-2";
    default:
      return "top-2 left-2";
  }
};

// Royal Gold Ornamental Divider
export const GoldDivider = ({ title, subtitle, className = "" }) => (
  <div className={`flex flex-col items-center justify-center text-center my-6 md:my-8 ${className}`}>
    {subtitle && (
      <span className="font-heading text-xs md:text-sm tracking-[0.25em] text-antiqueGold-dark font-semibold uppercase mb-1">
        {subtitle}
      </span>
    )}
    
    <div className="flex items-center justify-center gap-3 w-full max-w-md">
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-antiqueGold/60 to-antiqueGold" />
      <div className="flex items-center gap-1.5 text-antiqueGold">
        <span className="text-[10px]">❖</span>
        <span className="text-sm">✦</span>
        <span className="text-[10px]">❖</span>
      </div>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-antiqueGold/60 to-antiqueGold" />
    </div>

    {title && (
      <h2 className="font-serifDisplay text-2xl sm:text-3xl md:text-4xl text-darkBrown tracking-wider font-bold mt-2">
        {title}
      </h2>
    )}
  </div>
);

// Gold Heart Ornament for Section 6
export const GoldHeartOrnament = ({ className = "w-12 h-12 text-antiqueGold" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    {/* Subtle radiant aura */}
    <div className="absolute inset-0 rounded-full bg-antiqueGold/20 blur-md animate-pulse" />
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-current relative drop-shadow-sm">
      <defs>
        <linearGradient id="goldHeartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF4C8" />
          <stop offset="40%" stopColor="#E5C97D" />
          <stop offset="70%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#9E7B34" />
        </linearGradient>
      </defs>
      {/* Outer Filigree Ring */}
      <circle cx="50" cy="50" r="44" stroke="url(#goldHeartGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="50" cy="50" r="38" stroke="url(#goldHeartGrad)" strokeWidth="1" opacity="0.6" />
      {/* Central Heart */}
      <path
        d="M50 72 C50 72, 24 54, 24 38 C24 28, 32 22, 42 22 C46 22, 49 25, 50 28 C51 25, 54 22, 58 22 C68 22, 76 28, 76 38 C76 54, 50 72, 50 72 Z"
        fill="url(#goldHeartGrad)"
        stroke="#7A5B1D"
        strokeWidth="1.5"
      />
      {/* Inner Heart Highlight */}
      <path
        d="M50 64 C50 64, 30 50, 30 38 C30 31, 35 27, 42 27 C45 27, 48 29, 50 32 C52 29, 55 27, 58 27 C65 27, 70 31, 70 38 C70 50, 50 64, 50 64 Z"
        fill="#FFFDF9"
        fillOpacity="0.3"
      />
      <circle cx="50" cy="40" r="2" fill="#FFFDF9" />
    </svg>
  </div>
);

