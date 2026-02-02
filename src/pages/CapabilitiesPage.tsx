import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Factory, Layers, Printer, Settings, CheckCircle } from "lucide-react";

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
  },
  {
    id: "lamination",
    icon: Layers,
    title: "Lamination",
    subtitle: "Multi-Layer Bonding",
    description: "Multiple lamination technologies enable us to create optimized multi-layer structures that meet the most demanding barrier and performance requirements.",
    image: laminationImg,
    processes: [
      "Adhesive Lamination",
      "Extrusion Lamination", 
      "Solventless Lamination",
      "Dry Lamination",
      "Wax Lamination",
    ],
    specifications: [
      { label: "Web Width", value: "Up to 1600mm" },
      { label: "Line Speed", value: "Up to 450 m/min" },
      { label: "Bond Strength", value: ">4 N/15mm" },
      { label: "Structures", value: "2-5 layer combinations" },
    ],
    features: [
      "Solventless technology for food safety",
      "Precise tension control throughout process",
      "Low residual solvent levels (<5 mg/m²)",
      "High-barrier aluminum foil lamination",
      "Paper and specialty substrate bonding",
    ],
  },
  {
    id: "printing",
    icon: Printer,
    title: "Printing",
    subtitle: "High-Quality Graphics",
    description: "Advanced printing technologies deliver photorealistic graphics with vibrant colors, precise registration, and consistent quality across entire production runs.",
    image: printingImg,
    processes: [
      "Flexographic Printing",
      "Rotogravure Printing",
      "Digital Printing",
      "Reverse Printing",
      "Surface Printing",
    ],
    specifications: [
      { label: "Print Width", value: "Up to 1400mm" },
      { label: "Colors", value: "Up to 10 colors" },
      { label: "Registration", value: "±0.15mm" },
      { label: "Resolution", value: "Up to 175 LPI" },
    ],
    features: [
      "HD flexo for photorealistic quality",
      "Extended color gamut printing",
      "Metallic and specialty inks",
      "In-line coating and varnishing",
      "100% print inspection systems",
    ],
  },
  {
    id: "converting",
    icon: Settings,
    title: "Converting",
    subtitle: "Finishing Operations",
    description: "Comprehensive converting capabilities transform printed films into finished packaging formats ready for your filling lines.",
    image: convertingImg,
    processes: [
      "Slitting & Rewinding",
      "Pouch Making",
      "Bag Converting",
      "Roll Inspection",
      "Core Changes (ID/OD)",
    ],
    specifications: [
      { label: "Slitting Width", value: "20mm - 1600mm" },
      { label: "Pouch Sizes", value: "50mm - 500mm" },
      { label: "Speed", value: "Up to 300 ppm" },
      { label: "Tolerance", value: "±0.5mm" },
    ],
    features: [
      "Tension-controlled rewinding",
      "Roll inspection and splicing",
      "Pre-made pouch converting",
      "Stand-up pouch converting",
      "Flat bottom pouch converting",
    ],
  },
];

export default function CapabilitiesPage() {
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

      {/* Capabilities Detail */}
      <section className="py-16 lg:py-24">
        <div className="container-wide space-y-24">
          {capabilities.map((cap, index) => (
            <div key={cap.id} id={cap.id} className="scroll-mt-32">
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${index % 2 === 1 ? "" : ""}`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                    <img
                      src={cap.image}
                      alt={cap.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded bg-accent/10 flex items-center justify-center">
                      <cap.icon className="h-7 w-7 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-accent">{cap.subtitle}</p>
                      <h2 className="text-3xl md:text-4xl font-black">{cap.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {cap.description}
                  </p>

                  {/* Processes */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                      Processes
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {cap.processes.map((process) => (
                        <span
                          key={process}
                          className="text-sm px-4 py-2 rounded bg-secondary font-medium"
                        >
                          {process}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specifications */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                      Specifications
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {cap.specifications.map((spec) => (
                        <div key={spec.label} className="border-l-2 border-accent pl-4">
                          <p className="text-xs text-muted-foreground">{spec.label}</p>
                          <p className="font-bold">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {cap.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
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

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="bg-secondary rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              Tour Our Facility
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              See our manufacturing capabilities firsthand. Schedule a facility tour with our engineering team.
            </p>
            <Link to="/contact">
              <Button variant="industrial" size="lg">
                Schedule a Tour
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
