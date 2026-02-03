import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Recycle, TrendingDown, Factory, CheckCircle, Award, Globe, Droplets } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { ScaleIn } from "@/components/animations/ScaleIn";
import recyclableImage from "@/assets/product-recyclable.jpg";

const initiatives = [
  {
    icon: Recycle,
    title: "Recyclable Mono-Materials",
    description: "PE and PP mono-material structures designed for compatibility with existing recycling infrastructure.",
    stats: "100%",
    statsLabel: "Recyclable",
  },
  {
    icon: TrendingDown,
    title: "Material Reduction",
    description: "Advanced polymer science enables downgauging while maintaining barrier performance.",
    stats: "30%",
    statsLabel: "Less Material",
  },
  {
    icon: Leaf,
    title: "Bio-Based Content",
    description: "Integration of bio-based polymers and renewable feedstocks reducing fossil-fuel dependency.",
    stats: "30%",
    statsLabel: "Bio-Based",
  },
  {
    icon: Factory,
    title: "Clean Manufacturing",
    description: "Energy efficiency, waste reduction, and water conservation across all operations.",
    stats: "15%",
    statsLabel: "Energy Saved",
  },
];

const commitments = [
  { year: "2025", goal: "100% of portfolio recyclability-assessed", progress: 78 },
  { year: "2027", goal: "50% reduction in manufacturing waste", progress: 45 },
  { year: "2030", goal: "Carbon neutral manufacturing operations", progress: 28 },
  { year: "2035", goal: "100% recyclable or compostable products", progress: 15 },
];

const certifications = [
  { name: "How2Recycle", status: "Certified" },
  { name: "APR Design Guide", status: "Compliant" },
  { name: "FSC-Certified Paper", status: "Certified" },
  { name: "ISO 14001", status: "Certified" },
  { name: "RecyClass", status: "Assessed" },
  { name: "B Corporation", status: "In Progress" },
];

const impactStats = [
  { value: "12M+", label: "Pounds of plastic reduced annually", icon: TrendingDown },
  { value: "95%", label: "Manufacturing scrap recycled", icon: Recycle },
  { value: "50%", label: "PCR content available", icon: Globe },
  { value: "0", label: "Landfill waste by 2030", icon: Droplets },
];

