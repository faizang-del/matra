import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sprout, ShieldCheck, HeartHandshake, CheckCircle2, ArrowRight, 
  MapPin, Award, Compass, Briefcase, Smartphone, Wrench, Sparkles, Truck
} from 'lucide-react';
import { PARENT_COMPANY } from '@/data/ventures';
import { FloatingLeavesBackground } from '@/components/OrganicDecor';

export const metadata: Metadata = {
  title: 'About Us | MATRA Ventures Private Limited | A Calmer Way of Living',
  description:
    'Discover the philosophy of MATRA Ventures Private Limited. Operating across MATRA Foods, MATRA Astro, MATRA Consultants, MATRA Digital, and MATRA Home Services under our guiding ethos: A Calmer Way of Living.',
  keywords: [
    'MATRA Ventures Private Limited',
    'About MATRA Ventures',
    'A Calmer Way of Living',
    'MATRA Foods Heritage',
    'Bodinayakanur Cardamom Sourcing',
    'Bihar Makhana Sourcing',
    'Cardamom Garlands Elakkai Malai',
    'Corporate Advisory MATRA',
    'Vedic Astrology MATRA',
  ],
  openGraph: {
    title: 'About Us | MATRA Ventures Private Limited',
    description:
      'Rooted in ethical sourcing, transparent craftsmanship, and personalized advisory services. Discover our parent brand story.',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function AboutPage() {
  return (
    <div className="bg-[#faf8f4] text-gray-800 space-y-0">
      
      {/* 1. Hero Header */}
      <section className="bg-[#12331b] text-white py-16 sm:py-24 px-4 sm:px-8 relative overflow-hidden border-b border-[#1b4528]/60">
        <div className="absolute top-0 right-0 w-96 h-96 bg-agri-gold/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-gold/20 text-agri-gold text-xs font-black tracking-widest uppercase border border-agri-gold/30">
            <span>MATRA VENTURES PRIVATE LIMITED</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight max-w-4xl mx-auto leading-tight">
            A Calmer Way of Living
          </h1>

          <p className="text-emerald-100/85 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            We build businesses that simplify life, honor sacred heritage, and restore calm to everyday modern living—from unadulterated food staples and Vedic consultations to strategic business advisory.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/products"
              className="px-6 py-3 rounded-full bg-agri-gold hover:bg-amber-400 text-agri-dark font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105"
            >
              Explore Our Produce
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 font-extrabold text-xs uppercase tracking-wider transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Founding Philosophy & Ethos */}
      <section className="py-20 lg:py-28 px-4 sm:px-8 relative overflow-hidden bg-white">
        <FloatingLeavesBackground />

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#f4f1ea]">
              <Image
                src="/products/matra-products-duo.jpg"
                alt="MATRA Foods Pure Produce"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="text-xs font-bold uppercase tracking-widest text-agri-gold">
                  Direct Farmer Sourcing
                </p>
                <p className="text-lg font-bold font-heading">
                  Bodinayakanur, Tamil Nadu & Mithila Basin, Bihar
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-agri-forest text-white p-6 rounded-3xl shadow-xl border border-white/20 max-w-xs hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-agri-gold text-agri-dark flex items-center justify-center font-black text-xl">
                  100%
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-agri-mint">
                    Pure & Unadulterated
                  </p>
                  <p className="text-[11px] text-white/80">
                    Zero chemical bleaching, artificial green dyes, or sulfur
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-agri-pale text-agri-forest text-xs font-black tracking-wider uppercase border border-agri-mint/40">
              <Sprout className="w-3.5 h-3.5 text-agri-primary" />
              <span>OUR GUIDING PHILOSOPHY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-agri-dark font-heading leading-tight">
              Slowing Down to Rediscover What Truly Matters
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              In a rushed world dominated by mass production, industrial chemical shortcuts, and opaque supply chains, <strong>MATRA Ventures Private Limited</strong> stands for mindful deliberation and uncompromised authenticity.
            </p>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Our signature tagline, <em>&quot;A Calmer Way of Living&quot;</em>, is not merely a slogan—it is the operational filter through which every product, consultation, and enterprise decision is made. When you choose MATRA, you choose transparent sourcing, respectful farmer relationships, and pure quality.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-agri-cream border border-agri-gold/20 space-y-1">
                <div className="flex items-center gap-2 text-agri-forest font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-agri-gold" />
                  <span>Uncompromised Purity</span>
                </div>
                <p className="text-xs text-gray-600">
                  Zero artificial colors, synthetic fragrances, chemical polish, or sulfur bleaching.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-agri-cream border border-agri-gold/20 space-y-1">
                <div className="flex items-center gap-2 text-agri-forest font-bold text-sm">
                  <HeartHandshake className="w-4 h-4 text-agri-gold" />
                  <span>Direct Sourcing Desks</span>
                </div>
                <p className="text-xs text-gray-600">
                  Direct farmer relationships in Bodinayakanur and Bihar without middlemen exploitation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Deep-Dive: Sourcing Origin Stories */}
      <section className="py-20 lg:py-28 px-4 sm:px-8 bg-agri-cream relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-agri-secondary">
              TRANSPARENT ORIGINS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-agri-dark font-heading">
              Where Our Stories Begin
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Every staple in our pantry and every garland we weave has an undeniable geographical heritage rooted in India&apos;s most celebrated agrarian regions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Sourcing Hub 1: Bihar Makhana */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-800 flex items-center justify-center text-2xl font-bold">
                  🌾
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-agri-gold block">
                    Mithila Wetlands • Bihar
                  </span>
                  <h3 className="text-xl font-bold text-agri-dark font-heading mt-1">
                    Classic Salted Makhana
                  </h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Grown in the pristine aquatic wetlands of Bihar, makhana (gorgon fox nuts) are harvested by hand through traditional pond diving. Unlike mass-market brands who warehouse roasted snacks for months, MATRA Makhana is <strong>Made Fresh to Order</strong>. Roasting begins in our home-based setup only after your order is confirmed, preserving the wholesome crunch and delicate nutty aroma.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 text-xs font-bold text-agri-forest flex items-center justify-between">
                <span>Min. Order: 5 packets</span>
                <span>₹299 introductory</span>
              </div>
            </div>

            {/* Sourcing Hub 2: Bodinayakanur Elaichi */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center text-2xl font-bold">
                  🌱
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-agri-gold block">
                    Cardamom Capital • Tamil Nadu
                  </span>
                  <h3 className="text-xl font-bold text-agri-dark font-heading mt-1">
                    Fresh Green Elaichi
                  </h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Bodinayakanur, situated in the Western Ghats foothills, produces India&apos;s most potent extra-bold cardamom pods. Harvested at full maturity, our pods are shade-cured in traditional firewood-heated kilns without synthetic green dyes or chemical sprays. Repacked under the MATRA brand into airtight aroma-lock pouches to protect their volatile essential oils.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 text-xs font-bold text-agri-forest flex items-center justify-between">
                <span>10g & 50g packs</span>
                <span>From ₹99</span>
              </div>
            </div>

            {/* Sourcing Hub 3: Ceremonial Garlands */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-5 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-800 flex items-center justify-center text-2xl font-bold">
                  ✨
                </div>
                <div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-agri-gold block">
                    Sacred Heritage Craft
                  </span>
                  <h3 className="text-xl font-bold text-agri-dark font-heading mt-1">
                    Elaichi Garlands (Elakkai Malai)
                  </h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  A timeless symbol of honor, prosperity, and spiritual auspiciousness in Indian weddings and temple ceremonies. Master artisans in Bodinayakanur handcraft each garland using thousands of hand-selected whole green cardamom pods, interwoven with golden zari borders and vibrant silk tassels. Delivers an enchanting botanical fragrance that endures for months.
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 text-xs font-bold text-agri-forest flex items-center justify-between">
                <span>Handcrafted to order</span>
                <span>Custom bridal pairs</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. The Five Verticals of MATRA Ventures */}
      <section className="py-20 lg:py-28 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-agri-gold">
              CORPORATE ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-agri-dark font-heading">
              Our 5 Business Verticals
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Under the parent brand MATRA Ventures Private Limited, each vertical is built around simplicity, integrity, and client peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Vertical 1: Foods */}
            <div className="p-8 rounded-3xl border border-gray-100 bg-[#faf8f4] hover:border-agri-mint/60 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-agri-forest text-white flex items-center justify-center">
                <Sprout className="w-6 h-6 text-agri-gold" />
              </div>
              <h3 className="text-xl font-bold text-agri-dark font-heading">
                1. MATRA Foods
              </h3>
              <p className="text-xs font-bold text-agri-gold uppercase tracking-wider">
                Healthy Vegetarian Living
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Direct single-origin sourcing of pure vegetarian staples. Initial offerings: Made-Fresh Classic Salted Makhana, Bodinayakanur Green Cardamom, and Artisanal Cardamom Garlands.
              </p>
              <Link href="/products" className="inline-flex items-center gap-1.5 text-xs font-bold text-agri-forest hover:text-agri-primary">
                <span>View Products Catalog →</span>
              </Link>
            </div>

            {/* Vertical 2: Astro */}
            <div className="p-8 rounded-3xl border border-gray-100 bg-[#faf8f4] hover:border-agri-mint/60 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1b4528] text-white flex items-center justify-center">
                <Compass className="w-6 h-6 text-agri-gold" />
              </div>
              <h3 className="text-xl font-bold text-agri-dark font-heading">
                2. MATRA Astro
              </h3>
              <p className="text-xs font-bold text-agri-gold uppercase tracking-wider">
                Astrology & Consultations
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Empowering personalized Vedic guidance, Kundli analysis, Vastu audits, and auspicious Muhurat planning to navigate life&apos;s pivotal decisions with clarity and calm.
              </p>
              <Link href="/#astro" className="inline-flex items-center gap-1.5 text-xs font-bold text-agri-forest hover:text-agri-primary">
                <span>Book a Consultation →</span>
              </Link>
            </div>

            {/* Vertical 3: Consultants */}
            <div className="p-8 rounded-3xl border border-gray-100 bg-[#faf8f4] hover:border-agri-mint/60 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-agri-forest text-white flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-agri-gold" />
              </div>
              <h3 className="text-xl font-bold text-agri-dark font-heading">
                3. MATRA Consultants
              </h3>
              <p className="text-xs font-bold text-agri-gold uppercase tracking-wider">
                Business & Career Advisory
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Professional career counselling, leadership coaching, MSME growth strategy, and sustainable business models built without burnout.
              </p>
              <Link href="/#consultants" className="inline-flex items-center gap-1.5 text-xs font-bold text-agri-forest hover:text-agri-primary">
                <span>Schedule Advisory Session →</span>
              </Link>
            </div>

            {/* Vertical 4: Digital */}
            <div className="p-8 rounded-3xl border border-gray-100 bg-[#faf8f4] hover:border-agri-mint/60 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#12331b] text-white flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-agri-gold" />
              </div>
              <h3 className="text-xl font-bold text-agri-dark font-heading">
                4. MATRA Digital
              </h3>
              <p className="text-xs font-bold text-agri-gold uppercase tracking-wider">
                Apps & Digital Solutions
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Developing calm, human-centric mobile applications, productivity platforms, and enterprise digital architecture. (Phased expansion underway).
              </p>
              <span className="text-[11px] font-bold text-gray-400">
                Rollout Phase 2026
              </span>
            </div>

            {/* Vertical 5: Home Services */}
            <div className="p-8 rounded-3xl border border-gray-100 bg-[#faf8f4] hover:border-agri-mint/60 transition-all space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#12331b] text-white flex items-center justify-center">
                <Wrench className="w-6 h-6 text-agri-gold" />
              </div>
              <h3 className="text-xl font-bold text-agri-dark font-heading">
                5. MATRA Home Services
              </h3>
              <p className="text-xs font-bold text-agri-gold uppercase tracking-wider">
                Home Repair & Maintenance
              </p>
              <p className="text-xs text-gray-600 leading-relaxed">
                Vetted, trustworthy technicians for residential repairs, preventive maintenance, electrical, plumbing, and calm household management. (Early access waitlist).
              </p>
              <span className="text-[11px] font-bold text-gray-400">
                Pilot Launching Soon
              </span>
            </div>

            {/* Corporate Commitment Box */}
            <div className="p-8 rounded-3xl border-2 border-dashed border-agri-gold/40 bg-agri-cream flex flex-col justify-between space-y-4">
              <div>
                <Sparkles className="w-6 h-6 text-agri-gold mb-2" />
                <h3 className="text-xl font-bold text-agri-dark font-heading">
                  Scalable by Design
                </h3>
                <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                  As MATRA Ventures expands, every new initiative will steadfastly protect customer wellbeing, environmental harmony, and uncompromised quality.
                </p>
              </div>
              <Link
                href="/contact"
                className="w-full py-2.5 rounded-full bg-agri-forest hover:bg-agri-primary text-white text-xs font-bold uppercase tracking-wider text-center transition-colors shadow-sm"
              >
                Connect With Us
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Corporate Details & CTA */}
      <section className="bg-[#12331b] text-white py-16 px-4 sm:px-8 border-t border-[#1b4528]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase tracking-widest text-agri-gold">
              CORPORATE HEADQUARTERS
            </p>
            <h3 className="text-2xl sm:text-3xl font-black font-heading">
              {PARENT_COMPANY.name}
            </h3>
            <p className="text-xs text-emerald-100/75 max-w-xl">
              Operating across agricultural superfoods, botanical spices, and personalized consultations under Indian corporate registration.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="px-6 py-3 rounded-full bg-agri-gold hover:bg-amber-400 text-agri-dark font-extrabold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Order Pure Produce
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 font-extrabold text-xs uppercase tracking-wider transition-colors"
            >
              Contact Our Desk
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}