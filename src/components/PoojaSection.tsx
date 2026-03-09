import { motion } from "framer-motion";
import { useState } from "react";
import mahamrityunjay from "@/assets/mahamrityunjay-jaap.jpg";
import lakshmi from "@/assets/lakshmi-pooja.png";
import saraswati from "@/assets/saraswati-pooja.jpg";
import vivah from "@/assets/vivah-badha-nivaran.jpeg";
import kaalSarp from "@/assets/kaal-sarp-pooja.jpeg";
import kuber from "@/assets/kuber-pooja.jpeg";
import navgrah from "@/assets/navgrah-pooja.jpg";
import hanuman from "@/assets/hanuman-pooja.jpeg";
import mangalDosh from "@/assets/mangal-dosh-pooja.png";
import ganesha from "@/assets/ganesha-pooja.jpeg";

const poojas = [
  { title: "Mahamrityunjaya Jaap", duration: "2–3 hours", purpose: "Health and protection", desc: "Powerful Vedic chanting dedicated to Lord Shiva for healing, longevity, and divine protection from illness and negativity.", image: mahamrityunjay },
  { title: "Lakshmi Pooja", duration: "1–2 hours", purpose: "Wealth and prosperity", desc: "Invoke the blessings of Goddess Lakshmi for financial abundance, prosperity, and material well-being in your life.", image: lakshmi },
  { title: "Saraswati Pooja", duration: "1–2 hours", purpose: "Education & knowledge", desc: "Seek the grace of Goddess Saraswati for academic excellence, creative wisdom, and intellectual growth.", image: saraswati },
  { title: "Vivah Badha Nivaran", duration: "2–3 hours", purpose: "Remove marriage obstacles", desc: "Specialized rituals to remove delays and obstacles in marriage, bringing harmony and auspicious unions.", image: vivah },
  { title: "Kaal Sarp Dosh Nivaran", duration: "Full Day", purpose: "Remove planetary obstacles", desc: "Sacred pooja to neutralize the effects of Kaal Sarp Dosh, restoring balance and removing life obstacles.", image: kaalSarp },
  { title: "Kuber Pooja", duration: "1–2 hours", purpose: "Financial growth", desc: "Worship Lord Kuber, the deity of wealth, to unlock financial opportunities and ensure steady monetary growth.", image: kuber },
  { title: "Navgrah Shanti Pooja", duration: "3–4 hours", purpose: "Planetary harmony", desc: "Comprehensive pooja to pacify all nine planets, ensuring cosmic harmony and reducing malefic planetary effects.", image: navgrah },
  { title: "Hanuman Pooja", duration: "1–2 hours", purpose: "Strength & protection", desc: "Invoke Lord Hanuman's divine strength for courage, protection from evil forces, and overcoming challenges.", image: hanuman },
  { title: "Mangal Dosh Nivaran", duration: "2–3 hours", purpose: "Marriage harmony", desc: "Effective rituals to reduce the impact of Mangal Dosh for a harmonious married life and relationship peace.", image: mangalDosh },
  { title: "Ganesha Pooja", duration: "1–2 hours", purpose: "Obstacle removal", desc: "Begin every new venture with Lord Ganesha's blessings to remove obstacles and ensure success in all endeavors.", image: ganesha },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const PoojaSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? poojas : poojas.slice(0, 6);

  return (
    <section id="pooja" className="py-16 md:py-20 bg-background relative">
      <div className="container mx-auto px-4">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10"
        >
          <p className="text-cosmic-dark/70 font-accent text-lg italic mb-2">Sacred Rituals</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
            Pooja Services
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-4"
        >
          {displayed.map((pooja) => (
            <motion.div
              key={pooja.title}
              variants={scaleIn}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="card-spiritual group"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={pooja.image}
                  alt={pooja.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmic-dark/60 to-transparent" />
              </div>
              <div className="p-3 md:p-4">
                <h3 className="font-display text-base md:text-lg font-bold text-primary mb-1">{pooja.title}</h3>
                <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-1.5">
                  <span>⏱ {pooja.duration}</span>
                  <span>• {pooja.purpose}</span>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground/80 leading-relaxed mb-2 line-clamp-2">
                  {pooja.desc}
                </p>
                <a
                  href="https://wa.me/917707062337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full text-xs md:text-sm py-2"
                >
                  Book Pooja
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {!showAll && (
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-8"
          >
            <button onClick={() => setShowAll(true)} className="btn-outline-gold text-primary border-primary hover:bg-primary/5">
              View All Poojas
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PoojaSection;