export default function SustainabilityPage() {
  return (
    <main className="bg-background">
      {/* Hero - Split screen with massive typography */}
      <section className="min-h-[90vh] grid lg:grid-cols-2">
        <div className="bg-primary flex items-center py-24 lg:py-32 order-2 lg:order-1">
          <div className="px-8 lg:px-16 xl:px-24">
            <FadeIn>
              <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6">
                Environmental Responsibility
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-primary-foreground leading-[0.9] mb-8">
                Building<br />
                <span className="text-accent">Tomorrow</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-primary-foreground/70 leading-relaxed max-w-md mb-10">
                Practical, measurable progress toward packaging that works in real-world recycling systems.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <Link to="/contact">
                <Button size="lg" className="rounded-full">
                  Partner With Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
        <div className="relative min-h-[50vh] lg:min-h-full order-1 lg:order-2 overflow-hidden">
          <img
            src={recyclableImage}
            alt="Sustainable packaging"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary/40 to-transparent" />
        </div>
      </section>

      {/* Impact Stats - Full width with large numbers */}
      <section className="py-24 lg:py-32 border-b border-border">
        <div className="container-wide">
          <FadeIn className="mb-20 text-center">
            <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Our Impact
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black max-w-3xl mx-auto">
              Numbers That Matter
            </h2>
          </FadeIn>
          <StaggerChildren staggerDelay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {impactStats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                  <p className="text-5xl lg:text-6xl font-black text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Initiatives - Bento grid style */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <FadeIn direction="right" className="lg:col-span-1">
              <div className="sticky top-32">
                <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">
                  Our Approach
                </p>
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  Progress Over Perfection
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  We believe the most sustainable packaging is one that actually gets recycled. That means designing for existing infrastructure.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  No greenwashing—just honest, measurable progress toward packaging solutions that work in the real world.
                </p>
              </div>
            </FadeIn>

            <div className="lg:col-span-2">
              <StaggerChildren staggerDelay={0.15} className="grid sm:grid-cols-2 gap-6">
                {initiatives.map((initiative) => (
                  <StaggerItem key={initiative.title}>
                    <div className="group bg-card rounded-2xl p-8 border border-border hover:border-accent transition-all duration-500 card-elevated h-full">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                          <initiative.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
                        </div>
                        <div className="text-right">
                          <p className="text-3xl font-black text-accent">{initiative.stats}</p>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{initiative.statsLabel}</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {initiative.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap - Horizontal timeline with progress bars */}
      <section className="py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
        <div className="container-wide">
          <FadeIn className="text-center mb-20">
            <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">
              Long-Term Vision
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
              Sustainability Roadmap
            </h2>
            <p className="text-xl text-primary-foreground/60 max-w-2xl mx-auto">
              Clear, measurable commitments with defined timelines. We report progress annually.
            </p>
          </FadeIn>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-px bg-primary-foreground/20" />
            
            <StaggerChildren staggerDelay={0.12} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {commitments.map((item) => (
                <StaggerItem key={item.year}>
                  <div className="relative">
                    {/* Timeline dot */}
                    <div className="hidden lg:flex absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-accent items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    
                    <div className="bg-primary-foreground/5 rounded-2xl p-8 border border-primary-foreground/10 hover:border-accent/50 transition-colors">
                      <p className="text-6xl font-black text-accent mb-4">{item.year}</p>
                      <p className="text-primary-foreground/80 mb-6 min-h-[60px]">{item.goal}</p>
                      
                      {/* Progress bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-primary-foreground/50">Progress</span>
                          <span className="font-bold text-accent">{item.progress}%</span>
                        </div>
                        <div className="h-2 bg-primary-foreground/10 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-accent rounded-full transition-all duration-1000"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Certifications - Modern grid */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn direction="right">
              <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-4">
                Verified Progress
              </p>
              <h2 className="text-4xl md:text-5xl font-black mb-8">
                Certifications & Standards
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-12">
                Third-party certifications validate our sustainability claims and ensure we're following recognized best practices.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {certifications.map((cert) => (
                  <div 
                    key={cert.name}
                    className="bg-card rounded-xl p-5 border border-border text-center hover:border-accent transition-colors"
                  >
                    <Award className="h-8 w-8 text-accent mx-auto mb-3" />
                    <p className="font-bold text-sm mb-1">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.status}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <ScaleIn delay={0.2}>
              <div className="bg-secondary rounded-3xl p-10 lg:p-12">
                <h3 className="text-2xl font-bold mb-6">Recyclability Guidance</h3>
                <p className="text-muted-foreground mb-10 text-lg leading-relaxed">
                  We provide How2Recycle labeling guidance and design our structures to meet APR Design Guide criteria.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-5 p-5 bg-card rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">Pre-Consumer Waste</p>
                      <p className="text-muted-foreground">95% of manufacturing scrap is recycled</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 p-5 bg-card rounded-xl">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <CheckCircle className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-lg mb-1">PCR Content Available</p>
                      <p className="text-muted-foreground">Up to 50% post-consumer recycled content</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* CTA - Full bleed with gradient */}
      <section className="py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 blur-3xl" />
        
        <div className="container-wide relative">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <p className="text-accent font-bold uppercase tracking-[0.2em] text-sm mb-6">
              Let's Build Together
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8">
              Ready to Make<br />Packaging Sustainable?
            </h2>
            <p className="text-xl text-primary-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Our engineering team can assess your current packaging and recommend pathways to improved sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/contact">
                <Button size="lg" className="rounded-full">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10">
                  Explore Products
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
