import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import acharya2 from "@/assets/acharya-2.jpeg";
import acharya3 from "@/assets/acharya-3.png";
import acharya4 from "@/assets/acharya-4.jpeg";
import ConsultationDialog from "@/components/ConsultationDialog";

const images = [acharya2, acharya3, acharya4];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [consultOpen, setConsultOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.3)" }}
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-cosmic-dark/60 via-cosmic-dark/40 to-cosmic-dark/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center min-h-[80vh] pb-16 md:pb-20">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-spiritual-beige leading-tight">
                Professional{" "}
                <span className="text-gold-gradient">Vedic Astrologer</span>
              </h1>

              <p className="font-accent text-xl md:text-2xl text-white mb-2 italic font-semibold">
                Trusted by 2000+ Clients
              </p>
              <p className="font-accent text-lg md:text-xl text-white mb-3 italic font-semibold">
                5+ Years of Experience
              </p>
              <p className="text-spiritual-beige/70 text-sm mb-2">
                Online & Offline Consultations Available
              </p>
              <p className="text-spiritual-beige/60 text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Transforming lives through ancient Vedic wisdom and modern spiritual guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button onClick={() => setConsultOpen(true)} className="btn-gold">
                  Book Consultation
                </button>
                <a href="#services" className="btn-outline-gold">
                  Explore Services
                </a>
              </div>
            </motion.div>

            {/* Right - Image Slider */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative aspect-square max-w-[300px] md:max-w-[380px] lg:max-w-[450px] mx-auto w-full rounded-2xl overflow-hidden mb-8 md:mb-0"
            >
              {images.map((img, idx) => (
                <motion.div
                  key={idx}
                  className="absolute inset-0"
                  initial={false}
                  animate={{
                    opacity: currentSlide === idx ? 1 : 0,
                    scale: currentSlide === idx ? 1.05 : 1,
                  }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                >
                  <img
                    src={img}
                    alt={`Acharya Shubham Mishra ${idx + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                </motion.div>
              ))}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === idx ? "bg-gold w-6" : "bg-spiritual-beige/40"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gold/40 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-gold/60" />
          </div>
        </motion.div>
      </section>

      <ConsultationDialog open={consultOpen} onOpenChange={setConsultOpen} />
    </>
  );
};

export default HeroSection;
