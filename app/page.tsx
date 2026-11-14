import HeroSlider from '@/components/HeroSlider';
import FeaturesBar from '@/components/FeaturesBar';
import AboutSection from '@/components/AboutSection';
import ProductShop from '@/components/ProductShop';
import ProcessSection from '@/components/ProcessSection';
import DealBanner from '@/components/DealBanner';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GallerySection from '@/components/GallerySection';
import BlogSection from '@/components/BlogSection';
import NewsletterSection from '@/components/NewsletterSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Banner Slider */}
      <HeroSlider />

      {/* 2. Four Pillars Feature Bar (floating over hero bottom) */}
      <FeaturesBar />

      {/* 3. About Matra Foods (Heritage & Values) */}
      <AboutSection />

      {/* 4. Fresh Harvest Products Store (Interactive Shop) */}
      <ProductShop />

      {/* 5. 4-Step Seed to Table Journey */}
      <ProcessSection />

      {/* 6. Seasonal Promotional Deal with Live Countdown */}
      <DealBanner />

      {/* 7. Farming & Milling Specialties (Services) */}
      <ServicesSection />

      {/* 8. Chef & Community Testimonials */}
      <TestimonialsSection />

      {/* 9. Farm Life & Harvest Visual Gallery */}
      <GallerySection />

      {/* 10. Organic Living & Nutrition Journal (Blog) */}
      <BlogSection />

      {/* 11. Newsletter Subscription Box */}
      <NewsletterSection />

      {/* 12. Direct Contacts & Inquiry Form */}
      <ContactSection />
    </div>
  );
}
