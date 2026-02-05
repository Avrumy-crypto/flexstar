import { useParams, Link } from "react-router-dom";
import { useProductCategory, useProductCategories } from "@/hooks/useProductCategories";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight, Package, Box, Droplet, Square, Layers, Wind, Hand, RefreshCw, Shield, Eye, Thermometer, Leaf, Recycle, File, Columns, Minus, Maximize, Minimize, ArrowDown } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

// Images for product option tiles
import standupPouches from "@/assets/product-standup-pouches.jpg";
import ReadyMadePouches from "@/assets/fivestarpouches.png";
import sachets from "@/assets/product-sachets.jpg";
import rollstock from "@/assets/product-rollstock.jpg";
import highBarrier from "@/assets/product-high-barrier.jpg";
import laminationImg from "@/assets/capability-lamination.jpg";
import extrusionImg from "@/assets/capability-extrusion.jpg";
import capabilityConverting from "@/assets/capability-converting.jpg";

// Icon mapping for format options
const iconMap: Record<string, React.ElementType> = {
  package: Package,
  box: Box,
  droplet: Droplet,
  square: Square,
  layers: Layers,
  wind: Wind,
  hand: Hand,
  "refresh-cw": RefreshCw,
  shield: Shield,
  eye: Eye,
  thermometer: Thermometer,
  leaf: Leaf,
  recycle: Recycle,
  file: File,
  columns: Columns,
  minus: Minus,
  maximize: Maximize,
  minimize: Minimize,
  "arrow-down": ArrowDown,
  "arrow-right": ArrowRight,
};

