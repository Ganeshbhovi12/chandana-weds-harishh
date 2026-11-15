import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ArrowUp } from 'lucide-react';
import { GoldDivider, OrnateCorner, KalashMotif, DiyaMotif, GoldHeartOrnament } from './common/TraditionalMotifs';

export const FinalThankYou = ({ closingData }) => {
  const quote = closingData?.quote || "YOUR PRESENCE WILL MAKE\nOUR DAY MORE SPECIAL";
  const signOff = closingData?.signOff || "With love,";
  const couple = closingData?.couple || "Chandana & Harish";
  const footerText = closingData?.footer || "MADE WITH LOVE";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="thank-you-section" className="py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-ivory relative select-none overflow-hidden">
      
      {/* Subtle Traditional Floral & Radiant Background */}
      <div className="absolute inset-0 bg-radial from-cream/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-antiqueGold/5 blur-3xl pointer-events-none" />

      {/* Outer Delicate Border */}
      <div className="absolute inset-4 sm:inset-8 md:inset-12 border border-antiqueGold/30 rounded-3xl pointer-events-none" />
      <div className="absolute inset-6 sm:inset-10 md:inset-14 border border-antiqueGold/15 rounded-2xl pointer-events-none" />

      {/* Ornate Corner Elements on the section */}
      <OrnateCorner position="top-left" className="w-8 h-8 sm:w-10 sm:h-10 text-antiqueGold" />
      <OrnateCorner position="top-right" className="w-8 h-8 sm:w-10 sm:h-10 text-antiqueGold" />
      <OrnateCorner position="bottom-left" className="w-8 h-8 sm:w-10 sm:h-10 text-antiqueGold" />
      <OrnateCorner position="bottom-right" className="w-8 h-8 sm:w-10 sm:h-10 text-antiqueGold" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">

        {/* Sacred Traditional Top Motif */}
        <motion.div
          className="flex justify-center mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <KalashMotif className="w-12 h-12 text-antiqueGold drop-shadow-sm" />
        </motion.div>

        {/* Traditional Floral Marigold Swag Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2.5 h-2.5 rounded-full bg-[#E85D04]" />
          <div className="w-2 h-2 rounded-full bg-[#FFB703]" />
          <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-antiqueGold to-transparent" />
          <span className="font-serif text-xs uppercase tracking-[0.25em] text-antiqueGold-dark font-bold px-2">
            DHANYAVAAD • THANK YOU
          </span>
          <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-antiqueGold to-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#FFB703]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#E85D04]" />
        </div>

        {/* Main Emotional Thank You Quote (As requested) */}
        <motion.div
          className="my-6 max-w-2xl px-4"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <h2 className="font-serifDisplay text-2xl sm:text-3xl md:text-5xl font-bold text-darkBrown tracking-wider leading-snug md:leading-tight">
            YOUR PRESENCE WILL MAKE<br />OUR DAY MORE SPECIAL
          </h2>
        </motion.div>

        {/* Small Gold Heart Ornament (As requested) */}
        <motion.div
          className="my-4"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <GoldHeartOrnament className="w-14 h-14 sm:w-16 sm:h-16 text-antiqueGold" />
        </motion.div>

        {/* Sign-Off & Couple Names (As requested) */}
        <motion.div
          className="space-y-1 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="font-heading text-lg sm:text-xl italic text-darkBrown/80">
            {signOff}
          </p>
          <h3 className="font-script text-4xl sm:text-5xl md:text-6xl text-antiqueGold-dark py-1">
            {couple}
          </h3>
        </motion.div>

        {/* Scroll back to top button */}
        <motion.button
          onClick={scrollToTop}
          className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-cream hover:bg-cream-dark border border-antiqueGold/50 text-darkBrown font-heading text-xs font-semibold tracking-widest uppercase transition-all shadow-sm mb-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp className="w-3.5 h-3.5 text-antiqueGold group-hover:-translate-y-0.5 transition-transform" />
          <span>Back to Top</span>
        </motion.button>

        {/* Decorative Divider before footer */}
        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-antiqueGold/60 to-transparent mb-6" />

        {/* FOOTER: "MADE WITH LOVE" (As requested) */}
        <footer className="w-full flex flex-col items-center justify-center text-center space-y-1">
          <p className="font-serifDisplay text-xs sm:text-sm font-bold tracking-[0.3em] text-antiqueGold-dark uppercase">
            {footerText}
          </p>
          <p className="font-body text-[11px] text-darkBrown/60 tracking-wider">
            Chandana & Harish • 25 & 26 November 2026 • Sirigandha Palace, Sira
          </p>
        </footer>
      </div>
    </section>
  );
};

export default FinalThankYou;

