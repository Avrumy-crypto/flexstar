import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import images
import standupPouches from "@/assets/product-standup-pouches.jpg";
import rollstock from "@/assets/product-rollstock.jpg";
import sachets from "@/assets/product-sachets.jpg";
import highBarrier from "@/assets/product-high-barrier.jpg";
import recyclable from "@/assets/product-recyclable.jpg";

const products = [
  {
    name: "Stand-Up Pouches",
    slug: "stand-up-pouches",
    description: "Self-standing pouches with excellent shelf presence and consumer convenience. Available with resealable zippers, spouts, and tear notches.",
    image: standupPouches,
    useCases: ["Snacks & Confectionery", "Coffee & Tea", "Pet Food", "Dried Fruits & Nuts", "Frozen Foods"],
    materials: ["PET/PE", "NY/PE", "Kraft/PE", "Metallized films", "Mono-PE recyclable"],
    specs: [
      "Sizes: 50ml to 5L capacity",
      "Printing: Up to 10 colors rotogravure",
      "Finishes: Matte, gloss, soft-touch",
      "Closures: Zipper, slider, spout, velcro",
    ],
    industries: ["Food & Beverage", "Pet Food", "Coffee", "Household"],
  },
  {
    name: "Flat Pouches",
    slug: "flat-pouches",
    description: "Three-side seal pouches ideal for single-use products, sampling, and cost-effective packaging. Simple yet versatile format.",
    image: standupPouches, // Fallback
    useCases: ["Sample Sachets", "Condiments", "Medical Supplies", "Cosmetic Samples", "Industrial Products"],
    materials: ["PET/PE", "AL/PE", "Paper/PE", "Clear films", "High-barrier laminates"],
    specs: [
      "Sizes: 5ml to 500ml capacity",
      "Printing: Flexographic or rotogravure",
      "Features: Tear notch, hang hole",
      "Sealing: Heat seal, cold seal",
    ],
    industries: ["Pharmaceuticals", "Cosmetics", "Food Service", "Industrial"],
  },
  {
    name: "Rollstock",
    slug: "rollstock",
    description: "Continuous film rolls for form-fill-seal (FFS) and horizontal flow-wrap machines. Custom widths and structures for automated packaging lines.",
    image: rollstock,
    useCases: ["VFFS Packaging", "HFFS Flow-Wrap", "Thermoforming", "Lidding Films", "Shrink Wrap"],
    materials: ["PE", "PP", "PET", "NY", "Aluminum foil laminates", "Coextruded films"],
    specs: [
      "Widths: 50mm to 1200mm",
      "Core sizes: 76mm, 152mm standard",
      "Printing: Registration marks available",
      "Features: Peelable, anti-fog, high-slip",
    ],
    industries: ["Food Processing", "Dairy", "Meat & Poultry", "Industrial"],
  },
  {
    name: "Sachets & Stick Packs",
    slug: "sachets",
    description: "Single-serve and portion-controlled packaging for powders, liquids, and granules. Precise dosing with compact form factor.",
    image: sachets,
    useCases: ["Supplements & Vitamins", "Instant Beverages", "Condiments", "Personal Care", "Pharmaceutical Doses"],
    materials: ["AL/PE", "PET/AL/PE", "Paper/AL/PE", "High-barrier films"],
    specs: [
      "Sizes: 1ml to 50ml capacity",
      "Printing: Multi-color with UV varnish",
      "Features: Easy-tear, child-resistant options",
      "Fill types: Powder, liquid, gel, granule",
    ],
    industries: ["Nutraceuticals", "Food Service", "Pharmaceuticals", "Cosmetics"],
  },
  {
    name: "High-Barrier Packaging",
    slug: "high-barrier",
    description: "Multi-layer structures with aluminum or EVOH barriers for maximum product protection. Extends shelf life for sensitive products.",
    image: highBarrier,
    useCases: ["Vacuum Packaging", "Modified Atmosphere", "Coffee Valve Bags", "Medical Devices", "Electronics"],
    materials: ["PET/AL/PE", "NY/EVOH/PE", "Metallized PET", "AlOx coated films", "SiOx barrier"],
    specs: [
      "OTR: <0.1 cc/m²/day achievable",
      "WVTR: <0.1 g/m²/day achievable",
      "Features: Degassing valves, retort-capable",
      "Certifications: FDA, EU food contact",
    ],
    industries: ["Meat & Cheese", "Coffee", "Medical Devices", "Electronics"],
  },
  {
    name: "Recyclable & Sustainable",
    slug: "recyclable",
    description: "Mono-material and PCR-content solutions for brands with sustainability commitments. Designed for real-world recycling streams.",
    image: recyclable,
    useCases: ["Eco-Conscious Brands", "Organic Products", "Refill Pouches", "E-commerce Mailers", "Consumer Goods"],
    materials: ["Mono-PE", "Mono-PP", "Paper-based", "PCR content films", "Bio-based materials"],
    specs: [
      "Recyclability: PE or PP recycling streams",
      "PCR content: Up to 50% available",
      "Certifications: How2Recycle, FSC",
      "Barrier: Functional barriers without aluminum",
    ],
    industries: ["Consumer Goods", "Organic Foods", "Personal Care", "E-commerce"],
  },
];

export default function ProductsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Product Categories
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              From stand-up pouches to rollstock, we offer a complete range of flexible packaging formats. Each solution is customizable to your product specifications, branding requirements, and sustainability goals.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-wide space-y-16">
          {products.map((product, index) => (
            <div
              key={product.slug}
              id={product.slug}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] rounded-xl overflow-hidden bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="space-y-6">
                  {/* Use Cases */}
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                      Common Applications
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.useCases.map((useCase) => (
                        <span
                          key={useCase}
                          className="text-sm px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Materials */}
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                      Material Options
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.materials.map((material) => (
                        <span
                          key={material}
                          className="text-sm px-3 py-1.5 rounded-md bg-accent/10 text-accent font-medium"
                        >
                          {material}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specs */}
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                      Key Specifications
                    </h3>
                    <ul className="space-y-2">
                      {product.specs.map((spec) => (
                        <li key={spec} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Industries */}
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground mb-3">
                      Industries Served
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.industries.map((industry) => (
                        <span
                          key={industry}
                          className="text-sm px-3 py-1.5 rounded-md border border-border"
                        >
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link to="/contact">
                    <Button variant="cta">
                      Request Quote for {product.name}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 section-gradient">
        <div className="container-wide">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Can't Find What You Need?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              We specialize in custom solutions. Describe your requirements and our team will develop a tailored packaging proposal.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Contact Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
