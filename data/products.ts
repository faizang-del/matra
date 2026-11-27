export interface ProductVariant {
  id: string;
  size: string;
  weight: string;
  price: number;
  originalPrice: number;
  packCount?: number;
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
  vertical: 'MATRA Foods';
  origin: string;
  category: 'Healthy Vegetarian Snacks' | 'Single-Origin Spices' | 'Artisanal Ceremonial Garlands';
  price: number;
  originalPrice: number;
  rating: number;
  reviewsCount: number;
  badge?: string;
  weight: string;
  minQuantity?: number;
  isMadeFreshToOrder?: boolean;
  keyMessage?: string;
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
  nutritionTable?: NutrientItem[];
  culinaryUses?: ProductRecipe[];
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
    id: 'matra-makhana-classic-salted',
    name: 'Matra Makhana – Classic Salted',
    vertical: 'MATRA Foods',
    origin: 'Directly sourced from Bihar',
    category: 'Healthy Vegetarian Snacks',
    price: 299,
    originalPrice: 329,
    rating: 4.95,
    reviewsCount: 164,
    badge: 'Made Fresh to Order • Min. 5 Packs',
    weight: '100g per pack',
    minQuantity: 5,
    isMadeFreshToOrder: true,
    keyMessage: 'Made fresh to order with homely ingredients. 100% natural, zero artificial flavours or preservatives.',
    description: 'Directly sourced from Bihar farmers and roasted fresh to order in small batches at our home-based setup. Pure, homely ingredients with zero artificial flavours, preservatives, or synthetic additives.',
    longDescription: 'Harvested directly from ancestral wetland farmers in Bihar, our premium makhana is prepared in small batches at our home-based setup with homely, kitchen-pure ingredients. Prepared fresh to order—roasting starts only after your order is confirmed. Seasoned purely with natural pink salt and cold-pressed oil, with zero artificial flavours, colors, or preservatives. Wholesome, crunchy, and genuinely healthy.',
    ingredients: '100% Pure Popped Lotus Seeds (Fox Nuts / Euryale ferox), Cold-Pressed Pure Cow Ghee, Pure Himalayan Pink Salt.',
    nutrition: [
      'Pure Plant Protein (9.7g / 100g)',
      'Rich in Bio-Available Magnesium & Calcium',
      'Low Glycemic Index & Zero Trans Fat',
      'Zero Palm Oil, Zero Bleach & Zero Preservatives',
    ],
    features: [
      'Made Fresh to Order (Roasted Post-Order)',
      'Directly Sourced from Bihar Wetland Cooperatives',
      'Prepared in Small Batches at Home-Based Setup',
      'Minimum Order: 5 Packets (100g each)',
    ],
    image: '/products/makhana.jpg',
    inStock: true,
    harvestSeason: 'Winter Harvest 2026',
    galleryImages: [
      '/products/makhana.jpg',
      '/products/matra-products-duo.jpg',
    ],
    variants: [
      {
        id: 'makhana-5packs',
        size: '5 Packets (500g Total)',
        weight: '5 × 100g Packs (Minimum Order)',
        price: 1495,
        originalPrice: 1645,
        packCount: 5,
        popular: true,
      },
      {
        id: 'makhana-10packs',
        size: '10 Packets (1kg Total)',
        weight: '10 × 100g Packs (Pantry Saver)',
        price: 2890,
        originalPrice: 3290,
        packCount: 10,
      },
      {
        id: 'makhana-single',
        size: '1 Packet (100g)',
        weight: '100g (Min. Cart Order: 5 Packs)',
        price: 299,
        originalPrice: 329,
        packCount: 1,
      },
    ],
    nutritionTable: [
      { nutrient: 'Energy', amount: '347 kcal / 100g' },
      { nutrient: 'Plant Protein', amount: '9.7 g', dailyValue: '19%' },
      { nutrient: 'Dietary Fiber', amount: '14.5 g', dailyValue: '58%' },
      { nutrient: 'Total Carbohydrates', amount: '76.9 g', dailyValue: '28%' },
      { nutrient: 'Total Fat', amount: '0.2 g', dailyValue: '<1%' },
      { nutrient: 'Magnesium', amount: '210 mg', dailyValue: '53%' },
      { nutrient: 'Potassium', amount: '500 mg', dailyValue: '15%' },
      { nutrient: 'Calcium', amount: '60 mg', dailyValue: '6%' },
      { nutrient: 'Artificial Preservatives / Bleach', amount: '0.00 mg', dailyValue: '0%' },
    ],
    culinaryUses: [
      {
        title: 'Mindful Evening Teatime Crunch',
        time: 'Ready to Eat',
        servings: '1 Bowl',
        description: 'Enjoy straight out of the fresh aroma-lock pouch alongside herbal tea or warm elaichi milk.',
        steps: [
          'Unseal the freshly prepared Mātra Classic Salted Makhana pouch.',
          'Pour 1 cup into a ceramic bowl and enjoy the warm, freshly roasted crunch.',
          'Re-seal zipper tightly to maintain morning-fresh crispness.',
        ],
      },
      {
        title: 'Calming Makhana & Herb Chaat',
        time: '3 mins',
        servings: '2 servings',
        description: 'Toss with diced cucumbers, fresh coriander, pomegranate seeds, and a squeeze of lime.',
        steps: [
          'Take 2 cups of Mātra Classic Salted Makhana.',
          'Add finely diced Persian cucumber, juicy pomegranate pearls, and fresh mint.',
          'Drizzle a few drops of cold-pressed olive oil or roasted cumin powder.',
          'Toss gently and serve immediately for an energizing high-protein snack.',
        ],
      },
    ],
    storageGuide: 'Our makhana is prepared fresh with zero artificial preservatives. Store in a cool, dry pantry inside the provided multi-barrier zipper pouch. Best consumed within 60 days of dispatch for peak crunch.',
    terroirDetails: {
      region: 'Mithila Wetland Basins, Darbhanga & Madhubani, Bihar',
      elevation: '45 meters above sea level',
      climate: 'Pristine freshwater aquatic wetlands fed by Himalayan streams',
      harvestMethod: 'Traditional manual deep-water seed harvesting by generational harvester families',
      curingMethod: 'Sun-cured on natural bamboo mats, batch flame-popped and freshly roasted on order',
    },
    reviews: [
      {
        id: 'rev-m1',
        author: 'Dr. Alok Verma',
        location: 'Patna / New Delhi',
        rating: 5,
        date: 'November 8, 2026',
        title: 'You can literally taste the fresh batch preparation',
        comment: 'Standard store makhana often feels stale or rubbery. Matra’s made-fresh-to-order approach completely changes the game. Jumbo size, shatteringly crisp, and just the right amount of pink salt.',
        verified: true,
      },
      {
        id: 'rev-m2',
        author: 'Meenakshi Iyer',
        location: 'Bengaluru',
        rating: 5,
        date: 'November 2, 2026',
        title: 'The 5-pack bundle is now a staple in our home',
        comment: 'I ordered the 5-pack introductory box. The pouches arrived tightly sealed with a lovely handwritten batch roasting date. My family finished two packs in one weekend!',
        verified: true,
      },
    ],
  },
  {
    id: 'matra-fresh-green-elaichi',
    name: 'Matra Fresh Green Elaichi',
    vertical: 'MATRA Foods',
    origin: 'Directly sourced from Bodinayakanur, Tamil Nadu',
    category: 'Single-Origin Spices',
    price: 99,
    originalPrice: 120,
    rating: 5.0,
    reviewsCount: 182,
    badge: 'Directly Sourced • Bodinayakanur',
    weight: '10g / 50g packs',
    keyMessage: 'Directly sourced from Bodinayakanur. 100% pure homely spice with zero artificial flavours.',
    description: 'Directly sourced from Bodinayakanur planters and packed under MATRA. 100% natural green cardamom pods with homely purity and zero artificial flavours, dyes, or chemical polish.',
    longDescription: 'Directly sourced from the celebrated cardamom hills of Bodinayakanur, Tamil Nadu. Hand-harvested and shade-cured naturally to lock in botanical volatile oils. 100% natural with homely ingredients and zero artificial flavours, colours, or synthetic preservatives. Repacked in aroma-sealed pouches for authentic taste and fragrant nourishment.',
    ingredients: '100% Pure Whole Green Cardamom Pods (Elettaria cardamomum)',
    nutrition: [
      'High Concentration of Natural Cineole & Terpinyl Oils',
      'Digestive Balance & Natural Breath Refresher',
      'Zero Synthetic Dyes or Polishing Waxes',
      'Extra-Bold 8mm Pod Selection',
    ],
    features: [
      'Directly Sourced from Bodinayakanur, Tamil Nadu',
      'Repacked Under the MATRA Brand for Purity',
      'Available in Convenient 10g and 50g Packs',
      'Oxygen-Barrier Aroma-Lock Pouch',
    ],
    image: '/products/elaichi.jpg',
    inStock: true,
    harvestSeason: 'Winter Harvest 2026',
    galleryImages: [
      '/products/elaichi.jpg',
      '/products/matra-products-duo.jpg',
    ],
    variants: [
      {
        id: 'elaichi-10g',
        size: '10 g Pack',
        weight: '10g (Pocket Aroma Pack)',
        price: 99,
        originalPrice: 120,
        packCount: 1,
        popular: false,
      },
      {
        id: 'elaichi-50g',
        size: '50 g Pack',
        weight: '50g (Pantry Kitchen Pack)',
        price: 449,
        originalPrice: 520,
        packCount: 1,
        popular: true,
      },
    ],
    nutritionTable: [
      { nutrient: 'Calories', amount: '311 kcal / 100g' },
      { nutrient: 'Total Carbohydrates', amount: '68.5 g', dailyValue: '25%' },
      { nutrient: 'Dietary Fiber', amount: '28.0 g', dailyValue: '112%' },
      { nutrient: 'Plant Protein', amount: '10.8 g', dailyValue: '22%' },
      { nutrient: 'Essential Cineole Oils', amount: '8.4%', dailyValue: 'Natural' },
      { nutrient: 'Calcium', amount: '383 mg', dailyValue: '38%' },
      { nutrient: 'Iron', amount: '13.9 mg', dailyValue: '77%' },
      { nutrient: 'Artificial Dyes / Sulfur', amount: '0.00 mg', dailyValue: '0%' },
    ],
    culinaryUses: [
      {
        title: 'Mātra Royal Cardamom Chai',
        time: '8 mins',
        servings: '2 cups',
        description: 'A comforting, tranquil brew infused with freshly cracked Bodinayakanur cardamom pods.',
        steps: [
          'Lightly crush 2 Mātra Green Elaichi pods in a mortar to crack the green skin.',
          'Bring 1 cup water and 1 cup whole milk to a gentle boil with Assam tea leaves.',
          'Add crushed pods and a sliver of fresh ginger; simmer on low heat for 4 minutes.',
          'Strain and sweeten with raw jaggery or wildflower honey.',
        ],
      },
    ],
    storageGuide: 'Store inside the Mātra airtight pouch in a dark, dry kitchen cabinet. Avoid direct sunlight. Keep zipped after every use to lock in delicate essential oils for up to 18 months.',
    terroirDetails: {
      region: 'Bodinayakanur, Theni District, Tamil Nadu (Western Ghats)',
      elevation: '1,000 - 1,450 meters above sea level',
      climate: 'Sub-tropical mountain mist, high humidity, rich loamy humus soil',
      harvestMethod: 'Selective hand plucking at peak chlorophyll maturity',
      curingMethod: 'Traditional firewood-regulated shade kiln curing without artificial dyes',
    },
    reviews: [
      {
        id: 'rev-e1',
        author: 'Kavita Sundaram',
        location: 'Coimbatore',
        rating: 5,
        date: 'November 6, 2026',
        title: 'Authentic Bodinayakanur aroma, deep and sweet',
        comment: 'Having grown up in Tamil Nadu, I know true Bodinayakanur cardamom. The pods are large, deep green, and filled with sticky black aromatic seeds without any artificial color.',
        verified: true,
      },
      {
        id: 'rev-e2',
        author: 'Arjun Singhania',
        location: 'Mumbai',
        rating: 5,
        date: 'October 29, 2026',
        title: 'Superb quality and value for money',
        comment: 'The 50g pack is phenomenal. Just one pod crushed in our morning tea fills the room with rich natural fragrance.',
        verified: true,
      },
    ],
  },
  {
    id: 'matra-elaichi-garlands',
    name: 'Matra Elaichi Garlands (Elakkai Malai)',
    vertical: 'MATRA Foods',
    origin: 'Handcrafted in Bodinayakanur, Tamil Nadu',
    category: 'Artisanal Ceremonial Garlands',
    price: 5000,
    originalPrice: 6000,
    rating: 5.0,
    reviewsCount: 48,
    badge: 'Artisanal Handcrafted • ₹5,000 All Inclusive',
    weight: '1 Garland (All Inclusive)',
    keyMessage: 'Handcrafted in Bodinayakanur. ₹5,000 per garland all-inclusive with express doorstep delivery.',
    description: 'Handcrafted ceremonial cardamom garlands (Elakkai Malai) woven with pure Bodinayakanur whole cardamom pods and golden zari accents. Homely natural ingredients with zero artificial flavours or chemical scents. ₹5,000 per garland all-inclusive.',
    longDescription: 'A revered symbol of honor, prosperity, and celebration across Indian traditions. Our Matra Elaichi Garlands (Elakkai Malai) are intricately handcrafted by master artisans in Bodinayakanur using thousands of select green cardamom pods. Accented with subtle golden zari borders and pure silk tassels, each garland radiates a captivating natural botanical fragrance that endures for months. Made purely with homely natural ingredients and zero artificial flavours or synthetic sprays. Rate: ₹5,000 per garland all-inclusive (taxes and express delivery included).',
    ingredients: '100% Hand-Selected Whole Green Cardamom Pods (Bodinayakanur), Pure Zari Silk Threading, Auspicious Gold Accents & Tassels. Zero artificial colours or chemical scents.',
    nutrition: [
      '100% Natural Whole Green Cardamom Pods',
      'Rate: ₹5,000 per Garland (All Inclusive)',
      'Homely Ingredients with Zero Artificial Flavours or Sprays',
      'Artisanal Hand-Strung by Bodinayakanur Artisans',
    ],
    features: [
      '₹5,000 per Garland (All Inclusive)',
      'Handcrafted with Thousands of Bodinayakanur Cardamom Pods',
      'Homely Ingredients • Zero Artificial Flavours or Dyes',
      'Long-Lasting Natural Aroma (Months of Fragrance)',
    ],
    image: '/products/elaichi-garland.jpg',
    inStock: true,
    harvestSeason: 'Artisanal Handcraft 2026',
    galleryImages: [
      '/products/elaichi-garland.jpg',
      '/products/elaichi-garland-trio.jpg',
      '/products/elaichi-garland-pair.jpg',
    ],
    variants: [
      {
        id: 'garland-standard-24in',
        size: 'Standard Ceremonial Garland (Single)',
        weight: '1 Garland • ₹5,000 all-inclusive',
        price: 5000,
        originalPrice: 6000,
        popular: true,
      },
      {
        id: 'garland-wedding-pair-32in',
        size: 'Wedding Varmala Pair (Set of 2 Garlands)',
        weight: 'Pair of 2 Garlands • ₹5,000 each (₹10,000 all-inclusive)',
        price: 10000,
        originalPrice: 12000,
        popular: false,
      },
      {
        id: 'garland-royal-temple-40in',
        size: 'Royal Temple & VIP Haram (Single - 40")',
        weight: '1 Heavy Grand Garland • ₹5,000 all-inclusive',
        price: 5000,
        originalPrice: 6000,
        popular: false,
      },
    ],
    nutritionTable: [
      { nutrient: 'Whole Cardamom Pod Count', amount: '1,200 - 3,500 pods', dailyValue: 'Hand-Sorted' },
      { nutrient: 'Essential Cineole Aroma Volatiles', amount: '8.2% Natural Oils', dailyValue: 'Long-Lasting' },
      { nutrient: 'Aroma Retention Span', amount: 'Up to 6 Months', dailyValue: 'Airtight Box' },
      { nutrient: 'Artisanal Zari Silk Thread', amount: 'Gold-Finished Silk', dailyValue: 'Auspicious' },
      { nutrient: 'Synthetic Chemical Sprays', amount: '0.00 mg', dailyValue: '0%' },
      { nutrient: 'Synthetic Green Dyes', amount: '0.00 mg', dailyValue: '0%' },
    ],
    culinaryUses: [
      {
        title: 'Wedding Varmala & Swagat Ceremony',
        time: 'Ceremonial',
        servings: 'Couple Pair',
        description: 'Exquisite South Indian wedding garland worn during varmala, reception, or used as a grand auspicious guest welcome.',
        steps: [
          'Unbox the Mātra Elakkai Malai from its protective ceremonial casing.',
          'Gently drape around the neck of the bride, groom, or guest of honor.',
          'Bask in the natural sweet-eucalyptus fragrance that purifies the stage atmosphere.',
        ],
      },
      {
        title: 'Sacred Temple Pooja & Photo Keepsake',
        time: 'Spiritual',
        servings: 'Sacred Altar',
        description: 'Traditional adornment for deity idols, pooja rooms, and wedding ancestral keepsakes.',
        steps: [
          'Drape gracefully across the temple deity or framed wedding memory.',
          'Keep dry and away from direct moisture to ensure fragrance lasts up to 6 months.',
        ],
      },
    ],
    storageGuide: 'Store inside the provided moisture-resistant ceremonial box in a cool, dry room. Avoid water or direct humidity. Do not spray perfumes or water on the pods. Retains its magnificent aroma for 4 to 6 months.',
    terroirDetails: {
      region: 'Bodinayakanur, Theni District, Tamil Nadu',
      elevation: '1,100 meters above sea level',
      climate: 'Misty Western Ghats terroir with artisanal weaving clusters',
      harvestMethod: 'Uniform pod sorting by size (8mm+ bold pods only)',
      curingMethod: 'Natural curing followed by meticulous ancestral thread weaving',
    },
    reviews: [
      {
        id: 'rev-g1',
        author: 'S. Ramanathan',
        location: 'Chennai / Madurai',
        rating: 5,
        date: 'November 4, 2026',
        title: 'Breathtaking craftsmanship for my daughter’s wedding',
        comment: 'We ordered the Wedding Varmala pair for the reception. The entire wedding hall was fragrant with the gentle scent of fresh Bodinayakanur cardamom. Guests could not stop praising how unique and regal it looked.',
        verified: true,
      },
      {
        id: 'rev-g2',
        author: 'Priya & Vignesh',
        location: 'Hyderabad',
        rating: 5,
        date: 'October 21, 2026',
        title: 'Stays fragrant for months! Superb keepsake',
        comment: 'Even weeks after our wedding, the garland hangs in our pooja room and still smells heavenly. Packaged with immense care and arrived in perfect condition.',
        verified: true,
      },
    ],
  },
];

export const CATEGORIES = [
  'All Products',
  'Healthy Vegetarian Snacks',
  'Single-Origin Spices',
  'Artisanal Ceremonial Garlands',
] as const;
