'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, PRODUCTS } from '@/data/products';
import { BlogPost } from '@/data/blog';

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
  setQuickViewProduct: (product: Product | null) => void;
  setActiveBlogPost: (post: BlogPost | null) => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  showToast: (text: string, type?: 'success' | 'info' | 'warning') => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [activeBlogPost, setActiveBlogPost] = useState<BlogPost | null>(null);
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Initialize with popular starter item on first mount for instant visual delight
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('matra_cart');
      const savedWishlist = localStorage.getItem('matra_wishlist');
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      } else {
        // default items for interactive demo
        setCart([
          { product: PRODUCTS[0], quantity: 1 },
          { product: PRODUCTS[1], quantity: 2 },
        ]);
      }
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      } else {
        setWishlist([PRODUCTS[2].id]);
      }
    } catch {
      // LocalStorage fallback for SSR or privacy modes
    }
  }, []);

  // Save changes
  useEffect(() => {
    try {
      if (cart.length > 0) {
        localStorage.setItem('matra_cart', JSON.stringify(cart));
      }
    } catch {
      // ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('matra_wishlist', JSON.stringify(wishlist));
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

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    showToast(`Added ${quantity}x "${product.name}" to cart!`, 'success');
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    showToast('Item removed from cart', 'info');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
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
      setAppliedCoupon('ORGANIC25');
      showToast('Coupon "ORGANIC25" applied! 25% discount activated.', 'success');
      return true;
    } else if (cleanCode === 'FREESHIP') {
      setAppliedCoupon('FREESHIP');
      showToast('Free shipping coupon applied!', 'success');
      return true;
    } else {
      showToast('Invalid coupon code. Try "ORGANIC25" or "FREESHIP".', 'warning');
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
  if (appliedCoupon === 'ORGANIC25') {
    discountAmount = subtotal * 0.25;
  }

  let shippingFee = subtotal > 45 || subtotal === 0 || appliedCoupon === 'FREESHIP' ? 0 : 5.99;
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
        setQuickViewProduct,
        setActiveBlogPost,
        applyCoupon,
        removeCoupon,
        showToast,
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
