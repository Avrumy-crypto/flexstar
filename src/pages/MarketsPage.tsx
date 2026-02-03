import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

// Import images
import standupPouches from "@/assets/product-standup-pouches.jpg";
import rollstock from "@/assets/product-rollstock.jpg";
import sachets from "@/assets/product-sachets.jpg";
import highBarrier from "@/assets/product-high-barrier.jpg";
import recyclable from "@/assets/product-recyclable.jpg";

const markets = [
  {
    id: "food-beverage",
    name: "Food & Beverage",
    icon: "🍎",
    description: "Flexible packaging solutions for snacks, confectionery, dry goods, sauces, and beverages. Designed for shelf stability, freshness retention, and consumer convenience.",
    image: standupPouches,
    applications: [
      "Snack foods and chips",
      "Confectionery and chocolate",
      "Dry goods and cereals",
      "Sauces and condiments",
      "Beverages and drink mixes",
      "Frozen foods",
    ],
    requirements: [
      "Extended shelf life through barrier protection",
      "Resealable closures for freshness",
      "Vibrant graphics for shelf appeal",
      "FDA and EU food contact compliance",
      "Microwaveable options",
    ],
    products: ["Stand-Up Pouches", "Flow-Wrap Film", "Lidding Film", "Rollstock"],
  },
  {
    id: "meat-protein",
    name: "Meat & Protein",
    icon: "🥩",
    description: "High-barrier packaging for fresh, frozen, and processed meat products. Engineered for extended shelf life, abuse resistance, and attractive retail presentation.",
    image: highBarrier,
    applications: [
      "Fresh meat cuts",
      "Processed meats",
      "Poultry products",
      "Seafood packaging",
      "Plant-based proteins",
      "Deli slices",
    ],
    requirements: [
      "High oxygen barrier for color retention",
      "Puncture and abuse resistance",
      "Thermoforming capability",
      "Case-ready solutions",
      "MAP and vacuum compatibility",
    ],
    products: ["Thermoform Film", "Vacuum Pouches", "Shrink Bags", "Lidding Film"],
  },
  {
    id: "dairy-cheese",
    name: "Dairy & Cheese",
    icon: "🧀",
    description: "Specialized packaging for cheese, butter, yogurt, and dairy products. Focus on oxygen and moisture barrier, peelability, and portion control.",
    image: sachets,
    applications: [
      "Block and sliced cheese",
      "Shredded cheese",
      "Butter and spreads",
      "Yogurt and dairy desserts",
      "Cream cheese",
      "Processed cheese",
    ],
    requirements: [
      "Oxygen barrier for freshness",
      "Easy-open and reclosable features",
      "Anti-fog for visibility",
      "Controlled peel strength",
      "Portion pack capability",
    ],
    products: ["Cheese Wrap", "Lidding Film", "Flow-Wrap Film", "Pouches"],
  },
  {
    id: "pet-food",
    name: "Pet Food",
    icon: "🐕",
    description: "Durable, high-barrier packaging for dry kibble, wet food, and treats. Built to withstand handling abuse while maintaining freshness and aroma.",
    image: rollstock,
    applications: [
      "Dry pet food",
      "Wet pet food pouches",
      "Treats and chews",
      "Supplements",
      "Litter packaging",
      "Premium pet products",
    ],
    requirements: [
      "Heavy-duty puncture resistance",
      "High-barrier for fat oxidation",
      "Easy-carry handles",
      "Resealable closures",
      "Large format capability",
    ],
    products: ["Large Stand-Up Pouches", "Quad-Seal Bags", "Rollstock", "Flat Bottom Pouches"],
  },
  {
    id: "medical-pharma",
    name: "Medical & Pharma",
    icon: "💊",
    description: "Validated packaging solutions for medical devices, pharmaceuticals, and healthcare products. Certified for sterile barrier, child resistance, and regulatory compliance.",
    image: laminationImg,
    applications: [
      "Medical device packaging",
      "Pharmaceutical pouches",
      "Diagnostic kit packaging",
      "Sterile barrier systems",
      "Unit dose packaging",
      "Cold chain solutions",
    ],
    requirements: [
      "ISO 11607 compliance",
      "Validated seal integrity",
      "Sterile barrier maintenance",
      "Child-resistant options",
      "Cleanroom manufacturing",
    ],
    products: ["Chevron Pouches", "Header Pouches", "Tyvek Combinations", "Lidding Film"],
  },
  {
    id: "industrial",
    name: "Industrial",
    icon: "⚙️",
    description: "Heavy-duty flexible packaging for chemicals, agriculture, building materials, and industrial applications. Engineered for durability and protection.",
    image: recyclable,
    applications: [
      "Chemical packaging",
      "Agricultural products",
      "Building materials",
      "Automotive components",
      "Electronics protection",
      "Textile packaging",
    ],
    requirements: [
      "UV resistance",
      "Chemical compatibility",
      "Heavy-duty construction",
      "Anti-static options",
      "VCI corrosion protection",
    ],
    products: ["Heavy-Duty Bags", "Shrink Film", "VCI Film", "Specialty Laminates"],
  },
];

// Import lamination image
import laminationImg from "@/assets/capability-lamination.jpg";

export default function MarketsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Industries</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6">
              Markets We Serve
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Deep expertise across diverse industries enables us to understand your unique challenges and deliver packaging solutions that perform.
            </p>
          </div>
        </div>
      </section>

      {/* Market Icons Quick Nav */}
      <section className="py-12 border-b border-border">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-4">
            {markets.map((market) => (
              <a
                key={market.id}
                href={`#${market.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-accent/10 transition-colors"
              >
                <span className="text-2xl">{market.icon}</span>
                <span className="text-sm font-medium">{market.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Detail */}
      <section className="py-16 lg:py-24">
        <div className="container-wide space-y-24">
          {markets.map((market, index) => (
            <div key={market.id} id={market.id} className="scroll-mt-32">
              <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start`}>
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-muted">
                    <img
                      src={market.image}
                      alt={market.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl">{market.icon}</span>
                    <div>
                      <p className="text-sm font-bold uppercase tracking-wider text-accent">Industry</p>
                      <h2 className="text-3xl md:text-4xl font-black">{market.name}</h2>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {market.description}
                  </p>

                  {/* Applications */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                      Applications
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {market.applications.map((app) => (
                        <div key={app} className="flex items-center gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                      Key Requirements
                    </h3>
                    <ul className="space-y-2">
                      {market.requirements.map((req) => (
                        <li key={req} className="flex items-start gap-3 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Products */}
                  <div className="mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                      Recommended Products
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {market.products.map((product) => (
                        <span
                          key={product}
                          className="text-sm px-4 py-2 rounded bg-accent/10 text-accent font-medium"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button size="lg" className="rounded-full">
                      Discuss Your Application
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
      <section className="py-16 lg:py-24 bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-6">
            Don't See Your Industry?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-2xl mx-auto">
            We've successfully developed packaging solutions for countless niche applications. Let's discuss your specific requirements.
          </p>
          <Link to="/contact">
            <Button size="lg" className="rounded-full">
              Contact Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
