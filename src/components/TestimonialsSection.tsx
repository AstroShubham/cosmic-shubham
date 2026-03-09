import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { text: "Acharya Shubham Mishra provided incredibly accurate insights into my career path. His remedies brought positive changes within weeks. Highly recommended!", rating: 5, name: "Rajesh K." },
  { text: "The Kundali analysis was so detailed and precise. I could finally understand the planetary influences on my life. Truly grateful.", rating: 5, name: "Priya S." },
  { text: "After the Navgrah Shanti Pooja, I noticed a remarkable shift in my business fortunes. Acharya ji's guidance is invaluable.", rating: 5, name: "Amit G." },
  { text: "The matchmaking consultation saved our families from a potentially incompatible alliance. We are eternally thankful.", rating: 5, name: "Sunita M." },
  { text: "I was skeptical at first, but the Vastu consultation transformed the energy of my home. Everything feels harmonious now.", rating: 4, name: "Vikram P." },
  { text: "The Mahamrityunjaya Jaap performed by Acharya ji brought immense peace during my father's illness. Truly divine.", rating: 5, name: "Neha R." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-background relative">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <p className="text-cosmic-dark/70 font-accent text-lg italic mb-2">Client Experiences</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary">
            Testimonials
          </h2>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative h-[250px] md:h-[200px]"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={false}
              animate={{
                opacity: current === idx ? 1 : 0,
                y: current === idx ? 0 : 15,
                position: "absolute" as const,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="inset-0 w-full"
            >
              <div className="text-center px-4 md:px-12">
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-accent text-xl md:text-2xl italic text-foreground/80 mb-5 leading-relaxed">
                  "{t.text}"
                </p>
                <p className="text-sm font-semibold text-gold">— {t.name}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                current === idx ? "bg-gold w-6" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
