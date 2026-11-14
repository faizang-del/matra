export interface ProductVariant {
  id: string;
  size: string;
  weight: string;
  price: number;
  originalPrice: number;
  popular?: boolean;
}

export interface ProductRecipe {
  title: string;
  time: string;
  servings: string;
  description: string;
  steps: string[];
}

export interface ProductReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export interface NutrientItem {
  nutrient: string;
  amount: string;
  dailyValue?: string;
}

export interface Product {
  id: string;
  name: string;
  origin: string;
  category: 'Single-Origin Spices' | 'Traditional Superfoods';
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  weight: string;
  description: string;
  longDescription: string;
  ingredients: string;
  nutrition: string[];
  features: string[];
  image: string;
  inStock: boolean;
  harvestSeason?: string;
  galleryImages: string[];
  variants: ProductVariant[];
  nutritionTable: NutrientItem[];
  culinaryUses: ProductRecipe[];
  storageGuide: string;
  terroirDetails: {
    region: string;
    elevation: string;
    climate: string;
    harvestMethod: string;
    curingMethod: string;
  };
  reviews: ProductReview[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'matra-fresh-green-elaichi',
    name: 'Matra Fresh Green Elaichi',
    origin: 'Sourced from Bodinayakanur',
    category: 'Single-Origin Spices',
    price: 12.99,
    originalPrice: 15.50,
    rating: 5.0,
    reviewsCount: 148,
    badge: 'Sourced from Bodinayakanur',
    weight: '100g (3.5 oz)',
    description: 'Single-origin, hand-harvested bold green cardamom pods from the misty hills of Bodinayakanur. Intensely fragrant, high in natural essential oils, and zero artificial coloring.',
    longDescription: 'Sourced directly from generational spice planters in Bodinayakanur—celebrated as the Cardamom Capital of India nestled in the Western Ghats. These extra-bold pods are picked by hand at peak essential oil maturity, shade-cured in traditional wood-fired dryers to protect their vibrant green chlorophyll, and packed without synthetic food dyes, polishing oils, or sulfur treatments. Pure, intoxicating aroma that elevates desserts, curries, and chai.',
    ingredients: '100% Pure Whole Green Cardamom Pods (Elettaria cardamomum)',
    nutrition: [
      'Rich in Cineole & Terpinyl Acetate',
      'Potent Natural Digestive Aid',
      'Zero Added Green Dyes or Wax',
      'Extra-Bold 8mm Pod Selection',
    ],
    features: [
      'Pure Ingredients',
      'Freshly Sourced from Bodinayakanur',
      'No Additives or Chemical Preservatives',
      'Oxygen-Barrier Aroma-Lock Pouch',
    ],
    image: '/products/elaichi.jpg',
    inStock: true,
    harvestSeason: 'Winter Harvest 2026',
    galleryImages: [
      '/products/elaichi.jpg',
      '/products/matra-products-duo.jpg',
      'https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop',
    ],
    variants: [
      { id: 'elaichi-100g', size: '100g', weight: '100g (3.5 oz)', price: 12.99, originalPrice: 15.50, popular: true },
      { id: 'elaichi-250g', size: '250g', weight: '250g (8.8 oz)', price: 29.99, originalPrice: 35.00 },
      { id: 'elaichi-500g', size: '500g', weight: '500g (1.1 lbs)', price: 54.99, originalPrice: 65.00 },
    ],
    nutritionTable: [
      { nutrient: 'Calories', amount: '311 kcal / 100g' },
      { nutrient: 'Total Carbohydrates', amount: '68.5 g', dailyValue: '25%' },
      { nutrient: 'Dietary Fiber', amount: '28.0 g', dailyValue: '112%' },
      { nutrient: 'Plant Protein', amount: '10.8 g', dailyValue: '22%' },
      { nutrient: 'Essential Cineole Oils', amount: '8.4%', dailyValue: 'Natural' },
      { nutrient: 'Calcium', amount: '383 mg', dailyValue: '38%' },
      { nutrient: 'Iron', amount: '13.9 mg', dailyValue: '77%' },
      { nutrient: 'Magnesium', amount: '229 mg', dailyValue: '57%' },
      { nutrient: 'Artificial Dyes / Sulfur', amount: '0.00 mg', dailyValue: '0%' },
    ],
    terroirDetails: {
      region: 'Bodinayakanur, Theni District, Tamil Nadu (Western Ghats)',
      elevation: '900 - 1,400 meters above sea level',
      climate: 'Sub-tropical mountain mist, high humidity, rich loamy humus soil',
      harvestMethod: 'Hand-plucked selectively at peak mature green chlorophyll stage',
      curingMethod: 'Slow firewood-regulated shade kiln curing (under 48°C) without chemical dyes',
    },
    culinaryUses: [
      {
        title: 'Mātra Royal Cardamom Saffron Chai',
        time: '8 mins',
        servings: '2 cups',
        description: 'A comforting, tranquil brew infused with freshly cracked Bodinayakanur cardamom pods.',
        steps: [
          'Crush 3 Mātra Fresh Green Elaichi pods gently in a mortar to release the aromatic black seeds.',
          'Bring 1 cup of water and 1 cup of whole milk to a gentle simmer with loose black tea leaves.',
          'Add the crushed pods and seeds along with 2 strands of saffron and grated ginger.',
          'Simmer on low heat for 4 minutes, strain into ceramic cups, and sweeten with raw jaggery.',
        ],
      },
      {
        title: 'Calming Bedtime Warm Elaichi Almond Milk',
        time: '5 mins',
        servings: '1 cup',
        description: 'An Ayurvedic grounding elixir designed to soothe digestion and promote deep sleep.',
        steps: [
          'Warm 1 cup of unsweetened almond or oat milk in a small saucepan.',
          'Stir in the finely powdered seeds of 2 Mātra Green Elaichi pods and a pinch of nutmeg.',
          'Whisk gently until frothy and steam rises. Pour into a mug and sip warmly 30 minutes before sleep.',
        ],
      },
    ],
    storageGuide: 'Store inside the Mātra multi-barrier resealable zip pouch in a cool, dark pantry. Avoid direct sunlight or refrigeration. Keep sealed after every use to lock in delicate essential oils for up to 18 months.',
    reviews: [
      {
        id: 'rev-e1',
        author: 'Chef Ananya Deshmukh',
        location: 'New Delhi',
        rating: 5,
        date: 'November 2, 2026',
        title: 'Unbelievable aroma, completely free from artificial dye',
        comment: 'You can immediately tell these are authentic Bodinayakanur pods. Plump, fragrant, and bursting with sticky black seeds. There is zero green dye residue on your fingers. Truly exceptional quality.',
        verified: true,
      },
      {
        id: 'rev-e2',
        author: 'Rohan Bhattacharya',
        location: 'Mumbai',
        rating: 5,
        date: 'October 24, 2026',
        title: 'The best cardamom I have ever purchased',
        comment: 'Opening the pouch fills the entire kitchen with a soothing sweet-citrus eucalyptus perfume. Just two pods in our morning tea makes a world of difference.',
        verified: true,
      },
      {
        id: 'rev-e3',
        author: 'Dr. Sunita Kulkarni',
        location: 'Pune',
        rating: 5,
        date: 'October 15, 2026',
        title: 'Clean label spice with noticeable potency',
        comment: 'As someone mindful of pesticide and dye residues in commercial spices, finding Mātra single-origin cardamom has been a revelation. Worth every rupee.',
        verified: true,
      },
    ],
  },
  {
    id: 'matra-premium-makhana',
    name: 'Matra Premium Makhana',
    origin: 'Sourced from Bihar',
    category: 'Traditional Superfoods',
    price: 9.99,
    originalPrice: 12.50,
    rating: 4.9,
    reviewsCount: 186,
    badge: 'Sourced from Bihar',
    weight: '250g (8.8 oz)',
    description: 'Jumbo-grade, slow-roasted popped water lily seeds harvested from the pristine wetlands of Bihar. Airy, crunchy, rich in plant protein, and completely additive-free.',
    longDescription: 'Harvested from the protected aquatic wetlands of Mithila, Bihar, where 90% of the world’s finest organic fox nuts originate. Cultivated by traditional Mallah farming cooperatives, these lotus seeds are manually harvested from waterbeds, sun-dried, carefully roasted over gentle flame, and popped by hand. Unbleached, zero chemical preservatives, zero palm oil, and packed with bio-available magnesium, potassium, and plant protein for a calming, wholesome snack.',
    ingredients: '100% Pure Popped Lotus Seeds / Fox Nuts (Euryale ferox)',
    nutrition: [
      '9.7g Pure Plant Protein per 100g',
      'Rich in Calcium & Bio-Magnesium',
      'Low Glycemic Index & Low Sodium',
      'Zero Trans Fat & Zero Bleach',
    ],
    features: [
      'Natural Goodness',
      'Rich in Vital Nutrition',
      'No Additives or Preservatives',
      'Airy, Crunchy Jumbo Grade Selection',
    ],
    image: '/products/makhana.jpg',
    inStock: true,
    harvestSeason: 'Autumn Harvest 2026',
    galleryImages: [
      '/products/makhana.jpg',
      '/products/matra-products-duo.jpg',
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=1200&auto=format&fit=crop',
    ],
    variants: [
      { id: 'makhana-250g', size: '250g', weight: '250g (8.8 oz)', price: 9.99, originalPrice: 12.50, popular: true },
      { id: 'makhana-500g', size: '500g', weight: '500g (1.1 lbs)', price: 18.99, originalPrice: 24.00 },
      { id: 'makhana-1kg', size: '1kg', weight: '1kg (2.2 lbs)', price: 34.99, originalPrice: 45.00 },
    ],
    nutritionTable: [
      { nutrient: 'Calories', amount: '347 kcal / 100g' },
      { nutrient: 'Plant Protein', amount: '9.7 g', dailyValue: '19%' },
      { nutrient: 'Total Carbohydrates', amount: '76.9 g', dailyValue: '28%' },
      { nutrient: 'Dietary Fiber', amount: '14.5 g', dailyValue: '58%' },
      { nutrient: 'Total Fat', amount: '0.1 g', dailyValue: '0%' },
      { nutrient: 'Cholesterol', amount: '0 mg', dailyValue: '0%' },
      { nutrient: 'Magnesium', amount: '210 mg', dailyValue: '53%' },
      { nutrient: 'Potassium', amount: '500 mg', dailyValue: '15%' },
      { nutrient: 'Calcium', amount: '60 mg', dailyValue: '6%' },
      { nutrient: 'Sodium', amount: '1.2 mg', dailyValue: '<1%' },
      { nutrient: 'Chemical Bleach / Sulfites', amount: '0.00 mg', dailyValue: '0%' },
    ],
    terroirDetails: {
      region: 'Mithila Aquatic Wetland Ponds, Darbhanga & Madhubani, Bihar',
      elevation: '40 - 60 meters above sea level (Freshwater Oxbow Basins)',
      climate: 'Wetland alluvial basin nourished by Himalayan river runoff',
      harvestMethod: 'Manual deep-water dredging by ancestral harvester families',
      curingMethod: 'Sun-cured on woven bamboo mats followed by wood-charcoal clay pan popping',
    },
    culinaryUses: [
      {
        title: 'Mātra Ghee-Crisped Pink Salt Makhana',
        time: '6 mins',
        servings: '2 bowls',
        description: 'An irresistible airy superfood crunch perfect for mindful afternoon teatime snacking.',
        steps: [
          'Warm 1 tablespoon of pure A2 cow ghee in a wide heavy-bottomed kadai or skillet.',
          'Add 2 cups of Mātra Premium Makhana and roast on medium-low flame for 4 to 5 minutes, stirring continuously.',
          'Once the puffs become shatteringly crisp, sprinkle with pink Himalayan rock salt and fresh cracked black pepper.',
          'Let cool for 2 minutes and enjoy immediately, or store in an airtight jar.',
        ],
      },
      {
        title: 'Traditional Mithila Makhana & Elaichi Kheer',
        time: '20 mins',
        servings: '4 servings',
        description: 'A royal, soothing pudding combining Mātra Makhana with Bodinayakanur Elaichi.',
        steps: [
          'Lightly roast 1.5 cups of Mātra Makhana in 1 tsp ghee until crisp. Coarsely crush half the puffs.',
          'Simmer 4 cups of full-fat milk until slightly thickened (about 10 minutes).',
          'Add the roasted and crushed makhana into the simmering milk and cook for 6 minutes.',
          'Infuse with freshly ground seeds from 4 Mātra Green Elaichi pods, chopped pistachios, and raw sugar.',
          'Serve warm or chilled for an exquisite festive dessert.',
        ],
      },
    ],
    storageGuide: 'Store inside the Mātra moisture-barrier zipper pouch in a cool, dry place. Once opened, re-seal securely. If humidity causes softness, a gentle 2-minute dry roast in a pan restores the original shatter-crisp crunch instantly.',
    reviews: [
      {
        id: 'rev-m1',
        author: 'Meera & Rajesh Sharma',
        location: 'Bangalore',
        rating: 5,
        date: 'November 4, 2026',
        title: 'The cleanest, crunchiest makhana we have ever had',
        comment: 'Every piece is jumbo, unbroken, and without black residual seed shells or chewy soggy centers. Roasted with a touch of rock salt, it is our go-to evening snack. The natural unbleached ivory color gives us peace of mind.',
        verified: true,
      },
      {
        id: 'rev-m2',
        author: 'Vikram Seth',
        location: 'Chandigarh',
        rating: 5,
        date: 'October 29, 2026',
        title: 'No chemical bleach smell - 100% natural',
        comment: 'Commercial brands use sulfur to whiten makhana. Mātra’s makhana smells clean, sweet, and nutty right out of the pouch. Premium quality in every sense.',
        verified: true,
      },
      {
        id: 'rev-m3',
        author: 'Pooja Venkatesh',
        location: 'Chennai',
        rating: 5,
        date: 'October 19, 2026',
        title: 'Excellent for kids and healthy evening snacking',
        comment: 'High plant protein and very low calorie. My kids love it tossed with a pinch of turmeric and ghee. The packaging zip lock is very durable too.',
        verified: true,
      },
    ],
  },
];

export const CATEGORIES = [
  'All Products',
  'Single-Origin Spices',
  'Traditional Superfoods',
] as const;
