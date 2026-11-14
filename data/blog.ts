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
    slug: 'stone-ground-flour-benefits',
    title: 'Why Stone-Ground Chakki Atta Retains 3x More Fiber than Industrial Flour',
    excerpt: 'Discover why high-speed commercial steel rollers burn away essential wheat germ, and how ancient low-RPM stone chakkis preserve vitamins and digestive fiber.',
    category: 'Nutrition & Heritage',
    author: 'Dr. Suresh Varma',
    authorRole: 'Food Scientist & Agronomist',
    date: 'Nov 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop',
    tags: ['Stone Milling', 'Dietary Fiber', 'Organic Wheat', 'Gut Health'],
    content: [
      'In today’s hyper-industrialized grain processing, flour is often subjected to high-speed steel roller mills spinning at upwards of 3,000 RPM. The catastrophic heat generated during this high-friction milling burns the delicate fatty acids inside the wheat germ and pulverizes the fiber into micro-particles that cause rapid insulin spikes.',
      'At Matra Foods, we adhere to the time-tested Vedic principle of slow cold stone grinding. Our hand-carved natural stone chakkis rotate at a gentle 40 to 45 revolutions per minute. The flour emerges barely warm to the touch (under 38°C), safeguarding fragile B-vitamins, Vitamin E, and live digestive enzymes.',
      'Furthermore, we never extract the nutrient-dense coarse bran layer to sell separately, nor do we add chemical bleaching agents like benzoyl peroxide or potassium bromate. The result is rotis that remain soft for hours, possess an unmistakable earthy sweetness, and digest gently.',
    ],
  },
  {
    id: 'blog-2',
    slug: 'cold-pressed-vs-refined-oils',
    title: 'The Shocking Truth About Refined Oils vs. Wood-Pressed Kachi Ghani',
    excerpt: 'Commercial cooking oils undergo chemical solvent bath at 200°C followed by deodorizing. Here is why reverting to wooden Kolhu cold pressing is essential.',
    category: 'Clean Living',
    author: 'Meenakshi Iyer',
    authorRole: 'Ayurvedic Wellness Practitioner',
    date: 'Oct 28, 2026',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=900&auto=format&fit=crop',
    tags: ['Cold Pressed', 'Mustard Oil', 'Healthy Fats', 'Heart Health'],
    content: [
      'Most supermarket refined oils appear sparkling clear and odorless because they have been chemically treated with hexane (a petroleum byproduct), bleached with acid clays, and neutralized with caustic soda. In this process, nearly all natural antioxidants, phytosterols, and natural aromas are obliterated.',
      'Matra Foods Cold-Pressed Yellow Mustard Oil is crushed in a slow wooden expeller (Kolhu). No external heat is applied, and zero chemicals touch the oil. After cold pressing, the oil is simply filtered through natural cotton cloth and allowed to settle naturally by gravity.',
      'Our yellow mustard oil contains an ideal 1:1.2 ratio of Omega-3 to Omega-6 fatty acids, aiding cardiovascular health, skin radiance, and natural joint lubrication while adding an irresistible aroma to your culinary creations.',
    ],
  },
  {
    id: 'blog-3',
    slug: 'authentic-pure-hing-medicinal-benefits',
    title: 'The Sacred Science of Hing: How Pure Asafoetida Balances Digestion',
    excerpt: 'Used in Ayurveda for thousands of years as a potent carminative, pure Hing is far more than a fragrant spice—it is an ancient digestive elixir.',
    category: 'Ancient Spices',
    author: 'Pandit Gopal Das',
    authorRole: 'Master Spice Blender, Matra Heritage',
    date: 'Oct 14, 2026',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=900&auto=format&fit=crop',
    tags: ['Pure Hing', 'Asafoetida', 'Digestive Health', 'Ayurveda'],
    content: [
      'In traditional Indian cooking, Hing (asafoetida) is the soul of every tadka. But did you know that 85% of market varieties are adulterated with cheap industrial colophony resins, chalk powder, and artificial fragrance chemicals?',
      'Genuine Asafoetida is the dried resinous latex exuded from the roots of the wild ferula plant. At Matra Foods, we import raw, unadulterated crystal gum directly from high mountain valleys and cure it according to our 70-year-old family compounding methods using natural edible gums.',
      'When sizzled in ghee or oil for just 3 seconds, pure hing releases ferulic acid—a potent natural antioxidant that alleviates bloating, stimulates bile flow, and neutralizes flatulence from pulses and brassica vegetables.',
    ],
  },
];
