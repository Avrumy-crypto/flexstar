import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Droplets, Sun, Thermometer } from "lucide-react";

const filmTypes = [
  {
    name: "Polyethylene (PE)",
    description: "The most common flexible packaging material. Excellent sealability, moisture barrier, and flexibility. Available in LDPE, LLDPE, and HDPE variants.",
    properties: ["Excellent moisture barrier", "Good seal strength", "Flexible and durable", "Recyclable"],
    applications: ["Inner seal layer", "Mono-material pouches", "Frozen food packaging"],
    sustainability: "Widely recyclable in PE recycling streams. Mono-PE structures enable circular economy solutions.",
  },
  {
    name: "Polypropylene (PP)",
    description: "Higher stiffness and heat resistance than PE. Good clarity and chemical resistance. Used in both cast (CPP) and oriented (OPP/BOPP) forms.",
    properties: ["Higher temperature resistance", "Excellent clarity", "Good chemical resistance", "Lightweight"],
    applications: ["Snack packaging", "Confectionery wraps", "Retort packaging (CPP)"],
    sustainability: "Recyclable in PP streams. BOPP can be used for mono-material structures.",
  },
  {
    name: "Polyester (PET)",
    description: "High strength, dimensional stability, and excellent printability. Often used as the outer layer in laminated structures for durability and graphics.",
    properties: ["Excellent tensile strength", "High temperature resistance", "Superior printability", "Good barrier to gases"],
    applications: ["Outer print layer", "Lidding films", "Boil-in-bag packaging"],
    sustainability: "Recyclable. Metallized PET provides barrier without aluminum for improved recyclability.",
  },
  {
    name: "Nylon (PA/NY)",
    description: "Outstanding puncture and abrasion resistance. Excellent oxygen barrier when dry. Critical for vacuum packaging and challenging applications.",
    properties: ["Superior puncture resistance", "Excellent oxygen barrier", "High flex-crack resistance", "Thermoformable"],
    applications: ["Meat packaging", "Cheese packaging", "Thermoformed trays"],
    sustainability: "Nylon improves package durability, potentially reducing food waste despite recycling challenges.",
  },
  {
    name: "Aluminum Foil",
    description: "Complete barrier to oxygen, moisture, light, and aromas. The gold standard for maximum product protection, though impacts recyclability.",
    properties: ["100% oxygen barrier", "Complete moisture barrier", "Light barrier", "Aroma barrier"],
    applications: ["Coffee packaging", "Pharmaceutical blister", "Retort pouches"],
    sustainability: "Not recyclable in flexible form. Consider alternatives like metallized films or high-barrier coatings for sustainability goals.",
  },
  {
    name: "EVOH",
    description: "Ethylene vinyl alcohol copolymer—exceptional oxygen barrier when used as a core layer in multilayer structures. Humidity-sensitive.",
    properties: ["Exceptional oxygen barrier", "Excellent aroma barrier", "Good chemical resistance", "Transparent"],
    applications: ["Extended shelf life foods", "Ketchup bottles", "Fresh meat MAP packaging"],
    sustainability: "Typically used in thin layers within recyclable PE or PP structures, minimizing impact on recyclability.",
  },
];

const barrierProperties = [
  {
    icon: Shield,
    name: "Oxygen Barrier",
    description: "Prevents oxidation that causes rancidity, color changes, and nutrient degradation. Critical for fats, oils, and vitamins.",
    materials: "Aluminum foil, EVOH, PVDC, metallized films, SiOx/AlOx coatings",
    measurement: "OTR (Oxygen Transmission Rate) measured in cc/m²/day",
  },
  {
    icon: Droplets,
    name: "Moisture Barrier",
    description: "Protects dry products from humidity absorption and prevents liquid products from drying out. Essential for shelf stability.",
    materials: "PE, PP, aluminum foil, metallized films",
    measurement: "WVTR (Water Vapor Transmission Rate) measured in g/m²/day",
  },
  {
    icon: Sun,
    name: "Light Barrier",
    description: "Blocks UV and visible light that can degrade vitamins, cause off-flavors, and fade colors. Important for light-sensitive products.",
    materials: "Aluminum foil, metallized films, opaque pigmented films, UV-blocking additives",
    measurement: "Light transmission percentage at specific wavelengths",
  },
  {
    icon: Thermometer,
    name: "Temperature Resistance",
    description: "Determines suitability for hot-fill, retort, or frozen applications. Each material has specific temperature limitations.",
    materials: "CPP (retort), Nylon (thermoforming), PE (frozen), PET (hot-fill)",
    measurement: "Maximum continuous use temperature and heat seal initiation temperature",
  },
];

