'use client';

import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Truck,
  CreditCard,
  QrCode,
  Banknote,
  ArrowRight,
  Loader2,
  Lock,
} from 'lucide-react';
import { useShop } from '@/context/ShopContext';

// Helper to load Razorpay Checkout script dynamically if not yet ready
const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window !== 'undefined' && (window as any).Razorpay) {
      resolve(true);
      return;
    }
    const existing = document.querySelector('script[src="https://checkout.razorpay.com/v1/checkout.js"]');
    if (existing) {
      existing.addEventListener('load', () => resolve(true));
      existing.addEventListener('error', () => resolve(false));
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

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
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderId, setOrderId] = useState('');
  const [paymentId, setPaymentId] = useState('');

  const [form, setForm] = useState({
    name: 'Faizan Bhat',
    email: 'faizan@example.com',
    phone: '+91 98765 43210',
    address: 'Flat 402, Green Meadows Residency',
    city: 'New Delhi',
    postalCode: '110001',
  });

  if (!isCheckoutOpen) return null;

  const recordPlacedOrder = (orderRef: string, payRef: string, method: string) => {
    try {
      if (typeof window === 'undefined') return;
      const itemsDescription = cart.map((i) => `${i.product.name} (x${i.quantity})`).join(', ');
      const newOrder = {
        id: orderRef,
        paymentId: payRef,
        customer: form.name,
        phone: form.phone,
        email: form.email,
        address: `${form.address}, ${form.city} - ${form.postalCode}`,
        city: form.city,
        items: itemsDescription,
        total: grandTotal,
        payment: method === 'cod' ? 'Cash on Delivery' : `Razorpay (${method.toUpperCase()})`,
        date: 'Today, Just Now',
        status: 'Roasting in Small Batch',
        carrier: 'BlueDart Farm Priority Express',
        trackingNumber: `BD-${Math.floor(10000000 + Math.random() * 90000000)}IN`,
        estimatedDelivery: 'Within 2-3 business days',
      };

      const existing = JSON.parse(localStorage.getItem('matra_orders') || '[]');
      localStorage.setItem('matra_orders', JSON.stringify([newOrder, ...existing]));
    } catch (err) {
      console.error('Failed to save order to localStorage:', err);
    }
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. CASH ON DELIVERY (COD) FLOW
    if (paymentMethod === 'cod') {
      const codId = 'MF-COD-' + Math.floor(100000 + Math.random() * 900000);
      setOrderId(codId);
      setPaymentId('Cash on Delivery');
      recordPlacedOrder(codId, 'Cash on Delivery', 'cod');
      setIsSubmitted(true);
      clearCart();
      showToast(`Order #${codId} placed! Thank you for choosing Mātra.`, 'success');
      return;
    }

    // 2. RAZORPAY PAYMENT (UPI / CARD) FLOW
    setIsProcessing(true);

    try {
      // Step A: Ensure Razorpay SDK script is loaded
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        showToast('Unable to load Razorpay payment gateway. Please check your internet connection.', 'warning');
        setIsProcessing(false);
        return;
      }

      // Step B: Create an Order on the server via Next.js API Route
      const orderRes = await fetch('/api/razorpay/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: grandTotal,
          receipt: `matra_${Date.now()}`,
          notes: {
            customerName: form.name,
            email: form.email,
            phone: form.phone,
            address: `${form.address}, ${form.city} - ${form.postalCode}`,
            itemCount: cart.length.toString(),
          },
        }),
      });

      const orderData = await orderRes.json();

      if (!orderData.success || !orderData.order) {
        showToast(orderData.error || 'Failed to initialize payment with Razorpay.', 'warning');
        setIsProcessing(false);
        return;
      }

      // Step C: Configure Razorpay Checkout modal
      const razorpayKey =
        process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_U2IuGW8ovUINmB';

      const options: any = {
        key: razorpayKey,
        amount: orderData.order.amount,
        currency: orderData.order.currency,
        name: 'Mātra Foods',
        description: 'Single-Origin Vegetarian Farm Staples',
        image: '/favicon.svg',
        order_id: orderData.order.id,
        prefill: {
          name: form.name,
          email: form.email,
          contact: form.phone.replace(/[^0-9]/g, ''),
          method: paymentMethod === 'upi' ? 'upi' : paymentMethod === 'card' ? 'card' : undefined,
        },
        config: paymentMethod === 'upi' ? {
          display: {
            blocks: {
              upi: {
                name: 'Pay with UPI QR Code',
                instruments: [
                  {
                    method: 'upi',
                    flows: ['qr', 'intent', 'collect'],
                  },
                ],
              },
            },
            sequence: ['block.upi'],
            preferences: {
              show_default_blocks: true,
            },
          },
        } : undefined,
        notes: {
          shipping_address: `${form.address}, ${form.city}`,
        },
        theme: {
          color: '#163e21', // Official Mātra forest green
        },
        modal: {
          ondismiss: () => {
            setIsProcessing(false);
            showToast('Payment window closed. You can retry anytime.', 'info');
          },
        },
        handler: async (response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) => {
          try {
            // Step D: Verify payment signature on the server
            const verifyRes = await fetch('/api/razorpay/verify-payment', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(response),
            });

            const verifyData = await verifyRes.json();

            if (verifyData.success) {
              setOrderId(response.razorpay_order_id);
              setPaymentId(response.razorpay_payment_id);
              recordPlacedOrder(response.razorpay_order_id, response.razorpay_payment_id, paymentMethod);
              setIsSubmitted(true);
              clearCart();
              showToast(`Payment successful! Order confirmed #${response.razorpay_payment_id.slice(-6)}`, 'success');
            } else {
              showToast('Payment verification failed. Please contact support.', 'warning');
            }
          } catch (err) {
            console.error('Payment verification error:', err);
            showToast('Error validating payment response.', 'warning');
          } finally {
            setIsProcessing(false);
          }
        },
      };

      const razorpayInstance = new (window as any).Razorpay(options);
      razorpayInstance.on('payment.failed', function (failureResponse: any) {
        console.error('Razorpay payment failed:', failureResponse);
        showToast(failureResponse.error?.description || 'Payment was unsuccessful. Please try again.', 'warning');
        setIsProcessing(false);
      });

      razorpayInstance.open();
    } catch (err: any) {
      console.error('Checkout error:', err);
      showToast(err?.message || 'Something went wrong during checkout.', 'warning');
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setIsSubmitted(false);
    setIsProcessing(false);
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
            <div className="w-8 h-8 rounded-lg bg-agri-forest text-white flex items-center justify-center shadow-sm">
              <Truck className="w-4 h-4 text-agri-gold" />
            </div>
            <div>
              <h3 className="text-base font-extrabold text-agri-dark font-heading">
                {isSubmitted ? 'Order Confirmed!' : 'Farm Fresh Express Checkout'}
              </h3>
              <p className="text-[11px] text-gray-500 flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>
                  {isSubmitted ? 'Direct from organic farmland' : 'Safe 256-Bit Razorpay Protected'}
                </span>
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
                  Razorpay Order ID: <strong className="text-agri-forest font-mono">{orderId}</strong>
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
                  <span className="text-gray-500">Payment Reference:</span>
                  <span className="font-bold font-mono text-agri-forest">{paymentId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Payment Mode:</span>
                  <span className="font-bold uppercase text-agri-primary">
                    {paymentMethod === 'cod' ? 'Cash on Delivery' : `Razorpay (${paymentMethod.toUpperCase()})`}
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 text-sm font-extrabold text-agri-dark">
                  <span>Total Amount Paid:</span>
                  <span className="text-agri-forest">₹{grandTotal.toFixed(2)}</span>
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
                      Phone Number (for SMS & Tracking)
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
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-agri-secondary">
                    2. Select Payment Method
                  </h4>
                  <span className="text-[10px] text-gray-400 font-medium">Powered by Razorpay</span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      paymentMethod === 'upi'
                        ? 'border-agri-primary bg-agri-pale/40 text-agri-dark shadow-sm ring-1 ring-agri-primary'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    <QrCode className="w-5 h-5 mx-auto mb-1 text-agri-primary" />
                    <span className="text-xs font-bold block">UPI / QR Code</span>
                    <span className="text-[10px] text-gray-400">Instant Dynamic QR</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      paymentMethod === 'card'
                        ? 'border-agri-primary bg-agri-pale/40 text-agri-dark shadow-sm ring-1 ring-agri-primary'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    <CreditCard className="w-5 h-5 mx-auto mb-1 text-agri-primary" />
                    <span className="text-xs font-bold block">Cards / Net</span>
                    <span className="text-[10px] text-gray-400">Visa, MC, Rupay</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-agri-primary bg-agri-pale/40 text-agri-dark shadow-sm ring-1 ring-agri-primary'
                        : 'border-gray-200 hover:border-gray-300 text-gray-600'
                    }`}
                  >
                    <Banknote className="w-5 h-5 mx-auto mb-1 text-agri-primary" />
                    <span className="text-xs font-bold block">Pay on Delivery</span>
                    <span className="text-[10px] text-gray-400">Cash / Direct</span>
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
                  disabled={isProcessing}
                  className="px-7 py-3 rounded-full bg-agri-forest hover:bg-agri-primary disabled:opacity-75 disabled:cursor-not-allowed text-white text-xs font-extrabold uppercase tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 hover:scale-[1.02]"
                >
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-agri-gold" />
                      <span>{paymentMethod === 'upi' ? 'GENERATING QR CODE...' : 'INITIALIZING PAYMENT...'}</span>
                    </>
                  ) : (
                    <>
                      <span>
                        {paymentMethod === 'cod'
                          ? 'CONFIRM ORDER'
                          : paymentMethod === 'upi'
                          ? 'SCAN QR & PAY WITH UPI'
                          : 'PAY WITH CARD / NETBANKING'}
                      </span>
                      <ArrowRight className="w-4 h-4 text-agri-gold" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-agri-primary" />
                <span>256-Bit SSL Encrypted • Verified Razorpay Merchant Gateway</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
