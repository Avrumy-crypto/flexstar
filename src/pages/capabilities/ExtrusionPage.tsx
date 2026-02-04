import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, CheckCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import extrusionImg from "@/assets/capability-extrusion.jpg";

const extrusionData = {
  id: "extrusion",
  icon: Factory,
  title: "Extrusion",
  subtitle: "Film Production",
  description: "Our state-of-the-art blown film extrusion lines produce consistent, high-quality films with precise thickness control and excellent barrier properties.",
  image: extrusionImg,
  processes: [
    "Monolayer Blown Film",
    "3-Layer Coextrusion",
    "5-Layer Coextrusion",
    "7-Layer Coextrusion",
    "Cast Film Extrusion",
  ],
  specifications: [
    { label: "Film Width", value: "Up to 2500mm" },
    { label: "Thickness Range", value: "20-250 microns" },
    { label: "Output Capacity", value: "500+ tons/month" },
    { label: "Materials", value: "PE, PP, PA, EVOH, Tie Layers" },
  ],
  features: [
    "Automatic gauge control for ±3% tolerance",
    "In-line corona treatment",
    "Real-time thickness monitoring",
    "Barrier layer integration",
    "High-clarity optical properties",
  ],
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function ExtrusionPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container-wide">
          <Link to="/capabilities" className="flex items-center gap-2 text-accent/80 hover:text-accent/60 mb-6 w-fit">
            <ArrowLeft className="h-4 w-4" />
            Back to Capabilities
          </Link>
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent/80 mb-2">{extrusionData.subtitle}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
              {extrusionData.title}
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              {extrusionData.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-20">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-slate-200">
                <img
                  src={extrusionData.image}
                  alt={extrusionData.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="space-y-8"
            >
              {/* Processes */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-4">
                  Processes & Capabilities
                </h3>
                <div className="flex flex-wrap gap-2">
                  {extrusionData.processes.map((process) => (
                    <span
                      key={process}
                      className="text-sm px-4 py-2 rounded-full bg-[#122e54]/10 text-accent font-medium border border-[#122e54]/20"
                    >
                      {process}
                    </span>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-4">
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {extrusionData.specifications.map((spec) => (
                    <div key={spec.label} className="border-l-4 border-blue-600 pl-4 bg-slate-50 p-4 rounded">
                      <p className="text-xs text-slate-600">{spec.label}</p>
                      <p className="font-bold text-slate-900">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-4">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {extrusionData.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Quality Control</p>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Integrated Quality Assurance
            </h2>
            <p className="text-slate-600">
              Every stage of our extrusion process incorporates rigorous quality controls and testing protocols.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Incoming Materials", items: ["Resin certification", "COA verification", "Visual inspection", "Retention samples"] },
              { title: "In-Process Control", items: ["Real-time thickness monitoring", "Gauge control systems", "Automatic adjustments", "Temperature monitoring"] },
              { title: "Final Inspection", items: ["Roll inspection", "Tensile testing", "Barrier properties", "Clarity verification"] },
              { title: "Documentation", items: ["Full traceability", "Batch records", "Test certificates", "Compliance docs"] },
            ].map((stage) => (
              <motion.div
                key={stage.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-slate-900 mb-4">{stage.title}</h3>
                <ul className="space-y-2">
                  {stage.items.map((item) => (
                    <li key={item} className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#122e54]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Capabilities */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl md:text-4xl font-black text-slate-900 mb-12 text-center"
          >
            Other Capabilities
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Lamination", slug: "lamination" },
              { name: "Printing", slug: "printing" },
              { name: "Converting", slug: "converting" },
            ].map((cap, index) => (
              <motion.div
                key={cap.slug}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/capabilities/${cap.slug}`}
                  className="block p-8 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200 hover:border-[#122e54] hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{cap.name}</h3>
                  <div className="flex items-center gap-2 text-accent hover:text-accent/90">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-blue-600">
        <div className="container-wide">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
              Ready to Partner With Us?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our extrusion capabilities can meet your packaging needs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-full bg-white text-blue-600 hover:bg-slate-100">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
