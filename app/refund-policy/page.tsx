import type { Metadata } from 'next';
import Link from 'next/link';
import { RefreshCw, ShieldAlert, CheckCircle2, ArrowLeft, HeartHandshake, Phone } from 'lucide-react';
import { PARENT_COMPANY } from '@/data/ventures';

export const metadata: Metadata = {
  title: 'Refund, Return & Cancellation Policy | Mātra - A Calmer Way of Living',
  description:
    'Refund & Return Policy of MATRA Ventures Private Limited. Transparent guidelines regarding food safety, damaged in transit replacements, and prompt Razorpay refunds.',
};

export default function RefundPolicyPage() {
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
            <RefreshCw className="w-3.5 h-3.5" />
            <span>CUSTOMER ASSURANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Refund & Cancellation Policy
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/80 max-w-2xl leading-relaxed">
            We hold ourselves to the highest standards of culinary purity. If something is not right, we make it right.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10 text-sm leading-relaxed text-gray-700">
        
        {/* Intro Promise */}
        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-3">
          <h2 className="text-lg font-bold text-agri-dark font-heading flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-agri-primary" />
            <span>1. Our 100% Quality & Freshness Guarantee</span>
          </h2>
          <p>
            Every packet of Mātra Made-Fresh Makhana and Bodinayakanur Elaichi leaves our facilities sealed in pristine barrier foil. Because these are perishable food staples governed by food safety standards (FSSAI), products once opened cannot be physically returned for resale. However, if your order arrives damaged, defective, or incorrect, you are fully covered under our replacement or refund guarantee.
          </p>
        </div>

        {/* Section 2: Damaged / Defective */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-agri-dark font-heading">
            2. Eligible Scenarios for Replacement or Refund
          </h2>
          <p>You are entitled to a full refund or free replacement within <strong>7 days of delivery</strong> under the following conditions:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong>Transit Damage:</strong> The outer shipping box or inner aroma-lock pouch was punctured, crushed, or compromised during transit.
            </li>
            <li>
              <strong>Incorrect Product Dispatch:</strong> You received an item different from what was ordered in your confirmed order invoice.
            </li>
            <li>
              <strong>Quality Flaw:</strong> Cardamom pods or makhana showing loss of vacuum seal, moisture ingress, or uncharacteristic flavor upon unboxing.
            </li>
          </ul>
        </section>

        {/* Section 3: How to Request */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-agri-dark font-heading">
            3. How to Request a Refund / Replacement
          </h2>
          <ol className="list-decimal pl-5 space-y-2 text-gray-600">
            <li>
              Take 1 or 2 clear photographs of the damaged pouch or package label upon delivery.
            </li>
            <li>
              Send an email to <strong>{PARENT_COMPANY.email}</strong> or message our WhatsApp Desk at <strong>+{PARENT_COMPANY.whatsappNumber}</strong> with your Order ID (e.g., <em>MF-123456</em> or Razorpay Payment ID).
            </li>
            <li>
              Our support team will review and confirm approval within <strong>24 working hours</strong>.
            </li>
          </ol>
        </section>

        {/* Section 4: Cancellation */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-agri-dark font-heading">
            4. Order Cancellation Policy
          </h2>
          <p>
            Because our Makhana is roasted in small fresh batches, orders can be canceled free of charge within <strong>4 hours of placement</strong> or before the roasting process has begun. Once the batch is freshly roasted, vacuum-sealed, and dispatched to our logistics carrier, cancellation is no longer possible.
          </p>
        </section>

        {/* Section 5: Refund Timeline */}
        <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-200/60 space-y-3 text-xs">
          <h3 className="font-bold text-agri-dark text-sm flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>5. Refund Timeline & Processing</span>
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Approved refunds are initiated immediately to your original payment method via <strong>Razorpay</strong>:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-600">
            <li><strong>UPI & Netbanking:</strong> 2 to 4 business days.</li>
            <li><strong>Debit / Credit Cards:</strong> 5 to 7 business days (depending on your issuing bank).</li>
            <li><strong>Cash on Delivery (COD):</strong> Directly transferred to your provided UPI VPA or bank account via NEFT/IMPS within 48 hours.</li>
          </ul>
        </div>

      </main>
    </div>
  );
}
