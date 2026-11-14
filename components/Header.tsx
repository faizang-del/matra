'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Heart, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function Header() {
  const {
    totalCartCount,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    subtotal,
  } = useShop();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/#home' },
    { label: 'Our Story', href: '/#about' },
    { label: 'Our Products', href: '/#shop' },
    { label: 'Sourcing Journey', href: '/#process' },
    { label: 'Specialties', href: '/#services' },
    { label: 'Journal', href: '/#blog' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-white py-3.5 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo - Official Mātra Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 flex-shrink-0 select-none py-0.5"
            aria-label="Mātra - A Calmer Way of Living"
          >
            <div className="relative h-8 sm:h-9 w-28 sm:w-34 flex items-center">
              <Image
                src="/logo-transparent.png"
                alt="Mātra - A Calmer Way of Living"
                width={145}
                height={52}
                priority
                className="object-contain h-full w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links - Shown on LG+ */}
          <nav className="hidden lg:flex items-center justify-center gap-4 xl:gap-6 flex-1 px-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs xl:text-sm font-semibold text-gray-700 hover:text-agri-primary whitespace-nowrap transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-agri-primary hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Header Action Tools */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 sm:p-2.5 rounded-full text-gray-600 hover:text-agri-primary hover:bg-agri-pale/40 transition-colors"
              aria-label="Search products"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Trigger */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="p-2 sm:p-2.5 rounded-full text-gray-600 hover:text-rose-600 hover:bg-rose-50 transition-colors relative"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center animate-bounce">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-agri-pale/60 hover:bg-agri-pale text-agri-dark transition-all duration-200 border border-agri-mint/30"
              aria-label="Shopping Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-agri-primary" />
                {totalCartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-agri-forest text-white text-[10px] font-extrabold flex items-center justify-center">
                    {totalCartCount}
                  </span>
                )}
              </div>
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-[9px] font-semibold text-gray-500 uppercase leading-none">
                  Cart
                </span>
                <span className="text-xs font-bold text-agri-forest leading-tight">
                  ${subtotal.toFixed(2)}
                </span>
              </div>
            </button>

            {/* Order Fresh CTA Button */}
            <Link
              href="/#shop"
              className="btn-shimmer hidden 2xl:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-agri-forest to-agri-primary text-white text-xs font-bold tracking-wide hover:shadow-agri-hover transition-all duration-300 hover:scale-[1.02] whitespace-nowrap"
            >
              <span>SHOP PRODUCE</span>
              <ArrowRight className="w-3.5 h-3.5 text-agri-gold" />
            </Link>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-gray-100 text-gray-800 hover:bg-agri-pale transition-colors flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold text-gray-800 hover:text-agri-primary py-2.5 border-b border-gray-100 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </Link>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/#shop"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-agri-forest text-white font-bold text-xs uppercase tracking-wider shadow-md hover:bg-agri-primary transition-colors"
              >
                <span>SHOP MĀTRA HARVEST</span>
                <ArrowRight className="w-4 h-4 text-agri-gold" />
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
