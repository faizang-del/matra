import type { Metadata } from 'next';
import Link from 'next/link';
import { FileText, ShieldCheck, Scale, ArrowLeft, Mail } from 'lucide-react';
import { PARENT_COMPANY } from '@/data/ventures';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Mātra - A Calmer Way of Living',
  description:
    'Terms and Conditions of service for MATRA Ventures Private Limited. Read our transparent policies regarding orders, fresh food preparations, pricing, and services.',
};

export default function TermsPage() {
  return (
    <div className="bg-[#fdfbf7] text-gray-800 min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#12331b] text-white py-14 sm:py-20 px-4 sm:px-8 border-b border-[#1b4528]/60 relative">
        <div className="max-w-4xl mx-auto space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-agri-gold hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Home</span>
          </Link>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agri-leaf/20 text-agri-gold text-[11px] font-bold tracking-widest uppercase border border-agri-gold/30">
            <Scale className="w-3.5 h-3.5" />
            <span>TERMS OF SERVICE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/80 max-w-2xl leading-relaxed">
            Please read these terms carefully before purchasing our farm-fresh products or using the services of {PARENT_COMPANY.name}.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10 text-sm leading-relaxed text-gray-700">
        
        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-3">
          <h2 className="text-lg font-bold text-agri-dark font-heading flex items-center gap-2">
            <FileText className="w-5 h-5 text-agri-primary" />
            <span>1. Acceptance of Terms</span>
          </h2>
          <p>
            By accessing this website, placing an order for Mātra products (including Made-Fresh Classic Salted Makhana, Bodinayakanur Green Cardamom, and Ceremonial Garlands), or booking a consultation, you agree to be bound by these Terms and Conditions and our Privacy Policy.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-agri-dark font-heading">
            2. Fresh-Food Preparation & Ordering Ethics
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong>Made-Fresh to Order:</strong> Our Makhana (fox nut) snacks are roasted in artisanal small batches upon receipt of verified orders (minimum 5 packs of 100g each) to ensure zero shelf-stale oxidation.
            </li>
            <li>
              <strong>Single-Origin Harvest Variation:</strong> Being natural agricultural produce free from chemical dyes, polishes, or artificial flavorings, subtle natural variations in pod size, aroma intensity, and grain color may occur between seasonal winter and summer harvest cycles.
            </li>
            <li>
              <strong>Ceremonial Garlands:</strong> All Elakkai Malai (Cardamom Garlands) are custom woven by hand with natural golden zari. Dimensions are approximate within a standard artisanal ±5% tolerance.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-agri-dark font-heading">
            3. Pricing, Taxes & Invoicing
          </h2>
          <p>
            All prices listed on the website are in Indian Rupees (INR) and are inclusive of applicable Goods and Services Tax (GST) unless explicitly noted. Delivery fees are calculated dynamically at checkout based on cart weight and destination pincode. We reserve the right to revise pricing based on crop yields without prior notice; however, any confirmed and paid order will be honored at the booked price.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-agri-dark font-heading">
            4. Payments & Razorpay Gateway
          </h2>
          <p>
            We accept UPI (Google Pay, PhonePe, Paytm, BHIM), Debit/Credit Cards (Visa, MasterCard, RuPay), Net Banking, and Cash on Delivery (COD) for eligible pincodes. All digital payments are processed through Razorpay. If your card or UPI account is debited but the order fails, Razorpay will automatically reverse the transaction within 5 to 7 working days as per standard banking protocol.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-agri-dark font-heading">
            5. Intellectual Property
          </h2>
          <p>
            The brand name &quot;Mātra&quot;, the tagline &quot;A Calmer Way of Living&quot;, the logo, web copy, photographic harvest archives, and graphics are the exclusive intellectual property of {PARENT_COMPANY.name}. Unauthorized reproduction, commercial distribution, or scraping without written consent is strictly prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-agri-dark font-heading">
            6. Governing Law & Jurisdiction
          </h2>
          <p>
            These Terms of Service are governed by and construed in accordance with the laws of the Republic of India. Any disputes arising out of or related to these terms or orders placed on this platform shall be subject to the exclusive jurisdiction of the competent courts in India.
          </p>
        </section>

        <div className="p-6 rounded-2xl bg-agri-light border border-gray-100 space-y-2 text-xs">
          <p className="font-bold text-agri-dark">Questions regarding our Terms?</p>
          <p className="text-gray-600">
            Reach out to our legal and customer desk at <a href={`mailto:${PARENT_COMPANY.email}`} className="text-agri-forest hover:underline font-semibold">{PARENT_COMPANY.email}</a>.
          </p>
        </div>

      </main>
    </div>
  );
}
