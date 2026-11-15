import React from 'react';
import { motion } from 'framer-motion';

// Authentic South Indian Brass Stud (Kumizhi / Dome Boss)
export const BrassStud = ({ className = "w-3 h-3 sm:w-3.5 sm:h-3.5" }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    {/* Drop shadow */}
    <div className="absolute inset-0 rounded-full bg-black/80 translate-y-0.5 blur-[1px]" />
    {/* Brass Boss */}
    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#FFF4C8] via-[#C5A059] to-[#6E421F] border border-[#2B1408] shadow-sm flex items-center justify-center">
      <div className="w-1/3 h-1/3 rounded-full bg-[#FFFDF9]/90 shadow-[0_0_2px_#FFFDF9]" />
    </div>
  </div>
);

// Intricate South Indian Temple Circular Wooden Carving (Padma Mandala / Lotus Rosette)
export const TempleCarvedRosette = () => (
  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 flex items-center justify-center drop-shadow-md">
    <svg viewBox="0 0 100 100" fill="none" className="w-full h-full text-[#C5A059]/80">
      {/* Outer Carved Beaded Ring (Muthu Panthi) */}
      <circle cx="50" cy="50" r="46" stroke="#241106" strokeWidth="2.5" />
      <circle cx="50" cy="50" r="43" stroke="#C5A059" strokeWidth="1.5" strokeDasharray="3.5 2.5" opacity="0.85" />
      <circle cx="50" cy="50" r="38" stroke="#1A0C04" strokeWidth="1.5" />

      {/* Layer 1: 12 Sculpted Lotus Petals (Kamalam) */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
        <path
          key={`outer-${i}`}
          d="M50 50 C43 32, 43 18, 50 12 C57 18, 57 32, 50 50"
          fill="url(#petalGrad1)"
          stroke="#261208"
          strokeWidth="0.8"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}

      {/* Layer 2: Inner Offset Lotus Petals */}
      <circle cx="50" cy="50" r="24" stroke="#542F1A" strokeWidth="1" fill="#1F0D05" />
      {[15, 45, 75, 105, 135, 165, 195, 225, 255, 285, 315, 345].map((angle, i) => (
        <path
          key={`inner-${i}`}
          d="M50 50 C46 38, 46 28, 50 24 C54 28, 54 38, 50 50"
          fill="#C5A059"
          fillOpacity="0.65"
          stroke="#1F0E06"
          strokeWidth="0.6"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}

      {/* Center Brass Core / Boss */}
      <circle cx="50" cy="50" r="10" fill="url(#brassCoreGrad)" stroke="#241106" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="5" fill="#FFF4C8" />
      <circle cx="50" cy="50" r="2" fill="#FFFDF9" />

      <defs>
        <linearGradient id="petalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4A2613" />
          <stop offset="50%" stopColor="#2E1609" />
          <stop offset="100%" stopColor="#1B0C05" />
        </linearGradient>

        <linearGradient id="brassCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF8E7" />
          <stop offset="45%" stopColor="#E5C97D" />
          <stop offset="85%" stopColor="#9E7B34" />
          <stop offset="100%" stopColor="#543216" />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Ornamental Antique Brass Door Handle with Ring Knocker (Kappu / Kadalappidi)
export const OrnamentalBrassHandle = ({ side = "left" }) => {
  const isLeft = side === "left";

  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 z-25 flex flex-col items-center pointer-events-none ${
        isLeft ? "right-3 sm:right-6 md:right-8" : "left-3 sm:left-6 md:left-8"
      }`}
    >
      {/* Heavy Ornate Antique Brass Backplate */}
      <div className="relative w-11 h-28 sm:w-14 sm:h-36 md:w-16 md:h-44 rounded-xl bg-gradient-to-b from-[#FFF4C8] via-[#C5A059] to-[#4A2E16] border-2 border-[#1E0F07] shadow-[0_12px_32px_rgba(0,0,0,0.95)] flex flex-col items-center justify-between p-1.5 sm:p-2">
        {/* Top Arch Finial with Brass Stud */}
        <div className="w-full flex flex-col items-center">
          <div className="w-4 h-2 sm:w-5 sm:h-2.5 rounded-t-full bg-[#E5C97D] border-t border-[#1E0F07] shadow-sm -mt-2.5" />
          <BrassStud className="w-3 h-3 sm:w-3.5 sm:h-3.5 mt-0.5" />
        </div>

        {/* Central Cast Mount / Ring Hinge */}
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[#FFFDF9] via-[#E5C97D] to-[#381F0C] border-2 border-[#1E0F07] shadow-inner flex items-center justify-center my-auto">
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#261309] border border-[#C5A059]" />
        </div>

        {/* Bottom Finial with Brass Stud */}
        <div className="w-full flex flex-col items-center">
          <BrassStud className="w-3 h-3 sm:w-3.5 sm:h-3.5 mb-0.5" />
          <div className="w-4 h-2 sm:w-5 sm:h-2.5 rounded-b-full bg-[#9E7B34] border-b border-[#1E0F07] shadow-sm -mb-2.5" />
        </div>

        {/* Heavy Cast Brass Ring Knocker hanging down from the mount */}
        <div className="absolute top-11 sm:top-14 md:top-16 left-1/2 -translate-x-1/2 w-10 h-13 sm:w-13 sm:h-16 md:w-15 md:h-19 flex flex-col items-center pointer-events-none origin-top">
          {/* 3D Ring Shadow on Wood */}
          <div className="absolute inset-0 rounded-full border-4 border-black/80 translate-y-2 blur-[2px]" />
          {/* Heavy Brass Ring */}
          <div className="brass-ring w-full h-full rounded-full border-[5px] sm:border-[6px] border-[#9E7B34] flex items-center justify-center shadow-2xl">
            {/* Center Opening */}
            <div className="w-3.5 h-5 sm:w-5 sm:h-7 rounded-full bg-[#180B05]/60" />
          </div>
          {/* Brass Strike Boss at bottom */}
          <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#FFF4C8] border border-[#24130B] -mt-1 shadow-md" />
        </div>
      </div>
    </div>
  );
};

// Single Recessed Carved Wooden Panel on the Door
const CarvedDoorPanel = () => (
  <div className="relative z-10 mx-auto w-[92%] h-[23%] my-0.5 sm:my-1 rounded-lg teak-wood-panel border-2 border-[#542F1A] flex items-center justify-center p-1 sm:p-2">
    {/* Inner Chiseled Inset Border with Gold Trim */}
    <div className="absolute inset-1 sm:inset-1.5 border border-[#C5A059]/40 rounded-md pointer-events-none shadow-inner" />
    <div className="absolute inset-2 sm:inset-3 border border-[#190B05] rounded-sm pointer-events-none" />

    {/* Center South Indian Lotus Rosette / Mandala Carving */}
    <TempleCarvedRosette />

    {/* 4 Corner Brass Studs */}
    <div className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2"><BrassStud className="w-2.5 h-2.5 sm:w-3 sm:h-3" /></div>
    <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2"><BrassStud className="w-2.5 h-2.5 sm:w-3 sm:h-3" /></div>
    <div className="absolute bottom-1.5 left-1.5 sm:bottom-2 sm:left-2"><BrassStud className="w-2.5 h-2.5 sm:w-3 sm:h-3" /></div>
    <div className="absolute bottom-1.5 right-1.5 sm:bottom-2 sm:right-2"><BrassStud className="w-2.5 h-2.5 sm:w-3 sm:h-3" /></div>
  </div>
);

// Massive South Indian Teak Wooden Door Panel (Left or Right)
export const TeakDoor = ({ side = "left", isOpen = false }) => {
  const isLeft = side === "left";

  return (
    <motion.div
      className={`relative w-1/2 h-full teak-wood-texture flex flex-col justify-between p-1.5 sm:p-3 md:p-5 overflow-hidden select-none border-y-4 border-[#140804] ${
        isLeft
          ? "door-left-origin border-r border-[#100603] shadow-[25px_0_50px_rgba(0,0,0,0.95)]"
          : "door-right-origin border-l border-[#100603] shadow-[-25px_0_50px_rgba(0,0,0,0.95)]"
      }`}
      style={{
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
      }}
      initial={{ rotateY: 0 }}
      animate={{
        rotateY: isOpen ? (isLeft ? -115 : 115) : 0,
        boxShadow: isOpen
          ? "0 40px 80px rgba(0,0,0,0.98)"
          : isLeft
          ? "25px 0 50px rgba(0,0,0,0.95)"
          : "-25px 0 50px rgba(0,0,0,0.95)",
      }}
      transition={{
        duration: 2.0,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Outer Door Frame Molding */}
      <div className="absolute inset-1 sm:inset-2 border-2 border-[#200D06] rounded-md pointer-events-none shadow-inner" />
      <div className="absolute inset-2 sm:inset-3 border border-[#C5A059]/30 rounded-sm pointer-events-none" />

      {/* Vertical Overlap Stile / Center Seam Brass Plate */}
      <div
        className={`absolute top-0 bottom-0 w-2.5 sm:w-3.5 md:w-4 bg-gradient-to-r from-[#2B1408] via-[#542F1A] to-[#1E0E06] border-black/80 z-25 pointer-events-none flex flex-col justify-around items-center py-4 ${
          isLeft ? "right-0 border-l" : "left-0 border-r"
        }`}
      >
        {/* Brass studs along the center seam */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#E5C97D] border border-[#2B1408] shadow-sm" />
        ))}
      </div>

      {/* Row of Brass Studs (Top Rail) */}
      <div className="relative z-10 flex justify-between items-center px-1 sm:px-3 md:px-5 pt-0.5 sm:pt-1">
        <BrassStud />
        <BrassStud className="hidden sm:flex" />
        <BrassStud />
        <BrassStud className="hidden md:flex" />
        <BrassStud />
      </div>

      {/* 4 Carved Recessed Wooden Temple Panels (Tiered Grid) */}
      <div className="flex-1 flex flex-col justify-around py-0.5 sm:py-1 z-10">
        <CarvedDoorPanel />
        <CarvedDoorPanel />
        <CarvedDoorPanel />
        <CarvedDoorPanel />
      </div>

      {/* Row of Brass Studs (Bottom Rail) */}
      <div className="relative z-10 flex justify-between items-center px-1 sm:px-3 md:px-5 pb-0.5 sm:pt-1">
        <BrassStud />
        <BrassStud className="hidden sm:flex" />
        <BrassStud />
        <BrassStud className="hidden md:flex" />
        <BrassStud />
      </div>

      {/* Ornamental Antique Brass Door Handle with Ring Knocker */}
      <OrnamentalBrassHandle side={side} />

      {/* Heavy Antique Brass Strap Hinges along the Outer Spine */}
      <div
        className={`absolute top-1/5 w-2.5 h-12 sm:w-3.5 sm:h-16 md:w-4 md:h-20 bg-gradient-to-r from-[#C5A059] to-[#6E421F] border border-black/80 shadow-md ${
          isLeft ? "left-0 rounded-r-md" : "right-0 rounded-l-md"
        }`}
      />
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-2.5 h-12 sm:w-3.5 sm:h-16 md:w-4 md:h-20 bg-gradient-to-r from-[#C5A059] to-[#6E421F] border border-black/80 shadow-md ${
          isLeft ? "left-0 rounded-r-md" : "right-0 rounded-l-md"
        }`}
      />
      <div
        className={`absolute bottom-1/5 w-2.5 h-12 sm:w-3.5 sm:h-16 md:w-4 md:h-20 bg-gradient-to-r from-[#C5A059] to-[#6E421F] border border-black/80 shadow-md ${
          isLeft ? "left-0 rounded-r-md" : "right-0 rounded-l-md"
        }`}
      />
    </motion.div>
  );
};

export default TeakDoor;
