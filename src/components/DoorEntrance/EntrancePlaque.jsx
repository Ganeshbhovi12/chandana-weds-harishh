import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, MapPin, Heart } from 'lucide-react';
import { KalashMotif } from '../common/TraditionalMotifs';

export const EntrancePlaque = ({ onOpen, isOpen = false }) => {
  return (
    <motion.div
      className="absolute z-35 flex flex-col items-center justify-center text-center px-4 max-w-lg w-full pointer-events-none"
      initial={{ scale: 0.94, opacity: 0, y: 15 }}
      animate={{
        scale: isOpen ? 1.08 : 1,
        opacity: isOpen ? 0 : 1,
        y: isOpen ? -30 : 0,
      }}
      transition={{
        duration: isOpen ? 0.7 : 0.9,
        ease: "easeOut",
      }}
    >
      {/* Central Royal Medallion Plaque */}
      <div className="relative bg-gradient-to-b from-[#2E1A10]/95 via-[#24130B]/95 to-[#1A0C06]/95 border-2 border-antiqueGold p-6 sm:p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-md pointer-events-auto w-full select-none">
        
        {/* Ornate Corner Accents */}
        <div className="absolute top-2.5 left-2.5 text-antiqueGold text-xs">✦</div>
        <div className="absolute top-2.5 right-2.5 text-antiqueGold text-xs">✦</div>
        <div className="absolute bottom-2.5 left-2.5 text-antiqueGold text-xs">✦</div>
        <div className="absolute bottom-2.5 right-2.5 text-antiqueGold text-xs">✦</div>

        {/* Sacred Traditional Invocation */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-antiqueGold" />
          <span className="font-serif text-antiqueGold-light text-xs sm:text-sm font-semibold tracking-widest uppercase">
            WITH DIVINE BLESSINGS
          </span>
          <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-antiqueGold" />
        </div>

        {/* Sacred Kalash Symbol */}
        <div className="flex justify-center mb-2">
          <KalashMotif className="w-10 h-10 sm:w-12 sm:h-12 text-antiqueGold drop-shadow-md" />
        </div>

        {/* Text 1: "THE WEDDING OF" (As requested) */}
        <p className="font-serifDisplay text-xs sm:text-sm tracking-[0.35em] text-antiqueGold-light uppercase font-bold drop-shadow-sm">
          THE WEDDING OF
        </p>

        {/* Text 2: "CHANDANA & HARISH" (As requested) */}
        <div className="my-1.5 sm:my-2">
          <h1 className="font-script text-4xl sm:text-5xl md:text-6xl text-ivory py-1 drop-shadow-lg tracking-wide leading-none">
            Chandana & Harish
          </h1>
          <p className="font-serifDisplay text-sm sm:text-base md:text-lg font-bold tracking-[0.25em] text-antiqueGold uppercase mt-1">
            CHANDANA & HARISH
          </p>
        </div>

        {/* Decorative Golden Divider */}
        <div className="flex items-center justify-center gap-3 my-3 w-3/4 mx-auto">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-antiqueGold" />
          <span className="text-xs text-antiqueGold-light">❖</span>
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-antiqueGold" />
        </div>

        {/* Text 3: "An Invitation to Celebrate Love" (As requested) */}
        <p className="font-heading text-base sm:text-lg md:text-xl italic text-ivory/90 mb-4 font-normal">
          An Invitation to Celebrate Love
        </p>

        {/* Auspicious Dates & Venue Quick Badge */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-body tracking-wider text-warmBeige/90 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-antiqueGold/40">
            <Calendar className="w-3.5 h-3.5 text-antiqueGold" />
            25 & 26 November 2026
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-antiqueGold/40">
            <MapPin className="w-3.5 h-3.5 text-antiqueGold" />
            Sirigandha Palace, Sira
          </span>
        </div>

        {/* Text 4: Button: "OPEN INVITATION" (As requested) */}
        <div className="relative inline-block w-full sm:w-auto">
          {/* Animated Glow Halo */}
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-antiqueGold via-[#FFF4C8] to-antiqueGold opacity-70 blur-sm animate-pulse" />

          <button
            onClick={onOpen}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:px-10 sm:py-4 bg-gradient-to-r from-antiqueGold-light via-antiqueGold to-antiqueGold-dark text-[#24130B] font-serifDisplay font-bold text-sm sm:text-base tracking-[0.2em] uppercase rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.7)] hover:brightness-110 active:scale-95 transition-all duration-300"
            aria-label="Open Indian Wedding Invitation"
          >
            <span className="font-bold">OPEN INVITATION</span>
            <Sparkles className="w-4 h-4 text-[#24130B] group-hover:rotate-45 transition-transform duration-500" />
          </button>
        </div>

        {/* Tap Door Hint */}
        <p className="text-[11px] font-body text-warmBeige/60 tracking-wider uppercase mt-3">
          (Tap anywhere on the doors or button to enter)
        </p>
      </div>
    </motion.div>
  );
};

export default EntrancePlaque;

