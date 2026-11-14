'use client';

import React from 'react';
import { Briefcase, CheckCircle2, ArrowRight, ShieldCheck, Users, Target, TrendingUp } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { VENTURE_VERTICALS } from '@/data/ventures';

export default function ConsultantsSection() {
  const { openConsultationModal } = useShop();
  const consult = VENTURE_VERTICALS.find((v) => v.id === 'consultants');
  if (!consult || !consult.services) return null;

  return (
    <section id="consultants" className="py-20 sm:py-28 bg-[#faf8f4] text-gray-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-forest/10 text-agri-forest text-xs font-black uppercase tracking-widest border border-agri-forest/20">
            <Briefcase className="w-3.5 h-3.5 text-agri-forest" />
            <span>MATRA CONSULTANTS • BUSINESS & ADVISORY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading tracking-tight text-agri-dark">
            Strategic Clarity for Career & Enterprise Growth
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Personalized career counselling, executive guidance, and lean business advisory tailored to help professionals, students, and early-stage founders make confident, purposeful decisions.
          </p>
        </div>

        {/* 3 Consulting Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {consult.services.map((service) => (
            <div
              key={service.id}
              className="bg-white border-2 border-gray-200/80 hover:border-agri-forest rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-agri-leaf/20 text-agri-forest">
                    {service.badge}
                  </span>
                  <span className="text-xs font-semibold text-gray-400">
                    {service.duration}
                  </span>
                </div>

                <h3 className="text-lg font-black text-agri-dark font-heading group-hover:text-agri-forest transition-colors leading-snug">
                  {service.name}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-gray-100">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-agri-primary flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Booking Trigger */}
              <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider block">
                    Advisory Fee
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-agri-dark font-heading">
                      ₹{service.price.toLocaleString('en-IN')}
                    </span>
                    {service.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        ₹{service.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => openConsultationModal(service)}
                  className="px-5 py-3 rounded-full bg-agri-forest hover:bg-agri-primary text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 hover:scale-105 active:scale-95"
                >
                  <span>BOOK SESSION</span>
                  <ArrowRight className="w-3.5 h-3.5 text-agri-gold" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 flex items-start gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-agri-pale text-agri-forest flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-agri-dark uppercase tracking-wider font-heading">Career Guidance</h4>
              <p className="text-[11px] text-gray-500 mt-1">Structured 1-on-1 assessment and 2-year actionable career progression plan.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 flex items-start gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-agri-pale text-agri-forest flex items-center justify-center flex-shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-agri-dark uppercase tracking-wider font-heading">Startup Validation</h4>
              <p className="text-[11px] text-gray-500 mt-1">Lean unit economics, supplier sourcing strategies, and early-stage MVP advisory.</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-200/80 flex items-start gap-3.5 shadow-2xs">
            <div className="w-10 h-10 rounded-xl bg-agri-pale text-agri-forest flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-black text-agri-dark uppercase tracking-wider font-heading">Mindful Growth</h4>
              <p className="text-[11px] text-gray-500 mt-1">Sustainable business models built without burnout, aligned with our calmer philosophy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
