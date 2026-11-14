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
import BlogModal from '@/components/BlogModal';

export const metadata: Metadata = {
  title: 'Mātra Foods | A Calmer Way of Living - Pure Green Elaichi & Premium Makhana',
  description:
    'Experience naturally exceptional staples by Mātra Foods. Single-origin Fresh Green Elaichi from Bodinayakanur and hand-harvested Premium Makhana from Bihar. 100% pure ingredients, freshly sourced, zero additives.',
  keywords: [
    'Mātra Foods',
    'Matra Foods',
    'A Calmer Way of Living',
    'Naturally Exceptional',
    'Fresh Green Elaichi',
    'Premium Makhana',
    'Bodinayakanur Cardamom',
    'Bihar Makhana',
    'Single-Origin Spices',
    'Pure Ingredients',
    'Fox Nuts',
    'Organic Superfoods',
  ],
  authors: [{ name: 'Mātra Foods' }],
  openGraph: {
    title: 'Mātra Foods | A Calmer Way of Living',
    description: 'Single-origin Fresh Green Elaichi & Premium Makhana. 100% pure ingredients, freshly sourced, zero additives.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Mātra Foods',
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
          <BlogModal />
        </ShopProvider>
      </body>
    </html>
  );
}
