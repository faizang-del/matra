import type { Metadata } from 'next';
import './globals.css';
import { ShopProvider } from '@/context/ShopContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import WishlistDrawer from '@/components/WishlistDrawer';
import QuickViewModal from '@/components/QuickViewModal';
import SearchModal from '@/components/SearchModal';
import CheckoutModal from '@/components/CheckoutModal';
import ConsultationModal from '@/components/ConsultationModal';
import OrderTrackingModal from '@/components/OrderTrackingModal';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'MATRA Ventures Private Limited | A Calmer Way of Living',
  description:
    'MATRA Ventures Private Limited - A Calmer Way of Living. Operating across MATRA Foods (Healthy Vegetarian Living: Made-Fresh Classic Salted Makhana, Bodinayakanur Elaichi & Ceremonial Garlands), MATRA Astro (Astrology & Consultations), MATRA Consultants (Career & Business Advisory), MATRA Digital, and MATRA Home Services.',
  keywords: [
    'MATRA Ventures',
    'MATRA Ventures Private Limited',
    'MATRA Foods',
    'MATRA Astro',
    'MATRA Consultants',
    'MATRA Digital',
    'MATRA Home Services',
    'A Calmer Way of Living',
    'Made Fresh to Order Makhana',
    'Classic Salted Makhana',
    'Bodinayakanur Elaichi',
    'Elaichi Garlands',
    'Elakkai Malai',
    'Astrology Consultations',
    'Career Counselling',
  ],
  authors: [{ name: 'MATRA Ventures Private Limited' }],
  openGraph: {
    title: 'MATRA Ventures Private Limited | A Calmer Way of Living',
    description: 'A Calmer Way of Living. Ethical food sourcing, personalized consultations, and digital innovation under the MATRA brand.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'MATRA Ventures Private Limited',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-agri-gold selection:text-agri-dark">
        <ShopProvider>
          <div className="min-h-screen flex flex-col justify-between">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>

          {/* Interactive Drawers & Overlays */}
          <CartDrawer />
          <WishlistDrawer />
          <QuickViewModal />
          <SearchModal />
          <CheckoutModal />
          <ConsultationModal />
          <OrderTrackingModal />
          <WhatsAppButton />
        </ShopProvider>
      </body>
    </html>
  );
}
