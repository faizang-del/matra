export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'bodinayakanur-green-elaichi-queen-of-spices',
    title: 'The Scent of Bodinayakanur: Why Single-Origin Green Elaichi is the Queen of Spices',
    excerpt: 'Discover why high-altitude misty slopes produce India’s most intensely fragrant cardamom, and how natural shade-curing preserves vibrant emerald color without synthetic dyes.',
    category: 'Spices & Heritage',
    author: 'Dr. Suresh Varma',
    authorRole: 'Botanist & Spice Agronomist',
    date: 'Nov 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=900&auto=format&fit=crop',
    tags: ['Green Elaichi', 'Bodinayakanur', 'Single-Origin Spices', 'Essential Oils'],
    content: [
      'Nestled at the base of the Western Ghats in Tamil Nadu, Bodinayakanur is globally celebrated as the Cardamom Capital of India. Here, the unique confluence of high elevation, rich mountain loam soil, and gentle tropical mist creates the perfect microclimate for Elettaria cardamomum to develop dense, volatile cineole essential oils.',
      'In conventional markets, cardamom pods are frequently treated with artificial green colorants (such as malachite green or chemical food dyes) to give inferior, faded pods an appealing hue. At Mātra Foods, our Fresh Green Elaichi is harvested by hand at full maturity and cured inside traditional wood-heated curing kilns without a single drop of synthetic dye.',
      'Each pod in a Mātra pouch measures an extra-bold 8mm or above, bursting with dense jet-black seeds that release an unmistakable citrusy, warm eucalyptus aroma the moment you crush them between your fingers. It is nature at its most intoxicating.',
    ],
  },
  {
    id: 'blog-2',
    slug: 'bihar-wetland-makhana-superfood-benefits',
    title: 'The Ancient Lotus Superfood: How Hand-Popped Bihar Makhana Fuels Calmer Living',
    excerpt: 'Grown in tranquil freshwater oxbow lakes of Mithila, Bihar, makhana is revered for its high plant protein, low glycemic index, and calming restorative properties.',
    category: 'Superfoods & Wellness',
    author: 'Meenakshi Iyer',
    authorRole: 'Ayurvedic Wellness Practitioner',
    date: 'Oct 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=900&auto=format&fit=crop',
    tags: ['Premium Makhana', 'Bihar Wetlands', 'Plant Protein', 'Calm Living'],
    content: [
      'For centuries in the Mithila region of Bihar, the cultivation of Euryale ferox (fox nut or makhana) has been an art form practiced in harmony with wetland ecosystems. Traditional harvesters wade through serene lotus ponds to retrieve the seeds from the aquatic floor before sun-drying and roasting them over clay hearths.',
      'Unlike commercial processed snacks fried in seed oils or bleached with sulfur dioxide to look unnaturally white, Mātra Premium Makhana is 100% unbleached and naturally roasted with zero oil. It carries a clean, creamy ivory complexion and an irresistibly light, airy crunch.',
      'Nutritional science affirms what Ayurvedic sages knew millennia ago: makhana contains significant amounts of magnesium, potassium, and phosphorus with low sodium and virtually zero saturated fat. It provides sustained, calm energy without insulin crashes.',
    ],
  },
  {
    id: 'blog-3',
    slug: 'a-calmer-way-of-living-daily-wellness',
    title: 'A Calmer Way of Living: Why Pure Single-Origin Ingredients Matter for Daily Wellness',
    excerpt: 'In an era of ultra-processed food and overwhelming choices, returning to transparent single-origin staples brings simplicity, peace of mind, and wholesome nourishment.',
    category: 'Mindful Living',
    author: 'Pandit Gopal Das',
    authorRole: 'Master Ayurvedic Herbalist, Mātra',
    date: 'Oct 14, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=900&auto=format&fit=crop',
    tags: ['Calmer Living', 'Single-Origin', 'Clean Food', 'Mindful Habits'],
    content: [
      'Modern life is loud, fast-paced, and complicated. Our relationship with what we put on our table does not have to be. When our food comes from transparent, single-origin geographical sources, we reconnect with the rhythm of the soil and the artisans who nurture it.',
      'At Mātra, our motto is "A Calmer Way of Living." We intentionally choose to do fewer things, but do them with unmatched purity and reverence. By curating just two foundational staples—Fresh Green Elaichi and Premium Makhana—we guarantee that every batch meets rigorous clean-food benchmarks.',
      'When you brew your morning tea with crushed Bodinayakanur cardamom or enjoy a bowl of gently roasted Bihar makhana during your afternoon break, you are honoring a rhythm of simplicity, mindfulness, and pure vitality.',
    ],
  },
];
