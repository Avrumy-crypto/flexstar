import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Factory, Layers, Printer, Settings, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

// Import images
import extrusionImg from "@/assets/capability-extrusion.jpg";
import printingImg from "@/assets/capability-printing.jpg";
import laminationImg from "@/assets/capability-lamination.jpg";
import convertingImg from "@/assets/capability-converting.jpg";

const capabilities = [
  {
    id: "extrusion",
    icon: Factory,
    title: "Extrusion",
    subtitle: "Film Production",
    description: "Our state-of-the-art blown film extrusion lines produce consistent, high-quality films with precise thickness control and excellent barrier properties. We utilize advanced coextrusion technology to create multi-layer structures optimized for specific barrier and performance requirements.",
    longDescription: "Our extrusion capabilities represent the foundation of our manufacturing excellence. With multiple blown film lines operating continuously, we can produce films ranging from simple monolayer PE structures to complex 7-layer coextruded films incorporating advanced barrier materials. Our equipment features real-time thickness monitoring, automatic gauge control, and in-line corona treatment for enhanced adhesion. We're equipped to handle the full spectrum of thermoplastic materials including PE, PP, PA, EVOH, and specialty tie layers.",
    image: extrusionImg,
    processes: [
      "Monolayer Blown Film",
      "3-Layer Coextrusion",
      "5-Layer Coextrusion",
      "7-Layer Coextrusion",
      "Cast Film Extrusion",
      "Barrier Film Production",
      "Recyclable Film Extrusion",
    ],
    specifications: [
      { label: "Film Width", value: "Up to 2500mm" },
      { label: "Thickness Range", value: "20-250 microns" },
      { label: "Output Capacity", value: "500+ tons/month" },
      { label: "Maximum Line Speed", value: "Up to 400 m/min" },
      { label: "Materials Supported", value: "PE, PP, PA, EVOH, Tie Layers" },
      { label: "Gauge Tolerance", value: "±3%" },
    ],
    features: [
      "Automatic gauge control for ±3% tolerance",
      "In-line corona treatment capability",
      "Real-time thickness monitoring systems",
      "Barrier layer integration for high-barrier films",
      "High-clarity optical properties",
      "Multiple resin feeder systems",
      "Advanced temperature control zones",
      "Continuous quality monitoring",
    ],
    advantages: [
      "Superior dimensional consistency",
      "Cost-effective barrier solutions",
      "Fast material changeovers",
      "Flexible grade combinations",
      "Optimized for high-speed converting",
    ],
  },
  {
    id: "lamination",
    icon: Layers,
    title: "Lamination",
    subtitle: "Multi-Layer Bonding",
    description: "Multiple lamination technologies enable us to create optimized multi-layer structures that meet the most demanding barrier and performance requirements. From solventless to adhesive-based lamination, we deliver superior bond strength and structural integrity.",
    longDescription: "Our lamination facilities represent the pinnacle of bonding technology. We offer multiple lamination platforms including solventless extrusion lamination for food-grade applications, adhesive lamination for complex structures, and dry lamination for specialty substrates. Each process is optimized for specific applications and performance requirements. Our operators are certified in quality control procedures including peel testing, bond strength verification, and adhesion testing.",
    image: laminationImg,
    processes: [
      "Adhesive Lamination",
      "Extrusion Lamination", 
      "Solventless Lamination",
      "Dry Lamination",
      "Wax Lamination",
      "Hot Melt Lamination",
      "Reverse Lamination",
    ],
    specifications: [
      { label: "Web Width", value: "Up to 1600mm" },
      { label: "Line Speed", value: "Up to 450 m/min" },
      { label: "Bond Strength", value: ">4 N/15mm" },
      { label: "Film Thickness Range", value: "10-200 microns" },
      { label: "Layer Combinations", value: "2-5 layer structures" },
      { label: "Adhesive Options", value: "Multiple chemistries available" },
    ],
    features: [
      "Solventless technology for food safety",
      "Precise tension control throughout process",
      "Low residual solvent levels (<5 mg/m²)",
      "High-barrier aluminum foil lamination",
      "Paper and specialty substrate bonding",
      "Film-to-film lamination capability",
      "Automated adhesive dispensing systems",
      "Real-time bond strength monitoring",
    ],
    advantages: [
      "Enhanced barrier properties",
      "Superior structural integrity",
      "Reduced material waste",
      "Food-safe processing options",
      "Excellent adhesion consistency",
    ],
  },
  {
    id: "printing",
    icon: Printer,
    title: "Printing",
    subtitle: "High-Quality Graphics",
    description: "Advanced printing technologies deliver photorealistic graphics with vibrant colors, precise registration, and consistent quality across entire production runs. Our printing capabilities include flexographic and rotogravure processes with state-of-the-art registration systems.",
    longDescription: "Our printing capabilities showcase cutting-edge technology combined with decades of expertise. We operate both flexographic and rotogravure presses, each offering unique advantages for different applications. Our HD flexo technology delivers photorealistic quality with vibrant colors, while our rotogravure equipment provides exceptional print definition for fine details. Every press is equipped with 100% print inspection systems, automated color matching, and precision registration controls to ensure consistency throughout production runs.",
    image: printingImg,
    processes: [
      "Flexographic Printing",
      "Rotogravure Printing",
      "Digital Printing",
      "Reverse Printing",
      "Surface Printing",
      "In-Line Coating",
      "Varnishing and Laminating",
    ],
    specifications: [
      { label: "Print Width", value: "Up to 1400mm" },
      { label: "Color Capability", value: "Up to 10 colors" },
      { label: "Registration Accuracy", value: "±0.15mm" },
      { label: "Print Resolution", value: "Up to 175 LPI" },
      { label: "Line Speed", value: "Up to 500 m/min" },
      { label: "Ink Systems", value: "Solvent and Water-based" },
    ],
    features: [
      "HD flexo for photorealistic quality",
      "Extended color gamut printing",
      "Metallic and specialty ink capability",
      "In-line coating and varnishing",
      "100% print inspection systems",
      "Automated color density control",
      "Precision registration systems",
      "Advanced waste reduction systems",
    ],
    advantages: [
      "Superior brand presentation",
      "Consistent color reproduction",
      "Fast job changeovers",
      "High production efficiency",
      "Excellent print clarity",
    ],
  },
  {
    id: "converting",
    icon: Settings,
    title: "Converting",
    subtitle: "Finishing Operations",
    description: "Comprehensive converting capabilities transform printed films into finished packaging formats ready for your filling lines. Our converting operations handle everything from slitting and rewinding to custom pouch making in various formats.",
    longDescription: "Converting is the critical final step where master rolls transform into finished packaging ready for your production lines. Our state-of-the-art converting equipment handles the full range of finishing operations with precision and efficiency. We can produce ready-made pouches in multiple formats, handle complex slitting requirements, and provide specialized finishing for unique applications. Our quality control systems ensure every finished piece meets exact specifications for dimension, seal integrity, and appearance.",
    image: convertingImg,
    processes: [
      "Slitting & Rewinding",
      "Pouch Making (Stand-Up)",
      "Bag Converting",
      "Roll Inspection",
      "Core Changes (ID/OD)",
      "Edge Trimming",
      "Custom Pouch Formats",
    ],
    specifications: [
      { label: "Slitting Width Range", value: "20mm - 1600mm" },
      { label: "Pouch Size Range", value: "50mm - 500mm" },
      { label: "Production Speed", value: "Up to 300 ppm" },
      { label: "Dimensional Tolerance", value: "±0.5mm" },
      { label: "Maximum Roll Diameter", value: "1500mm" },
      { label: "Seal Strength Range", value: "Customizable" },
    ],
    features: [
      "Tension-controlled rewinding systems",
      "Automated roll inspection and splicing",
      "Pre-made pouch converting capability",
      "Stand-up pouch converting",
      "Flat bottom pouch converting",
      "Gusseted pouch production",
      "Automated quality verification",
      "Edge seal and trim capabilities",
    ],
    advantages: [
      "Complete finishing solutions",
      "High-speed production capability",
      "Exceptional dimensional accuracy",
      "Multiple pouch format support",
      "Reduced waste in converting",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function CapabilitiesPage() {
  const [isNearHeader, setIsNearHeader] = useState(false);
  const [activeTab, setActiveTab] = useState("extrusion");
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash && ["extrusion", "lamination", "printing", "converting"].includes(hash)) {
      setActiveTab(hash);
    }
  }, [location.hash]);

  useEffect(() => {
    const handleScroll = () => {
      const capabilitiesSection = document.querySelector('[data-capabilities-section]');
      if (capabilitiesSection) {
        const rect = capabilitiesSection.getBoundingClientRect();
        setIsNearHeader(rect.top < 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Manufacturing Excellence</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6">
              Our Capabilities
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Vertically integrated manufacturing with state-of-the-art equipment enables us to control quality at every stage—from raw resin to finished packaging.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities Tabs */}
      <section className="py-16 lg:py-24" data-capabilities-section>
        <div className="container-wide">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            {/* Tab List */}
            <div className={`sticky z-50 flex justify-center transition-all duration-300 ${isNearHeader ? 'top-[60px] py-2' : 'top-0 py-4'}`}>
              <TabsList className={`grid grid-cols-4 gap-2 bg-transparent p-0 h-auto transition-all duration-300 ${isNearHeader ? 'max-w-sm' : 'w-full max-w-2xl'}`}>
                {capabilities.map((cap) => {
                  const Icon = cap.icon;
                  return (
                    <TabsTrigger
                      key={cap.id}
                      value={cap.id}
                      className={`flex flex-col items-center gap-2 px-4 py-3 data-[state=active]:text-accent hover:text-accent transition-all ${isNearHeader ? 'px-2 py-2' : ''}`}
                    >
                      <Icon className="h-5 w-5 shrink-0" />
                      {!isNearHeader && <span className="text-xs font-semibold">{cap.title}</span>}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {/* Tab Contents */}
            {capabilities.map((cap) => (
              <TabsContent key={cap.id} value={cap.id} className="space-y-12 mt-12">
                {/* Header Section */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg bg-accent/10 flex items-center justify-center">
                      <cap.icon className="h-8 w-8 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-accent">{cap.subtitle}</p>
                      <h2 className="text-4xl md:text-5xl font-black">{cap.title}</h2>
                    </div>
                  </div>
                </motion.div>

                {/* Main Content Grid */}
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  transition={{ delay: 0.1 }}
                  className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
                >
                  {/* Image Section */}
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Description Section */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Overview</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{cap.description}</p>
                      <p className="text-muted-foreground leading-relaxed">{cap.longDescription}</p>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      {cap.specifications.slice(0, 4).map((spec) => (
                        <div key={spec.label}>
                          <p className="text-xs text-muted-foreground font-semibold mb-1">{spec.label}</p>
                          <p className="font-bold text-accent">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Processes Section */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-6">Processes & Capabilities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {cap.processes.map((process) => (
                      <div
                        key={process}
                        className="px-4 py-3 rounded-lg bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors font-medium text-sm"
                      >
                        {process}
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Specifications & Features Grid */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: 0.3 }}
                  className="grid lg:grid-cols-2 gap-8"
                >
                  {/* Full Specifications */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
                    <div className="space-y-4">
                      {cap.specifications.map((spec) => (
                        <div key={spec.label} className="border-l-4 border-accent pl-4 py-2">
                          <p className="text-xs text-muted-foreground font-semibold mb-1">{spec.label}</p>
                          <p className="font-bold text-lg">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="text-2xl font-bold mb-6">Key Features</h3>
                    <ul className="space-y-3">
                      {cap.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                          <span className="font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                {/* Advantages Section */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: 0.4 }}
                  className="bg-secondary rounded-lg p-8"
                >
                  <h3 className="text-2xl font-bold mb-6">Why Choose Our {cap.title}?</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {cap.advantages.map((advantage) => (
                      <div key={advantage} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                        <span className="font-medium">{advantage}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Quality Control</p>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Integrated Quality Assurance
            </h2>
            <p className="text-primary-foreground/70">
              Every stage of our manufacturing process incorporates rigorous quality controls and testing protocols.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Incoming Materials", items: ["Supplier certification", "COA verification", "Visual inspection", "Retention samples"] },
              { title: "In-Process Control", items: ["Real-time monitoring", "Statistical process control", "Automatic adjustments", "Operator checkpoints"] },
              { title: "Final Inspection", items: ["100% visual inspection", "Dimensional verification", "Seal strength testing", "Print quality audit"] },
              { title: "Documentation", items: ["Full traceability", "Batch records", "Test certificates", "Compliance documentation"] },
            ].map((stage) => (
              <div key={stage.title} className="bg-primary-foreground/5 rounded-lg p-6 border border-primary-foreground/10">
                <h3 className="font-bold mb-4">{stage.title}</h3>
                <ul className="space-y-2">
                  {stage.items.map((item) => (
                    <li key={item} className="text-sm text-primary-foreground/70 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
