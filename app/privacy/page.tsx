import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck, Lock, Eye, FileText, ArrowLeft, Mail, Phone } from 'lucide-react';
import { PARENT_COMPANY } from '@/data/ventures';

export const metadata: Metadata = {
  title: 'Privacy Policy | Mātra - A Calmer Way of Living',
  description:
    'Privacy Policy of MATRA Ventures Private Limited. Learn how we safeguard your personal data, order records, and payment information with complete transparency.',
};

export default function PrivacyPolicyPage() {
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
            <Lock className="w-3.5 h-3.5" />
            <span>LEGAL & COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/80 max-w-2xl leading-relaxed">
            Effective Date: November 2026 • Last Updated: November 2026. Your privacy and trust are sacred to {PARENT_COMPANY.name}.
          </p>
        </div>
      </section>

      {/* Main Legal Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10 text-sm leading-relaxed text-gray-700">
        
        {/* Intro Card */}
        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-3">
          <h2 className="text-lg font-bold text-agri-dark font-heading flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-agri-primary" />
            <span>1. Commitment to Data Privacy</span>
          </h2>
          <p>
            {PARENT_COMPANY.name} (&quot;Mātra&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information and your right to privacy under the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023. When you visit our website, purchase our Made-Fresh Makhana or Bodinayakanur Elaichi, or communicate with our desks, you trust us with your personal data. We take that trust with utmost reverence.
          </p>
        </div>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-agri-dark font-heading">
            2. Information We Collect
          </h2>
          <p>We only collect information necessary to prepare, pack, dispatch, and support your orders:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong>Personal Identifiers:</strong> Name, delivery address, postal code, mobile phone number, and email address.
            </li>
            <li>
              <strong>Order & Snacking Preferences:</strong> Cart items, batch roasting preferences, order notes, and transaction timestamps.
            </li>
            <li>
              <strong>Payment Information:</strong> All online card, netbanking, and UPI transactions are processed through <strong>Razorpay</strong> (PCI-DSS Level 1 Certified). We never store or view your credit/debit card numbers, CVVs, or UPI MPINs on our servers.
            </li>
            <li>
              <strong>Device & Usage Data:</strong> IP address, browser type, and anonymous session telemetry used strictly to optimize site performance and prevent checkout fraud.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-agri-dark font-heading">
            3. How We Use Your Information
          </h2>
          <p>Your data is used solely for honest, transparent purposes:</p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>Processing and roasting your single-origin makhana to order.</li>
            <li>Generating express logistics waybills with our courier partners (e.g., BlueDart, Delhivery, SpeedPost).</li>
            <li>Sending SMS / WhatsApp / Email delivery dispatch confirmations and tracking links.</li>
            <li>Responding to customer support questions or custom ceremonial garland inquiries.</li>
            <li>We do not sell, rent, or trade your personal information to third-party advertisers. Ever.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-agri-dark font-heading">
            4. Payment Security & Razorpay Processing
          </h2>
          <p>
            Online payments on our website are managed securely through <strong>Razorpay Software Private Limited</strong>. All transactions are protected via 256-bit SSL encryption. Razorpay complies with rigorous PCI-DSS standards mandated by the Reserve Bank of India (RBI).
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-agri-dark font-heading">
            5. Data Retention & Your Rights
          </h2>
          <p>
            We retain your order transaction records for the period required by Indian accounting, tax, and consumer protection statutes. You reserve the right to request access to the personal data we hold about you, request corrections to erroneous records, or ask for the deletion of your promotional newsletter subscription at any time.
          </p>
        </section>

        {/* Section 6 - Grievance Officer */}
        <div className="p-6 rounded-2xl bg-agri-pale/40 border border-agri-primary/20 space-y-3">
          <h2 className="text-base font-bold text-agri-dark font-heading flex items-center gap-2">
            <Mail className="w-4 h-4 text-agri-primary" />
            <span>6. Grievance Redressal & Privacy Contact</span>
          </h2>
          <p className="text-xs text-gray-600">
            In compliance with Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, the contact details of our Grievance Officer are:
          </p>
          <div className="text-xs space-y-1 font-medium text-gray-800">
            <p><strong>Grievance Officer:</strong> Compliance Desk, {PARENT_COMPANY.name}</p>
            <p><strong>Address:</strong> {PARENT_COMPANY.address}</p>
            <p><strong>Email:</strong> <a href={`mailto:${PARENT_COMPANY.email}`} className="text-agri-forest hover:underline">{PARENT_COMPANY.email}</a></p>
            <p><strong>Phone:</strong> {PARENT_COMPANY.phone} ({PARENT_COMPANY.hours})</p>
          </div>
        </div>

      </main>
    </div>
  );
}
