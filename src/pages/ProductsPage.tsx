import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

// Import images
import standupPouches from "@/assets/product-standup-pouches.jpg";
import rollstock from "@/assets/product-rollstock.jpg";
import sachets from "@/assets/product-sachets.jpg";
import highBarrier from "@/assets/product-high-barrier.jpg";
import recyclable from "@/assets/product-recyclable.jpg";
import laminationImg from "@/assets/capability-lamination.jpg";

const filmTypes = [
  {
    name: "Thermoform Film",
    slug: "thermoform-film",
    description: "High-performance forming films for vacuum and MAP packaging applications. Designed for consistent thermoforming behavior with excellent clarity and seal integrity.",
    image: laminationImg,
    categories: ["Forming Film", "Non-Forming Film"],
    features: ["Deep draw capability", "Consistent thickness distribution", "Excellent optical clarity", "Superior seal strength", "Puncture resistance"],
    applications: ["Fresh meat packaging", "Cheese portions", "Ready meals", "Medical device trays"],
    materials: ["Nylon/PE", "PET/PE", "Multilayer EVOH structures", "High-barrier laminates"],
  },
  {
    name: "Shrink Bands & Sleeves",
    slug: "shrink-bands-sleeves",
    description: "Full-body and tamper-evident shrink solutions with high shrink ratios and consistent performance. Available in standard and high-barrier configurations.",
    image: highBarrier,
    categories: ["Shrink Bands", "Shrink Sleeves"],
    features: ["High shrink force", "Low shrink temperature", "Perforated tear lines", "360° coverage", "Tamper-evident options"],
    applications: ["Beverage labeling", "Tamper evidence", "Multi-pack bundling", "Product protection"],
    materials: ["PVC", "PETG", "OPS", "PLA"],
  },
  {
    name: "Pouches",
    slug: "pouches",
    description: "Complete range of pre-made pouches including stand-up, flat bottom, retort, and vacuum configurations. Custom sizes and features available.",
    image: standupPouches,
    categories: ["Stand-Up Pouch", "Flat Bottom Pouch", "Retort Pouch", "Vacuum Pouch"],
    features: ["Zipper closures", "Spout fitments", "Easy-peel seals", "Hang holes", "Tear notches", "Degassing valves"],
    applications: ["Snack foods", "Coffee", "Pet food", "Ready meals", "Sauces and condiments"],
    materials: ["PET/PE", "Nylon/PE", "Kraft/PE", "Foil laminates", "Recyclable mono-PE"],
  },
  {
    name: "Roll Stock",
    slug: "rollstock",
    description: "Continuous film rolls for VFFS, HFFS, and thermoforming equipment. Precision wound with consistent tension and registration marks.",
    image: rollstock,
    categories: ["VFFS Film", "HFFS Film", "Thermoform Base", "Lidding Base"],
    features: ["Precise gauge control", "Registration printing", "Cold seal options", "Anti-static treatment", "High-slip surfaces"],
    applications: ["Snack packaging", "Confectionery wrapping", "Cheese slices", "Fresh produce"],
    materials: ["BOPP", "CPP", "PE", "Metallized films", "Paper laminates"],
  },
  {
    name: "Lidding Film",
    slug: "lidding-film",
    description: "Peelable and non-peelable lidding solutions for tray sealing applications. Engineered for reliable seal performance and controlled peel characteristics.",
    image: sachets,
    categories: ["Peelable Lidding", "Peel & Reseal", "Anti-Fog Lidding", "High-Barrier Lidding"],
    features: ["Easy-peel technology", "Peel & reseal coatings", "Anti-fog properties", "Laser scored lines", "Micro-vent options"],
    applications: ["Fresh meat trays", "Produce containers", "Ready meals", "Dairy products"],
    materials: ["PET/PE", "APET/PE", "High-barrier EVOH", "Metallized structures"],
  },
];

const sealTypes = [
  "Easy-Peel Seal",
  "Lock-Seal (Permanent)",
  "Peel-Reseal",
  "Weld Seal",
  "Multi-Peel Systems",
  "Hermetic Seal",
  "Snap-Peel Technology",
  "Dual-Zone Seal",
];

const printFinishes = [
  "Matte Lamination",
  "Gloss Lamination", 
  "Soft-Touch Matte",
  "Registered Matte/Gloss",
  "Metallic Effects",
  "Spot Varnish",
  "Reverse Printing",
  "Flexographic",
  "Rotogravure",
  "Digital Printing",
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
              Film Types & Packaging Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              A comprehensive range of flexible packaging films engineered for performance, protection, and shelf appeal. Each product line is customizable to your exact specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-wide space-y-20">
          {filmTypes.map((product, index) => (
            <div
              key={product.slug}
              id={product.slug}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                index % 2 === 1 ? "" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Film Type</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4">{product.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Product Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.categories.map((cat) => (
                      <span
                        key={cat}
                        className="text-sm px-3 py-1.5 rounded bg-accent/10 text-accent font-medium"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div className="mb-6">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Applications
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app) => (
                      <span
                        key={app}
                        className="text-sm px-3 py-1.5 rounded border border-border"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Materials */}
                <div className="mb-8">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                    Material Options
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.materials.join(" • ")}
                  </p>
                </div>

                <Link to="/contact">
                  <Button variant="cta" size="lg">
                    Request Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
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
                Our advanced sealing technologies provide the right balance of security and convenience for every application.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {sealTypes.map((seal) => (
                  <div key={seal} className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>{seal}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Graphics & Finishes</p>
              <h2 className="text-3xl font-black mb-6">Print & Finishes</h2>
              <p className="text-primary-foreground/70 mb-6">
                Premium print quality and finishing options to maximize shelf impact and brand recognition.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {printFinishes.map((finish) => (
                  <div key={finish} className="flex items-center gap-2 text-sm">
                    <span className="w-2 h-2 rounded-full bg-accent" />
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
              <Button variant="industrial" size="lg">
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
