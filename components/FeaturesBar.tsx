'use client';

import React from 'react';
import { Leaf, Tractor, ShieldCheck, Truck } from 'lucide-react';

const FEATURES = [
  {
    icon: Leaf,
    title: 'Homely Ingredients',
    description: '100% natural staples. Zero artificial flavours, synthetic colours, or chemical preservatives.',
    color: 'from-emerald-600 to-agri-primary',
    accentColor: 'bg-emerald-500',
  },
  {
    icon: Tractor,
    title: 'Direct Farm Belts',
    description: 'Bodinayakanur cardamom hills and hand-harvested lotus seeds from Mithila, Bihar.',
    color: 'from-agri-primary to-agri-forest',
    accentColor: 'bg-agri-primary',
  },
  {
    icon: ShieldCheck,
    title: 'Roasted Post-Order',
    description: 'Prepared fresh in small batches upon order. Pure Himalayan rock salt with wholesome crunch.',
    color: 'from-amber-600 to-agri-gold',
    accentColor: 'bg-agri-gold',
  },
  {
    icon: Truck,
    title: 'Aroma-Lock Freshness',
    description: 'Sealed in multi-barrier pouches for enduring botanical fragrance and fresh crunch.',
    color: 'from-teal-600 to-emerald-700',
    accentColor: 'bg-teal-600',
  },
];

export default function FeaturesBar() {
  return (
    <div className="relative -mt-10 sm:-mt-14 z-20 max-w-7xl mx-auto px-4 sm:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {FEATURES.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="card-hover-lift relative bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-gray-100/80 shadow-agri group overflow-hidden cursor-default"
            >
              {/* Subtle top accent line on hover */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${item.accentColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-gray-900 font-heading group-hover:text-agri-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Shimmer on card hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
