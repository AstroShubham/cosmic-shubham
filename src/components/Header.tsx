import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ConsultationDialog from "@/components/ConsultationDialog";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pooja Services", href: "#pooja" },
  { label: "Contact", href: "#footer" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [consultOpen, setConsultOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-cosmic-dark shadow-lg" : "bg-cosmic-dark"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 text-gold font-display text-xl md:text-2xl font-bold tracking-wider">
            <span className="text-3xl md:text-4xl">ॐ</span> Astro Shubham
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-spiritual-beige/80 hover:text-gold text-sm font-medium tracking-wider uppercase transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-gold p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-cosmic-dark border-t border-gold/20"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-spiritual-beige/80 hover:text-gold text-sm font-medium tracking-wider uppercase py-2"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => { setMobileOpen(false); setConsultOpen(true); }}
                className="btn-gold text-xs text-center mt-2"
              >
                Book Consultation
              </button>
            </div>
          </motion.div>
        )}
      </motion.header>

      <ConsultationDialog open={consultOpen} onOpenChange={setConsultOpen} />
    </>
  );
};

export default Header;
