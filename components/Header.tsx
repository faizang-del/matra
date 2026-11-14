'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Search, Heart, ShoppingBag, Menu, X, ArrowRight, Truck, 
  MessageCircle, ChevronDown, Sparkles
} from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { PARENT_COMPANY } from '@/data/ventures';

export default function Header() {
  const {
    totalCartCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    setIsOrderTrackingOpen,
    openWhatsApp,
    subtotal,
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [foodsDropdownOpen, setFoodsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Astro', href: '/#astro', subtitle: 'Online Vedic Astrology & Vastu' },
    { label: 'Consultants', href: '/#consultants', subtitle: 'Career & Business Advisory' },
    { label: 'Digital', href: '/#ventures', subtitle: 'Apps & Digital Platforms' },
    { label: 'Home Services', href: '/#ventures', subtitle: 'Home Repair & Maintenance' },
    { label: 'Our Story', href: '/#about', subtitle: 'A Calmer Way of Living' },
  ];

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-[#12331b] text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-6 border-b border-[#1b4528]/50 select-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-agri-gold animate-pulse"></span>
            <span className="font-bold text-agri-gold tracking-wider uppercase text-[10px]">
              Mātra Ventures
            </span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="text-white/80 hidden sm:inline font-normal">
              A Calmer Way of Living
            </span>
          </div>

          <div className="flex items-center gap-4 flex-shrink-0">
            <span className="text-white/70 hidden md:inline truncate max-w-md">
              🌾 Makhana Made Fresh to Order • Single-Origin Bodinayakanur Elaichi
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsOrderTrackingOpen(true)}
                className="text-white/80 hover:text-agri-gold flex items-center gap-1 transition-colors text-[11px] font-medium"
              >
                <Truck className="w-3 h-3 text-agri-gold" />
                <span>Track Order</span>
              </button>
              <span className="text-white/30 hidden sm:inline">|</span>
              <button
                onClick={() => openWhatsApp()}
                className="text-white/80 hover:text-emerald-400 hidden sm:flex items-center gap-1 transition-colors text-[11px] font-medium"
              >
                <MessageCircle className="w-3 h-3 text-emerald-400" />
                <span>Help</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm py-2'
            : 'bg-white py-2.5 sm:py-3 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 sm:gap-6">
          
          {/* Brand Logo - Official Mātra Logo with Tagline */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 select-none py-0.5 group"
            aria-label="Mātra - A Calmer Way of Living"
          >
            <div className="relative h-8 sm:h-9 w-28 sm:w-32 flex items-center transition-transform duration-200 group-hover:opacity-95">
              <Image
                src="/logo-transparent.png"
                alt="Mātra - A Calmer Way of Living"
                width={150}
                height={54}
                priority
                className="object-contain h-full w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links (Visible on LG and above) */}
          <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 flex-1 px-2 max-w-fit mx-auto">
            
            {/* Foods Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setFoodsDropdownOpen(true)}
              onMouseLeave={() => setFoodsDropdownOpen(false)}
            >
              <Link
                href="/#shop"
                className="flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full text-xs xl:text-sm font-bold text-gray-800 hover:text-agri-forest hover:bg-agri-pale/50 transition-colors whitespace-nowrap"
              >
                <span>Foods</span>
                <span className="text-[9px] uppercase font-black tracking-wider px-1.5 py-0.5 rounded-full bg-agri-leaf/20 text-agri-forest">
                  Store
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${foodsDropdownOpen ? 'rotate-180 text-agri-forest' : ''}`} />
              </Link>

              {/* Foods Dropdown Popover with hover bridge */}
              {foodsDropdownOpen && (
                <div className="absolute top-full left-0 pt-2 w-80 z-50">
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-2.5 space-y-1 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-gray-400 border-b border-gray-100 flex items-center justify-between">
                      <span>MATRA Foods Offerings</span>
                      <span className="text-agri-gold font-bold">100% Pure</span>
                    </div>

                    <Link
                      href="/products/matra-makhana-classic-salted"
                      className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-agri-cream/60 transition-colors group"
                    >
                      <span className="text-lg">🌾</span>
                      <div>
                        <p className="text-xs font-bold text-gray-900 group-hover:text-agri-forest">
                          Classic Salted Makhana (100g)
                        </p>
                        <p className="text-[11px] text-gray-500">
                          Made fresh to order • Sourced from Bihar • Min. 5 packs
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/products/matra-fresh-green-elaichi"
                      className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-agri-cream/60 transition-colors group"
                    >
                      <span className="text-lg">🌱</span>
                      <div>
                        <p className="text-xs font-bold text-gray-900 group-hover:text-agri-forest">
                          Fresh Green Elaichi (10g / 50g)
                        </p>
                        <p className="text-[11px] text-gray-500">
                          Directly sourced from Bodinayakanur, Tamil Nadu
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/products/matra-elaichi-garlands"
                      className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-agri-cream/60 transition-colors group"
                    >
                      <span className="text-lg">✨</span>
                      <div>
                        <p className="text-xs font-bold text-gray-900 group-hover:text-agri-forest">
                          Elaichi Garlands (Cardamom Malas)
                        </p>
                        <p className="text-[11px] text-gray-500">
                          Handcrafted ceremonial garlands for weddings & temples
                        </p>
                      </div>
                    </Link>

                    <div className="pt-1.5 border-t border-gray-100">
                      <Link
                        href="/#shop"
                        className="block text-center py-1.5 text-[11px] font-extrabold uppercase text-agri-forest hover:text-agri-primary hover:bg-agri-pale/40 rounded-lg transition-colors"
                      >
                        Explore All 3 Produce Listings →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Other Core Verticals Links (No underline hover effect) */}
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-2.5 xl:px-3 py-1.5 rounded-full text-xs xl:text-sm font-semibold text-gray-700 hover:text-agri-forest hover:bg-agri-pale/40 transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Tools - Clean spacing, NO clipping, NO badge text overlap */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 flex-shrink-0">
            
            {/* Track Order Pill Button */}
            <button
              onClick={() => setIsOrderTrackingOpen(true)}
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold text-agri-forest bg-agri-cream/70 hover:bg-agri-pale border border-agri-gold/40 transition-colors flex-shrink-0"
              title="Track order status"
            >
              <Truck className="w-3.5 h-3.5 text-agri-gold flex-shrink-0" />
              <span className="hidden xl:inline whitespace-nowrap">Track Order</span>
            </button>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 rounded-full text-gray-600 hover:text-agri-forest hover:bg-agri-pale/50 transition-colors flex-shrink-0"
              aria-label="Search produce and services"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Wishlist Trigger with Ring-Border Badge */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="p-2 rounded-full text-gray-600 hover:text-rose-600 hover:bg-rose-50 transition-colors relative flex-shrink-0"
              aria-label="Wishlist"
              title="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 px-1 rounded-full bg-rose-500 text-white text-[9px] font-bold flex items-center justify-center ring-2 ring-white shadow-sm animate-bounce">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Trigger with Rupees and Clean Badge Breathing Room */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center px-3 py-1.5 rounded-full bg-agri-pale/60 hover:bg-agri-pale text-agri-dark transition-all duration-200 border border-agri-mint/30 flex-shrink-0 group"
              aria-label="Shopping Basket"
            >
              {/* Bag icon container with explicit right margin so badge never overlaps text */}
              <div className="relative mr-2 flex-shrink-0">
                <ShoppingBag className="w-4 h-4 text-agri-forest group-hover:scale-105 transition-transform" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-1.5 -right-2.5 min-w-[17px] h-[17px] px-1 rounded-full bg-[#1b4528] text-white text-[9px] font-black flex items-center justify-center leading-none ring-2 ring-white shadow-sm">
                    {totalCartCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:flex flex-col text-left pl-1">
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider leading-none">
                  Cart
                </span>
                <span className="text-xs font-black text-agri-forest leading-tight mt-0.5">
                  ₹{Math.round(subtotal).toLocaleString('en-IN')}
                </span>
              </div>
            </button>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-100 text-gray-800 hover:bg-agri-pale transition-colors flex items-center justify-center flex-shrink-0"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-5 py-5 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-xl">
            <div className="flex flex-col space-y-1">
              
              {/* Foods Header in Mobile */}
              <div className="py-2 border-b border-gray-100">
                <span className="text-[10px] font-black uppercase tracking-wider text-agri-forest block mb-1">
                  MATRA Foods (Healthy Vegetarian Living)
                </span>
                <div className="pl-2 space-y-2 pt-1 text-sm font-medium">
                  <Link
                    href="/products/matra-makhana-classic-salted"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-800 hover:text-agri-forest"
                  >
                    🌾 Classic Salted Makhana (100g • Made Fresh to Order)
                  </Link>
                  <Link
                    href="/products/matra-fresh-green-elaichi"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-800 hover:text-agri-forest"
                  >
                    🌱 Fresh Green Elaichi (10g / 50g • Bodinayakanur)
                  </Link>
                  <Link
                    href="/products/matra-elaichi-garlands"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-800 hover:text-agri-forest"
                  >
                    ✨ Elaichi Garlands (Ceremonial Elakkai Malai)
                  </Link>
                </div>
              </div>

              {/* Other Verticals */}
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-gray-800 hover:text-agri-forest py-2.5 border-b border-gray-100 flex items-center justify-between"
                >
                  <div>
                    <p className="font-bold">{link.label}</p>
                    <p className="text-[11px] text-gray-400 font-normal">{link.subtitle}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </Link>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsOrderTrackingOpen(true);
                }}
                className="text-sm font-semibold text-agri-forest py-2.5 flex items-center justify-between text-left"
              >
                <span className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-agri-gold" />
                  <span>Track Your Order</span>
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/#shop"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-agri-forest text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-agri-primary transition-colors"
              >
                <span>SHOP MATRA FOODS</span>
                <ArrowRight className="w-4 h-4 text-agri-gold" />
              </Link>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Customer Care</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}