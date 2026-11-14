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
    quote: 'The aroma of Mātra’s Bodinayakanur Fresh Green Elaichi is breathtaking. The pods are uniformly plump and extra-bold, packed with volatile essential oils that burst into citrus and eucalyptus fragrance. Best of all, you know there is zero green dye—just pure, unadulterated spice.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=300&auto=format&fit=crop',
    highlight: 'Purest Cardamom Pods in the Country',
  },
  {
    id: 'test-2',
    name: 'Rajesh & Meera Sharma',
    role: 'Mindful Family Advocates',
    location: 'Bangalore, India',
    quote: 'We replaced evening processed snacks with Mātra Premium Makhana. Every single piece is light, airy, and thoroughly crunchy with zero chewy centers or bitter unpopped kernels. Our children love it roasted in a spoonful of ghee, and we love the clean zero-additive label.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop',
    highlight: 'Crisp Crunch & 100% Clean Snacking',
  },
  {
    id: 'test-3',
    name: 'Kavita Menon',
    role: 'Certified Holistic Nutritionist & Author',
    location: 'Mumbai, India',
    quote: 'Single-origin sourcing makes all the difference in nutrient bioavailability. Bodinayakanur elaichi has the highest natural cineole concentration for gut digestion, while Mithila makhana provides pure plant protein and magnesium without the chemical bleaching rampant in commercial brands.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    highlight: 'Naturally Exceptional Nutrient Density',
  },
  {
    id: 'test-4',
    name: 'M. Senthilkumar',
    role: 'Cardamom Grower Council Elder',
    location: 'Bodinayakanur, Tamil Nadu',
    quote: 'Mātra treats cardamom growers with immense dignity and pre-agreed fair premiums. Because they value natural shade curing over artificial green dye baths, our generational farming techniques are preserved and celebrated exactly as they should be.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    highlight: 'Direct Ethical Single-Origin Sourcing',
  },
];
