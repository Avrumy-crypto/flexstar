import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import logo from "@/assets/logo.png";
import standupPouches from "@/assets/product-standup-pouches.jpg";
import rollstock from "@/assets/product-rollstock.jpg";
import sachets from "@/assets/product-sachets.jpg";
import highBarrier from "@/assets/product-high-barrier.jpg";
import laminationImg from "@/assets/capability-lamination.jpg";

const productItems = [
  { name: "Pouches", href: "/products#pouches", description: "Stand-up & flat bottom pouches", image: standupPouches },
  { name: "Roll Stock", href: "/products#rollstock", description: "VFFS & HFFS films", image: rollstock },
  { name: "Lidding Film", href: "/products#lidding-film", description: "Peelable & resealable", image: sachets },
  { name: "Shrink Sleeves", href: "/products#shrink-sleeves", description: "Full-body sleeves", image: highBarrier },
  { name: "Thermoforming", href: "/products#thermoforming-film", description: "High-performance films", image: laminationImg },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products", hasProductMenu: true },
  {
    name: "Capabilities",
    href: "/capabilities",
    children: [
      { category: "Services", items: [
        { name: "Extrusion", href: "/capabilities#extrusion" },
        { name: "Lamination", href: "/capabilities#lamination" },
        { name: "Printing", href: "/capabilities#printing" },
        { name: "Converting", href: "/capabilities#converting" },
      ]}
    ],
  },
  {
    name: "Markets",
    href: "/markets",
    children: [
      { category: "Industries", items: [
        { name: "Food & Beverage", href: "/markets#food-beverage" },
        { name: "Meat & Protein", href: "/markets#meat-protein" },
        { name: "Pet Food", href: "/markets#pet-food" },
        { name: "Medical", href: "/markets#medical-pharma" },
      ]}
    ],
  },
  { name: "Sustainability", href: "/sustainability" },
  {
    name: "Contact",
    href: "/contact",
    children: [
      { category: "Connect", items: [
        { name: "Contact Us", href: "/contact" },
        { name: "Locations", href: "/contact/locations" },
      ]}
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<typeof productItems[0] | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "glass py-2" : "bg-transparent py-4"
    )}>
      <nav className="container-wide flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img 
            src={logo} 
            alt="Five Star" 
            className={cn(
              "transition-all duration-300",
              scrolled ? "h-10" : "h-12",
              !scrolled && "brightness-0 invert"
            )} 
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => (item.children || item.hasProductMenu) && setOpenDropdown(item.name)}
              onMouseLeave={() => { setOpenDropdown(null); setHoveredProduct(null); }}
            >
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-full",
                  isActive(item.href)
                    ? "text-accent"
                    : scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
                )}
              >
                {item.name}
                {(item.children || item.hasProductMenu) && <ChevronDown className="h-3 w-3 opacity-50" />}
              </Link>

              {/* Products Dropdown */}
              {item.hasProductMenu && openDropdown === item.name && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                  <div className="glass rounded-2xl overflow-hidden min-w-[500px]">
                    <div className="flex">
                      <div className="w-56 p-4 space-y-1">
                        {productItems.map((product) => (
                          <Link
                            key={product.name}
                            to={product.href}
                            className={cn(
                              "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all",
                              hoveredProduct?.name === product.name
                                ? "bg-accent text-accent-foreground"
                                : "text-foreground/80 hover:bg-secondary"
                            )}
                            onMouseEnter={() => setHoveredProduct(product)}
                          >
                            {product.name}
                            <ArrowRight className="h-3 w-3 opacity-40" />
                          </Link>
                        ))}
                      </div>
                      <div className="w-60 relative overflow-hidden">
                        {hoveredProduct ? (
                          <>
                            <img src={hoveredProduct.image} alt="" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                              <p className="text-white font-medium">{hoveredProduct.name}</p>
                              <p className="text-white/70 text-xs">{hoveredProduct.description}</p>
                            </div>
                          </>
                        ) : (
                          <div className="h-full bg-secondary flex items-center justify-center p-6">
                            <p className="text-muted-foreground text-sm text-center">Hover to preview</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Regular Dropdown */}
              {item.children && !item.hasProductMenu && openDropdown === item.name && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                  <div className="glass rounded-2xl p-4 min-w-[200px]">
                    {item.children.map((category) => (
                      <div key={category.category} className="space-y-1">
                        {category.items.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-secondary rounded-xl transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <a 
            href="tel:718-875-0022" 
            className={cn(
              "text-sm font-medium transition-colors",
              scrolled ? "text-foreground/60 hover:text-foreground" : "text-white/60 hover:text-white"
            )}
          >
            718-875-0022
          </a>
          <Link to="/contact">
            <Button variant="default" size="sm" className="rounded-full">
              Get Quote
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-full transition-colors",
            scrolled ? "text-foreground" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden">
          <div className="p-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-4 py-3 text-foreground/80 hover:text-foreground rounded-xl hover:bg-secondary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full rounded-full">Get Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
