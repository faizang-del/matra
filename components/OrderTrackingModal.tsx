'use client';

import React, { useState } from 'react';
import { X, Search, Package, Truck, CheckCircle2, Clock, MapPin, Sparkles, MessageCircle, AlertCircle } from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { PARENT_COMPANY } from '@/data/ventures';

export default function OrderTrackingModal() {
  const { isOrderTrackingOpen, setIsOrderTrackingOpen, openWhatsApp } = useShop();
  const [orderQuery, setOrderQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  if (!isOrderTrackingOpen) return null;

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderQuery.trim()) {
      setHasSearched(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={() => setIsOrderTrackingOpen(false)}
      />

      <div className="min-h-full flex items-center justify-center p-3 sm:p-6 relative z-10">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-agri-gold/20 animate-in fade-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-agri-forest to-agri-primary text-white p-6 relative">
            <button
              onClick={() => setIsOrderTrackingOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold text-agri-gold uppercase tracking-widest mb-1">
              <Truck className="w-3.5 h-3.5" />
              <span>MATRA VENTURES LOGISTICS</span>
            </div>

            <h3 className="text-2xl font-black font-heading text-white">
              Track Your Farm Fresh Order
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/80 mt-1">
              Directly sourced from Bihar and Bodinayakanur, prepared fresh to order, and delivered to your doorstep.
            </p>
          </div>

          {/* Search Form */}
          <div className="p-6 sm:p-8 space-y-6">
            <form onSubmit={handleTrackSubmit} className="flex gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-gray-400 absolute left-4 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="Enter Order ID (e.g. MV-849201) or Mobile Number"
                  value={orderQuery}
                  onChange={(e) => setOrderQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 text-xs sm:text-sm rounded-2xl border border-gray-200 font-medium focus:outline-none focus:border-agri-primary uppercase placeholder:normal-case"
                />
              </div>
              <button
                type="submit"
                className="btn-shimmer px-6 py-3 rounded-2xl bg-agri-forest hover:bg-agri-primary text-white font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-sm flex items-center gap-2"
              >
                <span>TRACK</span>
              </button>
            </form>

            {/* Results Display */}
            {hasSearched ? (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* Status Summary Banner */}
                <div className="bg-agri-cream p-4 sm:p-5 rounded-2xl border border-agri-gold/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-extrabold text-agri-forest uppercase tracking-wider">
                        Batch Status: Freshly Prepared & In Transit
                      </span>
                    </div>
                    <h4 className="text-base font-black text-agri-dark font-heading">
                      Order #{orderQuery.trim().toUpperCase()}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Carrier: BlueDart Farm Priority Express • Tracking: BD-74892019IN
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <span className="text-[11px] text-gray-400 font-semibold block">Estimated Delivery:</span>
                    <span className="text-sm font-black text-agri-forest font-heading">
                      Within 2 business days
                    </span>
                  </div>
                </div>

                {/* Progress Steps Timeline */}
                <div className="space-y-4 pt-2">
                  <h5 className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                    Harvest & Order Progression
                  </h5>

                  <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-agri-primary/30">
                    
                    {/* Step 1 */}
                    <div className="relative flex items-start gap-3">
                      <div className="absolute -left-6 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] ring-4 ring-white">
                        ✓
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">Order Confirmed & Sourcing Logged</p>
                        <p className="text-[11px] text-gray-500">Order received and allocated to small-batch kitchen schedule.</p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-start gap-3">
                      <div className="absolute -left-6 w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] ring-4 ring-white">
                        ✓
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">Fresh Batch Prepared (Made to Order USP)</p>
                        <p className="text-[11px] text-gray-500">
                          Classic Salted Makhana freshly flame-roasted post-order in small batches. Bodinayakanur Elaichi pouches sealed in nitrogen aroma barrier.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-start gap-3">
                      <div className="absolute -left-6 w-5 h-5 rounded-full bg-agri-gold text-agri-dark flex items-center justify-center text-[10px] font-bold ring-4 ring-white animate-pulse">
                        ●
                      </div>
                      <div>
                        <p className="text-xs font-bold text-agri-forest">Dispatched via Express Courier</p>
                        <p className="text-[11px] text-gray-500">En route to customer hub with temperature-stable transit protection.</p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-start gap-3 opacity-50">
                      <div className="absolute -left-6 w-5 h-5 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center text-[10px] ring-4 ring-white">
                        ○
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-700">Out for Doorstep Delivery</p>
                        <p className="text-[11px] text-gray-400">Scheduled upon arrival at local delivery depot.</p>
                      </div>
                    </div>

                  </div>
                </div>

                {/* WhatsApp Help */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <span className="text-xs text-gray-500">
                    Need instant delivery updates or dispatch changes?
                  </span>
                  <button
                    onClick={() => openWhatsApp(`Hello MATRA team, please check the status of my order #${orderQuery.trim().toUpperCase()}`)}
                    className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp Courier Desk</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Initial Explainer */
              <div className="text-center py-6 text-xs text-gray-500 space-y-3 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <Package className="w-10 h-10 text-agri-primary/50 mx-auto" />
                <p className="max-w-md mx-auto">
                  Every order of <strong>MATRA Foods</strong> is tracked in real-time. Because our Makhana is <em>Made Fresh to Order</em> in small batches, roasting begins right after confirmation.
                </p>
                <div className="flex justify-center gap-2 text-[11px] text-agri-forest font-semibold">
                  <span>Demo Order IDs: <strong>MV-849201</strong> or <strong>MV-102945</strong></span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
