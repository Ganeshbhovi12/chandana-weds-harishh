import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Heart, Info, CheckCircle2, AlertCircle } from 'lucide-react';
import { GoldDivider } from './common/TraditionalMotifs';

const WISHES_STORAGE_KEY = "chandana_harish_guest_wishes_v1";
const WISHES_COOLDOWN_KEY = "chandana_harish_wish_last_time";

const PERMANENT_SAMPLE_WISH = {
  id: "sample-keerthana",
  name: "Keerthana · Chandana's Sister",
  message: "Wishing you both a lifetime of love and happiness. Congratulations! ❤️",
  isSample: true,
  createdAt: "Family Blessing"
};

export const WeddingWishes = ({ wishesData }) => {
  const heading = wishesData?.heading || "LEAVE YOUR WISHES";
  const subtitle = wishesData?.subtitle || "Share your love and blessings with Chandana & Harish.";

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isConnectedToSupabase, setIsConnectedToSupabase] = useState(false);

  // Check if Supabase config is set on window or env
  const getSupabaseConfig = () => {
    return window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.url && window.SUPABASE_CONFIG.anonKey
      ? window.SUPABASE_CONFIG
      : null;
  };

  useEffect(() => {
    const config = getSupabaseConfig();
    if (config) {
      setIsConnectedToSupabase(true);
      fetch(`${config.url}/rest/v1/wedding_wishes?select=*&order=created_at.desc`, {
        headers: {
          "apikey": config.anonKey,
          "Authorization": `Bearer ${config.anonKey}`
        }
      })
        .then(res => res.ok ? res.json() : [])
        .then(remoteWishes => {
          if (Array.isArray(remoteWishes) && remoteWishes.length > 0) {
            setWishes(remoteWishes.map(w => ({
              id: w.id,
              name: w.guest_name,
              message: w.message,
              createdAt: new Date(w.created_at).toLocaleDateString("en-IN", { month: "short", day: "numeric" }),
              isSample: false
            })));
          } else {
            loadLocalWishes();
          }
        })
        .catch(err => {
          console.warn("Supabase fetch failed, loading local storage:", err);
          loadLocalWishes();
        });
    } else {
      loadLocalWishes();
    }
  }, []);

  const loadLocalWishes = () => {
    try {
      const stored = localStorage.getItem(WISHES_STORAGE_KEY);
      if (stored) {
        setWishes(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Could not read local wishes:", e);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setShowThankYou(false);

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    // Validation
    if (trimmedName.length < 2) {
      setErrorMsg("Please enter your name (at least 2 characters).");
      return;
    }
    if (trimmedName.length > 50) {
      setErrorMsg("Name cannot exceed 50 characters.");
      return;
    }
    if (trimmedMessage.length < 3) {
      setErrorMsg("Please enter your message for the couple.");
      return;
    }
    if (trimmedMessage.length > 250) {
      setErrorMsg("Message cannot exceed 250 characters.");
      return;
    }

    // Anti-spam cooldown: 10s between submissions
    const lastSubmit = parseInt(localStorage.getItem(WISHES_COOLDOWN_KEY) || "0", 10);
    const now = Date.now();
    if (now - lastSubmit < 10000) {
      const remainingSec = Math.ceil((10000 - (now - lastSubmit)) / 1000);
      setErrorMsg(`Please wait ${remainingSec} second${remainingSec > 1 ? 's' : ''} before sending another wish.`);
      return;
    }

    setIsSubmitting(true);
    let savedRemotely = false;

    const config = getSupabaseConfig();
    if (config) {
      try {
        const res = await fetch(`${config.url}/rest/v1/wedding_wishes`, {
          method: "POST",
          headers: {
            "apikey": config.anonKey,
            "Authorization": `Bearer ${config.anonKey}`,
            "Content-Type": "application/json",
            "Prefer": "return=representation"
          },
          body: JSON.stringify({
            guest_name: trimmedName,
            message: trimmedMessage
          })
        });
        if (res.ok) {
          const inserted = await res.json();
          if (inserted && inserted[0]) {
            const newWish = {
              id: inserted[0].id,
              name: inserted[0].guest_name,
              message: inserted[0].message,
              createdAt: "Just now",
              isSample: false
            };
            setWishes(prev => [newWish, ...prev]);
            savedRemotely = true;
          }
        }
      } catch (err) {
        console.warn("Supabase insertion error, falling back to local:", err);
      }
    }

    if (!savedRemotely) {
      const newLocalWish = {
        id: "local-" + Date.now(),
        name: trimmedName,
        message: trimmedMessage,
        createdAt: "Just now",
        isSample: false
      };
      setWishes(prev => {
        const updated = [newLocalWish, ...prev];
        try {
          localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(updated));
        } catch (e) {
          console.warn("Local storage write error:", e);
        }
        return updated;
      });
    }

    localStorage.setItem(WISHES_COOLDOWN_KEY, now.toString());

    // Reset inputs & show thank you
    setName("");
    setMessage("");
    setIsSubmitting(false);
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
    }, 6000);
  };

  const allWishesToDisplay = [PERMANENT_SAMPLE_WISH, ...wishes];

  return (
    <section id="wishes-section" className="py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-cream/30 relative select-none overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-radial from-cream/60 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-2xl mx-auto relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GoldDivider
            subtitle="GUESTBOOK & BLESSINGS"
            title={heading}
            className="mb-4"
          />
          <p className="font-heading text-base sm:text-lg italic text-darkBrown/80 text-center max-w-lg mx-auto mb-10">
            {subtitle}
          </p>
        </motion.div>

        {/* Guest Wishes Submission Form Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-ivory border-[1.5px] border-antiqueGold rounded-3xl p-6 sm:p-9 shadow-card-royal relative mb-12"
        >
          <form onSubmit={handleSubmit} noValidate>
            
            {/* Input: Your Name */}
            <div className="mb-4">
              <label htmlFor="react-wish-name" className="block font-serifDisplay text-xs font-bold uppercase tracking-wider text-darkBrown mb-1.5">
                Your Name
              </label>
              <input
                id="react-wish-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={50}
                placeholder="Enter your name"
                required
                className="w-full bg-[#FFFDF9] border border-antiqueGold/45 rounded-xl px-4 py-3 font-sans text-sm sm:text-base text-darkBrown focus:outline-none focus:border-antiqueGold focus:ring-2 focus:ring-antiqueGold/20 transition-all"
              />
            </div>

            {/* Textarea: Your Message */}
            <div className="mb-4">
              <label htmlFor="react-wish-message" className="block font-serifDisplay text-xs font-bold uppercase tracking-wider text-darkBrown mb-1.5">
                Your Message (maximum 250 characters)
              </label>
              <textarea
                id="react-wish-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={250}
                rows={3}
                placeholder="Write your warm blessings for Chandana & Harish..."
                required
                className="w-full bg-[#FFFDF9] border border-antiqueGold/45 rounded-xl px-4 py-3 font-sans text-sm sm:text-base text-darkBrown focus:outline-none focus:border-antiqueGold focus:ring-2 focus:ring-antiqueGold/20 transition-all resize-y min-h-[90px]"
              />
              <div className="flex justify-end text-xs font-sans text-darkBrown/60 mt-1">
                <span className={message.length > 250 ? 'text-red-600 font-bold' : ''}>
                  {message.length}
                </span>
                <span className="ml-1">/ 250</span>
              </div>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-sans flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Thank You Message */}
            <AnimatePresence>
              {showThankYou && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mb-4 p-3.5 rounded-xl bg-antiqueGold/15 border border-antiqueGold text-darkBrown text-sm sm:text-base font-heading italic font-semibold text-center flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4 text-antiqueGold fill-antiqueGold" />
                  <span>Thank you for your lovely wishes! ❤️</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-antiqueGold text-ivory font-serifDisplay text-xs sm:text-sm font-bold tracking-widest uppercase hover:bg-antiqueGold-dark transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? "SENDING..." : "SEND WISH"}</span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Wishes List Header */}
        <div className="flex items-center justify-between border-b border-antiqueGold/30 pb-2 mb-6">
          <span className="font-serifDisplay text-xs sm:text-sm font-bold uppercase tracking-wider text-darkBrown">
            Heartfelt Wishes
          </span>
          <span className="font-sans text-xs font-semibold text-antiqueGold-dark">
            {allWishesToDisplay.length} {allWishesToDisplay.length === 1 ? 'Wish' : 'Wishes'}
          </span>
        </div>

        {/* Wishes Feed (Newest first, Sample included) */}
        <div className="space-y-4">
          {allWishesToDisplay.map((w) => (
            <motion.div
              key={w.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className={`rounded-2xl p-5 border transition-all ${
                w.isSample
                  ? 'bg-gradient-to-br from-ivory to-cream/50 border-antiqueGold shadow-card-royal'
                  : 'bg-ivory border-antiqueGold/45 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                <span className="font-serifDisplay font-bold text-darkBrown text-sm sm:text-base tracking-wide">
                  {w.name}
                </span>
                {w.isSample ? (
                  <span className="inline-flex items-center gap-1 font-serifDisplay text-[10px] font-bold uppercase tracking-wider text-antiqueGold-deep bg-antiqueGold/15 border border-antiqueGold/40 px-2 py-0.5 rounded-full">
                    Family Blessing
                  </span>
                ) : (
                  <span className="font-sans text-xs text-darkBrown/50">
                    {w.createdAt || "Just now"}
                  </span>
                )}
              </div>
              <p className="font-heading text-base sm:text-lg italic text-darkBrown/90 leading-relaxed">
                "{w.message}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Shared Database Status Notice */}
        <div className="mt-8 p-4 rounded-xl bg-cream/50 border border-dashed border-antiqueGold/50 font-sans text-xs text-darkBrown/80 leading-relaxed flex items-start gap-3">
          <Info className="w-4 h-4 text-antiqueGold shrink-0 mt-0.5" />
          <div>
            <span className="font-serifDisplay font-bold uppercase tracking-wider text-antiqueGold-deep block mb-1">
              Shared Database Status
            </span>
            {isConnectedToSupabase ? (
              <span className="text-green-800">
                🟢 Connected to shared Supabase database. Guest wishes sync live across all phones and devices.
              </span>
            ) : (
              <span>
                Wishes submitted now are saved in your browser session. To sync wishes live across all guests on their phones and laptops, connect your free Supabase database via <code>SUPABASE_CONFIG</code> in <code>supabase-config.js</code>.
              </span>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WeddingWishes;
