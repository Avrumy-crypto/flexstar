import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "/products",
    children: [
      {
        category: "Film Types",
        items: [
          { name: "Thermoform Film", href: "/products/thermoform-film" },
          { name: "Shrink Bands & Sleeves", href: "/products/shrink-bands-sleeves" },
          { name: "Pouches", href: "/products/pouches" },
          { name: "Roll Stock", href: "/products/rollstock" },
          { name: "Lidding Film", href: "/products/lidding-film" },
        ],
      },
      {
        category: "Pouch Types",
        items: [
          { name: "Stand-Up Pouches", href: "/products/stand-up-pouches" },
          { name: "Flat Bottom Pouches", href: "/products/flat-bottom-pouches" },
          { name: "Retort Pouches", href: "/products/retort-pouches" },
          { name: "Vacuum Pouches", href: "/products/vacuum-pouches" },
        ],
      },
      {
        category: "Specialty Films",
        items: [
          { name: "High-Barrier Laminates", href: "/products/high-barrier" },
          { name: "Cold Seal Films", href: "/products/cold-seal" },
          { name: "Peelable Films", href: "/products/peelable" },
          { name: "Anti-Fog Films", href: "/products/anti-fog" },
        ],
      },
    ],
  },
  {
    name: "Capabilities",
    href: "/capabilities",
    children: [
      {
        category: "Film Converting",
        items: [
          { name: "Extrusion", href: "/capabilities/extrusion" },
          { name: "Lamination", href: "/capabilities/lamination" },
          { name: "Printing", href: "/capabilities/printing" },
          { name: "Slitting & Rewinding", href: "/capabilities/slitting" },
        ],
      },
      {
        category: "Pouch Converting",
        items: [
          { name: "Pre-Made Pouch Converting", href: "/capabilities/pouch-converting" },
          { name: "Stand-Up Pouch Converting", href: "/capabilities/standup-converting" },
          { name: "Flat Bottom Pouch", href: "/capabilities/flat-bottom-converting" },
        ],
      },
    ],
  },
  {
    name: "Markets",
    href: "/markets",
    children: [
      {
        category: "Industries",
        items: [
          { name: "Food & Beverage", href: "/markets/food-beverage" },
          { name: "Meat & Protein", href: "/markets/meat-protein" },
          { name: "Dairy & Cheese", href: "/markets/dairy-cheese" },
          { name: "Pet Food", href: "/markets/pet-food" },
          { name: "Medical & Pharma", href: "/markets/medical-pharma" },
          { name: "Industrial", href: "/markets/industrial" },
        ],
      },
    ],
  },
  { name: "Sustainability", href: "/sustainability" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href || location.pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-lg">
      {/* Top bar */}
      <div className="border-b border-primary-foreground/10">
        <div className="container-wide flex h-10 items-center justify-between text-xs text-primary-foreground/70">
          <div className="flex items-center gap-6">
            <span>ISO 9001:2015 Certified</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">FDA Compliant Manufacturing</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+1234567890" className="hover:text-accent transition-colors">
              +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-wide flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center bg-accent rounded">
            <span className="text-xl font-black text-accent-foreground">LP</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-xl font-bold text-primary-foreground tracking-tight">LAMINA</span>
            <p className="text-[10px] text-primary-foreground/60 uppercase tracking-widest">Packaging Solutions</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-1">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors uppercase tracking-wide",
                  isActive(item.href)
                    ? "text-accent"
                    : "text-primary-foreground/80 hover:text-accent"
                )}
              >
                {item.name}
                {item.children && <ChevronDown className="h-4 w-4" />}
              </Link>

              {/* Mega Menu */}
              {item.children && openDropdown === item.name && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="min-w-[500px] rounded bg-card border border-border p-6 shadow-xl">
                    <div className="grid grid-cols-2 gap-8">
                      {item.children.map((category) => (
                        <div key={category.category}>
                          <h3 className="text-xs font-bold uppercase tracking-wider text-accent mb-3">
                            {category.category}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((child) => (
                              <li key={child.name}>
                                <Link
                                  to={child.href}
                                  className="block text-sm text-muted-foreground transition-colors hover:text-foreground hover:translate-x-1 transform duration-200"
                                >
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-3">
          <Link to="/contact">
            <Button variant="hero" size="default">
              Request Quote
            </Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden rounded p-2 text-primary-foreground/80 hover:text-accent"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-primary-foreground/10 bg-primary max-h-[70vh] overflow-auto">
          <div className="container-wide py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={cn(
                    "block px-4 py-3 text-sm font-medium uppercase tracking-wide",
                    isActive(item.href)
                      ? "text-accent"
                      : "text-primary-foreground/80 hover:text-accent"
                  )}
                  onClick={() => !item.children && setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-primary-foreground/10 pl-4">
                    {item.children.map((category) => (
                      <div key={category.category}>
                        <p className="text-xs font-bold uppercase tracking-wider text-accent/70 py-2">
                          {category.category}
                        </p>
                        {category.items.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-2 py-2 text-sm text-primary-foreground/60 hover:text-accent"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-primary-foreground/10 mt-4">
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button variant="hero" className="w-full">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
