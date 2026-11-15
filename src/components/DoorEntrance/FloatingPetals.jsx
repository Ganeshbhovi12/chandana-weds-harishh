import React from 'react';
import { motion } from 'framer-motion';

// Gently drifting Jasmine and Marigold flower petals
export const FloatingPetals = () => {
  const petals = [
    { id: 1, left: '10%', duration: 9, delay: 0, size: 10, type: 'jasmine' },
    { id: 2, left: '22%', duration: 11, delay: 1.5, size: 14, type: 'marigold' },
    { id: 3, left: '35%', duration: 10, delay: 3, size: 8, type: 'jasmine' },
    { id: 4, left: '50%', duration: 12, delay: 0.8, size: 16, type: 'marigold' },
    { id: 5, left: '65%', duration: 9.5, delay: 2, size: 11, type: 'jasmine' },
    { id: 6, left: '78%', duration: 11.5, delay: 3.5, size: 15, type: 'marigold' },
    { id: 7, left: '88%', duration: 10.2, delay: 1.2, size: 9, type: 'jasmine' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-25">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute -top-6"
          style={{ left: petal.left }}
          initial={{ y: -20, opacity: 0, rotate: 0 }}
          animate={{
            y: ['0vh', '105vh'],
            x: [0, 20, -15, 10, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.85, 0.85, 0],
          }}
          transition={{
            duration: petal.duration,
            repeat: Infinity,
            delay: petal.delay,
            ease: "easeInOut",
          }}
        >
          {petal.type === 'marigold' ? (
            <div
              style={{ width: `${petal.size}px`, height: `${petal.size}px` }}
              className="rounded-full bg-gradient-to-br from-[#FFB703] to-[#E85D04] opacity-80 shadow-sm"
            />
          ) : (
            <div
              style={{ width: `${petal.size}px`, height: `${petal.size * 0.7}px` }}
              className="rounded-full bg-[#FFFDF9] border border-[#E5C97D]/50 shadow-[0_0_4px_rgba(255,255,255,0.8)]"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingPetals;

