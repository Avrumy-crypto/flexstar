import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export interface FormatOption {
  name: string;
  description: string;
  icon: string;
}

export interface CapabilityItem {
  name: string;
  description: string;
}

export interface Capabilities {
  closures?: CapabilityItem[];
  barriers?: CapabilityItem[];
  printing?: CapabilityItem[];
  finishes?: CapabilityItem[];
  compliance?: CapabilityItem[];
}

export interface MaterialOption {
  name: string;
  description: string;
  properties: string[];
}

export interface ProductCategory {
  id: string;
  slug: string;
  name: string;
  menu_order: number;
  overview_headline: string;
  overview_description: string;
  overview_use_cases: string[];
  overview_image_url: string | null;
  format_options: FormatOption[];
  capabilities: Capabilities;
  materials_headline: string;
  materials_description: string;
  material_options: MaterialOption[];
  cta_headline: string;
  cta_description: string;
  cta_button_text: string;
  cta_button_link: string;
  is_active: boolean;
}

export function useProductCategories() {
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("product_categories")
        .select("*")
        .eq("is_active", true)
        .order("menu_order");

      if (error) throw error;

      const parsed = (data || []).map((item) => ({
        ...item,
        format_options: (item.format_options as unknown as FormatOption[]) || [],
        capabilities: (item.capabilities as unknown as Capabilities) || {},
        material_options: (item.material_options as unknown as MaterialOption[]) || [],
      }));

      setCategories(parsed);
    } catch (err) {
      setError(err as Error);
      console.error("Error fetching product categories:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return { categories, isLoading, error, refetch: fetchCategories };
}

export function useProductCategory(slug: string | undefined) {
  const [category, setCategory] = useState<ProductCategory | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (slug) {
      fetchCategory(slug);
    } else {
      setIsLoading(false);
    }
  }, [slug]);

  const fetchCategory = async (categorySlug: string) => {
    try {
      setIsLoading(true);
      const { data, error } = await supabase
        .from("product_categories")
        .select("*")
        .eq("slug", categorySlug)
        .eq("is_active", true)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        const parsed: ProductCategory = {
          ...data,
          format_options: (data.format_options as unknown as FormatOption[]) || [],
          capabilities: (data.capabilities as unknown as Capabilities) || {},
          material_options: (data.material_options as unknown as MaterialOption[]) || [],
        };
        setCategory(parsed);
      } else {
        setCategory(null);
      }
    } catch (err) {
      setError(err as Error);
      console.error("Error fetching product category:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return { category, isLoading, error, refetch: () => slug && fetchCategory(slug) };
}
