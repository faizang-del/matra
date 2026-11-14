'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Heart, Eye, ShoppingBag, Star, Check, Sparkles } from 'lucide-react';
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
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1600);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHeartAnim(true);
    toggleWishlist(product.id);
    setTimeout(() => setHeartAnim(false), 400);
  };

  const handleQuickView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setQuickViewProduct(product);
  };

  return (
    <div
      onClick={() => setQuickViewProduct(product)}
      className="card-hover-lift relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-agri-mint/50 shadow-sm hover:shadow-agri-hover transition-all duration-300 flex flex-col justify-between group cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative h-64 sm:h-72 w-full bg-agri-light/60 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        />

        {/* Shimmer Glint on Hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

        {/* Badge with subtle glow */}
        {product.badge && (
          <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-agri-forest text-white text-[11px] font-extrabold tracking-wide uppercase shadow-md backdrop-blur-md border border-white/20">
            {product.badge}
          </div>
        )}

        {/* Floating Action Buttons */}
        <div className="absolute top-3.5 right-3.5 flex flex-col gap-2 z-10">
          <button
            onClick={handleToggleWishlist}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
              inWish
                ? 'bg-rose-500 text-white shadow-rose-200'
                : 'bg-white/90 text-gray-700 hover:text-rose-500 hover:bg-white'
            } ${heartAnim ? 'scale-125' : 'hover:scale-110 active:scale-95'}`}
            aria-label="Add to wishlist"
          >
            <Heart className={`w-4 h-4 transition-transform ${inWish ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleQuickView}
            className="w-10 h-10 rounded-full bg-white/90 text-gray-700 hover:text-agri-primary hover:bg-white flex items-center justify-center transition-all duration-300 shadow-md opacity-0 group-hover:opacity-100 transform translate-x-3 group-hover:translate-x-0 hover:scale-110"
            aria-label="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Quick View Button on Image Bottom */}
        <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={handleQuickView}
            className="w-full py-2.5 rounded-2xl bg-agri-dark/90 hover:bg-agri-forest text-white text-xs font-bold tracking-wider uppercase backdrop-blur-md transition-all shadow-md flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-agri-gold" />
            <span>QUICK VIEW & SPECS</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-3.5">
        <div>
          {/* Category & Weight */}
          <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
            <span className="uppercase tracking-wider text-agri-secondary font-bold text-[11px]">
              {product.category}
            </span>
            <span className="bg-agri-pale/60 px-2 py-0.5 rounded-full text-[10px] text-agri-forest font-semibold">
              {product.weight}
            </span>
          </div>

          {/* Title with hover color */}
          <h3 className="text-base font-bold text-gray-900 group-hover:text-agri-primary transition-colors font-heading line-clamp-1 mt-1.5">
            {product.name}
          </h3>

          {/* Rating Stars with smooth appearance */}
          <div className="flex items-center gap-1.5 mt-1.5">
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
            <span className="text-xs text-gray-400">({product.reviewsCount})</span>
          </div>

          {/* Short Excerpt */}
          <p className="text-xs text-gray-500 line-clamp-2 mt-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Add to Cart Button */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-black text-agri-dark font-heading">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xs text-gray-400 line-through">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              In Fresh Stock
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            className={`px-4 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 shadow-sm active:scale-95 ${
              isAdded
                ? 'bg-emerald-600 text-white shadow-emerald-200 scale-105'
                : 'bg-agri-pale hover:bg-agri-primary text-agri-forest hover:text-white hover:scale-105'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5 animate-bounce" />
                <span>ADDED</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>+ CART</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
