'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle, 
  HelpCircle, ChevronDown, Sprout, ShieldCheck, Truck, Sparkles
} from 'lucide-react';
import { PARENT_COMPANY } from '@/data/ventures';
import { useShop } from '@/context/ShopContext';
import { FloatingLeavesBackground } from '@/components/OrganicDecor';

export default function ContactPage() {
  const { showToast, openWhatsApp } = useShop();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    vertical: 'MATRA Foods (Retail & Made-Fresh Makhana)',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      showToast('Your message has been received by MATRA Ventures team!', 'success');
      setForm({
        name: '',
        email: '',
        phone: '',
        vertical: 'MATRA Foods (Retail & Made-Fresh Makhana)',
        message: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    }, 600);
  };

  const faqs = [
    {
      q: 'How does "Made Fresh to Order" Makhana work?',
      a: 'We believe fresh snacking should never sit on distributor shelves for months. Once your order of Classic Salted Makhana is placed (minimum 5 packets of 100g each), raw wetland-harvested fox nuts from Bihar are roasted and spiced in our small-batch setup within 24 hours before immediate dispatch.',
    },
    {
      q: 'Where is your green cardamom sourced from?',
      a: 'Our cardamom is sourced directly from certified planters in Bodinayakanur, Tamil Nadu—globally celebrated as the Cardamom Capital of India. Our pods are cured in traditional firewood kilns without any chemical polishing, artificial green dyes, or sulfur treatments.',
    },
    {
      q: 'Can I order custom Elaichi Garlands (Elakkai Malai) for weddings and felicitations?',
      a: 'Yes. Our master artisans in Bodinayakanur hand-weave sacred cardamom garlands for bridal varmalas, temple festivals, and VIP felicitations. You can request custom lengths, zari accents, and set of 2 bridal pairs via our contact form or directly through our WhatsApp concierge.',
    },
    {
      q: 'Do you offer bulk supply for gourmet kitchens, temple trusts, and organic retailers?',
      a: 'Yes. We supply single-origin Bodinayakanur cardamom, made-fresh Bihar makhana, and ceremonial cardamom garlands in wholesale quantities with laboratory purity certificates.',
    },
    {
      q: 'What shipping modes and payment options are accepted?',
      a: 'We ship across India via BlueDart and express courier partners. Free shipping is provided for all orders of ₹499 or more. We accept all major UPI apps (Google Pay, PhonePe, Paytm), Credit/Debit cards, Net Banking, and secure wallets.',
    },
  ];

  return (
    <div className="bg-[#faf8f4] text-gray-800 space-y-0">
      
      {/* 1. Header Banner */}
      <section className="bg-[#12331b] text-white py-16 sm:py-20 px-4 sm:px-8 border-b border-[#1b4528]/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-agri-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-gold/20 text-agri-gold text-xs font-black tracking-widest uppercase border border-agri-gold/30">
            <span>MATRA VENTURES • CLIENT & CORPORATE DESK</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight">
            We Would Love to Hear From You
          </h1>

          <p className="text-emerald-100/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Whether you have questions regarding our made-to-order produce, ceremonial cardamom garlands, or wish to schedule a consultation, our team is always ready to assist.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openWhatsApp('Hello MATRA Ventures, I would like to inquire about your services.')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp Concierge</span>
            </button>
            <a
              href="tel:+919448089567"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/30 text-white hover:bg-white/10 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-agri-gold" />
              <span>Call Us Directly</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-20 px-4 sm:px-8 relative overflow-hidden bg-white">
        <FloatingLeavesBackground />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Corporate & Regional Desks */}
          <div className="lg:col-span-5 bg-agri-cream rounded-3xl p-8 sm:p-10 border border-agri-gold/20 shadow-sm space-y-8">
            <div>
              <span className="text-xs font-bold text-agri-secondary uppercase tracking-widest block">
                OFFICIAL REACH
              </span>
              <h2 className="text-2xl font-black text-agri-dark font-heading mt-1">
                {PARENT_COMPANY.name}
              </h2>
              <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                Dedicated to <em>A Calmer Way of Living</em> across pure agricultural superfoods, botanical spices, and professional advisory.
              </p>
            </div>

            <div className="space-y-6">
              
              {/* Regional Hubs */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-agri-forest text-agri-gold flex items-center justify-center flex-shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-gray-900 font-heading">
                    Registered & Regional Desks
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>Spice Desk:</strong> Bodinayakanur Cardamom Center, Tamil Nadu
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>Superfoods Desk:</strong> Mithila Wetland Center, Bihar
                  </p>
                </div>
              </div>

              {/* Phone Line */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-agri-forest text-agri-gold flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-gray-900 font-heading">
                    Telephone Customer Care
                  </h3>
                  <p className="text-xs text-gray-700 font-medium">
                    {PARENT_COMPANY.phone}
                  </p>
                  <span className="text-[10px] text-emerald-800 font-bold block">
                    Mon - Sat: 9:00 AM - 7:00 PM IST
                  </span>
                </div>
              </div>

              {/* Email Desks */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-agri-forest text-agri-gold flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-gray-900 font-heading">
                    Email Communication
                  </h3>
                  <p className="text-xs text-gray-700 font-medium">
                    {PARENT_COMPANY.email}
                  </p>
                  <span className="text-[10px] text-gray-500 block">
                    Average response time: within 3 to 4 business hours
                  </span>
                </div>
              </div>

              {/* Dispatch Timelines */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-agri-forest text-agri-gold flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-gray-900 font-heading">
                    Fresh Roasting & Dispatch
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Makhana is roasted within 24 hours of order placement. Shipped via BlueDart Air/Surface with tracking.
                  </p>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200/80 space-y-2">
              <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs uppercase tracking-wider">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Prefer Instant Messaging?</span>
              </div>
              <p className="text-xs text-emerald-800">
                Speak directly with our client concierge on WhatsApp for quick tracking updates, bridal garland consultations, or customized orders.
              </p>
              <button
                onClick={() => openWhatsApp()}
                className="w-full mt-2 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <span>Chat on WhatsApp (+91 94480 89567)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-xl space-y-6">
            <div>
              <span className="text-xs font-bold text-agri-gold uppercase tracking-widest block">
                DIRECT INQUIRY FORM
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-agri-dark font-heading mt-1">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                Fill in the details below and the designated vertical lead will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3 animate-in fade-in zoom-in-95">
                <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-emerald-950 font-heading">
                  Inquiry Received Successfully
                </h3>
                <p className="text-xs text-emerald-800 max-w-md mx-auto">
                  Thank you for reaching out to MATRA Ventures. A representative from our team will review your inquiry and connect with you within 3 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arvind Sharma"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-agri-forest focus:ring-2 focus:ring-agri-forest/20 text-sm outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                      Contact Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-agri-forest focus:ring-2 focus:ring-agri-forest/20 text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="arvind.sharma@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-agri-forest focus:ring-2 focus:ring-agri-forest/20 text-sm outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Concerned Vertical / Topic *
                  </label>
                  <select
                    value={form.vertical}
                    onChange={(e) => setForm({ ...form, vertical: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-agri-forest focus:ring-2 focus:ring-agri-forest/20 text-sm outline-none transition-all bg-white"
                  >
                    <option value="MATRA Foods (Retail & Made-Fresh Makhana)">
                      MATRA Foods — Classic Salted Makhana (Made Fresh to Order)
                    </option>
                    <option value="MATRA Foods (Bodinayakanur Green Elaichi)">
                      MATRA Foods — Bodinayakanur Fresh Green Elaichi (10g / 50g)
                    </option>
                    <option value="MATRA Foods (Wedding Elaichi Garlands)">
                      MATRA Foods — Ceremonial Elaichi Garlands (Elakkai Malai)
                    </option>
                    <option value="B2B Wholesale / Gourmet Kitchen Supply">
                      B2B Bulk Sourcing & Commercial Wholesale
                    </option>
                    <option value="General Corporate Inquiry">
                      General Inquiry / Feedback
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                    Your Message / Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Please specify your query, custom garland requirements, or preferred consultation dates..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-agri-forest focus:ring-2 focus:ring-agri-forest/20 text-sm outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-agri-forest hover:bg-agri-primary text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                >
                  <Send className="w-4 h-4 text-agri-gold" />
                  <span>{loading ? 'Submitting Inquiry...' : 'Submit Official Inquiry'}</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 3. Frequently Asked Questions (FAQ) Section */}
      <section className="py-20 px-4 sm:px-8 bg-agri-cream border-t border-gray-200/60">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-agri-gold">
              HELP & GUIDANCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-agri-dark font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              Clear answers regarding our sourcing, made-fresh roasting timelines, and consultation bookings.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-gray-900 hover:text-agri-forest"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-agri-forest transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <p className="text-xs text-gray-500">
              Still have a specific question?{' '}
              <button
                onClick={() => openWhatsApp()}
                className="text-agri-forest font-bold underline hover:text-agri-primary"
              >
                Chat with our concierge team on WhatsApp →
              </button>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}