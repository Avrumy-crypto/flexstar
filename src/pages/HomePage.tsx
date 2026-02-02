import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

// Import images
import extrusionImg from "@/assets/capability-extrusion.jpg";
import printingImg from "@/assets/capability-printing.jpg";
import laminationImg from "@/assets/capability-lamination.jpg";
import convertingImg from "@/assets/capability-converting.jpg";
import standupPouches from "@/assets/product-standup-pouches.jpg";
import rollstock from "@/assets/product-rollstock.jpg";
import sachets from "@/assets/product-sachets.jpg";
import highBarrier from "@/assets/product-high-barrier.jpg";

const filmTypes = [
  { name: "Thermoform Film", image: laminationImg },
  { name: "Shrink Sleeves", image: highBarrier },
  { name: "Pouches", image: standupPouches },
  { name: "Roll Stock", image: rollstock },
  { name: "Lidding Film", image: sachets },
];

const capabilities = [
  { title: "Extrusion", image: extrusionImg },
  { title: "Lamination", image: laminationImg },
  { title: "Printing", image: printingImg },
  { title: "Converting", image: convertingImg },
];

const stats = [
  { value: "500M+", label: "Sq Ft Annually" },
  { value: "200+", label: "Global Customers" },
  { value: "50+", label: "Years Experience" },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <iframe
            src="https://www.youtube.com/embed/fbGZl4di4_Y?autoplay=1&mute=1&loop=1&playlist=fbGZl4di4_Y&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Manufacturing facility video"
            className="w-full h-full object-cover pointer-events-none"
            style={{ aspectRatio: '16/9', minHeight: '100%', minWidth: '100%', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="relative container-wide py-20">
          <div className="max-w-2xl">
            <FadeIn delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-[1.1]">
                Advanced Flexible
                <span className="text-accent"> Packaging</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed">
                From thermoform films to high-barrier pouches—precision packaging that protects products and elevates brands.
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
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container-wide">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-black text-accent">{stat.value}</p>
                <p className="text-xs text-primary-foreground/60 mt-1 uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <FadeIn className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Products</p>
              <h2 className="text-3xl md:text-4xl font-black">Film Types</h2>
            </div>
            <Link to="/products">
              <Button variant="ctaOutline">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </FadeIn>
          <StaggerChildren staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {filmTypes.map((film) => (
              <StaggerItem key={film.name}>
                <Link
                  to="/products"
                  className="group relative overflow-hidden rounded-lg aspect-[3/4] block"
                >
                  <img
                    src={film.image}
                    alt={film.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-sm font-bold text-primary-foreground group-hover:text-accent transition-colors">
                      {film.name}
                    </h3>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 lg:py-32 section-gradient">
        <div className="container-wide">
          <FadeIn className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-black">Capabilities</h2>
          </FadeIn>
          <StaggerChildren staggerDelay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((cap) => (
              <StaggerItem key={cap.title}>
                <Link
                  to="/capabilities"
                  className="group relative overflow-hidden rounded-xl aspect-square block"
                >
                  <img
                    src={cap.image}
                    alt={cap.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-primary-foreground group-hover:text-accent transition-colors">
                      {cap.title}
                    </h3>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="container-wide">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-10">
              Our team is ready to help you find the perfect packaging solution.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
