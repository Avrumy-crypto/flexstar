import { Link } from "react-router-dom";
import { useProductCategories } from "@/hooks/useProductCategories";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Import images for categories
import standupPouches from "@/assets/product-standup-pouches.jpg";
import rollstock from "@/assets/product-rollstock.jpg";
import sachets from "@/assets/product-sachets.jpg";
import highBarrier from "@/assets/product-high-barrier.jpg";
import laminationImg from "@/assets/capability-lamination.jpg";
import recyclable from "@/assets/product-recyclable.jpg";
import capabilityConverting from "@/assets/capability-converting.jpg";

// Map slugs to images (fallback images)
const categoryImages: Record<string, string> = {
  "pouches": standupPouches,
  "rollstock": rollstock,
  "lidding-film": sachets,
  "thermoform-film": laminationImg,
  "sachets-stick-packs": sachets,
  "high-barrier-packaging": highBarrier,
  "recyclable-mono-material": recyclable,
  "shrink-sleeves": capabilityConverting,
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
          <div className="flex flex-wrap justify-center gap-8">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <Skeleton key={i} className="w-full md:w-1/2 lg:w-1/3 h-80 rounded-2xl" />
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

  const allowedSlugs = [
    "pouches",
    "rollstock",
    "lidding-film",
    "shrink-sleeves",
    "thermoform-film",
  ];

  const filtered = categories.filter((c) => allowedSlugs.includes(c.slug));

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
              {filtered.length} product categories engineered for performance and protection.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <motion.div 
            className="flex flex-wrap justify-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {filtered.map((category) => {
              const image = category.overview_image_url || categoryImages[category.slug] || standupPouches;
              return (
                <motion.div
                  key={category.slug}
                  className="w-full md:w-1/2 lg:w-1/3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Link
                    to={`/products/${category.slug}`}
                    className="group relative flex flex-col h-full overflow-hidden rounded-3xl transition-all duration-300"
                    style={{
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 20px rgba(0, 0, 0, 0.06)"
                    }}
                  >
                    {/* Image Container */}
                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                      <img
                        src={image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    {/* Content Container */}
                    <div className="flex-1 p-8 bg-background flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                          {category.name}
                        </h2>
                        <p className="text-base text-muted-foreground leading-relaxed line-clamp-2">
                          {category.overview_description}
                        </p>
                      </div>
                      
                      <div className="flex items-center gap-2 text-accent font-medium mt-6 group-hover:gap-3 transition-all duration-300">
                        <span>Explore</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gray">
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
