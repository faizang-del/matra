'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { FloatingLeavesBackground } from './OrganicDecor';

export default function NewsletterSection() {
  const { showToast } = useShop();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      showToast('Welcome to the Matra Family! Your ₹100 voucher has been emailed.', 'success');
      setEmail('');
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-agri-dark text-white relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-agri-primary/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-agri-gold/20 rounded-full blur-3xl pointer-events-none" />
      <FloatingLeavesBackground />

      <div className="max-w-5xl mx-auto px-4 sm:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-leaf/20 text-agri-mint text-xs font-extrabold uppercase tracking-widest border border-agri-mint/30 shadow-sm animate-pulse-subtle">
          <Sparkles className="w-3.5 h-3.5 text-agri-gold" />
          <span>JOIN A CALMER WAY OF LIVING</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight text-white">
          Join the Mātra Community & Receive ₹100 Off
        </h2>

        <p className="text-emerald-100/80 text-sm sm:text-base max-w-2xl mx-auto">
          Wholesome vegetarian staples made with homely ingredients and zero artificial flavours. Enjoy ₹100 off your first order.
        </p>

        {/* Subscribe Form with Shimmer */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-2">
          <div className="relative flex-1">
            <Mail className="w-5 h-5 text-gray-400 absolute left-4 top-3.5" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white text-gray-900 text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-agri-gold shadow-lg"
            />
          </div>

          <button
            type="submit"
            className="btn-shimmer px-8 py-3.5 rounded-full bg-agri-gold hover:bg-amber-400 text-agri-dark font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-agri-gold hover:shadow-glow-gold flex items-center justify-center gap-2 flex-shrink-0 hover:scale-105 active:scale-95"
          >
            <span>SUBSCRIBE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-xs text-emerald-200/70">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-agri-leaf" />
            <span>Instant ₹100 Welcome Voucher</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-agri-leaf" />
            <span>No Spam Guarantee • Unsubscribe Anytime</span>
          </span>
        </div>
      </div>
    </section>
  );
}
