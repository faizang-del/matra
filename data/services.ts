export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  image: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'contract-farming',
    icon: 'Tractor',
    title: 'Certified Organic Contract Farming',
    subtitle: 'Sustainable Agriculture & Seed Sourcing',
    description: 'We partner directly with smallholder farming clusters across 4,500+ acres of certified chemical-free soil, providing non-hybrid indigenous seeds and biological pest defense.',
    benefits: ['Guaranteed Fair Farmer Buyback', '100% Soil Traceability & Geo-Tagging', 'Zero Synthetic Fertilizers or Pesticides'],
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'stone-milling',
    icon: 'Wheat',
    title: 'Traditional Cold Stone Milling',
    subtitle: 'Low-RPM Heritage Chakki Grinding',
    description: 'Our certified milling facility uses slow-revolution natural stone chakkis that keep temperatures below 38°C, preserving dietary wheat germ, essential bran, and live enzymes.',
    benefits: ['Heat-Resistant Processing', 'Unbleached & Unadulterated Flour', 'Custom Grain Mesh & Grind Sizes'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'cold-pressing',
    icon: 'Droplet',
    title: 'Wood-Pressed (Kachi Ghani) Extraction',
    subtitle: 'Zero Solvent Chemical-Free Oils',
    description: 'Slow extraction inside traditional wooden Mortar-Pestle (Marachekku/Kolhu) machines. Our oils are single-pressed, gravity settled, and bottled unfiltered in dark glass.',
    benefits: ['First Cold-Press Purity Guarantee', 'Zero Hexane Chemical Solvents', 'Rich Natural Omega-3 Fatty Acids'],
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'bulk-wholesale',
    icon: 'Boxes',
    title: 'B2B Wholesale & Institutional Supply',
    subtitle: 'Export Grade Certified Food Staples',
    description: 'Supplying premier organic grocery chains, premium cloud kitchens, and gourmet artisanal bakeries worldwide with certified laboratory-tested spices, grains, and flours.',
    benefits: ['Moisture-Controlled Vacuum Bales', 'Complete Certificate of Analysis (COA)', 'Flexible Global Logistics & Exporting'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
  },
];
