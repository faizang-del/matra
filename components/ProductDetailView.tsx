'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Star,
  Heart,
  ShoppingBag,
  ShieldCheck,
  Check,
  ArrowRight,
  Truck,
  RefreshCw,
  MapPin,
  Sparkles,
  ChefHat,
  Leaf,
  Info,
  ChevronRight,
  Share2,
  ThumbsUp,
  Clock,
  Award,
} from 'lucide-react';
import { Product, PRODUCTS, ProductVariant } from '@/data/products';
import { useShop } from '@/context/ShopContext';
import { FloatingLeavesBackground } from './OrganicDecor';

interface ProductDetailViewProps {
  product: Product;
}

export default function ProductDetailView({ product }: ProductDetailViewProps) {
  const { addToCart, toggleWishlist, isInWishlist, setIsCartOpen, setIsCheckoutOpen, showToast } = useShop();

  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants?.[0] || {
      id: 'default',
      size: product.weight,
      weight: product.weight,
      price: product.price,
      originalPrice: product.originalPrice,
    }
  );
  const [quantity, setQuantity] = useState<number>(product.minQuantity || 1);
  const [activeTab, setActiveTab] = useState<'story' | 'nutrition' | 'recipes' | 'storage'>('story');
  const [added, setAdded] = useState<boolean>(false);
  const [shareCopied, setShareCopied] = useState<boolean>(false);

  // Cross-sell the other product from the 2 products
  const complementaryProduct = PRODUCTS.find((p) => p.id !== product.id);
  const inWish = isInWishlist(product.id);

  const handleAddToCart = () => {
    // Add product with current variant pricing
    const itemToAdd = {
      ...product,
      price: selectedVariant.price,
      originalPrice: selectedVariant.originalPrice,
      weight: selectedVariant.weight,
    };
    addToCart(itemToAdd, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setShareCopied(true);
      showToast('Product link copied to clipboard!', 'info');
      setTimeout(() => setShareCopied(false), 2500);
    }
  };

  return (
    <div className="bg-[#faf8f4] min-h-screen pt-4 pb-20 relative overflow-hidden">
      <FloatingLeavesBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-gray-500 py-2 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-agri-primary transition-colors flex items-center gap-1">
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <Link href="/#shop" className="hover:text-agri-primary transition-colors">
            Single-Origin Harvest
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <span className="text-agri-forest font-bold">{product.name}</span>
        </nav>

        {/* Top Product Hero Grid */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Interactive Image Gallery (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            {/* Primary Main Image Stage */}
            <div className="relative h-96 sm:h-[480px] w-full rounded-3xl bg-gradient-to-b from-[#faf8f4] to-[#f0ece3] overflow-hidden border border-gray-100 flex items-center justify-center p-6 group">
              <Image
                src={selectedImage}
                alt={product.name}
                fill
                priority
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Origin Badge */}
              <div className="absolute top-5 left-5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-agri-forest text-white text-xs font-extrabold tracking-wide uppercase shadow-md backdrop-blur-md border border-white/20">
                <MapPin className="w-3.5 h-3.5 text-agri-gold" />
                <span>{product.origin}</span>
              </div>

              {/* Floating Wishlist & Share Buttons */}
              <div className="absolute top-5 right-5 flex flex-col gap-2 z-10">
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                    inWish
                      ? 'bg-rose-500 text-white shadow-rose-200'
                      : 'bg-white/95 text-gray-700 hover:text-rose-500 hover:bg-white'
                  } hover:scale-110 active:scale-95`}
                  aria-label="Save to wishlist"
                >
                  <Heart className={`w-5 h-5 ${inWish ? 'fill-current' : ''}`} />
                </button>

                <button
                  onClick={handleShare}
                  className="w-11 h-11 rounded-full bg-white/95 text-gray-700 hover:text-agri-primary hover:bg-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 active:scale-95"
                  aria-label="Share product"
                  title="Copy link"
                >
                  {shareCopied ? (
                    <Check className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Share2 className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* Harvest Season Tag */}
              {product.harvestSeason && (
                <div className="absolute bottom-5 left-5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-agri-dark text-xs font-bold shadow-md backdrop-blur-sm">
                  <Leaf className="w-3.5 h-3.5 text-agri-primary" />
                  <span>{product.harvestSeason}</span>
                </div>
              )}
            </div>

            {/* Thumbnail Strip */}
            {product.galleryImages && product.galleryImages.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative h-20 sm:h-24 rounded-2xl overflow-hidden bg-[#faf8f4] border-2 transition-all p-1 flex items-center justify-center ${
                      selectedImage === img
                        ? 'border-agri-forest shadow-md scale-102 ring-2 ring-agri-mint/30'
                        : 'border-transparent hover:border-gray-300 opacity-80 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      className="object-contain p-1"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Purchasing & Specifications (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            {/* Category & Badge */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="text-xs font-black uppercase tracking-widest text-agri-secondary bg-agri-pale/80 px-3 py-1 rounded-full border border-agri-mint/30">
                {product.category}
              </span>
              <span className="text-xs text-emerald-700 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Guaranteed Fresh Harvest In Stock
              </span>
            </div>

            {/* Product Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 font-heading leading-tight">
                {product.name}
              </h1>
              <p className="text-sm font-bold text-agri-gold uppercase tracking-wider mt-1 flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>{product.origin}</span>
              </p>
            </div>

            {/* Rating & Social Proof */}
            <div className="flex items-center gap-3 pt-1 border-b border-gray-100 pb-4">
              <div className="flex items-center text-agri-gold">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-extrabold text-gray-900">{product.rating}</span>
              <span className="text-xs text-gray-400 font-medium">
                ({product.reviewsCount} verified customer reviews)
              </span>
              <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                100% Recommended
              </span>
            </div>

            {/* Price Presentation */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-black text-agri-dark font-heading">
                  ₹{selectedVariant.price.toLocaleString('en-IN')}
                </span>
                {selectedVariant.originalPrice > selectedVariant.price && (
                  <span className="text-base text-gray-400 line-through">
                    ₹{selectedVariant.originalPrice.toLocaleString('en-IN')}
                  </span>
                )}
                {selectedVariant.originalPrice > selectedVariant.price && (
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Save ₹{(selectedVariant.originalPrice - selectedVariant.price).toLocaleString('en-IN')} (
                    {Math.round(
                      ((selectedVariant.originalPrice - selectedVariant.price) /
                        selectedVariant.originalPrice) *
                        100
                    )}
                    % OFF)
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-500">
                Taxes included. Free standard shipping across India on orders over ₹499.
              </p>
            </div>

            {/* Key Message Banner */}
            {product.keyMessage && (
              <div className="p-4 rounded-2xl bg-agri-cream border border-agri-gold/40 flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-agri-gold flex-shrink-0" />
                <p className="text-xs sm:text-sm font-extrabold text-agri-dark font-heading">
                  {product.keyMessage}
                </p>
              </div>
            )}

            {/* Made Fresh to Order USP & MOQ Banner */}
            {product.minQuantity && (
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-amber-900 font-bold">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping flex-shrink-0" />
                  USP: Made Fresh to Order (Roasted post-order in small batches)
                </span>
                <span className="px-2.5 py-1 rounded-full bg-amber-200/80 text-amber-950 font-black text-[11px] self-start sm:self-auto">
                  Min. Order: {product.minQuantity} Packets
                </span>
              </div>
            )}

            {/* Description Lead */}
            <p className="text-sm text-gray-600 leading-relaxed font-normal">
              {product.description}
            </p>

            {/* Packaging Badge Pills */}
            <div className="grid grid-cols-2 gap-2.5">
              {product.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 p-2.5 rounded-xl bg-[#f7f5ef] border border-agri-mint/20"
                >
                  <ShieldCheck className="w-4 h-4 text-agri-gold flex-shrink-0" />
                  <span className="text-xs font-bold text-gray-800">{feat}</span>
                </div>
              ))}
            </div>

            {/* Pack Size / Variant Selector */}
            {product.variants && product.variants.length > 0 && (
              <div className="space-y-2.5 pt-2">
                <label className="text-xs font-black uppercase tracking-wider text-gray-700 block">
                  Select Pack Size:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {product.variants.map((v) => {
                    const isSelected = selectedVariant.id === v.id;
                    return (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setSelectedVariant(v)}
                        className={`relative p-3 rounded-2xl border-2 text-left transition-all ${
                          isSelected
                            ? 'border-agri-forest bg-agri-pale/30 shadow-sm ring-1 ring-agri-forest'
                            : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                        {v.popular && (
                          <span className="absolute -top-2.5 right-3 bg-agri-gold text-agri-dark text-[9px] font-black uppercase px-2 py-0.5 rounded-full shadow-xs">
                            Standard
                          </span>
                        )}
                        <p className="text-xs font-black text-gray-900">{v.size}</p>
                        <p className="text-[11px] text-gray-500 font-medium">{v.weight}</p>
                        <p className="text-xs font-bold text-agri-forest mt-1">
                          ₹{v.price.toLocaleString('en-IN')}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector & Action CTA Buttons */}
            <div className="space-y-3 pt-3">
              <div className="flex items-center gap-4">
                {/* Quantity Box */}
                <div className="flex items-center border-2 border-gray-200 rounded-full bg-white p-1">
                  <button
                    onClick={() => setQuantity((q) => Math.max(product.minQuantity || 1, q - 1))}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold transition-colors"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-sm font-black text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                {/* Add to Basket */}
                <button
                  onClick={handleAddToCart}
                  className={`btn-shimmer flex-1 py-4 px-6 rounded-full font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-agri hover:scale-[1.02] active:scale-95 ${
                    added
                      ? 'bg-emerald-600 text-white shadow-emerald-200'
                      : 'bg-agri-forest hover:bg-agri-primary text-white'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 animate-bounce" />
                      <span>ADDED TO BASKET</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-agri-gold" />
                      <span>ADD TO BASKET • ₹{(selectedVariant.price * quantity).toLocaleString('en-IN')}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Instant Buy Now Button */}
              <button
                onClick={handleBuyNow}
                className="w-full py-4 rounded-full bg-agri-gold hover:bg-amber-400 text-agri-dark font-black text-xs uppercase tracking-wider transition-all duration-300 shadow-agri-gold hover:shadow-glow-gold flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>BUY NOW WITH 1-CLICK CHECKOUT</span>
              </button>
            </div>

            {/* Assurance Guarantees List */}
            <div className="pt-4 border-t border-gray-100 grid grid-cols-2 gap-3 text-xs text-gray-600 font-medium">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-agri-forest flex-shrink-0" />
                <span>Dispatched within 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-agri-forest flex-shrink-0" />
                <span>30-Day Freshness Return</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-agri-forest flex-shrink-0" />
                <span>Zero Chemical Additives</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-agri-forest flex-shrink-0" />
                <span>Aroma-Lock Foil Pouch</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Tabs: Heritage, Nutrition, Recipes & Storage */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl space-y-8">
          {/* Tab Navigation Pill Bar */}
          <div className="flex flex-wrap items-center gap-2 border-b border-gray-100 pb-4">
            {[
              { id: 'story', label: 'Origin Terroir & Story', icon: MapPin },
              { id: 'nutrition', label: 'Nutritional Facts & Lab Analysis', icon: ShieldCheck },
              { id: 'recipes', label: 'Mindful Recipes & Rituals', icon: ChefHat },
              { id: 'storage', label: 'Storage & Freshness Care', icon: Info },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all ${
                    isActive
                      ? 'bg-agri-forest text-white shadow-agri'
                      : 'bg-[#faf8f4] text-gray-600 hover:text-agri-forest hover:bg-agri-pale/40'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-agri-gold' : 'text-gray-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content: 1. Story & Terroir */}
          {activeTab === 'story' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="max-w-3xl space-y-4">
                <h3 className="text-2xl font-black text-agri-dark font-heading">
                  The Sourcing Story of {product.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {product.longDescription}
                </p>
                <div className="p-4 rounded-2xl bg-agri-cream border border-agri-mint/30 flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-agri-primary flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <strong className="text-agri-forest font-bold">100% Pure Ingredient Statement:</strong>{' '}
                    {product.ingredients}
                  </div>
                </div>
              </div>

              {/* Terroir Specification Table */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-black uppercase tracking-wider text-agri-forest">
                  Geographical Origin & Sourcing Specifications
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col justify-between">
                    <span className="text-gray-400 font-bold uppercase tracking-wider text-[11px]">
                      Harvest Region
                    </span>
                    <span className="font-bold text-gray-900 mt-1">
                      {product.terroirDetails.region}
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col justify-between">
                    <span className="text-gray-400 font-bold uppercase tracking-wider text-[11px]">
                      Elevation & Topography
                    </span>
                    <span className="font-bold text-gray-900 mt-1">
                      {product.terroirDetails.elevation}
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col justify-between">
                    <span className="text-gray-400 font-bold uppercase tracking-wider text-[11px]">
                      Micro-Climate & Terroir
                    </span>
                    <span className="font-bold text-gray-900 mt-1">
                      {product.terroirDetails.climate}
                    </span>
                  </div>
                  <div className="p-4 rounded-2xl bg-gray-50 border border-gray-100 flex flex-col justify-between">
                    <span className="text-gray-400 font-bold uppercase tracking-wider text-[11px]">
                      Curing & Drying Craft
                    </span>
                    <span className="font-bold text-gray-900 mt-1">
                      {product.terroirDetails.curingMethod}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content: 2. Nutrition & Lab Analysis */}
          {activeTab === 'nutrition' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="max-w-3xl space-y-3">
                <h3 className="text-2xl font-black text-agri-dark font-heading">
                  Nutritional Facts & Purity Analysis
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every production batch is tested in accredited laboratories for pesticide residues, heavy metals, and artificial polishing agents.
                </p>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b-2 border-agri-forest/20 text-agri-dark bg-agri-pale/40">
                      <th className="py-3 px-4 font-black">Nutritional Component</th>
                      <th className="py-3 px-4 font-black">Value (Per 100g)</th>
                      <th className="py-3 px-4 font-black">Daily Value / Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(product.nutritionTable || []).map((row, idx) => (
                      <tr
                        key={idx}
                        className={`border-b border-gray-100 hover:bg-agri-pale/20 transition-colors ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-[#faf8f4]'
                        }`}
                      >
                        <td className="py-3 px-4 font-bold text-gray-800">{row.nutrient}</td>
                        <td className="py-3 px-4 font-mono font-bold text-agri-forest">{row.amount}</td>
                        <td className="py-3 px-4 text-gray-500 font-medium">
                          {row.dailyValue || '—'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Tab Content: 3. Recipes & Mindful Culinary Rituals */}
          {activeTab === 'recipes' && (
            <div className="space-y-8 animate-in fade-in duration-300">
              <div className="max-w-3xl space-y-3">
                <h3 className="text-2xl font-black text-agri-dark font-heading">
                  Mindful Culinary Rituals & Ceremonial Uses
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Elevate your daily habits with these simple rituals crafted specifically for {product.name}.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {(product.culinaryUses || []).map((recipe, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-3xl bg-[#faf8f4] border border-gray-100 shadow-sm space-y-4 hover:border-agri-mint/50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-agri-pale text-agri-forest text-xs font-black uppercase">
                        Recipe {idx + 1}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500">
                        <Clock className="w-3.5 h-3.5 text-agri-gold" />
                        <span>{recipe.time}</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-bold text-gray-900 font-heading">
                      {recipe.title}
                    </h4>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {recipe.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-gray-200">
                      <span className="text-[11px] font-black uppercase tracking-wider text-agri-forest block">
                        Preparation Steps:
                      </span>
                      <ol className="list-decimal list-inside space-y-1.5 text-xs text-gray-700 leading-relaxed">
                        {recipe.steps.map((st, sidx) => (
                          <li key={sidx} className="pl-1">
                            <span>{st}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab Content: 4. Storage & Care */}
          {activeTab === 'storage' && (
            <div className="space-y-6 animate-in fade-in duration-300 max-w-3xl">
              <h3 className="text-2xl font-black text-agri-dark font-heading">
                Packaging Preservation & Storage Guide
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.storageGuide}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-100 space-y-1">
                  <span className="text-xs font-black text-emerald-800 uppercase block">
                    Ideal Temperature
                  </span>
                  <p className="text-xs text-emerald-900">
                    Keep at 18°C - 24°C in a dry, dark pantry cupboard away from stove steam.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-100 space-y-1">
                  <span className="text-xs font-black text-amber-800 uppercase block">
                    Resealable Foil Seal
                  </span>
                  <p className="text-xs text-amber-900">
                    Always squeeze out excess air before re-zipping to prevent oxidation of oils.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-teal-50 border border-teal-100 space-y-1">
                  <span className="text-xs font-black text-teal-800 uppercase block">
                    Shelf Life
                  </span>
                  <p className="text-xs text-teal-900">
                    Retains maximum aroma and crunch for 18 months from batch packing date.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Complete the Calmer Living Set Cross-Sell */}
        {complementaryProduct && (
          <div className="bg-gradient-to-br from-agri-forest to-agri-dark text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-agri-gold/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 max-w-xl text-center lg:text-left z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-agri-gold text-agri-dark text-[11px] font-black uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                COMPLETE THE CALMER LIVING PAIR
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading leading-tight">
                Pair with {complementaryProduct.name}
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
                Enjoy the intoxicating aroma of Bodinayakanur green cardamom alongside the airy superfood crunch of Bihar popped makhana. Together, they create the foundational Mātra pantry ritual.
              </p>
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-4">
                <Link
                  href={`/products/${complementaryProduct.id}`}
                  className="text-xs font-bold text-agri-gold hover:text-white transition-colors underline underline-offset-4"
                >
                  View {complementaryProduct.name} Details
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 z-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
              <div className="relative w-20 h-24 rounded-xl bg-white overflow-hidden flex-shrink-0">
                <Image
                  src={complementaryProduct.image}
                  alt={complementaryProduct.name}
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold text-white line-clamp-1">{complementaryProduct.name}</p>
                <p className="text-sm font-black text-agri-gold font-heading">
                  ₹{complementaryProduct.price.toLocaleString('en-IN')}
                </p>
                <button
                  onClick={() => {
                    addToCart(complementaryProduct, 1);
                    showToast(`Added ${complementaryProduct.name} to basket!`, 'success');
                  }}
                  className="px-4 py-2 rounded-full bg-white text-agri-dark hover:bg-agri-gold text-[11px] font-black uppercase tracking-wider transition-all"
                >
                  + Add to Basket
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Customer Reviews Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-gray-100 pb-6">
            <div>
              <h3 className="text-2xl font-black text-agri-dark font-heading">
                Customer Reviews & Community Feedback
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Real feedback from home cooks and chefs enjoying {product.name}.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-2xl font-black text-agri-dark font-heading">{product.rating} / 5</p>
                <p className="text-[11px] text-gray-400 font-medium">{product.reviewsCount} total ratings</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-agri-gold text-agri-dark flex items-center justify-center font-black text-lg shadow-sm">
                ★
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {product.reviews.map((rev) => (
              <div
                key={rev.id}
                className="p-5 sm:p-6 rounded-2xl bg-[#faf8f4] border border-gray-100 space-y-3"
              >
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center text-agri-gold">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-black text-gray-900">{rev.title}</span>
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                  &ldquo;{rev.comment}&rdquo;
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-500 pt-1">
                  <span className="font-bold text-gray-800">{rev.author}</span>
                  <span>•</span>
                  <span>{rev.location}</span>
                  {rev.verified && (
                    <>
                      <span>•</span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-full">
                        <Check className="w-3 h-3" />
                        Verified Purchase
                      </span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Back to Catalog CTA */}
        <div className="text-center pt-6 pb-4">
          <Link
            href="/#shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-agri-forest hover:bg-agri-primary text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md hover:scale-105"
          >
            <span>← Return to Mātra Store Catalog</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
