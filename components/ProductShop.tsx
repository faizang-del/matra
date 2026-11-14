'use client';

import React, { useState } from 'react';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import ProductCard from './ProductCard';
import { Sprout, Sparkles, ArrowRight } from 'lucide-react';
import { FloatingLeavesBackground } from './OrganicDecor';

export default function ProductShop() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="shop" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <FloatingLeavesBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-pale text-agri-forest text-xs font-extrabold tracking-wider uppercase border border-agri-mint/40 shadow-sm">
            <Sprout className="w-3.5 h-3.5 text-agri-primary animate-pulse" />
            <span>FARM STORE & STAPLES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-agri-dark font-heading">
            Naturally Grown, Cold-Processed & Freshly Packed
          </h2>

          <p className="text-gray-600 text-sm sm:text-base">
            Every product is produced in small, artisanal batches to ensure peak aroma, high biological nutrient value, and absolute zero adulteration.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-10 pb-12">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-sm active:scale-95 ${
                  isActive
                    ? 'bg-agri-forest text-white shadow-agri-hover scale-105 border border-agri-leaf/40'
                    : 'bg-agri-light text-gray-600 hover:bg-agri-pale hover:text-agri-forest hover:scale-105'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Guarantee Banner with Shimmer Button */}
        <div className="mt-16 bg-gradient-to-r from-agri-dark via-agri-forest to-agri-primary rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 relative overflow-hidden">
          {/* Subtle animated light glow behind */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-agri-leaf/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-2 text-center md:text-left relative z-10">
            <div className="inline-flex items-center gap-2 text-agri-gold text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>THE MATRA ZERO-ADULTERATION PLEDGE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading">
              Need Custom Grind or Bulk Institutional Supply?
            </h3>
            <p className="text-emerald-100/80 text-xs sm:text-sm max-w-xl">
              We supply certified stone-milled whole wheat atta, virgin cold-pressed oils, and royal compounded hing in customized 25kg / 50kg moisture-lock packaging for cafes, bakeries, and fine restaurants.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 relative z-10">
            <a
              href="#contact"
              className="btn-shimmer px-7 py-3.5 rounded-full bg-agri-gold hover:bg-amber-400 text-agri-dark text-xs font-black tracking-wider uppercase transition-all duration-300 shadow-agri-gold hover:scale-105 flex items-center gap-2"
            >
              <span>REQUEST B2B WHOLESALE QUOTE</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
