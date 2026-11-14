'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/data/testimonials';
import { Star, Quote, ChevronLeft, ChevronRight, Sprout, CheckCircle2 } from 'lucide-react';
import { FloatingLeavesBackground } from './OrganicDecor';

export default function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[activeIdx];

  return (
    <section className="py-20 lg:py-28 bg-agri-cream relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-agri-pale/40 rounded-full blur-3xl pointer-events-none" />
      <FloatingLeavesBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-pale text-agri-forest text-xs font-extrabold tracking-wider uppercase border border-agri-mint/40 shadow-sm">
            <Sprout className="w-3.5 h-3.5 text-agri-primary animate-pulse" />
            <span>COMMUNITY TESTIMONIALS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-agri-dark font-heading">
            Trusted by Michelin Chefs, Nutritionists & 40,000+ Homes
          </h2>

          <p className="text-gray-600 text-sm sm:text-base">
            Read what passionate home cooks, professional chefs, and wellness leaders experience when they switch to pure Matra staples.
          </p>
        </div>

        {/* Featured Testimonial Spotlight Card */}
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-agri hover:shadow-agri-hover transition-all duration-300 border border-gray-100 relative">
          <div className="absolute top-8 right-8 text-agri-pale/80 hidden sm:block">
            <Quote className="w-24 h-24 text-agri-pale/80 fill-current -scale-x-100 animate-pulse-subtle" />
          </div>

          <div key={activeIdx} className="relative z-10 space-y-6 animate-slide-up-fade">
            {/* Rating Stars & Highlight Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center text-agri-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current animate-bounce-subtle" style={{ animationDelay: `${i * 100}ms` }} />
                ))}
              </div>
              <span className="px-3.5 py-1 rounded-full bg-agri-pale text-agri-forest text-xs font-extrabold tracking-wide border border-agri-mint/30 shadow-sm">
                {current.highlight}
              </span>
            </div>

            {/* Quote */}
            <blockquote className="text-lg sm:text-2xl font-serif text-gray-800 italic leading-relaxed">
              &quot;{current.quote}&quot;
            </blockquote>

            {/* Author Profile */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-100 flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-agri-primary shadow-md flex-shrink-0 group">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-base font-extrabold text-agri-dark font-heading">
                      {current.name}
                    </h4>
                    <CheckCircle2 className="w-4 h-4 text-agri-primary" />
                  </div>
                  <p className="text-xs font-semibold text-agri-secondary">
                    {current.role}
                  </p>
                  <p className="text-[11px] text-gray-400">
                    {current.location}
                  </p>
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full bg-agri-light hover:bg-agri-forest text-gray-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs font-bold text-gray-400 px-2 font-mono">
                  {activeIdx + 1} / {TESTIMONIALS.length}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full bg-agri-light hover:bg-agri-forest text-gray-700 hover:text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mini Testimonials Grid underneath with hover cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {TESTIMONIALS.filter((_, idx) => idx !== activeIdx).slice(0, 3).map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveIdx(TESTIMONIALS.findIndex((t) => t.id === item.id))}
              className="card-hover-lift bg-white/90 backdrop-blur-sm p-6 rounded-3xl border border-gray-100 hover:border-agri-primary/40 shadow-sm cursor-pointer transition-all space-y-3"
            >
              <div className="flex items-center text-agri-gold">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <p className="text-xs text-gray-600 line-clamp-3 italic">
                &quot;{item.quote}&quot;
              </p>
              <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                <div className="relative w-9 h-9 rounded-full overflow-hidden border border-agri-mint">
                  <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-gray-900 font-heading">{item.name}</h5>
                  <span className="text-[10px] text-gray-400">{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
