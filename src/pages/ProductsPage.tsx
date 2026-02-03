import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

// Import images
import standupPouches from "@/assets/product-standup-pouches.jpg";
import rollstock from "@/assets/product-rollstock.jpg";
import sachets from "@/assets/product-sachets.jpg";
import highBarrier from "@/assets/product-high-barrier.jpg";
import laminationImg from "@/assets/capability-lamination.jpg";

const products = [
  {
    id: "pouches",
    name: "Pouches",
    description: "Complete range of pre-made pouches including stand-up, flat bottom, retort, and vacuum configurations. Custom sizes, closures, and features available for every application.",
    image: standupPouches,
    subTypes: [
      {
        name: "Stand-Up Pouches",
        description: "Self-standing pouches with bottom gusset for excellent shelf presence",
        features: ["Bottom gusset design", "Multiple closure options", "Custom sizes available"],
      },
      {
        name: "Flat Bottom Pouches",
        description: "Box-style pouches with flat base for maximum stability and capacity",
        features: ["5-panel construction", "Premium shelf appeal", "High fill volumes"],
      },
      {
        name: "Retort Pouches",
        description: "Heat-stable pouches for shelf-stable food products requiring sterilization",
        features: ["High heat resistance", "Extended shelf life", "Aluminum or clear options"],
      },
      {
        name: "Vacuum Pouches",
        description: "Oxygen-barrier pouches for vacuum packaging of fresh and frozen products",
        features: ["High puncture resistance", "Excellent oxygen barrier", "Abuse resistant"],
      },
    ],
    closures: ["Press-to-close zipper", "Slider zipper", "Spout & cap", "Tear notch", "Hang hole"],
    materials: ["PET/PE", "Nylon/PE", "Kraft/PE", "Foil laminates", "Recyclable mono-PE"],
  },
  {
    id: "rollstock",
    name: "Roll Stock",
    description: "Continuous film rolls for VFFS, HFFS, and thermoforming equipment. Precision wound with consistent tension, accurate registration marks, and reliable machine performance.",
    image: rollstock,
    subTypes: [
      {
        name: "VFFS Film",
        description: "Vertical form-fill-seal films for snacks, powders, and granular products",
        features: ["High-speed capability", "Consistent COF", "Registration printing"],
      },
      {
        name: "HFFS Film",
        description: "Horizontal form-fill-seal films for bars, baked goods, and solid products",
        features: ["Cold seal options", "Precise web tracking", "Anti-static treatment"],
      },
      {
        name: "Thermoform Base",
        description: "Forming webs for thermoform-fill-seal packaging systems",
        features: ["Deep draw capability", "Consistent forming", "Multiple gauge options"],
      },
      {
        name: "Lidding Base",
        description: "Non-forming top webs for thermoform packaging applications",
        features: ["Peelable options", "Print quality surface", "Barrier integration"],
      },
    ],
    closures: ["Cold seal coating", "Heat seal coating", "Peelable seal", "Weld seal"],
    materials: ["BOPP", "CPP", "PE", "Metallized films", "Paper laminates"],
  },
  {
    id: "lidding-film",
    name: "Lidding Film",
    description: "Peelable and non-peelable lidding solutions for tray sealing applications. Engineered for reliable seal performance, controlled peel characteristics, and exceptional clarity.",
    image: sachets,
    subTypes: [
      {
        name: "Peelable Lidding",
        description: "Easy-open films with controlled peel force for consumer convenience",
        features: ["Consistent peel force", "Clean separation", "No film tearing"],
      },
      {
        name: "Peel & Reseal",
        description: "Reclosable lidding for multi-use applications and portion control",
        features: ["Multiple open/close cycles", "Maintains seal integrity", "Consumer friendly"],
      },
      {
        name: "Anti-Fog Lidding",
        description: "Clear visibility films that prevent condensation obscuring product view",
        features: ["Crystal clarity", "Fog prevention", "Fresh appearance"],
      },
      {
        name: "High-Barrier Lidding",
        description: "Maximum protection lidding with oxygen and moisture barrier properties",
        features: ["Extended shelf life", "EVOH/foil options", "MAP compatible"],
      },
    ],
    closures: ["Easy-peel", "Lock-seal", "Peel-reseal", "Laser score"],
    materials: ["PET/PE", "APET/PE", "High-barrier EVOH", "Metallized structures"],
  },
  {
    id: "shrink-sleeves",
    name: "Shrink Sleeves",
    description: "Full-body shrink sleeves and tamper-evident bands with high shrink ratios and consistent performance. 360° decoration coverage for maximum brand impact.",
    image: highBarrier,
    subTypes: [
      {
        name: "Full Body Sleeves",
        description: "Complete container coverage for premium branding and product protection",
        features: ["360° graphics", "Complex shapes", "Multi-pack bundling"],
      },
      {
        name: "Partial Body Sleeves",
        description: "Partial coverage sleeves for labeling and decoration",
        features: ["Cost effective", "Easy application", "High impact graphics"],
      },
      {
        name: "Tamper-Evident Bands",
        description: "Security bands that show clear evidence of opening or tampering",
        features: ["Perforated tear lines", "Clear or printed", "Multiple widths"],
      },
      {
        name: "Multi-Pack Sleeves",
        description: "Bundling sleeves for grouping multiple products together",
        features: ["Strong holding force", "Promotional graphics", "Easy removal"],
      },
    ],
    closures: ["Perforated tear", "Die-cut openings", "Easy-open features"],
    materials: ["PVC", "PETG", "OPS", "PLA (compostable)"],
  },
  {
    id: "thermoforming-film",
    name: "Thermoforming Film",
    description: "High-performance forming films for vacuum and MAP packaging applications. Designed for consistent thermoforming behavior with excellent clarity, seal integrity, and barrier properties.",
    image: laminationImg,
    subTypes: [
      {
        name: "Forming Film",
        description: "Bottom web films that form cavities for product placement",
        features: ["Deep draw capability", "Consistent wall distribution", "Multiple thicknesses"],
      },
      {
        name: "Non-Forming Film",
        description: "Top web lidding films for thermoform packaging systems",
        features: ["Excellent optics", "Print receptive", "Barrier options"],
      },
      {
        name: "Skin Pack Film",
        description: "Conforming films that vacuum-form tightly around products",
        features: ["Product contour fit", "Premium presentation", "Excellent protection"],
      },
      {
        name: "MAP Films",
        description: "Modified atmosphere packaging films for extended freshness",
        features: ["Gas flush compatible", "High barrier", "Consistent atmosphere"],
      },
    ],
    closures: ["Peelable seal", "Weld seal", "Modified atmosphere"],
    materials: ["Nylon/PE", "PET/PE", "Multilayer EVOH", "High-barrier laminates"],
  },
];

