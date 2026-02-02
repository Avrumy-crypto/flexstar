import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Recycle, TrendingDown, Factory, CheckCircle, Award } from "lucide-react";
import recyclableImage from "@/assets/product-recyclable.jpg";

const initiatives = [
  {
    icon: Recycle,
    title: "Recyclable Mono-Materials",
    description: "PE and PP mono-material structures designed for compatibility with existing recycling infrastructure. No mixed materials to complicate sorting.",
    stats: "100% recyclable in designated streams",
  },
  {
    icon: TrendingDown,
    title: "Material Reduction",
    description: "Continuous downgauging initiatives reduce material consumption while maintaining performance through advanced polymer science and structure optimization.",
    stats: "20-30% thickness reduction achieved",
  },
  {
    icon: Leaf,
    title: "Bio-Based Content",
    description: "Integration of bio-based polymers and renewable feedstocks where performance requirements allow, reducing dependency on fossil-fuel derived materials.",
    stats: "Up to 30% bio-based content available",
  },
  {
    icon: Factory,
    title: "Manufacturing Efficiency",
    description: "Continuous improvement in energy efficiency, waste reduction, and water conservation across all manufacturing operations.",
    stats: "15% energy reduction since 2020",
  },
];

const commitments = [
  { year: "2025", goal: "100% of portfolio recyclability-assessed" },
  { year: "2027", goal: "50% reduction in manufacturing waste" },
  { year: "2030", goal: "Carbon neutral manufacturing operations" },
  { year: "2035", goal: "100% recyclable or compostable products" },
];

const certifications = [
  "How2Recycle Program Member",
  "APR Design Guide Compliant",
  "FSC-Certified Paper Sourcing",
  "ISO 14001 Environmental Management",
  "RecyClass Recyclability Assessment",
  "Certified B Corporation (In Progress)",
];

export default function SustainabilityPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Environmental Responsibility</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6">
              Sustainability
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Practical, measurable progress toward more sustainable flexible packaging. We focus on solutions that work in real-world recycling systems today.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Our Approach</p>
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Progress Over Perfection
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We believe the most sustainable packaging is one that actually gets recycled. That means designing for existing infrastructure, not theoretical systems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our approach prioritizes source reduction (less material), design for recyclability (mono-materials), and incorporation of recycled content—in that order of impact.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We're transparent about what works today and what's still in development. No greenwashing—just honest progress.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={recyclableImage}
                alt="Sustainable packaging options"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative) => (
              <div
                key={initiative.title}
                className="bg-card rounded-lg p-6 border border-border card-elevated"
              >
                <div className="w-12 h-12 rounded bg-accent/10 flex items-center justify-center mb-4">
                  <initiative.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">{initiative.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {initiative.description}
                </p>
                <p className="text-sm font-bold text-accent">{initiative.stats}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container-wide">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Long-Term Vision</p>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Sustainability Roadmap
            </h2>
            <p className="text-primary-foreground/70">
              Clear, measurable commitments with defined timelines. We report progress annually.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {commitments.map((item, index) => (
              <div key={item.year} className="relative">
                <div className="bg-primary-foreground/5 rounded-lg p-6 border border-primary-foreground/10">
                  <p className="text-4xl font-black text-accent mb-2">{item.year}</p>
                  <p className="text-sm text-primary-foreground/80">{item.goal}</p>
                </div>
                {index < commitments.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-5 w-5 text-primary-foreground/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Verified Progress</p>
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                Certifications & Standards
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Third-party certifications validate our sustainability claims and ensure we're following recognized best practices.
              </p>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-accent shrink-0" />
                    <span className="font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Recyclability Guidance</h3>
              <p className="text-muted-foreground mb-6">
                We provide How2Recycle labeling guidance and design our structures to meet APR Design Guide criteria for store drop-off or curbside recyclability.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Pre-Consumer Waste Recycling</p>
                    <p className="text-sm text-muted-foreground">95% of manufacturing scrap is recycled</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">PCR Content Available</p>
                    <p className="text-sm text-muted-foreground">Up to 50% post-consumer recycled content in select structures</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 section-gradient">
        <div className="container-wide">
          <div className="bg-primary rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-primary-foreground mb-4">
              Explore Sustainable Options
            </h2>
            <p className="text-primary-foreground/70 mb-6 max-w-2xl mx-auto">
              Our engineering team can assess your current packaging and recommend pathways to improved sustainability.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
