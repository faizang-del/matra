'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Leaf, Sparkles, Award } from 'lucide-react';
import Image from 'next/image';
import { FloatingLeavesBackground } from './OrganicDecor';

interface HeroSlide {
  badge: string;
  titlePart1: string;
  titleHighlight: string;
  titlePart2: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  statsNumber: string;
  statsLabel: string;
  image: string;
  tag: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    badge: 'MATRA FOODS • MADE FRESH TO ORDER • BIHAR WETLANDS',
    titlePart1: 'Directly Sourced. ',
    titleHighlight: 'Freshly Prepared.',
    titlePart2: ' Delivered to Your Doorstep.',
    subtitle: 'Harvested directly from farmers in Bihar and prepared in small batches at our home-based setup. Prepared fresh to order—roasting starts only after you order. 100g pack size (Min. 5 packets) at introductory ₹299.',
    ctaText: 'ORDER FRESH MAKHANA',
    ctaLink: '/products/matra-makhana-classic-salted',
    secondaryCtaText: 'OUR FRESH USP',
    secondaryCtaLink: '/#about',
    statsNumber: 'Min. 5 Packs',
    statsLabel: 'Small-Batch Roasting Post-Order',
    image: '/hero/hero-makhana.jpg',
    tag: 'Classic Salted • Bihar Origin',
  },
  {
    badge: 'SOURCED FROM BODINAYAKANUR • CARDAMOM CAPITAL',
    titlePart1: 'Directly Sourced. ',
    titleHighlight: 'Fresh Green Elaichi',
    titlePart2: ' in Every Pack',
    subtitle: 'Directly sourced from generational cardamom planters in Bodinayakanur, Tamil Nadu, and repacked under the MATRA brand. Freshness and quality in every 10g and 50g pack.',
    ctaText: 'SHOP GREEN ELAICHI',
    ctaLink: '/products/matra-fresh-green-elaichi',
    secondaryCtaText: 'SOURCING JOURNEY',
    secondaryCtaLink: '/#process',
    statsNumber: '₹99 & ₹449',
    statsLabel: 'Available in 10g & 50g Packs',
    image: '/hero/hero-elaichi.jpg',
    tag: 'Bodinayakanur Single-Origin',
  },
  {
    badge: 'MATRA FOODS • ARTISANAL SACRED CRAFTSMANSHIP',
    titlePart1: 'Handcrafted Ceremonial ',
    titleHighlight: 'Elaichi Garlands',
    titlePart2: ' (Elakkai Malai)',
    subtitle: 'Intricately handcrafted in Bodinayakanur with thousands of select green cardamom pods and golden zari threads. Sacred fragrance and timeless elegance for weddings, muhurtams, and VIP felicitations.',
    ctaText: 'EXPLORE GARLANDS',
    ctaLink: '/products/matra-elaichi-garlands',
    secondaryCtaText: 'CUSTOM WEDDING ORDERS',
    secondaryCtaLink: '/products/matra-elaichi-garlands',
    statsNumber: 'Handmade',
    statsLabel: 'Bodinayakanur Master Artisans',
    image: '/products/elaichi-garland-trio.jpg',
    tag: 'Artisanal Ceremonial Harams',
  },
  {
    badge: 'MATRA VENTURES • A CALMER WAY OF LIVING',
    titlePart1: 'Mindful Astrology & ',
    titleHighlight: 'Strategic Advisory',
    titlePart2: ' Consultations',
    subtitle: 'Confidential 1-on-1 personalized Vedic astrology consultations, Vastu harmonization, and executive career counselling to bring clarity, purpose, and serenity to your journey.',
    ctaText: 'BOOK CONSULTATION',
    ctaLink: '/#astro',
    secondaryCtaText: 'EXPLORE ALL 5 VERTICALS',
    secondaryCtaLink: '/#ventures',
    statsNumber: '1-on-1 Guidance',
    statsLabel: 'Direct Online Slot Booking & UPI',
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=1600&auto=format&fit=crop',
    tag: 'Astro & Consultants Advisory',
  },
];

