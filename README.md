# The Wedding of Chandana & Harish | Animated Invitation Website

A luxury Indian traditional wedding invitation website crafted for **Chandana & Harish**, featuring a 3D teak-wood door opening ceremony, high-resolution original invitation reveal, interactive journey photo gallery, celebration event cards with automatic countdown and calendar integration, interactive Google Maps venue location, and romantic closing wishes.

---

## 🌟 Tech Stack
- **React 18** (Vite build system)
- **Tailwind CSS 3** with custom Indian luxury palette (Ivory, Cream, Antique Gold, Warm Beige, Dark Brown, Royal Maroon)
- **Framer Motion 11** for 3D door physics, smooth golden glow portals, and fluid transitions
- **Lucide Icons**
- **Google Fonts**: Cormorant Garamond, Cinzel, Great Vibes, Outfit

---

## 🏛️ Sections Overview

### 1. Grand Indian Door Entrance
- Immersive full-screen opening experience.
- Traditional Indian carved wooden double door with teak wood grain textures, brass studs, and heavy brass ring knockers.
- Marigold flower toran with swaying mango leaves (`maavilai`) and two traditional brass lamps (`Kuthu Vilakku`) with flickering flames.
- Center royal medallion:
  - `"THE WEDDING OF"`
  - `"CHANDANA & HARISH"`
  - `"An Invitation to Celebrate Love"`
  - Button: `"OPEN INVITATION"`
- Interactive realistic 3D door-opening animation (`perspective`, `transform-origin`), golden aura portal behind opening doors, and automatic smooth scroll into Section 2.
- Subtle traditional instrumental background music with floating visible mute/unmute control (starts only after user interaction).

### 2. Wedding Invitation Reveal
- Displays the exact uploaded wedding invitation image (`/invitation.jpg` / `/couple-web.jpg`) without altering, cropping out, or rewriting content.
- Framed in a soft cream background, royal drop-shadow, double gold foil borders, and traditional filigree corner rosettes.
- Gentle fade-in and zoom animation.
- Includes **Fullscreen Zoom** lightbox and **Save/Download** functionality.

### 3. Our Beautiful Moments (`A JOURNEY OF LOVE`)
- Subtitle: *"Two hearts, one beautiful journey."*
- Balanced responsive grid for desktop and touch-friendly swipe carousel for mobile.
- Supports 8–12 couple photographs with category filters (Ceremony, Bride, Groom, Haldi, Mehendi, Sangeet).
- Interactive Lightbox with keyboard arrow controls, full captions, and graceful transitions.

### 4. Wedding Celebrations (`JOIN US IN OUR CELEBRATION`)
- **Card 1 – RECEPTION**: Wednesday, 25 November 2026, 8:00 PM onwards.
- **Card 2 – MUHURTHAM**: Thursday, 26 November 2026, 9:00 AM – 10:00 AM.
- Venue: **SIRIGANDHA PALACE, SIRA – 572137**.
- Live countdown timer automatically synced to wedding date and local time.
- Direct **Add to Google Calendar** and **Apple / Outlook Calendar (.ics download)**.

### 5. Wedding Location (`WE CAN'T WAIT TO SEE YOU`)
- Venue: **SIRIGANDHA PALACE, SIRA 572137**.
- Embedded responsive interactive Google Map search.
- **"GET DIRECTIONS"** button linking directly to Google Maps navigation in a new tab.

### 6. Final Thank You & Footer
- Ivory background with delicate floral and kalash motifs.
- Text:
  > **"YOUR PRESENCE WILL MAKE OUR DAY MORE SPECIAL"**
  >
  > *"With love, Chandana & Harish"*
- Handcrafted gold heart ornament.
- Footer: `"MADE WITH LOVE"`.

---

## 🚀 Running the Project

### Development Server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build:
```bash
npm run build
npm run preview
```

