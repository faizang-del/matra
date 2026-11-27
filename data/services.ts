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
    id: 'bodinayakanur-elaichi',
    icon: 'Sprout',
    title: 'Single-Origin Bodinayakanur Elaichi',
    subtitle: 'Cardamom Capital of India',
    description: 'Hand-plucked ripe 8mm+ pods shade-cured naturally with zero artificial dyes, chemicals, or synthetic flavours.',
    benefits: ['Natural High Cineole Essential Oil', 'Extra-Bold Hand-Graded Pods', 'Zero Malachite Green Chemical Dyes'],
    image: '/services/service-elaichi.jpg',
  },
  {
    id: 'bihar-makhana',
    icon: 'Leaf',
    title: 'Pristine Wetland Makhana Cultivation',
    subtitle: 'Traditional Mithila Aquatic Harvesting',
    description: 'Grown naturally in freshwater wetlands in Bihar. Popped traditionally with homely ingredients and zero bleach.',
    benefits: ['Zero Bleach or Sulfur Whitening', 'Air-Popped Crisp Crunchy Puffs', 'High Plant-Based Protein & Low GI'],
    image: '/services/service-wetland-makhana.jpg',
  },
  {
    id: 'zero-additives-lab',
    icon: 'ShieldCheck',
    title: 'Pure Ingredients Testing & Guarantee',
    subtitle: 'Zero Additives & Unadulterated Purity',
    description: 'Analyzed for 100% homely purity, zero artificial flavours, zero synthetic colours, and complete farm traceability.',
    benefits: ['Zero Artificial Flavours or Preservatives', 'Naturally Preserved Shelf Life', 'Complete Traceability from Origin'],
    image: '/services/service-lab-testing.jpg',
  },
  {
    id: 'bulk-wholesale',
    icon: 'Boxes',
    title: 'B2B Wholesale & Artisanal Garlands',
    subtitle: 'Ceremonial Malas & Bulk Produce',
    description: 'Supplying pure single-origin staples and ceremonial cardamom garlands handcrafted at ₹5,000 flat per garland all-inclusive.',
    benefits: ['₹5,000 per Garland (All Inclusive)', 'Aroma-Sealed Foil Barrier Pouches', 'Reliable Direct Origin Logistics'],
    image: '/services/service-wholesale-supply.jpg',
  },
];
