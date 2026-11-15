import React from 'react';

// Single Kuthu Vilakku (Traditional Indian Brass Standing Oil Lamp)
export const KuthuVilakkuLamp = ({ side = "left" }) => {
  return (
    <div
      className={`absolute bottom-2 sm:bottom-4 md:bottom-8 z-30 flex flex-col items-center pointer-events-none ${
        side === "left" ? "left-2 sm:left-6 md:left-12 lg:left-16" : "right-2 sm:right-6 md:right-12 lg:right-16"
      }`}
    >
      {/* 1. Golden Radiant Flame Aura */}
      <div className="absolute top-2 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-r from-[#FFB703]/30 via-[#E85D04]/20 to-transparent blur-xl pointer-events-none" />

      {/* 2. Top Flame (Dancing Flickering Light) */}
      <div className="relative z-10 flex flex-col items-center mb-0.5">
        <div className="w-3.5 h-6 sm:w-4 sm:h-8 md:w-5 md:h-10 bg-gradient-to-t from-[#E85D04] via-[#FFB703] to-[#FFF4C8] rounded-full animate-flame shadow-[0_0_15px_#FFB703]" />
        <div className="w-1.5 h-1.5 rounded-full bg-[#3D2418] -mt-1" />
      </div>

      {/* 3. Lamp Finial (Annapakshi / Sacred Peacock Bird Crest) */}
      <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-b from-[#FFF4C8] via-[#C5A059] to-[#78482D] border border-[#3D2418] shadow-sm flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#FFFDF9]" />
      </div>

      {/* 4. Upper Oil Bowl (Akhand Diya Tier) with 5 Wicks */}
      <div className="relative w-10 sm:w-14 md:w-18 h-3 sm:h-4 md:h-5 bg-gradient-to-r from-[#9E7B34] via-[#E5C97D] to-[#9E7B34] rounded-b-full border-t border-[#FFF4C8] border-b border-[#3D2418] shadow-md flex items-center justify-around px-1">
        <div className="w-1 h-1.5 rounded-full bg-[#FFB703]" />
        <div className="w-1 h-1.5 rounded-full bg-[#FFB703]" />
        <div className="w-1 h-1.5 rounded-full bg-[#FFB703]" />
      </div>

      {/* 5. Central Carved Pillar Stem */}
      <div className="w-2.5 sm:w-3.5 md:w-4 h-24 sm:h-36 md:h-52 bg-gradient-to-r from-[#78482D] via-[#C5A059] to-[#59351F] border-x border-[#3D2418] shadow-inner relative flex flex-col justify-around items-center">
        {/* Carved Rings along the stem */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-4 sm:w-5 md:w-6 h-1.5 sm:h-2 bg-gradient-to-r from-[#E5C97D] via-[#FFF4C8] to-[#9E7B34] rounded-full border border-[#3D2418] shadow-sm"
          />
        ))}
      </div>

      {/* 6. Lower Drip Tray (Decorative Plate) */}
      <div className="w-12 sm:w-18 md:w-24 h-2.5 sm:h-3.5 md:h-4 bg-gradient-to-r from-[#78482D] via-[#E5C97D] to-[#59351F] rounded-b-xl border-t border-[#FFF4C8] border-b border-[#3D2418] shadow-md" />

      {/* 7. Bell-Shaped Stepped Base */}
      <div className="w-14 sm:w-20 md:w-28 h-6 sm:h-8 md:h-10 bg-gradient-to-b from-[#C5A059] via-[#9E7B34] to-[#3D2418] rounded-t-xl border border-[#3D2418] shadow-lg flex flex-col items-center justify-end pb-1">
        <div className="w-16 sm:w-24 md:w-32 h-2 sm:h-2.5 bg-gradient-to-r from-[#3D2418] via-[#E5C97D] to-[#3D2418] rounded-full shadow-md" />
      </div>

      {/* 8. Floor Shadow */}
      <div className="w-20 sm:w-28 md:w-36 h-3 bg-black/60 rounded-full blur-[2px] -mt-1.5" />
    </div>
  );
};

export const KuthuVilakku = () => {
  return (
    <>
      <KuthuVilakkuLamp side="left" />
      <KuthuVilakkuLamp side="right" />
    </>
  );
};

export default KuthuVilakku;

