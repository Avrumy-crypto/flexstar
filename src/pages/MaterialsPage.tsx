import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Droplets, Sun, Thermometer, CheckCircle } from "lucide-react";

const filmTypes = [
  {
    name: "Polyethylene (PE)",
    variants: "LDPE, LLDPE, HDPE, mPE",
    description: "The most versatile flexible packaging material. Excellent sealability, moisture barrier, and flexibility.",
    properties: ["Excellent moisture barrier", "Superior seal strength", "High flexibility", "Wide temp range"],
    applications: ["Seal layers", "Mono-material pouches", "Heavy-duty bags"],
  },
  {
    name: "Polypropylene (PP)",
    variants: "CPP, OPP, BOPP",
    description: "Higher stiffness and temperature resistance than PE. Excellent clarity and chemical resistance.",
    properties: ["High temp resistance", "Optical clarity", "Chemical resistance", "Low density"],
    applications: ["Snack packaging", "Overwrap", "Retort capability"],
  },
  {
    name: "Polyester (PET)",
    variants: "BOPET, APET, CPET, Metallized",
    description: "High strength, dimensional stability, and excellent printability. Primary print web for laminates.",
    properties: ["Tensile strength", "Dimensional stability", "Print receptivity", "Gas barrier"],
    applications: ["Print layer", "Lidding films", "Thermoforming"],
  },
  {
    name: "Nylon (PA)",
    variants: "PA6, PA66, Coex PA",
    description: "Outstanding puncture and abrasion resistance. Excellent oxygen barrier when dry.",
    properties: ["Puncture resistance", "Flex-crack resistance", "O2 barrier (dry)", "Thermoformable"],
    applications: ["Vacuum pouches", "Thermoform base", "Cheese packaging"],
  },
  {
    name: "Aluminum Foil",
    variants: "6.5μ, 7μ, 9μ, 12μ",
    description: "Complete barrier to oxygen, moisture, light, and aromas. The ultimate protection layer.",
    properties: ["100% O2 barrier", "Complete moisture barrier", "Light barrier", "Dead fold"],
    applications: ["Coffee packaging", "Pharmaceutical", "Retort pouches"],
  },
  {
    name: "EVOH",
    variants: "32mol%, 38mol%, 44mol%",
    description: "Exceptional oxygen barrier as a core layer. Humidity-sensitive, used in coex structures.",
    properties: ["Ultra-high O2 barrier", "Aroma barrier", "Transparent", "Humidity sensitive"],
    applications: ["MAP packaging", "Ketchup bottles", "Shelf-life extension"],
  },
];

const barrierProperties = [
  {
    icon: Shield,
    name: "Oxygen Barrier",
    description: "Prevents oxidation causing rancidity, color changes, and nutrient loss. Critical for fats, oils, and sensitive products.",
    materials: "Aluminum foil • EVOH • PVDC • Metallized films • AlOx/SiOx coatings",
    measurement: "OTR: cc/m²/day @ 23°C, 0% RH",
  },
  {
    icon: Droplets,
    name: "Moisture Barrier",
    description: "Protects dry products from humidity and prevents liquid products from drying. Essential for shelf stability.",
    materials: "PE • PP • Aluminum foil • Metallized films • Wax coatings",
    measurement: "WVTR: g/m²/day @ 38°C, 90% RH",
  },
  {
    icon: Sun,
    name: "Light Barrier",
    description: "Blocks UV and visible light that degrades vitamins, causes off-flavors, and fades colors.",
    materials: "Aluminum foil • Metallized films • Opaque pigments • UV blockers",
    measurement: "Light transmission % at specified wavelengths",
  },
  {
    icon: Thermometer,
    name: "Temperature Resistance",
    description: "Determines suitability for hot-fill, retort, pasteurization, or frozen storage applications.",
    materials: "CPP (retort) • Nylon (thermoform) • PE (frozen) • PET (hot-fill)",
    measurement: "Continuous use temp & seal initiation temp",
  },
];

