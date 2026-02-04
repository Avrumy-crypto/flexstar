import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const links = {
  products: [
    { name: "Thermoform Film", href: "/products" },
    { name: "Shrink Sleeves", href: "/products" },
    { name: "Pouches", href: "/products" },
    { name: "Roll Stock", href: "/products" },
  ],
  company: [
    { name: "Capabilities", href: "/capabilities" },
    { name: "Markets", href: "/markets" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Contact", href: "/contact" },
  ],
};

const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logo} alt="Five Star" className="h-12 w-auto brightness-0 invert mb-6" />
            <p className="text-background/60 text-sm leading-relaxed max-w-sm mb-8">
              Industry-leading manufacturer of flexible packaging films and pouches.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:sales@Fivestarcorr.com" className="flex items-center gap-3 text-background/60 hover:text-background transition-colors">
                <Mail className="h-4 w-4" />
                sales@Fivestarcorr.com
              </a>
              <a href="tel:718-875-0022" className="flex items-center gap-3 text-background/60 hover:text-background transition-colors">
                <Phone className="h-4 w-4" />
                718-875-0022
              </a>
              <div className="flex items-start gap-3 text-background/60">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>175 Classon Avenue, Brooklyn NY 11205</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-medium text-background/40 uppercase tracking-wider mb-4">Products</h3>
            <ul className="space-y-3">
              {links.products.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} onClick={scrollToTop} className="text-sm text-background/60 hover:text-background transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-medium text-background/40 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {links.company.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} onClick={scrollToTop} className="text-sm text-background/60 hover:text-background transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-background/10">
        <div className="container-wide py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-background/40">
            <p>© {new Date().getFullYear()} Five Star Packaging</p>
            <div className="flex gap-6">
              <Link to="/privacy" onClick={scrollToTop} className="hover:text-background transition-colors">Privacy</Link>
              <Link to="/terms" onClick={scrollToTop} className="hover:text-background transition-colors">Terms</Link>
              <Link to="/admin/auth" onClick={scrollToTop} className="hover:text-background transition-colors">Admin</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
