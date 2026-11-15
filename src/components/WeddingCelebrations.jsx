import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { GoldDivider, OrnateCorner, KalashMotif, DiyaMotif } from './common/TraditionalMotifs';

export const WeddingCelebrations = ({ celebrationsData }) => {
  const events = celebrationsData?.events || [];
  const heading = celebrationsData?.heading || "JOIN US IN OUR CELEBRATION";
  const subtitle = celebrationsData?.subtitle || "We look forward to celebrating these auspicious moments in your cherished presence.";

  // 1. Live Countdown Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isComplete: false,
  });

  useEffect(() => {
    // Target date: Reception starts 25 Nov 2026 at 8:00 PM IST (UTC+5:30)
    const target = new Date("2026-11-25T20:00:00+05:30").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isComplete: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 2. Google Calendar URL Generator
  const generateGoogleCalendarUrl = (event) => {
    const title = encodeURIComponent(`Wedding of Chandana & Harish - ${event.title}`);
    const details = encodeURIComponent(
      `${event.description}\n\nVenue: ${event.venue}, ${event.location}\nAttire: ${event.attire}`
    );
    const location = encodeURIComponent(`${event.venue}, ${event.location}`);
    const dates = event.googleDateString; // e.g. "20261125T143000Z/20261125T173000Z"

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  return (
    <section id="celebrations-section" className="py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-cream-light relative select-none">
      
      {/* Background Subtle Floral Mandalas */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-radial from-antiqueGold/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-radial from-antiqueGold/10 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Heading & Subtitle */}
        <GoldDivider title={heading} subtitle="AUSPICIOUS EVENTS" />
        <p className="font-heading text-sm sm:text-base md:text-lg text-center italic text-darkBrown/80 max-w-2xl mx-auto -mt-3 mb-12">
          {subtitle}
        </p>

        {/* 1. Auspicious Countdown Timer Bar */}
        <motion.div
          className="relative max-w-3xl mx-auto mb-16 p-6 sm:p-8 bg-ivory rounded-3xl border-2 border-antiqueGold shadow-card-royal text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <OrnateCorner position="top-left" className="w-6 h-6 text-antiqueGold" />
          <OrnateCorner position="top-right" className="w-6 h-6 text-antiqueGold" />
          <OrnateCorner position="bottom-left" className="w-6 h-6 text-antiqueGold" />
          <OrnateCorner position="bottom-right" className="w-6 h-6 text-antiqueGold" />

          <div className="flex items-center justify-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-antiqueGold" />
            <span className="font-serifDisplay text-xs sm:text-sm font-bold tracking-[0.25em] text-antiqueGold-dark uppercase">
              COUNTDOWN TO THE CELEBRATION
            </span>
            <Sparkles className="w-4 h-4 text-antiqueGold" />
          </div>

          <p className="font-heading text-sm text-darkBrown/75 italic mb-6">
            Counting every sacred moment until the auspicious beginning
          </p>

          {/* Countdown Boxes */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-6 max-w-lg mx-auto">
            {/* Days */}
            <div className="p-3 sm:p-4 rounded-2xl bg-cream border border-antiqueGold/40 shadow-sm flex flex-col items-center">
              <span className="font-serifDisplay text-2xl sm:text-4xl md:text-5xl font-bold text-darkBrown">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-heading font-semibold uppercase tracking-widest text-antiqueGold-dark mt-1">
                Days
              </span>
            </div>

            {/* Hours */}
            <div className="p-3 sm:p-4 rounded-2xl bg-cream border border-antiqueGold/40 shadow-sm flex flex-col items-center">
              <span className="font-serifDisplay text-2xl sm:text-4xl md:text-5xl font-bold text-darkBrown">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-heading font-semibold uppercase tracking-widest text-antiqueGold-dark mt-1">
                Hours
              </span>
            </div>

            {/* Minutes */}
            <div className="p-3 sm:p-4 rounded-2xl bg-cream border border-antiqueGold/40 shadow-sm flex flex-col items-center">
              <span className="font-serifDisplay text-2xl sm:text-4xl md:text-5xl font-bold text-darkBrown">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-heading font-semibold uppercase tracking-widest text-antiqueGold-dark mt-1">
                Mins
              </span>
            </div>

            {/* Seconds */}
            <div className="p-3 sm:p-4 rounded-2xl bg-cream border border-antiqueGold/40 shadow-sm flex flex-col items-center">
              <span className="font-serifDisplay text-2xl sm:text-4xl md:text-5xl font-bold text-antiqueGold-dark animate-pulse">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
              <span className="text-[10px] sm:text-xs font-heading font-semibold uppercase tracking-widest text-antiqueGold-dark mt-1">
                Secs
              </span>
            </div>
          </div>
        </motion.div>

        {/* 2. The Two Elegant Event Cards (Reception & Muhurtham) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {events.map((event, index) => {
            const isMuhurtham = event.id === "muhurtham";

            return (
              <motion.div
                key={event.id}
                className={`relative rounded-3xl p-6 sm:p-8 md:p-10 border-2 transition-all duration-500 hover:shadow-2xl flex flex-col justify-between ${
                  isMuhurtham
                    ? "bg-ivory border-antiqueGold shadow-gold-soft"
                    : "bg-[#FFFDF9] border-antiqueGold/60 shadow-card-royal"
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Traditional Corner Accents */}
                <OrnateCorner position="top-left" className="w-8 h-8 text-antiqueGold" />
                <OrnateCorner position="top-right" className="w-8 h-8 text-antiqueGold" />
                <OrnateCorner position="bottom-left" className="w-8 h-8 text-antiqueGold" />
                <OrnateCorner position="bottom-right" className="w-8 h-8 text-antiqueGold" />

                <div>
                  {/* Event Title & Elegant Gold Event Icon Header */}
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-serifDisplay text-3xl sm:text-4xl font-bold text-darkBrown tracking-wide">
                      {event.title}
                    </h3>

                    {/* Elegant Gold Event Icon */}
                    <div className="w-12 h-12 rounded-full bg-cream border border-antiqueGold flex items-center justify-center text-antiqueGold shadow-sm shrink-0">
                      {isMuhurtham ? (
                        <KalashMotif className="w-7 h-7 text-antiqueGold" />
                      ) : (
                        <DiyaMotif className="w-7 h-7 text-antiqueGold" />
                      )}
                    </div>
                  </div>

                  {/* Subtle Flower Decoration Swag */}
                  <div className="flex items-center gap-1.5 mb-5 mt-1">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#E85D04]" />
                    <div className="w-2 h-2 rounded-full bg-[#FFB703]" />
                    <div className="h-[1px] w-20 bg-gradient-to-r from-antiqueGold to-transparent" />
                  </div>

                  {/* Date & Time Typography Block */}
                  <div className="space-y-3.5 my-6 p-5 sm:p-6 rounded-2xl bg-cream/50 border border-antiqueGold/30">
                    {/* Day & Date */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-ivory border border-antiqueGold/40 flex items-center justify-center text-antiqueGold shrink-0">
                        <Calendar className="w-4 h-4 text-antiqueGold" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-antiqueGold-dark font-bold font-heading">
                          {event.day}
                        </p>
                        <p className="font-serifDisplay text-lg sm:text-xl font-bold text-darkBrown">
                          {event.dateString}
                        </p>
                      </div>
                    </div>

                    {/* Time */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-ivory border border-antiqueGold/40 flex items-center justify-center text-antiqueGold shrink-0">
                        <Clock className="w-4 h-4 text-antiqueGold" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-antiqueGold-dark font-bold font-heading">
                          Auspicious Timing
                        </p>
                        <p className="font-serifDisplay text-lg sm:text-xl font-bold text-darkBrown">
                          {event.time}
                        </p>
                      </div>
                    </div>

                    {/* Venue */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-ivory border border-antiqueGold/40 flex items-center justify-center text-antiqueGold shrink-0">
                        <MapPin className="w-4 h-4 text-antiqueGold" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-widest text-antiqueGold-dark font-bold font-heading">
                          Venue
                        </p>
                        <p className="font-serifDisplay text-base sm:text-lg font-bold text-darkBrown">
                          {event.venue}
                        </p>
                        <p className="text-xs font-body text-darkBrown/75">
                          {event.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Event Description */}
                  <p className="font-heading text-sm text-darkBrown/85 leading-relaxed italic mb-6">
                    {event.description}
                  </p>
                </div>

                {/* Add-to-Calendar Action Button */}
                <div className="pt-5 border-t border-antiqueGold/30">
                  <a
                    href={generateGoogleCalendarUrl(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-full bg-antiqueGold text-ivory hover:bg-antiqueGold-dark font-serifDisplay text-xs sm:text-sm font-bold tracking-[0.16em] uppercase transition-all duration-300 shadow-sm hover:shadow-md hover:brightness-105 active:scale-95"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Add to Google Calendar</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WeddingCelebrations;
