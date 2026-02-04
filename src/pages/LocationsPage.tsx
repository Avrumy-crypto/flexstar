import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import map from "@/assets/chrome_wC7ZNi2Ywf.jpg";

const globalStats = [
  { value: "9", label: "Locations" },
  { value: "30+", label: "Years in Business" },
  { value: "40+", label: "Team Members" },
  { value: "100%", label: "Customer Satisfaction" },
];

export default function LocationsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-28 lg:py-36 bg-primary">
        <div className="container-wide">
          <FadeIn className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-4">
              Global Presence
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8">
              Our Locations
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              With manufacturing facilities and sales offices across the globe, we're positioned to
              serve your packaging needs wherever you are.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Global Stats */}
      <section className="py-16 border-b border-border">
        <div className="container-wide">
          <StaggerChildren staggerDelay={0.1} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {globalStats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <p className="text-4xl lg:text-5xl font-black text-accent mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Map Section (map only) */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <FadeIn className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-3">
              Worldwide Coverage
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Find Us Around the Country
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our global footprint on the map below.
            </p>
          </FadeIn>

          <FadeIn>
            <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-muted border border-border">
              {/* 
                ✅ Replace this src with your own multi-pin embed (recommended):
                - Google My Maps embed URL (best for multiple pins)
                - or a Google Maps embed that represents your saved map
              */}
              <img
                src={map}
                width="100%"
                height="100%"
                className="absolute -top-50 left-0 w-full h-[calc(100%+3rem)]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Global Locations Map"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="container-wide">
          <FadeIn className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-8">
              Ready to Connect?
            </h2>
            <p className="text-xl text-primary-foreground/70 mb-10 leading-relaxed">
              Reach out to the location nearest you or contact our main office for general inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link to="/contact">
                <Button size="lg" className="rounded-full">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="mailto:sales@Fivestarcorr.com">
                <Button variant="outline" size="lg" className="rounded-full">
                  Email Us
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
