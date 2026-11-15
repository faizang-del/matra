'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS, CATEGORIES } from '@/data/products';
import ProductCard from './ProductCard';
import { Sprout, Sparkles, ShoppingBag, Check, ShieldCheck, Flame, HeartHandshake, ArrowRight } from 'lucide-react';
import { FloatingLeavesBackground } from './OrganicDecor';
import { useShop } from '@/context/ShopContext';

interface ProductShopProps {
  showCatalogLink?: boolean;
}

export default function ProductShop({ showCatalogLink = false }: ProductShopProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const { addToCart } = useShop();
  const [duoAdded, setDuoAdded] = useState(false);

  const filteredProducts =
    selectedCategory === 'All Products'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  const handleAddBoth = () => {
    // Adds Makhana (5 packs MOQ) and Elaichi (1 pack 50g)
    addToCart(PRODUCTS[0], 5);
    addToCart(PRODUCTS[1], 1);
    setDuoAdded(true);
    setTimeout(() => setDuoAdded(false), 2500);
  };

  return (
    <section id="shop" className="py-20 lg:py-28 bg-[#faf8f4] relative overflow-hidden">
      <FloatingLeavesBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-pale text-agri-forest text-xs font-black tracking-wider uppercase border border-agri-mint/40 shadow-sm">
            <Sprout className="w-3.5 h-3.5 text-agri-primary animate-pulse" />
            <span>MATRA FOODS • HEALTHY VEGETARIAN LIVING</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-agri-dark font-heading">
            Directly Sourced. Freshly Prepared.
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            We focus on absolute freshness and purity. Our Bihar Makhana is <strong>Made Fresh to Order</strong> in small batches post-order, and our Bodinayakanur Elaichi and handcrafted ceremonial garlands bring true unadulterated botanical elegance.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold tracking-wide transition-all duration-300 shadow-sm active:scale-95 ${
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

        {/* 3-Product Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {showCatalogLink && (
          <div className="text-center pt-2">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-agri-forest hover:bg-agri-primary text-white text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105"
            >
              <span>Explore Dedicated Products Page</span>
              <ArrowRight className="w-4 h-4 text-agri-gold" />
            </Link>
          </div>
        )}

        {/* Made-Fresh USP Banner with Real Produce Photo */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl overflow-hidden border border-gray-200/80 shadow-xl flex flex-col lg:flex-row items-center justify-between">
          {/* Duo Photo Container */}
          <div className="relative w-full lg:w-1/2 h-72 sm:h-84 bg-[#f4f1ea]">
            <Image
              src="/products/matra-products-duo.jpg"
              alt="Mātra Fresh Green Elaichi and Classic Salted Makhana"
              fill
              className="object-cover"
            />
            <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-agri-forest text-white text-xs font-extrabold uppercase tracking-wider shadow-md flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-agri-gold" />
              <span>ROASTED POST-ORDER</span>
            </div>
          </div>

          {/* Details & Instant Add Bundle */}
          <div className="p-8 sm:p-10 lg:w-1/2 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-agri-gold">
              SIGNATURE HARVEST BUNDLE
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-agri-dark font-heading">
              The Calmer Living Pantry Box
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Order our popular bundle featuring <strong>5 packets of Classic Salted Makhana (500g total)</strong> roasted fresh upon placement, paired with <strong>50g of Bodinayakanur Fresh Green Elaichi</strong> in multi-barrier pouches.
            </p>

            <div className="flex flex-wrap items-center gap-4 py-1 text-xs text-gray-700">
              <span className="flex items-center gap-1.5 font-bold text-agri-forest">
                <ShieldCheck className="w-4 h-4 text-agri-primary" />
                Directly Sourced
              </span>
              <span className="flex items-center gap-1.5 font-bold text-agri-forest">
                <Flame className="w-4 h-4 text-agri-gold" />
                Prepared Fresh to Order
              </span>
              <span className="flex items-center gap-1.5 font-bold text-agri-forest">
                <HeartHandshake className="w-4 h-4 text-agri-primary" />
                Zero Chemical Additives
              </span>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div>
                <span className="text-2xl font-black text-agri-dark font-heading">
                  ₹1,849
                </span>
                <span className="text-xs text-gray-400 line-through ml-2">
                  ₹2,165
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
                    <span>BUNDLE ADDED TO BASKET!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-agri-gold" />
                    <span>ADD FRESH BUNDLE (SAVE ₹316)</span>
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
