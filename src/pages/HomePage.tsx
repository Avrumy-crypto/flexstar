import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Factory, CheckCircle, Layers, Zap, Target } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { OUR_WORK_ITEMS } from "@/data/ourWork";
import extrusionImg from "@/assets/ChatGPT Image Feb 3, 2026, 11_57_16 AM.png";
import printingImg from "@/assets/capability-printing.jpg";
import laminationImg from "@/assets/ChatGPT Image Feb 3, 2026, 11_58_48 AM.png";
import convertingImg from "@/assets/capability-converting.jpg";
import standupPouches from "@/assets/ChatGPT Image Feb 3, 2026, 11_52_21 AM.png";
import rollstock from "@/assets/ChatGPT Image Jan 29, 2026, 03_56_26 PM.png";
import sachets from "@/assets/product-sachets.jpg";
import highBarrier from "@/assets/ChatGPT Image Feb 5, 2026, 03_39_58 PM.png";
import innofood from "@/assets/GRNR-Protein-GR-0049-02-032-55g-CA_Front.webp";
import Dubai from "@/assets/3.6OZLTO_DUBAI-FRONT_comp.webp";
import caramel from "@/assets/BequetSmores_6492c9eb-ac62-4dc7-8485-47e6adeaa01a.webp";
import ReadyMadePouches from "@/assets/Poucheshome.png";
import Machine from "@/assets/ChatGPT Image Feb 5, 2026, 03_04_58 PM.png";
import openvid from "@/assets/Five star flexible website Vid.mp4";

// Add your company logos here:
// Using public paths for easier management
// Just add the filename from /src/assets/


const filmTypes = [
  { name: "Ready Made Pouches", image: ReadyMadePouches },
  { name: "Roll Stock", image: highBarrier },
  { name: "Lidding Film", image: standupPouches },
  { name: "Shrink Sleeves", image: rollstock },
  { name: "Thermoform Film", image: sachets },
];

const capabilities = [
  { title: "Extrusion", image: extrusionImg },
  { title: "Lamination", image: laminationImg },
  { title: "Printing", image: printingImg },
  { title: "Converting", image: convertingImg },
];

const stats = [
  { value: "99.5%", label: "On-Time Delivery" },
  { value: "200+", label: "Global Customers" },
  { value: "30+", label: "Years Experience" },
];

const trustedCompanies = [
  { id: 1, name: "Gefen", logo: "/src/assets/gefen.png" },
  { id: 2, name: "Kellogs", logo: "/src/assets/kellogs.png" },
  { id: 3, name: "Pop Corners", logo: "/src/assets/popcorners.png" },
  { id: 4, name: "Beechnut", logo: "/src/assets/beechnut.png" },
  { id: 5, name: "Manischewitz", logo: "/src/assets/manischewitz.png" },
  { id: 6, name: "Ricola", logo: "/src/assets/ricola.png" },
  { id: 7, name: "Sellon", logo: "/src/assets/sellon.png" },
  { id: 8, name: "Weight Watchers", logo: "/src/assets/weightwatchers.png" },
  { id: 9, name: "Wyn", logo: "/src/assets/wyn.png" },
];