const SLIDE_DURATION = 6500;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
      setProgressKey((k) => k + 1);
    }, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [current]);

  const goToSlide = (idx: number) => {
    setCurrent(idx);
    setProgressKey((k) => k + 1);
  };

  const nextSlide = () => goToSlide((current + 1) % HERO_SLIDES.length);
  const prevSlide = () => goToSlide((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  const activeSlide = HERO_SLIDES[current];

  return (
    <section id="home" className="relative min-h-[600px] sm:min-h-[660px] lg:min-h-[720px] flex items-center bg-agri-dark text-white overflow-hidden">
      {/* Background Image Carousel with Ken Burns zoom animation */}
      {HERO_SLIDES.map((slide, idx) => (
        <div
          key={slide.titleHighlight}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className={`relative w-full h-full ${idx === current ? 'animate-kenburns' : ''}`}>
            <Image
              src={slide.image}
              alt={slide.titleHighlight}
              fill
              priority={idx === 0}
              className="object-cover object-center"
            />
          </div>
          {/* Multi-layered Gradients using Mātra logo green */}
          <div className="absolute inset-0 bg-gradient-to-r from-agri-dark/90 via-agri-forest/75 to-black/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_40%,rgba(59,120,78,0.20)_0%,transparent_70%)]" />
        </div>
      ))}

      {/* Floating Leaves Micro-Particles */}
      <FloatingLeavesBackground />

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 py-20 z-10 w-full flex items-center justify-between">
        <div key={current} className="max-w-2xl lg:max-w-3xl space-y-6 animate-slide-up-fade">
          {/* Badge Pill with gentle floating leaf */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-agri-leaf/25 border border-agri-mint/40 backdrop-blur-md text-emerald-200 text-xs font-bold tracking-wider uppercase shadow-sm">
            <Leaf className="w-3.5 h-3.5 text-agri-gold animate-leaf-sway" />
            <span>{activeSlide.badge}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-agri-gold animate-ping ml-1" />
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] font-heading tracking-tight drop-shadow-md">
            {activeSlide.titlePart1}
            <span className="text-agri-gold relative inline-block">
              {activeSlide.titleHighlight}
              <svg
                className="absolute -bottom-2 left-0 w-full text-agri-leaf/60 h-2.5"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
            {activeSlide.titlePart2}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-normal max-w-2xl drop-shadow">
            {activeSlide.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <Link
              href={activeSlide.ctaLink}
              className="btn-shimmer inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-agri-gold to-amber-500 text-agri-dark font-black text-xs tracking-wider uppercase shadow-agri-gold hover:shadow-glow-gold transition-all duration-300 hover:scale-105"
            >
              <span>{activeSlide.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href={activeSlide.secondaryCtaLink}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs tracking-wider uppercase backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-agri-mint/50"
            >
              <Sparkles className="w-4 h-4 text-agri-gold animate-pulse" />
              <span>{activeSlide.secondaryCtaText}</span>
            </Link>
          </div>

          {/* Sourcing Metrics Badge in Hero */}
          <div className="pt-6 flex flex-wrap items-center gap-6 border-t border-white/10">
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-agri-mint/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-agri-leaf/20 border border-agri-leaf/40 flex items-center justify-center text-agri-gold">
                <ShieldCheck className="w-5 h-5 animate-bounce-subtle" />
              </div>
              <div>
                <span className="block text-xl font-extrabold text-white font-heading">
                  {activeSlide.statsNumber}
                </span>
                <span className="text-xs text-emerald-200/80 font-medium">
                  {activeSlide.statsLabel}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-agri-gold/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-agri-gold/20 border border-agri-gold/40 flex items-center justify-center text-agri-gold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xl font-extrabold text-white font-heading">
                  Zero Additives
                </span>
                <span className="text-xs text-emerald-200/80 font-medium">
                  Pure Ingredients • Freshly Sourced
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Duration Progress Bar Indicator */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20 overflow-hidden">
        <div
          key={progressKey}
          className="h-full bg-agri-gold transition-all duration-[6500ms] ease-linear"
          style={{ width: '100%', animation: 'slideProgress 6.5s linear' }}
        />
      </div>

      {/* Navigation Controls (Arrows & Pagination) */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-20 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="w-11 h-11 rounded-full bg-black/40 hover:bg-agri-primary border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 px-2">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === current ? 'w-8 bg-agri-gold shadow-glow-gold' : 'w-2.5 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="w-11 h-11 rounded-full bg-black/40 hover:bg-agri-primary border border-white/20 text-white flex items-center justify-center backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 shadow-lg"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <style jsx>{`
        @keyframes slideProgress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
