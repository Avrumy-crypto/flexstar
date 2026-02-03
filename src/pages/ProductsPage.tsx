import { Link } from "react-router-dom";
import { useProductCategories } from "@/hooks/useProductCategories";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

// Import images for categories
import standupPouches from "@/assets/product-standup-pouches.jpg";
import rollstock from "@/assets/product-rollstock.jpg";
import sachets from "@/assets/product-sachets.jpg";
import highBarrier from "@/assets/product-high-barrier.jpg";
import laminationImg from "@/assets/capability-lamination.jpg";
import recyclable from "@/assets/product-recyclable.jpg";

// Map slugs to images (fallback images)
const categoryImages: Record<string, string> = {
  "pouches": standupPouches,
  "rollstock": rollstock,
  "lidding-film": sachets,
  "thermoform-film": laminationImg,
  "sachets-stick-packs": sachets,
  "high-barrier-packaging": highBarrier,
  "recyclable-mono-material": recyclable,
};

function ProductsSkeleton() {
  return (
    <main>
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container-wide">
          <Skeleton className="h-6 w-32 mb-4 bg-primary-foreground/20" />
          <Skeleton className="h-12 w-96 mb-6 bg-primary-foreground/20" />
          <Skeleton className="h-16 w-full max-w-2xl bg-primary-foreground/20" />
        </div>
      </section>
      <section className="py-16">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <Skeleton key={i} className="h-80 rounded-2xl" />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ProductsPage() {
  const { categories, isLoading, error } = useProductCategories();

  if (isLoading) return <ProductsSkeleton />;

  if (error) {
    return (
      <main className="py-20">
        <div className="container-wide text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Error Loading Products</h1>
          <p className="text-muted-foreground">Please try again later.</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container-wide">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-wider text-accent mb-3">
              Product Portfolio
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-tight">
              Flexible Packaging Solutions
            </h1>
            <p className="text-lg lg:text-xl text-primary-foreground/80 leading-relaxed">
              Seven product categories engineered for performance, protection, and shelf appeal. 
              Each solution is fully customizable to your exact specifications.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const image = category.overview_image_url || categoryImages[category.slug] || standupPouches;
              return (
                <Link
                  key={category.slug}
                  to={`/products/${category.slug}`}
                  className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-accent transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {category.name}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {category.overview_description}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-medium text-sm">
                      View Details
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-secondary/50">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Need a Custom Packaging Solution?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our engineering team specializes in developing bespoke packaging structures. 
              Let's discuss your specific requirements.
            </p>
            <Link to="/contact">
              <Button size="lg" className="rounded-full">
                Contact Engineering Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
