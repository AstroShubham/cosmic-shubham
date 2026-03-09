import { motion } from "framer-motion";
import { Shield, Clock, Star, Award, Users, Globe } from "lucide-react";

const reasons = [
  { icon: Shield, title: "100% Confidential", desc: "Your personal information and consultations are kept strictly private and secure." },
  { icon: Clock, title: "24/7 Availability", desc: "Get guidance whenever you need it — morning, evening, or late night consultations." },
  { icon: Star, title: "Accurate Predictions", desc: "Highly precise readings backed by deep Vedic knowledge and years of practice." },
  { icon: Award, title: "Certified Astrologer", desc: "Trained and certified in Jyotish Shastra from renowned Vedic institutions." },
  { icon: Users, title: "2000+ Happy Clients", desc: "Trusted by thousands of clients worldwide for life-changing astrological guidance." },
  { icon: Globe, title: "Worldwide Consultations", desc: "Connect from anywhere in the world via WhatsApp, Zoom, or Google Meet." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const WhyChooseUsSection = () => {
  return (
    <section className="section-dark py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-white font-accent text-lg italic mb-2 font-semibold">Our Promise</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-spiritual-beige">
            Why Choose Us
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                variants={fadeUp}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-center p-6 rounded-2xl bg-spiritual-beige/5 border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-display text-lg font-bold text-spiritual-beige mb-2">
                  {reason.title}
                </h3>
                <p className="text-spiritual-beige/60 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
