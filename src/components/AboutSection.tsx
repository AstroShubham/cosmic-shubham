import { motion } from "framer-motion";
import acharya1 from "@/assets/acharya-1.jpeg";
import { Star, Shield, Clock, Lock } from "lucide-react";

const expertise = [
  "Career Guidance",
  "Relationship Compatibility",
  "Health Astrology",
  "Spiritual Growth",
  "Remedial Solutions",
];

const highlights = [
  { icon: Star, text: "Authenticity & Accuracy" },
  { icon: Clock, text: "5+ Years of Experience" },
  { icon: Shield, text: "Ethical Consultation" },
  { icon: Lock, text: "Client Confidentiality" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-gold font-accent text-lg italic mb-2">Know Your Astrologer</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary">
            Acharya Shubham Mishra
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={acharya1}
                alt="Acharya Shubham Mishra"
                className="w-full h-[500px] object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-gold/10 border-2 border-gold/20" />
            <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/20" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <p className="text-foreground/70 leading-relaxed mb-6 text-base md:text-lg">
              With deep dedication to Vedic astrology, Acharya Shubham Mishra blends traditional scriptures 
              with modern interpretation to provide accurate and actionable guidance for every aspect of your life.
            </p>

            <div className="mb-6">
              <h3 className="font-display text-lg font-semibold text-primary mb-3">Areas of Expertise</h3>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {expertise.map((item) => (
                  <motion.span
                    key={item}
                    variants={fadeUp}
                    transition={{ duration: 0.4 }}
                    className="px-4 py-1.5 rounded-full text-sm bg-gold/10 text-gold-dark border border-gold/20 font-medium"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {highlights.map(({ icon: Icon, text }) => (
                <motion.div
                  key={text}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                >
                  <Icon className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground/80">{text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Sanskrit Shlok */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-l-4 border-gold pl-5 py-3 bg-gold/5 rounded-r-lg"
            >
              <p className="font-accent text-xl text-primary italic mb-1">
                "यत्र ज्योतिषं तत्र प्रकाशः"
              </p>
              <p className="text-sm text-muted-foreground">
                — Where astrology exists, there is light.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
