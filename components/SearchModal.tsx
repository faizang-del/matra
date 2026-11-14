'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Search, ArrowRight, Star } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { PRODUCTS } from '@/data/products';

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct } = useShop();
  const [query, setQuery] = useState('');

  if (!isSearchOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.ingredients.toLowerCase().includes(query.toLowerCase())
      )
    : PRODUCTS.slice(0, 4); // show trending 4 when empty

  const handleSelectProduct = (product: typeof PRODUCTS[0]) => {
    setIsSearchOpen(false);
    setQuickViewProduct(product);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-200 border border-gray-100">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-6 border-b border-gray-100 flex items-center gap-3 bg-agri-cream">
          <Search className="w-5 h-5 text-agri-primary flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search green elaichi, premium makhana, single-origin spices..."
            className="w-full text-sm sm:text-base bg-transparent font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-gray-400 hover:text-gray-600 font-bold px-2 py-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Tag Recommendations */}
        <div className="px-6 py-3 bg-gray-50 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-gray-400 font-semibold flex-shrink-0">Popular:</span>
          {['Green Elaichi', 'Bodinayakanur Cardamom', 'Premium Makhana', 'Bihar Fox Nuts'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2.5 py-1 rounded-full bg-white border border-gray-200 text-gray-600 hover:border-agri-primary hover:text-agri-forest flex-shrink-0 transition-colors font-medium"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Search Results List */}
        <div className="p-4 sm:p-6 max-h-[420px] overflow-y-auto space-y-3">
          <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
            {query.trim() ? `Search Results (${results.length})` : 'Mātra Single-Origin Harvest'}
          </div>

          {results.length === 0 ? (
            <div className="text-center py-12 text-gray-500 space-y-2">
              <p className="text-sm font-semibold">No products found for &quot;{query}&quot;</p>
              <p className="text-xs text-gray-400">
                Try searching for Green Elaichi, Makhana, or single-origin harvest.
              </p>
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => handleSelectProduct(product)}
                className="flex items-center gap-4 p-3 rounded-2xl border border-gray-100 hover:border-agri-mint/50 hover:bg-agri-pale/30 transition-all cursor-pointer group"
              >
                <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-[#f4f1ea] flex-shrink-0">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-1 group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="flex-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-agri-secondary">
                    {product.category}
                  </span>
                  <h4 className="text-sm font-bold text-gray-900 group-hover:text-agri-primary font-heading line-clamp-1">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs font-bold text-agri-dark">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium">
                      {product.weight}
                    </span>
                    <div className="flex items-center text-agri-gold text-[10px] gap-0.5">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-agri-pale group-hover:bg-agri-forest text-agri-forest group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
