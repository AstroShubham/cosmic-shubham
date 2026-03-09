import { motion } from "framer-motion";
import { useState } from "react";
import ConsultationDialog from "@/components/ConsultationDialog";

const CTASection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="section-dark py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at center, hsl(43 74% 52%) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-spiritual-beige mb-4 leading-tight">
              Ready to Transform{" "}
              <span className="text-gold-gradient">Your Life?</span>
            </h2>
            <p className="font-accent text-xl md:text-2xl text-white italic mb-3 font-semibold">
              Start Your Spiritual Journey Today.
            </p>
            <p className="text-spiritual-beige/50 max-w-xl mx-auto mb-10 text-base">
              Find clarity, prosperity, and peace through authentic Vedic astrology.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center"
            >
              <button onClick={() => setOpen(true)} className="btn-gold text-base px-10 py-5">
                Book Consultation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ConsultationDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default CTASection;
