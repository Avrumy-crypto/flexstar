import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import extrusionImg from "@/assets/capability-extrusion.jpg";
import printingImg from "@/assets/capability-printing.jpg";
import laminationImg from "@/assets/capability-lamination.jpg";
import convertingImg from "@/assets/capability-converting.jpg";
import standupPouches from "@/assets/product-standup-pouches.jpg";
import rollstock from "@/assets/product-rollstock.jpg";
import sachets from "@/assets/product-sachets.jpg";
import highBarrier from "@/assets/product-high-barrier.jpg";

const filmTypes = [
  { name: "Thermoform", image: laminationImg },
  { name: "Shrink Sleeves", image: highBarrier },
  { name: "Pouches", image: standupPouches },
  { name: "Roll Stock", image: rollstock },
  { name: "Lidding", image: sachets },
];

const capabilities = [
  { title: "Extrusion", image: extrusionImg },
  { title: "Lamination", image: laminationImg },
  { title: "Printing", image: printingImg },
  { title: "Converting", image: convertingImg },
];

const stats = [
  { value: "500M+", label: "Sq Ft Annually" },
  { value: "200+", label: "Global Customers" },
  { value: "50+", label: "Years Experience" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <iframe
            src="https://www.youtube.com/embed/fbGZl4di4_Y?autoplay=1&mute=1&loop=1&playlist=fbGZl4di4_Y&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Manufacturing"
            className="w-full h-full object-cover pointer-events-none"
            style={{ aspectRatio: '16/9', minHeight: '100%', minWidth: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <motion.h1 
            className="text-5xl md:text-7xl font-semibold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Advanced Flexible
            <br />
            <span className="text-white/60">Packaging</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg text-white/70 mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Precision packaging that protects products and elevates brands.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-8">
                Request Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/capabilities">
              <Button variant="outline" size="lg" className="rounded-full px-8 border-white/30 text-white hover:bg-white/10">
                Our Capabilities
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1 h-2 bg-white/50 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </section>

      {/* Stats - Glass */}
      <section className="relative -mt-20 z-20 px-6">
        <motion.div 
          className="container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, i) => (
                <motion.div key={stat.label} className="text-center" variants={fadeUp}>
                  <p className="text-4xl md:text-5xl font-semibold text-accent">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Products */}
      <section className="py-32">
        <div className="container-wide">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-sm font-medium mb-3">Products</p>
            <h2 className="text-4xl md:text-5xl font-semibold">Film Types</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {filmTypes.map((film) => (
              <motion.div key={film.name} variants={fadeUp}>
                <Link
                  to="/products"
                  className="group relative overflow-hidden rounded-2xl aspect-[3/4] block"
                >
                  <img
                    src={film.image}
                    alt={film.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-medium group-hover:text-accent transition-colors">
                      {film.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/products">
              <Button variant="outline" className="rounded-full">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 section-gradient">
        <div className="container-wide">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="text-accent text-sm font-medium mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-semibold">Capabilities</h2>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {capabilities.map((cap) => (
              <motion.div key={cap.title} variants={fadeUp}>
                <Link
                  to="/capabilities"
                  className="group relative overflow-hidden rounded-2xl aspect-square block"
                >
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl text-white font-medium group-hover:text-accent transition-colors">
                      {cap.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <motion.div 
          className="container-wide"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">
              Ready to start?
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              Let's find the perfect packaging solution for your product.
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-10">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
