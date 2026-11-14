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
  title: 'Matra Foods | 100% Pure & Organic Agriculture, Stone-Ground Flour & Spices',
  description:
    'Experience authentic Indian organic agriculture: slow stone-milled royal Sharbati chakki atta, pure compounded hing royale, virgin wood-pressed yellow mustard oil, and pesticide-free heritage spices.',
  keywords: [
    'Matra Foods',
    'Organic Agriculture',
    'Stone Ground Atta',
    'Pure Hing',
    'Asafoetida',
    'Kachi Ghani Mustard Oil',
    'Kashmiri Lal Mirch',
    'Sendha Namak',
    'Agrica Next.js',
    'Farm to Table',
  ],
  authors: [{ name: 'Matra Foods Agro Pvt. Ltd.' }],
  openGraph: {
    title: 'Matra Foods | Pure Organic Staples & Heritage Stone Milling',
    description: 'Direct farm-to-table organic goodness. 100% pure, unbleached, and chemical-free.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Matra Foods',
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
