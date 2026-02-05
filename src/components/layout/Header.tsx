import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useProductCategories } from "@/hooks/useProductCategories";

import logo from "@/assets/FormaPack Logo.svg";
import standupPouches from "@/assets/product-standup-pouches.jpg";
import rollstock from "@/assets/product-rollstock.jpg";
import sachets from "@/assets/product-sachets.jpg";
import highBarrier from "@/assets/product-high-barrier.jpg";
import laminationImg from "@/assets/capability-lamination.jpg";
import recyclable from "@/assets/product-recyclable.jpg";

// Fallback images for product categories
const categoryImages: Record<string, string> = {
  "pouches": standupPouches,
  "rollstock": rollstock,
  "lidding-film": sachets,
  "thermoform-film": laminationImg,
};

// Short descriptions for menu hover
const categoryDescriptions: Record<string, string> = {
  "pouches": "Stand-up, flat bottom & spouted pouches",
  "rollstock": "VFFS, HFFS & flow-wrap films",
  "lidding-film": "Peelable & resealable lidding",
  "thermoform-film": "Forming & non-forming films",
  "Shrink Sleeves": "Single-serve & portion packs",
};

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
  { name: "About", href: "/about" },
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

interface HoveredProduct {
  name: string;
  slug: string;
  description: string;
  image: string;
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<HoveredProduct | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { categories } = useProductCategories();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  // Limit product menu to specific ordered items
  const productMenuOrder = [
    { key: "pouches", label: "Pouches" },
    { key: "rollstock", label: "Rollstock" },
    { key: "lidding-film", label: "Lidding Film" },
    { key: "shrink-sleeves", label: "Shrink Sleeves & Bands" },
    { key: "thermoform-film", label: "Thermoforming film" },
  ];

  const productCategories = productMenuOrder
    .map((p) => {
      // try match by slug first, then by name contains
      const found = categories.find((c) => c.slug === p.key) || categories.find((c) => c.name?.toLowerCase().includes(p.label.toLowerCase().split(" ")[0]));
      return found ? found : null;
    })
    .filter(Boolean) as typeof categories;

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      scrolled ? "glass py-2" : "bg-transparent py-4"
    )}>
      <nav className="container-wide flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="FormaPack"
            className={cn(
              "transition-all duration-300",
              scrolled ? "h-14" : "h-12",
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
                      ? "text-secondary"
                      : scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/80 hover:text-white"
                  )}
              >
                {item.name}
                {(item.children || item.hasProductMenu) && <ChevronDown className="h-3 w-3 opacity-50" />}
              </Link>

              {/* Products Dropdown */}
              {item.hasProductMenu && openDropdown === item.name && categories.length > 0 && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4">
                  <div className="glass rounded-2xl overflow-hidden min-w-[560px]">
                    <div className="flex">
                      <div className="w-64 p-4 space-y-1">
                        {productCategories.map((cat) => {
                          const image = cat.overview_image_url || categoryImages[cat.slug] || standupPouches;
                          const desc = categoryDescriptions[cat.slug] || cat.overview_description.slice(0, 50) + "...";
                          return (
                            <Link
                              key={cat.slug}
                              to={`/products/${cat.slug}`}
                              className={cn(
                                "flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all",
                                hoveredProduct?.slug === cat.slug
                                  ? "bg-accent text-accent-foreground"
                                  : "text-foreground/80 hover:bg-secondary"
                              )}
                              onMouseEnter={() => setHoveredProduct({ name: cat.name, slug: cat.slug, description: desc, image })}
                            >
                              {cat.name}
                              <ArrowRight className="h-3 w-3 opacity-40" />
                            </Link>
                          );
                        })}
                      </div>
                      <div className="flex-1 relative overflow-hidden">
                        {hoveredProduct ? (
                          <>
                            <img src={hoveredProduct.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                              <p className="text-white font-medium">{hoveredProduct.name}</p>
                              <p className="text-white/70 text-xs">{hoveredProduct.description}</p>
                            </div>
                          </>
                        ) : (
                          <div className="h-full bg-secondary flex items-center justify-center p-6">
                            <p className="text-muted-foreground text-sm text-center"></p>
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
            <Button
  size="sm"
  className="rounded-full bg-[#f0b61b] hover:bg-[#f0b61b]/90 text-white"
>
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
        <div className="lg:hidden glass mt-2 mx-4 rounded-2xl overflow-hidden max-h-[80vh] overflow-y-auto">
          <div className="p-4 space-y-2">
            <Link
              to="/"
              className={cn(
                "block px-4 py-3 font-medium rounded-xl hover:bg-secondary transition-colors",
                isActive("/") ? "text-secondary" : "text-foreground hover:text-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            
            {/* Products Section */}
                      <div className="px-4 py-2">
              <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Products</p>
              <div className="space-y-1 ml-2">
                {productCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    to={`/products/${cat.slug}`}
                    className={cn(
                      "block px-3 py-2 text-sm rounded-lg hover:bg-secondary transition-colors",
                      isActive(`/products/${cat.slug}`) ? "text-secondary" : "text-foreground/80 hover:text-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other nav items */}
            {navigation.filter(item => item.name !== "Home" && item.name !== "Products").map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "block px-4 py-3 rounded-xl hover:bg-secondary transition-colors",
                  isActive(item.href) ? "text-secondary" : "text-foreground/80 hover:text-foreground"
                )}
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
