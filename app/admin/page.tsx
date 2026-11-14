'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  BarChart3, Package, ShoppingBag, Users, Calendar, ArrowLeft, 
  Search, Plus, CheckCircle2, AlertCircle, TrendingUp, Sparkles, 
  Settings, Truck, RefreshCw, Edit3, Trash2, ShieldCheck, 
  Compass, Briefcase, Phone, Mail, ExternalLink
} from 'lucide-react';
import { PRODUCTS, Product } from '@/data/products';
import { VENTURE_VERTICALS, PARENT_COMPANY } from '@/data/ventures';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'orders' | 'consultations'>('overview');
  const [searchFilter, setSearchFilter] = useState('');
  
  // Local state for interactive editing in admin demo
  const [productList, setProductList] = useState<Product[]>(PRODUCTS);
  const [stockStatus, setStockStatus] = useState<Record<string, boolean>>({
    'matra-makhana-classic-salted': true,
    'matra-fresh-green-elaichi': true,
    'matra-elaichi-garlands': true,
  });

  const toggleStock = (id: string) => {
    setStockStatus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  // Sample Mock Orders for MATRA Foods
  const [orders, setOrders] = useState([
    {
      id: 'MV-849201',
      customer: 'Pooja Venkatesh',
      phone: '+91 98401 22891',
      city: 'Chennai, TN',
      items: 'Matra Makhana Classic Salted (5 Packs - MOQ)',
      total: 1495,
      payment: 'UPI (GPay)',
      date: 'Today, 2:15 PM',
      status: 'Roasting in Small Batch',
    },
    {
      id: 'MV-849195',
      customer: 'Dr. Sunita Kulkarni',
      phone: '+91 98230 45812',
      city: 'Pune, MH',
      items: 'Matra Fresh Green Elaichi (50g Pantry Pack)',
      total: 449,
      payment: 'Credit Card',
      date: 'Today, 11:30 AM',
      status: 'Dispatched (BlueDart)',
    },
    {
      id: 'MV-849182',
      customer: 'Rohan Bhattacharya',
      phone: '+91 98311 90234',
      city: 'Mumbai, MH',
      items: 'Makhana (5 Packs) + Elaichi (10g Pack)',
      total: 1594,
      payment: 'UPI (PhonePe)',
      date: 'Yesterday',
      status: 'Delivered',
    },
    {
      id: 'MV-849170',
      customer: 'S. Ramanathan',
      phone: '+91 94440 18274',
      city: 'Madurai, TN',
      items: 'Matra Elaichi Garlands (Wedding Pair - 32")',
      total: 2999,
      payment: 'NetBanking',
      date: 'Nov 12, 2026',
      status: 'Artisan Handcraft in Progress',
    },
  ]);

  // Sample Mock Bookings for Astro & Consultants
  const [consultations, setConsultations] = useState([
    {
      id: 'MA-1029',
      client: 'Arjun Singhania',
      vertical: 'MATRA Astro',
      service: 'Personalized Kundli & Life Path Consultation',
      date: 'Nov 18, 2026',
      time: '04:30 PM IST',
      fee: 1100,
      payment: 'Paid (UPI)',
      phone: '+91 99200 48291',
      status: 'Meeting Link Dispatched',
    },
    {
      id: 'MC-2041',
      client: 'Neha Sharma',
      vertical: 'MATRA Consultants',
      service: 'Career Counselling & Strategic Pathfinding',
      date: 'Nov 19, 2026',
      time: '02:00 PM IST',
      fee: 1499,
      payment: 'Paid (Card)',
      phone: '+91 98110 37492',
      status: 'Resume Under Review',
    },
    {
      id: 'MA-1033',
      client: 'Vikram Seth',
      vertical: 'MATRA Astro',
      service: 'Vastu Shastra Home & Workspace Audit',
      date: 'Nov 20, 2026',
      time: '10:30 AM IST',
      fee: 2500,
      payment: 'Paid (UPI)',
      phone: '+91 97180 58201',
      status: 'Floorplan Uploaded',
    },
  ]);

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-gray-900 font-sans">
      {/* Top Admin Navbar */}
      <header className="bg-agri-dark text-white sticky top-0 z-50 border-b border-agri-gold/20 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between py-3">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-xs font-bold text-agri-mint hover:text-agri-gold transition-colors bg-white/10 px-3 py-1.5 rounded-full"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Live Website</span>
            </Link>

            <div className="h-6 w-px bg-white/20 hidden sm:block" />

            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7">
                <Image
                  src="/logo-transparent.png"
                  alt="MATRA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-sm font-black text-white font-heading tracking-wide">
                  MATRA VENTURES
                </h1>
                <p className="text-[10px] text-agri-gold font-semibold uppercase tracking-wider">
                  Admin & Management Portal
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/60 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Production Systems Active
            </span>
            <div className="w-9 h-9 rounded-full bg-agri-gold text-agri-dark font-black text-xs flex items-center justify-center shadow-md">
              MV
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex space-x-1 sm:space-x-4 border-t border-white/10 overflow-x-auto">
          {[
            { id: 'overview', label: 'Executive Overview', icon: BarChart3 },
            { id: 'products', label: 'MATRA Foods Catalog & MOQs', icon: Package },
            { id: 'orders', label: 'Produce Orders & Dispatch', icon: ShoppingBag },
            { id: 'consultations', label: 'Astro & Consultant Bookings', icon: Calendar },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3 px-3 sm:px-4 text-xs font-extrabold flex items-center gap-2 border-b-2 transition-all whitespace-nowrap ${
                  isActive
                    ? 'border-agri-gold text-agri-gold bg-white/5'
                    : 'border-transparent text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* TAB 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Executive KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white p-5 rounded-3xl border border-gray-200/80 shadow-xs">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Gross Monthly Sales</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+28%</span>
                </div>
                <h3 className="text-2xl font-black text-agri-dark font-heading mt-2">₹3,42,850</h3>
                <p className="text-[11px] text-gray-400 mt-1">Across Foods, Astro & Consultants</p>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-gray-200/80 shadow-xs">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Foods Orders Logged</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">184</span>
                </div>
                <h3 className="text-2xl font-black text-agri-dark font-heading mt-2">184 Orders</h3>
                <p className="text-[11px] text-gray-400 mt-1">Makhana 5-pack MOQ + Elaichi</p>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-gray-200/80 shadow-xs">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Consultations Booked</span>
                  <span className="text-xs font-bold text-agri-forest bg-agri-leaf/20 px-2 py-0.5 rounded-full">38</span>
                </div>
                <h3 className="text-2xl font-black text-agri-dark font-heading mt-2">38 Sessions</h3>
                <p className="text-[11px] text-gray-400 mt-1">Vedic Kundli, Vastu & Career</p>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-gray-200/80 shadow-xs">
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Customer Freshness Score</span>
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">★ 4.96</span>
                </div>
                <h3 className="text-2xl font-black text-agri-dark font-heading mt-2">4.96 / 5.0</h3>
                <p className="text-[11px] text-gray-400 mt-1">Based on 394 verified reviews</p>
              </div>
            </div>

            {/* Verticals Status Card */}
            <div className="bg-white p-6 sm:p-7 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                <div>
                  <h3 className="text-lg font-black text-agri-dark font-heading">
                    MATRA Ventures – 5 Business Verticals Architecture
                  </h3>
                  <p className="text-xs text-gray-500">
                    Parent company operations under <em>A Calmer Way of Living</em>
                  </p>
                </div>
                <span className="text-xs font-extrabold text-agri-forest bg-agri-cream px-3 py-1.5 rounded-full border border-agri-gold/30 self-start sm:self-auto">
                  Corporate Registration Active
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 pt-2">
                {VENTURE_VERTICALS.map((v) => (
                  <div key={v.id} className="p-4 rounded-2xl bg-gray-50 border border-gray-200 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-white text-agri-dark border border-gray-200">
                        {v.status}
                      </span>
                    </div>
                    <h4 className="text-xs font-extrabold text-agri-dark font-heading">{v.name}</h4>
                    <p className="text-[11px] text-gray-500 line-clamp-2">{v.tagline}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions & Recent Sourcing Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
                <h4 className="text-sm font-black text-agri-dark font-heading uppercase tracking-wider">
                  Makhana Small-Batch Roasting Schedule (Made Fresh to Order)
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-amber-950">Batch #MK-741 (50 Packets Total)</p>
                      <p className="text-[11px] text-amber-800">Classic Salted • Allocated to 10 incoming customer orders</p>
                    </div>
                    <span className="text-[11px] font-black text-amber-900 bg-amber-200/80 px-2.5 py-1 rounded-full">
                      Flame Roasting Now
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-200 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-emerald-950">Batch #MK-740 (35 Packets)</p>
                      <p className="text-[11px] text-emerald-800">Pink Salt Infused • Multi-layer aroma-lock pouches sealed</p>
                    </div>
                    <span className="text-[11px] font-black text-emerald-900 bg-emerald-200/80 px-2.5 py-1 rounded-full">
                      Dispatched BlueDart
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-gray-200/80 shadow-xs space-y-4">
                <h4 className="text-sm font-black text-agri-dark font-heading uppercase tracking-wider">
                  Bodinayakanur Cardamom & Garland Crafting Status
                </h4>
                <div className="space-y-3 text-xs">
                  <div className="p-3.5 rounded-2xl bg-agri-cream border border-agri-gold/30 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-agri-dark">Bodinayakanur Fresh Harvest Stock</p>
                      <p className="text-[11px] text-gray-600">Extra-bold 8mm green pods • Zero synthetic dyes</p>
                    </div>
                    <span className="text-[11px] font-black text-agri-forest bg-agri-leaf/20 px-2.5 py-1 rounded-full">
                      Optimal (120 kg Reserve)
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-purple-950">Artisanal Wedding Garlands (Elakkai Malai)</p>
                      <p className="text-[11px] text-purple-800">3 custom wedding pairs currently being handcrafted</p>
                    </div>
                    <span className="text-[11px] font-black text-purple-900 bg-purple-200/80 px-2.5 py-1 rounded-full">
                      Handcraft Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PRODUCTS CATALOG */}
        {activeTab === 'products' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 bg-white p-5 rounded-3xl border border-gray-200/80">
              <div>
                <h3 className="text-lg font-black text-agri-dark font-heading">
                  MATRA Foods – Product Listings & MOQ Configurations
                </h3>
                <p className="text-xs text-gray-500">
                  Manage pricing, pack sizes, minimum order quantities, and live inventory status.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => alert('New product listing modal ready for future catalog expansion (scalable architecture).')}
                  className="px-4 py-2.5 rounded-xl bg-agri-forest hover:bg-agri-primary text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add New Product</span>
                </button>
              </div>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productList.map((prod) => {
                const inStock = stockStatus[prod.id] ?? true;
                return (
                  <div
                    key={prod.id}
                    className="bg-white rounded-3xl border border-gray-200/80 overflow-hidden shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative h-48 bg-agri-pale">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          className="object-contain p-4"
                        />
                        <span className="absolute top-3 left-3 bg-agri-dark text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">
                          {prod.category}
                        </span>
                        <span
                          className={`absolute top-3 right-3 text-[10px] font-black uppercase px-2.5 py-1 rounded-full ${
                            inStock ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                          }`}
                        >
                          {inStock ? 'In Stock' : 'Out of Stock'}
                        </span>
                      </div>

                      <div className="p-5 space-y-3">
                        <h4 className="text-sm font-black text-agri-dark font-heading leading-tight">
                          {prod.name}
                        </h4>
                        <p className="text-xs text-gray-500 line-clamp-2">
                          {prod.description}
                        </p>

                        <div className="bg-agri-cream p-3 rounded-2xl border border-agri-gold/20 text-xs space-y-1.5">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Base Price:</span>
                            <span className="font-extrabold text-agri-dark">₹{prod.price.toLocaleString('en-IN')}</span>
                          </div>
                          {prod.minQuantity && (
                            <div className="flex justify-between text-amber-800 font-bold">
                              <span>Min. Order Quantity (MOQ):</span>
                              <span>{prod.minQuantity} Packets</span>
                            </div>
                          )}
                          {prod.isMadeFreshToOrder && (
                            <div className="flex justify-between text-emerald-800 font-bold">
                              <span>Batch Strategy:</span>
                              <span>Made Fresh to Order</span>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span className="text-gray-500">Sourcing Origin:</span>
                            <span className="font-medium text-gray-800">{prod.origin}</span>
                          </div>
                        </div>

                        {/* Variants Breakdown */}
                        <div className="space-y-1.5 pt-1">
                          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block">
                            Configured Pack Sizes / Variants:
                          </span>
                          {prod.variants.map((v) => (
                            <div key={v.id} className="flex justify-between items-center text-xs py-1 border-b border-gray-100 last:border-none">
                              <span className="font-medium text-gray-700">{v.size}</span>
                              <span className="font-black text-agri-forest">₹{v.price.toLocaleString('en-IN')}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-gray-100 flex items-center justify-between gap-2 mt-4">
                      <button
                        onClick={() => toggleStock(prod.id)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold uppercase transition-colors ${
                          inStock
                            ? 'bg-rose-50 text-rose-700 hover:bg-rose-100'
                            : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                        }`}
                      >
                        {inStock ? 'Mark Out of Stock' : 'Mark In Stock'}
                      </button>

                      <Link
                        href={`/products/${prod.id}`}
                        target="_blank"
                        className="p-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
                        title="View Live Product Page"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 3: ORDERS */}
        {activeTab === 'orders' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 bg-white p-5 rounded-3xl border border-gray-200/80">
              <div>
                <h3 className="text-lg font-black text-agri-dark font-heading">
                  Customer Produce Orders (MATRA Foods)
                </h3>
                <p className="text-xs text-gray-500">
                  Direct dispatch management from Bihar wetlands and Bodinayakanur spice gardens.
                </p>
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Filter by Order ID or name..."
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-gray-200 font-medium focus:outline-none focus:border-agri-primary"
                />
              </div>
            </div>

            {/* Orders Table */}
            <div className="bg-white rounded-3xl border border-gray-200/80 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-agri-cream text-agri-dark uppercase tracking-wider text-[10px] font-black border-b border-gray-200">
                    <tr>
                      <th className="py-3.5 px-4">Order ID</th>
                      <th className="py-3.5 px-4">Customer & City</th>
                      <th className="py-3.5 px-4">Items Ordered (Packets)</th>
                      <th className="py-3.5 px-4">Total Amount</th>
                      <th className="py-3.5 px-4">Payment</th>
                      <th className="py-3.5 px-4">Batch / Delivery Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {orders
                      .filter((o) =>
                        o.id.toLowerCase().includes(searchFilter.toLowerCase()) ||
                        o.customer.toLowerCase().includes(searchFilter.toLowerCase())
                      )
                      .map((ord) => (
                        <tr key={ord.id} className="hover:bg-gray-50/70 transition-colors">
                          <td className="py-4 px-4 font-black text-agri-forest">{ord.id}</td>
                          <td className="py-4 px-4">
                            <p className="font-bold text-gray-900">{ord.customer}</p>
                            <p className="text-[11px] text-gray-400">{ord.city} • {ord.phone}</p>
                          </td>
                          <td className="py-4 px-4 font-medium text-gray-700 max-w-xs">{ord.items}</td>
                          <td className="py-4 px-4 font-black text-gray-900">₹{ord.total.toLocaleString('en-IN')}</td>
                          <td className="py-4 px-4">
                            <span className="font-semibold text-agri-primary bg-agri-leaf/10 px-2 py-0.5 rounded">
                              {ord.payment}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <span className="text-[11px] font-extrabold text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-full">
                              {ord.status}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <button
                              onClick={() => alert(`Tracking details for ${ord.id} generated via BlueDart Priority.`)}
                              className="px-3 py-1.5 rounded-xl bg-agri-forest hover:bg-agri-primary text-white text-[11px] font-bold uppercase transition-colors"
                            >
                              Dispatch
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: CONSULTATIONS */}
        {activeTab === 'consultations' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 bg-white p-5 rounded-3xl border border-gray-200/80">
              <div>
                <h3 className="text-lg font-black text-agri-dark font-heading">
                  MATRA Astro & Consultants – Booked Sessions
                </h3>
                <p className="text-xs text-gray-500">
                  Scheduled 1-on-1 confidential consultations and advisory meetings.
                </p>
              </div>

              <div className="flex gap-2">
                <span className="text-xs font-bold text-agri-forest bg-agri-cream px-3 py-1.5 rounded-full border border-agri-gold/30">
                  3 Upcoming Today
                </span>
              </div>
            </div>

            {/* Consultations Table */}
            <div className="bg-white rounded-3xl border border-gray-200/80 overflow-hidden shadow-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-agri-cream text-agri-dark uppercase tracking-wider text-[10px] font-black border-b border-gray-200">
                    <tr>
                      <th className="py-3.5 px-4">Booking Ref</th>
                      <th className="py-3.5 px-4">Client Name</th>
                      <th className="py-3.5 px-4">Vertical</th>
                      <th className="py-3.5 px-4">Service Selected</th>
                      <th className="py-3.5 px-4">Date & Time Slot</th>
                      <th className="py-3.5 px-4">Fee Paid</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {consultations.map((c) => (
                      <tr key={c.id} className="hover:bg-gray-50/70 transition-colors">
                        <td className="py-4 px-4 font-black text-agri-forest">{c.id}</td>
                        <td className="py-4 px-4">
                          <p className="font-bold text-gray-900">{c.client}</p>
                          <p className="text-[11px] text-gray-400">{c.phone}</p>
                        </td>
                        <td className="py-4 px-4">
                          <span className={`font-bold px-2 py-0.5 rounded text-[11px] ${
                            c.vertical === 'MATRA Astro' ? 'bg-amber-100 text-amber-900' : 'bg-blue-100 text-blue-900'
                          }`}>
                            {c.vertical}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-semibold text-gray-800">{c.service}</td>
                        <td className="py-4 px-4 font-medium text-gray-600">{c.date} • {c.time}</td>
                        <td className="py-4 px-4 font-black text-gray-900">₹{c.fee.toLocaleString('en-IN')}</td>
                        <td className="py-4 px-4">
                          <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                            {c.status}
                          </span>
                        </td>
                        <td className="py-4 px-4 text-right">
                          <button
                            onClick={() => alert(`Meeting link copied to clipboard for ${c.client}.`)}
                            className="px-3 py-1.5 rounded-xl bg-agri-forest hover:bg-agri-primary text-white text-[11px] font-bold transition-colors"
                          >
                            Copy Link
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
