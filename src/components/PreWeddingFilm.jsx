import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Film } from 'lucide-react';

export const PreWeddingFilm = ({ filmData }) => {
  const heading = filmData?.heading || "OUR PRE-WEDDING FILM";
  const subtitle = filmData?.subtitle || "Every love story has a beautiful beginning.";
  const embedUrl = filmData?.embedUrl || "https://drive.google.com/file/d/1sFCBzoL7MLKU9CTcZ3Z9ss97Q-hHu2w3/preview";
  const watchUrl = filmData?.watchUrl || "https://drive.google.com/file/d/1sFCBzoL7MLKU9CTcZ3Z9ss97Q-hHu2w3/view";
  const poster = filmData?.poster || "/couple-web.jpg";

  const [isPlaying, setIsPlaying] = useState(false);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [iframeError, setIframeError] = useState(false);
  const containerRef = useRef(null);

  // Lazy-load trigger: detect when section approaches viewport
  useEffect(() => {
    if (!containerRef.current || typeof IntersectionObserver === 'undefined') {
      setIsNearViewport(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNearViewport(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '300px 0px' }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const handleStartPlay = () => {
    setIsPlaying(true);
  };

  return (
    <section
      ref={containerRef}
      id="film-section"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 bg-cream-light relative select-none overflow-hidden"
    >
      {/* Subtle Warm Radiant Ambient Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial from-antiqueGold/10 via-cream/30 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* 1. SECTION SPACING: Balanced vertical spacing with reduced gap to video */}
        <div className="flex flex-col items-center text-center mb-5 sm:mb-6">
          {/* Eyebrow Label */}
          <span className="font-heading text-xs sm:text-sm tracking-[0.25em] text-antiqueGold-dark font-semibold uppercase mb-1">
            CINEMATIC CELEBRATION
          </span>

          {/* Delicate Antique Gold Divider Line */}
          <div className="flex items-center justify-center gap-2.5 w-44 sm:w-56 my-1">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-antiqueGold/60 to-antiqueGold" />
            <span className="text-antiqueGold text-xs">✦</span>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-antiqueGold/60 to-antiqueGold" />
          </div>

          {/* Main Heading */}
          <h2 className="font-serifDisplay text-2xl sm:text-3xl md:text-4xl text-darkBrown tracking-wider font-bold mt-1 mb-1">
            {heading}
          </h2>

          {/* Subtitle */}
          <p className="font-heading text-sm sm:text-base italic text-darkBrown/80 max-w-lg mx-auto">
            "{subtitle}"
          </p>
        </div>

        {/* 2. VIDEO PLAYER: Proper 16:9 Aspect Ratio with Single Antique-Gold Border */}
        <motion.div
          className="relative w-full aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-antiqueGold/80 sm:border-2 shadow-[0_12px_36px_rgba(46,26,16,0.15)] bg-ivory"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* STATE A: Poster Image with Centered Play Button (Before Playback) */}
          {!isPlaying ? (
            <div
              onClick={handleStartPlay}
              className="absolute inset-0 cursor-pointer w-full h-full group z-20"
              role="button"
              tabIndex={0}
              aria-label="Play Pre-Wedding Film"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleStartPlay();
                }
              }}
            >
              {/* Couple's Preview Photograph: Brighter, Centered, object-cover revealing Chandana & Harish without cropping faces/bodies */}
              <img
                src={poster}
                alt="Chandana & Harish Pre-Wedding Film"
                className="w-full h-full object-cover object-[center_54%] block transform transition-transform duration-700 group-hover:scale-103"
                loading="lazy"
                decoding="async"
              />

              {/* Natural, Bright, Warm Cinematic Scrim (Faces remain clear and bright) */}
              <div className="absolute inset-0 bg-gradient-to-t from-darkBrown/60 via-darkBrown/5 to-darkBrown/40 pointer-events-none" />

              {/* 4. OVERLAY TEXT (TOP): Clean pill badge with ample headroom above couple */}
              <div className="absolute top-3 sm:top-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-1 sm:py-1.5 rounded-full bg-darkBrown/65 backdrop-blur-md border border-antiqueGold/60 shadow-md pointer-events-none">
                <Film className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-antiqueGold-light" />
                <span className="font-serifDisplay text-[9px] sm:text-[11px] font-bold tracking-[0.2em] text-ivory uppercase whitespace-nowrap">
                  CHANDANA &amp; HARISH · PRE-WEDDING FILM
                </span>
              </div>

              {/* 3. PLAY BUTTON: Centered precisely in 16:9 canvas on desktop and mobile */}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center pointer-events-auto"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
              >
                {/* Subtle Radiant Halo */}
                <div className="absolute w-16 h-16 sm:w-22 sm:h-22 rounded-full bg-antiqueGold/40 blur-md pointer-events-none" />

                {/* Circular Gold Button */}
                <div className="relative w-13 h-13 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#FFF6D6] via-[#C5A059] to-[#8B5E34] border-2 border-ivory/95 shadow-[0_10px_28px_rgba(20,10,5,0.45)] flex items-center justify-center text-darkBrown transition-all duration-300">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 fill-current translate-x-0.5 text-[#24130B]" />
                </div>
              </motion.div>

              {/* 4. OVERLAY TEXT (BOTTOM): Readable click prompt with clean spacing from couple */}
              <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none">
                <div className="px-3.5 sm:px-4 py-1 rounded-full bg-darkBrown/60 backdrop-blur-sm border border-antiqueGold/45 shadow-md">
                  <p className="font-serifDisplay text-[10px] sm:text-xs md:text-sm tracking-[0.2em] text-ivory font-bold uppercase whitespace-nowrap">
                    CLICK TO WATCH OUR STORY
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* STATE B: Active Google Drive Embedded Player */
            isNearViewport && (
              <iframe
                title="Pre-Wedding Film of Chandana & Harish"
                src={`${embedUrl}?autoplay=1`}
                className="w-full h-full border-0 block"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen={true}
                loading="lazy"
                onError={() => setIframeError(true)}
              />
            )
          )}
        </motion.div>

        {/* 5. WATCH FULL VIDEO BUTTON: Centered, clean fallback for browser restrictions */}
        <motion.div
          className="mt-5 sm:mt-7 flex flex-col items-center justify-center gap-1.5"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full border border-antiqueGold hover:border-antiqueGold-dark bg-ivory/80 hover:bg-antiqueGold text-darkBrown hover:text-ivory font-serifDisplay font-bold text-xs sm:text-sm tracking-[0.18em] uppercase transition-all duration-300 shadow-sm hover:shadow-md active:scale-95"
            title="Watch full pre-wedding film on Google Drive"
          >
            <Film className="w-3.5 h-3.5 text-antiqueGold group-hover:text-ivory transition-colors" />
            <span>WATCH FULL VIDEO</span>
            <ExternalLink className="w-3 h-3 text-antiqueGold/80 group-hover:text-ivory transition-colors" />
          </a>

          <span className="text-[11px] font-heading text-darkBrown/60 tracking-wider text-center">
            If playback is restricted in your browser, tap above to open directly in Google Drive
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default PreWeddingFilm;
