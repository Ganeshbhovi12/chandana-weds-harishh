import React from 'react';
import { motion } from 'framer-motion';
import { GoldDivider } from './common/TraditionalMotifs';

export const WeddingWishes = ({ wishesData }) => {
  const heading = wishesData?.heading || "WITH LOVE & BLESSINGS";
  const wish = wishesData?.sampleWish || {
    author: "Keerthana",
    role: "Sister of the Bride",
    salutation: "Dear Chandana and Harish,",
    message: "Wishing you both a lifetime filled with endless love, happiness, laughter and beautiful memories. May your journey together be blessed with understanding, togetherness and countless reasons to smile.",
    closing: "Lots of love and blessings to you both! ❤️"
  };

  return (
    <section id="wishes-section" className="py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-cream/30 relative select-none overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial from-cream/60 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GoldDivider
            subtitle="HEARTFELT BLESSINGS"
            title={heading}
            className="mb-8"
          />
        </motion.div>

        {/* Elegant Message Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="bg-ivory border-[1.5px] border-antiqueGold rounded-3xl p-6 sm:p-10 shadow-card-royal relative"
        >
          {/* Inner Dashed Border */}
          <div className="border border-dashed border-antiqueGold/45 rounded-2xl p-6 sm:p-9 text-center bg-gradient-to-b from-ivory to-cream/20">

            {/* Tiny Heart / Floral Decoration */}
            <div className="flex justify-center mb-4 text-antiqueGold" aria-hidden="true">
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none">
                <path
                  d="M50 82 C22 60, 14 45, 14 31 C14 20, 23 13, 34 13 C41 13, 47 17, 50 22 C53 17, 59 13, 66 13 C77 13, 86 20, 86 31 C86 45, 78 60, 50 82 Z"
                  fill="currentColor"
                  fillOpacity="0.08"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="50" cy="42" r="3" fill="currentColor" />
                <path d="M40 42 Q50 32 60 42" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
                <circle cx="37" cy="30" r="1.8" fill="currentColor" />
                <circle cx="63" cy="30" r="1.8" fill="currentColor" />
              </svg>
            </div>

            {/* Salutation */}
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-darkBrown tracking-wide mb-3">
              {wish.salutation}
            </h3>

            {/* Message Body */}
            <div className="font-heading text-lg sm:text-xl leading-relaxed italic text-darkBrown/90 max-w-lg mx-auto space-y-3">
              <p>
                {wish.message}
              </p>
              <p className="font-semibold text-darkBrown not-italic sm:italic">
                {wish.closing}
              </p>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 max-w-[200px] mx-auto my-6" aria-hidden="true">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-antiqueGold/60" />
              <span className="text-antiqueGold text-xs">❦</span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-antiqueGold/60" />
            </div>

            {/* Author Signature */}
            <div className="font-serifDisplay text-lg sm:text-xl font-bold text-darkBrown tracking-wider">
              {wish.author}
            </div>
            {wish.role && (
              <div className="font-heading text-sm sm:text-base italic text-antiqueGold-dark mt-0.5 tracking-wide">
                {wish.role}
              </div>
            )}

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WeddingWishes;

