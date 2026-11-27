import type { Metadata } from 'next';
import ProductShop from '@/components/ProductShop';
import ProcessSection from '@/components/ProcessSection';
import ServicesSection from '@/components/ServicesSection';
import DealBanner from '@/components/DealBanner';
import FeaturesBar from '@/components/FeaturesBar';

export const metadata: Metadata = {
  title: 'Our Products | MATRA Foods | Healthy Vegetarian Living',
  description:
    'Explore MATRA Foods single-origin harvest: Classic Salted Makhana made fresh to order from Bihar, single-origin Bodinayakanur Elaichi, and handcrafted ceremonial Elaichi Garlands (Elakkai Malai).',
  keywords: [
    'MATRA Foods',
    'Buy Makhana Online',
    'Classic Salted Makhana',
    'Made Fresh to Order Makhana',
    'Bodinayakanur Elaichi',
    'Fresh Green Cardamom',
    'Elaichi Garlands',
    'Elakkai Malai',
    'Wedding Cardamom Garlands',
  ],
  openGraph: {
    title: 'Our Products | MATRA Foods | Healthy Vegetarian Living',
    description:
      'Directly sourced from Bihar and Bodinayakanur. Unadulterated purity, made fresh to order, sealed in aroma-lock multi-layer barrier pouches.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function ProductsPage() {
  return (
    <div className="space-y-0 bg-[#faf8f4]">
      {/* Page Hero Header */}
      <div className="bg-[#12331b] text-white py-16 sm:py-20 px-4 sm:px-8 border-b border-[#1b4528]/60 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-agri-gold/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-gold/20 text-agri-gold text-xs font-black tracking-widest uppercase border border-agri-gold/30">
            <span>MATRA FOODS • SINGLE-ORIGIN HARVEST</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight">
            Pure Sourcing. Freshly Prepared.
          </h1>

          <p className="text-emerald-100/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            From the wetland lotus basins of Bihar to the high cardamom hills of Bodinayakanur, explore our dedicated range of pure, unadulterated vegetarian produce.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 pt-2 text-xs font-semibold text-agri-cream/90">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-agri-gold" />
              Made Fresh to Order Makhana
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Direct from Bodinayakanur
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-agri-gold" />
              Free Delivery Across India on Orders ₹499+
            </span>
          </div>
        </div>
      </div>

      {/* Trust & Quality Bar */}
      <FeaturesBar />

      {/* Main Product Catalog */}
      <ProductShop />

      {/* Sourcing & Freshness Assurance */}
      <ProcessSection />

      {/* Promotional Deal Banner */}
      <DealBanner />

      {/* Lab Verification & Standards */}
      <ServicesSection />
    </div>
  );
}