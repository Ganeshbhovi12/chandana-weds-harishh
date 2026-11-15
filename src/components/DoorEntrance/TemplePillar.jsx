import React from 'react';

// Authentic South Indian Carved Wooden Temple Pillar (Stambha)
export const TemplePillar = ({ side = "left" }) => {
  const isLeft = side === "left";

  return (
    <div
      className={`relative h-full flex flex-col justify-between items-center pointer-events-none select-none z-20 ${
        isLeft ? "items-start" : "items-end"
      }`}
    >
      {/* Outer Pillar Column */}
      <div className="relative w-8 sm:w-12 md:w-16 lg:w-20 h-full teak-pillar-wood flex flex-col justify-between items-center border-x-2 border-[#190B05] shadow-[0_0_25px_rgba(0,0,0,0.85)]">
        
        {/* 1. TOP CAPITAL (Bodhai / Corbel Bracket) */}
        <div className="w-full flex flex-col items-center">
          {/* Top bracket plate connecting to lintel beam */}
          <div className="w-[125%] h-4 sm:h-5 md:h-6 bg-gradient-to-b from-[#3D2010] via-[#542F1A] to-[#2B1409] border border-[#190B05] rounded-t-sm shadow-md flex items-center justify-around px-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] opacity-80" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#E5C97D]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059] opacity-80" />
          </div>

          {/* Stepped corbel molding with lotus petal curves */}
          <div className="w-[115%] h-3 sm:h-4 bg-gradient-to-r from-[#2B1409] via-[#482613] to-[#2B1409] border-b border-[#C5A059]/40 flex items-center justify-center">
            {/* Miniature carved lotus petal pattern */}
            <svg viewBox="0 0 60 12" className="w-full h-full text-[#C5A059]/70" fill="currentColor">
              <path d="M0 0 Q 7 12 15 0 Q 22 12 30 0 Q 37 12 45 0 Q 52 12 60 0 Z" />
            </svg>
          </div>

          {/* Antique Brass Ring Collar (Pattai) */}
          <div className="w-full h-2 sm:h-2.5 bg-gradient-to-r from-[#8C6826] via-[#E5C97D] to-[#6E4E18] border-y border-[#1E0F07] shadow-sm flex items-center justify-around">
            <div className="w-1 h-1 rounded-full bg-[#3D2418]" />
            <div className="w-1 h-1 rounded-full bg-[#3D2418]" />
          </div>
        </div>

        {/* 2. UPPER PILLAR FLUTING & CARVED MEDALLION */}
        <div className="w-full flex-1 flex flex-col items-center justify-around py-3 sm:py-6 relative">
          {/* Vertical fluted shadow lines */}
          <div className="absolute inset-y-2 inset-x-1 sm:inset-x-2 flex justify-around pointer-events-none opacity-60">
            <div className="w-0.5 h-full bg-gradient-to-b from-black/80 via-transparent to-black/80" />
            <div className="w-0.5 h-full bg-gradient-to-b from-black/80 via-transparent to-black/80" />
            <div className="w-0.5 h-full bg-gradient-to-b from-black/80 via-transparent to-black/80" />
          </div>

          {/* Upper Kalasam Ring Carving */}
          <div className="relative z-10 w-[105%] h-3 sm:h-4 rounded-md bg-gradient-to-r from-[#3D2010] via-[#5D341D] to-[#3D2010] border-y border-[#C5A059]/50 shadow-inner flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-[#E5C97D] shadow-[0_0_4px_#E5C97D]" />
          </div>

          {/* Center Carved Temple Medallion */}
          <div className="relative z-10 w-6 h-6 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-[#4A2613] via-[#2B1409] to-[#1F0C05] border-2 border-[#C5A059]/60 shadow-[0_4px_10px_rgba(0,0,0,0.8)] flex items-center justify-center p-0.5">
            <div className="w-full h-full rounded-full border border-[#E5C97D]/40 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-3/4 h-3/4 text-[#E5C97D]" fill="currentColor">
                <path d="M12 2L15 8L21 9L17 14L18 20L12 17L6 20L7 14L3 9L9 8L12 2Z" />
              </svg>
            </div>
          </div>

          {/* Lower Brass Collar */}
          <div className="relative z-10 w-full h-2 sm:h-2.5 bg-gradient-to-r from-[#8C6826] via-[#E5C97D] to-[#6E4E18] border-y border-[#1E0F07] shadow-sm flex items-center justify-around">
            <div className="w-1 h-1 rounded-full bg-[#3D2418]" />
            <div className="w-1 h-1 rounded-full bg-[#3D2418]" />
          </div>
        </div>

        {/* 3. BASE PLINTH (Aadithana / Pedestal) */}
        <div className="w-full flex flex-col items-center">
          {/* Stepped molded pedestal neck */}
          <div className="w-[108%] h-2.5 sm:h-3.5 bg-gradient-to-r from-[#2B1409] via-[#482613] to-[#2B1409] border-t border-[#C5A059]/40" />

          {/* Heavy Carved Pedestal Block */}
          <div className="w-[125%] h-6 sm:h-8 md:h-10 bg-gradient-to-b from-[#3D2010] via-[#261208] to-[#190B05] border-2 border-[#140804] rounded-b-sm shadow-xl flex flex-col items-center justify-between p-1">
            <div className="w-full flex justify-between px-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]" />
            </div>
            {/* Traditional brass plate band at base */}
            <div className="w-full h-1.5 bg-gradient-to-r from-[#8C6826] via-[#E5C97D] to-[#6E4E18] rounded-sm opacity-90" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default TemplePillar;

