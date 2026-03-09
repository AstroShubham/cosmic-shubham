import { motion } from "framer-motion";
import {
  Sun, Briefcase, Building2, Heart, Sparkles, Users,
  Home, BookOpen, Orbit, Gem,
} from "lucide-react";

const services = [
  { icon: Sun, title: "Kundali Analysis", desc: "Comprehensive birth chart analysis for life insights and planetary positions." },
  { icon: Briefcase, title: "Career Guidance", desc: "Navigate your professional path with astrological career mapping." },
  { icon: Building2, title: "Business Astrology", desc: "Muhurat selection and business growth strategies through Vedic wisdom." },
  { icon: Heart, title: "Health Astrology", desc: "Identify health-related planetary influences and preventive remedies." },
  { icon: Sparkles, title: "Spiritual Growth", desc: "Deepen your spiritual journey with personalized meditation and mantra guidance." },
  { icon: Users, title: "Matchmaking", desc: "Kundali matching for marriage compatibility and relationship harmony." },
  { icon: Home, title: "Vastu Consultation", desc: "Harmonize your living and work spaces with Vastu Shastra principles." },
  { icon: BookOpen, title: "Lal Kitab Remedies", desc: "Simple yet powerful remedies from the ancient Lal Kitab tradition." },
  { icon: Orbit, title: "Graha Dosh Analysis", desc: "Identify and resolve planetary doshas affecting your life path." },
  { icon: Gem, title: "Gemstone Remedies", desc: "Personalized gemstone recommendations based on your birth chart for positive energy." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-dark py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-white font-accent text-lg italic mb-2 font-semibold">What We Offer</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-spiritual-beige">
            Our Services
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.title}
                href={`https://wa.me/917707062337?text=${encodeURIComponent(`Hi, I'm interested in your ${service.title} service. Please share more details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group p-5 rounded-xl bg-spiritual-beige/5 border border-gold/10 hover:border-gold/30 hover:bg-spiritual-beige/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer block"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors duration-200">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-base font-semibold text-spiritual-beige mb-1.5">
                  {service.title}
                </h3>
                <p className="text-spiritual-beige/60 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
