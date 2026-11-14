'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Trash2, ShoppingBag, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { useShop } from '@/context/ShopContext';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    shippingFee,
    grandTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    setIsCheckoutOpen,
  } = useShop();

  const [couponInput, setCouponInput] = useState('');

  if (!isCartOpen) return null;

  const freeShippingThreshold = 499;
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const amountNeeded = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponInput.trim()) {
      applyCoupon(couponInput);
      setCouponInput('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          {/* Header */}
          <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-agri-cream">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-agri-forest text-white flex items-center justify-center">
                <ShoppingBag className="w-4 h-4 text-agri-gold" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-agri-dark font-heading">
                  Your Fresh Basket
                </h3>
                <span className="text-xs text-gray-500 font-medium">
                  {cart.length} unique produce items
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-gray-200 text-gray-500 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-agri-light px-5 py-3 border-b border-gray-100">
            <div className="flex justify-between items-center text-xs font-semibold mb-1.5">
              <span className="text-agri-dark">
                {amountNeeded > 0
                  ? `Add ₹${Math.round(amountNeeded)} more for FREE farm delivery!`
                  : '🎉 Congratulations! You unlocked FREE Delivery!'}
              </span>
              <span className="text-agri-primary font-bold">{progressPercent.toFixed(0)}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-agri-primary to-agri-leaf transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 rounded-full bg-agri-pale flex items-center justify-center text-agri-primary">
                  <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 font-heading">
                    Your basket is empty
                  </h4>
                  <p className="text-xs text-gray-500 max-w-xs mt-1">
                    Discover Bodinayakanur Fresh Green Elaichi and Bihar Premium Makhana.
                  </p>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-agri-forest text-white text-xs font-bold tracking-wider uppercase hover:bg-agri-primary transition-colors"
                >
                  START SHOPPING
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-[#faf8f4] flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-bold text-gray-900 line-clamp-1 font-heading">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-rose-500 transition-colors p-0.5"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[10px] text-gray-400 font-medium">
                        {item.product.weight}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-gray-200 rounded-full overflow-hidden bg-gray-50">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2.5 py-0.5 text-xs text-gray-600 hover:bg-gray-200 font-bold"
                        >
                          -
                        </button>
                        <span className="px-2 text-xs font-bold text-gray-800">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2.5 py-0.5 text-xs text-gray-600 hover:bg-gray-200 font-bold"
                        >
                          +
                        </button>
                      </div>

                      {/* Total for item */}
                      <span className="text-xs font-extrabold text-agri-dark font-heading">
                        ₹{(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Order Summary */}
          {cart.length > 0 && (
            <div className="p-5 border-t border-gray-100 bg-agri-cream space-y-4">
              {/* Promo Code Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    placeholder="Coupon (e.g. MATRA25)"
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 uppercase font-semibold focus:outline-none focus:border-agri-primary"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-agri-forest hover:bg-agri-primary text-white text-xs font-bold uppercase transition-colors"
                >
                  Apply
                </button>
              </form>

              {appliedCoupon && (
                <div className="flex items-center justify-between bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-lg text-xs font-medium border border-emerald-200">
                  <span>Coupon &apos;{appliedCoupon}&apos; Active</span>
                  <button
                    onClick={removeCoupon}
                    className="text-xs text-rose-600 font-bold hover:underline"
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Price Calculations */}
              <div className="space-y-1.5 text-xs text-gray-600 pt-1">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-800">₹{subtotal.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-medium">
                    <span>Coupon Discount</span>
                    <span>-₹{discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Farm Express Shipping</span>
                  <span className="font-semibold text-gray-800">
                    {shippingFee === 0 ? 'FREE' : `₹${shippingFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-agri-dark pt-2 border-t border-gray-200 font-heading">
                  <span>Estimated Total</span>
                  <span className="text-base text-agri-forest font-heading">
                    ₹{grandTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={handleProceedToCheckout}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-agri-forest to-agri-primary hover:from-agri-primary hover:to-agri-secondary text-white font-extrabold text-xs tracking-wider uppercase transition-all duration-300 shadow-md flex items-center justify-center gap-2 hover:scale-[1.02]"
              >
                <span>PROCEED TO SECURE CHECKOUT</span>
                <ArrowRight className="w-4 h-4 text-agri-gold" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400">
                <ShieldCheck className="w-3.5 h-3.5 text-agri-primary" />
                <span>100% Secure Checkout • Direct Farm Fresh Guaranteed</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
