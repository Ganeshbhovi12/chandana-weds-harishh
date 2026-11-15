import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const DoorEntrance = ({ onOpen }) => {
  const [hasOpened, setHasOpened] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const audioRef = useRef(null);

  // Prevent accidental scrolling or touch dragging while the entrance is active
  useEffect(() => {
    if (!isDismissed) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isDismissed]);

  const handleDoorTap = () => {
    if (hasOpened) return;
    setHasOpened(true);

    // Play subtle traditional wooden door opening creak sound
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio('/door-creak.wav');
        audioRef.current.volume = 0.65;
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.warn('Audio playback handled:', err);
      });
    } catch (e) {
      console.warn('Audio creation handled:', e);
    }

    // Trigger parent callback when door opens
    if (onOpen) {
      onOpen();
    }

    // After 3D door swing completes (at 1.95s), smoothly transition into the wedding invitation page
    setTimeout(() => {
      setIsDismissed(true);
    }, 1950);
  };

  return (
    <AnimatePresence>
      {!isDismissed && (
        <motion.div
          id="grand-temple-entrance"
          onClick={handleDoorTap}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-50 w-screen h-[100svh] overflow-hidden select-none cursor-pointer flex items-center justify-center touch-none bg-[#1A0B05]"
          style={{
            // Warm ivory temple wall texture with soft vignette
            backgroundColor: '#F5EFE4',
            backgroundImage: `
              radial-gradient(circle at 50% 50%, rgba(255, 248, 230, 0.7) 0%, rgba(240, 228, 206, 0.85) 50%, rgba(40, 20, 10, 0.92) 100%)
            `,
          }}
          aria-label="Grand South Indian Traditional Wooden Temple Entrance - Tap to open"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleDoorTap();
            }
          }}
        >
          {/* Subtle Ambient Golden Beam from above */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-b from-[#FFF4C8]/30 via-[#E5C97D]/15 to-transparent blur-3xl pointer-events-none z-5" />

          {/* =========================================================================
              1. DEDICATED MOBILE ENTRANCE (Visible on screens < 640px)
              - Door is the primary focus, occupying ~78-82% of mobile screen width
              - Banana leaves & bells cropped to subtle decorative side accents
              - Complete door, lion knockers, handles & carvings 100% visible
              - Centered vertically & horizontally, fills 100svh with 0 horizontal scroll
             ========================================================================= */}
          <div className="relative sm:hidden w-full h-[100svh] flex items-center justify-center pointer-events-none z-20 px-2">
            <div className="relative w-full max-w-[min(98vw,calc(92svh*450/576))] max-h-[92svh] aspect-[450/576] flex items-center justify-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.92)]">
              
              {/* Divine Warm Golden Radiance Behind Opening Doors */}
              <motion.div
                className="absolute pointer-events-none flex items-center justify-center overflow-hidden z-10"
                style={{
                  left: '28.89%',
                  top: '32.29%',
                  width: '42.22%',
                  height: '59.03%',
                }}
                initial={{ opacity: 0.15, scale: 0.8 }}
                animate={{
                  opacity: hasOpened ? [0.25, 1, 0.92] : 0.2,
                  scale: hasOpened ? [0.8, 2.4, 2.0] : 0.85,
                }}
                transition={{ duration: 2.1, ease: "easeOut" }}
              >
                <div className="w-[300px] h-[300px] rounded-full bg-radial from-[#FFFDF2]/98 via-[#F3DA93]/70 to-transparent blur-2xl" />
              </motion.div>

              {/* 3D Doorway Stage (Left & Right Independent Swinging Door Panels) */}
              <div
                className="absolute z-20 perspective-stage overflow-visible"
                style={{
                  left: '28.89%',
                  top: '32.29%',
                  width: '42.22%',
                  height: '59.03%',
                  perspective: '1800px',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Left Door Panel (Opens towards the left) */}
                <motion.div
                  className="absolute top-0 left-0 w-1/2 h-full door-left-origin"
                  style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                  }}
                  initial={{ rotateY: 0 }}
                  animate={{
                    rotateY: hasOpened ? -112 : 0,
                    boxShadow: hasOpened
                      ? '0 30px 60px rgba(0,0,0,0.95)'
                      : '12px 0 24px rgba(0,0,0,0.85)',
                  }}
                  transition={{
                    duration: 2.0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <img
                    src="/scene-door-left.png"
                    alt="Left Carved Teak Door Panel"
                    className="w-full h-full object-fill pointer-events-none select-none block"
                    draggable={false}
                  />
                </motion.div>

                {/* Right Door Panel (Opens towards the right) */}
                <motion.div
                  className="absolute top-0 right-0 w-1/2 h-full door-right-origin"
                  style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                  }}
                  initial={{ rotateY: 0 }}
                  animate={{
                    rotateY: hasOpened ? 112 : 0,
                    boxShadow: hasOpened
                      ? '0 30px 60px rgba(0,0,0,0.95)'
                      : '-12px 0 24px rgba(0,0,0,0.85)',
                  }}
                  transition={{
                    duration: 2.0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <img
                    src="/scene-door-right.png"
                    alt="Right Carved Teak Door Panel"
                    className="w-full h-full object-fill pointer-events-none select-none block"
                    draggable={false}
                  />
                </motion.div>
              </div>

              {/* Stationary Outer Frame & Subtle Side Accents (Leaves & Bells) */}
              <div className="absolute inset-0 w-full h-full pointer-events-none z-30 select-none">
                <img
                  src="/mobile-scene-frame.png"
                  alt="Stationary Carved Wooden Temple Frame"
                  className="w-full h-full object-fill pointer-events-none select-none block"
                  draggable={false}
                />
              </div>

            </div>
          </div>

          {/* =========================================================================
              2. DESKTOP ENTRANCE (Visible on screens >= 640px)
              - Unchanged full panoramic widescreen temple entrance (1024:576)
              - Full banana tree on left, hanging bells on right, majestic center door
             ========================================================================= */}
          <div className="relative hidden sm:flex w-full h-full items-center justify-center pointer-events-none z-20">
            <div className="relative max-w-full max-h-full aspect-[1024/576] flex items-center justify-center drop-shadow-[0_25px_60px_rgba(0,0,0,0.92)]">
              
              {/* Divine Warm Golden Radiance Behind Opening Doors */}
              <motion.div
                className="absolute pointer-events-none flex items-center justify-center overflow-hidden z-10"
                style={{
                  left: '40.82%',
                  top: '32.29%',
                  width: '18.55%',
                  height: '59.03%',
                }}
                initial={{ opacity: 0.15, scale: 0.8 }}
                animate={{
                  opacity: hasOpened ? [0.25, 1, 0.92] : 0.2,
                  scale: hasOpened ? [0.8, 2.4, 2.0] : 0.85,
                }}
                transition={{ duration: 2.1, ease: "easeOut" }}
              >
                <div className="w-[350px] sm:w-[500px] md:w-[700px] h-[350px] sm:h-[500px] md:h-[700px] rounded-full bg-radial from-[#FFFDF2]/98 via-[#F3DA93]/70 to-transparent blur-2xl" />
              </motion.div>

              {/* 3D Doorway Stage (Left & Right Independent Swinging Door Panels) */}
              <div
                className="absolute z-20 perspective-stage overflow-visible"
                style={{
                  left: '40.82%',
                  top: '32.29%',
                  width: '18.55%',
                  height: '59.03%',
                  perspective: '1800px',
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Left Door Panel (Opens towards the left) */}
                <motion.div
                  className="absolute top-0 left-0 w-1/2 h-full door-left-origin"
                  style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                  }}
                  initial={{ rotateY: 0 }}
                  animate={{
                    rotateY: hasOpened ? -112 : 0,
                    boxShadow: hasOpened
                      ? '0 30px 60px rgba(0,0,0,0.95)'
                      : '12px 0 24px rgba(0,0,0,0.85)',
                  }}
                  transition={{
                    duration: 2.0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <img
                    src="/scene-door-left.png"
                    alt="Left Carved Teak Door Panel"
                    className="w-full h-full object-fill pointer-events-none select-none block"
                    draggable={false}
                  />
                </motion.div>

                {/* Right Door Panel (Opens towards the right) */}
                <motion.div
                  className="absolute top-0 right-0 w-1/2 h-full door-right-origin"
                  style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                  }}
                  initial={{ rotateY: 0 }}
                  animate={{
                    rotateY: hasOpened ? 112 : 0,
                    boxShadow: hasOpened
                      ? '0 30px 60px rgba(0,0,0,0.95)'
                      : '-12px 0 24px rgba(0,0,0,0.85)',
                  }}
                  transition={{
                    duration: 2.0,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <img
                    src="/scene-door-right.png"
                    alt="Right Carved Teak Door Panel"
                    className="w-full h-full object-fill pointer-events-none select-none block"
                    draggable={false}
                  />
                </motion.div>
              </div>

              {/* Stationary Frame & Temple Scene */}
              <div className="absolute inset-0 w-full h-full pointer-events-none z-30 select-none">
                <img
                  src="/scene-frame.png"
                  alt="Stationary Carved Wooden Temple Entrance Scene"
                  className="w-full h-full object-fill pointer-events-none select-none block"
                  draggable={false}
                />
              </div>

            </div>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DoorEntrance;
