'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Sparkles, ArrowRight, Clock, ShieldCheck, Tag } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function DealBanner() {
  const { applyCoupon, setIsCartOpen } = useShop();

  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 14,
    minutes: 38,
    seconds: 22,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleClaimDiscount = () => {
    applyCoupon('ORGANIC25');
    setIsCartOpen(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-agri-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-agri-forest shadow-2xl border border-white/10 group">
          {/* Background image with Ken Burns */}
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop"
              alt="Organic Farm Harvest Market"
              fill
              className="object-cover opacity-25 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-agri-dark via-agri-forest/90 to-agri-primary/80" />
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-agri-gold/20 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="space-y-5 max-w-xl text-center lg:text-left text-white">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-gold/20 text-agri-gold text-xs font-extrabold uppercase tracking-widest border border-agri-gold/40 shadow-sm animate-pulse-subtle">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SEASONAL HARVEST CELEBRATION</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight">
                Save 25% On Your First Organic Heritage Pantry Crate
              </h2>

              <p className="text-sm sm:text-base text-emerald-100/90 leading-relaxed font-normal">
                Includes our stone-milled royal Sharbati Atta, pure royal Hing, wood-pressed yellow mustard oil, and hand-pounded Kashmiri Lal Mirch. Sourced directly from certified family farms.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={handleClaimDiscount}
                  className="btn-shimmer px-8 py-4 rounded-full bg-agri-gold hover:bg-amber-400 text-agri-dark font-black text-xs tracking-wider uppercase transition-all duration-300 shadow-agri-gold hover:shadow-glow-gold flex items-center gap-2 hover:scale-105 active:scale-95"
                >
                  <Tag className="w-4 h-4" />
                  <span>CLAIM 25% OFF (CODE: ORGANIC25)</span>
                </button>

                <a
                  href="#shop"
                  className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-105"
                >
                  VIEW FULL CATALOG
                </a>
              </div>
            </div>

            {/* Countdown Box with Glowing Pulse */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center text-white shadow-xl max-w-sm w-full animate-pulse-glow">
              <div className="flex items-center gap-2 text-agri-gold text-xs font-bold uppercase tracking-wider mb-4">
                <Clock className="w-4 h-4 animate-spin-slow" />
                <span>OFFER CLOSING SOON</span>
              </div>

              <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full">
                {[
                  { value: timeLeft.days, label: 'Days' },
                  { value: timeLeft.hours, label: 'Hours' },
                  { value: timeLeft.minutes, label: 'Mins' },
                  { value: timeLeft.seconds, label: 'Secs', isSecs: true },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-black/35 border border-white/10 rounded-2xl p-3 flex flex-col items-center shadow-inner group/box hover:border-agri-gold/50 transition-colors"
                  >
                    <span
                      key={item.value}
                      className={`text-2xl sm:text-3xl font-black text-agri-gold font-heading ${
                        item.isSecs ? 'animate-fade-in' : ''
                      }`}
                    >
                      {String(item.value).padStart(2, '0')}
                    </span>
                    <span className="text-[10px] text-emerald-200/70 font-semibold uppercase tracking-wider mt-1">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-white/10 w-full flex items-center justify-center gap-2 text-xs text-emerald-100">
                <ShieldCheck className="w-4 h-4 text-agri-gold" />
                <span>Money-Back Organic Freshness Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
