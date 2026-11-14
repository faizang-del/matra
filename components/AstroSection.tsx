'use client';

import React from 'react';
import { Sparkles, Compass, Star, Calendar, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { VENTURE_VERTICALS } from '@/data/ventures';

export default function AstroSection() {
  const { openConsultationModal } = useShop();
  const astro = VENTURE_VERTICALS.find((v) => v.id === 'astro');
  if (!astro || !astro.services) return null;

  return (
    <section id="astro" className="py-20 sm:py-28 bg-[#132c1b] text-white relative overflow-hidden">
      {/* Background glow and subtle celestial elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-agri-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-agri-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-gold/20 text-agri-gold text-xs font-black uppercase tracking-widest border border-agri-gold/30">
            <Compass className="w-3.5 h-3.5 text-agri-gold" />
            <span>MATRA ASTRO • ONLINE ASTROLOGY & GUIDANCE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-white">
            Mindful Cosmic Guidance for a Calmer Life
          </h2>

          <p className="text-emerald-100/80 text-sm sm:text-base leading-relaxed">
            Personalized Vedic astrology consultations, life path readings, and Vastu harmonization designed to bring serenity, clarity, and mindful direction to your everyday choices.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {astro.services.map((service) => (
            <div
              key={service.id}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-agri-gold/40 rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 hover:scale-[1.02] shadow-xl group backdrop-blur-sm"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-agri-gold text-agri-dark">
                    {service.badge}
                  </span>
                  <div className="flex items-center gap-0.5 text-agri-gold text-xs">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="font-bold">5.0</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-black text-white font-heading group-hover:text-agri-gold transition-colors leading-snug">
                    {service.name}
                  </h3>
                  <span className="text-xs text-agri-mint font-medium block mt-1">
                    {service.duration}
                  </span>
                </div>

                <p className="text-xs text-emerald-100/75 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-white/10">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-emerald-100/90 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-agri-gold flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Booking Trigger */}
              <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-emerald-200/60 uppercase tracking-wider block">
                    Session Fee
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-black text-white font-heading">
                      ₹{service.price.toLocaleString('en-IN')}
                    </span>
                    {service.originalPrice && (
                      <span className="text-xs text-emerald-300/50 line-through">
                        ₹{service.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => openConsultationModal(service)}
                  className="px-4 py-2.5 rounded-full bg-agri-gold hover:bg-amber-400 text-agri-dark font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-1.5 hover:scale-105 active:scale-95"
                >
                  <span>BOOK</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance strip */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-around gap-4 text-xs text-emerald-200">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-agri-gold" />
            <span>100% Confidential & Secure Video / Audio Call</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-agri-gold" />
            <span>Flexible Rescheduling up to 6 Hours in Advance</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-agri-gold" />
            <span>Comprehensive Vedic Remedies & Report Included</span>
          </div>
        </div>
      </div>
    </section>
  );
}
