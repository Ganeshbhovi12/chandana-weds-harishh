import React, { useState } from 'react';
import { InvitationReveal } from './components/InvitationReveal';
import { PhotoGallery } from './components/PhotoGallery';
import { PreWeddingFilm } from './components/PreWeddingFilm';
import { WeddingCelebrations } from './components/WeddingCelebrations';
import { WeddingLocation } from './components/WeddingLocation';
import { WeddingWishes } from './components/WeddingWishes';
import { FinalThankYou } from './components/FinalThankYou';
import { weddingData } from './data/weddingData';

export function App() {
  const [isNavVisible, setIsNavVisible] = useState(true);

  React.useEffect(() => {
    let isHidden = false;
    const handleScroll = () => {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollY > 80 && !isHidden) {
        isHidden = true;
        setIsNavVisible(false);
      } else if (scrollY <= 45 && isHidden) {
        isHidden = false;
        setIsNavVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-ivory text-darkBrown relative selection:bg-antiqueGold selection:text-ivory">
      
      {/* 1. Floating Quick Navigation Pill (Appears at top immediately, hides on scroll down, reveals at top) */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 bg-ivory/95 backdrop-blur-md border border-antiqueGold/60 rounded-full px-4 py-1.5 shadow-card-royal flex items-center gap-2 sm:gap-3 transition-all duration-500 ${isNavVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-6 pointer-events-none'}`}
        aria-label="Quick Wedding Navigation"
      >
        <button
          onClick={() => scrollToSection('invitation-section')}
          className="px-2 py-1 text-[11px] sm:text-xs font-serifDisplay tracking-wider uppercase text-darkBrown/80 hover:text-darkBrown hover:bg-cream rounded-full transition-colors font-medium"
        >
          INVITATION
        </button>

        <span className="text-antiqueGold/40">•</span>

        <button
          onClick={() => scrollToSection('gallery-section')}
          className="px-2 py-1 text-[11px] sm:text-xs font-serifDisplay tracking-wider uppercase text-darkBrown/80 hover:text-darkBrown hover:bg-cream rounded-full transition-colors font-medium"
        >
          MOMENTS
        </button>

        <span className="text-antiqueGold/40">•</span>

        <button
          onClick={() => scrollToSection('film-section')}
          className="px-2 py-1 text-[11px] sm:text-xs font-serifDisplay tracking-wider uppercase text-darkBrown/80 hover:text-darkBrown hover:bg-cream rounded-full transition-colors font-medium"
        >
          FILM
        </button>

        <span className="text-antiqueGold/40">•</span>

        <button
          onClick={() => scrollToSection('celebrations-section')}
          className="px-2 py-1 text-[11px] sm:text-xs font-serifDisplay tracking-wider uppercase text-darkBrown/80 hover:text-darkBrown hover:bg-cream rounded-full transition-colors font-medium"
        >
          EVENTS
        </button>

        <span className="text-antiqueGold/40">•</span>

        <button
          onClick={() => scrollToSection('location-section')}
          className="px-2 py-1 text-[11px] sm:text-xs font-serifDisplay tracking-wider uppercase text-darkBrown/80 hover:text-darkBrown hover:bg-cream rounded-full transition-colors font-medium"
        >
          VENUE
        </button>
      </nav>

      {/* MAIN WEDDING WEBSITE SECTIONS (Visible immediately upon visiting) */}
      <main className="relative">
        {/* SECTION 2: WEDDING INVITATION REVEAL */}
        <InvitationReveal
          invitationImage={weddingData.couple.invitationImage}
          fallbackImage={weddingData.couple.coupleImage}
        />

        {/* SECTION 3: OUR BEAUTIFUL MOMENTS (A JOURNEY OF LOVE) */}
        <PhotoGallery
          galleryData={weddingData.gallery}
        />

        {/* OUR PRE-WEDDING FILM (Positioned after A Journey of Love & before Wedding Celebrations) */}
        <PreWeddingFilm
          filmData={weddingData.preWeddingFilm}
        />

        {/* SECTION 4: WEDDING CELEBRATIONS (RECEPTION & MUHURTHAM + COUNTDOWN + CALENDAR) */}
        <WeddingCelebrations
          celebrationsData={weddingData.celebrations}
          weddingDate={weddingData.couple.weddingDate}
        />

        {/* SECTION 5: WEDDING LOCATION (SIRIGANDHA PALACE, SIRA + GOOGLE MAP + DIRECTIONS) */}
        <WeddingLocation
          locationData={weddingData.location}
        />

        {/* SECTION: WEDDING WISHES (WITH LOVE & BLESSINGS - FROM KEERTHANA) */}
        <WeddingWishes
          wishesData={weddingData.wishes}
        />

        {/* SECTION 6: FINAL THANK YOU ("YOUR PRESENCE WILL MAKE OUR DAY MORE SPECIAL" + FOOTER) */}
        <FinalThankYou
          closingData={weddingData.closing}
        />
      </main>
    </div>
  );
}

export default App;
