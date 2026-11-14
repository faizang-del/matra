'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import ProductCard from './ProductCard';
import { Sprout, Sparkles, ShoppingBag, Check, ShieldCheck } from 'lucide-react';
import { FloatingLeavesBackground } from './OrganicDecor';
import { useShop } from '@/context/ShopContext';

export default function ProductShop() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const { addToCart } = useShop();
  const [duoAdded, setDuoAdded] = useState(false);

  const filteredProducts =
    selectedCategory === 'All Products'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleAddBoth = () => {
    PRODUCTS.forEach((p) => addToCart(p, 1));
    setDuoAdded(true);
    setTimeout(() => setDuoAdded(false), 2000);
  };

  return (
    <section id="shop" className="py-20 lg:py-28 bg-[#faf8f4] relative overflow-hidden">
      <FloatingLeavesBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-pale text-agri-forest text-xs font-extrabold tracking-wider uppercase border border-agri-mint/40 shadow-sm">
            <Sprout className="w-3.5 h-3.5 text-agri-primary animate-pulse" />
            <span>OUR SINGLE-ORIGIN HARVEST</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-agri-dark font-heading">
            Naturally Exceptional Staples
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We focus on purity over quantity. Sourced with intention from India’s most celebrated geographical belts—Bodinayakanur and Bihar—with zero chemical additives.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-8 pb-12">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 shadow-sm active:scale-95 ${
                  isActive
                    ? 'bg-agri-forest text-white shadow-agri-hover scale-105 border border-agri-leaf/40'
                    : 'bg-white text-gray-600 hover:bg-agri-pale hover:text-agri-forest hover:scale-105'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 2-Product Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Duo Crate Showcase Banner with Real Photo */}
        <div className="mt-16 max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-xl flex flex-col lg:flex-row items-center justify-between">
          {/* Duo Photo Container */}
          <div className="relative w-full lg:w-1/2 h-72 sm:h-84 bg-[#f4f1ea]">
            <Image
              src="/products/matra-products-duo.jpg"
              alt="Mātra Fresh Green Elaichi and Premium Makhana Duo"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-agri-forest text-white text-xs font-bold uppercase tracking-wider shadow-md">
              MĀTRA DUO SET
            </div>
          </div>

          {/* Details & Instant Add Both */}
          <div className="p-8 sm:p-10 lg:w-1/2 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-agri-gold">
              COMPLETE HARVEST EXPERIENCE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-agri-dark font-heading">
              The Calmer Living Pantry Duo
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Experience the intoxicating fragrance of{' '}
              <Link
                href="/products/matra-fresh-green-elaichi"
                className="text-agri-forest font-bold hover:underline"
              >
                Bodinayakanur Green Elaichi
              </Link>{' '}
              paired with the airy, crunchy superfood nutrition of{' '}
              <Link
                href="/products/matra-premium-makhana"
                className="text-agri-forest font-bold hover:underline"
              >
                Bihar Popped Makhana
              </Link>
              . Packed with zero chemical additives.
            </p>

            <div className="flex items-center gap-4 py-1 text-xs text-gray-700">
              <span className="flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4 text-agri-primary" />
                Pure Ingredients
              </span>
              <span className="flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-4 h-4 text-agri-primary" />
                No Additives
              </span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div>
                <span className="text-2xl font-black text-agri-dark font-heading">
                  $22.98
                </span>
                <span className="text-xs text-gray-400 line-through ml-2">
                  $28.00
                </span>
              </div>

              <button
                onClick={handleAddBoth}
                className={`btn-shimmer px-7 py-3.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 ${
                  duoAdded
                    ? 'bg-emerald-600 text-white'
                    : 'bg-agri-forest hover:bg-agri-primary text-white hover:scale-105'
                }`}
              >
                {duoAdded ? (
                  <>
                    <Check className="w-4 h-4 animate-bounce" />
                    <span>BOTH ITEMS ADDED!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-agri-gold" />
                    <span>ADD BOTH TO BASKET</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
