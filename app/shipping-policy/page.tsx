import type { Metadata } from 'next';
import Link from 'next/link';
import { Truck, Clock, MapPin, ShieldCheck, ArrowLeft, PackageCheck } from 'lucide-react';
import { PARENT_COMPANY } from '@/data/ventures';

export const metadata: Metadata = {
  title: 'Shipping & Delivery Policy | Mātra - A Calmer Way of Living',
  description:
    'Shipping & Delivery Policy of MATRA Ventures Private Limited. Learn about our fresh small-batch roasting timelines, express pan-India courier dispatch, and live tracking.',
};

export default function ShippingPolicyPage() {
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
            <Truck className="w-3.5 h-3.5" />
            <span>EXPRESS FULFILLMENT</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Shipping & Delivery Policy
          </h1>
          <p className="text-xs sm:text-sm text-emerald-100/80 max-w-2xl leading-relaxed">
            From the wetland farms of Bihar and cardamom plantations of Bodinayakanur straight to your kitchen.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-10 text-sm leading-relaxed text-gray-700">
        
        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-2 text-center">
            <Clock className="w-6 h-6 text-agri-primary mx-auto" />
            <h3 className="font-bold text-xs uppercase tracking-wider text-agri-dark">Roasting & Packing</h3>
            <p className="text-xs text-gray-500">Fresh small-batch roasted within 24 hours of order confirmation.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-2 text-center">
            <Truck className="w-6 h-6 text-agri-primary mx-auto" />
            <h3 className="font-bold text-xs uppercase tracking-wider text-agri-dark">Pan-India Transit</h3>
            <p className="text-xs text-gray-500">2 to 5 business days across metros, tier-1, and tier-2 pincodes.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-2 text-center">
            <PackageCheck className="w-6 h-6 text-agri-primary mx-auto" />
            <h3 className="font-bold text-xs uppercase tracking-wider text-agri-dark">Aroma-Lock Pouches</h3>
            <p className="text-xs text-gray-500">Multi-layer nitrogen-flushed food grade barrier pouches.</p>
          </div>
        </div>

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-agri-dark font-heading">
            1. Freshness & Order Processing Timelines
          </h2>
          <p>
            Unlike conventional supermarkets where snacks sit on store shelves for months, Mātra operates on a <strong>Made-Fresh to Order</strong> philosophy:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong>Classic Salted Makhana:</strong> Once your order is verified, small-batch roasting and organic rock-salt seasoning takes place within 24 hours. Dispatch occurs on the next business morning.
            </li>
            <li>
              <strong>Bodinayakanur Green Elaichi:</strong> Vacuum-packed and dispatched within 24 hours from our spice terminal in Tamil Nadu.
            </li>
            <li>
              <strong>Handcrafted Elaichi Garlands (Elakkai Malai):</strong> Because each bridal and ceremonial garland is custom woven by master artisans, crafting requires 1–2 working days prior to courier dispatch.
            </li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-agri-dark font-heading">
            2. Estimated Transit Times
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-agri-cream text-agri-dark font-bold uppercase">
                <tr>
                  <th className="p-3 border-b">Destination Region</th>
                  <th className="p-3 border-b">Courier Priority</th>
                  <th className="p-3 border-b">Estimated Transit Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-600">
                <tr>
                  <td className="p-3 font-semibold text-gray-900">Metro Cities (Delhi NCR, Mumbai, Bengaluru, Chennai, Kolkata, Hyderabad)</td>
                  <td className="p-3">Air Priority / Express Surface</td>
                  <td className="p-3">2 to 3 Business Days</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-gray-900">Tier 2 & 3 Cities (Pune, Ahmedabad, Jaipur, Patna, Coimbatore, etc.)</td>
                  <td className="p-3">Express Courier</td>
                  <td className="p-3">3 to 5 Business Days</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-gray-900">Northeast, J&K, & Remote Interior Pincodes</td>
                  <td className="p-3">Speed Post / Standard Surface</td>
                  <td className="p-3">5 to 7 Business Days</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-agri-dark font-heading">
            3. Shipping Charges
          </h2>
          <p>
            Standard shipping rates are calculated dynamically at checkout based on gross package weight. Orders exceeding ₹999 qualify for <strong>Complimentary Free Shipping</strong> across India.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-base font-bold text-agri-dark font-heading">
            4. Live Order Tracking
          </h2>
          <p>
            As soon as your shipment is picked up by our logistics partner (BlueDart, Delhivery, or XpressBees), you will receive an SMS and Email notification with the AWB Waybill Tracking Number. You can also track your shipment status live on our website anytime using our <strong>Track Your Order</strong> modal in the footer.
          </p>
        </section>

        {/* Section 5 */}
        <div className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm space-y-2 text-xs">
          <h3 className="font-bold text-agri-dark text-sm">Need Help with an In-Transit Order?</h3>
          <p className="text-gray-600">
            Our dispatch desk is active Monday through Saturday (8:00 AM – 8:00 PM IST). Call or WhatsApp our concierge at <strong>{PARENT_COMPANY.phone}</strong> or email <strong>{PARENT_COMPANY.email}</strong>.
          </p>
        </div>

      </main>
    </div>
  );
}
