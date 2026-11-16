import HeroSlider from '@/components/HeroSlider';
import FeaturesBar from '@/components/FeaturesBar';
import ProductShop from '@/components/ProductShop';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GallerySection from '@/components/GallerySection';
import NewsletterSection from '@/components/NewsletterSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. Hero Banner Slider – Pure Single-Origin Sourcing & Heritage */}
      <HeroSlider />

      {/* 2. Four Pillars Feature Bar (floating over hero bottom) */}
      <FeaturesBar />

      {/* 3. MATRA Foods – Healthy Vegetarian Living (Makhana, Elaichi, Garlands) */}
      <ProductShop showCatalogLink />

      {/* 4. 4-Step Sourcing & Fresh Roasting Journey */}
      <ProcessSection />

      {/* 5. About MATRA – A Calmer Way of Living */}
      <AboutSection />

      {/* 6. Farming, Purity & Quality Testing Specialties */}
      <ServicesSection />

      {/* 7. Community & Customer Reviews */}
      <TestimonialsSection />

      {/* 8. Visual Heritage Gallery */}
      <GallerySection />

      {/* 9. Newsletter & Community Voucher Box */}
      <NewsletterSection />

      {/* 10. Direct Contact & Sourcing Inquiries */}
      <ContactSection />
    </div>
  );
}