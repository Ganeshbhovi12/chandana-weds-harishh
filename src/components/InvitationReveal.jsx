import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, Sparkles } from 'lucide-react';
import { GoldDivider, OrnateCorner, KalashMotif } from './common/TraditionalMotifs';

export const InvitationReveal = ({
  invitationImage = "/invitation.jpg",
  fallbackImage = "/couple-web.jpg",
  isDoorOpen = false,
}) => {
  const [currentSrc, setCurrentSrc] = useState(invitationImage);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    if (!hasError && currentSrc !== fallbackImage) {
      setCurrentSrc(fallbackImage);
      setHasError(true);
    }
  };

  return (
    <section
      id="invitation-section"
      className="relative min-h-screen py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-cream-light overflow-hidden flex flex-col justify-center items-center select-none"
    >
      {/* Background Subtle Traditional Aura */}
      <div className="absolute inset-0 bg-radial from-antiqueGold/10 via-cream/40 to-ivory pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-antiqueGold/5 blur-3xl pointer-events-none" />

      {/* Outer Decorative Double Border Framing the Section */}
      <div className="absolute inset-3 sm:inset-6 md:inset-8 border border-antiqueGold/30 rounded-2xl pointer-events-none" />
      <div className="absolute inset-4 sm:inset-7 md:inset-10 border border-antiqueGold/15 rounded-xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center">
        
        {/* Divine Shloka & Section Header */}
        <motion.div
          className="text-center space-y-2 mb-8 sm:mb-10 max-w-2xl px-2"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div className="flex justify-center mb-1">
            <KalashMotif className="w-10 h-10 sm:w-12 sm:h-12 text-antiqueGold" />
          </div>

          <span className="font-serif text-xs sm:text-sm tracking-[0.3em] text-antiqueGold-dark font-bold uppercase">
            WITH DIVINE BLESSINGS
          </span>

          <h2 className="font-serifDisplay text-2xl sm:text-3xl md:text-4xl text-darkBrown font-bold tracking-wider">
            THE WEDDING INVITATION
          </h2>

          <p className="font-heading text-sm sm:text-base md:text-lg italic text-darkBrown/80 max-w-xl mx-auto pt-1">
            "With the divine blessings of our families and elders, we joyfully invite you to witness our sacred union."
          </p>
        </motion.div>

        {/* The Exact Uploaded Invitation Card Display */}
        <motion.div
          className="relative group w-full max-w-3xl"
          initial={{ opacity: 0, scale: 0.93, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Soft Golden Halo Behind the Card Frame */}
          <div className="absolute -inset-3 sm:-inset-5 rounded-3xl bg-gradient-to-b from-antiqueGold/25 via-cream/50 to-antiqueGold/20 blur-xl pointer-events-none" />

          {/* Elegant Royal Indian Frame with Soft Cream Background & Subtle Shadow */}
          <div className="relative p-3.5 sm:p-6 md:p-8 bg-ivory rounded-3xl border-2 border-antiqueGold/80 shadow-[0_20px_50px_rgba(46,26,16,0.18)] transition-all duration-500 hover:shadow-[0_25px_60px_rgba(197,160,89,0.3)]">
            
            {/* Ornate Corner Accents */}
            <OrnateCorner position="top-left" className="w-7 h-7 sm:w-10 sm:h-10 text-antiqueGold" />
            <OrnateCorner position="top-right" className="w-7 h-7 sm:w-10 sm:h-10 text-antiqueGold" />
            <OrnateCorner position="bottom-left" className="w-7 h-7 sm:w-10 sm:h-10 text-antiqueGold" />
            <OrnateCorner position="bottom-right" className="w-7 h-7 sm:w-10 sm:h-10 text-antiqueGold" />

            {/* Inner Filigree Border */}
            <div className="absolute inset-2 sm:inset-3 border border-antiqueGold/40 rounded-2xl pointer-events-none" />

            {/* Exact Invitation Image Container - Unaltered, Uncropped */}
            <div className="relative w-full overflow-hidden rounded-xl bg-warmBeige/20 flex items-center justify-center">
              <img
                src={currentSrc}
                alt="Original Wedding Invitation of Chandana & Harish"
                onError={handleImageError}
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-sm transition-transform duration-700 group-hover:scale-[1.01]"
                loading="eager"
              />

              {/* View Full Screen Zoom Badge Button */}
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-full bg-darkBrown/85 hover:bg-darkBrown text-ivory text-xs sm:text-sm font-heading font-medium tracking-wider uppercase border border-antiqueGold shadow-lg backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
                title="View full resolution invitation"
              >
                <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-antiqueGold" />
                <span>View Fullscreen</span>
              </button>
            </div>

            {/* Traditional Flower Swag Ornament Hugging the Frame */}
            <div className="flex items-center justify-center gap-2 mt-4 pt-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#E85D04]" />
              <div className="w-2 h-2 rounded-full bg-[#FFB703]" />
              <span className="font-serif text-xs sm:text-sm uppercase tracking-[0.25em] text-antiqueGold-dark font-semibold px-2">
                A SACRED UNION
              </span>
              <div className="w-2 h-2 rounded-full bg-[#FFB703]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#E85D04]" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal for High-Resolution Full View */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
          >
            <div
              className="relative max-w-5xl max-h-[92vh] w-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-12 right-0 p-2 text-ivory hover:text-antiqueGold transition-colors flex items-center gap-1.5 text-sm font-heading tracking-widest uppercase"
                aria-label="Close Fullscreen View"
              >
                <span>Close</span>
                <X className="w-5 h-5" />
              </button>

              {/* Full Resolution Image */}
              <div className="relative p-2 bg-ivory/95 rounded-2xl border-2 border-antiqueGold shadow-2xl overflow-hidden max-h-[85vh]">
                <img
                  src={currentSrc}
                  alt="Full Wedding Invitation"
                  className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg"
                />
              </div>

              <p className="text-xs font-body text-warmBeige/80 tracking-widest uppercase mt-3">
                Wedding Invitation of Chandana & Harish
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InvitationReveal;

