import { Phone, Mail, MapPin } from "lucide-react";
import fliqmintLogo from "@/assets/fliqmint-logo.png";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pooja Services", href: "#pooja" },
];

const Footer = () => (
  <footer id="footer" className="bg-cosmic-dark border-t border-gold/10 py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-bold text-gold mb-3">Astro Shubham</h3>
          <p className="text-spiritual-beige/50 text-sm leading-relaxed">
            Transforming lives through authentic Vedic astrology and spiritual guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-semibold text-spiritual-beige mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-spiritual-beige/50 hover:text-gold text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg font-semibold text-spiritual-beige mb-4">Contact</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:+917707062337" className="flex items-center gap-3 text-spiritual-beige/50 hover:text-gold text-sm transition-colors">
              <Phone className="w-4 h-4 text-gold flex-shrink-0" /> +91 77070 62337
            </a>
            <a href="mailto:askastroshubham@gmail.com" className="flex items-center gap-3 text-spiritual-beige/50 hover:text-gold text-sm transition-colors">
              <Mail className="w-4 h-4 text-gold flex-shrink-0" /> askastroshubham@gmail.com
            </a>
            <div className="flex items-start gap-3 text-spiritual-beige/50 text-sm">
              <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <span>Dashashwamedh Ghat, Kashi, Varanasi, Uttar Pradesh — 221001</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sanskrit Blessing */}
      <div className="text-center border-t border-gold/10 pt-8">
        <p className="font-accent text-xl text-gold/60 italic mb-1">
          "ॐ सर्वे भवन्तु सुखिनः"
        </p>
        <p className="text-spiritual-beige/30 text-xs mb-4">
          — May all beings be happy.
        </p>
        <p className="text-spiritual-beige/30 text-xs">
          © {new Date().getFullYear()} Astro Shubham. All rights reserved.
        </p>
        <p className="text-white text-xs mt-2">
          Developed With ❤️ By{" "}
          <a href="https://www.fliqmint.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:opacity-80 transition-opacity">
            <img src={fliqmintLogo} alt="Fliqmint" className="h-4 inline" />
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