function CategorySkeleton() {
  return (
    <main>
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container-wide">
          <Skeleton className="h-6 w-32 mb-4 bg-primary-foreground/20" />
          <Skeleton className="h-12 w-96 mb-6 bg-primary-foreground/20" />
          <Skeleton className="h-24 w-full max-w-2xl bg-primary-foreground/20" />
        </div>
      </section>
      <section className="py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-40 rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ProductCategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const { category, isLoading, error } = useProductCategory(slug);
  const { categories } = useProductCategories();

  const [selectedClosure, setSelectedClosure] = useState<any>(
    (category?.capabilities?.closures && category.capabilities.closures[0]) || null
  );
  const [selectedFinish, setSelectedFinish] = useState<any>(
    (category?.capabilities?.finishes && category.capabilities.finishes[0]) || null
  );

  const getImageForOption = (opt: any, cat: any) => {
    if (!opt) return cat?.overview_image_url || standupPouches;
    return opt.image_url || opt.image || cat?.overview_image_url || standupPouches;
  };

  if (isLoading) return <CategorySkeleton />;

  if (error || !category) {
    return (
      <main className="py-20">
        <div className="container-wide text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Product Category Not Found</h1>
          <p className="text-muted-foreground mb-8">The requested product category could not be found.</p>
          <Link to="/products">
            <Button>View All Products</Button>
          </Link>
        </div>
      </main>
    );
  }

  const capabilities = category.capabilities || {};

  return (
    <main>
      {/* Hero / Overview Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container-wide">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-3">
              {category.name}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight">
              {category.overview_headline}
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/80 leading-relaxed mb-8">
              {category.overview_description}
            </p>
            {category.overview_use_cases.length > 0 && (
              <div className="flex flex-wrap gap-3">
              {category.overview_use_cases.map((useCase) => (
                  <span
                    key={useCase}
                    className="px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium"
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Quick Nav removed per request - direct product options shown below */}

      {/* B. Product Format/Style Options (Images + Names) */}
      <section className="py-16 lg:py-20">
        <div className="container-wide">
          <div className="text-center mb-12">
              <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Available Formats</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Product Options</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {(() => {
              // For pouches, use a curated list of common pouch types with images
              if (category.slug === "pouches") {
                const pouchOptions = [
                  { name: "Stand Up Pouch", image: standupPouches },
                  { name: "Flat Bottom Pouch", image: ReadyMadePouches },
                  { name: "3-Side Seal Pouch", image: sachets },
                  { name: "Spout Pouch", image: rollstock },
                  { name: "Valved Pouch", image: highBarrier },
                  { name: "Shrink Sleeves", image: capabilityConverting },
                  { name: "Shaped Pouch", image: laminationImg },
                  { name: "Produce Pouch", image: extrusionImg },
                ];

                return pouchOptions.map((opt) => (
                  <div key={opt.name} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-2xl overflow-hidden shadow-sm bg-card">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                      <img src={opt.image} alt={opt.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-foreground">{opt.name}</h3>
                    </div>
                  </div>
                ));
              }

              // Fallback: show category.format_options images (if available) or icon placeholder
              return category.format_options.map((option) => {
                const img = category.overview_image_url || undefined;
                return (
                  <div key={option.name} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-2xl overflow-hidden shadow-sm bg-card">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-muted">
                      {img ? (
                        <img src={img} alt={option.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-muted-foreground">Image</div>
                      )}
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-foreground">{option.name}</h3>
                    </div>
                  </div>
                );
              });
            })()}
          </div>
        </div>
      </section>

      {/* C. Full Capabilities Section */}
      <section className="py-16 lg:py-20 bg-secondary/30">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Capabilities</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {category.name} Features & Options
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {category.slug === "pouches" ? (
              <>
                {/* Top row: 3-up cards */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
                  {capabilities.barriers && capabilities.barriers.length > 0 && (
                    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Shield className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">Barrier Properties</h3>
                      </div>
                      <div className="space-y-3">
                        {capabilities.barriers.map((item) => (
                          <div key={item.name} className="rounded-md p-2">
                            <p className="font-semibold text-foreground">{item.name}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {capabilities.printing && capabilities.printing.length > 0 && (
                    <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                          <Layers className="w-5 h-5 text-accent" />
                        </div>
                        <h3 className="text-lg font-bold text-foreground">Printing Methods</h3>
                      </div>
                      <div className="space-y-3">
                        {capabilities.printing.map((item) => (
                          <div key={item.name} className="rounded-md p-2">
                            <p className="font-semibold text-foreground">{item.name}</p>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/** Compliance & Certifications - composed from compliance or similar fields */}
                  <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">Compliance & Certifications</h3>
                    </div>
                    <div className="space-y-3">
                      <div className="rounded-md p-2">
                        <p className="font-semibold text-foreground">Food-contact material validation</p>
                        <p className="text-sm text-muted-foreground">Materials selected and validated for regulatory needs.</p>
                      </div>
                      <div className="rounded-md p-2">
                        <p className="font-semibold text-foreground">Inspection & quality checks</p>
                        <p className="text-sm text-muted-foreground">Inline and final inspections ensure consistency.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom row: Finishes and Closure Options as two interactive sections */}
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Finishes</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        {capabilities.finishes && capabilities.finishes.length > 0 ? (
                          capabilities.finishes.map((item) => (
                            <button
                              key={item.name}
                              onClick={() => setSelectedFinish(item)}
                              className={cn(
                                "w-full text-left px-3 py-2 rounded-lg transition-colors",
                                selectedFinish?.name === item.name ? "bg-secondary text-secondary-foreground" : "hover:bg-secondary/10"
                              )}
                            >
                              <div className="font-semibold">{item.name}</div>
                              <div className="text-sm text-muted-foreground">{item.description}</div>
                            </button>
                          ))
                        ) : (
                          <p className="text-sm text-muted-foreground">No finishes listed.</p>
                        )}
                      </div>

                      <div className="rounded-md overflow-hidden bg-muted flex items-center justify-center">
                        <img src={getImageForOption(selectedFinish, category)} alt={selectedFinish?.name || "Finish"} className="w-full h-56 object-cover" />
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4">Closure Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        {capabilities.closures && capabilities.closures.length > 0 ? (
                          capabilities.closures
                            .filter((item) => item.name?.toLowerCase().trim() !== "hang hole")
                            .map((item) => (
                              <button
                                key={item.name}
                                onClick={() => setSelectedClosure(item)}
                                className={cn(
                                  "w-full text-left px-3 py-2 rounded-lg transition-colors",
                                  selectedClosure?.name === item.name ? "bg-secondary text-secondary-foreground" : "hover:bg-secondary/10"
                                )}
                              >
                                <div className="font-semibold">{item.name}</div>
                                <div className="text-sm text-muted-foreground">{item.description}</div>
                              </button>
                            ))
                        ) : (
                          <p className="text-sm text-muted-foreground">No closure options listed.</p>
                        )}
                      </div>

                      <div className="rounded-md overflow-hidden bg-muted flex items-center justify-center">
                        <img src={getImageForOption(selectedClosure, category)} alt={selectedClosure?.name || "Closure"} className="w-full h-56 object-cover" />
                      </div>
                    </div>
                  </div>
                </div>

                {capabilities.compliance && capabilities.compliance.length > 0 && (
                  <div className="w-full lg:w-1/2 xl:w-1/3 bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-accent" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">Compliance & Certifications</h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {capabilities.compliance.map((item) => (
                        <div key={item.name} className="rounded-md p-2">
                          <p className="font-semibold text-foreground">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            ) : (
              // Default layout for other categories (unchanged)
              <>
                {/* Closures */}
                {capabilities.closures && capabilities.closures.length > 0 && (
                  <div className="w-full lg:w-1/2 xl:w-1/3 bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Package className="w-5 h-5 text-accent" />
                      Closure Options
                    </h3>
                    <div className="space-y-3">
                      {capabilities.closures.map((item) => (
                        <div key={item.name} className="border-b border-border/50 pb-3 last:border-0 last:pb-0">
                          <p className="font-medium text-foreground">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Barriers */}
                {capabilities.barriers && capabilities.barriers.length > 0 && (
                  <div className="w-full lg:w-1/2 xl:w-1/3 bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-accent" />
                      Barrier Properties
                    </h3>
                    <div className="space-y-3">
                      {capabilities.barriers.map((item) => (
                        <div key={item.name} className="border-b border-border/50 pb-3 last:border-0 last:pb-0">
                          <p className="font-medium text-foreground">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Printing */}
                {capabilities.printing && capabilities.printing.length > 0 && (
                  <div className="w-full lg:w-1/2 xl:w-1/3 bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Layers className="w-5 h-5 text-accent" />
                      Printing Methods
                    </h3>
                    <div className="space-y-3">
                      {capabilities.printing.map((item) => (
                        <div key={item.name} className="border-b border-border/50 pb-3 last:border-0 last:pb-0">
                          <p className="font-medium text-foreground">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Finishes */}
                {capabilities.finishes && capabilities.finishes.length > 0 && (
                  <div className="w-full lg:w-1/2 xl:w-1/3 bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Eye className="w-5 h-5 text-accent" />
                      Finishes
                    </h3>
                    <div className="space-y-3">
                      {capabilities.finishes.map((item) => (
                        <div key={item.name} className="border-b border-border/50 pb-3 last:border-0 last:pb-0">
                          <p className="font-medium text-foreground">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Compliance */}
                {capabilities.compliance && capabilities.compliance.length > 0 && (
                  <div className="w-full lg:w-1/2 xl:w-1/3 bg-card border border-border rounded-2xl p-6">
                    <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-accent" />
                      Compliance & Certifications
                    </h3>
                    <div className="space-y-3">
                      {capabilities.compliance.map((item) => (
                        <div key={item.name} className="border-b border-border/50 pb-3 last:border-0 last:pb-0">
                          <p className="font-medium text-foreground">{item.name}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>

      {/* D. Materials & Structures */}
      <section className="py-16 lg:py-20">
        <div className="container-wide">
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-2">Substrates</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {category.materials_headline}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {category.materials_description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {category.material_options.map((material) => (
              <div
                key={material.name}
                className="w-full md:w-1/2 lg:w-1/3 bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors"
              >
                <h3 className="text-lg font-bold text-foreground mb-2">{material.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{material.description}</p>
                <div className="flex flex-wrap gap-2">
                  {material.properties.map((prop) => (
                    <span
                      key={prop}
                      className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent font-medium"
                    >
                      {prop}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E. Product-Specific CTA */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {category.cta_headline}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              {category.cta_description}
            </p>
            <Link to={category.cta_button_link}>
              <Button size="lg" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                {category.cta_button_text}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