const printingMethods = [
  {
    name: "Rotogravure",
    description: "Engraved cylinder printing offering exceptional quality and consistency. Ideal for long runs with detailed graphics and metallic effects.",
    pros: ["Highest print quality", "Consistent color across large runs", "Metallic ink capability", "Fine detail reproduction"],
    cons: ["High cylinder costs", "Not economical for short runs", "Longer setup time"],
    moq: "Typically 50,000+ impressions to justify cylinder costs",
  },
  {
    name: "Flexographic",
    description: "Flexible relief plate printing. More economical for medium runs with good quality. Faster setup than rotogravure.",
    pros: ["Lower setup costs than roto", "Faster plate production", "Good for medium runs", "Versatile substrate compatibility"],
    cons: ["Lower quality than rotogravure", "Limited fine detail", "Dot gain challenges"],
    moq: "Typically 10,000-25,000+ units economical",
  },
  {
    name: "Digital Printing",
    description: "Direct-to-substrate printing without plates or cylinders. Enables short runs, variable data, and rapid prototyping.",
    pros: ["No tooling costs", "Variable data capability", "Fast turnaround", "Ideal for short runs and testing"],
    cons: ["Higher unit cost at scale", "Limited substrate options", "Slower speeds"],
    moq: "As low as 500-1,000 units for prototyping",
  },
];

export default function MaterialsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Materials & Technology
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Understanding flexible packaging materials is essential for selecting the right solution. This guide covers film types, barrier properties, printing methods, and sustainability considerations.
            </p>
          </div>
        </div>
      </section>

      {/* Film Types */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-4">Film Types</h2>
          <p className="text-muted-foreground mb-12 max-w-3xl">
            Flexible packaging typically uses multiple film layers laminated together, each contributing specific properties. Understanding these materials helps optimize your packaging structure.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filmTypes.map((film) => (
              <div
                key={film.name}
                className="bg-card rounded-xl p-6 border border-border card-elevated"
              >
                <h3 className="text-xl font-semibold mb-3">{film.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {film.description}
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Key Properties
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {film.properties.map((prop) => (
                        <span
                          key={prop}
                          className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                        >
                          {prop}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                      Common Applications
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {film.applications.map((app) => (
                        <li key={app} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                      Sustainability Note
                    </h4>
                    <p className="text-xs text-muted-foreground">{film.sustainability}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Barrier Properties */}
      <section className="py-16 lg:py-24 section-gradient">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-4">Barrier Properties</h2>
          <p className="text-muted-foreground mb-12 max-w-3xl">
            The primary function of packaging is protection. Different products require different barrier levels—understanding these properties ensures your packaging delivers adequate shelf life.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {barrierProperties.map((barrier) => (
              <div
                key={barrier.name}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <barrier.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{barrier.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {barrier.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="font-medium">Materials:</span>{" "}
                        <span className="text-muted-foreground">{barrier.materials}</span>
                      </p>
                      <p>
                        <span className="font-medium">Measurement:</span>{" "}
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
          <h2 className="text-3xl font-bold mb-4">Printing Methods</h2>
          <p className="text-muted-foreground mb-12 max-w-3xl">
            Your printing method impacts cost, quality, lead time, and minimum order quantities. We help you select the right approach for your volume and quality requirements.
          </p>
          <div className="grid lg:grid-cols-3 gap-6">
            {printingMethods.map((method) => (
              <div
                key={method.name}
                className="bg-card rounded-xl p-6 border border-border card-elevated"
              >
                <h3 className="text-xl font-semibold mb-3">{method.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {method.description}
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
                      Advantages
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {method.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2">
                          <span className="text-accent">+</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-destructive mb-2">
                      Considerations
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {method.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2">
                          <span className="text-destructive">-</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm">
                      <span className="font-medium">MOQ:</span>{" "}
                      <span className="text-muted-foreground">{method.moq}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finishes & Features */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-4">Finishes & Features</h2>
          <p className="text-primary-foreground/80 mb-12 max-w-3xl">
            Enhance your packaging with functional and aesthetic options that improve user experience and shelf appeal.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Surface Finishes",
                items: ["Matte lamination", "Gloss lamination", "Soft-touch coating", "Spot UV varnish", "Holographic effects"],
              },
              {
                title: "Closure Options",
                items: ["Press-to-close zipper", "Slider zipper", "Spout and cap", "Tear notch", "Easy-peel seal"],
              },
              {
                title: "Functional Features",
                items: ["Hang holes", "Euro slots", "Degassing valves", "Clear windows", "Child-resistant closures"],
              },
              {
                title: "Special Applications",
                items: ["Retort-capable", "Microwave-safe", "Freezer-grade", "Hot-fill compatible", "Anti-static"],
              },
            ].map((category) => (
              <div key={category.title} className="bg-primary-foreground/5 rounded-xl p-6">
                <h3 className="font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-primary-foreground/80 flex items-center gap-2">
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
          <div className="bg-secondary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need Material Recommendations?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our technical team can analyze your product requirements and recommend optimal film structures for protection, sustainability, and cost.
            </p>
            <Link to="/contact">
              <Button variant="cta" size="lg">
                Get Expert Advice
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
