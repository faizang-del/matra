'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Sprout, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-agri-footer text-emerald-100 pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Decorative leaf blur */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-agri-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block p-2 rounded-xl bg-white/95 shadow-md">
              <div className="relative h-8 w-28">
                <Image
                  src="/logo-transparent.png"
                  alt="Mātra - A Calmer Way of Living"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="text-xs text-emerald-100/80 leading-relaxed">
              Mātra is dedicated to a calmer way of living through naturally exceptional, single-origin whole foods. From the cardamom mist of Bodinayakanur to the nutrient-rich wetlands of Bihar, we bring pure harvest goodness directly to your home with zero additives.
            </p>

            <div className="flex items-center gap-2 pt-1 flex-wrap">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-emerald-200">
                <ShieldCheck className="w-4 h-4 text-agri-gold" />
                <span>Pure Ingredients</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-emerald-200">
                <Sprout className="w-4 h-4 text-agri-leaf" />
                <span>Zero Additives</span>
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

          {/* Col 2: Quick Navigation (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Discover Mātra
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li>
                <Link href="/#home" className="hover:text-agri-gold transition-colors">
                  Home Portal
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-agri-gold transition-colors">
                  Our Calmer Way Philosophy
                </Link>
              </li>
              <li>
                <Link href="/products/matra-fresh-green-elaichi" className="hover:text-agri-gold transition-colors">
                  Fresh Green Elaichi (Bodinayakanur)
                </Link>
              </li>
              <li>
                <Link href="/products/matra-premium-makhana" className="hover:text-agri-gold transition-colors">
                  Premium Makhana (Bihar)
                </Link>
              </li>
              <li>
                <Link href="/#process" className="hover:text-agri-gold transition-colors">
                  Origin-Direct Sourcing
                </Link>
              </li>
              <li>
                <Link href="/#blog" className="hover:text-agri-gold transition-colors">
                  Wellness Journal
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-agri-gold transition-colors">
                  Contact Customer Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Single-Origin Products (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Our Products
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li>
                <Link href="/products/matra-fresh-green-elaichi" className="hover:text-agri-gold transition-colors font-semibold text-emerald-200">
                  🌱 Fresh Green Elaichi (100g)
                </Link>
              </li>
              <li>
                <span className="text-[10px] text-agri-gold block -mt-1 pl-4">
                  Sourced from Bodinayakanur
                </span>
              </li>
              <li className="pt-2">
                <Link href="/products/matra-premium-makhana" className="hover:text-agri-gold transition-colors font-semibold text-emerald-200">
                  🌾 Premium Makhana (250g)
                </Link>
              </li>
              <li>
                <span className="text-[10px] text-agri-gold block -mt-1 pl-4">
                  Sourced from Bihar
                </span>
              </li>
              <li className="pt-3 text-[11px] text-emerald-300/60 italic">
                * More single-origin harvest items releasing soon.
              </li>
            </ul>
          </div>

          {/* Col 4: Sourcing Desks (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Origin Desks
            </h4>
            <div className="space-y-3 text-xs text-emerald-100/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-agri-gold flex-shrink-0 mt-0.5" />
                <span>Spice Hub: Bodinayakanur, Tamil Nadu (Cardamom Capital)</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-agri-gold flex-shrink-0 mt-0.5" />
                <span>Superfood Hub: Mithila, Bihar (Premium Makhana Wetlands)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-agri-gold flex-shrink-0" />
                <span>+91 (800) 425-6287 / +91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-agri-gold flex-shrink-0" />
                <span>care@matrafoods.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/60">
          <p>© 2026 Mātra. A Calmer Way of Living. Naturally Exceptional. Built with Next.js.</p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-agri-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-agri-gold transition-colors">
              Quality Pledge
            </a>

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
