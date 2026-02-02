import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Recycle, TrendingDown, CheckCircle } from "lucide-react";
import recyclableImage from "@/assets/product-recyclable.jpg";

const initiatives = [
  {
    icon: Recycle,
    title: "Recyclable Mono-Materials",
    description: "We offer PE and PP mono-material structures designed for existing recycling streams. These pouches provide functional barriers while remaining recyclable.",
    details: [
      "PE mono-material pouches (recyclable in PE stream)",
      "PP mono-material options for higher temperature applications",
      "How2Recycle labeling guidance",
      "Compatibility testing with recycling facilities",
    ],
  },
  {
    icon: Leaf,
    title: "Post-Consumer Recycled (PCR)",
    description: "Incorporate recycled content into your packaging without compromising performance. We source certified PCR resins and validate food-contact compliance.",
    details: [
      "Up to 50% PCR content in non-food-contact layers",
      "Certified PCR sources with traceability",
      "Maintains mechanical properties and printability",
      "Reduces virgin plastic demand",
    ],
  },
  {
    icon: TrendingDown,
    title: "Material Reduction",
    description: "Downgauging and optimizing film structures reduces material usage while maintaining protection. Often the most impactful sustainability measure.",
    details: [
      "Film structure optimization studies",
      "Downgauging feasibility assessments",
      "Performance testing to validate thinner materials",
      "Carbon footprint reduction calculations",
    ],
  },
];

const realTalk = [
  {
    myth: "All 'eco-friendly' packaging is recyclable",
    reality: "Recyclability depends on local infrastructure. A technically recyclable pouch is useless if collection and processing don't exist in your market. We focus on materials accepted by established recycling systems.",
  },
  {
    myth: "Compostable packaging is always better",
    reality: "Compostable films require industrial composting facilities, which are rare. If sent to landfill, they won't decompose properly. We recommend compostable options only where appropriate infrastructure exists.",
  },
  {
    myth: "Paper packaging is always more sustainable",
    reality: "Paper requires plastic or coating for moisture barrier. Paper production can have higher water and energy use. The best choice depends on a full lifecycle assessment, not assumptions.",
  },
  {
    myth: "Flexible packaging is bad for the environment",
    reality: "Flexible packaging often has a lower carbon footprint than rigid alternatives due to material efficiency and transportation benefits. The key is designing for recyclability and reducing food waste.",
  },
];

const certifications = [
  "How2Recycle labeling program",
  "FSC-certified paper components",
  "APR Design Guide compliance",
  "RecyClass recyclability assessment",
  "ISO 14001 environmental management",
];

export default function SustainabilityPage() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient py-16 lg:py-24">
        <div className="container-wide">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Sustainability
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              We take a pragmatic approach to sustainable packaging—focusing on solutions that work in real-world recycling systems while maintaining the protection your products need.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sustainability in packaging isn't simple. We avoid greenwashing and instead focus on measurable improvements: material reduction, designing for recyclability, and incorporating recycled content where feasible.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The most sustainable packaging is one that protects its contents effectively. A package that fails—causing product damage or food waste—has a far greater environmental impact than the packaging material itself.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We work with you to find the right balance between protection, cost, and environmental impact for your specific products and markets.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden">
              <img
                src={recyclableImage}
                alt="Sustainable packaging options"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {initiatives.map((initiative) => (
              <div
                key={initiative.title}
                className="bg-card rounded-xl p-6 border border-border card-elevated"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <initiative.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{initiative.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {initiative.description}
                </p>
                <ul className="space-y-2">
                  {initiative.details.map((detail) => (
                    <li key={detail} className="text-sm flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Talk */}
      <section className="py-16 lg:py-24 section-gradient">
        <div className="container-wide">
          <h2 className="text-3xl font-bold mb-4">Real Talk: Myths vs. Reality</h2>
          <p className="text-muted-foreground mb-12 max-w-3xl">
            Sustainability claims can be confusing. Here's our honest take on common misconceptions in packaging sustainability.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {realTalk.map((item, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <div className="mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-destructive">
                    Common Belief
                  </span>
                  <p className="text-lg font-medium mt-1">"{item.myth}"</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                    Reality
                  </span>
                  <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                    {item.reality}
                  </p>
                </div>
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
              <h2 className="text-3xl font-bold mb-6">Certifications & Standards</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We work with certified suppliers and follow established guidelines for sustainable packaging design. Our team stays current with evolving regulations and industry best practices.
              </p>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span className="font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary rounded-xl p-8 text-primary-foreground">
              <h3 className="text-xl font-semibold mb-4">
                No False Promises
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                We won't claim a package is "sustainable" without evidence. If you need certifications or data for sustainability reports, we provide documentation and testing to back up claims.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed">
                Our goal is helping you make informed decisions—not selling you on marketing buzzwords.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 section-gradient">
        <div className="container-wide">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Explore Sustainable Options for Your Products
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Let's discuss your sustainability goals and find packaging solutions that deliver both environmental benefits and product protection.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="lg">
                Start the Conversation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
