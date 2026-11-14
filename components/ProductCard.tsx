'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Eye, ShoppingBag, Star, Check, ShieldCheck, MapPin, ArrowUpRight } from 'lucide-react';
import { Product } from '@/data/products';
import { useShop } from '@/context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useShop();
  const [isAdded, setIsAdded] = useState(false);
  const [heartAnim, setHeartAnim] = useState(false);
  const inWish = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setHeartAnim(true);
    toggleWishlist(product.id);
    setTimeout(() => setHeartAnim(false), 400);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  return (
    <div className="card-hover-lift relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-agri-mint/60 shadow-sm hover:shadow-agri-hover transition-all duration-300 flex flex-col justify-between group">
      {/* Top Image Container - Perfectly framed for packaging */}
      <Link
        href={`/products/${product.id}`}
        className="relative h-80 sm:h-96 w-full bg-gradient-to-b from-[#faf8f4] to-[#f2ede4] overflow-hidden flex items-center justify-center p-4 cursor-pointer block"
        aria-label={`View details for ${product.name}`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-2 group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Shimmer Glint on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

        {/* Origin Badge */}
        {product.origin && (
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-agri-forest text-white text-[11px] font-extrabold tracking-wide uppercase shadow-md backdrop-blur-md border border-white/20">
            <MapPin className="w-3 h-3 text-agri-gold" />
            <span>{product.origin}</span>
          </div>
        )}

        {/* Floating Action Buttons */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-10">
          <button
            onClick={handleToggleWishlist}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
              inWish
                ? 'bg-rose-500 text-white shadow-rose-200'
                : 'bg-white/95 text-gray-700 hover:text-rose-500 hover:bg-white'
            } ${heartAnim ? 'scale-125' : 'hover:scale-110 active:scale-95'}`}
            aria-label="Add to wishlist"
          >
            <Heart className={`w-4 h-4 transition-transform ${inWish ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleQuickView}
            className="w-10 h-10 rounded-full bg-white/95 text-gray-700 hover:text-agri-primary hover:bg-white flex items-center justify-center transition-all duration-300 shadow-md opacity-0 group-hover:opacity-100 transform translate-x-3 group-hover:translate-x-0 hover:scale-110"
            aria-label="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Quick View Button on Image Bottom */}
        <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={handleQuickView}
            className="w-full py-2.5 rounded-2xl bg-agri-dark/95 hover:bg-agri-forest text-white text-xs font-bold tracking-wider uppercase backdrop-blur-md transition-all shadow-md flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-agri-gold" />
            <span>QUICK VIEW & NUTRITIONAL FACTS</span>
          </button>
        </div>
      </Link>

      {/* Product Content Details */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category & Weight */}
          <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
            <span className="uppercase tracking-wider text-agri-secondary font-extrabold text-[11px]">
              {product.category}
            </span>
            <span className="bg-agri-pale/70 px-2.5 py-0.5 rounded-full text-[11px] text-agri-forest font-bold">
              {product.weight}
            </span>
          </div>

          {/* Title with Link to PDP */}
          <Link href={`/products/${product.id}`} className="group/title block mt-1">
            <h3 className="text-xl font-bold text-gray-900 group-hover/title:text-agri-primary transition-colors font-heading flex items-center justify-between">
              <span>{product.name}</span>
              <ArrowUpRight className="w-4 h-4 text-gray-400 opacity-0 group-hover/title:opacity-100 group-hover/title:text-agri-primary transition-all group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5" />
            </h3>
          </Link>

          {/* Origin tagline */}
          <p className="text-xs font-bold text-agri-gold uppercase tracking-wider flex items-center gap-1 mt-0.5">
            <span>{product.origin}</span>
          </p>

          {/* Rating Stars with review count */}
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex items-center text-agri-gold">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${
                    i < Math.floor(product.rating)
                      ? 'fill-current'
                      : 'text-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs font-bold text-gray-700">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviewsCount} reviews)</span>
          </div>

          {/* Short Excerpt */}
          <p className="text-xs text-gray-600 line-clamp-2 mt-2 leading-relaxed">
            {product.description}
          </p>

          {/* 3 Packaging Badges as seen on the actual pouches */}
          <div className="flex flex-wrap items-center gap-2 pt-3">
            {product.features.slice(0, 3).map((feat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-agri-light/80 text-[10px] font-bold text-agri-forest uppercase tracking-wide border border-agri-mint/30"
              >
                <ShieldCheck className="w-3 h-3 text-agri-gold" />
                <span>{feat}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Price & Add to Cart Button */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-agri-dark font-heading">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-700 font-bold flex items-center gap-1 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              In Fresh Harvest Stock
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={`/products/${product.id}`}
              className="hidden sm:inline-flex px-3.5 py-2.5 rounded-full text-xs font-bold tracking-wider text-agri-forest hover:bg-agri-pale/60 border border-agri-mint/30 transition-colors uppercase"
            >
              Details
            </Link>

            <button
              onClick={handleAddToCart}
              className={`px-5 py-3 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 shadow-sm active:scale-95 whitespace-nowrap ${
                isAdded
                  ? 'bg-emerald-600 text-white shadow-emerald-200 scale-105'
                  : 'bg-agri-forest hover:bg-agri-primary text-white hover:scale-105'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 animate-bounce" />
                  <span>ADDED</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-agri-gold" />
                  <span>ADD TO CART</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
