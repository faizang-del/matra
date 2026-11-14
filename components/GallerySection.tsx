'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { GALLERY_ITEMS, GalleryItem } from '@/data/gallery';
import { Sprout, ZoomIn, Eye, Sparkles } from 'lucide-react';
import { FloatingLeavesBackground } from './OrganicDecor';

export default function GallerySection() {
  const [filter, setFilter] = useState<'All' | 'Farms' | 'Harvesting' | 'Processing' | 'Community'>('All');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems =
    filter === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <FloatingLeavesBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-pale text-agri-forest text-xs font-extrabold tracking-wider uppercase border border-agri-mint/40 shadow-sm">
            <Sprout className="w-3.5 h-3.5 text-agri-primary animate-pulse" />
            <span>FARM LIFE & HARVEST ARCHIVE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-agri-dark font-heading">
            Glimpses into Our Living Organic Heritage
          </h2>

          <p className="text-gray-600 text-sm sm:text-base">
            Witness the morning dewdrops on our wheat stalks, the solar drying of whole spices, and the rhythmic turning of stone chakkis.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-8 pb-12">
          {(['All', 'Farms', 'Harvesting', 'Processing', 'Community'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 active:scale-95 ${
                filter === cat
                  ? 'bg-agri-forest text-white shadow-agri-hover scale-105 border border-agri-leaf/40'
                  : 'bg-agri-light text-gray-600 hover:bg-agri-pale hover:text-agri-forest hover:scale-105'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="card-hover-lift relative h-72 sm:h-84 rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-agri-hover transition-all duration-500"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Shimmer line on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-agri-dark/95 via-agri-forest/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-[10px] font-bold text-agri-gold uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  {item.category}
                </span>
                <h3 className="text-lg font-bold font-heading mt-1">
                  {item.title}
                </h3>
                <p className="text-xs text-emerald-100/80 mt-1 line-clamp-2">
                  {item.description}
                </p>
                <div className="pt-3 flex items-center gap-2 text-xs font-semibold text-agri-mint">
                  <ZoomIn className="w-4 h-4 animate-bounce" />
                  <span>Enlarge Story</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-agri-dark rounded-3xl overflow-hidden border border-white/20 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-[360px] sm:h-[500px] w-full">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 bg-agri-dark text-white flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-agri-gold uppercase tracking-wider">
                  {selectedPhoto.category}
                </span>
                <h3 className="text-xl font-bold font-heading mt-0.5">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-emerald-100/70 mt-1">
                  {selectedPhoto.description}
                </p>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-bold uppercase tracking-wider transition-colors hover:scale-105"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
