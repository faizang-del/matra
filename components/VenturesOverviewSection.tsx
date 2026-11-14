'use client';

import React from 'react';
import { Smartphone, Wrench, ArrowRight, Sparkles, CheckCircle2, MessageCircle, Layers, ShieldCheck, Zap } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { VENTURE_VERTICALS } from '@/data/ventures';

export default function VenturesOverviewSection() {
  const { openWhatsApp } = useShop();
  const digital = VENTURE_VERTICALS.find((v) => v.id === 'digital');
  const homeServices = VENTURE_VERTICALS.find((v) => v.id === 'home-services');

  return (
    <section id="ventures" className="py-20 sm:py-28 bg-white text-gray-900 border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-gold/20 text-agri-dark text-xs font-black uppercase tracking-widest border border-agri-gold/40">
            <Layers className="w-3.5 h-3.5 text-agri-forest" />
            <span>MATRA VENTURES PRIVATE LIMITED • EXPANDING HORIZONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-agri-dark">
            Expanding Verticals for a Seamless, Calmer Life
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Represented under the <strong>MATRA Ventures</strong> parent brand, our technology and residential service verticals are being launched in phased rollouts to bring exceptional reliability and peace of mind.
          </p>
        </div>

        {/* Dual Vertical Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: MATRA Digital */}
          <div className="bg-gradient-to-br from-[#122e1b] to-agri-dark text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-agri-primary/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-agri-gold text-agri-dark">
                  MATRA DIGITAL
                </span>
                <span className="text-xs font-semibold text-emerald-200/80">
                  Apps & Digital Solutions
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-white group-hover:text-agri-gold transition-colors">
                  Modern Web, Mobile & Enterprise Digital Engines
                </h3>
                <p className="text-xs sm:text-sm text-emerald-100/80 mt-2 leading-relaxed">
                  We engineer high-performance web applications, cross-platform mobile apps, bespoke e-commerce engines, and streamlined digital automation that simplify operations and drive scalable growth.
                </p>
              </div>

              {/* Offerings list */}
              <div className="space-y-2.5 pt-2">
                {[
                  'Next.js & React High-Performance Cloud Web Apps',
                  'Cross-Platform iOS & Android Mobile Applications',
                  'Bespoke E-Commerce Systems with Indian & Global Gateways',
                  'Custom ERP, Inventory & Order Tracking Automation',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-agri-gold flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 relative z-10">
              <div>
                <span className="text-[10px] text-emerald-200/60 uppercase tracking-wider block">Engagement Model</span>
                <span className="text-sm font-bold text-white">Custom Technical Proposals & Audits</span>
              </div>

              <button
                onClick={() => openWhatsApp('Hello MATRA Digital team, I would like to request a proposal for web/app development and digital solutions.')}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-agri-gold hover:bg-amber-400 text-agri-dark font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>REQUEST TECH PROPOSAL</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: MATRA Home Services */}
          <div className="bg-[#faf8f4] border-2 border-agri-gold/40 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-lg relative overflow-hidden group">
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-agri-leaf/20 text-agri-forest">
                  MATRA HOME SERVICES
                </span>
                <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2.5 py-0.5 rounded-full">
                  Phased Rollout • Early Access
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black font-heading text-agri-dark group-hover:text-agri-forest transition-colors">
                  Punctual, Verified Home Maintenance & Repair
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Restoring tranquility to your living spaces. Our home services vertical brings background-checked, skilled technicians with transparent fixed pricing and zero surprise charges.
                </p>
              </div>

              {/* Offerings list */}
              <div className="space-y-2.5 pt-2">
                {[
                  'Electrical, Inverter & Smart Lighting Maintenance',
                  'Comprehensive Plumbing, Water Purification & Drainage Care',
                  'Carpentry, Fixtures & Mindful Living Space Upkeep',
                  'Seasonal Home Health & Preventive Wellness Inspections',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-agri-forest flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider block">Rollout Status</span>
                <span className="text-sm font-bold text-agri-forest">Pre-Launch Waitlist & Priority Service</span>
              </div>

              <button
                onClick={() => openWhatsApp('Hello MATRA Home Services team, I would like to join the early access waitlist for verified home repairs & maintenance.')}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-agri-forest hover:bg-agri-primary text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
              >
                <span>JOIN PRIORITY WAITLIST</span>
                <MessageCircle className="w-3.5 h-3.5 text-agri-gold" />
              </button>
            </div>
          </div>

        </div>

        {/* Corporate Trust Strip */}
        <div className="p-6 rounded-3xl bg-agri-cream border border-agri-gold/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-agri-forest text-white flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-agri-gold" />
            </div>
            <div>
              <h4 className="text-xs font-black text-agri-dark uppercase tracking-wider font-heading">
                MATRA Ventures Private Limited Guarantee
              </h4>
              <p className="text-[11px] text-gray-500">
                All 5 verticals adhere strictly to our founding ethos of transparent sourcing, ethical pricing, and tranquil service delivery.
              </p>
            </div>
          </div>

          <button
            onClick={() => openWhatsApp('Hello MATRA Ventures, I would like to know more about the corporate structure and partnership opportunities.')}
            className="px-5 py-2.5 rounded-full border-2 border-agri-forest text-agri-forest hover:bg-agri-forest hover:text-white text-xs font-bold uppercase tracking-wider transition-colors whitespace-nowrap"
          >
            Partnership Inquiries
          </button>
        </div>
      </div>
    </section>
  );
}
