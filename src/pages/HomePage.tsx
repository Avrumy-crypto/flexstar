import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Factory, 
  Layers, 
  Printer, 
  Settings,
  Award,
  CheckCircle
} from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { ScaleIn } from "@/components/animations/ScaleIn";

// Import images
import heroImage from "@/assets/hero-manufacturing.jpg";
import extrusionImg from "@/assets/capability-extrusion.jpg";
import printingImg from "@/assets/capability-printing.jpg";
import laminationImg from "@/assets/capability-lamination.jpg";
import convertingImg from "@/assets/capability-converting.jpg";
import standupPouches from "@/assets/product-standup-pouches.jpg";
import rollstock from "@/assets/product-rollstock.jpg";
import sachets from "@/assets/product-sachets.jpg";
import highBarrier from "@/assets/product-high-barrier.jpg";

const filmTypes = [
  { name: "Thermoform Film", href: "/products#thermoforming-film", image: laminationImg },
  { name: "Shrink Sleeves", href: "/products#shrink-sleeves", image: highBarrier },
  { name: "Pouches", href: "/products#pouches", image: standupPouches },
  { name: "Roll Stock", href: "/products#rollstock", image: rollstock },
  { name: "Lidding Film", href: "/products#lidding-film", image: sachets },
];

const capabilities = [
  {
    icon: Factory,
    title: "Extrusion",
    description: "Monolayer and multi-layer blown film extrusion for precise thickness control and consistent barrier properties.",
    image: extrusionImg,
    href: "/capabilities#extrusion",
  },
  {
    icon: Layers,
    title: "Lamination",
    description: "Adhesive, extrusion, and solventless lamination processes to create high-performance multi-layer structures.",
    image: laminationImg,
    href: "/capabilities#lamination",
  },
  {
    icon: Printer,
    title: "Printing",
    description: "Flexographic and rotogravure printing up to 10 colors with photorealistic quality and vibrant effects.",
    image: printingImg,
    href: "/capabilities#printing",
  },
  {
    icon: Settings,
    title: "Converting",
    description: "Slitting, rewinding, pouch making, and bag converting with precision tolerances and rapid turnaround.",
    image: convertingImg,
    href: "/capabilities#converting",
  },
];

const stats = [
  { value: "500M+", label: "Sq Ft Annually" },
  { value: "200+", label: "Global Customers" },
  { value: "50+", label: "Years Experience" },
  { value: "99.5%", label: "Quality Rate" },
];

const features = [
  "Easy-Peel & Lock-Seal Options",
  "Peel & Reseal Technology",
  "Anti-Fog Films",
  "High-Clarity Films",
  "Laser Scored Peel Lines",
  "Micro-Vent for Steam Release",
  "Tamper-Evident Seals",
  "Recyclable Mono-Material",
  "High Heat Resistance",
  "Oxygen & Moisture Barriers",
];

