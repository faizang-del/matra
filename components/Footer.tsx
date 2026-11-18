'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sprout, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowUp, ShieldCheck, Truck, Lock } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { PARENT_COMPANY } from '@/data/ventures';

export default function Footer() {
  const { setIsOrderTrackingOpen, openWhatsApp } = useShop();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-agri-footer text-emerald-100 pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Decorative leaf blur */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-agri-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block p-2 rounded-xl bg-white/95 shadow-md">
              <div className="relative h-8 w-28">
                <Image
                  src="/logo-transparent.png"
                  alt="MATRA - A Calmer Way of Living"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <h4 className="text-xs font-black uppercase tracking-wider text-agri-gold font-heading">
              {PARENT_COMPANY.name}
            </h4>

            <p className="text-xs text-emerald-100/80 leading-relaxed">
              Founded on the principle of <em>A Calmer Way of Living</em>. Mātra brings you direct single-origin vegetarian staples: made-fresh-to-order makhana from Bihar wetlands and unadulterated green cardamom from Bodinayakanur with complete transparency and uncompromised quality.
            </p>

            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-agri-gold" />
                <span>Directly Sourced</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-emerald-200">
                <Sprout className="w-3.5 h-3.5 text-agri-leaf" />
                <span>Made Fresh to Order</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#social"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-agri-primary text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#social"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-agri-primary text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#social"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-agri-primary text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#social"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-agri-primary text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: MATRA Foods Catalog (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider font-heading flex items-center gap-2">
              <Sprout className="w-4 h-4 text-agri-gold" />
              <span>MATRA Foods</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li>
                <Link href="/products/matra-makhana-classic-salted" className="hover:text-agri-gold transition-colors font-semibold text-emerald-200">
                  🌾 Classic Salted Makhana (100g)
                </Link>
                <span className="text-[10px] text-agri-gold block pl-4">
                  Made Fresh to Order • Min. 5 Packs
                </span>
              </li>
              <li className="pt-1">
                <Link href="/products/matra-fresh-green-elaichi" className="hover:text-agri-gold transition-colors font-semibold text-emerald-200">
                  🌱 Fresh Green Elaichi (10g / 50g)
                </Link>
                <span className="text-[10px] text-agri-gold block pl-4">
                  Directly Sourced • Bodinayakanur
                </span>
              </li>
              <li className="pt-1">
                <Link href="/products/matra-elaichi-garlands" className="hover:text-agri-gold transition-colors font-semibold text-emerald-200">
                  ✨ Elaichi Garlands (Elakkai Malai)
                </Link>
                <span className="text-[10px] text-agri-gold block pl-4">
                  Handcrafted Ceremonial Malas
                </span>
              </li>
              <li className="pt-2 flex flex-col gap-1.5">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-agri-gold hover:text-white transition-colors"
                >
                  <span>Explore All Products →</span>
                </Link>
                <button
                  onClick={() => setIsOrderTrackingOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-agri-gold transition-colors text-left"
                >
                  <Truck className="w-3.5 h-3.5 text-agri-gold" />
                  <span>Track Your Order</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider font-heading">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li>
                <Link href="/" className="hover:text-agri-gold transition-colors font-semibold text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-agri-gold transition-colors font-semibold text-white">
                  Our Products Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-agri-gold transition-colors">
                  About Mātra
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-agri-gold transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="pt-2">
                <Link href="/admin" className="inline-flex items-center gap-1 text-[11px] font-bold text-agri-mint/80 hover:text-white transition-colors bg-white/5 px-2.5 py-1 rounded-lg">
                  <Lock className="w-3 h-3 text-agri-gold" />
                  <span>Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Desks & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider font-heading">
              Corporate & Desks
            </h4>
            <div className="space-y-3 text-xs text-emerald-100/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-agri-gold flex-shrink-0 mt-0.5" />
                <span>Spice Desk: Bodinayakanur, Tamil Nadu</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-agri-gold flex-shrink-0 mt-0.5" />
                <span>Superfoods Desk: Mithila Basin, Bihar</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-agri-gold flex-shrink-0" />
                <span>{PARENT_COMPANY.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-agri-gold flex-shrink-0" />
                <span>{PARENT_COMPANY.email}</span>
              </div>
              <div className="pt-1">
                <button
                  onClick={() => openWhatsApp()}
                  className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/60">
          <p>© 2026 {PARENT_COMPANY.name}. All Rights Reserved. A Calmer Way of Living.</p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-agri-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-agri-gold transition-colors">
              Terms & Conditions
            </a>
            <Link href="/admin" className="hover:text-agri-gold transition-colors">
              Management
            </Link>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-agri-forest hover:bg-agri-primary text-white flex items-center justify-center transition-colors shadow-sm"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
