import HeroSlider from '@/components/HeroSlider';
import FeaturesBar from '@/components/FeaturesBar';
import ProductShop from '@/components/ProductShop';
import AstroSection from '@/components/AstroSection';
import ConsultantsSection from '@/components/ConsultantsSection';
import VenturesOverviewSection from '@/components/VenturesOverviewSection';
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
      {/* 1. Hero Banner Slider with Multi-Vertical Showcase */}
      <HeroSlider />

      {/* 2. Four Pillars Feature Bar (floating over hero bottom) */}
      <FeaturesBar />

      {/* 3. MATRA Foods – Healthy Vegetarian Living (Makhana, Elaichi, Garlands) */}
      <ProductShop />

      {/* 4. MATRA Astro – Astrology & Consultations */}
      <AstroSection />

      {/* 5. MATRA Consultants – Career Guidance & Business Advisory */}
      <ConsultantsSection />

      {/* 6. MATRA Digital & MATRA Home Services (Expanding Verticals) */}
      <VenturesOverviewSection />

      {/* 7. About MATRA Ventures (Heritage, Philosophy: A Calmer Way of Living) */}
      <AboutSection />

      {/* 8. 4-Step Sourcing & Fresh Roasting Journey */}
      <ProcessSection />

      {/* 9. Farming & Quality Testing Specialties */}
      <ServicesSection />

      {/* 10. Community & Customer Reviews */}
      <TestimonialsSection />

      {/* 11. Visual Heritage Gallery */}
      <GallerySection />

      {/* 12. Newsletter & Community Voucher Box */}
      <NewsletterSection />

      {/* 13. Direct Contact & Sourcing Inquiries */}
      <ContactSection />
    </div>
  );
}
