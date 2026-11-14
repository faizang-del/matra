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
    description: 'Direct procurement from misty high-altitude cardamom hills in the Western Ghats. Only ripe, plump 8mm+ pods are harvested and shade-cured with zero artificial green coloring.',
    benefits: ['Natural High Cineole Essential Oil', 'Extra-Bold Hand-Graded Pods', 'Zero Malachite Green Chemical Dyes'],
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'bihar-makhana',
    icon: 'Leaf',
    title: 'Pristine Wetland Makhana Cultivation',
    subtitle: 'Traditional Mithila Aquatic Harvesting',
    description: 'Grown naturally in deep fresh-water oxbow lakes in Bihar. Expert wetland harvesters collect wild lotus seeds, which are graded and popped traditionally over natural charcoal ovens.',
    benefits: ['Zero Bleach or Sulfur Whitening', 'Air-Popped Crisp Crunchy Puffs', 'High Plant-Based Protein & Low GI'],
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'zero-additives-lab',
    icon: 'ShieldCheck',
    title: 'Pure Ingredients Testing & Guarantee',
    subtitle: 'Zero Additives & Unadulterated Purity',
    description: 'Every harvest lot is laboratory analyzed for zero pesticide residues, zero synthetic polishing agents, and authentic moisture levels to deliver pure uncompromised vitality.',
    benefits: ['Comprehensive Chemical Residue Tests', 'Naturally Preserved Shelf Life', 'Complete Traceability from Origin'],
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'bulk-wholesale',
    icon: 'Boxes',
    title: 'B2B Wholesale & Artisanal Supply',
    subtitle: 'Export Grade Single-Origin Staples',
    description: 'Supplying premier gourmet kitchens, high-end confectioneries, and clean-living grocery stores with the finest single-origin Green Elaichi and Premium Makhana batches.',
    benefits: ['Aroma-Sealed Foil Barrier Pouches', 'Complete Certificate of Analysis (COA)', 'Reliable Direct Origin Logistics'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop',
  },
];
