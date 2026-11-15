import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Car, Compass, ExternalLink, Phone } from 'lucide-react';
import { GoldDivider, OrnateCorner, KalashMotif } from './common/TraditionalMotifs';

export const WeddingLocation = ({ locationData }) => {
  const heading = locationData?.heading || "WE CAN'T WAIT TO SEE YOU";
  const venueName = locationData?.venueName || "SIRIGANDHA PALACE";
  const venueAddress = locationData?.venueAddress || "SIRA 572137";
  const fullAddress = locationData?.fullAddress || "Sirigandha Palace, NH 48, Sira, Tumkur District, Karnataka - 572137";
  const mapEmbedUrl = locationData?.mapEmbedUrl || "https://maps.google.com/maps?q=Sirigandha+Palace,+Sira,+Karnataka+572137&t=&z=15&ie=UTF8&iwloc=&output=embed";
  const directionsUrl = locationData?.directionsUrl || "https://www.google.com/maps/dir/?api=1&destination=Sirigandha+Palace,+Sira,+Karnataka+572137";

  return (
    <section id="location-section" className="py-20 md:py-28 px-4 sm:px-6 md:px-12 bg-ivory relative select-none">
      
      {/* Background Subtle Traditional Arch */}
      <div className="absolute inset-0 bg-radial from-cream/60 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Section Heading & Subtitle */}
        <GoldDivider title={heading} subtitle="VENUE & DIRECTIONS" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mt-10">
          
          {/* Left Column: Venue Details Card */}
          <motion.div
            className="lg:col-span-5 relative p-6 sm:p-8 md:p-10 bg-cream-light rounded-3xl border-2 border-antiqueGold shadow-card-royal flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <OrnateCorner position="top-left" className="w-8 h-8 text-antiqueGold" />
            <OrnateCorner position="top-right" className="w-8 h-8 text-antiqueGold" />
            <OrnateCorner position="bottom-left" className="w-8 h-8 text-antiqueGold" />
            <OrnateCorner position="bottom-right" className="w-8 h-8 text-antiqueGold" />

            <div>
              {/* Venue Icon & Badge */}
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-antiqueGold" />
                <span className="font-serifDisplay text-xs uppercase tracking-widest text-antiqueGold-dark font-bold">
                  Auspicious Venue
                </span>
              </div>

              {/* Exact Venue Name */}
              <h3 className="font-serifDisplay text-3xl sm:text-4xl font-bold text-darkBrown tracking-wider">
                {venueName}
              </h3>

              {/* Exact Venue Address */}
              <p className="font-serifDisplay text-xl sm:text-2xl font-semibold text-antiqueGold-dark mt-1 mb-4">
                {venueAddress}
              </p>

              {/* Flower ornament */}
              <div className="flex items-center gap-1.5 mb-6">
                <div className="w-2.5 h-2.5 rounded-full bg-[#E85D04]" />
                <div className="w-2 h-2 rounded-full bg-[#FFB703]" />
                <div className="h-[1px] w-24 bg-gradient-to-r from-antiqueGold to-transparent" />
              </div>

              {/* Address Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-ivory border border-antiqueGold/40 flex items-center justify-center text-antiqueGold shrink-0 mt-0.5">
                    <Compass className="w-4 h-4 text-antiqueGold" />
                  </div>
                  <div>
                    <h4 className="text-xs font-serifDisplay uppercase tracking-wider text-antiqueGold-dark font-bold">
                      Full Address
                    </h4>
                    <p className="font-body text-sm text-darkBrown/85 leading-relaxed">
                      {fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-ivory border border-antiqueGold/40 flex items-center justify-center text-antiqueGold shrink-0 mt-0.5">
                    <Car className="w-4 h-4 text-antiqueGold" />
                  </div>
                  <div>
                    <h4 className="text-xs font-serifDisplay uppercase tracking-wider text-antiqueGold-dark font-bold">
                      Parking & Accessibility
                    </h4>
                    <p className="font-body text-sm text-darkBrown/85 leading-relaxed">
                      Easily accessible along NH 48 with abundant complimentary parking for all wedding guests.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* "GET DIRECTIONS" Button (As specified) */}
            <div className="pt-6 border-t border-antiqueGold/30">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-gradient-to-r from-antiqueGold-light via-antiqueGold to-antiqueGold-dark text-[#24130B] font-serifDisplay font-bold text-sm sm:text-base tracking-[0.18em] uppercase shadow-[0_8px_20px_rgba(197,160,89,0.35)] hover:brightness-110 active:scale-95 transition-all duration-300"
              >
                <Navigation className="w-4 h-4 text-[#24130B]" />
                <span>GET DIRECTIONS</span>
                <ExternalLink className="w-4 h-4 text-[#24130B]" />
              </a>
              <p className="text-center text-[11px] font-body text-darkBrown/60 tracking-wider mt-2.5">
                Opens live turn-by-turn navigation in Google Maps
              </p>
            </div>
          </motion.div>

          {/* Right Column: Interactive Embedded Google Map */}
          <motion.div
            className="lg:col-span-7 relative min-h-[360px] sm:min-h-[440px] rounded-3xl overflow-hidden border-2 border-antiqueGold shadow-card-royal bg-cream"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* The Verified Google Map Embed */}
            <iframe
              title="Google Map location of Sirigandha Palace, Sira"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              className="w-full h-full min-h-[380px] lg:min-h-[480px] border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Bottom Overlay Pill for Quick Directions */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 z-10 flex items-center justify-between sm:justify-end gap-3 p-3 rounded-2xl bg-ivory/95 border border-antiqueGold shadow-lg backdrop-blur-md">
              <div className="text-left">
                <p className="font-serifDisplay text-xs font-bold text-darkBrown">Sirigandha Palace</p>
                <p className="text-[10px] text-darkBrown/70">Sira 572137</p>
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-antiqueGold text-ivory text-xs font-heading font-semibold uppercase tracking-wider hover:bg-antiqueGold-dark transition-colors shadow-sm"
              >
                <span>Navigate</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeddingLocation;

