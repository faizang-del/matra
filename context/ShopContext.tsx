'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, PRODUCTS } from '@/data/products';
import { BlogPost } from '@/data/blog';
import { ServiceItem, VENTURE_VERTICALS, PARENT_COMPANY } from '@/data/ventures';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'warning';
  text: string;
}

interface ShopContextType {
  cart: CartItem[];
  wishlist: string[];
  isCartOpen: boolean;
  isWishlistOpen: boolean;
  isSearchOpen: boolean;
  isCheckoutOpen: boolean;
  isConsultationOpen: boolean;
  isOrderTrackingOpen: boolean;
  selectedConsultationService: ServiceItem | null;
  quickViewProduct: Product | null;
  activeBlogPost: BlogPost | null;
  appliedCoupon: string | null;
  discountAmount: number;
  subtotal: number;
  shippingFee: number;
  grandTotal: number;
  totalCartCount: number;
  toasts: ToastMessage[];

  // Actions
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  setIsCartOpen: (open: boolean) => void;
  setIsWishlistOpen: (open: boolean) => void;
  setIsSearchOpen: (open: boolean) => void;
  setIsCheckoutOpen: (open: boolean) => void;
  setIsOrderTrackingOpen: (open: boolean) => void;
  openConsultationModal: (service?: ServiceItem) => void;
  closeConsultationModal: () => void;
  setQuickViewProduct: (product: Product | null) => void;
  setActiveBlogPost: (post: BlogPost | null) => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  showToast: (text: string, type?: 'success' | 'info' | 'warning') => void;
  openWhatsApp: (customMessage?: string) => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isOrderTrackingOpen, setIsOrderTrackingOpen] = useState(false);
  const [selectedConsultationService, setSelectedConsultationService] = useState<ServiceItem | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [activeBlogPost, setActiveBlogPost] = useState<BlogPost | null>(null);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Initialize with initial items on first mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('matra_cart_v2');
      const savedWishlist = localStorage.getItem('matra_wishlist_v2');
      if (savedCart) {
        const parsed = JSON.parse(savedCart);
        const valid = parsed
          .map((it: any) => {
            const liveProduct = PRODUCTS.find((p) => p.id === (it.product?.id || it.id));
            if (!liveProduct) return null;
            const minQ = liveProduct.minQuantity || 1;
            return { product: liveProduct, quantity: Math.max(minQ, it.quantity || minQ) };
          })
          .filter(Boolean);
        setCart(valid.length > 0 ? valid : [
          { product: PRODUCTS[0], quantity: PRODUCTS[0].minQuantity || 5 },
          { product: PRODUCTS[1], quantity: 1 },
        ]);
      } else {
        // Default starter cart matching new products
        setCart([
          { product: PRODUCTS[0], quantity: 5 }, // 5 packs of fresh classic salted makhana
          { product: PRODUCTS[1], quantity: 1 }, // 1 pack of 50g green elaichi
        ]);
      }
      if (savedWishlist) {
        const parsed = JSON.parse(savedWishlist);
        const valid = parsed.filter((id: string) => PRODUCTS.some((p) => p.id === id));
        setWishlist(valid);
      } else {
        setWishlist([PRODUCTS[0].id, PRODUCTS[2].id]);
      }
    } catch {
      // LocalStorage fallback for SSR
    }
  }, []);

  // Save changes
  useEffect(() => {
    try {
      if (cart.length > 0) {
        localStorage.setItem('matra_cart_v2', JSON.stringify(cart));
      }
    } catch {
      // ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('matra_wishlist_v2', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  const showToast = (text: string, type: 'success' | 'info' | 'warning' = 'success') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3500);
  };

  const openWhatsApp = (customMessage?: string) => {
    const defaultMsg = `Hello MATRA Ventures team, I would like to inquire about your products and services under A Calmer Way of Living.`;
    const msg = encodeURIComponent(customMessage || defaultMsg);
    window.open(`https://wa.me/${PARENT_COMPANY.whatsappNumber}?text=${msg}`, '_blank');
  };

  const openConsultationModal = (service?: ServiceItem) => {
    setSelectedConsultationService(service || null);
    setIsConsultationOpen(true);
  };

  const closeConsultationModal = () => {
    setIsConsultationOpen(false);
    setSelectedConsultationService(null);
  };

  const addToCart = (product: Product, quantity?: number) => {
    const minQ = product.minQuantity || 1;
    const addCount = quantity ? quantity : minQ;

    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + addCount }
            : item
        );
      }
      return [...prev, { product, quantity: Math.max(minQ, addCount) }];
    });

    if (product.minQuantity && product.minQuantity > 1 && addCount === product.minQuantity) {
      showToast(`Added ${addCount}x "${product.name}" (Minimum order of ${product.minQuantity} packs). Preparation starts fresh on order!`, 'success');
    } else {
      showToast(`Added ${addCount}x "${product.name}" to basket!`, 'success');
    }
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from basket', 'info');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    const item = cart.find((i) => i.product.id === productId);
    const minQ = item?.product.minQuantity || 1;

    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    if (quantity < minQ) {
      showToast(`Minimum order for ${item?.product.name} is ${minQ} packets (Made fresh to order).`, 'warning');
      return;
    }

    setCart((prev) =>
      prev.map((it) =>
        it.product.id === productId ? { ...it, quantity } : it
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Removed from wishlist', 'info');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Saved to your wishlist!', 'success');
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => wishlist.includes(productId);

  const applyCoupon = (code: string) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'ORGANIC25' || cleanCode === 'MATRA25') {
      setAppliedCoupon('MATRA25');
      showToast('Coupon "MATRA25" applied! 25% discount activated.', 'success');
      return true;
    } else if (cleanCode === 'FREESHIP') {
      setAppliedCoupon('FREESHIP');
      showToast('Free shipping coupon applied!', 'success');
      return true;
    } else if (cleanCode === 'MATRA100') {
      setAppliedCoupon('MATRA100');
      showToast('Welcome voucher "MATRA100" applied! ₹100 deducted.', 'success');
      return true;
    } else {
      showToast('Invalid coupon. Try "MATRA25", "MATRA100", or "FREESHIP".', 'warning');
      return false;
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed', 'info');
  };

  // Calculations
  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  let discountAmount = 0;
  if (appliedCoupon === 'ORGANIC25' || appliedCoupon === 'MATRA25') {
    discountAmount = subtotal * 0.25;
  } else if (appliedCoupon === 'MATRA100') {
    discountAmount = Math.min(subtotal, 100);
  }

  let shippingFee = subtotal > 499 || subtotal === 0 || appliedCoupon === 'FREESHIP' ? 0 : 49;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <ShopContext.Provider
      value={{
        cart,
        wishlist,
        isCartOpen,
        isWishlistOpen,
        isSearchOpen,
        isCheckoutOpen,
        isConsultationOpen,
        isOrderTrackingOpen,
        selectedConsultationService,
        quickViewProduct,
        activeBlogPost,
        appliedCoupon,
        discountAmount,
        subtotal,
        shippingFee,
        grandTotal,
        totalCartCount,
        toasts,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist,
        setIsCartOpen,
        setIsWishlistOpen,
        setIsSearchOpen,
        setIsCheckoutOpen,
        setIsOrderTrackingOpen,
        openConsultationModal,
        closeConsultationModal,
        setQuickViewProduct,
        setActiveBlogPost,
        applyCoupon,
        removeCoupon,
        showToast,
        openWhatsApp,
      }}
    >
      {children}
      {/* Toast Notification Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 max-w-sm pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto px-4 py-3 rounded-xl shadow-xl text-sm font-medium transition-all duration-300 transform translate-y-0 flex items-center gap-3 border ${
              toast.type === 'success'
                ? 'bg-agri-dark text-white border-agri-leaf/40'
                : toast.type === 'warning'
                ? 'bg-amber-800 text-white border-amber-500/40'
                : 'bg-gray-900 text-white border-gray-700'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-agri-leaf animate-ping" />
            <span className="flex-1">{toast.text}</span>
          </div>
        ))}
      </div>
    </ShopContext.Provider>
  );
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) {
    throw new Error('useShop must be used within a ShopProvider');
  }
  return context;
}
