import CosmicBackground from "@/components/CosmicBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PoojaSection from "@/components/PoojaSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative">
      <CosmicBackground />
      <Header />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PoojaSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