const printingMethods = [
  {
    name: "Rotogravure",
    description: "Engraved cylinder printing for premium quality and long runs. Industry standard for flexible packaging.",
    specs: ["Up to 10 colors", "175 LPI resolution", "Metallic inks", "Consistent quality"],
    moq: "50,000+ impressions typical",
  },
  {
    name: "Flexographic",
    description: "HD flexo with photorealistic quality. Lower tooling costs than rotogravure with faster turnaround.",
    specs: ["Up to 8 colors", "150 LPI resolution", "Extended gamut", "Fast plates"],
    moq: "20,000+ impressions typical",
  },
  {
    name: "Digital",
    description: "No plates or cylinders required. Ideal for prototyping, versioning, and short runs.",
    specs: ["Variable data", "No tooling", "Fast turnaround", "Photo quality"],
    moq: "500+ units for prototyping",
  },
];

export default function MaterialsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Technical Resources</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6">
              Materials & Technology
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Comprehensive guide to flexible packaging films, barrier properties, and printing technologies. Understanding these fundamentals helps optimize your packaging structure.
            </p>
          </div>
        </div>
      </section>

      {/* Film Types */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Substrates</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Film Types</h2>
            <p className="text-muted-foreground max-w-3xl">
              Each material contributes specific properties to multi-layer structures. Understanding these enables optimal structure design.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filmTypes.map((film) => (
              <div
                key={film.name}
                className="bg-card rounded-lg p-6 border border-border card-elevated"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{film.name}</h3>
                  <p className="text-xs font-medium text-accent">{film.variants}</p>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {film.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Properties</p>
                  <div className="flex flex-wrap gap-1.5">
                    {film.properties.map((prop) => (
                      <span
                        key={prop}
                        className="text-xs px-2 py-1 rounded bg-secondary"
                      >
                        {prop}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Applications</p>
                  <p className="text-sm text-muted-foreground">{film.applications.join(" • ")}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barrier Properties */}
      <section className="py-16 lg:py-24 section-gradient">
        <div className="container-wide">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Performance</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Barrier Properties</h2>
            <p className="text-muted-foreground max-w-3xl">
              The primary function of packaging is protection. Understanding barrier requirements ensures adequate shelf life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {barrierProperties.map((barrier) => (
              <div
                key={barrier.name}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded bg-accent/10 flex items-center justify-center shrink-0">
                    <barrier.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{barrier.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {barrier.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-bold">Materials:</span>{" "}
                        <span className="text-muted-foreground">{barrier.materials}</span>
                      </p>
                      <p>
                        <span className="font-bold">Measurement:</span>{" "}
                        <span className="text-muted-foreground">{barrier.measurement}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Printing Methods */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Graphics</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Printing Methods</h2>
            <p className="text-muted-foreground max-w-3xl">
              Print method impacts quality, cost, and minimum quantities. We help select the right approach for your needs.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {printingMethods.map((method) => (
              <div
                key={method.name}
                className="bg-card rounded-lg p-6 border border-border card-elevated"
              >
                <h3 className="text-xl font-bold mb-3">{method.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {method.description}
                </p>
                <div className="mb-4">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Specifications</p>
                  <ul className="space-y-1">
                    {method.specs.map((spec) => (
                      <li key={spec} className="text-sm flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm font-bold text-accent">{method.moq}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finishing Options */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Enhancements</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">Finishes & Features</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Surface Finishes",
                items: ["Matte lamination", "Gloss lamination", "Soft-touch", "Spot varnish", "Metallic effects"],
              },
              {
                title: "Closure Options",
                items: ["Press-to-close zipper", "Slider zipper", "Spout and cap", "Tear notch", "Velcro closure"],
              },
              {
                title: "Functional Features",
                items: ["Hang holes", "Euro slots", "Degassing valves", "Clear windows", "Laser scoring"],
              },
              {
                title: "Special Properties",
                items: ["Anti-fog", "Anti-static", "UV resistance", "Retort-capable", "Microwave-safe"],
              },
            ].map((category) => (
              <div key={category.title} className="bg-primary-foreground/5 rounded-lg p-6 border border-primary-foreground/10">
                <h3 className="font-bold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
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
              Need Material Recommendations?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our engineering team analyzes your product requirements and recommends optimal film structures.
            </p>
            <Link to="/contact">
              <Button variant="industrial" size="lg">
                Contact Engineering
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
