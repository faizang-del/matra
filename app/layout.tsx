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
import OrderTrackingModal from '@/components/OrderTrackingModal';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'MĀTRA | Healthy Vegetarian Living | A Calmer Way of Living',
  description:
    'Mātra – A Calmer Way of Living. Direct single-origin vegetarian staples: Made-Fresh Classic Salted Makhana from Bihar wetlands, Bodinayakanur Fresh Green Elaichi, and Artisanal Ceremonial Elaichi Garlands (Elakkai Malai).',
  keywords: [
    'Mātra',
    'MATRA',
    'MATRA Foods',
    'A Calmer Way of Living',
    'Made Fresh to Order Makhana',
    'Classic Salted Makhana',
    'Bodinayakanur Elaichi',
    'Elaichi Garlands',
    'Elakkai Malai',
    'Cardamom Garlands',
    'Single Origin Spices',
    'Healthy Vegetarian Living',
    'Zero Artificial Preservatives',
  ],
  authors: [{ name: 'MATRA' }],
  openGraph: {
    title: 'MĀTRA | Healthy Vegetarian Living | A Calmer Way of Living',
    description: 'A Calmer Way of Living. Direct single-origin makhana made fresh to order and authentic Bodinayakanur elaichi.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Mātra',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
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
          <OrderTrackingModal />
          <WhatsAppButton />
        </ShopProvider>
      </body>
    </html>
  );
}