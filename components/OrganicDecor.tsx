'use client';

import React from 'react';
import { Sprout, Leaf, Sun, Wind } from 'lucide-react';

export function FloatingLeavesBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Leaf 1 */}
      <div className="absolute top-1/4 left-8 text-agri-leaf/20 animate-particle-1">
        <Leaf className="w-12 h-12 transform -rotate-45" />
      </div>

      {/* Leaf 2 */}
      <div className="absolute top-2/3 right-12 text-agri-mint/20 animate-particle-2">
        <Leaf className="w-16 h-16 transform rotate-12" />
      </div>

      {/* Seed/Sprout 3 */}
      <div className="absolute top-1/2 left-1/3 text-agri-gold/15 animate-particle-3">
        <Sprout className="w-10 h-10 transform rotate-45" />
      </div>

      {/* Sun Ray 4 */}
      <div className="absolute bottom-16 left-1/4 text-agri-gold/15 animate-particle-1">
        <Sun className="w-14 h-14" />
      </div>

      {/* Wind 5 */}
      <div className="absolute top-16 right-1/4 text-agri-leaf/15 animate-particle-2">
        <Wind className="w-12 h-12" />
      </div>
    </div>
  );
}
