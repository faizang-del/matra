export interface GalleryItem {
  id: string;
  title: string;
  category: 'Farms' | 'Harvesting' | 'Processing' | 'Community';
  image: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    title: 'Misty Cardamom Hills, Bodinayakanur',
    category: 'Farms',
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=900&auto=format&fit=crop',
    description: 'High-altitude Western Ghats slopes where Bodinayakanur cardamom thrives in gentle mountain mist.',
  },
  {
    id: 'g-2',
    title: 'Handpicking Extra-Bold 8mm+ Elaichi Pods',
    category: 'Harvesting',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=900&auto=format&fit=crop',
    description: 'Selective hand-harvesting of plump, mature cardamom pods brimming with natural cineole oil.',
  },
  {
    id: 'g-3',
    title: 'Pristine Lotus Wetlands of Mithila, Bihar',
    category: 'Farms',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=900&auto=format&fit=crop',
    description: 'Clean freshwater oxbow lakes where wild water lilies and lotus fox nuts are naturally nurtured.',
  },
  {
    id: 'g-4',
    title: 'Traditional Clay Hearth Roasting & Popping',
    category: 'Processing',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=900&auto=format&fit=crop',
    description: 'Artisanal charcoal pan popping without added cooking oils or chemical bleaching agents.',
  },
  {
    id: 'g-5',
    title: 'Ethical Grower Partners & Harvester Guilds',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=900&auto=format&fit=crop',
    description: 'Empowering generational grower families with guaranteed fair premiums and direct market access.',
  },
  {
    id: 'g-6',
    title: 'Mātra Fresh Aroma-Lock Pouch Packaging',
    category: 'Processing',
    image: '/products/matra-products-duo.jpg',
    description: 'Multi-layer barrier pouches sealing in pure natural aroma, crunch, and authentic vitality.',
  },
];
