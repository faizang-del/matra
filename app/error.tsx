'use client';

import React from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <span className="text-agri-gold font-bold text-sm uppercase tracking-widest mb-2">Notice</span>
      <h1 className="text-3xl sm:text-4xl font-black text-agri-dark font-heading mb-4">Something went wrong</h1>
      <p className="text-gray-600 max-w-md mb-8 text-sm">
        {error.message || 'An unexpected error occurred while loading this page.'}
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-6 py-3 rounded-full bg-agri-forest text-white font-bold text-xs uppercase tracking-wider hover:bg-agri-primary transition-all shadow-md"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-gray-100 text-gray-700 font-bold text-xs uppercase tracking-wider hover:bg-gray-200 transition-all"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
