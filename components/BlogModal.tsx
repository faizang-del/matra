'use client';

import React from 'react';
import Image from 'next/image';
import { X, Calendar, Clock, User, Share2, Tag, Bookmark } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function BlogModal() {
  const { activeBlogPost, setActiveBlogPost, showToast } = useShop();

  if (!activeBlogPost) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    showToast('Article link copied to clipboard!', 'info');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={() => setActiveBlogPost(null)}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-200 border border-gray-100 max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={() => setActiveBlogPost(null)}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-gray-100 text-gray-700 flex items-center justify-center shadow-md transition-colors"
          aria-label="Close article"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image banner */}
        <div className="relative h-64 sm:h-80 w-full bg-gray-100 flex-shrink-0">
          <Image
            src={activeBlogPost.image}
            alt={activeBlogPost.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <span className="px-3 py-1 rounded-full bg-agri-forest text-white text-xs font-bold uppercase tracking-wider">
              {activeBlogPost.category}
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold font-heading leading-tight drop-shadow">
              {activeBlogPost.title}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-gray-100 text-xs text-gray-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5 font-bold text-gray-800">
                <User className="w-4 h-4 text-agri-primary" />
                {activeBlogPost.author} ({activeBlogPost.authorRole})
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-agri-primary" />
                {activeBlogPost.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-agri-primary" />
                {activeBlogPost.readTime}
              </span>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 text-agri-forest hover:text-agri-primary font-bold hover:underline"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Article</span>
            </button>
          </div>

          {/* Article Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed font-sans">
            {activeBlogPost.content.map((paragraph, idx) => (
              <p key={idx} className="first-letter:text-3xl first-letter:font-heading first-letter:font-bold first-letter:text-agri-forest">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-gray-400 mr-2 flex items-center gap-1">
              <Tag className="w-3.5 h-3.5" />
              <span>Related Topics:</span>
            </span>
            {activeBlogPost.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-agri-light text-agri-forest text-xs font-bold"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
