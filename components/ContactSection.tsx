'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Sprout, ArrowRight } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { FloatingLeavesBackground } from './OrganicDecor';

export default function ContactSection() {
  const { showToast } = useShop();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Retail Inquiry',
    message: '',
  });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    showToast('Your message has been sent to our farm customer care team!', 'success');
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', phone: '', subject: 'General Retail Inquiry', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <FloatingLeavesBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-pale text-agri-forest text-xs font-extrabold tracking-wider uppercase border border-agri-mint/40 shadow-sm">
            <Sprout className="w-3.5 h-3.5 text-agri-primary animate-pulse" />
            <span>CONNECT WITH MATRA FOODS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-agri-dark font-heading">
            We Would Love to Hear From You
          </h2>

          <p className="text-gray-600 text-sm sm:text-base">
            Have questions about our single-origin harvest, wholesale supply for your gourmet kitchen, or order tracking? Reach out to our dedicated team.
          </p>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-agri-forest hover:text-agri-primary uppercase tracking-wider"
            >
              <span>Visit Dedicated Contact Page & FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-start">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 bg-agri-cream rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-sm space-y-8">
            <div>
              <span className="text-xs font-bold text-agri-secondary uppercase tracking-widest">
                CORPORATE HEADQUARTERS & ORIGIN HUBS
              </span>
              <h3 className="text-2xl font-extrabold text-agri-dark font-heading mt-1">
                MATRA Ventures Private Limited
              </h3>
              <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                Operating across 5 distinct verticals under <em>A Calmer Way of Living</em>. Sourcing desks in Bodinayakanur and Mithila, Bihar.
              </p>
            </div>

            <div className="space-y-5">
              {[
                {
                  icon: MapPin,
                  title: 'Origin Hubs',
                  desc: 'Bodinayakanur Cardamom Center, Tamil Nadu & Mithila Wetland Center, Bihar, India',
                },
                {
                  icon: Phone,
                  title: 'Customer Care & Orders',
                  desc: '+91 94480 89567 (09448089567)',
                  badge: 'Mon - Sat: 8:00 AM - 7:30 PM',
                },
                {
                  icon: Mail,
                  title: 'Email Desks',
                  desc: 'Orders: care@matrafoods.com | Wholesale: b2b@matrafoods.com',
                },
                {
                  icon: Clock,
                  title: 'Dispatch Schedule',
                  desc: 'Fresh Milling: 6:00 AM Daily | Courier Pickup: 3:00 PM',
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-agri-pale group-hover:bg-agri-primary text-agri-primary group-hover:text-white flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 font-heading group-hover:text-agri-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                      {item.badge && (
                        <span className="text-[10px] text-emerald-700 font-bold block mt-0.5">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-agri">
            <h3 className="text-2xl font-extrabold text-agri-dark font-heading">
              Send an Inquiry to Our Agronomists
            </h3>
            <p className="text-xs text-gray-500 mt-1">
              Whether you need family farm orders or container loads of stone-milled flours, we will respond within 4 business hours.
            </p>

            {sent ? (
              <div className="py-16 text-center space-y-3 animate-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-10 h-10 animate-bounce" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 font-heading">Message Dispatched!</h4>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Thank you for contacting Matra Foods. One of our farm executives will call or email you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Faizan Bhat"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs font-medium focus:outline-none focus:border-agri-primary focus:ring-1 focus:ring-agri-primary transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="faizan@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs font-medium focus:outline-none focus:border-agri-primary focus:ring-1 focus:ring-agri-primary transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs font-medium focus:outline-none focus:border-agri-primary focus:ring-1 focus:ring-agri-primary transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-gray-700 block mb-1">Inquiry Purpose</label>
                    <select
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs font-medium focus:outline-none focus:border-agri-primary focus:ring-1 focus:ring-agri-primary transition-all bg-white"
                    >
                      <option>MATRA Foods – Made Fresh to Order Makhana</option>
                      <option>MATRA Foods – Bodinayakanur Fresh Green Elaichi</option>
                      <option>MATRA Foods – Ceremonial Cardamom Garlands</option>
                      <option>B2B Wholesale / Institutional Bulk Supply</option>
                      <option>General Corporate & Retail Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 block mb-1">Your Message or Requirements</label>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about the staples or bulk quantities you need..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs font-medium focus:outline-none focus:border-agri-primary focus:ring-1 focus:ring-agri-primary transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-shimmer w-full sm:w-auto px-9 py-3.5 rounded-full bg-agri-forest hover:bg-agri-primary text-white text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                >
                  <Send className="w-4 h-4 text-agri-gold" />
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
