'use client';

import React from 'react';
import Image from 'next/image';
import { BLOG_POSTS, BlogPost } from '@/data/blog';
import { useShop } from '@/context/ShopContext';
import { Sprout, Calendar, Clock, ArrowRight } from 'lucide-react';
import { FloatingLeavesBackground } from './OrganicDecor';

export default function BlogSection() {
  const { setActiveBlogPost } = useShop();

  return (
    <section id="blog" className="py-20 lg:py-28 bg-agri-cream relative overflow-hidden">
      <FloatingLeavesBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-pale text-agri-forest text-xs font-extrabold tracking-wider uppercase border border-agri-mint/40 shadow-sm">
            <Sprout className="w-3.5 h-3.5 text-agri-primary animate-pulse" />
            <span>MĀTRA WELLNESS & HARVEST JOURNAL</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-agri-dark font-heading">
            Mindful Nutrition for a Calmer Way of Living
          </h2>

          <p className="text-gray-600 text-sm sm:text-base">
            Expert insights on single-origin sourcing, cardamom essential oils, wetland makhana nutrition, and clean chemical-free living.
          </p>
        </div>

        {/* 3 Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              onClick={() => setActiveBlogPost(post)}
              className="card-hover-lift relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-agri-mint/50 shadow-sm hover:shadow-agri-hover transition-all duration-300 flex flex-col justify-between group cursor-pointer"
            >
              {/* Image with category badge */}
              <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-agri-forest text-white text-[11px] font-extrabold uppercase tracking-wide shadow-md backdrop-blur-md border border-white/20">
                  {post.category}
                </span>

                {/* Shimmer sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Meta items */}
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-agri-primary" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <Clock className="w-3.5 h-3.5 text-agri-primary" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-agri-primary transition-colors font-heading leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                {/* Author & Read More */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-agri-pale text-agri-forest flex items-center justify-center text-xs font-bold font-heading border border-agri-mint/40">
                      {post.author.charAt(3)}
                    </div>
                    <span className="text-xs font-bold text-gray-700">{post.author}</span>
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-agri-forest group-hover:text-agri-primary transition-colors uppercase tracking-wider">
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform text-agri-gold" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
