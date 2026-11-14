'use client';

import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, QrCode, Banknote, ArrowRight } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    grandTotal,
    clearCart,
    showToast,
  } = useShop();

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'upi' | 'cod'>('upi');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [orderId, setOrderId] = useState('');

  const [form, setForm] = useState({
    name: 'Faizan Bhat',
    email: 'faizan@example.com',
    phone: '+91 98765 43210',
    address: 'Flat 402, Green Meadows Residency',
    city: 'New Delhi',
    postalCode: '110001',
  });

  if (!isCheckoutOpen) return null;

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const id = 'MF-' + Math.floor(100000 + Math.random() * 900000);
    setOrderId(id);
    setIsSubmitted(true);
    clearCart();
    showToast(`Order #${id} confirmed! Thank you for supporting organic farmers.`, 'success');
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setIsSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-200 border border-gray-100 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-agri-cream">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-agri-forest text-white flex items-center justify-center">
              <Truck className="w-4 h-4 text-agri-gold" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-agri-dark font-heading">
                {isSubmitted ? 'Order Confirmed!' : 'Farm Fresh Express Checkout'}
              </h3>
              <p className="text-[11px] text-gray-500">
                {isSubmitted ? 'Direct from organic farmland' : 'Safe 256-Bit Encrypted Order'}
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-12 h-12 stroke-[2]" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-agri-primary">
                  Order Successfully Placed
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-agri-dark font-heading mt-1">
                  Thank You, {form.name}!
                </h2>
                <p className="text-xs font-semibold text-gray-500 mt-1">
                  Order Tracking Number: <strong className="text-agri-forest font-mono">{orderId}</strong>
                </p>
              </div>

              <div className="bg-agri-light p-4 rounded-2xl border border-gray-100 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-gray-500">Estimated Dispatch:</span>
                  <span className="font-bold text-gray-800">Tomorrow Morning (Freshly Milled)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Shipping Address:</span>
                  <span className="font-semibold text-gray-800 text-right">{form.address}, {form.city}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Payment Mode:</span>
                  <span className="font-bold uppercase text-agri-primary">{paymentMethod}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 text-sm font-extrabold text-agri-dark">
                  <span>Total Amount:</span>
                  <span>₹{grandTotal.toFixed(2)}</span>
                </div>
              </div>

              <p className="text-xs text-gray-400 max-w-sm mx-auto">
                A confirmation SMS and receipt have been dispatched to {form.phone} and {form.email}.
              </p>

              <button
                onClick={handleClose}
                className="px-8 py-3 rounded-full bg-agri-forest hover:bg-agri-primary text-white text-xs font-bold uppercase tracking-wider shadow-md transition-colors"
              >
                RETURN TO MATRA FOODS STORE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmitOrder} className="space-y-5">
              {/* Shipping Details */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-agri-secondary">
                  1. Delivery Destination
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-agri-primary font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-agri-primary font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">
                      Street Address & Landmark
                    </label>
                    <input
                      type="text"
                      required
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-agri-primary font-medium"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-gray-600 block mb-1">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      required
                      value={form.postalCode}
                      onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-gray-200 focus:outline-none focus:border-agri-primary font-medium"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-agri-secondary">
                  2. Select Payment Method
                </h4>

                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      paymentMethod === 'upi'
                        ? 'border-agri-primary bg-agri-pale/40 text-agri-dark shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    <QrCode className="w-5 h-5 mx-auto mb-1 text-agri-primary" />
                    <span className="text-xs font-bold block">UPI / QR</span>
                    <span className="text-[10px] text-gray-400">Instant</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      paymentMethod === 'card'
                        ? 'border-agri-primary bg-agri-pale/40 text-agri-dark shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 mx-auto mb-1 text-agri-primary" />
                    <span className="text-xs font-bold block">Card / Net</span>
                    <span className="text-[10px] text-gray-400">Visa, MC</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-agri-primary bg-agri-pale/40 text-agri-dark shadow-sm'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    <Banknote className="w-5 h-5 mx-auto mb-1 text-agri-primary" />
                    <span className="text-xs font-bold block">Pay on Delivery</span>
                    <span className="text-[10px] text-gray-400">Cash / UPI</span>
                  </button>
                </div>
              </div>

              {/* Order Amount Bar & Submit */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-gray-500 font-medium block">
                    Amount to Pay:
                  </span>
                  <span className="text-xl font-black text-agri-dark font-heading">
                    ₹{grandTotal.toFixed(2)}
                  </span>
                </div>

                <button
                  type="submit"
                  className="px-7 py-3 rounded-full bg-agri-forest hover:bg-agri-primary text-white text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 hover:scale-[1.02]"
                >
                  <span>CONFIRM ORDER</span>
                  <ArrowRight className="w-4 h-4 text-agri-gold" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-agri-primary" />
                <span>100% Satisfaction Guarantee • Hand-Packed Fresh</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
