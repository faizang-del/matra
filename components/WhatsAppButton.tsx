'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send, Utensils, Sprout, HeartHandshake, ChevronRight } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { PARENT_COMPANY } from '@/data/ventures';

export default function WhatsAppButton() {
  const { openWhatsApp } = useShop();
  const [isOpen, setIsOpen] = useState(false);

  const quickOptions = [
    {
      title: 'Order Made-to-Order Makhana (Bihar)',
      icon: Sprout,
      text: 'Hello Mātra team, I would like to order Classic Salted Makhana (Made Fresh to Order).',
    },
    {
      title: 'Bodinayakanur Green Elaichi (10g / 50g)',
      icon: Sparkles,
      text: 'Hello Mātra team, I have an inquiry regarding Bodinayakanur Fresh Green Elaichi.',
    },
    {
      title: 'Artisanal Cardamom Garlands (Elakkai Malai)',
      icon: HeartHandshake,
      text: 'Hello Mātra team, I would like to inquire about handcrafted ceremonial Elaichi Garlands for an upcoming wedding / ceremony.',
    },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {/* Popover Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-agri-gold/25 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-agri-forest to-agri-primary text-white p-4 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="text-xs font-black uppercase tracking-wider text-agri-gold font-heading">
                  MATRA Ventures Concierge
                </h4>
                <p className="text-[11px] text-emerald-100 font-medium">
                  Direct WhatsApp Support • Mon–Sat 8AM–8PM IST
                </p>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-4 space-y-2.5 bg-agri-cream/60">
            <p className="text-xs text-gray-600 font-medium leading-relaxed">
              Welcome to <strong>MATRA Ventures</strong>. How may we assist you today on your journey to <em>A Calmer Way of Living</em>?
            </p>

            <div className="space-y-2 pt-1">
              {quickOptions.map((opt, idx) => {
                const IconComponent = opt.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      openWhatsApp(opt.text);
                      setIsOpen(false);
                    }}
                    className="w-full text-left p-3 rounded-2xl bg-white border border-gray-200/80 hover:border-agri-forest/50 hover:bg-agri-light transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <div className="flex items-center gap-2.5 pr-2">
                      <div className="w-7 h-7 rounded-xl bg-agri-forest/10 text-agri-forest group-hover:bg-agri-forest group-hover:text-white flex items-center justify-center transition-colors flex-shrink-0">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-bold text-gray-800 group-hover:text-agri-forest font-heading">
                        {opt.title}
                      </span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-agri-forest transition-transform group-hover:translate-x-0.5 flex-shrink-0" />
                  </button>
                );
              })}
            </div>

            {/* Custom message prompt */}
            <button
              onClick={() => {
                openWhatsApp();
                setIsOpen(false);
              }}
              className="w-full mt-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start Direct WhatsApp Chat</span>
            </button>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative border-2 border-white/60"
        aria-label="Open WhatsApp Customer Care"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-agri-gold animate-ping pointer-events-none" />
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-agri-gold flex items-center justify-center text-[9px] font-black text-agri-dark shadow-xs">
          1
        </span>
        <MessageCircle className="w-7 h-7 fill-current group-hover:rotate-6 transition-transform" />
      </button>
    </div>
  );
}
