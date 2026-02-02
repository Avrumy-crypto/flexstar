import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CheckCircle, 
  Globe, 
  Package, 
  Shield, 
  Truck,
  Leaf,
  Layers,
  Settings
} from "lucide-react";

// Import images
import heroImage from "@/assets/hero-packaging.jpg";
import standupPouches from "@/assets/product-standup-pouches.jpg";
import flatPouches from "@/assets/product-standup-pouches.jpg"; // Using standup as fallback
import rollstock from "@/assets/product-rollstock.jpg";
import sachets from "@/assets/product-sachets.jpg";
import highBarrier from "@/assets/product-high-barrier.jpg";
import recyclable from "@/assets/product-recyclable.jpg";

const productCategories = [
  {
    name: "Stand-Up Pouches",
    description: "Self-standing pouches with zipper closures for retail shelf presence",
    image: standupPouches,
    href: "/products/stand-up-pouches",
    industries: ["Food & Beverage", "Pet Food", "Coffee"],
  },
  {
    name: "Flat Pouches",
    description: "Three-side seal pouches ideal for sampling, sachets, and single-use applications",
    image: flatPouches,
    href: "/products/flat-pouches",
    industries: ["Pharmaceuticals", "Cosmetics", "Food Service"],
  },
  {
    name: "Rollstock",
    description: "Continuous film for form-fill-seal machines with custom printing",
    image: rollstock,
    href: "/products/rollstock",
    industries: ["Food Processing", "Industrial", "Agriculture"],
  },
  {
    name: "Sachets & Stick Packs",
    description: "Single-serve portions for condiments, supplements, and beverages",
    image: sachets,
    href: "/products/sachets",
    industries: ["Nutraceuticals", "Food Service", "Cosmetics"],
  },
  {
    name: "High-Barrier Packaging",
    description: "Multi-layer structures for oxygen and moisture-sensitive products",
    image: highBarrier,
    href: "/products/high-barrier",
    industries: ["Meat & Cheese", "Coffee", "Medical Devices"],
  },
  {
    name: "Recyclable Packaging",
    description: "Mono-material and PCR solutions for sustainability-focused brands",
    image: recyclable,
    href: "/products/recyclable",
    industries: ["Consumer Goods", "Organic Foods", "E-commerce"],
  },
];

const valueProps = [
  {
    icon: Globe,
    title: "Global Sourcing Network",
    description: "Access to certified manufacturers across Asia, Europe, and the Americas with rigorous quality controls.",
  },
  {
    icon: Package,
    title: "Custom Solutions",
    description: "From concept to production—tailored sizes, materials, and print designs for your brand.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "ISO-certified facilities, pre-shipment inspections, and food-grade compliance documentation.",
  },
  {
    icon: Truck,
    title: "Logistics Management",
    description: "End-to-end supply chain coordination with transparent lead times and inventory planning.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "We analyze your product requirements, target market, and packaging goals.",
  },
  {
    step: "02",
    title: "Material Selection",
    description: "Our team recommends optimal film structures and barrier properties.",
  },
  {
    step: "03",
    title: "Design & Sampling",
    description: "Receive printed samples for testing before committing to production.",
  },
  {
    step: "04",
    title: "Production & QC",
    description: "Manufacturing with real-time quality checks and compliance certification.",
  },
  {
    step: "05",
    title: "Delivery",
    description: "Coordinated shipping with flexible delivery schedules to your facility.",
  },
];

const stats = [
  { value: "500+", label: "SKUs Delivered" },
  { value: "40+", label: "Countries Served" },
  { value: "15+", label: "Years Experience" },
  { value: "99.2%", label: "On-Time Delivery" },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Flexible packaging samples"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container-wide py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-accent font-medium mb-4 animate-fade-in">
              B2B Flexible Packaging Solutions
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up">
              Custom Flexible Packaging for Brands That Demand More
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              From stand-up pouches to high-barrier rollstock—we source, customize, and deliver packaging solutions that protect your products and strengthen your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="heroOutline" size="xl">
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-secondary border-y border-border">
        <div className="container-wide py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 lg:py-28">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-muted-foreground">
              We combine global sourcing expertise with technical packaging knowledge to deliver cost-effective, compliant solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="bg-card rounded-xl p-6 card-elevated border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <prop.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{prop.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{prop.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 lg:py-28 section-gradient">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Product Categories
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Comprehensive flexible packaging formats to meet every application—from shelf-stable foods to sensitive pharmaceuticals.
              </p>
            </div>
            <Link to="/products">
              <Button variant="ctaOutline">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="group bg-card rounded-xl overflow-hidden card-elevated border border-border"
              >
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {category.industries.map((industry) => (
                      <span
                        key={industry}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-28">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground">
              A structured approach to ensure your packaging meets specifications, timelines, and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-card rounded-xl p-6 border border-border h-full">
                  <span className="text-4xl font-bold text-accent/20">{step.step}</span>
                  <h3 className="text-lg font-semibold mt-2 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-5 w-5 text-muted-foreground/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Expertise */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Material Expertise
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                Our team understands the science behind flexible packaging—from barrier requirements to sustainable alternatives. We guide you to the right material structure for your product.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Layers, text: "Multi-layer laminates: PET/PE, NY/PE, AL/PE structures" },
                  { icon: Shield, text: "Barrier films for oxygen, moisture, and UV protection" },
                  { icon: Leaf, text: "Recyclable mono-materials and PCR content options" },
                  { icon: Settings, text: "Printing: rotogravure, flexographic, digital" },
                ].map((item) => (
                  <div key={item.text} className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-primary-foreground/90">{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link to="/materials">
                  <Button variant="hero" size="lg">
                    Learn About Materials
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={highBarrier}
                  alt="High barrier packaging materials"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden mt-8">
                <img
                  src={recyclable}
                  alt="Recyclable packaging options"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 lg:py-28">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground">
              Flexible packaging solutions tailored to the specific requirements of diverse sectors.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              "Food & Beverage",
              "Coffee & Tea",
              "Pet Food",
              "Nutraceuticals",
              "Cosmetics",
              "Industrial",
            ].map((industry) => (
              <div
                key={industry}
                className="bg-card rounded-xl p-6 text-center border border-border hover:border-accent/50 transition-colors"
              >
                <p className="font-medium text-sm">{industry}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 section-gradient">
        <div className="container-wide">
          <div className="bg-primary rounded-2xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Discuss Your Packaging Needs?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get a custom quote with material recommendations, lead times, and pricing tailored to your specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/faq">
                <Button variant="heroOutline" size="xl">
                  View FAQ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
