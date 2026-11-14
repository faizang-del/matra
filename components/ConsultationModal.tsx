'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, MessageCircle, Phone, Mail, User, Compass, Briefcase, QrCode, CreditCard } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { VENTURE_VERTICALS, ServiceItem, PARENT_COMPANY } from '@/data/ventures';

export default function ConsultationModal() {
  const { isConsultationOpen, closeConsultationModal, selectedConsultationService, showToast, openWhatsApp } = useShop();

  const astroVertical = VENTURE_VERTICALS.find((v) => v.id === 'astro');
  const consultVertical = VENTURE_VERTICALS.find((v) => v.id === 'consultants');
  const allServices: ServiceItem[] = [
    ...(astroVertical?.services || []),
    ...(consultVertical?.services || []),
  ];

  const [activeVerticalTab, setActiveVerticalTab] = useState<'astro' | 'consultants'>(
    selectedConsultationService?.id.startsWith('consult') ? 'consultants' : 'astro'
  );

  const [chosenService, setChosenService] = useState<ServiceItem>(
    selectedConsultationService || (astroVertical?.services ? astroVertical.services[0] : allServices[0])
  );

  const [bookingDate, setBookingDate] = useState('2026-11-18');
  const [bookingTime, setBookingTime] = useState('04:30 PM IST');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    notes: '',
  });

  const [paymentMode, setPaymentMode] = useState<'upi' | 'card' | 'pay_later'>('upi');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState('');

  if (!isConsultationOpen) return null;

  const currentVerticalServices = activeVerticalTab === 'astro' 
    ? (astroVertical?.services || [])
    : (consultVertical?.services || []);

  const handleSelectService = (service: ServiceItem) => {
    setChosenService(service);
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      showToast('Please fill in your name and WhatsApp contact number.', 'warning');
      return;
    }

    const genId = `MV-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(genId);
    setIsConfirmed(true);
    showToast(`Consultation #${genId} booked successfully!`, 'success');
  };

  const handleResetAndClose = () => {
    setIsConfirmed(false);
    closeConsultationModal();
  };

  const handleWhatsAppBookingPing = () => {
    const msg = `Hello MATRA Ventures, I have booked a consultation #${bookingId} for "${chosenService.name}" on ${bookingDate} at ${bookingTime}. My name is ${formData.fullName}.`;
    openWhatsApp(msg);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={handleResetAndClose}
      />

      <div className="min-h-full flex items-center justify-center p-3 sm:p-6 relative z-10">
        <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-agri-gold/20 animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header Bar */}
          <div className="bg-gradient-to-r from-agri-forest via-agri-dark to-agri-primary text-white p-6 sm:p-7 relative">
            <button
              onClick={handleResetAndClose}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-agri-gold uppercase tracking-widest mb-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MATRA VENTURES PRIVATE LIMITED • ADVISORY & CONSULTATIONS</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
              Schedule a Personal Consultation
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/80 mt-1 max-w-xl">
              1-on-1 confidential guidance designed around our core philosophy: <em className="text-agri-gold not-italic font-semibold">A Calmer Way of Living</em>.
            </p>

            {/* Vertical Switcher Tabs */}
            {!isConfirmed && (
              <div className="flex gap-2 mt-5 bg-black/25 p-1 rounded-2xl max-w-md">
                <button
                  type="button"
                  onClick={() => {
                    setActiveVerticalTab('astro');
                    if (astroVertical?.services?.length) setChosenService(astroVertical.services[0]);
                  }}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all ${
                    activeVerticalTab === 'astro'
                      ? 'bg-agri-gold text-agri-dark shadow-md'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Compass className="w-4 h-4" />
                  <span>MATRA ASTRO</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveVerticalTab('consultants');
                    if (consultVertical?.services?.length) setChosenService(consultVertical.services[0]);
                  }}
                  className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 transition-all ${
                    activeVerticalTab === 'consultants'
                      ? 'bg-agri-gold text-agri-dark shadow-md'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Briefcase className="w-4 h-4" />
                  <span>MATRA CONSULTANTS</span>
                </button>
              </div>
            )}
          </div>

          {/* Modal Body */}
          {isConfirmed ? (
            /* Confirmation Screen */
            <div className="p-8 sm:p-10 text-center space-y-6 bg-agri-cream">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner border-4 border-white">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold text-agri-forest uppercase tracking-widest bg-agri-leaf/20 px-3 py-1 rounded-full">
                  Consultation Confirmed
                </span>
                <h4 className="text-2xl font-black text-agri-dark font-heading">
                  You are all set, {formData.fullName}!
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                  Your appointment for <strong className="text-gray-900">{chosenService.name}</strong> has been secured under reference <strong className="text-agri-forest">#{bookingId}</strong>.
                </p>
              </div>

              {/* Appointment Card */}
              <div className="max-w-md mx-auto bg-white p-5 rounded-2xl border border-gray-200 shadow-sm text-left space-y-3 text-xs">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-500">Service:</span>
                  <span className="font-bold text-agri-dark text-right">{chosenService.name}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Scheduled Date & Time:</span>
                  <span className="font-semibold text-gray-800">{bookingDate} • {bookingTime}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Consultation Fee:</span>
                  <span className="text-sm font-black text-agri-forest">₹{chosenService.price.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Meeting Link & Details:</span>
                  <span className="font-semibold text-emerald-700">Dispatched via WhatsApp & Email</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto pt-2">
                <button
                  onClick={handleWhatsAppBookingPing}
                  className="px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:scale-105"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Receive Details on WhatsApp</span>
                </button>
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-3 rounded-full bg-agri-forest hover:bg-agri-primary text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Close & Continue Browsing
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmitBooking} className="p-6 sm:p-8 space-y-6">
              
              {/* Step 1: Select Service */}
              <div>
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-3">
                  Step 1: Choose Service Package
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentVerticalServices.map((service) => {
                    const isSelected = chosenService.id === service.id;
                    return (
                      <div
                        key={service.id}
                        onClick={() => handleSelectService(service)}
                        className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                          isSelected
                            ? 'border-agri-forest bg-agri-cream/60 shadow-md ring-1 ring-agri-forest'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        <div className="flex justify-between items-start mb-1.5">
                          {service.badge && (
                            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full bg-agri-leaf/20 text-agri-forest">
                              {service.badge}
                            </span>
                          )}
                          <span className="text-sm font-black text-agri-forest font-heading">
                            ₹{service.price.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <h5 className="text-xs font-extrabold text-agri-dark font-heading leading-tight mb-1">
                          {service.name}
                        </h5>
                        <p className="text-[11px] text-gray-500 line-clamp-2">
                          {service.description}
                        </p>
                        <span className="text-[10px] font-semibold text-gray-400 mt-2 block">
                          ⏱ {service.duration}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Date & Slot Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-100">
                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-agri-primary" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    min="2026-11-15"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 font-semibold focus:outline-none focus:border-agri-primary bg-gray-50/50"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-agri-primary" />
                    <span>Preferred Time Slot</span>
                  </label>
                  <select
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-gray-200 font-semibold focus:outline-none focus:border-agri-primary bg-gray-50/50"
                  >
                    <option value="10:30 AM IST">10:30 AM IST (Morning Slot)</option>
                    <option value="02:00 PM IST">02:00 PM IST (Afternoon Slot)</option>
                    <option value="04:30 PM IST">04:30 PM IST (Evening Slot)</option>
                    <option value="07:00 PM IST">07:00 PM IST (Late Evening Slot)</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Contact Information */}
              <div className="pt-2 border-t border-gray-100 space-y-3">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block">
                  Step 2: Client Contact Details
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name *"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 font-medium focus:outline-none focus:border-agri-primary"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="WhatsApp Phone Number *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 font-medium focus:outline-none focus:border-agri-primary"
                    />
                  </div>

                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-gray-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      placeholder="Email Address (for report/recording)"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 font-medium focus:outline-none focus:border-agri-primary"
                    />
                  </div>

                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Current City / State"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 font-medium focus:outline-none focus:border-agri-primary"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={2}
                    placeholder={
                      activeVerticalTab === 'astro'
                        ? 'Optional: Date, time, and place of birth or specific questions you wish to explore...'
                        : 'Optional: Brief summary of current career stage, startup idea, or advisory questions...'
                    }
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full p-3 text-xs rounded-xl border border-gray-200 font-medium focus:outline-none focus:border-agri-primary"
                  />
                </div>
              </div>

              {/* Step 4: Online Payment Selection */}
              <div className="pt-2 border-t border-gray-100">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2">
                  Step 3: Online Payment Method
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMode('upi')}
                    className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                      paymentMode === 'upi'
                        ? 'border-agri-forest bg-agri-cream text-agri-forest ring-1 ring-agri-forest'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <QrCode className="w-4 h-4 text-agri-primary" />
                    <span>Instant UPI / QR</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMode('card')}
                    className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                      paymentMode === 'card'
                        ? 'border-agri-forest bg-agri-cream text-agri-forest ring-1 ring-agri-forest'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <CreditCard className="w-4 h-4 text-agri-primary" />
                    <span>Cards / NetBanking</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMode('pay_later')}
                    className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                      paymentMode === 'pay_later'
                        ? 'border-agri-forest bg-agri-cream text-agri-forest ring-1 ring-agri-forest'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Pay Post-Booking</span>
                  </button>
                </div>
              </div>

              {/* Bottom Price & Booking CTA */}
              <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] text-gray-400 font-semibold uppercase tracking-wider block">
                    Total Consultation Fee:
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-black text-agri-dark font-heading">
                      ₹{chosenService.price.toLocaleString('en-IN')}
                    </span>
                    {chosenService.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        ₹{chosenService.originalPrice.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-shimmer w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-agri-forest to-agri-primary hover:from-agri-primary hover:to-agri-secondary text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-md flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                >
                  <span>CONFIRM & BOOK CONSULTATION</span>
                  <ArrowRight className="w-4 h-4 text-agri-gold" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-agri-primary" />
                <span>100% Confidential • Reschedule Anytime up to 6 Hours Prior</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
