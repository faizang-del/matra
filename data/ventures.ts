export interface ServiceItem {
  id: string;
  name: string;
  duration?: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  description: string;
  highlights: string[];
}

export interface VentureVertical {
  id: 'foods' | 'consultants' | 'digital' | 'home-services';
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  status: 'Active Store' | 'Book Consultations' | 'Explore Services' | 'Phased Launch';
  badge: string;
  icon: string;
  services?: ServiceItem[];
  features: string[];
  ctaText: string;
  ctaHref: string;
}

export const PARENT_COMPANY = {
  name: 'MATRA Ventures Private Limited',
  shortName: 'MATRA Ventures',
  tagline: 'A Calmer Way of Living',
  address: 'Bodinayakanur, Theni & Patna Regional Operations, India',
  email: 'care@matraventures.com',
  phone: '+91 94480 89567',
  whatsappNumber: '919448089567',
  hours: 'Mon – Sat: 8:00 AM – 8:00 PM IST',
};

export const VENTURE_VERTICALS: VentureVertical[] = [
  {
    id: 'foods',
    name: 'MATRA Foods',
    shortName: 'Foods',
    tagline: 'Healthy Vegetarian Living',
    description: 'Single-origin spices, made-fresh-to-order superfood snacks, and ceremonial spice creations directly sourced from generational farming belts in Bihar and Bodinayakanur.',
    status: 'Active Store',
    badge: 'Healthy Vegetarian Living',
    icon: 'Utensils',
    features: [
      'Classic Salted Makhana: Small Batch, Made Fresh to Order (Min. 5 Packs)',
      'Bodinayakanur Green Elaichi: 10g & 50g Clean-Label Packs',
      'Artisanal Elaichi Garlands (Elakkai Malai) for Auspicious Ceremonies',
      'Direct Farm Sourcing with Transparent Clean Ingredients',
    ],
    ctaText: 'Explore Produce & Order',
    ctaHref: '#shop',
  },
  {
    id: 'consultants',
    name: 'MATRA Consultants',
    shortName: 'Consultants',
    tagline: 'Business & Career Advisory',
    description: 'Empowering students, professionals, and growing enterprises with actionable career counselling, executive guidance, and lean business consulting.',
    status: 'Book Consultations',
    badge: 'Business & Advisory',
    icon: 'Briefcase',
    features: [
      '1-on-1 Career Counselling & Higher Education Guidance',
      'Early-Stage MSME & Startup Business Model Validation',
      'Go-to-Market Strategy & Brand Positioning Advisory',
      'Executive Mentorship for Sustainable, Calmer Growth',
    ],
    ctaText: 'Schedule Consultation',
    ctaHref: '#consultants',
    services: [
      {
        id: 'consult-career',
        name: 'Career Counselling & Strategic Pathfinding',
        duration: '60 mins • 1-on-1 Strategy Session',
        price: 1499,
        originalPrice: 1999,
        badge: 'Recommended for Professionals & Students',
        description: 'Structured psychometric assessment review, industry skill gap analysis, resume positioning, and a 2-year actionable career progression roadmap.',
        highlights: [
          'Personalized career trajectory blueprint',
          'Resume & LinkedIn profile optimization review',
          'Curated upskilling and certification recommendations',
        ],
      },
      {
        id: 'consult-business',
        name: 'Early-Stage Startup & MSME Business Advisory',
        duration: '75 mins • Strategic Working Session',
        price: 3500,
        originalPrice: 4500,
        badge: 'Entrepreneurs & Founders',
        description: 'Hands-on review of your business plan, pricing strategy, operational bottlenecks, supply chain sourcing, and unit economics validation.',
        highlights: [
          'Unit economics & margin viability review',
          'Lean operational workflow structuring',
          'Direct post-session actionable execution brief',
        ],
      },
      {
        id: 'consult-growth',
        name: 'Brand Strategy & Digital Growth Consultation',
        duration: '60 mins • Growth Session',
        price: 2999,
        originalPrice: 3800,
        badge: 'Brand Expansion',
        description: 'Define your unique customer value proposition, omnichannel customer acquisition strategy, and brand voice for sustainable, high-retention growth.',
        highlights: [
          'Customer persona & market positioning breakdown',
          'Organic & digital conversion funnel audit',
          'Strategic growth roadmap with 30-day priorities',
        ],
      },
    ],
  },
  {
    id: 'digital',
    name: 'MATRA Digital',
    shortName: 'Digital',
    tagline: 'Apps & Digital Solutions',
    description: 'Crafting clean, responsive web applications, mobile software, bespoke e-commerce engines, and automated business workflows that scale gracefully.',
    status: 'Explore Services',
    badge: 'Apps & Digital Solutions',
    icon: 'Smartphone',
    features: [
      'Next.js & React High-Performance Web Applications',
      'Cross-Platform iOS & Android Mobile Apps',
      'Bespoke E-Commerce & Payment Gateway Integrations',
      'Custom ERP, Inventory & Automation Dashboards',
    ],
    ctaText: 'Explore Digital Solutions',
    ctaHref: '#ventures',
  },
  {
    id: 'home-services',
    name: 'MATRA Home Services',
    shortName: 'Home Services',
    tagline: 'Home Repair & Maintenance',
    description: 'Bringing tranquility to living spaces with verified, punctual home repairs, electrical, plumbing, carpentry, and preventive home wellness upkeep.',
    status: 'Phased Launch',
    badge: 'Phased Rollout • Coming Soon',
    icon: 'Wrench',
    features: [
      'Verified, Background-Checked Technicians',
      'Transparent Flat-Rate Pricing with Zero Hidden Fees',
      'Preventive Seasonal Home Maintenance Packages',
      'Direct WhatsApp Booking & Priority Dispatch',
    ],
    ctaText: 'Join Priority Waitlist',
    ctaHref: '#ventures',
  },
];
