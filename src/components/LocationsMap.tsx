import { MapPin } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const locations = [
  {
    id: 1,
    name: "North American Headquarters",
    address: "1234 Industrial Blvd",
    city: "Manufacturing District, TX 75001",
    country: "United States",
    type: "HQ & Manufacturing",
    coords: { lat: 32.7767, lng: -96.7970 },
  },
  {
    id: 2,
    name: "West Coast Facility",
    address: "5678 Commerce Way",
    city: "Los Angeles, CA 90001",
    country: "United States",
    type: "Manufacturing & Distribution",
    coords: { lat: 34.0522, lng: -118.2437 },
  },
  {
    id: 3,
    name: "European Operations",
    address: "123 Packaging Strasse",
    city: "Frankfurt, 60311",
    country: "Germany",
    type: "Sales & Distribution",
    coords: { lat: 50.1109, lng: 8.6821 },
  },
  {
    id: 4,
    name: "Asia Pacific Hub",
    address: "456 Industrial Park",
    city: "Singapore 238823",
    country: "Singapore",
    type: "Manufacturing & Sales",
    coords: { lat: 1.3521, lng: 103.8198 },
  },
];

export function LocationsMap() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-wide">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-wider text-accent mb-3">
            Global Presence
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            Our Locations
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With manufacturing facilities and sales offices across the globe, we're positioned to serve your packaging needs wherever you are.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Map Embed */}
          <FadeIn direction="left" className="order-2 lg:order-1">
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-lg overflow-hidden bg-muted border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53089673.18471855!2d-57.61494595!3d20.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDAwJzAwLjAiTiA1N8KwMzYnNTMuOCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lamina Packaging Global Locations"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </FadeIn>

          {/* Location Cards */}
          <div className="order-1 lg:order-2">
            <StaggerChildren staggerDelay={0.1} className="space-y-4">
              {locations.map((location) => (
                <StaggerItem key={location.id}>
                  <div className="group p-6 rounded-lg bg-card border border-border hover:border-accent transition-all duration-300 card-elevated">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="font-bold text-lg group-hover:text-accent transition-colors">
                              {location.name}
                            </h3>
                            <p className="text-xs font-medium uppercase tracking-wider text-accent mt-1">
                              {location.type}
                            </p>
                          </div>
                        </div>
                        <div className="mt-3 text-sm text-muted-foreground">
                          <p>{location.address}</p>
                          <p>{location.city}</p>
                          <p className="font-medium text-foreground">{location.country}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </div>
    </section>
  );
}
