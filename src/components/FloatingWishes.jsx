import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Send, X, Heart, AlertCircle } from 'lucide-react';

const WISHES_STORAGE_KEY = "chandana_harish_guest_wishes_v1";
const WISHES_COOLDOWN_KEY = "chandana_harish_wish_last_time";

const SAMPLE_WISH = {
  id: "sample-keerthana",
  name: "Keerthana · Chandana's Sister",
  message: "Wishing you both a lifetime of love and happiness. Congratulations! ❤️",
  isSample: true,
  createdAt: "Family Blessing"
};

export const FloatingWishes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("write"); // "write" | "read"
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [wishes, setWishes] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [floatingStream, setFloatingStream] = useState([SAMPLE_WISH]);

  const getSupabaseConfig = () => {
    return window.SUPABASE_CONFIG && window.SUPABASE_CONFIG.url && window.SUPABASE_CONFIG.anonKey
      ? window.SUPABASE_CONFIG
      : null;
  };

  useEffect(() => {
    const config = getSupabaseConfig();
    if (config) {
      fetch(`${config.url}/rest/v1/wedding_wishes?select=*&order=created_at.desc`, {
        headers: {
          "apikey": config.anonKey,
          "Authorization": `Bearer ${config.anonKey}`
        }
      })
        .then(res => res.ok ? res.json() : [])
        .then(remoteWishes => {
          if (Array.isArray(remoteWishes) && remoteWishes.length > 0) {
            const parsed = remoteWishes.map(w => ({
              id: w.id,
              name: w.guest_name,
              message: w.message,
              createdAt: new Date(w.created_at).toLocaleDateString("en-IN", { month: "short", day: "numeric" }),
              isSample: false
            }));
            setWishes(parsed);
            setFloatingStream([parsed[0], SAMPLE_WISH]);
          } else {
            loadLocalWishes();
          }
        })
        .catch(() => loadLocalWishes());
    } else {
      loadLocalWishes();
    }
  }, []);

  const loadLocalWishes = () => {
    try {
      const stored = localStorage.getItem(WISHES_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setWishes(parsed);
        if (parsed.length > 0) {
          setFloatingStream([parsed[0], SAMPLE_WISH]);
        }
      }
    } catch (e) {
      console.warn("Could not read local wishes:", e);
    }
  };

  const handleDismissBubble = (id, e) => {
    e.stopPropagation();
    setFloatingStream(prev => prev.filter(item => item.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

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

    // Cooldown
    const lastSubmit = parseInt(localStorage.getItem(WISHES_COOLDOWN_KEY) || "0", 10);
    const now = Date.now();
    if (now - lastSubmit < 10000) {
      const sec = Math.ceil((10000 - (now - lastSubmit)) / 1000);
      setErrorMsg(`Please wait ${sec}s before sending another wish.`);
      return;
    }

    setIsSubmitting(true);
    let newWish = {
      id: "local-" + Date.now(),
      name: trimmedName,
      message: trimmedMessage,
      createdAt: "Just now",
      isSample: false
    };

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
            newWish.id = inserted[0].id;
          }
        }
      } catch (err) {
        console.warn("Supabase save error, storing locally:", err);
      }
    }

    setWishes(prev => {
      const updated = [newWish, ...prev];
      try {
        localStorage.setItem(WISHES_STORAGE_KEY, JSON.stringify(updated));
      } catch (err) {
        console.warn("localStorage write error:", err);
      }
      return updated;
    });

    localStorage.setItem(WISHES_COOLDOWN_KEY, now.toString());

    // Reset inputs
    setName("");
    setMessage("");
    setIsSubmitting(false);

    // Close dialog immediately as required
    setIsOpen(false);

    // Add new wish to floating stream
    setFloatingStream(prev => [newWish, ...prev.slice(0, 2)]);

    // Show toast
    setShowToast(true);
    setTimeout(() => setShowToast(false), 5500);
  };

  const totalWishes = 1 + wishes.length;
  const allWishesList = [SAMPLE_WISH, ...wishes];

  return (
    <>
      {/* 1. Floating Message Bubbles Stream on the Right */}
      <div className="fixed right-4 sm:right-6 bottom-24 z-40 flex flex-col-reverse gap-2.5 max-w-[280px] pointer-events-none">
        <AnimatePresence>
          {floatingStream.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={() => {
                setActiveTab("read");
                setIsOpen(true);
              }}
              className="pointer-events-auto cursor-pointer bg-ivory/95 backdrop-blur-md border border-antiqueGold/60 rounded-2xl p-3 sm:p-3.5 shadow-card-royal hover:shadow-lg transition-all hover:-translate-x-1"
            >
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="font-serifDisplay font-bold text-xs sm:text-sm text-darkBrown truncate">
                  {item.name}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  {item.isSample && (
                    <span className="font-serifDisplay text-[9px] uppercase tracking-wider text-antiqueGold-deep font-bold bg-antiqueGold/15 px-1.5 py-0.5 rounded-full">
                      Family
                    </span>
                  )}
                  <button
                    onClick={(e) => handleDismissBubble(item.id, e)}
                    className="text-darkBrown/40 hover:text-darkBrown p-0.5 rounded-full hover:bg-cream transition-colors"
                    title="Dismiss"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              </div>
              <p className="font-heading text-xs sm:text-sm italic text-darkBrown/90 line-clamp-3 leading-snug">
                "{item.message}"
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* 2. Floating Message Icon / Button */}
      <motion.button
        id="floating-wishes-btn"
        onClick={() => {
          setActiveTab("write");
          setIsOpen(true);
        }}
        whileHover={{ scale: 1.04, y: -2 }}
        whileTap={{ scale: 0.96 }}
        className="fixed right-4 sm:right-6 bottom-6 z-50 inline-flex items-center gap-2.5 bg-ivory/95 backdrop-blur-md border border-antiqueGold rounded-full pl-4 pr-2 py-1.5 shadow-card-royal hover:shadow-xl hover:border-antiqueGold-dark transition-all cursor-pointer group select-none"
        aria-label="Drop a Wish for Chandana & Harish"
      >
        <span className="font-serifDisplay text-[11px] sm:text-xs font-bold tracking-wider text-darkBrown uppercase">
          DROP A WISH
        </span>
        <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-antiqueGold-light via-antiqueGold to-antiqueGold-dark text-ivory flex items-center justify-center shadow-md">
          <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
          <span className="absolute -top-1 -right-1 bg-red-700 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full border-2 border-ivory font-sans leading-none">
            {totalWishes}
          </span>
        </div>
      </motion.button>

      {/* 3. Popup Message Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsOpen(false);
            }}
            className="fixed inset-0 z-50 bg-darkBrown/60 backdrop-blur-sm flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <motion.div
              initial={{ scale: 0.94, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 16 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-ivory border-[1.5px] border-antiqueGold rounded-3xl p-6 sm:p-8 shadow-card-royal max-w-md w-full relative max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cream/70 border border-antiqueGold/40 text-darkBrown flex items-center justify-center hover:bg-antiqueGold hover:text-ivory transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="text-center mb-5 pr-4">
                <h2 className="font-serifDisplay text-xl sm:text-2xl font-bold text-darkBrown tracking-wider mb-1">
                  SEND YOUR WISHES
                </h2>
                <p className="font-heading text-sm sm:text-base italic text-darkBrown/80">
                  Leave a little love for Chandana & Harish.
                </p>
              </div>

              {/* Tabs */}
              <div className="flex items-center justify-center gap-2 mb-5 border-b border-antiqueGold/25 pb-2.5">
                <button
                  type="button"
                  onClick={() => setActiveTab("write")}
                  className={`px-3.5 py-1 rounded-full font-serifDisplay text-xs font-bold tracking-wider uppercase transition-all ${
                    activeTab === "write"
                      ? 'bg-antiqueGold text-ivory'
                      : 'text-darkBrown/60 hover:text-darkBrown hover:bg-cream'
                  }`}
                >
                  Write a Wish
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("read")}
                  className={`px-3.5 py-1 rounded-full font-serifDisplay text-xs font-bold tracking-wider uppercase transition-all ${
                    activeTab === "read"
                      ? 'bg-antiqueGold text-ivory'
                      : 'text-darkBrown/60 hover:text-darkBrown hover:bg-cream'
                  }`}
                >
                  All Wishes ({totalWishes})
                </button>
              </div>

              {/* Tab 1: Form */}
              {activeTab === "write" ? (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-4">
                    <label htmlFor="modal-name" className="block font-serifDisplay text-[11px] font-bold uppercase tracking-wider text-darkBrown mb-1">
                      Your Name
                    </label>
                    <input
                      id="modal-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      maxLength={50}
                      placeholder="Enter your name"
                      required
                      className="w-full bg-white border border-antiqueGold/45 rounded-xl px-3.5 py-2.5 font-sans text-sm text-darkBrown focus:outline-none focus:border-antiqueGold focus:ring-2 focus:ring-antiqueGold/20"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="modal-msg" className="block font-serifDisplay text-[11px] font-bold uppercase tracking-wider text-darkBrown mb-1">
                      Your Message (maximum 250 characters)
                    </label>
                    <textarea
                      id="modal-msg"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      maxLength={250}
                      rows={3}
                      placeholder="Write your warm blessings for Chandana & Harish..."
                      required
                      className="w-full bg-white border border-antiqueGold/45 rounded-xl px-3.5 py-2.5 font-sans text-sm text-darkBrown focus:outline-none focus:border-antiqueGold focus:ring-2 focus:ring-antiqueGold/20 resize-y min-h-[80px]"
                    />
                    <div className="flex justify-end text-[11px] font-sans text-darkBrown/60 mt-1">
                      <span>{message.length}</span>
                      <span className="ml-1">/ 250</span>
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="mb-3 p-2.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-sans flex items-center gap-2">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-antiqueGold text-ivory font-serifDisplay text-xs font-bold tracking-widest uppercase hover:bg-antiqueGold-dark transition-all shadow-md hover:shadow-lg disabled:opacity-60 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? "SENDING..." : "SEND WISH"}</span>
                  </button>
                </form>
              ) : (
                /* Tab 2: All Wishes List */
                <div className="space-y-3 max-h-[55vh] overflow-y-auto pr-1">
                  {allWishesList.map((item) => (
                    <div
                      key={item.id}
                      className={`p-3.5 rounded-xl border ${
                        item.isSample
                          ? 'bg-gradient-to-br from-ivory to-cream/40 border-antiqueGold'
                          : 'bg-cream/40 border-antiqueGold/40'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-serifDisplay font-bold text-xs sm:text-sm text-darkBrown">
                          {item.name}
                        </span>
                        <span className="font-sans text-[10px] text-antiqueGold-dark uppercase font-semibold">
                          {item.isSample ? 'Family Blessing' : (item.createdAt || 'Recent')}
                        </span>
                      </div>
                      <p className="font-heading text-sm italic text-darkBrown/90 leading-snug">
                        "{item.message}"
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Thank You Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            className="fixed top-6 right-6 z-50 bg-ivory border-[1.5px] border-antiqueGold text-darkBrown font-heading italic font-semibold text-sm sm:text-base px-5 py-3 rounded-full shadow-card-royal flex items-center gap-2"
          >
            <Heart className="w-4 h-4 text-antiqueGold fill-antiqueGold" />
            <span>Thank you for your lovely wishes! ❤️</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingWishes;
