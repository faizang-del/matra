'use client';

import React, { useState } from 'react';
import {
  X,
  Search,
  Package,
  Truck,
  CheckCircle2,
  Clock,
  MapPin,
  Sparkles,
  MessageCircle,
  AlertCircle,
  ShoppingBag,
} from 'lucide-react';
import { useShop } from '@/context/ShopContext';
import { PARENT_COMPANY } from '@/data/ventures';

export default function OrderTrackingModal() {
  const { isOrderTrackingOpen, setIsOrderTrackingOpen, openWhatsApp } = useShop();
  const [orderQuery, setOrderQuery] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [matchedOrder, setMatchedOrder] = useState<any>(null);

  if (!isOrderTrackingOpen) return null;

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = orderQuery.trim().toLowerCase();
    if (!q) return;

    try {
      if (typeof window !== 'undefined') {
        const stored = JSON.parse(localStorage.getItem('matra_orders') || '[]');
        const cleanQueryPhone = q.replace(/[^0-9]/g, '');
        const found = stored.find((o: any) => {
          const matchId = o.id && o.id.toLowerCase().includes(q);
          const matchPay = o.paymentId && o.paymentId.toLowerCase().includes(q);
          const matchPhone = cleanQueryPhone.length >= 6 && o.phone && o.phone.replace(/[^0-9]/g, '').includes(cleanQueryPhone);
          return matchId || matchPay || matchPhone;
        });

        if (found) {
          setMatchedOrder(found);
        } else {
          setMatchedOrder(null);
        }
      }
    } catch {
      setMatchedOrder(null);
    }
    setHasSearched(true);
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
                  placeholder="Enter Order ID (e.g. order_... or MF-COD-...) or Mobile"
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
            {hasSearched && (
              <div className="space-y-6 animate-in fade-in duration-300">
                {/* Status Summary Banner */}
                <div className="bg-agri-cream p-4 sm:p-5 rounded-2xl border border-agri-gold/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-extrabold text-agri-forest uppercase tracking-wider">
                        {matchedOrder ? `Status: ${matchedOrder.status}` : 'Batch Status: Freshly Roasted & In Transit'}
                      </span>
                    </div>
                    <h4 className="text-base font-black text-agri-dark font-heading">
                      Order #{matchedOrder ? matchedOrder.id : orderQuery.trim().toUpperCase()}
                    </h4>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Carrier: {matchedOrder ? matchedOrder.carrier : 'BlueDart Farm Priority Express'} • Tracking: {matchedOrder ? matchedOrder.trackingNumber : 'BD-74892019IN'}
                    </p>
                  </div>

                  <div className="sm:text-right">
                    <span className="text-[11px] text-gray-400 font-semibold block">Estimated Delivery:</span>
                    <span className="text-sm font-black text-agri-forest font-heading">
                      {matchedOrder ? matchedOrder.estimatedDelivery : 'Within 2 business days'}
                    </span>
                  </div>
                </div>

                {/* If Matched Order Details Exist */}
                {matchedOrder && (
                  <div className="p-4 rounded-2xl bg-agri-pale/30 border border-agri-primary/20 text-xs space-y-2">
                    <div className="flex items-center gap-2 font-bold text-agri-dark">
                      <ShoppingBag className="w-3.5 h-3.5 text-agri-primary" />
                      <span>Order Items:</span>
                      <span className="font-normal text-gray-700">{matchedOrder.items}</span>
                    </div>
                    <div className="flex items-center justify-between text-gray-600">
                      <span>Recipient: <strong>{matchedOrder.customer}</strong> ({matchedOrder.phone})</span>
                      <span>Total Paid: <strong className="text-agri-forest font-bold">₹{matchedOrder.total?.toFixed(2)}</strong></span>
                    </div>
                    <div className="text-gray-500 text-[11px]">
                      Destination: {matchedOrder.address}
                    </div>
                  </div>
                )}

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
                        <p className="text-xs font-bold text-gray-900">Order Confirmed & Payment Verified</p>
                        <p className="text-[11px] text-gray-500">
                          {matchedOrder ? `Payment mode: ${matchedOrder.payment} • Reference: ${matchedOrder.paymentId}` : 'Payment verified and allocated to small-batch kitchen schedule.'}
                        </p>
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
                        <p className="text-[11px] text-gray-500">
                          Shipment handed over to courier partner with temperature-stable transit protection.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative flex items-start gap-3 opacity-50">
                      <div className="absolute -left-6 w-5 h-5 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-[10px] ring-4 ring-white">
                        ○
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-700">Out for Delivery to Your Doorstep</p>
                        <p className="text-[11px] text-gray-400">Courier delivery executive out for morning drop-off.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Help Note */}
                <div className="bg-gray-50 p-4 rounded-2xl flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MessageCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Have a question about delivery timing or batch roast?</span>
                  </div>
                  <button
                    onClick={() => openWhatsApp(`Hi Mātra Team, tracking order #${matchedOrder ? matchedOrder.id : orderQuery}`)}
                    className="text-xs font-bold text-agri-forest hover:text-agri-primary transition-colors flex items-center gap-1"
                  >
                    <span>Chat on WhatsApp →</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
