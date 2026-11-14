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
    title: 'Golden Sharbati Wheat Fields at Dawn',
    category: 'Farms',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=900&auto=format&fit=crop',
    description: 'Pristine chemical-free farmland in the heart of organic farming clusters.',
  },
  {
    id: 'g-2',
    title: 'Heritage Cold Stone Grinding Chakki',
    category: 'Processing',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop',
    description: 'Natural emery stone chakkis rotating at slow revolutions to retain fiber and nutrients.',
  },
  {
    id: 'g-3',
    title: 'Blooming Yellow Mustard Flower Fields',
    category: 'Farms',
    image: 'https://images.unsplash.com/photo-1534710961216-75c88202f43e?q=80&w=900&auto=format&fit=crop',
    description: 'Winter yellow mustard crop ready for pesticide-free cold pressing.',
  },
  {
    id: 'g-4',
    title: 'Sun-Drying Whole Kashmiri Red Chillies',
    category: 'Harvesting',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=900&auto=format&fit=crop',
    description: 'Destemmed and cured under natural mountain sunlight on eco-friendly mats.',
  },
  {
    id: 'g-5',
    title: 'Fair-Trade Farmer Family Partners',
    category: 'Community',
    image: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=900&auto=format&fit=crop',
    description: 'Empowering generational agricultural families with guaranteed fair prices.',
  },
  {
    id: 'g-6',
    title: 'Eco-Friendly Glass & Pouch Packaging',
    category: 'Processing',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=900&auto=format&fit=crop',
    description: 'Zero plastic waste packaging ensuring fresh farm flavor preservation.',
  },
];
