import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  Maximize2,
  Sparkles,
  Heart
} from 'lucide-react';
import { GoldDivider, OrnateCorner } from './common/TraditionalMotifs';

export const PhotoGallery = ({ galleryData }) => {
  const photos = galleryData?.photos || [];
  const heading = galleryData?.heading || "A JOURNEY OF LOVE";
  const subtitle = galleryData?.subtitle || "Two hearts, one beautiful journey.";
  const featuredPhoto = galleryData?.featuredPhoto || photos[0];

  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const sectionRef = useRef(null);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 40;
    const isRightSwipe = distance < -40;
    if (isLeftSwipe) {
      handleNextPhoto();
    } else if (isRightSwipe) {
      handlePrevPhoto();
    }
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
      }
      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, photos.length]);

  const handleNextPhoto = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  const handlePrevPhoto = (e) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const toggleExpand = () => {
    if (isExpanded) {
      setIsExpanded(false);
      // Smoothly scroll back to the top of gallery when collapsing
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="gallery-section"
      className="py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-ivory relative select-none"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading & Subtitle */}
        <GoldDivider title={heading} subtitle={subtitle} />

        {/* 1. SINGLE FEATURED WEDDING PHOTOGRAPH (Centred & Large) */}
        {featuredPhoto && (
          <motion.div
            id="featured-photo-card"
            className="relative w-full max-w-[850px] mx-auto mt-6 mb-10 group cursor-pointer"
            initial={{ opacity: 0, y: 25, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setSelectedIndex(0)}
          >
            {/* Soft Golden Halo Aura behind the featured frame */}
            <div className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-b from-antiqueGold/20 via-cream/40 to-antiqueGold/20 blur-xl pointer-events-none" />

            {/* Premium Traditional Frame */}
            <div className="relative p-1.5 sm:p-3 bg-ivory rounded-2xl sm:rounded-3xl border sm:border-2 border-antiqueGold/80 shadow-[0_12px_32px_rgba(46,26,16,0.12)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(197,160,89,0.3)]">
              
              {/* Ornate Corner Accents */}
              <OrnateCorner position="top-left" className="w-5 h-5 sm:w-8 sm:h-8 text-antiqueGold" />
              <OrnateCorner position="top-right" className="w-5 h-5 sm:w-8 sm:h-8 text-antiqueGold" />
              <OrnateCorner position="bottom-left" className="w-5 h-5 sm:w-8 sm:h-8 text-antiqueGold" />
              <OrnateCorner position="bottom-right" className="w-5 h-5 sm:w-8 sm:h-8 text-antiqueGold" />

              {/* Inner Filigree Border */}
              <div className="absolute inset-1.5 sm:inset-3 border border-antiqueGold/35 rounded-xl sm:rounded-2xl pointer-events-none" />

              {/* Large Image Container with Separate Mobile 3:4 & Desktop 16:9 Aspect Ratio */}
              <div className="relative w-full aspect-[3/4] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden bg-warmBeige/20 shadow-inner">
                <img
                  src={featuredPhoto.src}
                  alt={featuredPhoto.alt || "THE SACRED UNION - Chandana & Harish"}
                  className="w-full h-full object-cover object-[center_48%] sm:object-[center_52%] transform transition-transform duration-700 group-hover:scale-102"
                  loading="eager"
                />

                {/* Subtle Gradient Overlay with Caption */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-darkBrown/90 via-darkBrown/35 to-transparent flex flex-col justify-end p-4 sm:p-7 text-ivory">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-serifDisplay text-lg sm:text-2xl md:text-3xl font-bold uppercase tracking-wider text-ivory drop-shadow-md">
                        THE SACRED UNION
                      </h3>
                      <p className="font-heading text-xs sm:text-sm md:text-base italic text-goldLight mt-0.5">
                        Chandana &amp; Harish united by sacred vows and lifelong love
                      </p>
                    </div>

                    {/* Zoom Icon Button */}
                    <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-darkBrown/70 border border-antiqueGold/80 flex items-center justify-center text-ivory shadow-md backdrop-blur-sm group-hover:scale-110 transition-transform">
                      <Maximize2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-antiqueGold" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Traditional Floral Garland Swag Hugging the Bottom Frame */}
              <div className="flex items-center justify-center gap-2 mt-3 pt-1">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E85D04]" />
                <div className="w-2 h-2 rounded-full bg-[#FFB703]" />
                <span className="font-serif text-xs uppercase tracking-[0.25em] text-antiqueGold-dark font-semibold px-2">
                  THE SACRED UNION
                </span>
                <div className="w-2 h-2 rounded-full bg-[#FFB703]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#E85D04]" />
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. ELEGANT ANTIQUE-GOLD OUTLINED "VIEW MORE / SHOW LESS" BUTTON */}
        <div className="flex flex-col items-center justify-center my-6">
          <motion.button
            id="btn-toggle-gallery"
            onClick={toggleExpand}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex items-center justify-center gap-3 px-8 py-3.5 sm:px-10 sm:py-4 rounded-full border-2 border-antiqueGold bg-transparent hover:bg-antiqueGold text-darkBrown hover:text-ivory font-serifDisplay font-bold text-xs sm:text-sm tracking-[0.22em] uppercase transition-all duration-300 shadow-sm"
            aria-expanded={isExpanded}
            aria-label={isExpanded ? "Show fewer wedding photographs" : "View all wedding photographs"}
          >
            <span>{isExpanded ? "SHOW LESS" : "VIEW MORE"}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-antiqueGold group-hover:text-ivory transition-transform duration-300 group-hover:-translate-y-0.5" />
            ) : (
              <ChevronDown className="w-4 h-4 text-antiqueGold group-hover:text-ivory transition-transform duration-300 group-hover:translate-y-0.5" />
            )}
          </motion.button>

          {!isExpanded && (
            <p className="text-[11px] font-heading uppercase tracking-widest text-darkBrown/60 mt-2.5">
              Tap to view all {photos.length} wedding photographs
            </p>
          )}
        </div>

        {/* 3. EXPANDABLE GALLERY GRID (Desktop: 3-column, Tablet: 2-column, Mobile: 2-column) */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="overflow-hidden pt-6"
            >
              {/* Grid Layout: Desktop: 3-col | Tablet: 2-col | Mobile: 2-col (Excludes featured photo c1 to prevent duplication) */}
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
                {photos.slice(1).map((photo, sliceIndex) => {
                  const originalIndex = sliceIndex + 1;
                  return (
                    <motion.div
                      key={photo.id}
                      className="group relative rounded-2xl overflow-hidden bg-cream border border-antiqueGold/40 shadow-card-royal cursor-pointer aspect-[3/4] sm:aspect-[4/3] transform transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl hover:border-antiqueGold"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: (sliceIndex % 6) * 0.07 }}
                      onClick={() => setSelectedIndex(originalIndex)}
                    >
                      {/* Photo Image */}
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />

                      {/* Hover Overlay with Caption */}
                      <div className="absolute inset-0 bg-gradient-to-t from-darkBrown/90 via-darkBrown/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5 text-ivory">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-antiqueGold font-semibold">
                            Moment #{originalIndex + 1}
                          </span>
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-antiqueGold/25 border border-antiqueGold flex items-center justify-center text-ivory">
                            <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-antiqueGold" />
                          </div>
                        </div>

                        <h4 className="font-serifDisplay text-sm sm:text-base md:text-lg font-bold mt-1 text-ivory leading-tight line-clamp-1">
                          {photo.title}
                        </h4>
                        <p className="font-heading text-[11px] sm:text-xs italic text-warmBeige line-clamp-1 mt-0.5">
                          {photo.subtitle}
                        </p>
                      </div>

                      {/* Corner Flourish */}
                      <div className="absolute top-2 right-2 text-antiqueGold/70 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        ✦
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Collapse Button when expanded */}
              <div className="flex justify-center mt-10">
                <button
                  onClick={toggleExpand}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-antiqueGold/60 bg-cream hover:bg-cream-dark text-darkBrown font-serifDisplay text-xs font-bold tracking-widest uppercase transition-all shadow-sm"
                >
                  <ChevronUp className="w-4 h-4 text-antiqueGold" />
                  <span>SHOW LESS</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 4. FULL-SCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedIndex !== null && photos[selectedIndex] && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 select-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Controls: Counter & Close Button */}
              <div className="w-full flex items-center justify-between text-ivory mb-3 px-2">
                <span className="text-xs font-serifDisplay tracking-widest uppercase text-antiqueGold font-semibold">
                  Moment {selectedIndex + 1} of {photos.length}
                </span>

                <button
                  onClick={() => setSelectedIndex(null)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-darkBrown/80 hover:bg-darkBrown text-ivory text-xs font-heading tracking-wider uppercase border border-antiqueGold/50 transition-colors"
                  aria-label="Close Fullscreen View"
                >
                  <span>Close</span>
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Lightbox Main Image */}
              <div 
                className="relative p-2 bg-cream rounded-2xl border-2 border-antiqueGold shadow-2xl overflow-hidden max-h-[75vh] flex items-center justify-center touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={photos[selectedIndex].highRes || photos[selectedIndex].src}
                  alt={photos[selectedIndex].alt}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
                />

                {/* Left Arrow Button */}
                <button
                  onClick={handlePrevPhoto}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-darkBrown/80 hover:bg-darkBrown text-ivory flex items-center justify-center border border-antiqueGold shadow-lg transition-transform active:scale-95"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={handleNextPhoto}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-darkBrown/80 hover:bg-darkBrown text-ivory flex items-center justify-center border border-antiqueGold shadow-lg transition-transform active:scale-95"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Image Caption Footer */}
              <div className="text-center mt-3 text-ivory">
                <h4 className="font-serifDisplay text-xl sm:text-2xl font-bold text-ivory">
                  {photos[selectedIndex].title}
                </h4>
                <p className="font-heading text-xs sm:text-sm italic text-warmBeige">
                  {photos[selectedIndex].subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
