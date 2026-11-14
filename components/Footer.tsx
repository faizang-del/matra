'use client';

import React from 'react';
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
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-agri-forest to-agri-primary flex items-center justify-center text-white shadow-md">
                <Sprout className="w-6 h-6 text-agri-gold" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-extrabold tracking-tight text-white font-heading">
                    MATRA
                  </span>
                  <span className="text-2xl font-extrabold text-agri-leaf font-heading">
                    FOODS
                  </span>
                </div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-agri-gold -mt-1">
                  Pure • Organic • Heritage
                </p>
              </div>
            </div>

            <p className="text-xs text-emerald-100/70 leading-relaxed">
              Matra Foods is committed to traditional Indian agriculture, stone-ground unbleached flours, wood-pressed virgin oils, and pure Himalayan spices. Sourced ethically without chemical shortcuts.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-emerald-200">
                <ShieldCheck className="w-4 h-4 text-agri-gold" />
                <span>NPOP & FSSAI Certified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-emerald-200">
                <Sprout className="w-4 h-4 text-agri-leaf" />
                <span>Non-GMO Tested</span>
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
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li>
                <a href="#home" className="hover:text-agri-gold transition-colors">
                  Home Portal
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-agri-gold transition-colors">
                  Our 25-Year Story
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-agri-gold transition-colors">
                  Seed to Table Process
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-agri-gold transition-colors">
                  Farming Specialties
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-agri-gold transition-colors">
                  Farm Life Gallery
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-agri-gold transition-colors">
                  Nutrition Journal
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-agri-gold transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Staples (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Organic Staples
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/70">
              <li>
                <a href="#shop" className="hover:text-agri-gold transition-colors">
                  Royal Sharbati Chakki Atta (5kg)
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-agri-gold transition-colors">
                  Royal Compounded Hing (Asafoetida)
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-agri-gold transition-colors">
                  Cold-Pressed Yellow Mustard Oil
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-agri-gold transition-colors">
                  Kashmiri Stemless Lal Mirch
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-agri-gold transition-colors">
                  Himalayan Pink Mineral Salt
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-agri-gold transition-colors">
                  Honey-Infused Wild Amla Murabba
                </a>
              </li>
              <li>
                <a href="#shop" className="hover:text-agri-gold transition-colors">
                  Unpolished Desi Toor Dal
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Farm & Mill Info (3.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Farm & Mill Office
            </h4>
            <div className="space-y-3 text-xs text-emerald-100/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-agri-gold flex-shrink-0 mt-0.5" />
                <span>Plot 48, Heritage Agro Corridor, Mathura Organic Belt, UP - 281001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-agri-gold flex-shrink-0" />
                <span>+91 (800) 425-6287 / +91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-agri-gold flex-shrink-0" />
                <span>care@matrafoods.com</span>
              </div>
              <div className="pt-2 text-[11px] text-emerald-200/60">
                Operating Hours: Mon - Sat 8:00 AM - 7:30 PM IST. Closed on National Harvest Holidays.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-100/60">
          <p>© 2026 Matra Foods Agro Pvt. Ltd. All Rights Reserved. Built with Next.js.</p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-agri-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-agri-gold transition-colors">
              Terms of Supply
            </a>
            <a href="#certifications" className="hover:text-agri-gold transition-colors">
              Certifications
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
