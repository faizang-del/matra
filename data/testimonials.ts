export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  rating: number;
  avatar: string;
  highlight: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Chef Ananya Deshmukh',
    role: 'Executive Chef & Culinary Director',
    location: 'The Heritage Table, New Delhi',
    quote: 'The aroma of Matra’s Royal Compounded Hing when hit with sizzling ghee is unlike anything produced industrially today. You immediately know it is pure ferula gum without synthetic chemical fillers. Their stone-ground atta also yields the softest rotis with natural golden sweetness.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=300&auto=format&fit=crop',
    highlight: 'Unmatched Culinary Purity & Aroma',
  },
  {
    id: 'test-2',
    name: 'Rajesh & Meera Sharma',
    role: 'Organic Lifestyle Family Advocates',
    location: 'Bangalore, India',
    quote: 'We switched our entire household kitchen staples to Matra Foods after learning about their zero-preservative guarantee. Their cold-pressed yellow mustard oil doesn’t smell bitter or irritate the eyes, and our kids love the raw honey amla murabba every single morning.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    highlight: 'Healthier Family, Zero Chemical Residue',
  },
  {
    id: 'test-3',
    name: 'Kavita Menon',
    role: 'Certified Holistic Nutritionist & Author',
    location: 'Mumbai, India',
    quote: 'As a nutritionist, I look for real stone-ground flours where the germ and bran haven’t been stripped away. Matra Sharbati Atta has a low glycemic response and digests beautifully. Their unpolished dals cook up creamy and retain true bioavailable protein.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    highlight: 'Preserves Live Enzymes & True Fiber',
  },
  {
    id: 'test-4',
    name: 'Vikramaditya Rathore',
    role: 'Farm Cooperative Leader',
    location: 'Madhya Pradesh Organic Belt',
    quote: 'Matra Foods does not just buy our organic harvest; they support our 400 farmer families through the entire crop cycle with fair pre-agreed prices and soil testing. When you buy Matra, you directly uplift Indian organic farmers.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    highlight: 'Fair-Trade Partnership with Real Farmers',
  },
];
