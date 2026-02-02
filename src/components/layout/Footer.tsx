import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from "lucide-react";

const navigation = {
  products: [
    { name: "Thermoform Film", href: "/products/thermoform-film" },
    { name: "Shrink Bands & Sleeves", href: "/products/shrink-bands-sleeves" },
    { name: "Pouches", href: "/products/pouches" },
    { name: "Roll Stock", href: "/products/rollstock" },
    { name: "Lidding Film", href: "/products/lidding-film" },
  ],
  capabilities: [
    { name: "Extrusion", href: "/capabilities/extrusion" },
    { name: "Lamination", href: "/capabilities/lamination" },
    { name: "Printing", href: "/capabilities/printing" },
    { name: "Converting", href: "/capabilities/converting" },
  ],
  markets: [
    { name: "Food & Beverage", href: "/markets/food-beverage" },
    { name: "Meat & Protein", href: "/markets/meat-protein" },
    { name: "Medical & Pharma", href: "/markets/medical-pharma" },
    { name: "Pet Food", href: "/markets/pet-food" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Contact", href: "/contact" },
  ],
};

const certifications = [
  "ISO 9001:2015",
  "FDA Compliant",
  "FSSC 22000",
  "SQF Certified",
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center bg-accent rounded">
                <span className="text-xl font-black text-accent-foreground">LP</span>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight">LAMINA</span>
                <p className="text-[10px] text-primary-foreground/60 uppercase tracking-widest">Packaging Solutions</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 max-w-sm">
              Industry-leading manufacturer of flexible packaging films and pouches. Serving global brands with innovative, sustainable solutions.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@laminapackaging.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                info@laminapackaging.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                +1 (234) 567-890
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>1234 Industrial Blvd, Manufacturing District, ST 12345</span>
              </div>
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-wider text-primary-foreground/50 mb-3">Certifications</p>
              <div className="flex flex-wrap gap-2">
                {certifications.map((cert) => (
                  <span
                    key={cert}
                    className="text-xs px-3 py-1.5 rounded bg-primary-foreground/10 text-primary-foreground/70"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-4">Products</h3>
            <ul className="space-y-2">
              {navigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-4">Capabilities</h3>
            <ul className="space-y-2">
              {navigation.capabilities.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-4 mt-8">Markets</h3>
            <ul className="space-y-2">
              {navigation.markets.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Column */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-4">Get Started</h3>
            <p className="text-sm text-primary-foreground/70 mb-6">
              Ready to discuss your packaging requirements? Our engineering team is here to help.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded bg-accent px-5 py-3 text-sm font-bold text-accent-foreground uppercase tracking-wide hover:bg-accent/90 transition-colors"
            >
              Request Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-primary-foreground/50 mb-3">Connect</h4>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded bg-primary-foreground/10 hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
            <p>© {new Date().getFullYear()} Lamina Packaging. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
              <Link to="/admin/auth" className="hover:text-primary-foreground transition-colors">Admin</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
