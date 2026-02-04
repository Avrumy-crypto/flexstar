import { Link } from "react-router-dom";
import { useState } from "react";
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
  const [selected, setSelected] = useState<string>(markets[0].id);
  const market = markets.find((m) => m.id === selected) || markets[0];

  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-primary">
        <div className="container-wide flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">{market.name}</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-4">Flexible packaging for {market.name}</h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl">Performance packaging: compliant, scalable, reliable.</p>
          </div>

          <div className="flex gap-4">
            <Link to="/contact">
              <Button size="lg" className="rounded-full">Request a Quote</Button>
            </Link>
            <a href="#samples" className="inline-flex items-center"> 
              <Button variant="outline" size="lg" className="rounded-full">Get Samples</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Market selector */}
      <section className="py-6 border-b border-border">
        <div className="container-wide">
          <div className="flex flex-wrap gap-3">
            {markets.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelected(m.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${selected === m.id ? 'bg-accent text-white' : 'bg-secondary hover:bg-accent/10'}`}
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Market Challenges */}
      <section className="py-12">
        <div className="container-wide grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-3">Market Challenges</h2>
            <p className="text-muted-foreground mb-4">Key challenges we solve.</p>
            <ul className="space-y-3">
              {[
                'Shelf life',
                'Regulatory compliance',
                'Production consistency',
                'Cost control',
              ].map((r) => (
                <li key={r} className="flex items-start gap-3 text-sm">
                  <CheckCircle className="h-5 w-5 text-accent mt-1" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Packaging Solutions */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-2">Packaging Solutions</h3>
            <p className="text-muted-foreground mb-4">Formats and common use-cases.</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {market.products.map((p) => (
                <span key={p} className="px-3 py-2 rounded bg-accent/10 text-accent text-sm font-medium">{p}</span>
              ))}
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Common use cases</h4>
              <div className="grid grid-cols-2 gap-2">
                {market.applications.slice(0,8).map((a) => (
                  <div key={a} className="text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span>{a}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials & Performance */}
      <section className="py-12 bg-muted/20">
        <div className="container-wide grid lg:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-2">Materials & Performance</h3>
            <p className="text-muted-foreground mb-4">High-barrier films and food-safe constructions built for production and shelf life.</p>
            <ul className="space-y-3 text-sm">
              <li>High-barrier films for oxygen & moisture control</li>
              <li>Food-contact compliant materials</li>
              <li>Structures tuned to common filling lines</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <img src={market.image} alt={market.name} className="w-full h-64 object-cover rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Sustainability Options */}
      <section className="py-12">
        <div className="container-wide grid lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Sustainability Options</h3>
            <p className="text-muted-foreground mb-4">Practical sustainability options.</p>
            <ul className="space-y-3 text-sm">
              <li>Mono-material & recyclable constructions</li>
              <li>Lightweighting to cut material and freight</li>
              <li>PCR and verified recycled-content options</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold mb-2">How we apply sustainability</h4>
            <p className="text-sm text-muted-foreground mb-4">We evaluate performance requirements and supply-chain implications, then recommend pragmatic changes that meet recycling and weight goals without compromising shelf life or manufacturing reliability.</p>
          </div>
        </div>
      </section>

      {/* Why Brands Choose Us */}
      <section className="py-12 bg-muted/20">
        <div className="container-wide grid lg:grid-cols-3 gap-8 items-start">
          <div>
            <h3 className="text-xl font-semibold mb-2">Why Brands Choose Us</h3>
            <ul className="space-y-3 text-sm">
              <li>Years of experience in {market.name.toLowerCase()}</li>
              <li>Consistent manufacturing and QC</li>
              <li>Cost-effective production and on-time runs</li>
              <li>Practical technical support</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold mb-2">Selected results</h4>
            <p className="text-sm text-muted-foreground">We work with both growing regional brands and national retailers to solve shelf-life and handling problems at scale. Our focus is predictable performance and low risk for production.</p>
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-12">
        <div className="container-wide grid lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Quality & Compliance</h3>
            <ul className="space-y-3 text-sm">
              <li>Regulatory guidance for food contact</li>
              <li>Traceable quality control</li>
              <li>Third-party testing support</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold mb-2">Certifications</h4>
            <p className="text-sm text-muted-foreground">ISO, food-contact compliance, and other certifications available where applicable. We validate materials and processes to meet customer and regulatory needs.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-muted/10">
        <div className="container-wide">
          <h3 className="text-xl font-semibold mb-4">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <div className="text-accent font-semibold">1. Consultation</div>
              <div className="text-sm text-muted-foreground">Discuss product, volume, timeline.</div>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <div className="text-accent font-semibold">2. Material selection</div>
              <div className="text-sm text-muted-foreground">Choose structure for shelf life and line fit.</div>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <div className="text-accent font-semibold">3. Production</div>
              <div className="text-sm text-muted-foreground">Pilot, QC, scale.</div>
            </div>
            <div className="p-4 rounded-lg bg-white shadow-sm">
              <div className="text-accent font-semibold">4. Delivery</div>
              <div className="text-sm text-muted-foreground">On-time shipments.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12">
        <div className="container-wide max-w-3xl mx-auto text-center">
          <p className="text-accent font-medium mb-2">Trusted by growing and national brands</p>
          <blockquote className="text-lg italic text-muted-foreground">“Reliable technical partner — met our shelf-life targets.”</blockquote>
          <p className="text-sm text-muted-foreground mt-3">— Product Manager, Regional Snack Brand</p>
        </div>
      </section>

      {/* Samples anchor + Final CTA */}
      <section id="samples" className="py-12 bg-primary">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-black text-primary-foreground mb-4">Ready to evaluate?</h2>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">Request samples or a detailed quote — we’ll match materials and formats to your production needs.</p>
          <div className="flex items-center justify-center gap-4">
            <Link to="/contact"><Button size="lg" className="rounded-full">Request a Quote</Button></Link>
            <a href="#samples"><Button variant="outline" size="lg" className="rounded-full">Get Samples</Button></a>
          </div>
        </div>
      </section>
    </main>
  );
}
