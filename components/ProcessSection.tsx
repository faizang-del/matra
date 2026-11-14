'use client';

import React from 'react';
import { Sprout, Sun, Wind, PackageCheck, ArrowRight, Sparkles } from 'lucide-react';
import { FloatingLeavesBackground } from './OrganicDecor';

const STEPS = [
  {
    step: '01',
    icon: Sprout,
    title: 'Biological Soil Cultivation',
    subtitle: 'Pure Seeds & Compost',
    description: 'We sow heirloom non-hybrid seeds into soils nourished by ancient compost and green manure, avoiding every synthetic chemical or toxic pesticide.',
    color: 'from-emerald-500 to-agri-primary',
  },
  {
    step: '02',
    icon: Sun,
    title: 'Peak Sunlight Harvesting',
    subtitle: 'Handpicked at Maturity',
    description: 'Crops are hand-harvested only when natural grains and fruits attain peak essential oil content, followed by gentle courtyard solar curing.',
    color: 'from-amber-500 to-agri-gold',
  },
  {
    step: '03',
    icon: Wind,
    title: 'Slow Cold Stone Milling',
    subtitle: 'Low-RPM Emery Chakkis',
    description: 'Grinding happens at less than 40 RPM, keeping temperatures under 38°C to shield live enzymes, aromatic volatile oils, and coarse bran.',
    color: 'from-teal-500 to-emerald-600',
  },
  {
    step: '04',
    icon: PackageCheck,
    title: 'Aroma-Barrier Dispatch',
    subtitle: 'Direct Farm-to-Table',
    description: 'Every batch is vacuum-sealed in oxygen-impermeable, biodegradable packaging and shipped fresh within 24 hours of artisanal grinding.',
    color: 'from-agri-primary to-agri-forest',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 lg:py-28 bg-agri-dark text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-agri-primary/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-agri-gold/15 rounded-full blur-3xl pointer-events-none" />
      <FloatingLeavesBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-leaf/20 text-agri-mint text-xs font-extrabold tracking-wider uppercase border border-agri-mint/30 shadow-sm">
            <Sprout className="w-3.5 h-3.5 text-agri-gold animate-bounce" />
            <span>HOW MATRA FOODS WORKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading leading-tight">
            The Sacred 4-Step Journey: From Living Soil to Your Kitchen
          </h2>

          <p className="text-emerald-100/80 text-sm sm:text-base">
            We reject industrial shortcuts. Every gram of flour, spice, and oil follows ancestral methods designed to maximize vitality and nourishment.
          </p>
        </div>

        {/* 4 Steps Grid with animated connecting line */}
        <div className="relative mt-16">
          {/* Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-agri-leaf/20 via-agri-gold/40 to-agri-leaf/20 -translate-y-8 z-0">
            <div className="absolute top-0 bottom-0 w-24 bg-agri-gold rounded-full blur-sm animate-[shimmer_3s_infinite_linear]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {STEPS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="card-hover-lift relative bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-3xl p-7 hover:bg-white/[0.12] hover:border-agri-leaf/50 transition-all duration-300 group flex flex-col justify-between"
                >
                  {/* Step Number Watermark with hover illumination */}
                  <span className="absolute top-4 right-6 text-5xl font-black text-white/10 font-heading group-hover:text-agri-gold/40 group-hover:scale-110 transition-all duration-300">
                    {item.step}
                  </span>

                  <div>
                    {/* Icon with gradient glow */}
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-115 group-hover:rotate-6 transition-all duration-300 border border-white/20 mb-6`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Title & Subtitle */}
                    <span className="text-[11px] font-bold text-agri-mint uppercase tracking-wider block">
                      {item.subtitle}
                    </span>
                    <h3 className="text-lg font-bold text-white font-heading mt-1 group-hover:text-agri-gold transition-colors">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-emerald-100/70 mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-agri-mint group-hover:text-white transition-colors">
                    <Sparkles className="w-3.5 h-3.5 text-agri-gold" />
                    <span>Certified Vedic Standard</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
