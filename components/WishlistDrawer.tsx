'use client';

import React from 'react';
import Image from 'next/image';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { PRODUCTS } from '@/data/products';

export default function WishlistDrawer() {
  const { wishlist, isWishlistOpen, setIsWishlistOpen, toggleWishlist, addToCart } = useShop();

  if (!isWishlistOpen) return null;

  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  const handleMoveToCart = (product: typeof PRODUCTS[0]) => {
    addToCart(product, 1);
    toggleWishlist(product.id);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-agri-cream">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <Heart className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-agri-dark font-heading">
                  Saved Favorites
                </h3>
                <span className="text-xs text-gray-500 font-medium">
                  {wishlistProducts.length} organic staples
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsWishlistOpen(false)}
              className="p-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
              aria-label="Close wishlist"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {wishlistProducts.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 rounded-full bg-rose-50 flex items-center justify-center text-rose-400">
                  <Heart className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 font-heading">
                    No items in your wishlist yet
                  </h4>
                  <p className="text-xs text-gray-500 max-w-xs mt-1">
                    Click the heart on any product to save it for your next organic recipe.
                  </p>
                </div>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-agri-forest text-white text-xs font-bold tracking-wider uppercase hover:bg-agri-primary transition-colors"
                >
                  DISCOVER PRODUCTS
                </button>
              </div>
            ) : (
              wishlistProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 p-3 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#faf8f4] flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-bold text-gray-900 line-clamp-1 font-heading">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          className="text-gray-400 hover:text-rose-500 transition-colors p-0.5"
                          title="Remove from wishlist"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-gray-400 font-medium">
                        {product.weight} • ₹{product.price.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => handleMoveToCart(product)}
                        className="w-full py-1.5 px-3 rounded-xl bg-agri-pale hover:bg-agri-primary text-agri-forest hover:text-white text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-1.5"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>MOVE TO CART</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          {wishlistProducts.length > 0 && (
            <div className="p-5 border-t border-gray-100 bg-agri-cream">
              <button
                onClick={() => {
                  wishlistProducts.forEach((p) => addToCart(p, 1));
                  setIsWishlistOpen(false);
                }}
                className="w-full py-3.5 rounded-2xl bg-agri-forest hover:bg-agri-primary text-white font-extrabold text-xs tracking-wider uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2"
              >
                <span>ADD ALL TO BASKET</span>
                <ArrowRight className="w-4 h-4 text-agri-gold" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
