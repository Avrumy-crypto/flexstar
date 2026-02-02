import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, ArrowRight } from "lucide-react";

const navigation = {
  products: [
    { name: "Stand-Up Pouches", href: "/products/stand-up-pouches" },
    { name: "Flat Pouches", href: "/products/flat-pouches" },
    { name: "Rollstock", href: "/products/rollstock" },
    { name: "Sachets & Stick Packs", href: "/products/sachets" },
    { name: "High-Barrier Packaging", href: "/products/high-barrier" },
    { name: "Recyclable Packaging", href: "/products/recyclable" },
  ],
  resources: [
    { name: "Materials Guide", href: "/materials" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "FAQ", href: "/faq" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
                <span className="text-lg font-bold text-accent-foreground">FP</span>
              </div>
              <span className="text-lg font-semibold">FlexPack Pro</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Your trusted partner for custom flexible packaging solutions. Global sourcing expertise with local service.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@flexpackpro.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                info@flexpackpro.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                +1 (234) 567-890
              </a>
              <div className="flex items-start gap-2 text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>123 Packaging Way, Industrial District</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
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

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {navigation.resources.map((item) => (
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
            <h3 className="font-semibold mb-4 mt-8">Company</h3>
            <ul className="space-y-2">
              {navigation.company.map((item) => (
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
            <h3 className="font-semibold mb-4">Ready to Get Started?</h3>
            <p className="text-sm text-primary-foreground/70 mb-6">
              Get custom packaging solutions tailored to your product requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <div className="mt-8">
              <h4 className="text-sm font-medium mb-3">Follow Us</h4>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-primary-foreground/10 hover:bg-accent transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
            <p>© {new Date().getFullYear()} FlexPack Pro. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-primary-foreground transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary-foreground transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
