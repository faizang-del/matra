'use client';

import React from 'react';
import Image from 'next/image';
import { SERVICES } from '@/data/services';
import { Sprout, CheckCircle2, ArrowRight } from 'lucide-react';
import { FloatingLeavesBackground } from './OrganicDecor';

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <FloatingLeavesBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-pale text-agri-forest text-xs font-extrabold tracking-wider uppercase border border-agri-mint/40 shadow-sm">
            <Sprout className="w-3.5 h-3.5 text-agri-primary animate-pulse" />
            <span>FARMING & MILLING SPECIALTIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-agri-dark font-heading">
            Agricultural Excellence & Heritage Food Processing
          </h2>

          <p className="text-gray-600 text-sm sm:text-base">
            From biological seed propagation to contract farming clusters and clean institutional supply, we operate as a complete end-to-end organic ecosystem.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="card-hover-lift relative bg-agri-cream rounded-3xl overflow-hidden border border-gray-100 hover:border-agri-mint/50 shadow-sm hover:shadow-agri-hover transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image banner */}
              <div className="relative h-52 w-full bg-gray-100 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-agri-dark/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 text-xs font-bold text-white bg-agri-forest/90 px-3 py-1 rounded-full backdrop-blur-sm border border-white/20">
                  {service.subtitle}
                </span>

                {/* Shimmer on Image */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              </div>

              {/* Text Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-agri-dark font-heading group-hover:text-agri-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Benefits List */}
                <div className="space-y-2 pt-2 border-t border-gray-200">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-agri-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="pt-3 inline-flex items-center gap-1.5 text-xs font-bold text-agri-forest hover:text-agri-primary transition-colors uppercase tracking-wider group/link"
                >
                  <span>Inquire Specialty</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1.5 transition-transform text-agri-gold" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