const markets = [
  { name: "Food & Beverage", icon: "🍎" },
  { name: "Meat & Protein", icon: "🥩" },
  { name: "Dairy & Cheese", icon: "🧀" },
  { name: "Pet Food", icon: "🐕" },
  { name: "Medical & Pharma", icon: "💊" },
  { name: "Industrial", icon: "⚙️" },
];

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management" },
  { name: "FSSC 22000", description: "Food Safety" },
  { name: "FDA Compliant", description: "US Standards" },
  { name: "SQF Certified", description: "Safe Quality Food" },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Advanced flexible packaging manufacturing facility"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative container-wide py-20">
          <div className="max-w-3xl">
            <FadeIn delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium text-accent">Industry-Leading Manufacturer</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-primary-foreground mb-6 leading-[1.1]">
                Advanced Flexible 
                <span className="text-accent"> Packaging</span> Solutions
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl">
                From thermoform films to high-barrier pouches—we manufacture precision packaging that protects products and elevates brands worldwide.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="hero" size="xl">
                    Request Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/capabilities">
                  <Button variant="heroOutline" size="xl">
                    Our Capabilities
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Stats bar at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 bg-primary/95 backdrop-blur">
          <div className="container-wide py-6">
            <StaggerChildren staggerDelay={0.1} className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <StaggerItem key={stat.label} className="text-center">
                  <p className="text-3xl md:text-4xl font-black text-accent">{stat.value}</p>
                  <p className="text-xs text-primary-foreground/60 mt-1 uppercase tracking-wider">{stat.label}</p>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Film Types */}
      <section className="py-28 lg:py-36">
        <div className="container-wide">
          <FadeIn className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-3">Product Portfolio</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black">
                Film Types
              </h2>
            </div>
            <Link to="/products">
              <Button variant="ctaOutline" size="lg">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </FadeIn>
          <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filmTypes.map((film) => (
              <StaggerItem key={film.name}>
                <Link
                  to={film.href}
                  className="group relative overflow-hidden rounded-lg bg-card card-elevated block"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={film.image}
                      alt={film.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-bold text-primary-foreground group-hover:text-accent transition-colors">
                      {film.name}
                    </h3>
                    <ArrowRight className="h-4 w-4 text-accent mt-3 transform translate-x-0 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-28 lg:py-36 section-gradient">
        <div className="container-wide">
          <FadeIn className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-3">Manufacturing Excellence</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8">
              Our Capabilities
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              State-of-the-art equipment and decades of expertise enable us to deliver consistent, high-quality flexible packaging solutions.
            </p>
          </FadeIn>
          <StaggerChildren staggerDelay={0.15} className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.title}>
                <Link
                  to={cap.href}
                  className="group relative overflow-hidden rounded-xl bg-card card-elevated block"
                >
                  <div className="grid lg:grid-cols-2">
                    <div className="aspect-video lg:aspect-square overflow-hidden">
                      <img
                        src={cap.image}
                        alt={cap.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8 lg:p-10 flex flex-col justify-center">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                        <cap.icon className="h-7 w-7 text-accent" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                        {cap.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {cap.description}
                      </p>
                      <div className="flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wide">
                        Learn More
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-28 lg:py-36 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-3">Technical Specifications</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8">
                Features & Options
              </h2>
              <p className="text-xl text-primary-foreground/70 mb-10 leading-relaxed">
                Our flexible packaging solutions incorporate advanced features to meet the most demanding application requirements.
              </p>
              <Link to="/products">
                <Button variant="hero" size="lg">
                  Explore Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </FadeIn>
            <StaggerChildren staggerDelay={0.05} className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="flex items-center gap-4 p-5 rounded-lg bg-primary-foreground/5 border border-primary-foreground/10 feature-grid-item">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Materials & Structures */}
      <section className="py-28 lg:py-36">
        <div className="container-wide">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-3">Material Science</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8">
              Materials & Structures
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work with a comprehensive range of film substrates and lamination structures to optimize performance for your specific application.
            </p>
          </FadeIn>
          <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <StaggerItem>
              <div className="rounded-xl border border-border p-8 industrial-border h-full bg-card">
                <h3 className="text-xl font-bold mb-6">Standard Laminates</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• PET / LLDPE</li>
                  <li>• BOPP / CPP</li>
                  <li>• BOPP / Heat Seal</li>
                  <li>• BOPP Mono-Web</li>
                  <li>• Nylon / LLDPE</li>
                </ul>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-xl border border-border p-8 industrial-border h-full bg-card">
                <h3 className="text-xl font-bold mb-6">High-Barrier Structures</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• PET / AL / PE</li>
                  <li>• Metallized PET / PE</li>
                  <li>• Nylon / EVOH / PE</li>
                  <li>• AlOx / SiOx Coatings</li>
                  <li>• Foil Laminates</li>
                </ul>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="rounded-xl border border-border p-8 industrial-border h-full bg-card">
                <h3 className="text-xl font-bold mb-6">Specialty Films</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Retort-Capable Structures</li>
                  <li>• Cold Seal for HFFS</li>
                  <li>• Peelable Lidding</li>
                  <li>• Anti-Fog Coatings</li>
                  <li>• Recyclable Mono-Material</li>
                </ul>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* Markets Served */}
      <section className="py-28 lg:py-36 section-gradient">
        <div className="container-wide">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-3">Industries</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8">
              Markets We Serve
            </h2>
          </FadeIn>
          <StaggerChildren staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {markets.map((market) => (
              <StaggerItem key={market.name}>
                <Link
                  to={`/markets/${market.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                  className="bg-card rounded-xl p-8 text-center border border-border hover:border-accent transition-colors card-elevated block"
                >
                  <span className="text-5xl mb-4 block">{market.icon}</span>
                  <p className="font-semibold">{market.name}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-28 lg:py-36">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-3">Quality Assurance</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-8">
                Certified Excellence
              </h2>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Our manufacturing facilities maintain the highest industry certifications, ensuring consistent quality, food safety, and regulatory compliance.
              </p>
              <StaggerChildren staggerDelay={0.1} className="grid grid-cols-2 gap-6">
                {certifications.map((cert) => (
                  <StaggerItem key={cert.name}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Award className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-bold text-lg">{cert.name}</p>
                        <p className="text-muted-foreground">{cert.description}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </FadeIn>
            <ScaleIn delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src={extrusionImg}
                    alt="Manufacturing excellence"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden mt-12">
                  <img
                    src={printingImg}
                    alt="Quality control"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 lg:py-36 bg-primary">
        <div className="container-wide">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-8">
              Ready to Partner With a Leader?
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              From concept to production, our engineering team works alongside you to develop packaging solutions that meet your exact specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="xl">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="heroOutline" size="xl">
                  Contact Us
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
