'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Sprout, ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { FloatingLeavesBackground } from './OrganicDecor';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-agri-cream relative overflow-hidden">
      {/* Decorative leaf watermarks & floating particles */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-agri-pale/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-agri-gold/10 rounded-full blur-2xl pointer-events-none" />
      <FloatingLeavesBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image Mosaic */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Large Image */}
              <div className="relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group bg-[#f4f1ea]">
                <Image
                  src="/products/matra-products-duo.jpg"
                  alt="Mātra Foods - Fresh Green Elaichi and Premium Makhana"
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Secondary Overlapping Inset Image */}
              <div className="absolute -bottom-8 -right-4 sm:-right-8 w-48 sm:w-64 h-48 sm:h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block group bg-white">
                <Image
                  src="/products/elaichi.jpg"
                  alt="Mātra Fresh Green Elaichi"
                  fill
                  className="object-contain p-2 group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Experience Badge with Pulse Glow */}
              <div className="absolute top-6 left-6 bg-gradient-to-br from-agri-forest to-agri-primary text-white p-5 rounded-2xl shadow-xl flex items-center gap-3.5 max-w-[230px] animate-float-slow border border-white/20 animate-pulse-glow">
                <div className="w-12 h-12 rounded-xl bg-agri-gold text-agri-dark flex items-center justify-center font-black text-xl flex-shrink-0 shadow-md">
                  100%
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-agri-mint">
                    Pure & Natural
                  </p>
                  <p className="text-[11px] text-white/90 font-medium">
                    Zero Artificial Additives or Dyes
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-pale text-agri-forest text-xs font-extrabold tracking-wider uppercase border border-agri-mint/40 shadow-sm">
              <Sprout className="w-3.5 h-3.5 text-agri-primary animate-pulse" />
              <span>THE MĀTRA PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-agri-dark font-heading leading-[1.2]">
              Slowing Down to Rediscover Nature’s Truest Harvest
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              <strong>MATRA Ventures Private Limited</strong> was born out of a simple, grounding conviction: living well requires tranquility, mindful nourishment, and uncompromised transparency. Across all our verticals, our guiding ethos is <strong className="text-agri-forest">A Calmer Way of Living</strong>.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              In <strong>MATRA Foods</strong>, our Bihar Makhana is <em>Made Fresh to Order</em> in small batches at our home-based setup post-order, our extra-bold <em>Fresh Green Elaichi</em> is directly sourced from Bodinayakanur, and our artisanal <em>Elaichi Garlands (Elakkai Malai)</em> are hand-woven for sacred celebrations.
            </p>

            {/* Checklist Grid with Micro-Interactions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                { title: '100% Pure Ingredients & Zero Additives', icon: ShieldCheck },
                { title: 'Single-Origin Sourced from Bodinayakanur & Bihar', icon: Sprout },
                { title: 'Shade-Cured Cardamom — Natural Emerald Pods', icon: CheckCircle2 },
                { title: 'Hand-Harvested Wetland Lotus Seeds', icon: HeartHandshake },
                { title: 'Zero Sulfur, Chemical Bleach, or Artificial Dyes', icon: ShieldCheck },
                { title: 'Multi-Barrier Aroma Lock Sealed Pouches', icon: CheckCircle2 },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-2 rounded-xl hover:bg-agri-pale/40 transition-all duration-200 group cursor-default"
                  >
                    <div className="w-6 h-6 rounded-lg bg-agri-pale group-hover:bg-agri-primary text-agri-primary group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-gray-800 group-hover:text-agri-dark transition-colors">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Founder Note & CTA */}
            <div className="pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-agri-forest to-agri-primary flex items-center justify-center text-agri-gold font-bold text-xl font-heading shadow-md transform hover:rotate-6 transition-transform">
                  Mā
                </div>
                <div>
                  <h4 className="text-sm font-bold text-gray-900 font-heading">
                    The Mātra Quality Guarantee
                  </h4>
                  <p className="text-xs text-gray-500">
                    Naturally Exceptional • Sourced with Intention
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-agri-forest text-agri-forest hover:bg-agri-forest hover:text-white text-xs font-bold tracking-wider uppercase transition-colors"
                >
                  <span>Our Full Heritage</span>
                </Link>
                <Link
                  href="/products"
                  className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-full bg-agri-forest hover:bg-agri-primary text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 shadow-agri hover:scale-105"
                >
                  <span>SHOP PRODUCE</span>
                  <ArrowRight className="w-4 h-4 text-agri-gold" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