const sealTypes = [
  "Easy-Peel Seal",
  "Lock-Seal (Permanent)",
  "Peel-Reseal",
  "Weld Seal",
  "Hermetic Seal",
  "Cold Seal",
];

const printFinishes = [
  "Matte Lamination",
  "Gloss Lamination",
  "Soft-Touch Matte",
  "Registered Matte/Gloss",
  "Metallic Effects",
  "Spot Varnish",
];

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Product Portfolio</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6">
              Flexible Packaging Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Five core product categories engineered for performance, protection, and shelf appeal. Each solution is fully customizable to your exact specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="py-6 border-b border-border sticky top-[7.5rem] bg-background z-40">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-2">
            {products.map((product) => (
              <a
                key={product.id}
                href={`#${product.id}`}
                className="px-4 py-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground text-sm font-medium transition-colors"
              >
                {product.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Products Detail */}
      <section className="py-16 lg:py-24">
        <div className="container-wide space-y-24">
          {products.map((product, index) => (
            <div key={product.id} id={product.id} className="scroll-mt-48">
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted sticky top-48">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Product Category</p>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">{product.name}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {product.description}
                  </p>

                  {/* Sub Types */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                      Product Options
                    </h3>
                    <div className="grid gap-4">
                      {product.subTypes.map((subType) => (
                        <div
                          key={subType.name}
                          className="bg-card rounded-lg p-5 border border-border hover:border-accent transition-colors"
                        >
                          <h4 className="font-bold mb-1">{subType.name}</h4>
                          <p className="text-sm text-muted-foreground mb-3">{subType.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {subType.features.map((feature) => (
                              <span
                                key={feature}
                                className="text-xs px-2 py-1 rounded bg-accent/10 text-accent font-medium"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Closures */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                      Closure & Feature Options
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.closures.map((closure) => (
                        <span
                          key={closure}
                          className="text-sm px-3 py-1.5 rounded border border-border"
                        >
                          {closure}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Materials */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                      Material Structures
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {product.materials.join(" • ")}
                    </p>
                  </div>

                  <Link to="/contact">
                    <Button size="lg" className="rounded-full">
                      Request Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seal Types & Print Finishes */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Sealing Technology</p>
              <h2 className="text-3xl font-black mb-6">Seal Types</h2>
              <p className="text-primary-foreground/70 mb-6">
                Advanced sealing technologies provide the right balance of security and convenience.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {sealTypes.map((seal) => (
                  <div key={seal} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>{seal}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Graphics & Finishes</p>
              <h2 className="text-3xl font-black mb-6">Print Finishes</h2>
              <p className="text-primary-foreground/70 mb-6">
                Premium print quality and finishing options to maximize shelf impact.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {printFinishes.map((finish) => (
                  <div key={finish} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>{finish}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="bg-secondary rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our engineering team specializes in developing bespoke packaging structures. Let's discuss your requirements.
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-full">
                Contact Engineering Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
