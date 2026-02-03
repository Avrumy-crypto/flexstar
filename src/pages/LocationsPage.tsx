import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ArrowRight, Globe } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const locations = [
  {
    id: 1,
    name: "North American Headquarters",
    address: "1234 Industrial Blvd",
    city: "Manufacturing District",
    state: "TX",
    zip: "75001",
    country: "United States",
    type: "HQ & Manufacturing",
    phone: "+1 (234) 567-890",
    email: "na@laminapackaging.com",
    features: ["Manufacturing", "R&D Center", "Corporate Office"],
  },
  {
    id: 2,
    name: "West Coast Facility",
    address: "5678 Commerce Way",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    country: "United States",
    type: "Manufacturing & Distribution",
    phone: "+1 (234) 567-891",
    email: "west@laminapackaging.com",
    features: ["Manufacturing", "Distribution", "Customer Service"],
  },
  {
    id: 3,
    name: "European Operations",
    address: "123 Packaging Strasse",
    city: "Frankfurt",
    state: "",
    zip: "60311",
    country: "Germany",
    type: "Sales & Distribution",
    phone: "+49 69 1234 5678",
    email: "eu@laminapackaging.com",
    features: ["Sales Office", "Distribution", "Technical Support"],
  },
  {
    id: 4,
    name: "Asia Pacific Hub",
    address: "456 Industrial Park",
    city: "Singapore",
    state: "",
    zip: "238823",
    country: "Singapore",
    type: "Manufacturing & Sales",
    phone: "+65 6123 4567",
    email: "apac@laminapackaging.com",
    features: ["Manufacturing", "Sales Office", "Quality Lab"],
  },
];

const globalStats = [
  { value: "4", label: "Global Locations" },
  { value: "12", label: "Countries Served" },
  { value: "500+", label: "Team Members" },
  { value: "24/7", label: "Support Coverage" },
];

export default function LocationsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-28 lg:py-36 bg-primary">
        <div className="container-wide">
          <FadeIn className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-4">Global Presence</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-8">
              Our Locations
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              With manufacturing facilities and sales offices across the globe, we're positioned to serve your packaging needs wherever you are.
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

      {/* Map Section */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <FadeIn className="mb-16 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-3">
              Worldwide Coverage
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Find Us Around the World
            </h2>
          </FadeIn>

          <FadeIn className="mb-16">
            <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-muted border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53089673.18471855!2d-57.61494595!3d20.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzAwLjAiTiA1N8KwMzYnNTMuOCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lamina Packaging Global Locations"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </FadeIn>

          {/* Location Cards */}
          <StaggerChildren staggerDelay={0.1} className="grid md:grid-cols-2 gap-8">
            {locations.map((location) => (
              <StaggerItem key={location.id}>
                <div className="group bg-card rounded-2xl border border-border hover:border-accent transition-all duration-300 card-elevated overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-start gap-5 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent transition-colors">
                        <MapPin className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
                          {location.name}
                        </h3>
                        <p className="text-sm font-medium uppercase tracking-wider text-accent mt-1">
                          {location.type}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-start gap-4">
                        <Globe className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                        <div className="text-muted-foreground">
                          <p>{location.address}</p>
                          <p>{location.city}{location.state && `, ${location.state}`} {location.zip}</p>
                          <p className="font-medium text-foreground">{location.country}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Phone className="h-5 w-5 text-muted-foreground shrink-0" />
                        <a href={`tel:${location.phone}`} className="text-muted-foreground hover:text-accent transition-colors">
                          {location.phone}
                        </a>
                      </div>
                      <div className="flex items-center gap-4">
                        <Mail className="h-5 w-5 text-muted-foreground shrink-0" />
                        <a href={`mailto:${location.email}`} className="text-muted-foreground hover:text-accent transition-colors">
                          {location.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {location.features.map((feature) => (
                        <span 
                          key={feature} 
                          className="text-xs font-medium px-3 py-1.5 rounded-full bg-secondary"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
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