// OUR_WORK_ITEMS imported from src/data/ourWork

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryRef = useRef<HTMLDivElement | null>(null);
  const isInteractingRef = useRef(false);
  const pauseTimeoutRef = useRef<number | null>(null);
  const autoIntervalRef = useRef<number | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Pause auto-scroll for a short duration after user interaction
  const pauseAutoScroll = (ms = 2000) => {
    isInteractingRef.current = true;
    if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = window.setTimeout(() => {
      isInteractingRef.current = false;
    }, ms);
  };

  useEffect(() => {
    const el = galleryRef.current;
    if (!el) return;

    const getStep = () => {
      const first = el.children[0] as HTMLElement | undefined;
      const gap = parseInt(getComputedStyle(el).gap || '24', 10) || 24;
      return first ? first.clientWidth + gap : Math.round(el.clientWidth / 3);
    };

    const tick = () => {
      if (!isInteractingRef.current) {
        const step = getStep();
        el.scrollBy({ left: step, behavior: 'smooth' });

        // After smooth scroll, correct position if needed (half-width duplication)
        setTimeout(() => {
          const half = el.scrollWidth / 2;
          if (el.scrollLeft >= half) {
            el.scrollLeft -= half;
          }
        }, 600);
      }
    };

    // start auto-scroll every 2s
    autoIntervalRef.current = window.setInterval(tick, 2000);

    const onPointerDown = () => { isInteractingRef.current = true; if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current); };
    const onPointerUp = () => { pauseAutoScroll(); };
    const onScroll = () => { pauseAutoScroll(); };

    el.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    el.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      if (autoIntervalRef.current) window.clearInterval(autoIntervalRef.current as number);
      el.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerup', onPointerUp);
      el.removeEventListener('scroll', onScroll as EventListenerOrEventListenerObject);
      if (pauseTimeoutRef.current) window.clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  // Attempt to play hero video programmatically; fallback to first touch on mobile
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const tryPlay = () => {
      const p = vid.play();
      if (p && typeof p.then === 'function') {
        p.then(() => setIsPlaying(true)).catch(() => {
          const onFirstTouch = () => {
            vid.play().then(() => setIsPlaying(true)).catch(() => {});
            window.removeEventListener('touchstart', onFirstTouch);
          };
          window.addEventListener('touchstart', onFirstTouch, { passive: true });
        });
      }
    };

    const id = window.setTimeout(tryPlay, 300);
    return () => {
      window.clearTimeout(id);
    };
  }, []);

  return (
    <main className="overflow-hidden">
          {/* Hero */}
          <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background video */}
              <div className="absolute inset-0">
              <video
                ref={videoRef}
                src={openvid}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                style={{ aspectRatio: '16/9', minHeight: '100%', minWidth: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                allow="autoplay; encrypted-media"
              />
              {!isPlaying && (
                <div className="absolute inset-0 flex items-end justify-center pb-8 sm:hidden" style={{ zIndex: 5 }}>
                  <button
                    onClick={() => {
                      const v = videoRef.current;
                      if (!v) return;
                      v.play().then(() => setIsPlaying(true)).catch(() => {});
                    }}
                    className="bg-white/90 text-primary p-3 rounded-full shadow-md"
                    aria-label="Play hero video"
                  >
                    ▶
                  </button>
                </div>
              )}
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
                  <Button variant="outline" size="lg" className="rounded-full px-8 border-white/20 text-primary hover:bg-white/10 hover:text-white">
                    Our Capabilities
                  </Button>
                </Link>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="translate-y-50"></div>
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                  <motion.div
                    className="w-1 h-2 bg-white/50 rounded-full"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  />
                </div>
              </motion.div>
            </div>
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
                  <p className="text-2xl sm:text-4xl md:text-5xl font-semibold text-accent">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Removed: Our Process and Capabilities sections per request */}

      

      

      

      

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <motion.div className="text-center mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-[#f0b61b] text-sm font-large mb-2">How It Works</p>
            <h2 className="text-4xl md:text-5xl font-semibold mb-6">Four simple steps to reliable packaging</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-3">We keep the process predictable and low-risk so your brand can move confidently.</p>
          </motion.div>
          <motion.div className="mb-5 md:mb-20"></motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          >
            <motion.div className="p-6 rounded-lg bg-slate-50" variants={fadeUp}>
              <div className="flex items-center gap-4">
                <div className="flex-none w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-semibold">1</div>
                <div>
                  <h3 className="text-lg font-semibold">Consultation</h3>
                  <p className="text-sm text-muted-foreground mt-1">We learn your product, volume, materials and business goals.</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="p-6 rounded-lg bg-slate-50" variants={fadeUp}>
              <div className="flex items-center gap-4">
                <div className="flex-none w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-semibold">2</div>
                <div>
                  <h3 className="text-lg font-semibold">Design & Material Selection</h3>
                  <p className="text-sm text-muted-foreground mt-1">We recommend the right structure, films and print options for performance and cost.</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="p-6 rounded-lg bg-slate-50" variants={fadeUp}>
              <div className="flex items-center gap-4">
                <div className="flex-none w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-semibold">3</div>
                <div>
                  <h3 className="text-lg font-semibold">Production</h3>
                  <p className="text-sm text-muted-foreground mt-1">In-house manufacturing with strict quality control and dependable lead times.</p>
                </div>
              </div>
            </motion.div>

            <motion.div className="p-6 rounded-lg bg-slate-50" variants={fadeUp}>
              <div className="flex items-center gap-4">
                <div className="flex-none w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-semibold">4</div>
                <div>
                  <h3 className="text-lg font-semibold">Delivery</h3>
                  <p className="text-sm text-muted-foreground mt-1">On-time delivery with clear communication every step of the way.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quality & Compliance - Revised: Large image + bullets */}
      <section className="py-12 bg-white">
        <div className="container-wide">
          <motion.div className="text-center mb-4" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-[#f0b61b] text-sm font-medium mb-2">Quality & Compliance</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-2">Built for consistency — reliable manufacturing standards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Quality is built into every step of the process — from material selection to final inspection.</p>
          </motion.div>

          <motion.div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp}>
            <motion.div className="rounded-2xl h-64 md:h-[420px] lg:h-[520px] bg-white" variants={fadeUp}>
              <img src={Machine} alt="Quality inspection" className="w-full h-full object-contain" />
            </motion.div>

            <motion.div variants={fadeUp}>
              <p className="text-lg text-foreground/90">We combine rigorous process controls with validated materials and continuous inspection to ensure consistent, compliant production at scale.</p>

              <ul className="mt-6 space-y-5 text-foreground">
                <li className="flex gap-4">
                  <span className="flex-none w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center">
                    <Factory className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">Controlled manufacturing processes</p>
                    <p className="text-sm text-muted-foreground mt-1">Standardized procedures and clear KPIs for repeatable results.</p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex-none w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center">
                    <Layers className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">Material traceability & supplier verification</p>
                    <p className="text-sm text-muted-foreground mt-1">End-to-end traceability and supplier audits support regulatory needs.</p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex-none w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center">
                    <CheckCircle className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">Compliance-ready, food-contact safe materials</p>
                    <p className="text-sm text-muted-foreground mt-1">Materials selected and validated against relevant standards.</p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <span className="flex-none w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center">
                    <Target className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">Inspection & quality checks throughout production</p>
                    <p className="text-sm text-muted-foreground mt-1">Inline and final inspections to catch deviations early and preserve consistency.</p>
                  </div>
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-md text-sm">✓ ISO 9001 aligned</span>
                <span className="inline-flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-md text-sm">⚕ Food-contact material validation</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Without Compromise */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div>
              <motion.div className="text-left mb-4" variants={fadeUp}>
                <p className="text-[#f0b61b] text-sm font-medium mb-2">Sustainability</p>
                <h2 className="text-4xl md:text-5xl font-semibold mb-6">Sustainability Without Compromise</h2>
                <p className="text-muted-foreground max-w-2xl mt-3">Practical, manufacturable choices that reduce impact without trading protection or cost.</p>
              </motion.div>

              <motion.div className="grid grid-cols-1 gap-4 mt-6" variants={fadeUp}>
                <div className="flex items-start gap-3">
                  <div className="flex-none w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center">
                    <Layers className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Recyclable & mono-material</h4>
                    <p className="text-sm text-muted-foreground mt-1">We favor mono-material stacks and validated film constructions to enable recycling where performance allows.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-none w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Lightweighting</h4>
                    <p className="text-sm text-muted-foreground mt-1">Reduce film gauge and remove non‑essential layers to cut material and transport footprint without losing barrier performance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-none w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">PCR & recycled content</h4>
                    <p className="text-sm text-muted-foreground mt-1">We offer PCR blends and verified recycled content where supply and product requirements align.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-none w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Compliance & material support</h4>
                    <p className="text-sm text-muted-foreground mt-1">Material validation and regulatory guidance to ensure manufacturability and supply continuity in production.</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div className="rounded-2xl bg-white h-96 md:h-[520px] lg:h-[640px] flex items-center justify-center" variants={fadeUp}>
              <img src={highBarrier} alt="Sustainable materials" className="w-full h-full object-contain" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      {/* Our Work - Horizontal Carousel */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          {/* Trusted By (full-bleed) */}
          <div style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw' }}>
            <section className="py-12 bg-white">
              <div className="container-wide">
                <motion.div 
                  className="text-center mb-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <p className="text-[#f0b61b] text-sm font-large mb-2">Trusted by </p>
                  <h2 className="text-[#082a44] md:text-5xl font-semibold mb-6">Industry Leaders</h2>
                </motion.div>
                <motion.div className="mb-5 md:mb-20"></motion.div>


                <motion.div 
                  className="grid grid-cols-3 md:grid-cols-3 gap-8 items-center grid-rows-3"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
                >
                  {trustedCompanies.map((company) => (
                    <motion.div 
                      key={company.id}
                      variants={fadeUp}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                    className="flex items-center justify-center h-28 rounded-lg bg-transparent"
                    >
                      {typeof company.logo === "string" && company.logo.includes("/") ? (
                      <img src={company.logo} alt={company.name} className="h-20 object-contain" />
                      ) : (
                        <span className="text-lg font-bold text-accent">{company.logo}</span>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </section>
          </div>
          <motion.div className="mb-24 md:mb-32"></motion.div>

          <motion.div className="text-center mb-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-[#f0b61b] text-sm font-medium mb-2">Our Work</p>
            <h2 className="text-[#082a44] md:text-5xl font-semibold mb-6">Printed. Produced. Delivered.</h2>
          </motion.div>
          <motion.div className="mb-5 md:mb-20"></motion.div>

          <motion.div className="relative" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.06 } } }}>
            {/* Full-bleed gallery - headline above remains constrained */}
            <div className="w-full overflow-hidden" style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw' }}>
              <div className="relative">
                {/* Left arrow */}
                <div className="absolute left-6 top-1/2 -translate-y-1/2 z-50">
                  <button
                    aria-label="Scroll left"
                    onClick={() => {
                      const el = galleryRef.current;
                      if (!el) return;
                      const first = el.children[0] as HTMLElement | undefined;
                      const gap = parseInt(getComputedStyle(el).gap || '24', 10) || 24;
                      const step = first ? (first.clientWidth + gap) * 3 : el.clientWidth * 1.5;
                      el.scrollBy({ left: -step, behavior: 'smooth' });
                    }}
                    className="bg-white/95 hover:bg-white rounded-full p-3 shadow-lg ring-1 ring-black/5"
                  >
                    <ArrowLeft className="h-5 w-5 text-primary" />
                  </button>
                </div>

                {/* Right arrow */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 z-50">
                  <button
                    aria-label="Scroll right"
                    onClick={() => {
                      const el = galleryRef.current;
                      if (!el) return;
                      const first = el.children[0] as HTMLElement | undefined;
                      const gap = parseInt(getComputedStyle(el).gap || '24', 10) || 24;
                      const step = first ? first.clientWidth + gap : Math.round(el.clientWidth / 3);
                      el.scrollBy({ left: step, behavior: 'smooth' });
                    }}
                    className="bg-white/95 hover:bg-white rounded-full p-3 shadow-lg ring-1 ring-black/5"
                  >
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </button>
                </div>

                {/* Edge-to-edge carousel strip */}
                <div
                  ref={galleryRef}
                  className="no-scrollbar overflow-x-auto scroll-smooth flex gap-6 py-8 px-6"
                  style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {[...OUR_WORK_ITEMS, ...OUR_WORK_ITEMS].map((item, idx) => (
                    <div key={idx} className={`${item.bg} flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-64 sm:h-72 md:h-80 rounded-2xl flex items-center justify-center`}>
                      <img src={item.image} alt={`work-${idx}`} className="max-w-full max-h-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
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
