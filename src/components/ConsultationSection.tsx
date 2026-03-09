import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Video, Phone, MessageCircle, Monitor, MapPin, BookOpen, Sparkles, Heart } from "lucide-react";

const onlineMethods = [
  { icon: MessageCircle, label: "WhatsApp Audio/Video" },
  { icon: Phone, label: "Phone Calls" },
  { icon: Monitor, label: "Zoom" },
  { icon: Video, label: "Google Meet" },
];

const offlineBenefits = [
  { icon: BookOpen, label: "Detailed Chart Analysis" },
  { icon: Sparkles, label: "Personalized Remedies" },
  { icon: Heart, label: "Pooja Guidance" },
  { icon: MapPin, label: "In-Person Experience" },
];

const ConsultationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="consultation" className="section-dark py-20 md:py-28 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <p className="text-white font-accent text-lg italic mb-2 font-semibold">Connect With Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-spiritual-beige">
            Consultation Options
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Online */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-7 rounded-2xl bg-spiritual-beige/5 border border-gold/15"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
              <Monitor className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-display text-xl font-bold text-spiritual-beige mb-2">Online Consultation</h3>
            <p className="text-spiritual-beige/60 text-sm mb-5">Convenient, flexible timing, worldwide access.</p>
            <div className="grid grid-cols-2 gap-3">
              {onlineMethods.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-lg bg-spiritual-beige/5">
                  <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-spiritual-beige/80 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Offline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="p-7 rounded-2xl bg-spiritual-beige/5 border border-gold/15"
          >
            <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-gold" />
            </div>
            <h3 className="font-display text-xl font-bold text-spiritual-beige mb-2">Offline Consultation</h3>
            <p className="text-spiritual-beige/60 text-sm mb-5">In-person sessions for detailed, personal guidance.</p>
            <div className="grid grid-cols-2 gap-3">
              {offlineBenefits.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-3 p-3 rounded-lg bg-spiritual-beige/5">
                  <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-spiritual-beige/80 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
