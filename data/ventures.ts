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
  id: 'foods' | 'astro' | 'consultants' | 'digital' | 'home-services';
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
  phone: '+91 800 425 6287',
  whatsappNumber: '918004256287',
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
    id: 'astro',
    name: 'MATRA Astro',
    shortName: 'Astro',
    tagline: 'Astrology & Mindful Consultations',
    description: 'Personalized Vedic astrology consultations, life path readings, and Vastu harmonization to bring serenity, clarity, and mindful direction to your everyday journey.',
    status: 'Book Consultations',
    badge: 'Astrology & Guidance',
    icon: 'Compass',
    features: [
      'Comprehensive Birth Chart (Kundli) & Planetary Analysis',
      'Career, Business Timing & Financial Muhurat Guidance',
      'Vastu Shastra Consultation for Calmer Living Spaces',
      'Direct 1-on-1 Confidential Sessions via Video/Audio Call',
    ],
    ctaText: 'Book Astrology Session',
    ctaHref: '#astro',
    services: [
      {
        id: 'astro-kundli',
        name: 'Personalized Kundli & Life Path Consultation',
        duration: '45 mins • Video / Phone Call',
        price: 1100,
        originalPrice: 1500,
        badge: 'Most Popular',
        description: 'In-depth analysis of your planetary positions, Mahadasha cycles, health, relationships, and actionable Vedic remedies to remove obstacles.',
        highlights: [
          'Detailed birth chart analysis (D1 & D9 charts)',
          'Personalized remedies & gemstone/mantra advice',
          'Follow-up summary & recording included',
        ],
      },
      {
        id: 'astro-career',
        name: 'Career & Business Astrology Guidance',
        duration: '45 mins • Video / Phone Call',
        price: 1500,
        originalPrice: 2000,
        badge: 'Strategic Clarity',
        description: 'Navigate professional crossroads, business partnership compatibility, promotion cycles, and optimal timing for major financial decisions.',
        highlights: [
          'Favorable Mahadasha timing for investments',
          'Job switch & business venture compatibility',
          'Auspicious dates for contract signing',
        ],
      },
      {
        id: 'astro-vastu',
        name: 'Vastu Shastra Home & Workspace Audit',
        duration: '60 mins • Blueprint & Video Review',
        price: 2500,
        originalPrice: 3200,
        badge: 'Space Harmonization',
        description: 'Align your living or workplace energy with cardinal directions and natural elements to nurture tranquility, health, and prosperity without demolition.',
        highlights: [
          'Review of floor plans and entrance directions',
          'Non-destructive energy balancing remedies',
          'Room-by-room elemental alignment guide',
        ],
      },
      {
        id: 'astro-muhurat',
        name: 'Auspicious Muhurat & Event Timing',
        duration: 'Written Report + 20 mins Call',
        price: 750,
        originalPrice: 999,
        badge: 'Ceremonial Timing',
        description: 'Precise planetary timing calculations for Griha Pravesh, wedding muhurtams, business inaugurations, and sacred ceremonies.',
        highlights: [
          'Panchang calculation specific to your city',
          'Tithi, Nakshatra, and Rahu Kaal avoidance chart',
          'Quick 24-hour turnaround',
        ],
      },
    ],
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
