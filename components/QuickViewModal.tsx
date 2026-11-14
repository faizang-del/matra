'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X, Star, ShoppingBag, Heart, ShieldCheck, Check, Leaf } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist } = useShop();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!quickViewProduct) return null;

  const inWish = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      setQuickViewProduct(null);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-200 border border-gray-100 max-h-[90vh] flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-gray-100 text-gray-700 flex items-center justify-center shadow-md transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Image & Badges */}
        <div className="relative md:w-1/2 min-h-[300px] md:min-h-full bg-[#faf8f4] flex items-center justify-center p-6">
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-inner bg-gradient-to-b from-[#faf8f4] to-[#f2ede4] flex items-center justify-center">
            <Image
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              fill
              className="object-contain p-3"
            />
          </div>

          {quickViewProduct.badge && (
            <div className="absolute top-8 left-8 px-3.5 py-1.5 rounded-full bg-agri-forest text-white text-xs font-bold uppercase tracking-wider shadow-md">
              {quickViewProduct.badge}
            </div>
          )}

          {quickViewProduct.harvestSeason && (
            <div className="absolute bottom-8 left-8 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 text-agri-dark text-[11px] font-bold backdrop-blur-md shadow-sm">
              <Leaf className="w-3.5 h-3.5 text-agri-primary" />
              <span>{quickViewProduct.harvestSeason}</span>
            </div>
          )}
        </div>

        {/* Right: Specifications & Purchasing Controls */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[500px] md:max-h-[620px] space-y-5">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-agri-secondary uppercase tracking-widest">
                {quickViewProduct.category}
              </span>
              <span className="px-2.5 py-1 rounded bg-agri-pale text-agri-forest text-xs font-extrabold">
                {quickViewProduct.weight}
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-gray-900 font-heading leading-snug">
              {quickViewProduct.name}
            </h3>

            {/* Stars & Reviews */}
            <div className="flex items-center gap-2">
              <div className="flex items-center text-agri-gold">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(quickViewProduct.rating)
                        ? 'fill-current'
                        : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-800">
                {quickViewProduct.rating} / 5.0
              </span>
              <span className="text-xs text-gray-400">
                ({quickViewProduct.reviewsCount} verified customer reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 pt-1">
              <span className="text-3xl font-extrabold text-agri-dark font-heading">
                ${quickViewProduct.price.toFixed(2)}
              </span>
              {quickViewProduct.originalPrice > quickViewProduct.price && (
                <span className="text-base text-gray-400 line-through">
                  ${quickViewProduct.originalPrice.toFixed(2)}
                </span>
              )}
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                Save ${(quickViewProduct.originalPrice - quickViewProduct.price).toFixed(2)}
              </span>
            </div>

            {/* Detailed Description */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
              {quickViewProduct.longDescription}
            </p>

            {/* Ingredients */}
            <div className="bg-agri-light p-3.5 rounded-xl border border-gray-100 text-xs">
              <span className="font-bold text-gray-800 block mb-1">Ingredients:</span>
              <p className="text-gray-600">{quickViewProduct.ingredients}</p>
            </div>

            {/* Nutritional & Quality Highlights */}
            <div>
              <span className="text-xs font-bold text-gray-800 block mb-2">
                Nutritional & Quality Purity:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {quickViewProduct.nutrition.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] text-gray-600">
                    <ShieldCheck className="w-3.5 h-3.5 text-agri-primary flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-gray-200 space-y-3">
            <div className="flex items-center gap-3">
              {/* Quantity Counter */}
              <div className="flex items-center border border-gray-300 rounded-full overflow-hidden bg-gray-50">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3.5 py-2 text-gray-600 hover:bg-gray-200 font-bold"
                >
                  -
                </button>
                <span className="px-4 text-xs font-extrabold text-gray-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3.5 py-2 text-gray-600 hover:bg-gray-200 font-bold"
                >
                  +
                </button>
              </div>

              {/* Add to Cart CTA */}
              <button
                onClick={handleAddToCart}
                disabled={added}
                className={`flex-1 py-3 px-6 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                  added
                    ? 'bg-emerald-600 text-white'
                    : 'bg-agri-forest hover:bg-agri-primary text-white hover:scale-[1.02]'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>ADDED TO CART!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 text-agri-gold" />
                    <span>ADD TO CART (${(quickViewProduct.price * quantity).toFixed(2)})</span>
                  </>
                )}
              </button>

              {/* Wishlist toggle */}
              <button
                onClick={() => toggleWishlist(quickViewProduct.id)}
                className={`p-3 rounded-full border border-gray-200 transition-colors ${
                  inWish
                    ? 'bg-rose-50 border-rose-300 text-rose-500'
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-5 h-5 ${inWish ? 'fill-current' : ''}`} />
              </button>
            </div>

            <p className="text-[11px] text-gray-400 text-center flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-agri-primary" />
              <span>Certified 100% Non-Adulterated. Sealed in fresh aroma-barrier pack.</span>
            </p>

            <div className="pt-2 text-center">
              <Link
                href={`/products/${quickViewProduct.id}`}
                onClick={() => setQuickViewProduct(null)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-agri-forest hover:text-agri-primary uppercase tracking-wider underline underline-offset-4 transition-colors"
              >
                <span>View Dedicated Product Page & Sourcing Story →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
